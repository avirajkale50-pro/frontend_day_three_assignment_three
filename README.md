# Notes App

A simple, component-based Notes application built with TypeScript and Vite. Create, view, and manage your notes with a clean and organized codebase.


## Project Structure

```
src/
├── types/
│   └── Note.ts              # Note interface definition
├── store/
│   └── notesStore.ts        # State management for notes
├── components/
│   ├── HomeView.ts          # Home page component
│   └── CreateNoteView.ts    # Create note form component
├── router/
│   └── router.ts            # Routing logic
├── utils/
│   └── navigation.ts        # Navigation utilities
└── main.ts                  # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Usage

1. **View Notes**: On the home page, you'll see all your notes or a message if you don't have any yet.

2. **Create Note**: Click the "Create Note" button to navigate to the create page, fill in the title and content, then click "Save".

3. **Navigate**: Use the browser's back button or the "Back" button to navigate between pages.

## Technologies Used

- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Vanilla JavaScript** - No framework dependencies

## Architecture

The application follows a component-based architecture:

- **Components**: Self-contained UI components that handle their own rendering and event management
- **Store**: Centralized state management using a simple class-based store
- **Router**: Client-side routing with browser history API support
- **Utils**: Reusable utility functions

This structure makes the codebase easy to understand, maintain, and extend.
