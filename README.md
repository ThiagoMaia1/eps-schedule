# EPS Schedule Viewer

A modern, interactive schedule viewer for ETS (Escola de Tecnologia e Sistemas) conference sessions. This application provides an intuitive interface to browse, search, and organize conference talks with powerful filtering capabilities.

![Built with React](https://img.shields.io/badge/React-19.1-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.1-646cff?logo=vite)

> **Note**: This application was created with **Claude 4.5** + **Cursor**

## ✨ Features

- **📅 Complete Schedule View**: Browse all conference sessions organized by day and time
- **🔍 Advanced Search**: Search sessions by title, speaker, or description
- **📍 Location Filtering**: Filter sessions by conference location
- **🎯 Track Filtering**: View sessions by specific tracks
- **⭐ Session Selection System**: Mark and filter your selected sessions (persisted in localStorage)
- **🏢 Venue Filters**: Quick filters for Copley Place and Sheraton venues
- **🏷️ Session Tags**: Filter by EPS and ETS session types
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **💾 Persistent State**: Your selected sessions are saved locally and persist across sessions
- **🔐 Firebase Authentication**: Optional user authentication with email/password or Google sign-in
- **📊 Analytics**: Optional Cloudflare Web Analytics integration (privacy-friendly, no cookies)

## 🚀 Tech Stack

- **React 19** - Latest React with modern hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **PapaParse** - CSV parsing for schedule data
- **React Icons** - Beautiful icon library
- **CSS3** - Modern styling with custom properties

## 📦 Installation

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd eps-schedule
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables (optional):

Create a `.env` file in the root directory:

```bash
# Firebase Configuration (optional)
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

**Firebase Setup** (optional, for authentication):

- See [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) for detailed instructions on setting up Firebase
- The app works without Firebase, but you won't have authentication features

4. Start the development server:

```bash
npm run dev
```

5. Open your browser to `http://localhost:5173`

## 🎯 Usage

### Filtering Sessions

- **Location Filter**: Click location buttons to show only sessions at that venue
- **Track Filter**: Use the track dropdown to filter by specific session tracks
- **Search**: Type in the search box to find sessions by keywords
- **Select Sessions**: Click the star icon on any session to select it
- **Quick Filters**:
  - 🏢 **Copley Place** / **Sheraton**: Filter by venue
  - 🏷️ **EPS** / **ETS**: Filter by session type

### Session Selection Management

- Click any session to mark it as selected
- The selection counter shows your total selected sessions
- Toggle "Show Only Selected Sessions" to view your personalized schedule
- Selected sessions are automatically saved to your browser's local storage

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

### Building for Production

```bash
npm run build
```

The optimized production build will be created in the `dist/` directory.

### Deployment

This project is configured for deployment to GitHub Pages:

```bash
npm run deploy
```

## 📄 Data Format

The application reads schedule data from a CSV file with the following structure:

- **Day**: Conference day
- **Start/End Time**: Session timing
- **Room**: Location/room name
- **Session Title**: Talk title
- **Track**: Session track/category
- **Speakers**: Presenter names
- **Description**: Session description
- **Flags**: Additional metadata (EPS, ETS, venue info)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Powered by [Vite](https://vite.dev/)
- Mostly vibe coded with **Claude 4.5** + **Cursor**
- Icons by [React Icons](https://react-icons.github.io/react-icons/)
