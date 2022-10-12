import React from 'react';
import { toast } from 'react-toastify';
import QuizQues from '../QuizQues/QuizQues';

function QuizData({ quizData }) {
  const { correctAnswer, id, question } = quizData;
  const notify = () =>
    toast.info(correctAnswer, {
      position: "top-right",
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

  const answer = (answer) => {
    if (answer === correctAnswer) {
      toast(correctAnswer, {
        position: "top-right",
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  
    return (
      <div>
        <div className="p-6 bg-gray-300 h-46">
          <div className="bg-green-300 p-5">Question: {question}</div>
          {quizData.options.map((option) => (
            <QuizQues
              key={option.id}
              id={id}
              correctAnswer={correctAnswer}
              option={option}
            ></QuizQues>
          ))}

          <div
            className="ml-32"
            onClick={() => {
              answer(correctAnswer);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    );
}

export default QuizData;