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
            <div className="h-24 mb-5 bg-slate-800/70 rounded">
                <h3 className="px-8 py-3 text-blue-300 text-2xl">{question.description}</h3>
            </div>
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