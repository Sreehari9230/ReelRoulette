Movie Picker App

A web application that helps users discover movies and randomly pick one when they can’t decide.
The app uses a secure backend proxy to fetch data from TMDB without exposing the API key.

Features

Filter movies by genre, language, year, and rating

Random movie selection from the results

Movie details displayed in a modal

Responsive poster grid layout

Backend API proxy for TMDB key safety

Tech Stack

Frontend

React

Zustand

Tailwind CSS, DaisyUI

Backend

Node.js

Express

TMDB API (via server-side proxy)

API Security

All TMDB requests are handled by the backend.
The API key is stored in server environment variables and never exposed to the client.

Setup
Backend
npm install
npm run dev

Create a .env file:

TMDB_API_KEY=your_tmdb_api_key

Frontend
npm install
npm run dev

Credits

Movie data provided by TMDB.
Built by Sreehari M.
