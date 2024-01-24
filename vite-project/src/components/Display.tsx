import {useState} from 'react'
import PreviousArrow from './PreviousArrow'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

const Display = () => {
    const [questionIndex, setQuestionIndex] = useState<number>(1)
  return (
    <PreviousArrow questionIndex={questionIndex} />
  )
}

export default Display