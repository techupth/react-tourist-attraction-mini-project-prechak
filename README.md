# Trip Finder React Tourist Attraction Mini Project

![TOURIST](client/src/img/tiewnaidee-main-screenshot.png)

Trip Finder is a React application that helps users discover travel destinations based on search keywords. The application fetches and displays a list of trips from a server, allowing users to search for trips, view trip details, and copy trip URLs to the clipboard.

## Features

- **Search Trips**: Enter keywords to search for trips and view the results in real-time.
- **Tag Filtering**: Click on tags to filter trips by specific categories.
- **View Trip Details**: See detailed information about each trip, including a short description and multiple photos.
- **Copy Trip URL**: Easily copy the trip URL to your clipboard for sharing.
- **Responsive Design**: Optimized for mobile devices.
  
  ![TOURIST](client/src/img/tiewnaidee-responsive-screenshot.png)

## Installation

1. Clone the repository:
   ```sh
   git@github.com:techupth/react-tourist-attraction-mini-project-prechak.git

2. Navigate to the project directory & Install dependencies at server:
   ```sh
   cd react-tourist-attraction-mini-project-prechak
   cd server
   npm install
   npm run start
   
3. Navigate to the project directory & Install dependencies at client:
   ```sh
   cd react-tourist-attraction-mini-project-prechak
   cd client
   npm install
   npm run dev

4. Open your browser and go to http://localhost:5173 to see the application in action.

## Code Overview

### `src/App.js`
The main entry point of the application.

### `src/components/Homepage.js`
The main component where the trip search and display logic is implemented.

### Homepage Component

The `Homepage` component handles:

- Fetching trip data based on search keywords.
- Managing loading and error states.
- Displaying trip information and handling user interactions.

### Key Functions

- `getTitles`: Fetches trip data from the server.
- `handleTagClick`: Updates the search keywords based on clicked tags.
- `handleCopyLink`: Copies the trip URL to the clipboard.

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **Axios**: A promise-based HTTP client for making requests to the server.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
- This project is licensed under the MIT License - see the LICENSE file for details.
