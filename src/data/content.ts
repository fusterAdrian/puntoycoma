export interface Topic {
  title: string;
  summary: string;
  link: string;
}

export interface Episode {
  id: number;
  youtubeId: string | null;
  title: string;
  date: string;
  duration: string;
  description: string;
  topics: Topic[];
}

export interface Host {
  name: string;
  role: string;
  bio: string;
  img: string;
}

export interface Social {
  name: string;
  color: string;
  bg: string;
  link: string;
  desc: string;
}

export const EPISODES: Episode[] = [
  {
    id: 1,
    youtubeId: null,
    title: "IA Generativa: El estado del arte en 2025",
    date: "14 Abr 2025",
    duration: "1h 18min",
    description: "Analizamos dónde estamos con la inteligencia artificial generativa, comparamos los grandes modelos y hablamos de su impacto real en el desarrollo de software.",
    topics: [
      { title: "GPT-4o vs Claude 3.5: Comparativa real", summary: "Probamos ambos modelos en tareas de programación real y compartimos impresiones honestas. Claude destaca en razonamiento largo mientras GPT-4o brilla en multimodalidad.", link: "https://openai.com" },
      { title: "GitHub Copilot y el futuro del coding", summary: "¿Está Copilot reemplazando a los programadores junior? Analizamos estudios recientes y hablamos de nuestra experiencia día a día.", link: "https://github.com/features/copilot" },
      { title: "Gemini 2.0 Flash: La sorpresa de Google", summary: "Google lanza su modelo más rápido y económico. ¿Es el fin del monopolio de OpenAI en el mercado de APIs?", link: "https://deepmind.google" },
    ]
  },
  {
    id: 2,
    youtubeId: null,
    title: "React 19: Todo lo que necesitas saber",
    date: "7 Abr 2025",
    duration: "58min",
    description: "React llega con su versión 19 llena de novedades. Hablamos del nuevo compilador, Server Components y por qué esto cambia el frontend tal como lo conocemos.",
    topics: [
      { title: "React Compiler: El fin de useMemo", summary: "El compilador hace las optimizaciones automáticamente. Decimos adiós a gran parte de useMemo y useCallback en el código del día a día.", link: "https://react.dev" },
      { title: "Server Components en producción", summary: "Next.js y Remix ya los usan en serio. Analizamos los casos de uso reales y cuándo merece la pena adoptarlos.", link: "https://nextjs.org" },
      { title: "React Actions: Formularios más simples", summary: "Las nuevas Actions simplifican enormemente el manejo de formularios y mutaciones de datos sin librerías externas.", link: "https://react.dev" },
    ]
  },
  {
    id: 3,
    youtubeId: null,
    title: "DeepSeek R1: China sacude el tablero de la IA",
    date: "31 Mar 2025",
    duration: "1h 05min",
    description: "DeepSeek lanza R1 y el mundo tech se vuelve loco. Analizamos qué significa para el ecosistema y por qué las acciones de Nvidia cayeron un 17%.",
    topics: [
      { title: "¿Qué es DeepSeek R1 y por qué importa?", summary: "Un modelo entrenado a una fracción del coste que rivaliza con los mejores. Explicamos la arquitectura MoE y el chain-of-thought razonado.", link: "https://deepseek.com" },
      { title: "El impacto en el mercado tech", summary: "Nvidia pierde $600B de capitalización en un día. Analizamos si esto es una corrección real o un susto pasajero para el sector del hardware de IA.", link: "https://www.wsj.com" },
    ]
  },
  {
    id: 4,
    youtubeId: null,
    title: "Rust en 2025: ¿Merece la pena aprenderlo?",
    date: "24 Mar 2025",
    duration: "52min",
    description: "Rust sigue ganando terreno en el kernel de Linux y en Microsoft. ¿Es el momento de aprenderlo o sigue siendo solo para entusiastas?",
    topics: [
      { title: "Rust en el kernel de Linux: El experimento que funciona", summary: "Los primeros drivers en Rust han llegado al kernel estable. Analizamos qué significa esto para el futuro del desarrollo de sistemas.", link: "https://lwn.net" },
      { title: "Microsoft apuesta fuerte por Rust", summary: "Microsoft está reescribiendo partes críticas de Windows en Rust para eliminar vulnerabilidades de memoria. El impacto en la industria es enorme.", link: "https://www.microsoft.com" },
      { title: "¿Es Rust tan difícil como dicen?", summary: "Compartimos recursos y estrategias para aprender Rust de forma efectiva sin frustrarse con el borrow checker.", link: "https://doc.rust-lang.org/book/" },
    ]
  },
  {
    id: 5,
    youtubeId: null,
    title: "TypeScript 5.4 y el futuro del tipado en JS",
    date: "17 Mar 2025",
    duration: "47min",
    description: "TypeScript sigue evolucionando y la comunidad crece sin parar. Analizamos las últimas features y debatimos si JS necesita tipos nativos.",
    topics: [
      { title: "Novedades de TypeScript 5.4", summary: "NoInfer utility type, mejoras en narrowing y nuevas opciones de configuración. Todo lo nuevo con ejemplos prácticos.", link: "https://devblogs.microsoft.com/typescript/" },
      { title: "Tipos nativos en JavaScript: La propuesta TC39", summary: "La propuesta para añadir tipos opcionales avanza en el comité TC39. Analizamos qué significaría esto para el ecosistema.", link: "https://tc39.es" },
    ]
  },
  {
    id: 6,
    youtubeId: null,
    title: "Cursor vs Copilot: El duelo de los editores IA",
    date: "10 Mar 2025",
    duration: "1h 02min",
    description: "Llevamos semanas probando ambos editores a fondo. Hoy compartimos nuestra experiencia honesta y decimos cuál nos ha convencido más.",
    topics: [
      { title: "Cursor: El editor que cambió nuestra forma de trabajar", summary: "La función Composer permite generar y editar múltiples archivos a la vez. Probamos el modo Agent en proyectos reales de producción.", link: "https://cursor.sh" },
      { title: "Copilot en VS Code: ¿Suficiente?", summary: "Microsoft mejora continuamente Copilot. ¿Es suficiente para competir con editores nativamente diseñados para IA como Cursor?", link: "https://code.visualstudio.com" },
      { title: "Windsurf y los nuevos competidores", summary: "El mercado de editores IA está explotando. Repaso rápido a las alternativas que merece la pena probar en 2025.", link: "https://codeium.com/windsurf" },
    ]
  },
  {
    id: 7,
    youtubeId: null,
    title: "Agentes de IA: El próximo gran salto",
    date: "3 Mar 2025",
    duration: "1h 10min",
    description: "Los agentes de IA están pasando de ser un concepto experimental a una realidad. Frameworks, casos de uso reales y los riesgos que nadie menciona.",
    topics: [
      { title: "LangChain vs LlamaIndex: ¿Cuál elegir?", summary: "Los dos frameworks más populares para construir agentes. Comparamos su filosofía, rendimiento y el estado de sus comunidades.", link: "https://langchain.com" },
      { title: "Riesgos en sistemas agénticos", summary: "Un agente que alucina puede tomar acciones reales con consecuencias reales. Hablamos de guardrails y buenas prácticas que todo desarrollador debería conocer.", link: "https://arxiv.org" },
    ]
  },
  {
    id: 8,
    youtubeId: null,
    title: "Open Source en la era de la IA: ¿Quién gana?",
    date: "24 Feb 2025",
    duration: "55min",
    description: "Llama 3, Mistral, Phi-3... el open source en IA está en su mejor momento histórico. Analizamos si puede competir de verdad con los modelos cerrados.",
    topics: [
      { title: "Meta y el impacto de Llama 3", summary: "Meta publica Llama 3 con modelos hasta 400B parámetros. ¿Qué significa esto para la comunidad open source y para las empresas que quieren usar IA sin depender de terceros?", link: "https://llama.meta.com" },
      { title: "Mistral: El campeón europeo del open source", summary: "La startup francesa sigue sorprendiendo con modelos eficientes de altísimo rendimiento. Analizamos su modelo de negocio.", link: "https://mistral.ai" },
    ]
  },
  {
    id: 9,
    youtubeId: null,
    title: "Startups tech de 2025: Las que hay que seguir",
    date: "17 Feb 2025",
    duration: "1h 08min",
    description: "Repasamos las startups tech más interesantes del año, desde infraestructura de IA hasta nuevas herramientas de desarrollo que están cambiando el juego.",
    topics: [
      { title: "Vercel y el ecosistema Next.js", summary: "Vercel sigue dominando el deploy de aplicaciones web. Hablamos de sus últimas features, el crecimiento de Next.js y el rumoreado IPO.", link: "https://vercel.com" },
      { title: "Supabase: El Firebase open source", summary: "Supabase cierra una ronda de $80M y sigue creciendo. ¿Es el backend-as-a-service para los próximos años?", link: "https://supabase.com" },
    ]
  },
  {
    id: 10,
    youtubeId: null,
    title: "¡Episodio piloto! Alejandro y Adrián se presentan",
    date: "10 Feb 2025",
    duration: "38min",
    description: "El primer episodio de Punto y Coma. Nos presentamos, contamos por qué hemos creado este podcast y adelantamos todo lo que viene.",
    topics: [
      { title: "¿Quiénes somos y por qué este podcast?", summary: "Alejandro y Adrián cuentan sus historias en el mundo de la programación y la tecnología, y el por qué de lanzar un podcast ahora.", link: "#" },
      { title: "Lo que viene en Punto y Coma", summary: "Los temas que queremos tratar: IA, programación, tech, productos y debates que nos parecen interesantes. Una hoja de ruta para los próximos meses.", link: "#" },
    ]
  },
];

export const HOSTS: Host[] = [
  {
    name: "Alejandro",
    role: "Co-host",
    bio: "Desarrollador apasionado por el frontend y las nuevas tecnologías. Fan incondicional de React, TypeScript y todo lo que haga la vida del dev más fácil.",
    img: "/images/alejandro.png"
  },
  {
    name: "Adrián",
    role: "Co-host",
    bio: "Ingeniero de software con especial interés en IA y arquitecturas de sistemas. Siempre buscando el próximo gran producto tech que nadie conoce todavía.",
    img: "/images/adrian.png"
  },
];

export const SOCIALS: Social[] = [
  { name: "YouTube", color: "#FF0000", bg: "#FFF2F2", link: "https://www.youtube.com/@PuntoyComa-t2i", desc: "Vídeos completos" },
  { name: "Instagram", color: "#C13584", bg: "#FFF0F8", link: "https://www.instagram.com/puntoycomapodc/", desc: "Clips y novedades" },
  { name: "TikTok", color: "#010101", bg: "#F5F5F5", link: "https://www.tiktok.com/@puntoycomapodcast", desc: "Momentos destacados" },
  { name: "Spotify", color: "#1DB954", bg: "#F0FFF5", link: "https://open.spotify.com/show/4IajFCT7UfJXYdyloHQIKm?si=ba12ed6a231d4243", desc: "Solo audio" },
  { name: "Apple Podcasts", color: "#B150E2", bg: "#F8F0FF", link: "https://podcasts.apple.com/us/podcast/punto-y-coma-el-podcast-de-noticias-de-programaci%C3%B3n/id1783337508", desc: "Solo audio" },
];

export const THUMB_COLORS = ["#A8D4E8","#7BB8D4","#F5C842","#5A9DC0","#B8DCF0","#A8D4E8","#FFD580","#7BB8D4","#5A9DC0","#F5C842"];
