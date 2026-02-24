# Weather App

A modern, responsive weather application built with React, TypeScript, and Vite. This app allows users to search for cities and view current weather conditions and forecasts using real-time data from external APIs.

## Features

- Search for cities with autocomplete suggestions
- View current weather conditions
- Display 5-day weather forecast
- Responsive design with Tailwind CSS
- Fast and efficient data fetching with TanStack React Query

## Technologies Used

- **React 19.2.0**: A JavaScript library for building user interfaces
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript
- **Vite**: A fast build tool and development server
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development
- **Axios**: A promise-based HTTP client for making API requests
- **TanStack React Query**: A powerful data synchronization library for React
- **Lucide React**: A beautiful and consistent icon library
- **Shadcn/ui**: A collection of reusable UI components built on Radix UI
- **Lodash.debounce**: A utility for debouncing functions

## APIs Used

This application integrates with two external APIs for weather and location data:

### OpenWeatherMap API

- **Purpose**: Provides current weather data and 5-day forecasts
- **API Key Required**: Yes
- **How to Get API Key**:
  1. Visit [https://openweathermap.org/api](https://openweathermap.org/api)
  2. Create a free account
  3. Generate an API key from your account dashboard

### RapidAPI GeoDB Cities

- **Purpose**: Provides city search and location data for autocomplete functionality
- **API Key Required**: Yes
- **How to Get API Key**:
  1. Visit [https://rapidapi.com/wirefreethought/api/geodb-cities](https://rapidapi.com/wirefreethought/api/geodb-cities)
  2. Create a free account on RapidAPI
  3. Subscribe to the GeoDB Cities API and obtain your API key

## Folder Structure

```
weather-app/
├── public/                 # Static assets
├── src/
│   ├── api/
│   │   ├── clients/        # Axios client configurations
│   │   │   ├── openWeather.client.ts
│   │   │   └── rapid.client.ts
│   │   └── services/       # API service functions
│   │       ├── openWeather.service.ts
│   │       └── rapid.service.ts
│   ├── assets/             # Static assets like images and icons
│   │   ├── weatherBackground/
│   │   └── weatherIcon/
│   ├── components/         # Reusable React components
│   │   ├── Providers.tsx   # Context providers
│   │   ├── search/         # Search-related components
│   │   ├── ui/             # UI components (buttons, cards, etc.)
│   │   └── weather/        # Weather display components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions and type definitions
│   │   ├── typings/        # TypeScript interfaces
│   │   └── utils.ts
│   ├── pages/              # Page components
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # App entry point
│   └── index.css           # Global styles
├── components.json         # Shadcn/ui configuration
├── eslint.config.js        # ESLint configuration
├── package.json            # Project dependencies and scripts
├── tsconfig*.json          # TypeScript configurations
├── vite.config.ts          # Vite configuration
└── README.md               # This file
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following variables:

   ```env
   VITE_OPEN_WEATHER_API_BASE_URL=https://api.openweathermap.org
   VITE_OPEN_WEATHER_API_KEY=your_openweathermap_api_key_here

   VITE_RAPID_API_BASE_URL=https://wft-geo-db.p.rapidapi.com
   VITE_RAPID_API_KEY=your_rapidapi_key_here
   VITE_RAPID_API_HOST=wft-geo-db.p.rapidapi.com
   ```

   Replace the placeholder values with your actual API keys obtained from the respective services.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

### Available Scripts

- `npm run dev`: Starts the development server with hot reloading
- `npm run build`: Builds the app for production
- `npm run lint`: Runs ESLint to check for code issues
- `npm run preview`: Previews the production build locally

## Usage

1. Enter a city name in the search bar to get weather suggestions
2. Select a city from the dropdown to view its current weather and forecast
3. The app displays current conditions, temperature, humidity, wind speed, and a 5-day forecast

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
