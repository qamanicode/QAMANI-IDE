# QAMANI IDE

Qamani Creative AI generation in a flash.

QAMANI IDE is a creative UI generation tool powered by Gemini 3 Flash. Rapidly generate, explore, and export high-fidelity UI components based on natural language prompts.

Created by [@qamanicode](https://github.com/qamanicode)

## Features

- **Rapid UI Generation**: Create conceptual UI designs in seconds.
- **Conceptual Variations**: Explore different design metaphors and stylistic directions.
- **Source Code Export**: View and copy the raw HTML/CSS for any generated artifact.
- **Immersive Interface**: A focused, gesture-friendly environment for creative exploration.

## Tech Stack

- **React 19**
- **Vite**
- **TypeScript**
- **Google Gemini API (@google/genai)**
- **Tailwind CSS** (for the main application shell)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- A Google Gemini API Key. You can get one from [Google AI Studio](https://aistudio.google.com/).

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd qamani-ide
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory and add your API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```
   (Note: Use `.env.local` if using the default Vite configuration)

### Running Locally

To start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

To create an optimized production build:
```bash
npm run build
```

The output will be in the `dist/` directory.

## Deployment

This app is designed to be a static single-page application (SPA). You can deploy the `dist/` folder to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## License

Apache-2.0
