import { useNavigate } from "react-router-dom";

const QuizStart = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4">
      <div className="text-center space-y-8 max-w-md w-full p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-2xl">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Welcome to the Quiz
        </h1>
        
        <p className="text-gray-300">
          Test your knowledge and earn points while racing against time!
        </p>
        
        <button
          className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl 
            font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 
            transform hover:scale-105 shadow-lg"
          onClick={() => navigate("/quiz")}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizStart;
