# Wildfire Tracker

React + Vite wildfire tracker displaying live NASA EONET wildfire alerts on an interactive Leaflet world map.

## Overview

This project visualizes active wildfire events using NASA's EONET API. It fetches real-time event data and places markers on a Leaflet map so users can explore fire activity globally.

## Tech stack

- React
- Vite
- Axios
- Leaflet + React Leaflet
- NASA EONET API
- Vercel-ready deployment

## Features

- Live wildfire event data from NASA EONET
- Interactive world map with custom fire markers
- Popup details for each wildfire event
- Responsive layout for desktop and mobile
- Production-ready Vite build

## Local development

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually:

```bash
http://localhost:5173/
```

## Build for production

```bash
npm run build
```

## Deployment

This repository includes a `vercel.json` file for Vercel deployment.

To deploy:

1. Push the repo to GitHub.
2. Log in to https://vercel.com.
3. Import the repository.
4. Use the default Vite settings.
5. Deploy.

Vercel will run:

```bash
npm install
npm run build
```

## Portfolio note

This project demonstrates real-world data integration, modern frontend tooling, and production deployment readiness. It is a strong portfolio piece for React, mapping, and API-driven applications.

## Future improvements

- Add a sidebar with event filters and search
- Display wildfire severity or confidence levels
- Add dark/light theme toggle
- Add GitHub Actions for automated deployment and testing
