<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="100" alt="React logo">
</p>

<h1 align="center">F1 Lookup - Web App to lookup any F1 Race</h1>

<p align="center">
  <strong>A React based web application for looking up F1 races and it's results.</strong>
</p>

<p align="center">
  <a href="#"><img alt="Build Status" src="https://img.shields.io/badge/build-passing-brightgreen.svg"></a>
  <a href="#"><img alt="Platform" src="https://img.shields.io/badge/platform-web-blue.svg"></a>
  <a href="#"><img alt="React Version" src="https://img.shields.io/badge/React-19.1.0-61DAFB.svg"></a>
  <a href="#"><img alt="Node Version" src="https://img.shields.io/badge/Node.js-20.x-green.svg"></a>
</p>

<p align="center">
  <a href="#overview">🗂️ Overview</a> • 
  <a href="#features">👀 Features</a> • 
  <a href="#tech-stack--data-sources">🔧 Tech Stack & Data Sources</a> • 
  <a href="#installation">📥 Installation</a> •
  <a href="#project-structure">📦 Project Structure</a> 
</p>

![Home Screen](/src/assets/screenshot1.png)
![Race Detail View Screen](/src/assets/screenshot2.png)

## Overview

This React application displays the complete history of Formula 1 races, allowing users to browse by season and view detailed results for each Grand Prix. A React application built with Vite and React Router. Browse F1 races by year, view detailed race results, and discover racing statistics from the OpenF1 API.

## Features

-   Race Browser: View all F1 races for selected years (2023-2025)
-   Search Functionality: Search for specific races by name
-   Race Details: View detailed race results including driver positions, points, and gap to leader
-   Country Flags: GPs are represented by a flag of a country it is held in.
-   Favorites System: Mark favorite races (feature in development)

## Tech Stack & Data Sources

`React 19.1.0` - Modern React with hooks<br>
`React Router DOM 7.6.3` - Client-side routing<br>
`Vite 7.0.3` - Fast build tool and dev server<br>
`CSS3` - Custom styling<br>

`OpenF1 API` Fetches race schedules, sessions, and race results for specific seasons

> ⚠️ _Note: This application currently supports F1 data from 2023 and later seasons_.

`FlagCDN` Retrieves country flag images using ISO codes.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/f1-race-lookup.git
cd f1-race-lookup
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to http://localhost:5173

## Project Structure

```
src/
│
├── Home/           # Main page with race grid
├── Favorites/      # Favorites page (in development)
├── NavBar/         # Navigation Bar component
├── RaceCard/       # Individual race card component
├── RaceDetail/     # Detailed race results page
│
├── services/
│   ├── api.js          # OpenF1 API integration
│   ├── resolvecountry.js # Country code mappings
│   └── timeformat.js   # Date formatting utilities
├── assets/             # Static assets (not used here)
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles
```

### Pages & Routes

`Home (/)` - Browse races by year with search functionality <br>
`Favorites (/favorites)` - View saved favorite races<br>
`Race Detail (/race/:meetingKey)` - Detailed race results and statistics<br>

## Future Enhancements

Complete favorites functionality with local storage <br>
Add more race statistics and analytics <br>
Implement advanced search filters <br>
Add driver profiles and career statistics <br>

## Contributing

1. Fork the repository
2. Create a feature branch `git checkout -b feature/amazing-feature`
3. Commit your changes `git commit -m 'Add amazing feature'`
4. Push to the branch `git push origin feature/amazing-feature`
5. Open a Pull Request


---

> Note: This application is for educational and entertainment purposes. All F1 data is provided by the OpenF1 API and is subject to their terms of service.
