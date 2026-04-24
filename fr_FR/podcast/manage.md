# Gérer les podcasts

## Ajouter
1. Ouvrez la page d’ajout de podcast
![Capture des réglages du podcast](/images/manage-1.png)
2. Renseignez les informations du podcast, importez le fichier audio et l’image, puis cliquez sur 【Publier】
![Capture des réglages du podcast](/images/manage-2.png)

## Modifier
1. Ouvrez la page de modification de podcast
![Capture des réglages du podcast](/images/manage-3.png)
2. Modifiez les informations du podcast puis cliquez sur 【Enregistrer】
![Capture des réglages du podcast](/images/manage-4.png)

## Référence des champs

  | Champ | Description |
  |---|---|
  | Audio File <span style="color: red;">*</span> | Obligatoire. Téléversez un fichier audio ou saisissez une URL audio (https). |
  | Duration (seconds) | Détecté automatiquement à l’enregistrement depuis “Audio File”, en secondes, en lecture seule. |
  | Audio Length (bytes) | Détecté automatiquement à l’enregistrement depuis “Audio File”, en lecture seule. |
  | Audio MIME Type | Détecté automatiquement à l’enregistrement depuis “Audio File”, en lecture seule, par défaut `audio/mpeg`. |
  | Explicit <span style="color: red;">*</span> | Obligatoire. Choisissez `clean` ou `explicit`. |
  | Episode Type <span style="color: red;">*</span> | Obligatoire. Choisissez `full`, `trailer` ou `bonus`. |
  | Episode Number | Facultatif, mais recommandé. Entier. |
  | Season Number | Facultatif. Entier. |
  | Episode Author (override) | Facultatif. Remplace l’auteur du canal pour cet épisode. |
  | Episode Cover (square) | Facultatif. Image carrée, recommandée entre 1400 et 3000 px. Remplace la couverture du canal. |
  | Transcript (optional) | Facultatif. Téléversez un fichier de transcription ou saisissez une URL, formats pris en charge vtt/srt/txt/pdf, etc. |
  | iTunes Title (optional) | Facultatif. Valeur de remplacement du titre de l’épisode pour Apple Podcasts. |
  | Chapters (Podcasting 2.0) | Facultatif. Fichier ou URL JSON des chapitres. |
  | Chapters MIME Type | Facultatif. Type MIME du fichier de chapitres, par défaut `application/json+chapters`. |
  | Soundbites (Podcasting 2.0) | Champ composé. Ajoutez un ou plusieurs extraits ; chaque extrait contient l’heure de début, la durée et le titre. |
  | Subtitle | Facultatif. Court sous-titre iTunes. |
  | Summary | Facultatif. Résumé iTunes en texte brut. |
  | Custom GUID (optional) | Facultatif. GUID RSS personnalisé ; si vide, le lien de l’épisode est utilisé. |
  | iTunes Block | Facultatif. `yes` masque l’épisode dans Apple Podcasts, valeur par défaut `no`. |
  | Members | Sélectionnez les membres de l’épisode, généralement administrateurs, auteurs ou éditeurs. |
  | Guests | Sélectionnez les invités de l’épisode, généralement des contributeurs. |

## Notes
- Les champs marqués d’un <span style="color: red;">*</span> sont obligatoires.

