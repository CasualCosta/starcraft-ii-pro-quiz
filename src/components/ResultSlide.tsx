import { questions } from '../questions'
import { pros } from '../pros'
import { FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa6'

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
            <div className='bg-slate-800/70 rounded w-7/12 flex flex-gap flex-col justify-center'>
                <div className='basis-2/3 flex flex-col justify-center'>
                    <p className="text-blue-300/40">You are</p>
                    <p className='text-blue-300 text-4xl'>{pro.name.toUpperCase()}!</p>
                    <p className='text-blue-300/90 text-xl'>{pro.title}</p>
                    {/* <p className='text-blue-300'>{`Result: ${result}.`}</p> */}
                </div>
                <div className='text-blue-300/70 basis-1/4 flex flex-col justify-end'>
                    <p className='text-sm'>This card is a courtesy of Wintergaming. Check his him out!</p>
                    <div className='flex justify-center gap-8 my-2'>
                        <a href='https://twitch.tv/wintergaming'><FaTwitch size={30}/></a>
                        <a href='https://www.youtube.com/@WinterStarcraft'><FaYoutube size={30} /></a>
                        <a href='https://twitter.com/StarcraftWinter'><FaTwitter size={30} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultSlide