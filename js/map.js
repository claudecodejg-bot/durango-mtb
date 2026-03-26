// Durango MTB - Leaflet Map Module

let trailMap;
let trailMarkers = {};

function initMap() {
  // Center on downtown Durango
  trailMap = L.map('map', {
    center: [37.275, -107.880],
    zoom: 11,
    zoomControl: true,
    scrollWheelZoom: true
  });

  // Light terrain tile layer (CartoDB Voyager)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 17
  }).addTo(trailMap);

  // 25-mile radius circle (40,234 meters)
  L.circle([37.275, -107.880], {
    radius: 40234,
    color: '#A4C04A',
    weight: 1.5,
    opacity: 0.35,
    fillColor: '#A4C04A',
    fillOpacity: 0.03,
    dashArray: '8, 8'
  }).addTo(trailMap);

  // Add trail markers
  TRAILS.forEach(function(trail) {
    var maxDiff = getMaxDifficulty(trail);
    var color = getMarkerColor(maxDiff);
    var borderColor = getMarkerBorder(maxDiff);

    var marker = L.circleMarker([trail.lat, trail.lng], {
      radius: 8,
      fillColor: color,
      color: borderColor,
      weight: 2,
      opacity: 1,
      fillOpacity: 0.85
    }).addTo(trailMap);

    // Build popup content
    var features = trail.features.map(function(f) { return f; }).join(' \u00B7 ');
    var meta = [];
    if (trail.miles) meta.push(trail.miles + ' mi');
    if (trail.elevationGain) meta.push(trail.elevationGain.toLocaleString() + ' ft gain');
    if (trail.distanceFromTown > 0) meta.push(trail.distanceFromTown + ' mi from town');

    var popupHtml = '<h4>' + trail.name + '</h4>' +
      '<div class="popup-difficulty">' + getDifficultyIcon(maxDiff) + ' ' + trail.difficultyLabel + '</div>' +
      (meta.length > 0 ? '<div class="popup-features">' + meta.join(' &bull; ') + '</div>' : '') +
      '<div class="popup-features" style="margin-top:4px">' + features + '</div>' +
      '<a class="popup-link" href="#trails" onclick="scrollToTrailCard(\'' + trail.id + '\')">View details &rarr;</a>';

    marker.bindPopup(popupHtml, { maxWidth: 260 });

    // Hover effect
    marker.on('mouseover', function() {
      this.setStyle({ radius: 11, weight: 3 });
    });
    marker.on('mouseout', function() {
      this.setStyle({ radius: 8, weight: 2 });
    });

    trailMarkers[trail.id] = marker;
  });
}

function getMarkerColor(difficulty) {
  var colors = {
    novice: '#4CAF50',
    intermediate: '#2196F3',
    advanced: '#e0e0e0',
    expert: '#ff6b6b'
  };
  return colors[difficulty] || '#888';
}

function getMarkerBorder(difficulty) {
  var borders = {
    novice: '#2E7D32',
    intermediate: '#1565C0',
    advanced: '#999',
    expert: '#cc3333'
  };
  return borders[difficulty] || '#666';
}

function focusTrail(trailId) {
  var marker = trailMarkers[trailId];
  if (marker) {
    var trail = getTrailById(trailId);
    if (trail) {
      trailMap.setView([trail.lat, trail.lng], 13, { animate: true, duration: 0.8 });
    }
    marker.openPopup();
    // Flash effect
    marker.setStyle({ radius: 14, weight: 4 });
    setTimeout(function() {
      marker.setStyle({ radius: 8, weight: 2 });
    }, 800);
  }
}

function scrollToTrailCard(trailId) {
  var card = document.querySelector('[data-trail-id="' + trailId + '"]');
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card.style.boxShadow = '0 0 0 2px #A4C04A, 0 8px 30px rgba(0,0,0,0.4)';
    setTimeout(function() {
      card.style.boxShadow = '';
    }, 2000);
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('map')) {
    initMap();
  }
});
