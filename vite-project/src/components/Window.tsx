import React, {Dispatch, SetStateAction} from 'react'
import { questions } from '../questions'
import QuestionSlide from './QuestionSlide'

interface Props {
    slideIndex: number
    setSlideIndex: Dispatch<SetStateAction<number>>
}
const Window : React.FC<Props> = ({slideIndex, setSlideIndex}) => {
    if (slideIndex < questions.length)
    return (
        <QuestionSlide question={questions[slideIndex]} slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
    )
}

export default Window