import React from 'react';
import { useLoaderData } from 'react-router';
import QuizData from '../QuizData/QuizData';

function Quiz() {
    const loedQuiz = useLoaderData().data
    console.log(loedQuiz);
    return (
      <div className="grid gap-12 md:grid-cols-3 sm:grid-cols-2">
        {loedQuiz.questions.map((quizData) => (
          <QuizData key={loedQuiz.id} quizData={quizData}></QuizData>
        ))}
      </div>
    );
}

export default Quiz;