// Durango MTB - Main Application Logic

document.addEventListener('DOMContentLoaded', function() {
  renderTrailCards();
  initFilters();
  initScrollAnimations();
  initCounters();
  initNavbar();
  initFeaturedCards();
});

// --- Trail Card Rendering ---
function renderTrailCards() {
  var grid = document.getElementById('trail-grid');
  if (!grid) return;

  var html = '';
  TRAILS.forEach(function(trail) {
    var maxDiff = getMaxDifficulty(trail);
    var stripeColor = getDifficultyColor(maxDiff);
    if (maxDiff === 'expert') stripeColor = '#ff6b6b';

    // Difficulty badges
    var badges = '';
    var diffOrder = ['novice', 'intermediate', 'advanced', 'expert'];
    var minDiff = '', maxDiffVal = '';
    for (var i = 0; i < diffOrder.length; i++) {
      if (trail.difficulty.includes(diffOrder[i])) {
        if (!minDiff) minDiff = diffOrder[i];
        maxDiffVal = diffOrder[i];
      }
    }
    // Show range badge
    if (minDiff === maxDiffVal) {
      badges = '<span class="difficulty-badge ' + minDiff + '">' + getDifficultyIcon(minDiff) + ' ' + capitalize(minDiff) + '</span>';
    } else {
      badges = '<span class="difficulty-badge ' + minDiff + '">' + getDifficultyIcon(minDiff) + ' ' + capitalize(minDiff) + '</span>' +
               '<span style="color:var(--color-text-muted);font-size:0.7rem;align-self:center;">\u2192</span>' +
               '<span class="difficulty-badge ' + maxDiffVal + '">' + getDifficultyIcon(maxDiffVal) + ' ' + capitalize(maxDiffVal) + '</span>';
    }

    // Category badge
    var catLabel = trail.category.replace('-', ' ');
    badges += '<span class="category-badge">' + catLabel + '</span>';

    // Meta info
    var meta = '';
    if (trail.miles) meta += '<span>\u{1F4CF} ' + trail.miles + ' mi</span>';
    if (trail.elevationGain) meta += '<span>\u2B06 ' + trail.elevationGain.toLocaleString() + ' ft</span>';
    if (trail.distanceFromTown !== null) {
      meta += '<span>\u{1F4CD} ' + (trail.distanceFromTown === 0 ? 'Downtown' : trail.distanceFromTown + ' mi from town') + '</span>';
    }

    // Features
    var features = trail.features.map(function(f) {
      return '<span class="feature-tag">' + f + '</span>';
    }).join('');

    // Build card
    html += '<div class="trail-card reveal" data-trail-id="' + trail.id + '" ' +
            'data-difficulties="' + trail.difficulty.join(',') + '" ' +
            'data-category="' + trail.category + '">' +
      '<div class="trail-card-stripe" style="background:' + stripeColor + '"></div>' +
      '<div class="trail-card-body">' +
        '<div class="trail-card-header">' +
          '<h3>' + trail.name + '</h3>' +
          '<button class="trail-card-map-btn" onclick="handleMapClick(\'' + trail.id + '\')" title="Show on map" aria-label="Show ' + trail.name + ' on map">' +
            '\u{1F4CD}' +
          '</button>' +
        '</div>' +
        '<div class="trail-card-badges">' + badges + '</div>' +
        (meta ? '<div class="trail-card-meta">' + meta + '</div>' : '') +
        '<p class="trail-card-desc">' + trail.description + '</p>' +
        '<div class="trail-card-features">' + features + '</div>' +
        '<div class="trail-card-links">' +
          '<a href="' + trail.trailforksUrl + '" target="_blank" rel="noopener">Trailforks \u2192</a>' +
          (trail.notes ? '<span style="font-size:0.75rem;color:var(--color-text-muted);max-width:50%;text-align:right;" title="' + escapeHtml(trail.notes) + '">\u2139\uFE0F Note</span>' : '') +
        '</div>' +
      '</div>' +
    '</div>';
  });

  grid.innerHTML = html;
}

function handleMapClick(trailId) {
  document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' });
  setTimeout(function() { focusTrail(trailId); }, 600);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// --- Filter System ---
function initFilters() {
  var activeFilters = { difficulty: 'all', category: 'all' };
  var buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var filterType = this.getAttribute('data-filter');
      var filterValue = this.getAttribute('data-value');
      activeFilters[filterType] = filterValue;

      // Update active button styling
      document.querySelectorAll('.filter-btn[data-filter="' + filterType + '"]').forEach(function(b) {
        b.classList.remove('active');
      });
      this.classList.add('active');

      applyFilters(activeFilters);
    });
  });
}

function applyFilters(filters) {
  var cards = document.querySelectorAll('.trail-card');
  var visibleCount = 0;

  cards.forEach(function(card) {
    var difficulties = card.getAttribute('data-difficulties').split(',');
    var category = card.getAttribute('data-category');

    var matchDiff = filters.difficulty === 'all' || difficulties.includes(filters.difficulty);
    var matchCat = filters.category === 'all' || category === filters.category;

    if (matchDiff && matchCat) {
      card.style.display = '';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  // Show no results message
  var grid = document.getElementById('trail-grid');
  var noResults = grid.querySelector('.no-results');
  if (visibleCount === 0) {
    if (!noResults) {
      var msg = document.createElement('div');
      msg.className = 'no-results';
      msg.textContent = 'No trails match the selected filters. Try adjusting your criteria.';
      grid.appendChild(msg);
    }
  } else if (noResults) {
    noResults.remove();
  }
}

// --- Scroll Animations (Intersection Observer) ---
function initScrollAnimations() {
  var reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(function(el) { observer.observe(el); });
}

// --- Animated Counters ---
function initCounters() {
  var counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  var animated = false;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(function(counter) {
          animateCounter(counter);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.getElementById('stats'));
}

function animateCounter(el) {
  var target = parseInt(el.getAttribute('data-target'), 10);
  var duration = 2000;
  var start = performance.now();

  function update(now) {
    var elapsed = now - start;
    var progress = Math.min(elapsed / duration, 1);
    // Ease out quad
    var eased = 1 - (1 - progress) * (1 - progress);
    var current = Math.floor(eased * target);
    el.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target;
    }
  }

  requestAnimationFrame(update);
}

// --- Navbar ---
function initNavbar() {
  var navbar = document.getElementById('navbar');
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  // Scroll effect
  var ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(function() {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  });

  // Mobile toggle
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
  }

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      navLinks.classList.remove('open');
    });
  });
}

// --- Featured Cards ---
function initFeaturedCards() {
  document.querySelectorAll('.featured-card').forEach(function(card) {
    card.addEventListener('click', function() {
      var trailId = this.getAttribute('data-trail');
      if (trailId) {
        var trailCard = document.querySelector('[data-trail-id="' + trailId + '"]');
        if (trailCard) {
          trailCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          trailCard.style.boxShadow = '0 0 0 2px #A4C04A, 0 8px 30px rgba(0,0,0,0.4)';
          setTimeout(function() {
            trailCard.style.boxShadow = '';
          }, 2000);
        }
      }
    });
  });
}
