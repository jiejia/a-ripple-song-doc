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
  | Arquivo de áudio <span style="color: red;">*</span> | Obrigatório. Envie um arquivo de áudio ou informe uma URL de áudio (https). |
  | Duração (segundos) | Detectado automaticamente ao salvar a partir de “Audio File”, em segundos, somente leitura. |
  | Tamanho do áudio (bytes) | Detectado automaticamente ao salvar a partir de “Audio File”, somente leitura. |
  | Tipo MIME de áudio | Detectado automaticamente ao salvar a partir de “Audio File”, somente leitura, padrão `audio/mpeg`. |
  | Explícito <span style="color: red;">*</span> | Obrigatório. Escolha `clean` ou `explicit`. |
  | Tipo do episódio <span style="color: red;">*</span> | Obrigatório. Escolha `full`, `trailer` ou `bonus`. |
  | Número do episódio | Opcional, mas recomendado. Inteiro. |
  | Número da temporada | Opcional. Inteiro. |
  | Autor do episódio (substituição) | Opcional. Substitui o autor do canal para este episódio. |
  | Capa do episódio (quadrada) | Opcional. Imagem quadrada, recomendada entre 1400 e 3000 px. Substitui a capa do canal. |
  | Transcrição (opcional) | Opcional. Envie um arquivo de transcrição ou informe uma URL, com suporte a vtt/srt/txt/pdf, etc. |
  | Título do iTunes (opcional) | Opcional. Valor de substituição do título do episódio para Apple Podcasts. |
  | Capítulos (Podcasting 2.0) | Opcional. Arquivo JSON de capítulos ou URL. |
  | Tipo MIME dos capítulos | Opcional. Tipo MIME do arquivo de capítulos, padrão `application/json+chapters`. |
  | Trechos de áudio (Podcasting 2.0) | Campo composto. Adicione um ou mais trechos destacados; cada item inclui hora de início, duração e título. |
  | Subtítulo | Opcional. Subtítulo curto do iTunes. |
  | Resumo | Opcional. Resumo do iTunes em texto simples. |
  | GUID personalizado (opcional) | Opcional. GUID RSS personalizado; se estiver vazio, usa o link do episódio. |
  | Bloqueio do iTunes | Opcional. `yes` oculta o episódio no Apple Podcasts, padrão `no`. |
  | Membros | Selecione os membros do episódio, normalmente administradores, autores ou editores. |
  | Convidados | Selecione os convidados do episódio, normalmente colaboradores. |

## Observações
- Os campos marcados com <span style="color: red;">*</span> são obrigatórios.
