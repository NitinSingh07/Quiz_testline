import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const QuizQuestion = ({
  question,
  onAnswer,
  questionNumber,
  totalQuestions,
  updateTimer,
}) => {
  const [timer, setTimer] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    setTimer(30); // Reset timer to 30 for each new question
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          onAnswer(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [question, onAnswer]);

  useEffect(() => {
    updateTimer(timer); // Send timer value to parent (Quiz.jsx)
  }, [timer, updateTimer]);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setTimeout(() => {
      const isCorrect = question.options.find(option => option.description === answer)?.is_correct;
      onAnswer(isCorrect); // Compare with is_correct property
      setSelectedAnswer(null);
    }, 1000);
  };

  const getTimerColor = () => {
    if (timer <= 5) return "text-red-500 animate-pulse";
    if (timer <= 10) return "text-yellow-500";
    return "text-green-500";
  };

  if (!question) {
    return <div>Loading question...</div>;
  }

  return (
    <div className="w-full max-w-2xl p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl border border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <div className="text-blue-400 text-lg font-semibold">
          Question {questionNumber}/{totalQuestions}
        </div>
        <div className={`text-xl font-bold ${getTimerColor()} transition-colors duration-300`}>
          {timer > 0 ? `${timer}s remaining` : "Time's up!"}
        </div>
      </div>

      <h2 className="text-2xl text-white mb-8 font-bold">{question.description}</h2>

      <div className="grid grid-cols-1 gap-4">
        {question.options?.map((option) => (
          <button
            key={option.id}
            className={`p-5 rounded-xl transition-all duration-300 transform hover:scale-102
              ${selectedAnswer === option.description
                ? option.is_correct
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
                : "bg-gradient-to-r from-gray-700 to-gray-600 hover:from-blue-600 hover:to-blue-700"
              } text-white text-left font-medium shadow-lg`}
            onClick={() => !selectedAnswer && handleAnswerClick(option.description)}
            disabled={selectedAnswer !== null}
          >
            {option.description ? option.description : "No description available"} {/* Render option.description */}
          </button>
        ))}
      </div>

      <div className="mt-6 h-3 bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ${
            timer <= 5 ? 'bg-red-500' : timer <= 10 ? 'bg-yellow-500' : 'bg-blue-500'
          }`}
          style={{ width: `${(timer / 30) * 100}%` }}
        />
      </div>
    </div>
  );
};

QuizQuestion.propTypes = {
  question: PropTypes.shape({
    description: PropTypes.string.isRequired,
    correctAnswer: PropTypes.shape({
      description: PropTypes.string.isRequired,
    }).isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
        is_correct: PropTypes.bool.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onAnswer: PropTypes.func.isRequired,
  questionNumber: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  updateTimer: PropTypes.func.isRequired,
};

export default QuizQuestion;
