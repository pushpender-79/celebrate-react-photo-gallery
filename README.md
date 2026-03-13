# Celebrare Photo Gallery

This project is a **Frontend Intern Pre-Screening Assignment** for Celebrare.

## Tech Stack

* React (Vite)
* Tailwind CSS
* JavaScript

## Features Implemented

### 1. Project Setup

* Created a React + Vite project
* Configured Tailwind CSS for styling
* No external UI libraries used

### 2. Fetch Photos from API

* Fetched 30 images from the Picsum Photos API
* Implemented a custom hook `useFetchPhotos`
* Added loading state while fetching
* Added error handling for failed requests

### 3. Responsive Photo Grid

* Displayed photos in a responsive grid layout
* Desktop: 4 columns
* Tablet: 2 columns
* Mobile: 1 column

Each photo card shows:

* Image
* Author name
* Heart icon button

## API Used

https://picsum.photos/v2/list?limit=30

## Upcoming Features

* Search filter by author name
* Favourite photos using `useReducer`
* Persist favourites using `localStorage`
* Performance optimization using `useCallback` and `useMemo`
