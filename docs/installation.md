---
title: Installation
description: Installation, upgrade, and uninstallation
---

# Installation

This page explains how to install the "A Ripple Song" theme and its required companion plugin.

## System Requirements

- **WordPress**: 6.6 or higher
- **PHP**: 8.2 or higher
- **Server**: HTTPS support is required for audio playback features

## Installation Steps

The installation process involves two parts: installing the **Theme** (for the look and feel) and the **Podcast Plugin** (for episode management).

### Step 1: Install the Plugin (Core Features)

The `a-ripple-song-podcast` plugin handles the core podcast functionality, including episode management and RSS feed generation.

1. Download the plugin from the [GitHub Release Page](https://github.com/jiejia/a-ripple-song-podcast/releases).
2. Go to your WordPress Dashboard → **Plugins** → **Add New Plugin**.
3. Click **Upload Plugin** and select the downloaded zip file.
4. Click **Install Now** and then **Activate Plugin**.

:::info
Without this plugin, the theme will function as a standard blog theme without podcast-specific features (player, episode lists, etc.).
:::

### Step 2: Install the Theme (Design)

1. Download the theme package from the [GitHub Release Page](https://github.com/jiejia/a-ripple-song/releases).
2. Go to your WordPress Dashboard → **Appearance** → **Themes**.
3. Click **Add New** → **Upload Theme**.
4. Select the downloaded theme zip file.
5. Click **Install Now** and then **Activate**.

### Step 3: Verify Installation

After activating both the theme and the plugin, you should see a new **"Podcasts"** (or similar) menu item in your WordPress admin sidebar. This indicates that the episode management system is active.

## Upgrade

### Upgrading the Theme
1. Backup your site (database and files).
2. Download the new version of the theme.
3. Upload and replace the existing theme (WordPress will ask if you want to replace the current version).

### Upgrading the Plugin
1. Deactivate and delete the old version of the plugin (don't worry, your data is stored in the database).
2. Install the new version following the installation steps above.

## Uninstallation

- **Theme**: Switch to another theme.
- **Plugin**: Deactivate the plugin. Your episode data will remain in the database unless you explicitly delete it (depending on your cleanup settings).
