# Durango MTB - Mountain Biking Trail Guide

A static website showcasing the best mountain biking trails within 25 miles of Durango, Colorado.

## Features

- Interactive Leaflet map with color-coded trail markers and 25-mile radius overlay
- 16 trail systems with difficulty ratings, descriptions, and Trailforks links
- Filterable trail cards by difficulty level and location
- Featured rides section with curated picks
- Local trail tips and riding etiquette
- Dark outdoor theme with scroll animations
- Fully responsive (mobile, tablet, desktop)

## Deployment

### GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings > Pages**
3. Set source to **Deploy from a branch** > **main** > **/ (root)**
4. Site will be live at `https://<username>.github.io/<repo-name>/`

### Local Development

Just open `index.html` in a browser, or use a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Tech Stack

- HTML5, CSS3, vanilla JavaScript (no build tools or frameworks)
- [Leaflet.js](https://leafletjs.com/) for interactive maps
- [CartoDB Dark Matter](https://carto.com/basemaps/) tiles
- [Google Fonts](https://fonts.google.com/) (Poppins, Open Sans Condensed)

## Trail Data Sources

Trail information compiled from:
- [Durango Trails (durangotrails.org)](https://www.durangotrails.org)
- [Trailforks](https://www.trailforks.com/region/durango/)
- [MTB Project](https://www.mtbproject.com/directory/8007522/durango)
- [Pedal Durango](https://pedaldurango.com)
- Local community knowledge

Always check current trail conditions before riding at [durangotrails.org](https://www.durangotrails.org).
