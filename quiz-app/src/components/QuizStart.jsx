import { useNavigate } from "react-router-dom";
import ParticlesBackground from "./ParticlesBackground";

const QuizStart = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticlesBackground />
      <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-center space-y-8 max-w-md w-full p-8 rounded-2xl 
          bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-lg 
          border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
              text-transparent bg-clip-text animate-gradient">
              Testline Quiz
            </h1>
            <div className="animate-float">
              <span className="text-6xl">🚀</span>
            </div>
            <p className="text-gray-300 text-lg">
              Embark on an interstellar journey of knowledge
            </p>
          </div>
          
          <div className="space-y-4">
            <button
              className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl 
                font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 
                transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 relative overflow-hidden
                group text-white text-lg"
              onClick={() => navigate("/quiz")}
            >
              <span className="relative z-10">Launch Quiz</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 
                opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            
            <p className="text-gray-400 text-sm">
              Ready to test your cosmic knowledge?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizStart;
