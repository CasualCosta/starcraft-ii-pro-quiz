import React from 'react'
import { Dispatch, SetStateAction } from 'react'
import { Question } from '../questions'

type Props = {
    name: string,
    questionIndex: number,
    setQuestionIndex: Dispatch<SetStateAction<number>>,
    answerIndex: number,
    question: Question
}
const AnswerButton: React.FC<Props> = ({name, questionIndex, setQuestionIndex, answerIndex, question}) => {
    const selectFunction = (): void => {
        setQuestionIndex(questionIndex + 1)
        console.log(`Selected answer index: ${answerIndex}`)
        question.selected = answerIndex
    }
    return (
        <button onClick={selectFunction} className='text-blue-800'>{answerIndex}. {name + `${answerIndex === question.selected ? " x" : ""}`}</button>
    )
}

export default AnswerButton