export default function Answers({ answers, selectedAnswer, answerState}) {
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
}
