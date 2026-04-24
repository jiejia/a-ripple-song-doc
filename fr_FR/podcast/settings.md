# Paramètres du podcast
Ces champs servent principalement à générer le flux RSS du podcast.

## Comment ouvrir
![Capture des paramètres du podcast](/images/settings-1.png)

## Référence des champs
| Champ | Description |
|---|---|
| Podcast RSS URL | Affichage en lecture seule de l'URL RSS actuelle du podcast. Vous pouvez cliquer dans le champ pour la sélectionner et la copier, ou ouvrir le flux directement. |
| Podcast Title <span style="color: red;">*</span> | Obligatoire. Titre du podcast. Si vide, le flux RSS retombera sur le titre du site. |
| Podcast Subtitle | Facultatif. Court sous-titre ou slogan du podcast affiché par certains clients. |
| Podcast Description <span style="color: red;">*</span> | Obligatoire. Description texte brut du podcast. Elle est envoyée dans la description RSS / le résumé iTunes. |
| Podcast Author (itunes:author) <span style="color: red;">*</span> | Obligatoire. Auteur ou producteur du podcast affiché dans les annuaires. |
| Owner Name <span style="color: red;">*</span> | Obligatoire. Valeur de `<itunes:owner><itunes:name>` pour les informations du propriétaire. |
| Owner Email <span style="color: red;">*</span> | Obligatoire. Valeur de `<itunes:owner><itunes:email>`. Utilisez une adresse qui peut recevoir les e-mails de vérification. |
| Podcast Cover (1400-3000px square) <span style="color: red;">*</span> | Obligatoire. Image de couverture du podcast. JPG/PNG, carrée, 1400-3000 px, et inférieure à 512 KB. |
| Default Explicit Flag <span style="color: red;">*</span> | Obligatoire. Indicateur de contenu explicite par défaut. Choisissez clean ou explicit. Les champs des épisodes peuvent le remplacer. |
| Language (RFC 5646) <span style="color: red;">*</span> | Obligatoire. Langue du podcast, par exemple en-US, zh-CN ou ja-JP. |
| Primary Category (Apple Podcasts) <span style="color: red;">*</span> | Obligatoire. Catégorie principale Apple Podcasts. Au moins une catégorie doit être sélectionnée. |
| Secondary Category (optional) | Facultatif. Catégorie secondaire prise en charge par certains annuaires de podcasts. |
| Copyright (optional) | Facultatif. Déclaration de copyright envoyée dans `<copyright>`. |
| iTunes Type (itunes:type) | Facultatif. Type de podcast Apple Podcasts. Options : non défini, episodic, serial. |
| iTunes Title (optional) | Facultatif. Titre spécifique à Apple Podcasts. À utiliser uniquement s'il doit différer du titre normal du podcast. |
| iTunes Block (itunes:block) | Facultatif. yes masque l'ensemble du podcast dans Apple Podcasts. Valeur par défaut : no. |
| iTunes Complete (itunes:complete) | Facultatif. yes indique que le podcast est terminé et ne sera plus mis à jour. Valeur par défaut : no. |
| iTunes New Feed URL (itunes:new-feed-url) | Facultatif. À utiliser uniquement lors d'une migration vers une nouvelle URL RSS. |
| podcast:locked | Champ Podcasting 2.0. Valeur par défaut : yes pour empêcher une migration de flux non autorisée. |
| podcast:locked owner (optional) | Facultatif. E-mail du propriétaire utilisé pour vérifier les migrations de flux Podcasting 2.0. |
| podcast:guid (optional) | Facultatif. GUID Podcasting 2.0. S'il est vide, le flux utilisera l'URL du site comme solution de secours. |
| Apple Podcasts Verify Code | Facultatif. Code de vérification Apple Podcasts, envoyé sous la forme `podcast:txt purpose="applepodcastsverify"`. |
| Podcasting 2.0 Funding Links | Champ composite. Ajoutez plusieurs liens de financement ou de soutien ; chaque entrée comprend une URL et un libellé. S'il est vide, `podcast:funding` n'est pas généré. |
| Generator (optional) | Facultatif. Contenu de `<generator>` RSS. Si vide, la balise n'est pas générée. |

## Notes
- Les champs marqués d'un <span style="color: red;">*</span> sont obligatoires.
