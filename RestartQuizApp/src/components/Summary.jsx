import quizCompleteImg from '../assets/quiz-complete.png';

export default function Summary() {
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="Trophy icon" />
                <h2>Quiz Completed!</h2>
                <div id="summary-stats">
                    <p>
                        <span className='number'>10%</span>
                        <span className='text'>skipped</span>
                    </p>
                    <p>
                        <span className='number'>10%</span>
                        <span className='text'>correct</span>
                    </p>
                    <p>
                        <span className='number'>10%</span>
                        <span className='text'>incorrect</span>
                    </p>
                </div>
                <ol>
                    <li>
                        <h3>2</h3>
                        <p className='question'>question text</p>
                        <p className='answer'>correct answer</p>
                    </li>
                </ol>
            </div>
        );
}