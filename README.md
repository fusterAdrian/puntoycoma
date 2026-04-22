# Punto y Coma — Podcast Website

Sitio web del podcast **Punto y Coma**, desarrollado con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com).

## 🚀 Inicio rápido

### Requisitos
- Node.js 18+
- npm o pnpm

### Instalación

```bash
npm install
```

### Desarrollo local

```bash
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

### Build de producción

```bash
npm run build
```

Los archivos de producción se generan en la carpeta `dist/`.

---

## 🌐 Despliegue en Netlify

### Opción 1: Drag & Drop (más rápido)
1. Ejecuta `npm run build`
2. Arrastra la carpeta `dist/` a [app.netlify.com/drop](https://app.netlify.com/drop)

### Opción 2: Conectar con GitHub (recomendado para actualizaciones continuas)
1. Sube el proyecto a un repositorio de GitHub
2. Ve a [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**
3. Conecta tu repositorio de GitHub
4. Netlify detectará automáticamente la configuración gracias al archivo `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Haz clic en **Deploy site**

---

## 📁 Estructura del proyecto

```
punto-y-coma/
├── public/
│   └── images/          # Imágenes (mascota, hosts)
├── src/
│   ├── components/      # Componentes Astro reutilizables
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── EpisodesSection.astro
│   │   ├── HostsSection.astro
│   │   ├── SocialSection.astro
│   │   ├── ContactSection.astro
│   │   └── Footer.astro
│   ├── data/
│   │   └── content.ts   # ⭐ Episodios, hosts y redes sociales
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── 404.astro
│   │   └── episodio/
│   │       └── [id].astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── netlify.toml
└── package.json
```

---

## ✏️ Cómo actualizar el contenido

### Añadir un nuevo episodio
Edita `src/data/content.ts` y añade un nuevo objeto al array `EPISODES`:

```typescript
{
  id: 11,
  youtubeId: "TU_ID_DE_YOUTUBE", // o null si no hay vídeo aún
  title: "Título del episodio",
  date: "21 Abr 2025",
  duration: "1h 05min",
  description: "Descripción del episodio...",
  topics: [
    {
      title: "Nombre del tema",
      summary: "Resumen del tema tratado.",
      link: "https://enlace-referencia.com"
    }
  ]
}
```

### Activar el reproductor de YouTube
En cada episodio, cambia `youtubeId: null` por el ID del vídeo de YouTube.  
El ID es la parte después de `?v=` en la URL del vídeo.

**Ejemplo:** `https://youtube.com/watch?v=dQw4w9WgXcQ` → `youtubeId: "dQw4w9WgXcQ"`

---

## 🎨 Paleta de colores

| Variable | Color | Uso |
|---|---|---|
| `sky-podcast` | `#A8D4E8` | Hero, fondos secundarios |
| `orange-podcast` | `#F5A623` | Acento, badges, botones |
| `dark` | `#1A1A1A` | Texto, bordes, sombras |
| `cream` | `#F2EDE3` | Sección contacto, fondos suaves |
| `offwhite` | `#FEFDF9` | Fondo principal |
