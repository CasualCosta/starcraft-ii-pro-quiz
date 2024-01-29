import { HiChevronRight } from 'react-icons/hi2'
import { SetStateAction, Dispatch } from 'react'
import { Question } from '../questions'

interface Props {
    slideIndex: number,
    setSlideIndex: Dispatch<SetStateAction<number>>
    question: Question | null,
    quizLength: number
}
const NextArrow: React.FC<Props> = ({slideIndex, setSlideIndex, question, quizLength}) => {
    if((question && question?.selected > -1) || (!question && slideIndex < quizLength)){
        return (
            <button className="text-blue-300 bg-slate-800/70 flex flex-col justify-center items-center w-10 hover:bg-slate-800/50" onClick={() => setSlideIndex(slideIndex + 1)}>
                <HiChevronRight />
            </button>
        )
    }
return <div className="w-10"></div>
}

export default NextArrow