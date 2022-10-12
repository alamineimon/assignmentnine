import React from 'react';
import { Link } from "react-router-dom";

function Topics({ quiz }) {
  const {logo , name, total, id} = quiz

  return (
    <div className=" border rounded border-gray-400 text-black bg-gray-300">
      <img className="h-72 w-full" src={logo} alt="" />
      <div className=" bg-white p-3 text-center">
        <h1 className="text-2xl my-3 font-bold">{name}</h1>
        <h3>Total: {total}</h3>
        <Link to={`/quiz/${id}`}>
          <button className=" rounded py-2 px-16 mt-3 bg-green-400 hover:bg-blue-700 hover:text-white">
            Run Quiz
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Topics;