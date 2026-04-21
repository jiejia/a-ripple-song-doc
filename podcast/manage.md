# Managing Podcasts

## Add a Podcast

1. Go to the Add Podcast page.

![Podcast add page screenshot](/images/manage-1.png)

2. Fill in the podcast information, upload the podcast audio file and image, then click **Publish**.

![Podcast fields screenshot](/images/manage-2.png)

## Edit a Podcast

1. Go to the Edit Podcast page.

![Podcast edit page screenshot](/images/manage-3.png)

2. Edit the podcast information, then click **Save**.

![Podcast save screenshot](/images/manage-4.png)

## Field Reference

| Field | Description |
|---|---|
| Audio File <span style="color: red;">*</span> | Required. Upload an audio file or enter an audio file URL. |
| Duration (seconds) | Auto-detected. Read from Audio File on save. Unit: seconds. Read-only. |
| Audio Length (bytes) | Auto-detected. Read from Audio File on save. Unit: bytes. Read-only. |
| Audio MIME Type | Auto-detected. Read from Audio File on save. Read-only. Defaults to audio/mpeg. |
| Explicit <span style="color: red;">*</span> | Required. Choose clean or explicit. |
| Episode Type <span style="color: red;">*</span> | Required. Choose full, trailer, or bonus. |
| Episode Number | Optional, but recommended. Integer. |
| Season Number | Optional. Integer. |
| Episode Author (override) | Optional. Overrides the channel author for the current episode only. |
| Episode Cover (square) | Optional. Episode cover image. A square image between 1400 and 3000px is recommended. Overrides the channel cover. |
| Transcript (optional) | Optional. Upload a transcript file or enter a transcript URL. Supports vtt, srt, txt, pdf, and other formats. |
| iTunes Title (optional) | Optional. Episode title override for Apple Podcasts. |
| Chapters (Podcasting 2.0) | Optional. Chapter JSON file or URL. |
| Chapters MIME Type | Optional. Chapter file MIME type. Defaults to application/json+chapters. |
| Soundbites (Podcasting 2.0) | Compound field. Add one or more highlight clips; each clip includes start time, duration, and title. |
| Subtitle | Optional. Short iTunes episode subtitle. |
| Summary | Optional. Plain-text iTunes episode summary. |
| Custom GUID (optional) | Optional. Custom RSS GUID. If empty, the episode link is used. |
| iTunes Block | Optional. yes hides the episode from Apple Podcasts. Defaults to no. |
| Members | Select members for the current episode, usually administrators, authors, or editors. |
| Guests | Select guests for the current episode, usually contributors. |

## Notes

- Fields marked with <span style="color: red;">*</span> are required.
