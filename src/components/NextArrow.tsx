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
            <button onClick={() => setSlideIndex(slideIndex + 1)}>
                <HiChevronRight />
            </button>
        )
    }
return <div></div>
}

export default NextArrow