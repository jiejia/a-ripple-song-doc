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
  | Archivo de audio <span style="color: red;">*</span> | Obligatorio. Sube un archivo de audio o introduce una URL de audio (https). |
  | Duración (segundos) | Se detecta automáticamente al guardar desde “Audio File”, en segundos, de solo lectura. |
  | Longitud de audio (bytes) | Se detecta automáticamente al guardar desde “Audio File”, de solo lectura. |
  | Tipo MIME de audio | Se detecta automáticamente al guardar desde “Audio File”, de solo lectura, por defecto `audio/mpeg`. |
  | Explícito <span style="color: red;">*</span> | Obligatorio. Elige `clean` o `explicit`. |
  | Tipo de episodio <span style="color: red;">*</span> | Obligatorio. Elige `full`, `trailer` o `bonus`. |
  | Número de episodio | Opcional, pero recomendado. Entero. |
  | Número de temporada | Opcional. Entero. |
  | Autor del episodio (anulación) | Opcional. Sustituye al autor del canal para este episodio. |
  | Portada del episodio (cuadrada) | Opcional. Imagen cuadrada, recomendada entre 1400 y 3000 px. Sustituye la portada del canal. |
  | Transcripción (opcional) | Opcional. Sube un archivo de transcripción o introduce una URL, con soporte para vtt/srt/txt/pdf, etc. |
  | Título de iTunes (opcional) | Opcional. Valor de sustitución del título del episodio para Apple Podcasts. |
  | Capítulos (Podcasting 2.0) | Opcional. Archivo JSON de capítulos o URL. |
  | Tipo MIME de capítulos | Opcional. Tipo MIME del archivo de capítulos, por defecto `application/json+chapters`. |
  | Fragmentos sonoros (Podcasting 2.0) | Campo compuesto. Añade uno o más fragmentos destacados; cada fragmento incluye hora de inicio, duración y título. |
  | Subtítulo | Opcional. Subtítulo corto de iTunes. |
  | Resumen | Opcional. Resumen de iTunes en texto plano. |
  | GUID personalizado (opcional) | Opcional. GUID RSS personalizado; si está vacío, se usa el enlace del episodio. |
  | Bloqueo de iTunes | Opcional. `yes` oculta el episodio en Apple Podcasts, valor predeterminado `no`. |
  | Miembros | Selecciona los miembros del episodio, normalmente administradores, autores o editores. |
  | Invitados | Selecciona los invitados del episodio, normalmente colaboradores. |

## Notas
- Los campos marcados con <span style="color: red;">*</span> son obligatorios.
