# Gerenciar podcasts

## Adicionar
1. Abra a página de adicionar podcast
![Captura de ajustes do podcast](/images/manage-1.png)
2. Preencha as informações do podcast, envie o arquivo de áudio e a imagem, e então clique em 【Publicar】
![Captura de ajustes do podcast](/images/manage-2.png)

## Editar
1. Abra a página de editar podcast
![Captura de ajustes do podcast](/images/manage-3.png)
2. Edite as informações do podcast e clique em 【Salvar】
![Captura de ajustes do podcast](/images/manage-4.png)

## Referência dos campos

  | Campo | Descrição |
  |---|---|
  | Audio File <span style="color: red;">*</span> | Obrigatório. Envie um arquivo de áudio ou informe uma URL de áudio (https). |
  | Duration (seconds) | Detectado automaticamente ao salvar a partir de “Audio File”, em segundos, somente leitura. |
  | Audio Length (bytes) | Detectado automaticamente ao salvar a partir de “Audio File”, somente leitura. |
  | Audio MIME Type | Detectado automaticamente ao salvar a partir de “Audio File”, somente leitura, padrão `audio/mpeg`. |
  | Explicit <span style="color: red;">*</span> | Obrigatório. Escolha `clean` ou `explicit`. |
  | Episode Type <span style="color: red;">*</span> | Obrigatório. Escolha `full`, `trailer` ou `bonus`. |
  | Episode Number | Opcional, mas recomendado. Inteiro. |
  | Season Number | Opcional. Inteiro. |
  | Episode Author (override) | Opcional. Substitui o autor do canal para este episódio. |
  | Episode Cover (square) | Opcional. Imagem quadrada, recomendada entre 1400 e 3000 px. Substitui a capa do canal. |
  | Transcript (optional) | Opcional. Envie um arquivo de transcrição ou informe uma URL, com suporte a vtt/srt/txt/pdf, etc. |
  | iTunes Title (optional) | Opcional. Valor de substituição do título do episódio para Apple Podcasts. |
  | Chapters (Podcasting 2.0) | Opcional. Arquivo JSON de capítulos ou URL. |
  | Chapters MIME Type | Opcional. Tipo MIME do arquivo de capítulos, padrão `application/json+chapters`. |
  | Soundbites (Podcasting 2.0) | Campo composto. Adicione um ou mais trechos destacados; cada item inclui hora de início, duração e título. |
  | Subtitle | Opcional. Subtítulo curto do iTunes. |
  | Summary | Opcional. Resumo do iTunes em texto simples. |
  | Custom GUID (optional) | Opcional. GUID RSS personalizado; se estiver vazio, usa o link do episódio. |
  | iTunes Block | Opcional. `yes` oculta o episódio no Apple Podcasts, padrão `no`. |
  | Members | Selecione os membros do episódio, normalmente administradores, autores ou editores. |
  | Guests | Selecione os convidados do episódio, normalmente colaboradores. |

## Observações
- Os campos marcados com <span style="color: red;">*</span> são obrigatórios.

