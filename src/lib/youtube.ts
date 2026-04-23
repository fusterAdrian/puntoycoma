import type { Episode } from '../data/content';

const API_KEY = import.meta.env.YOUTUBE_API_KEY;
const CHANNEL_HANDLE = 'PuntoyComa-t2i';

function parseDuration(iso: string): string {
  const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return '';
  const h = parseInt(match[1] || '0');
  const m = parseInt(match[2] || '0');
  if (h > 0) return `${h}h ${m}min`;
  return `${m}min`;
}

function durationMinutes(iso: string): number {
  const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;
  return parseInt(match[1] || '0') * 60 + parseInt(match[2] || '0');
}

function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  const str = date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  // Capitalize first letter of month: "14 abr 2025" → "14 Abr 2025"
  return str.replace(/\b([a-z])/, (c) => c.toUpperCase());
}

function firstParagraph(text: string, maxLen = 220): string {
  const first = text.split(/\n\n|\n/).find((p) => p.trim().length > 20) ?? text;
  const clean = first.trim().replace(/https?:\/\/\S+/g, '').trim();
  return clean.length > maxLen ? clean.slice(0, maxLen).trimEnd() + '…' : clean;
}

export async function fetchYouTubeEpisodes(): Promise<Episode[]> {
  if (!API_KEY) {
    console.warn('[YouTube] YOUTUBE_API_KEY no configurada — sin episodios dinámicos');
    return [];
  }

  // 1. Canal → uploads playlist ID
  const channelRes = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=${CHANNEL_HANDLE}&key=${API_KEY}`
  );
  const channelData = await channelRes.json();

  if (!channelData.items?.length) {
    console.error('[YouTube] Canal no encontrado:', channelData);
    return [];
  }

  const uploadsId: string = channelData.items[0].contentDetails.relatedPlaylists.uploads;

  // 2. Vídeos del canal (máx 50)
  const playlistRes = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsId}&maxResults=50&key=${API_KEY}`
  );
  const playlistData = await playlistRes.json();
  const items: any[] = playlistData.items ?? [];

  if (!items.length) return [];

  // 3. Duración de cada vídeo
  const videoIds = items.map((i) => i.snippet.resourceId.videoId).join(',');
  const durRes = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoIds}&key=${API_KEY}`
  );
  const durData = await durRes.json();

  const durationMap: Record<string, string> = {};
  const rawDurationMap: Record<string, string> = {};
  for (const v of durData.items ?? []) {
    durationMap[v.id] = parseDuration(v.contentDetails.duration);
    rawDurationMap[v.id] = v.contentDetails.duration;
  }

  // Descartar Shorts y vídeos menores de 20 minutos
  const episodes = items.filter((item) => {
    const videoId = item.snippet.resourceId.videoId;
    return durationMinutes(rawDurationMap[videoId] ?? '') >= 20;
  });

  // 4. Construir episodios (más antiguo = EP. 01, más reciente = EP. N)
  return episodes.map((item, index) => {
    const s = item.snippet;
    const videoId: string = s.resourceId.videoId;
    const thumbnail: string =
      s.thumbnails?.maxres?.url ??
      s.thumbnails?.standard?.url ??
      s.thumbnails?.high?.url ??
      s.thumbnails?.medium?.url ??
      '';

    return {
      id: episodes.length - index,
      youtubeId: videoId,
      title: s.title,
      date: formatDate(s.publishedAt),
      duration: durationMap[videoId] ?? '',
      description: firstParagraph(s.description),
      thumbnail,
      topics: [],
      type: s.title.includes('Punto y Coma #E') ? 'interview' : 'episode',
    };
  });
}
