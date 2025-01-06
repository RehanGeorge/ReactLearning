import { useState } from "react"

export default function Quiz() {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);

    return (
        <div>
            <p>Currently active question</p>
            <p>Answer 1</p>
            <p>Answer 2</p>
            <p>Answer 3</p>
            <p>Answer 4</p>
        </div>
    )
}