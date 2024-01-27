import { questions } from '../questions'

const ResultSlide = () => {
    const result = [0,0]
    for(let i = 0; i < questions.length; i++){
        const q = questions[i]
        if(q.selected < 0)
            continue
        const answer = q.answers[q.selected]
        result[0] += answer.x
        result[1] += answer.y
    }
    return (
        <div>
            <h3>You ARE</h3>
            <h2>SERRAL!</h2>
            <h3>The Overmind</h3>
            <p>{`Result: ${result}.`}</p>
        </div>
    )
}

export default ResultSlide