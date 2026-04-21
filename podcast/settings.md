# Podcast Settings

These fields are mainly used for podcast RSS generation.

## How to Open

![Podcast settings screenshot](/images/settings-1.png)

## Field Reference

| Field | Description |
|---|---|
| Podcast RSS URL | Read-only display of the current podcast RSS URL. You can click the input to select and copy it, or open the feed. |
| Podcast Title <span style="color: red;">*</span> | Required. Podcast title. If empty, the RSS feed falls back to the site title. |
| Podcast Subtitle | Optional. Short podcast subtitle or tagline shown by some clients. |
| Podcast Description <span style="color: red;">*</span> | Required. Plain-text podcast description. Output to RSS description / iTunes summary. |
| Podcast Author (itunes:author) <span style="color: red;">*</span> | Required. Podcast author or producer shown in podcast directories. |
| Owner Name <span style="color: red;">*</span> | Required. RSS `<itunes:owner><itunes:name>` value for podcast owner information. |
| Owner Email <span style="color: red;">*</span> | Required. RSS `<itunes:owner><itunes:email>` value. Use an email address that can receive verification messages. |
| Podcast Cover (1400-3000px square) <span style="color: red;">*</span> | Required. Podcast cover image. Must be JPG/PNG, square, 1400-3000px, and under 512KB. |
| Default Explicit Flag <span style="color: red;">*</span> | Required. Default explicit content flag. Choose clean or explicit. Episode fields can override it. |
| Language (RFC 5646) <span style="color: red;">*</span> | Required. Podcast language, for example en-US, zh-CN, or ja-JP. |
| Primary Category (Apple Podcasts) <span style="color: red;">*</span> | Required. Primary Apple Podcasts category. At least one category must be selected. |
| Secondary Category (optional) | Optional. Secondary category supported by some podcast directories. |
| Copyright (optional) | Optional. Copyright statement output to RSS `<copyright>`. |
| iTunes Type (itunes:type) | Optional. Apple Podcasts show type. Options: unset, episodic, serial. |
| iTunes Title (optional) | Optional. Apple Podcasts-specific title. Use only when it should differ from the normal podcast title. |
| iTunes Block (itunes:block) | Optional. yes hides the entire show from Apple Podcasts. Defaults to no. |
| iTunes Complete (itunes:complete) | Optional. yes means the show is complete and will not be updated. Defaults to no. |
| iTunes New Feed URL (itunes:new-feed-url) | Optional. Use only when migrating to a new RSS URL. |
| podcast:locked | Podcasting 2.0 field. Defaults to yes to prevent unauthorized feed migration. |
| podcast:locked owner (optional) | Optional. Owner email used for Podcasting 2.0 feed migration verification. |
| podcast:guid (optional) | Optional. Podcasting 2.0 GUID. If empty, the feed uses the site URL as a fallback. |
| Apple Podcasts Verify Code | Optional. Apple Podcasts verification code, output as `podcast:txt purpose="applepodcastsverify"`. |
| Podcasting 2.0 Funding Links | Compound field. Add multiple funding or support links; each item includes URL and Label. If empty, `podcast:funding` is not output. |
| Generator (optional) | Optional. RSS `<generator>` content. If empty, the tag is not output. |

## Notes

- Fields marked with <span style="color: red;">*</span> are required.
