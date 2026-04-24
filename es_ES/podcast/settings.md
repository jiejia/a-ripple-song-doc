# Ajustes del podcast
Estos campos se usan principalmente para generar el RSS del podcast.

## Cómo abrirlo
![Captura de ajustes del podcast](/images/settings-1.png)

## Referencia de campos
| Campo | Descripción |
|---|---|
| Podcast RSS URL | Muestra de solo lectura la URL RSS actual del podcast. Puedes hacer clic en el campo para seleccionarla y copiarla, o abrir el feed directamente. |
| Podcast Title <span style="color: red;">*</span> | Obligatorio. Título del podcast. Si está vacío, el RSS volverá al título del sitio. |
| Podcast Subtitle | Opcional. Subtítulo corto o eslogan del podcast que muestran algunos clientes. |
| Podcast Description <span style="color: red;">*</span> | Obligatorio. Descripción en texto plano del podcast. Se envía al RSS como description / resumen de iTunes. |
| Podcast Author (itunes:author) <span style="color: red;">*</span> | Obligatorio. Autor o productor del podcast que aparece en los directorios. |
| Owner Name <span style="color: red;">*</span> | Obligatorio. Valor de `<itunes:owner><itunes:name>` para la información del propietario. |
| Owner Email <span style="color: red;">*</span> | Obligatorio. Valor de `<itunes:owner><itunes:email>`. Usa una dirección que pueda recibir correos de verificación. |
| Podcast Cover (1400-3000px square) <span style="color: red;">*</span> | Obligatorio. Imagen de portada del podcast. Debe ser JPG/PNG, cuadrada, de 1400-3000 px y menor de 512 KB. |
| Default Explicit Flag <span style="color: red;">*</span> | Obligatorio. Indicador predeterminado de contenido explícito. Elige clean o explicit. Los campos del episodio pueden sobrescribirlo. |
| Language (RFC 5646) <span style="color: red;">*</span> | Obligatorio. Idioma del podcast, por ejemplo en-US, zh-CN o ja-JP. |
| Primary Category (Apple Podcasts) <span style="color: red;">*</span> | Obligatorio. Categoría principal de Apple Podcasts. Debe seleccionarse al menos una. |
| Secondary Category (optional) | Opcional. Categoría secundaria compatible con algunos directorios de podcast. |
| Copyright (optional) | Opcional. Aviso de copyright que se envía a `<copyright>`. |
| iTunes Type (itunes:type) | Opcional. Tipo de programa de Apple Podcasts. Opciones: sin definir, episodic, serial. |
| iTunes Title (optional) | Opcional. Título específico para Apple Podcasts. Úsalo solo si debe diferir del título normal del podcast. |
| iTunes Block (itunes:block) | Opcional. yes oculta todo el podcast en Apple Podcasts. Valor predeterminado: no. |
| iTunes Complete (itunes:complete) | Opcional. yes indica que el podcast está completo y no se actualizará más. Valor predeterminado: no. |
| iTunes New Feed URL (itunes:new-feed-url) | Opcional. Úsalo solo al migrar a una nueva URL RSS. |
| podcast:locked | Campo de Podcasting 2.0. Valor predeterminado: yes para evitar migraciones no autorizadas del feed. |
| podcast:locked owner (optional) | Opcional. Correo del propietario usado para verificar migraciones del feed de Podcasting 2.0. |
| podcast:guid (optional) | Opcional. GUID de Podcasting 2.0. Si está vacío, el feed usará la URL del sitio como respaldo. |
| Apple Podcasts Verify Code | Opcional. Código de verificación de Apple Podcasts, enviado como `podcast:txt purpose="applepodcastsverify"`. |
| Podcasting 2.0 Funding Links | Campo compuesto. Añade varios enlaces de financiación o apoyo; cada elemento incluye URL y etiqueta. Si está vacío, no se genera `podcast:funding`. |
| Generator (optional) | Opcional. Contenido de `<generator>` del RSS. Si está vacío, la etiqueta no se emite. |

## Notas
- Los campos marcados con <span style="color: red;">*</span> son obligatorios.
