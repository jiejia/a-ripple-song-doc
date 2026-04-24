# Paramètres du podcast
Ces champs servent principalement à générer le flux RSS du podcast.

## Comment ouvrir
![Capture des paramètres du podcast](/images/settings-1.png)

## Référence des champs
| Champ | Description |
|---|---|
| URL RSS du podcast | Affichage en lecture seule de l'URL RSS actuelle du podcast. Vous pouvez cliquer dans le champ pour la sélectionner et la copier, ou ouvrir le flux directement. |
| Titre du podcast <span style="color: red;">*</span> | Obligatoire. Titre du podcast. Si vide, le flux RSS retombera sur le titre du site. |
| Sous-titre du podcast | Facultatif. Court sous-titre ou slogan du podcast affiché par certains clients. |
| Description du podcast <span style="color: red;">*</span> | Obligatoire. Description texte brut du podcast. Elle est envoyée dans la description RSS / le résumé iTunes. |
| Auteur du podcast (itunes:author) <span style="color: red;">*</span> | Obligatoire. Auteur ou producteur du podcast affiché dans les annuaires. |
| Nom du propriétaire <span style="color: red;">*</span> | Obligatoire. Valeur de `<itunes:owner><itunes:name>` pour les informations du propriétaire. |
| E-mail du propriétaire <span style="color: red;">*</span> | Obligatoire. Valeur de `<itunes:owner><itunes:email>`. Utilisez une adresse qui peut recevoir les e-mails de vérification. |
| Couverture du podcast (1400-3000px carrée) <span style="color: red;">*</span> | Obligatoire. Image de couverture du podcast. JPG/PNG, carrée, 1400-3000 px, et inférieure à 512 KB. |
| Indicateur explicite par défaut <span style="color: red;">*</span> | Obligatoire. Indicateur de contenu explicite par défaut. Choisissez clean ou explicit. Les champs des épisodes peuvent le remplacer. |
| Langue (RFC 5646) <span style="color: red;">*</span> | Obligatoire. Langue du podcast, par exemple en-US, zh-CN ou ja-JP. |
| Catégorie principale (Apple Podcasts) <span style="color: red;">*</span> | Obligatoire. Catégorie principale Apple Podcasts. Au moins une catégorie doit être sélectionnée. |
| Catégorie secondaire (facultatif) | Facultatif. Catégorie secondaire prise en charge par certains annuaires de podcasts. |
| Copyright (facultatif) | Facultatif. Déclaration de copyright envoyée dans `<copyright>`. |
| Type iTunes (itunes:type) | Facultatif. Type de podcast Apple Podcasts. Options : non défini, episodic, serial. |
| Titre iTunes (facultatif) | Facultatif. Titre spécifique à Apple Podcasts. À utiliser uniquement s'il doit différer du titre normal du podcast. |
| Blocage iTunes (itunes:block) | Facultatif. yes masque l'ensemble du podcast dans Apple Podcasts. Valeur par défaut : no. |
| Podcast terminé (itunes:complete) | Facultatif. yes indique que le podcast est terminé et ne sera plus mis à jour. Valeur par défaut : no. |
| Nouvelle URL RSS iTunes (itunes:new-feed-url) | Facultatif. À utiliser uniquement lors d'une migration vers une nouvelle URL RSS. |
| podcast:locked | Champ Podcasting 2.0. Valeur par défaut : yes pour empêcher une migration de flux non autorisée. |
| Propriétaire de podcast:locked (facultatif) | Facultatif. E-mail du propriétaire utilisé pour vérifier les migrations de flux Podcasting 2.0. |
| podcast:guid (facultatif) | Facultatif. GUID Podcasting 2.0. S'il est vide, le flux utilisera l'URL du site comme solution de secours. |
| Code de vérification Apple Podcasts | Facultatif. Code de vérification Apple Podcasts, envoyé sous la forme `podcast:txt purpose="applepodcastsverify"`. |
| Liens de financement Podcasting 2.0 | Champ composite. Ajoutez plusieurs liens de financement ou de soutien ; chaque entrée comprend une URL et un libellé. S'il est vide, `podcast:funding` n'est pas généré. |
| Générateur (facultatif) | Facultatif. Contenu de `<generator>` RSS. Si vide, la balise n'est pas générée. |

## Notes
- Les champs marqués d'un <span style="color: red;">*</span> sont obligatoires.
