# <img src="logo.png" width="42" valign="middle"> PZLA Statystyki

[![Manifest Version](https://img.shields.io/badge/Manifest-V3-orange.svg)](https://developer.chrome.com/docs/extensions/mv3/intro/)
[![UserScript](https://img.shields.io/badge/UserScript-v1.0-blue.svg)](https://tampermonkey.net/)
[![Platforma](https://img.shields.io/badge/Platforma-statystyka.pzla.pl-red.svg)](https://statystyka.pzla.pl/)

Nowoczesny, ciemny motyw sportowy dla oficjalnego systemu statystyk Polskiego Związku Lekkiej Atletyki (**statystyka.pzla.pl**). Projekt całkowicie odświeża przestarzały interfejs bazy danych, dostosowując go do współczesnych standardów wizualnych i optymalizując komfort przeglądania danych lekkoatletycznych.

---

## 🗺️ Struktura repozytorium

W repozytorium znajdują się gotowe komponenty, które pozwalają na instalację nakładki na dwa różne sposoby:

```bash
├── logo.png             # Logotyp projektu używany w dokumentacji
├── manifest.json        # Konfiguracja rozszerzenia (Chrome/Edge/Brave) w standardzie MV3
├── theme.css            # Główny arkusz stylów ciemnego motywu
├── content.js           # Skrypt wstrzykujący fonty Google Fonts oraz modyfikujący DOM
└── pzla_statystyki_theme.user.js  # Scalona wersja UserScript (Tampermonkey/Violentmonkey)
