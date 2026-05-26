// ==UserScript==
// @name         PZLA Statystyki – Modern Dark Theme
// @namespace    https://statystyka.pzla.pl/
// @version      1.0
// @description  Nakładka CSS modernizująca wygląd statystyk PZLA – ciemny motyw sportowy
// @author       custom
// @match        https://statystyka.pzla.pl/*
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict';

  /* ===== FONTS ===== */
  const fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;900&family=Barlow:wght@300;400;500&display=swap';
  document.head.appendChild(fontLink);

  GM_addStyle(`
    /* =====================================================
       PZLA STATYSTYKI – DARK SPORT THEME
       Inspired by: track & field, night stadium lights
    ===================================================== */

    :root {
      --bg-base:      #0b0e14;
      --bg-panel:     #12171f;
      --bg-card:      #1a2130;
      --bg-hover:     #1e2a3c;
      --accent:       #e8380d;
      --accent2:      #0070c0;
      --accent-glow:  #0088ff55;
      --gold:         #f5c518;
      --text-primary: #e8edf4;
      --text-muted:   #8a9ab5;
      --text-dim:     #4a5a70;
      --border:       #252e3f;
      --border-light: #2e3d55;
      --radius:       6px;
      --transition:   0.18s ease;
      --font-head:    'Barlow Condensed', 'Arial Narrow', sans-serif;
      --font-body:    'Barlow', Arial, sans-serif;
      --shadow-card:  0 4px 24px rgba(0,0,0,0.55);
      --shadow-glow:  0 0 20px rgba(0,112,192,0.25);
    }

    /* ---- RESET & BASE ---- */
    *, *::before, *::after { box-sizing: border-box; }

    html, body {
      background: var(--bg-base) !important;
      background-image:
        radial-gradient(ellipse 120% 60% at 50% -10%, rgba(0,70,140,0.18) 0%, transparent 70%),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 119px,
          rgba(255,255,255,0.015) 120px
        ) !important;
      color: var(--text-primary) !important;
      font-family: var(--font-body) !important;
      font-size: 14px !important;
      line-height: 1.5 !important;
      min-height: 100vh;
    }

    /* Remove gif background */
    body[background] { background-image: none !important; }

    center { display: block !important; max-width: 1100px; margin: 0 auto; padding: 12px 16px; }

    /* ---- HEADINGS ---- */
    h1, h2, h3 {
      font-family: var(--font-head) !important;
      letter-spacing: 0.04em;
      color: var(--text-primary) !important;
    }
    h1 { font-size: 22px !important; font-weight: 900; text-transform: uppercase; }

    /* ---- TOP HEADER ACCENT ---- */
    font[color="#FFFFFF"] h1,
    font[color="#FFFFFF"] {
      color: var(--text-primary) !important;
    }

    /* ---- MAIN FORM / PANEL ---- */
    form[name="statform"] > table.nagtd,
    table.nagtd {
      background: var(--bg-panel) !important;
      border: 1px solid var(--border) !important;
      border-radius: var(--radius) !important;
      box-shadow: var(--shadow-card) !important;
      border-spacing: 0 !important;
      width: 100% !important;
      max-width: 960px;
    }

    /* ---- ALL TABLES ---- */
    table {
      border-collapse: separate !important;
      border-spacing: 0 !important;
    }

    td, th {
      font-family: var(--font-body) !important;
      font-size: 13px !important;
      color: var(--text-primary) !important;
      padding: 5px 8px !important;
      vertical-align: middle !important;
    }

    /* Neutralise legacy td attrs */
    td[bgcolor="#1E8CC9"],
    td[bgcolor="#1e8cc9"] {
      background: var(--accent2) !important;
      color: #fff !important;
    }
    td[bgcolor=""] { background: transparent !important; }

    /* ---- SEASON / REGION YEAR PILL BUTTONS ---- */
    td[onclick] {
      cursor: pointer !important;
      border-radius: 4px !important;
      transition: background var(--transition), color var(--transition), transform var(--transition) !important;
      user-select: none;
      white-space: nowrap;
    }

    td[onclick]:hover {
      background: var(--accent2) !important;
      color: #fff !important;
      transform: translateY(-1px);
    }

    /* Active / current season highlight */
    td[bgcolor="#1E8CC9"][onclick],
    td[bgcolor="#1e8cc9"][onclick] {
      background: var(--accent2) !important;
      color: #fff !important;
      font-weight: 700 !important;
      box-shadow: 0 0 10px var(--accent-glow) !important;
    }

    /* ---- DISCIPLINE / EVENT BUTTONS ---- */
    .zaznaczona {
      background: var(--accent2) !important;
      color: #fff !important;
      border: 1px solid #0088ff !important;
      border-radius: 4px !important;
      font-family: var(--font-body) !important;
      font-size: 12px !important;
      padding: 3px 7px !important;
      cursor: pointer !important;
      box-shadow: 0 0 8px var(--accent-glow) !important;
      transition: all var(--transition) !important;
    }

    .niezaznaczona {
      background: var(--bg-card) !important;
      color: var(--text-muted) !important;
      border: 1px solid var(--border-light) !important;
      border-radius: 4px !important;
      font-family: var(--font-body) !important;
      font-size: 12px !important;
      padding: 3px 7px !important;
      cursor: pointer !important;
      transition: all var(--transition) !important;
    }
    .niezaznaczona:hover {
      background: var(--bg-hover) !important;
      color: var(--text-primary) !important;
      border-color: var(--accent2) !important;
    }

    /* ---- HR ---- */
    hr {
      border: none !important;
      border-top: 1px solid var(--border) !important;
      margin: 6px 0 !important;
    }

    /* ---- INPUTS & SELECTS ---- */
    input[type="text"],
    input[type="date"],
    input.nagtd,
    select.nagtd,
    select {
      background: var(--bg-card) !important;
      color: var(--text-primary) !important;
      border: 1px solid var(--border-light) !important;
      border-radius: 4px !important;
      padding: 4px 8px !important;
      font-family: var(--font-body) !important;
      font-size: 13px !important;
      outline: none !important;
      transition: border-color var(--transition) !important;
    }
    input[type="text"]:focus,
    input[type="date"]:focus,
    select:focus {
      border-color: var(--accent2) !important;
      box-shadow: 0 0 0 2px var(--accent-glow) !important;
    }

    /* color scheme fix for date input */
    input[type="date"] { color-scheme: dark; }

    /* Radio & Checkbox */
    input[type="radio"],
    input[type="checkbox"] {
      accent-color: var(--accent2) !important;
      cursor: pointer !important;
    }

    /* ---- SUBMIT BUTTONS ---- */
    button[type="submit"],
    input[type="submit"],
    .button-blue {
      background: linear-gradient(135deg, var(--accent2) 0%, #0055a0 100%) !important;
      color: #fff !important;
      border: none !important;
      border-radius: 5px !important;
      padding: 8px 20px !important;
      font-family: var(--font-head) !important;
      font-size: 14px !important;
      font-weight: 700 !important;
      letter-spacing: 0.08em !important;
      text-transform: uppercase !important;
      cursor: pointer !important;
      transition: all var(--transition) !important;
      box-shadow: 0 3px 12px rgba(0,112,192,0.35) !important;
      height: auto !important;
      width: auto !important;
    }
    button[type="submit"]:hover,
    input[type="submit"]:hover {
      background: linear-gradient(135deg, #0088ff 0%, var(--accent2) 100%) !important;
      transform: translateY(-1px) !important;
      box-shadow: 0 5px 18px rgba(0,112,192,0.5) !important;
    }

    /* GENERUJ button special – vertical rotated on side */
    .button-blue {
      writing-mode: vertical-rl !important;
      text-orientation: mixed !important;
      height: 200px !important;
      width: 36px !important;
      padding: 12px 6px !important;
      font-size: 11px !important;
      letter-spacing: 0.25em !important;
    }

    /* ---- LINKS ---- */
    a, a:visited {
      color: #4da3ff !important;
      text-decoration: none !important;
      transition: color var(--transition) !important;
    }
    a:hover { color: #80c4ff !important; text-decoration: underline !important; }

    /* ---- RED ACCENT LINKS (LIDERZY SEZONU, PUNKTACJE) ---- */
    a[style*="background-color:#e40613"],
    a[style*="background-color: #e40613"] {
      background: linear-gradient(135deg, #e8380d 0%, #b01800 100%) !important;
      color: #fff !important;
      border-radius: 4px !important;
      padding: 5px 12px !important;
      font-family: var(--font-head) !important;
      font-weight: 700 !important;
      letter-spacing: 0.06em !important;
      text-transform: uppercase !important;
      box-shadow: 0 2px 10px rgba(232,56,13,0.35) !important;
      transition: all var(--transition) !important;
    }
    a[style*="background-color:#e40613"]:hover,
    a[style*="background-color: #e40613"]:hover {
      background: linear-gradient(135deg, #ff5533 0%, #e8380d 100%) !important;
      transform: translateY(-1px) !important;
    }

    /* ---- LABELS ---- */
    label { color: var(--text-muted) !important; font-size: 12px !important; cursor: pointer !important; }

    /* ---- span.nagtd22 (last update) ---- */
    .nagtd22 {
      color: var(--text-dim) !important;
      font-size: 11px !important;
    }

    /* ---- STAT RESULTS TABLES (generated output) ---- */
    table:not(.nagtd) td:first-child {
      color: var(--text-dim) !important;
    }

    /* Results table row hover */
    tr:hover > td {
      background: var(--bg-hover) !important;
    }

    /* ---- NEW FEATURE INFO BOX ---- */
    #new-feature-info {
      background: var(--bg-card) !important;
      border: 1px solid var(--border-light) !important;
      border-left: 3px solid var(--accent2) !important;
      color: var(--text-muted) !important;
    }
    #new-feature-info strong { color: var(--text-primary) !important; }

    /* ---- RODO TINY TEXT ---- */
    font[size="-6"], font[size="-6"] * {
      color: var(--text-dim) !important;
      font-size: 10px !important;
      line-height: 1.4 !important;
    }

    /* ---- FONT TAGS override ---- */
    font[color="#666666"] { color: var(--text-muted) !important; }
    font[color="#FFFFFF"] { color: var(--text-primary) !important; }
    font[color="#FF0000"] { color: var(--accent) !important; }
    font { font-family: var(--font-body) !important; }
    b { color: inherit !important; }

    /* ---- SCROLLBAR ---- */
    ::-webkit-scrollbar { width: 7px; height: 7px; }
    ::-webkit-scrollbar-track { background: var(--bg-base); }
    ::-webkit-scrollbar-thumb { background: var(--border-light); border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: var(--accent2); }

    /* ---- TOP STRIPE ---- */
    body::before {
      content: '';
      display: block;
      height: 3px;
      background: linear-gradient(90deg, var(--accent) 0%, var(--accent2) 50%, var(--gold) 100%);
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 9999;
    }

    /* ---- STAT RESULT TABLE (stat.php output) ---- */
    table[border="1"] {
      background: var(--bg-panel) !important;
      border-color: var(--border) !important;
      border-radius: var(--radius) !important;
      overflow: hidden;
    }
    table[border="1"] th,
    table[border="1"] tr:first-child td {
      background: var(--bg-card) !important;
      color: var(--gold) !important;
      font-family: var(--font-head) !important;
      font-weight: 700 !important;
      letter-spacing: 0.06em !important;
      text-transform: uppercase !important;
      font-size: 12px !important;
      border-bottom: 2px solid var(--accent2) !important;
    }
    table[border="1"] tr:nth-child(even) td {
      background: rgba(255,255,255,0.025) !important;
    }
    table[border="1"] tr:nth-child(1) td:first-child {
      color: var(--gold) !important;
    }

    /* ---- MEDIA: narrow screens ---- */
    @media (max-width: 700px) {
      center { padding: 8px !important; }
      table.nagtd { font-size: 12px !important; }
      td { padding: 3px 5px !important; }
    }
  `);

  /* ===== DOM TWEAKS ===== */

  // Add page title header
  const titleBar = document.createElement('div');
  titleBar.style.cssText = `
    background: linear-gradient(135deg, #0b0e14 0%, #12223a 100%);
    border-bottom: 2px solid #0070c0;
    padding: 14px 24px 10px;
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 4px;
  `;
  titleBar.innerHTML = `
    <div style="
      width: 36px; height: 36px;
      background: linear-gradient(135deg, #e8380d, #b01800);
      border-radius: 6px;
      display: flex; align-items: center; justify-content: center;
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 900; font-size: 18px; color: #fff;
      flex-shrink: 0;
    ">⚡</div>
    <div>
      <div style="font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-size: 20px; color: #e8edf4; letter-spacing: 0.06em; text-transform: uppercase;">Statystyki PZLA</div>
      <div style="font-size: 11px; color: #4a5a70; letter-spacing: 0.04em;">Polski Związek Lekkiej Atletyki · statystyka.pzla.pl</div>
    </div>
  `;
  document.body.insertBefore(titleBar, document.body.firstChild);

  // Fix vertical "GENERUJ STATYSTYKI" button text
  document.querySelectorAll('.button-blue').forEach(btn => {
    // Remove the letter-by-letter <br> approach, replace with clean text
    btn.innerHTML = 'GENERUJ STATYSTYKI';
  });

  // Add tooltips to discipline cells
  document.querySelectorAll('td.niezaznaczona, td.zaznaczona').forEach(td => {
    td.title = td.title || td.textContent.trim();
  });

})();
