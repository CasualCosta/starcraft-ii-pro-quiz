import {useState} from 'react'
import PreviousArrow from './PreviousArrow'
import Window from './Window'
import NextArrow from './NextArrow'

const Display = () => {
    const [slideIndex, setSlideIndex] = useState<number>(1)
  return (
    <div>
      <p>Question Index: {slideIndex}</p>
      <PreviousArrow slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
      <Window slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
      <NextArrow slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
    </div>
  )
}

export default Display