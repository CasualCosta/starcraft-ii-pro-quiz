import { HiChevronLeft } from 'react-icons/hi2'
import { SetStateAction, Dispatch } from 'react'

interface Props {
    slideIndex: number,
    setSlideIndex: Dispatch<SetStateAction<number>>
}
const PreviousArrow:React.FC<Props> = ({slideIndex: slideIndex, setSlideIndex: setSlideIndex}) => {
    if(slideIndex != 0)
        return (
            <button className="text-blue-300 bg-slate-800/70 flex flex-col justify-center items-center w-10 hover:bg-slate-800/50" onClick={() => setSlideIndex(slideIndex - 1)}>
                <HiChevronLeft />
            </button>
        )
    return <div className="w-10"></div>
}

export default PreviousArrow