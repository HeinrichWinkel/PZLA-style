// PZLA Statystyki – Dark Theme Extension
// Inject Google Fonts
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;900&family=Barlow:wght@300;400;500&display=swap';
document.head.appendChild(fontLink);

// Add top title bar
const titleBar = document.createElement('div');
titleBar.className = 'pzla-titlebar';
titleBar.innerHTML = `
  <div class="pzla-titlebar-icon">⚡</div>
  <div>
    <div class="pzla-titlebar-name">Statystyki PZLA</div>
    <div class="pzla-titlebar-sub">Polski Związek Lekkiej Atletyki · statystyka.pzla.pl</div>
  </div>
`;
document.body.insertBefore(titleBar, document.body.firstChild);

// Fix GENERUJ button
document.querySelectorAll('.button-blue').forEach(btn => {
  btn.innerHTML = 'GENERUJ STATYSTYKI';
});
