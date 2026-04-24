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
  | Fichier audio <span style="color: red;">*</span> | Obligatoire. Téléversez un fichier audio ou saisissez une URL audio (https). |
  | Durée (secondes) | Détecté automatiquement à l’enregistrement depuis “Fichier audio”, en secondes, en lecture seule. |
  | Taille audio (octets) | Détecté automatiquement à l’enregistrement depuis “Fichier audio”, en lecture seule. |
  | Type MIME audio | Détecté automatiquement à l’enregistrement depuis “Fichier audio”, en lecture seule, par défaut `audio/mpeg`. |
  | Contenu explicite <span style="color: red;">*</span> | Obligatoire. Choisissez `clean` ou `explicit`. |
  | Type d’épisode <span style="color: red;">*</span> | Obligatoire. Choisissez `full`, `trailer` ou `bonus`. |
  | Numéro d’épisode | Facultatif, mais recommandé. Entier. |
  | Numéro de saison | Facultatif. Entier. |
  | Auteur de l’épisode (remplacement) | Facultatif. Remplace l’auteur du canal pour cet épisode. |
  | Couverture de l’épisode (carrée) | Facultatif. Image carrée, recommandée entre 1400 et 3000 px. Remplace la couverture du canal. |
  | Transcription (facultatif) | Facultatif. Téléversez un fichier de transcription ou saisissez une URL, formats pris en charge vtt/srt/txt/pdf, etc. |
  | Titre iTunes (facultatif) | Facultatif. Valeur de remplacement du titre de l’épisode pour Apple Podcasts. |
  | Chapitres (Podcasting 2.0) | Facultatif. Fichier ou URL JSON des chapitres. |
  | Type MIME des chapitres | Facultatif. Type MIME du fichier de chapitres, par défaut `application/json+chapters`. |
  | Extraits audio (Podcasting 2.0) | Champ composé. Ajoutez un ou plusieurs extraits ; chaque extrait contient l’heure de début, la durée et le titre. |
  | Sous-titre | Facultatif. Court sous-titre iTunes. |
  | Résumé | Facultatif. Résumé iTunes en texte brut. |
  | GUID personnalisé (facultatif) | Facultatif. GUID RSS personnalisé ; si vide, le lien de l’épisode est utilisé. |
  | Blocage iTunes | Facultatif. `yes` masque l’épisode dans Apple Podcasts, valeur par défaut `no`. |
  | Membres | Sélectionnez les membres de l’épisode, généralement administrateurs, auteurs ou éditeurs. |
  | Invités | Sélectionnez les invités de l’épisode, généralement des contributeurs. |

## Notes
- Les champs marqués d’un <span style="color: red;">*</span> sont obligatoires.
