import { useState, useCallback, useRef } from "react";

import QUESTIONS from "../../questions";
import QuestionTimer from "./QuestionTimer";

export default function Quiz() {
    const shuffledAnswers = useRef();
    const [answerState, setAnswerState] = useState('');
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;
    const quizIsOver = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setAnswerState('answered');
        setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);

        setTimeout(() => {
            if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
                setAnswerState('correct');
            } else {
                setAnswerState('wrong');
            }

            setTimeout(() => {
                setAnswerState('');
            }, 2000);
        }, 1000);
    }, [activeQuestionIndex]);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizIsOver) {
        return (
            <div id="summary">
                <h2>Quiz is over!</h2>
                <p>You answered {userAnswers.filter((answer, index) => answer === QUESTIONS[index].correctAnswer).length} out of {QUESTIONS.length} questions correctly.</p>
            </div>
        );
    }

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = QUESTIONS[activeQuestionIndex].answers.sort(() => Math.random() - 0.5);
    }

    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer} />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.current.map((answer, index) => {
                        const isSelected = userAnswers[userAnswers.length - 1] === answer;
                        let cssClasses = '';

                        if (answerState === 'answered' && isSelected ) {
                             cssClasses = 'selected';
                        }

                        if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                            cssClasses = answerState;
                        }
                        
                        return (
                        <li key={index} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)} className={cssClasses}>
                                {answer}
                            </button>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}