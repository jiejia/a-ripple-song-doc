# Configurações do podcast
Esses campos são usados principalmente para gerar o RSS do podcast.

## Como abrir
![Captura de tela das configurações do podcast](/images/settings-1.png)

## Referência dos campos
| Campo | Descrição |
|---|---|
| Podcast RSS URL | Exibe somente leitura a URL RSS atual do podcast. Você pode clicar no campo para selecionar e copiar, ou abrir o feed diretamente. |
| Podcast Title <span style="color: red;">*</span> | Obrigatório. Título do podcast. Se estiver vazio, o RSS volta para o título do site. |
| Podcast Subtitle | Opcional. Subtítulo curto ou slogan do podcast exibido por alguns aplicativos. |
| Podcast Description <span style="color: red;">*</span> | Obrigatório. Descrição em texto simples do podcast. Vai para o RSS como description / resumo do iTunes. |
| Podcast Author (itunes:author) <span style="color: red;">*</span> | Obrigatório. Autor ou produtor do podcast exibido nos diretórios. |
| Owner Name <span style="color: red;">*</span> | Obrigatório. Valor de `<itunes:owner><itunes:name>` para as informações do proprietário. |
| Owner Email <span style="color: red;">*</span> | Obrigatório. Valor de `<itunes:owner><itunes:email>`. Use um endereço que possa receber e-mails de verificação. |
| Podcast Cover (1400-3000px square) <span style="color: red;">*</span> | Obrigatório. Imagem de capa do podcast. Deve ser JPG/PNG, quadrada, 1400-3000 px e menor que 512 KB. |
| Default Explicit Flag <span style="color: red;">*</span> | Obrigatório. Indicador padrão de conteúdo explícito. Escolha clean ou explicit. Os campos do episódio podem sobrescrever. |
| Language (RFC 5646) <span style="color: red;">*</span> | Obrigatório. Idioma do podcast, por exemplo en-US, zh-CN ou ja-JP. |
| Primary Category (Apple Podcasts) <span style="color: red;">*</span> | Obrigatório. Categoria principal do Apple Podcasts. Pelo menos uma categoria deve ser selecionada. |
| Secondary Category (optional) | Opcional. Categoria secundária compatível com alguns diretórios de podcast. |
| Copyright (optional) | Opcional. Aviso de copyright enviado para `<copyright>`. |
| iTunes Type (itunes:type) | Opcional. Tipo do programa no Apple Podcasts. Opções: não definido, episodic, serial. |
| iTunes Title (optional) | Opcional. Título específico para Apple Podcasts. Use apenas se precisar ser diferente do título normal do podcast. |
| iTunes Block (itunes:block) | Opcional. yes oculta todo o podcast no Apple Podcasts. O padrão é no. |
| iTunes Complete (itunes:complete) | Opcional. yes indica que o podcast está completo e não será mais atualizado. O padrão é no. |
| iTunes New Feed URL (itunes:new-feed-url) | Opcional. Use apenas ao migrar para uma nova URL RSS. |
| podcast:locked | Campo Podcasting 2.0. O padrão é yes para evitar migração não autorizada do feed. |
| podcast:locked owner (optional) | Opcional. E-mail do proprietário usado para verificar migrações do feed do Podcasting 2.0. |
| podcast:guid (optional) | Opcional. GUID do Podcasting 2.0. Se ficar vazio, o feed usará a URL do site como fallback. |
| Apple Podcasts Verify Code | Opcional. Código de verificação do Apple Podcasts, enviado como `podcast:txt purpose="applepodcastsverify"`. |
| Podcasting 2.0 Funding Links | Campo composto. Adicione vários links de financiamento ou apoio; cada item inclui URL e label. Se estiver vazio, `podcast:funding` não será gerado. |
| Generator (optional) | Opcional. Conteúdo de `<generator>` do RSS. Se estiver vazio, a tag não será emitida. |

## Observações
- Os campos marcados com <span style="color: red;">*</span> são obrigatórios.
