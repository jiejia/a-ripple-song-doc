---
title: Podcast Plugin
description: Core functionality provided by the A Ripple Song Podcast plugin
---

# A Ripple Song Podcast Plugin

The **A Ripple Song Podcast** plugin (`a-ripple-song-podcast`) is the engine behind your podcast site. It works independently of the theme to ensure your data is portable and secure.

## Core Features

### 1. Episode Management
The plugin registers a custom post type `ars_episode`. This allows you to manage episodes separately from your regular blog posts.
- **Season & Episode Numbers**: Organize your content structuredly.
- **Guest Management**: Associate guests with episodes.
- **Duration & File Size**: Automatically extracted from your audio files.

### 2. RSS Feed Generation
A compliant RSS feed is crucial for podcast distribution.
- **Feed URL**: Typically located at `/feed/podcast` (or configured slug).
- **iTunes Tags**: Includes all necessary `itunes:*` tags (Cover, Explicit, Category, etc.).
- **Podcasting 2.0**: Supports modern namespaces like `podcast:transcript` and `podcast:person`.

### 3. Player Integration
While the Theme handles the *visual* player, the Plugin provides the *data* required for playback:
- Audio file URL
- Mime type
- Duration
- Cover art

## Configuration

Go to **Settings → Podcast** in your WordPress admin dashboard to configure:

- **Podcast Title & Description**: Overrides site settings if needed.
- **Cover Image**: The main artwork for your show.
- **Owner Information**: Name and Email for iTunes verification.
- **Categories**: Select the primary and secondary categories for directories.

## API & Extensions
(Placeholder for developer information regarding hooks and filters provided by the plugin)
