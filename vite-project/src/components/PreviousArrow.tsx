import { HiChevronLeft } from 'react-icons/hi2'

interface Props {
    questionIndex: number
}
const PreviousArrow:React.FC<Props> = ({questionIndex}) => {
    if(questionIndex != 0)
        return (
            <button>
                <HiChevronLeft />
            </button>
        )
    return <div></div>
}

export default PreviousArrow