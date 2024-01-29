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
        <div className="w-10/12 mx-10">
            <h3 className="text-sky-400 text-2xl h-24 bg-slate-800/70 mb-5">{question.description}</h3>
            <div className='grid grid-cols-2 grid-rows-2 gap-4'>
                {question.answers.map((answer, index) => {
                    return(
                        <AnswerButton name={answer.name} questionIndex={slideIndex} setQuestionIndex={setSlideIndex} answerIndex={index} question={question} key={index} />
                    )
                })}
            </div>
        </div>
  )
}

export default QuestionSlide