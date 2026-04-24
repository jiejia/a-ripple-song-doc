# Gestionar podcasts

## Añadir
1. Abre la página de añadir podcast
![Captura de ajustes del podcast](/images/manage-1.png)
2. Rellena la información del podcast, sube el archivo de audio y la imagen, y luego haz clic en 【Publicar】
![Captura de ajustes del podcast](/images/manage-2.png)

## Editar
1. Abre la página de editar podcast
![Captura de ajustes del podcast](/images/manage-3.png)
2. Edita la información del podcast y haz clic en 【Guardar】
![Captura de ajustes del podcast](/images/manage-4.png)

## Referencia de campos

  | Campo | Descripción |
  |---|---|
  | Audio File <span style="color: red;">*</span> | Obligatorio. Sube un archivo de audio o introduce una URL de audio (https). |
  | Duration (seconds) | Se detecta automáticamente al guardar desde “Audio File”, en segundos, de solo lectura. |
  | Audio Length (bytes) | Se detecta automáticamente al guardar desde “Audio File”, de solo lectura. |
  | Audio MIME Type | Se detecta automáticamente al guardar desde “Audio File”, de solo lectura, por defecto `audio/mpeg`. |
  | Explicit <span style="color: red;">*</span> | Obligatorio. Elige `clean` o `explicit`. |
  | Episode Type <span style="color: red;">*</span> | Obligatorio. Elige `full`, `trailer` o `bonus`. |
  | Episode Number | Opcional, pero recomendado. Entero. |
  | Season Number | Opcional. Entero. |
  | Episode Author (override) | Opcional. Sustituye al autor del canal para este episodio. |
  | Episode Cover (square) | Opcional. Imagen cuadrada, recomendada entre 1400 y 3000 px. Sustituye la portada del canal. |
  | Transcript (optional) | Opcional. Sube un archivo de transcripción o introduce una URL, con soporte para vtt/srt/txt/pdf, etc. |
  | iTunes Title (optional) | Opcional. Valor de sustitución del título del episodio para Apple Podcasts. |
  | Chapters (Podcasting 2.0) | Opcional. Archivo JSON de capítulos o URL. |
  | Chapters MIME Type | Opcional. Tipo MIME del archivo de capítulos, por defecto `application/json+chapters`. |
  | Soundbites (Podcasting 2.0) | Campo compuesto. Añade uno o más fragmentos destacados; cada fragmento incluye hora de inicio, duración y título. |
  | Subtitle | Opcional. Subtítulo corto de iTunes. |
  | Summary | Opcional. Resumen de iTunes en texto plano. |
  | Custom GUID (optional) | Opcional. GUID RSS personalizado; si está vacío, se usa el enlace del episodio. |
  | iTunes Block | Opcional. `yes` oculta el episodio en Apple Podcasts, valor predeterminado `no`. |
  | Members | Selecciona los miembros del episodio, normalmente administradores, autores o editores. |
  | Guests | Selecciona los invitados del episodio, normalmente colaboradores. |

## Notas
- Los campos marcados con <span style="color: red;">*</span> son obligatorios.

