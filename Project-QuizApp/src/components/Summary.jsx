import quizComplete from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';

export default function Summary({ userAnswers }) {
    const length = QUESTIONS.length;
    const correctAnswers = userAnswers.filter((userAnswer, index) => userAnswer === QUESTIONS[index].answers[0]).length;
    const skippedAnswers = userAnswers.filter((userAnswer) => userAnswer === null).length;
    const incorrectAnswers = userAnswers.filter((userAnswer, index) => userAnswer !== null && userAnswer !== QUESTIONS[index].answers[0]).length;

    function helperCalculatePercentage(value) {
        if (value === null) {
            return 0;
        }
        return Math.round(value * 100 / length);
    }

    const correctPercentage = helperCalculatePercentage(correctAnswers);
    const skippedPercentage = helperCalculatePercentage(skippedAnswers);
    const incorrectPercentage = helperCalculatePercentage(incorrectAnswers);

    return (
    <div id="summary">
        <img src={quizComplete} alt="Trophy image" />
        <h2>Quiz complete</h2>
        <div id="summary-stats">
            <p>
                <span className='number'>{skippedPercentage}%</span>
                <span className='text'>skipped</span>
            </p>
            <p>
                <span className='number'>{correctPercentage}%</span>
                <span className='text'>answered correctly</span>
            </p>
            <p>
                <span className='number'>{incorrectPercentage}%</span>
                <span className='text'>answered incorrectly</span>
            </p>
        </div>
        <ol>
            {userAnswers.map((userAnswer, index) => {
                let cssClass = 'user-answer';

                if (userAnswer === null) {
                    cssClass += ' skipped';
                } else if (userAnswer === QUESTIONS[index].answers[0]) {
                    cssClass += ' correct';
                } else {
                    cssClass += ' wrong';
                }
                const isCorrect = userAnswer === QUESTIONS[index].answers[0];
                return (
                    <li key={index}>
                        <h3>{index + 1}</h3>
                        <p className="question">{QUESTIONS[index].text}</p>
                        <p className={cssClass}>{userAnswer ?? 'Skipped'}</p>
                    </li>
                )
            }
        )}
        </ol>
    </div>
    )
}