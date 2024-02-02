import React from 'react'

interface Props {
    slideIndex: number
}


const ProgressSlider: React.FC<Props> = ({slideIndex: slideIndex}) => {
    return (
        <progress className='mt-4 rounded w-full accent-pink-500' max="10" value={slideIndex}><p>10</p></progress>
    )
}

export default ProgressSlider