import { questions } from '../questions'
import { pros, Pro } from '../pros'

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
    
    const pro = pros[0]
    return (
        <div className="flex w-10/12 justify-evenly">

            <div className='h-64 bg-slate-800/70 w-5/12 flex flex-col justify-center'><img src={pro.image} className="size-24" /></div>
            <div className='h-64 bg-slate-800/70 rounded w-5/12 flex flex-col justify-center'>
                <p className="text-blue-300/40">You are</p>
                <p className='text-blue-300 text-4xl'>{pro.name.toUpperCase()}!</p>
                <p className='text-blue-300/90 text-xl'>{pro.title}</p>
                <p className='text-blue-300'>{`Result: ${result}.`}</p>
            </div>
        </div>
    )
}

export default ResultSlide