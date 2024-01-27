import React, {Dispatch, SetStateAction} from 'react'
import { Question } from '../questions'
import AnswerButton from './AnswerButton'

interface Props {
    question: Question
    slideIndex: number
    setSlideIndex: Dispatch<SetStateAction<number>>
}
const QuestionSlide: React.FC<Props> = ({question, setSlideIndex: setSlideIndex, slideIndex: slideIndex}) => {

    return (
        <div>
            <h3>{question.description}</h3>
            {question.answers.map((answer, index) => {
                return(
                    <AnswerButton name={answer.name} questionIndex={slideIndex} setQuestionIndex={setSlideIndex} answerIndex={index} question={question} key={index} />
                )
            })}
        </div>
  )
}

export default QuestionSlide