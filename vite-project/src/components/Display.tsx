import {useState} from 'react'
import PreviousArrow from './PreviousArrow'
import Window from './Window'
import NextArrow from './NextArrow'
import { questions } from '../questions'

const Display = () => {
    const [slideIndex, setSlideIndex] = useState<number>(0)
    return (
      <div>
        <p>Question Index: {slideIndex}</p>
        <PreviousArrow slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
        <Window slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
        <NextArrow slideIndex={slideIndex} setSlideIndex={setSlideIndex} question={questions[slideIndex]} quizLength={questions.length + 1} />
      </div>
    )
}

export default Display