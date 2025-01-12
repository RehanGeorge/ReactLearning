import { useState, useCallback } from "react";

import QUESTIONS from "../../questions";
import Question from "./Question";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsOver = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
    }, []);

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
             index={activeQuestionIndex}
             onSelectAnswer={handleSelectAnswer}
             onSkipAnswer={handleSkipAnswer}
             />
        </div>
    )
}