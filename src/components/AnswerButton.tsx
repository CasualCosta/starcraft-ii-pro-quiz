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
        <button onClick={selectFunction} className={`text-blue-300  bg-slate-800/70 h-20 p-5 hover:bg-slate-800/50 ${answerIndex === question.selected ? "rounded border-blue-300 border-dashed border-2" : ""}`}>{answerIndex}. {name}</button>
    )
}

export default AnswerButton