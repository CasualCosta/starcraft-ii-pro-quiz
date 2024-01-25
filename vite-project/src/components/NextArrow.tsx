import { HiChevronRight } from 'react-icons/hi2'
import { SetStateAction, Dispatch } from 'react'

interface Props {
    slideIndex: number,
    setSlideIndex: Dispatch<SetStateAction<number>>
}
const NextArrow: React.FC<Props> = ({slideIndex: questionIndex, setSlideIndex: setQuestionIndex}) => {
    if(questionIndex < 11)
    return (
        <button onClick={() => setQuestionIndex(questionIndex + 1)}>
            <HiChevronRight />
        </button>
    )
return <div></div>
}

export default NextArrow