import { questions } from '../questions'
import { pros } from '../pros'

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
    
    const pro = pros[Math.floor(Math.random() * 6)]
    return (
        <div className="flex w-10/12 justify-evenly mx-12 gap-8">

            <div className='h-4/6 w-4/12'><img src={pro.image} className="h-46 w-46" /></div>
            <div className='bg-slate-800/70 rounded w-7/12 flex flex-col justify-center'>
                <p className="text-blue-300/40">You are</p>
                <p className='text-blue-300 text-4xl'>{pro.name.toUpperCase()}!</p>
                <p className='text-blue-300/90 text-xl'>{pro.title}</p>
                {/* <p className='text-blue-300'>{`Result: ${result}.`}</p> */}
            </div>
        </div>
    )
}

export default ResultSlide