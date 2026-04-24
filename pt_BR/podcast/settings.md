# Configurações do podcast
Esses campos são usados principalmente para gerar o RSS do podcast.

## Como abrir
![Captura de tela das configurações do podcast](/images/settings-1.png)

## Referência dos campos
| Campo | Descrição |
|---|---|
| URL RSS do podcast | Exibe somente leitura a URL RSS atual do podcast. Você pode clicar no campo para selecionar e copiar, ou abrir o feed diretamente. |
| Título do podcast <span style="color: red;">*</span> | Obrigatório. Título do podcast. Se estiver vazio, o RSS volta para o título do site. |
| Subtítulo do podcast | Opcional. Subtítulo curto ou slogan do podcast exibido por alguns aplicativos. |
| Descrição do podcast <span style="color: red;">*</span> | Obrigatório. Descrição em texto simples do podcast. Vai para o RSS como description / resumo do iTunes. |
| Autor do podcast (itunes:author) <span style="color: red;">*</span> | Obrigatório. Autor ou produtor do podcast exibido nos diretórios. |
| Nome do proprietário <span style="color: red;">*</span> | Obrigatório. Valor de `<itunes:owner><itunes:name>` para as informações do proprietário. |
| E-mail do proprietário <span style="color: red;">*</span> | Obrigatório. Valor de `<itunes:owner><itunes:email>`. Use um endereço que possa receber e-mails de verificação. |
| Capa do podcast (1400-3000px quadrada) <span style="color: red;">*</span> | Obrigatório. Imagem de capa do podcast. Deve ser JPG/PNG, quadrada, 1400-3000 px e menor que 512 KB. |
| Sinalizador padrão explícito <span style="color: red;">*</span> | Obrigatório. Indicador padrão de conteúdo explícito. Escolha clean ou explicit. Os campos do episódio podem sobrescrever. |
| Idioma (RFC 5646) <span style="color: red;">*</span> | Obrigatório. Idioma do podcast, por exemplo en-US, zh-CN ou ja-JP. |
| Categoria principal (Apple Podcasts) <span style="color: red;">*</span> | Obrigatório. Categoria principal do Apple Podcasts. Pelo menos uma categoria deve ser selecionada. |
| Categoria secundária (opcional) | Opcional. Categoria secundária compatível com alguns diretórios de podcast. |
| Direitos autorais (opcional) | Opcional. Aviso de copyright enviado para `<copyright>`. |
| Tipo do iTunes (itunes:type) | Opcional. Tipo do programa no Apple Podcasts. Opções: não definido, episodic, serial. |
| Título do iTunes (opcional) | Opcional. Título específico para Apple Podcasts. Use apenas se precisar ser diferente do título normal do podcast. |
| Bloqueio do iTunes (itunes:block) | Opcional. yes oculta todo o podcast no Apple Podcasts. O padrão é no. |
| Concluído do iTunes (itunes:complete) | Opcional. yes indica que o podcast está completo e não será mais atualizado. O padrão é no. |
| Nova URL do feed do iTunes (itunes:new-feed-url) | Opcional. Use apenas ao migrar para uma nova URL RSS. |
| podcast:locked | Campo Podcasting 2.0. O padrão é yes para evitar migração não autorizada do feed. |
| proprietário de podcast:locked (opcional) | Opcional. E-mail do proprietário usado para verificar migrações do feed do Podcasting 2.0. |
| podcast:guid (opcional) | Opcional. GUID do Podcasting 2.0. Se ficar vazio, o feed usará a URL do site como fallback. |
| Código de verificação do Apple Podcasts | Opcional. Código de verificação do Apple Podcasts, enviado como `podcast:txt purpose="applepodcastsverify"`. |
| Links de financiamento do Podcasting 2.0 | Campo composto. Adicione vários links de financiamento ou apoio; cada item inclui URL e label. Se estiver vazio, `podcast:funding` não será gerado. |
| Gerador (opcional) | Opcional. Conteúdo de `<generator>` do RSS. Se estiver vazio, a tag não será emitida. |

## Observações
- Os campos marcados com <span style="color: red;">*</span> são obrigatórios.
