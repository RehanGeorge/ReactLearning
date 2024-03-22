import QuestionTimer from "./QuestionTimer"
import Answers from "./Answers"

export default function Question({ questionText, answers, onSelectAnswer, selectedAnswer, answerState, handleSkipAnswer, activeQuestionIndex}) {
    return (
        <div id="question">
            <QuestionTimer
            timeout={10000}
            onTimeout={handleSkipAnswer} />
            <h2>{questionText}</h2>
            <Answers 
            answers={answers}
            selectedAnswer={selectedAnswer}
            answerState={answerState}
            onSelect={onSelectAnswer}
            onSkipAnswer={handleSkipAnswer}
            />
        </div>
    )
}