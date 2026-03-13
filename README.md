# Celebrare Photo Gallery

This project is a **Frontend Intern Pre-Screening Assignment** for Celebrare.

The application fetches photos from the Picsum Photos API and displays them in a responsive gallery with search functionality and favourites.
## Tech Stack

* React (Vite)
* Tailwind CSS
* JavaScript(ES6)

## Features Implemented

### 1. Project Setup

* Created a React + Vite project
* Configured Tailwind CSS for styling
* No external UI libraries used

### 2. Fetch Photos from API
*Photos are fetched from:
*https://picsum.photos/v2/list?limit=30
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

### 4. Real-Time Search Filter

*A search bar is placed at the top of the gallery

*Users can search photos by author name

*Filtering happens in real-time

*No additional API requests are made

*Filtering is done on the already fetched data

*If no author matches the search query, a message is displayed:

"No images found for this author"

### 5. Favourites with useReducer ✅

* Heart icon toggles photo as favourite
* Favourites state is managed using `useReducer`
* State persists across page refreshes using `localStorage`
* `useCallback` used for toggle handler to prevent unnecessary re-renders


📂 Project Structure

src/
│
├── components/
│ ├── Gallery.jsx
│ └── ImageCard.jsx
│
├── hooks/
│ └── useFetchPhotos.js
│
├── App.css
└── app.jsx
└── index.css
└── main.jsx
└── README.md

▶️ Running the Project

Install dependencies:

npm install

Run development server:

npm run dev

Then open:

http://localhost:5173

## API Used

https://picsum.photos/v2/list?limit=30

📌 Status

✅ Requirement 1 – Project Setup
✅ Requirement 2 – API Fetch
✅ Requirement 3 – Responsive Grid
✅ Requirement 4 – Search Filter
✅ Requirement 5 – Favourites with useReducer
⬜ Requirement 6 – Custom Hook
⬜ Requirement 7 – useCallback + useMemo

👨‍💻 Author

Pushpender Chauhan