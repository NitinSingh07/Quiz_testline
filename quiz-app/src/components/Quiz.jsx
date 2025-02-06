import  { useState, useEffect } from 'react';
import { fetchQuizData } from '../utils/api';
import QuizQuestion from './QuizQuestion';

const Quiz = () => {
  const [quizData, setQuizData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  useEffect(() => {
    const loadQuizData = async () => {
      const data = await fetchQuizData();
      setQuizData(data);
    };
    loadQuizData();
  }, []);

  const handleAnswer = (isCorrect) => {
    const correctMarks = parseFloat(quizData.correct_answer_marks) || 4;
    const negativeMarks = parseFloat(quizData.negative_marks) || 1;

    if (isCorrect) {
      setScore(prevScore => prevScore + correctMarks);
    } else {
      setScore(prevScore => prevScore - negativeMarks);
    }

    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      setIsQuizComplete(true);
    }
  };

  if (!quizData) {
    return <div>Loading quiz...</div>;
  }

  if (isQuizComplete) {
    const totalPossibleScore = quizData.questions.length * parseFloat(quizData.correct_answer_marks);
    return (
      <div className="quiz-complete">
        <h2>Quiz Complete!</h2>
        <h3>{quizData.title}</h3>
        <p>Your Score: {score} / {totalPossibleScore}</p>
        <p>Total Questions: {quizData.questions.length}</p>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h1>{quizData.title}</h1>
      <div className="quiz-progress">
        Question {currentQuestionIndex + 1} of {quizData.questions.length}
      </div>
      <QuizQuestion 
        question={quizData.questions[currentQuestionIndex]} 
        onAnswer={handleAnswer}
      />
      <div className="score-display">
        Current Score: {score}
      </div>
    </div>
  );
};

export default Quiz;
