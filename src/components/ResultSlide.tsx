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
        //I still need to figure a way out to make the buttons not over-extend
        //Change font-color
        <div className='w-10/12 mx-10 h-64 mb-5 bg-slate-800/70 rounded'>
            <h3>You ARE</h3>
            <h2>SERRAL!</h2>
            <h3>The Overmind</h3>
            <p>{`Result: ${result}.`}</p>
        </div>
    )
}

export default ResultSlide