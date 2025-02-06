const QuizSummary = ({ score, total, points, streak }) => {
  const percentage = Math.round((score / total) * 100);
  
  return (
    <div className="text-center p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700 max-w-md w-full">
      <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
        Quiz Complete! 🎉
      </h2>
      
      <div className="space-y-4 mb-8">
        <div className="p-4 bg-gray-700 rounded-xl">
          <p className="text-2xl font-bold text-white">{percentage}%</p>
          <p className="text-gray-300">Accuracy</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-700 rounded-xl">
            <p className="text-xl font-bold text-blue-400">{points}</p>
            <p className="text-gray-300">Total Points</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-xl">
            <p className="text-xl font-bold text-orange-400">{streak}🔥</p>
            <p className="text-gray-300">Max Streak</p>
          </div>
        </div>
      </div>

      <button 
        onClick={() => window.location.reload()}
        className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl 
          font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform 
          hover:scale-105 shadow-lg"
      >
        Try Again
      </button>
    </div>
  );
};

export default QuizSummary;
