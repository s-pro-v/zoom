let zoomLevel = 1;

// Custom Alert Function
function customAlert(message, title = 'Alert', icon = 'bi-exclamation-triangle-fill') {
    // Remove existing alert if any
    const existingAlert = document.querySelector('.custom-alert-overlay');
    if (existingAlert) {
        existingAlert.remove();
    }

    // Create alert overlay
    const overlay = document.createElement('div');
    overlay.className = 'custom-alert-overlay';

    // Create alert box
    overlay.innerHTML = `
            <div class="custom-alert-box">
                <div class="custom-alert-header">
                    <i class="bi ${icon}"></i>
                    <span>${title}</span>
                </div>
                <div class="custom-alert-content">
                    ${message}
                </div>
                <div class="custom-alert-footer">
                    <button class="custom-alert-btn" onclick="closeCustomAlert()">OK</button>
                </div>
            </div>
        `;

    // Add to body
    document.body.appendChild(overlay);

    // Close on overlay click
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
            closeCustomAlert();
        }
    });

    // Close on ESC key
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            closeCustomAlert();
            document.removeEventListener('keydown', escHandler);
        }
    });
}

function closeCustomAlert() {
    const overlay = document.querySelector('.custom-alert-overlay');
    if (overlay) {
        overlay.style.animation = 'fadeOut 0.2s ease forwards';
        setTimeout(() => {
            overlay.remove();
        }, 200);
    }
}

function zoomInIframe() {
    zoomLevel += 0.1;
    document.getElementById('urlIframe').style.transform = `scale(${zoomLevel})`;
}

function zoomOutIframe() {
    zoomLevel -= 0.1;
    document.getElementById('urlIframe').style.transform = `scale(${zoomLevel})`;
}

function resetZoomIframe() {
    zoomLevel = 1;
    document.getElementById('urlIframe').style.transform = `scale(${zoomLevel})`;
}

document.addEventListener('DOMContentLoaded', function () {
    const mainContainer = document.getElementById('mainContainer');

    mainContainer.innerHTML = `
                                    <section class="url-input-section custom-section-class">
                                    <button class="toggle-input-btn" id="toggleInputBtn" onclick="toggleInputContainer()">
                                    <img src="https://api.iconify.design/uim:line-spacing.svg" alt="Toggle" style="width:1.1em;height:1.1em;vertical-align:middle;" />
                                    <span>Hide</span>
                                    </button>
                                    <div class="input-container" id="inputContainer">
                                    <div class="input-group">
                                    <button class="control-button reset-button" onclick="resetIframeUrl()" title="Reset URL" style="width: 4rem;">
                                    <img src="https://api.iconify.design/uim:times-circle.svg" alt="Reset" style="width:1.1em;height:1.1em;vertical-align:middle;" />
                                    </button>
                                    <div class="url-input-wrapper">
                                    <input type="text" id="urlInput" class="url-input"
                                    placeholder="Enter URL (e.g., https://example.com)">
                                    <div class="input-focus-effect"></div>
                                    </div>
                                    <button id="loadUrlButton" class="control-button load-button">
                                    <img src="https://api.iconify.design/uim:exit.svg" alt="Load" style="width:1.1em;height:1.1em;vertical-align:middle;" />
                                    <span>Load</span>
                                    </button>
                                    <div id="zoomControls" class="zoom-controls custom-zoom-controls">
                                    <button class="control-button" id="zoomInButton" onclick="zoomInIframe()" title="Zoom In">
                                    <img src="https://api.iconify.design/uim:plus-square.svg" alt="Zoom In" style="width:1.1em;height:1.1em;vertical-align:middle;" />
                                    </button>
                                    <button class="control-button" id="zoomOutButton" onclick="zoomOutIframe()" title="Zoom Out">
                                    <img src="https://api.iconify.design/uim:minus-square-full.svg" alt="Zoom Out" style="width:1.1em;height:1.1em;vertical-align:middle;" />
                                    </button>
                                    <button class="control-button" id="resetZoomButton" onclick="resetZoomIframe()" title="Reset Zoom">
                                    <img src="https://api.iconify.design/uim:refresh.svg" alt="Reset Zoom" style="width:1.1em;height:1.1em;vertical-align:middle;" />
                                    </button>
                                    <button class="control-button " id="closeIframe" onclick="closeIframe()" title="Close">
                                    <img src="https://api.iconify.design/uim:clinic-medical.svg" alt="Close" style="width:1.1em;height:1.1em;vertical-align:middle;" />
                                    </button>
                                    <button id="toggleDarkModeButton" class="control-button custom-darkmode-toggle" onclick="toggleDarkMode()" title="Toggle Dark Mode">
                                    <img src="https://api.iconify.design/uim:toggle-off.svg" alt="Toggle Dark Mode" style="width:1.1em;height:1.1em;vertical-align:middle;" />
                                    </button>
                                    </div>
                                    </div>
                                    </div>
                                    </section>
                                    
                                    <section class="iframe-container custom-iframe-section">
                                    <div class="iframe-wrapper">
                                    <iframe id="urlIframe" src=" " frameborder="0" class="custom-iframe"></iframe>
                                    <div class="empty-state" id="emptyState">
                                    <div class="empty-state-icon">
                                    <i class="bi bi-globe2"></i>
                                    </div>
                                    <div class="empty-state-title">No Content Loaded</div>
                                    <div class="empty-state-subtitle">Enter a URL below to start browsing</div>
                                    
                                    <div class="empty-state-features">
                                    <div class="feature-item">
                                    <i class="bi bi-zoom-in feature-icon"></i>
                                    <div class="feature-title">Zoom Control</div>
                                    <div class="feature-desc">Zoom in/out and reset view with precision controls</div>
                                    </div>
                                    <div class="feature-item">
                                    <i class="bi bi-moon-stars feature-icon"></i>
                                    <div class="feature-title">Dark Mode</div>
                                    <div class="feature-desc">Toggle between light and dark themes</div>
                                    </div>
                                    <div class="feature-item">
                                    <i class="bi bi-arrows-fullscreen feature-icon"></i>
                                    <div class="feature-title">Full View</div>
                                    <div class="feature-desc">Clean interface for distraction-free browsing</div>
                                    </div>
                                    <div class="feature-item">
                                    <i class="bi bi-lightning-charge feature-icon"></i>
                                    <div class="feature-title">Fast Loading</div>
                                    <div class="feature-desc">Quick and responsive URL rendering</div>
                                    </div>
                                    </div>
                                    
                                    <div class="keyboard-shortcuts">
                                    <div class="shortcuts-title">Keyboard Shortcuts</div>
                                    <div class="shortcut-list">
                                    <div class="shortcut-item">
                                    <span class="shortcut-key">H</span>
                                    <span class="shortcut-action">Hide / Show Controls</span>
                                    </div>
                                    <div class="shortcut-item">
                                    <span class="shortcut-key">R</span>
                                    <span class="shortcut-action">Rage Mode</span>
                                    </div>
                                    <div class="shortcut-item">
                                    <span class="shortcut-key">ESC</span>
                                    <span class="shortcut-action">Reset / Close</span>
                                    </div>
                                    </div>
                                    </div>
                                    
                                    <div class="split-visual">
                                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="50" y="50" width="100" height="100" fill="none" stroke="var(--text-primary)"
                                    stroke-width="2"></rect>
                                    <line x1="100" y1="50" x2="100" y2="10" stroke="var(--orange-accent)" stroke-width="2">
                                    </line>
                                    <line x1="150" y1="100" x2="190" y2="100" stroke="var(--orange-accent)" stroke-width="2">
                                    </line>
                                    <line x1="100" y1="150" x2="100" y2="190" stroke="var(--orange-accent)" stroke-width="2">
                                    </line>
                                    <line x1="50" y1="100" x2="10" y2="100" stroke="var(--orange-accent)" stroke-width="2">
                                    </line>
                                    <line x1="50" y1="50" x2="20" y2="20" stroke="var(--orange-accent)" stroke-width="2"></line>
                                    <line x1="150" y1="50" x2="180" y2="20" stroke="var(--orange-accent)" stroke-width="2">
                                    </line>
                                    <line x1="150" y1="150" x2="180" y2="180" stroke="var(--orange-accent)" stroke-width="2">
                                    </line>
                                    <line x1="50" y1="150" x2="20" y2="180" stroke="var(--orange-accent)" stroke-width="2">
                                    </line>
                                    <rect x="96" y="6" width="8" height="8" fill="var(--svg-node-fill)" stroke="var(--svg-node-stroke)"
                                    stroke-width="1.5"></rect>
                                    <rect x="186" y="96" width="8" height="8" fill="var(--svg-node-fill)" stroke="var(--svg-node-stroke)"
                                    stroke-width="1.5"></rect>
                                    <rect x="96" y="186" width="8" height="8" fill="var(--svg-node-fill)" stroke="var(--svg-node-stroke)"
                                    stroke-width="1.5"></rect>
                                    <rect x="6" y="96" width="8" height="8" fill="var(--svg-node-fill)" stroke="var(--svg-node-stroke)"
                                    stroke-width="1.5"></rect>
                                    <rect x="16" y="16" width="8" height="8" fill="var(--svg-node-fill)" stroke="var(--svg-node-stroke)"
                                    stroke-width="1.5"></rect>
                                    <rect x="176" y="16" width="8" height="8" fill="var(--svg-node-fill)" stroke="var(--svg-node-stroke)"
                                    stroke-width="1.5"></rect>
                                    <rect x="176" y="176" width="8" height="8" fill="var(--svg-node-fill)" stroke="var(--svg-node-stroke)"
                                    stroke-width="1.5"></rect>
                                    <rect x="16" y="176" width="8" height="8" fill="var(--svg-node-fill)" stroke="var(--svg-node-stroke)"
                                    stroke-width="1.5"></rect>
                                    <rect x="60" y="60" width="80" height="80" fill="none" stroke="var(--text-secondary)"
                                    stroke-width="1" stroke-dasharray="4"></rect>
                                    <rect x="90" y="90" width="20" height="20" fill="var(--orange-accent)" opacity="0.5"></rect>
                                    </svg>
                                    </div>
                                    
                                    </div>
                                    </div>
                                    </section>
                                    `;

    document.getElementById('loadUrlButton').addEventListener('click', loadUrl);
    document.getElementById('zoomInButton').addEventListener('click', zoomInIframe);
    document.getElementById('zoomOutButton').addEventListener('click', zoomOutIframe);
    document.getElementById('resetZoomButton').addEventListener('click', resetZoomIframe);
    document.getElementById('toggleDarkModeButton').addEventListener('click', toggleDarkMode);

});

// Add rage mode toggle
let rageMode = false;
let rageModeInterval;

function toggleRageMode() {
    rageMode = !rageMode;
    const iframe = document.getElementById('urlIframe');

    if (rageMode) {
        rageModeInterval = setInterval(() => {
            const randomScale = 0.8 + Math.random() * 0.4;
            // Random scale between 0.8 and 1.2
            const randomRotate = -5 + Math.random() * 10;
            // Random rotation between -5 and 5 degrees
            iframe.style.transform = `scale(${randomScale}) rotate(${randomRotate}deg)`;
        }
            , 100);
    } else {
        clearInterval(rageModeInterval);
        resetZoomIframe();
    }
}

// Add keyboard shortcuts
document.addEventListener('keydown', function (e) {
    if (e.key === 'r' || e.key === 'R') {
        toggleRageMode();
    } else if (e.key === 'Escape') {
        rageMode = false;
        clearInterval(rageModeInterval);
        resetZoomIframe();
    } else if (e.key === 'h' || e.key === 'H') {
        toggleInputContainer();
    }
});

function loadUrl() {
    const urlInput = document.getElementById('urlInput');
    const iframe = document.getElementById('urlIframe');
    const emptyState = document.getElementById('emptyState');
    const url = urlInput.value.trim();
    if (url) {
        iframe.src = url;
        if (emptyState) emptyState.style.display = 'none';
        customAlert('URL loaded successfully!', 'Success', 'bi-check-circle-fill');
    } else {
        customAlert('Please enter a valid URL.', 'Error', 'bi-exclamation-triangle-fill');
    }
}

function zoomInIframe() {
    const iframe = document.getElementById('urlIframe');
    const currentZoom = iframe.style.zoom ? parseFloat(iframe.style.zoom) : 1;
    iframe.style.zoom = (currentZoom + 0.1).toFixed(1);
}

function zoomOutIframe() {
    const iframe = document.getElementById('urlIframe');
    const currentZoom = iframe.style.zoom ? parseFloat(iframe.style.zoom) : 1;
    iframe.style.zoom = (currentZoom - 0.1).toFixed(1);
}
function resetIframeUrl() {
    const urlInput = document.getElementById('urlInput');
    urlInput.value = ' ';
}

function closeIframe() {
    const iframe = document.getElementById('urlIframe');
    const emptyState = document.getElementById('emptyState');
    iframe.src = ' ';
    if (emptyState) emptyState.style.display = 'block';
}

function resetZoomIframe() {
    const iframe = document.getElementById('urlIframe');
    iframe.style.zoom = 1;
}

function toggleInputContainer() {
    const container = document.getElementById('inputContainer');
    const toggleBtn = document.getElementById('toggleInputBtn');
    const btnText = toggleBtn.querySelector('span');
    const btnIcon = toggleBtn.querySelector('i');

    if (container.classList.contains('hidden')) {
        container.classList.remove('hidden');
        btnText.textContent = 'Hide';
        btnIcon.classList.remove('bi-chevron-up');
        btnIcon.classList.add('bi-chevron-down');
        toggleBtn.classList.remove('rotated');
    } else {
        container.classList.add('hidden');
        btnText.textContent = 'Show';
        btnIcon.classList.remove('bi-chevron-down');
        btnIcon.classList.add('bi-chevron-up');
        toggleBtn.classList.add('rotated');
    }
}

function toggleDarkMode() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('theme', newTheme);
    // Changed back to 'theme'
    localStorage.setItem('theme', newTheme);
    updateThemeUI(newTheme === 'dark');
}

// Initialize theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('theme', savedTheme);

// Theme UI update function
function updateThemeUI(isDark) {
    const button = document.querySelector('#toggleDarkModeButton');
    if (!button)
        return;

    const img = button.querySelector('img');
    if (!img)
        return;

    if (isDark) {
        button.classList.add('is-dark');
        button.classList.remove('is-light');
        img.src = 'https://api.iconify.design/uim:toggle-on.svg';
        img.alt = 'Dark Mode On';
        button.title = 'Switch to light mode';
    } else {
        button.classList.add('is-light');
        button.classList.remove('is-dark');
        img.src = 'https://api.iconify.design/uim:toggle-off.svg';
        img.alt = 'Dark Mode Off';
        button.title = 'Switch to dark mode';
    }
}

// Initialize theme UI
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#toggleDarkModeButton');
    if (!button)
        return;

    // Set initial theme UI
    updateThemeUI(savedTheme === 'dark');

    // Add click event listener
    button.addEventListener('click', (e) => {
        e.preventDefault();
        toggleDarkMode();
    }
    );
}
);

// Add these to your existing script section
document.addEventListener('DOMContentLoaded', function () {
    // Remove draggable attribute from all elements
    document.querySelectorAll('[draggable="true"]').forEach(el => {
        el.removeAttribute('draggable');
    });

    // Prevent dragstart event
    document.addEventListener('dragstart', function (e) {
        e.preventDefault();
        return false;
    });

    // Prevent drop event
    document.addEventListener('drop', function (e) {
        e.preventDefault();
        return false;
    });

    // Prevent dragover event
    document.addEventListener('dragover', function (e) {
        e.preventDefault();
        return false;
    });
});