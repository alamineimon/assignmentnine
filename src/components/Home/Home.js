import React from 'react';
import { useLoaderData } from 'react-router';
import Feature from '../Feature/Feature';
import Topics from '../Topics/Topics';

function Home() {
    const quizData = useLoaderData().data
    return (
      <div className="">
        <Feature></Feature>
        <div className="grid md:grid-cols-4  gap-3 sm:grid-cols-1 p-4 w-11/12	 m-auto">
          {quizData.map((quiz) => (
            <Topics key={quiz.id} quiz={quiz}></Topics>
          ))}
        </div>
      </div>
    );
}

export default Home;