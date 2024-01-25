import { HiChevronLeft } from 'react-icons/hi2'
import { SetStateAction, Dispatch } from 'react'

interface Props {
    slideIndex: number,
    setSlideIndex: Dispatch<SetStateAction<number>>
}
const PreviousArrow:React.FC<Props> = ({slideIndex: slideIndex, setSlideIndex: setSlideIndex}) => {
    if(slideIndex != 0)
        return (
            <button onClick={() => setSlideIndex(slideIndex - 1)}>
                <HiChevronLeft />
            </button>
        )
    return <div></div>
}

export default PreviousArrow