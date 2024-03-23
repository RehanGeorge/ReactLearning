import quizComplete from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';

export default function Summary({ userAnswers }) {
    const length = QUESTIONS.length;
    console.log(userAnswers);
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
            <li>
                <h3>2</h3>
                <p className="question">question text</p>
                <p className="user-answer">user's answer</p>
            </li>
        </ol>
    </div>
    )
}