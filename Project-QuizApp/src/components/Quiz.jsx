import { useState } from 'react';

import QUESTIONS from '../questions.js';
import quizComplete from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer.jsx';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    function handleSelectAnswer(answer) {
        setUserAnswers((prevUserAnswers) => [...prevUserAnswers, answer])
    }

    if (quizIsComplete) {
        return (
        <div id="summary">
            <img src={quizComplete} alt="Trophy image" />
            <h2>Quiz complete</h2>
        </div>
        )
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers
                    .map((answer, index) => (
                            <li key={index} className='answer'>
                                <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                            </li>
                        ) )}
                </ul>
                <QuestionTimer />
            </div>
        </div>
    )
}