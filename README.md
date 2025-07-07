# Prime Number Guessing Game

A React + TypeScript game built with Vite that challenges players to determine whether randomly generated numbers are prime.

## Features

- Random number generation within a configurable range  
- Prime checking logic in a custom hook  
- Interactive guessing with immediate feedback  
- Guess history display  
- Session management and data saving via RandomPlayables API  
- Responsive design  

## Technologies

- React  
- TypeScript  
- Vite  
- Custom React hooks  
- Fetch API for backend communication  

## Prerequisites

- Node.js (>=14)  
- npm or yarn  
- A game ID from RandomPlayables (set as environment variable `VITE_GAME_ID`)  

## Installation

1. Clone the repository  
   git clone https://github.com/your-username/prime-guessing-game.git  
   cd prime-guessing-game

2. Install dependencies  
   npm install  
   # or  
   yarn

3. Create a `.env` file in the root directory and add your game ID:  
   VITE_GAME_ID=your_game_id_here

## Available Scripts

In the project directory, you can run:

- `npm run dev` or `yarn dev`  
  Starts the development server (usually at http://localhost:3000)

- `npm run build` or `yarn build`  
  Builds the app for production to the `dist` folder

- `npm run preview` or `yarn preview`  
  Locally preview the production build

## Project Structure

```
/src
  /assets          # Static assets like logo.svg
  /components      # UI components (Header, GuessInput, GuessHistory, Feedback)
  /hooks           # Custom hook (usePrimeGame)
  /services        # API service for session and game data
  /constants       # Game constants (max attempts, number range)
  /utils           # Utility functions (prime check, random number)
  /types           # TypeScript types
  main.tsx         # App entry point
  App.tsx          # Main layout component
  index.css        # Global styles
/env.d.ts          # Type declarations for environment variables
```

## Game Rules

1. A random number is generated within the specified range.  
2. The player guesses if the number is prime or not.  
3. Immediate feedback is provided.  
4. The game records the guess history and saves data after each round.

## Environment Variables

- `VITE_GAME_ID`: The unique game identifier provided by RandomPlayables.  
- `NODE_ENV`: Set to `production` or `development`.

## API Integration

The game uses the `initGameSession` and `saveGameData` functions from `/src/services/apiService.ts` to manage sessions and save game rounds to the RandomPlayables backend.

## License

MIT License.