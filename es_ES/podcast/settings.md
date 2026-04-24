# Ajustes del podcast
Estos campos se usan principalmente para generar el RSS del podcast.

## Cómo abrirlo
![Captura de ajustes del podcast](/images/settings-1.png)

## Referencia de campos
| Campo | Descripción |
|---|---|
| URL RSS del pódcast | Muestra de solo lectura la URL RSS actual del podcast. Puedes hacer clic en el campo para seleccionarla y copiarla, o abrir el feed directamente. |
| Título del pódcast <span style="color: red;">*</span> | Obligatorio. Título del podcast. Si está vacío, el RSS volverá al título del sitio. |
| Subtítulo del pódcast | Opcional. Subtítulo corto o eslogan del podcast que muestran algunos clientes. |
| Descripción del pódcast <span style="color: red;">*</span> | Obligatorio. Descripción en texto plano del podcast. Se envía al RSS como description / resumen de iTunes. |
| Autor del pódcast (itunes:author) <span style="color: red;">*</span> | Obligatorio. Autor o productor del podcast que aparece en los directorios. |
| Nombre del propietario <span style="color: red;">*</span> | Obligatorio. Valor de `<itunes:owner><itunes:name>` para la información del propietario. |
| Correo del propietario <span style="color: red;">*</span> | Obligatorio. Valor de `<itunes:owner><itunes:email>`. Usa una dirección que pueda recibir correos de verificación. |
| Portada del pódcast (1400-3000px cuadrada) <span style="color: red;">*</span> | Obligatorio. Imagen de portada del podcast. Debe ser JPG/PNG, cuadrada, de 1400-3000 px y menor de 512 KB. |
| Indicador explícito predeterminado <span style="color: red;">*</span> | Obligatorio. Indicador predeterminado de contenido explícito. Elige clean o explicit. Los campos del episodio pueden sobrescribirlo. |
| Idioma (RFC 5646) <span style="color: red;">*</span> | Obligatorio. Idioma del podcast, por ejemplo en-US, zh-CN o ja-JP. |
| Categoría principal (Apple Podcasts) <span style="color: red;">*</span> | Obligatorio. Categoría principal de Apple Podcasts. Debe seleccionarse al menos una. |
| Categoría secundaria (opcional) | Opcional. Categoría secundaria compatible con algunos directorios de podcast. |
| Derechos de autor (opcional) | Opcional. Aviso de copyright que se envía a `<copyright>`. |
| Tipo de iTunes (itunes:type) | Opcional. Tipo de programa de Apple Podcasts. Opciones: sin definir, episodic, serial. |
| Título de iTunes (opcional) | Opcional. Título específico para Apple Podcasts. Úsalo solo si debe diferir del título normal del podcast. |
| Bloqueo de iTunes (itunes:block) | Opcional. yes oculta todo el podcast en Apple Podcasts. Valor predeterminado: no. |
| Finalizado de iTunes (itunes:complete) | Opcional. yes indica que el podcast está completo y no se actualizará más. Valor predeterminado: no. |
| Nueva URL RSS de iTunes (itunes:new-feed-url) | Opcional. Úsalo solo al migrar a una nueva URL RSS. |
| podcast:locked | Campo de Podcasting 2.0. Valor predeterminado: yes para evitar migraciones no autorizadas del feed. |
| propietario de podcast:locked (opcional) | Opcional. Correo del propietario usado para verificar migraciones del feed de Podcasting 2.0. |
| podcast:guid (opcional) | Opcional. GUID de Podcasting 2.0. Si está vacío, el feed usará la URL del sitio como respaldo. |
| Código de verificación de Apple Podcasts | Opcional. Código de verificación de Apple Podcasts, enviado como `podcast:txt purpose="applepodcastsverify"`. |
| Enlaces de financiación de Podcasting 2.0 | Campo compuesto. Añade varios enlaces de financiación o apoyo; cada elemento incluye URL y etiqueta. Si está vacío, no se genera `podcast:funding`. |
| Generador (opcional) | Opcional. Contenido de `<generator>` del RSS. Si está vacío, la etiqueta no se emite. |

## Notas
- Los campos marcados con <span style="color: red;">*</span> son obligatorios.
