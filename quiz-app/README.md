# Interactive Quiz Application

A modern, gamified quiz application built with React and TailwindCSS, featuring real-time scoring, timers, and interactive UI elements.

## Features

- **Dynamic Quiz Interface**
  - Real-time 30-second timer per question
  - Progress tracking
  - Interactive answer selection
  - Visual feedback for correct/incorrect answers

- **Gamification Elements**
  - Point scoring system
  - Streak bonuses
  - Time-based bonus points
  - Progress indicators

- **Modern UI/UX**
  - Responsive design
  - Smooth animations
  - Gradient-based styling
  - Progress bars and visual feedback

## Tech Stack

- React.js
- TailwindCSS
- React Router
- PropTypes for type checking

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd quiz-app

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Setup

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_endpoint
```

## Project Structure

```
quiz-app/
├── src/
│   ├── components/
│   │   ├── QuizQuestion.jsx
│   │   ├── QuizStart.jsx
│   │   └── QuizSummary.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Quiz.jsx
│   ├── utils/
│   │   └── api.js
│   ├── App.jsx
│   └── main.jsx
└── README.md
```

## Features in Detail

### Scoring System
- Base points: 100 per correct answer
- Time bonus: Remaining seconds × 10
- Streak bonus: Current streak × 50

### Timer System
- 30 seconds per question
- Visual countdown
- Color changes based on remaining time
- Automatic progression when time expires

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- Inspired by modern quiz applications
- Built with accessibility and user experience in mind
