import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function QuizQues({ correctAnswer, option }) {
  
    const notify = () => toast(result());
    const result = () => {
      if (option === correctAnswer) {
        return "Congratulation..!";
      } else {
        return "Try Again";
      }
    };
    return (
      <div className="bg-gray-400 border rounded py-2 my-2 px-2">
        <input
          onClick={notify}   
          name="flexRadioDefault"
          id="flexRadioDefault1"
          type="radio"
        />
        <label className="form-check-label" for="flexRadioDefault1" htmlFor="">
          {option}
        </label>
        <ToastContainer></ToastContainer>
      </div>
    );
}

export default QuizQues;