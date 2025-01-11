import { useState, useCallback } from "react";

import QUESTIONS from "../../questions";
import Question from "./Question";

export default function Quiz() {
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

    return (
        <div id="quiz">
            <Question
             key={activeQuestionIndex}
             questionText={QUESTIONS[activeQuestionIndex].text}
             answers={QUESTIONS[activeQuestionIndex].answers}
             answerState={answerState}
             selectedAnswer={userAnswers[activeQuestionIndex]}
             onSelectAnswer={handleSelectAnswer}
             onSkipAnswer={handleSkipAnswer}
             />
        </div>
    )
}