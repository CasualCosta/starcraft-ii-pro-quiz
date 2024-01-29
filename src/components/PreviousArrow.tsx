import { HiChevronLeft } from 'react-icons/hi2'
import { SetStateAction, Dispatch } from 'react'

interface Props {
    slideIndex: number,
    setSlideIndex: Dispatch<SetStateAction<number>>
}
const PreviousArrow:React.FC<Props> = ({slideIndex: slideIndex, setSlideIndex: setSlideIndex}) => {
    if(slideIndex != 0)
        return (
            <button className="text-blue-300 bg-slate-800/70 flex flex-col justify-center items-center w-10" onClick={() => setSlideIndex(slideIndex - 1)}>
                <HiChevronLeft />
            </button>
        )
    return <div className="w-4"></div>
}

export default PreviousArrow