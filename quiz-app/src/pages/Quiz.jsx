import { useEffect, useState } from "react";
import { fetchQuizData } from "../utils/api";
import QuizQuestion from "../components/QuizQuestion";
import QuizSummary from "../components/QuizSummary";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [streak, setStreak] = useState(0);
  const [points, setPoints] = useState(0);
  const [timer, setTimer] = useState(30); // New state for timer

  useEffect(() => {
    fetchQuizData().then((data) => {
      if (data && data.questions) {
        setQuestions(data.questions);
        setLoading(false);
      } else {
        console.error("Failed to load quiz data");
        setLoading(false);
      }
    });
  }, []);

  const handleAnswer = (correct) => {
    if (correct) {
      const timeBonus = Math.floor(timer * 10);
      const streakBonus = streak * 50;
      setScore((prev) => prev + 1);
      setStreak((prev) => prev + 1);
      setPoints((prev) => prev + 100 + timeBonus + streakBonus);
    } else {
      setStreak(0);
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500" />
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      {!quizCompleted && (
        <div className="text-white mb-4">
          <span className="mr-4">Points: {points}</span>
          <span className="mr-4">Streak: {streak}🔥</span>
        </div>
      )}

      {quizCompleted ? (
        <QuizSummary score={score} total={questions.length} points={points} streak={streak} />
      ) : (
        <QuizQuestion
          question={questions[currentIndex]}
          onAnswer={handleAnswer}
          questionNumber={currentIndex + 1}
          totalQuestions={questions.length}
          updateTimer={setTimer} // Pass timer state updater
        />
      )}
    </div>
  );
};

export default Quiz;
