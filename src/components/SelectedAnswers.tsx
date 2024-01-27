import { questions } from '../questions'

const SelectedAnswers = () => {
  return (
    <div>
        <p>{questions.map(q => {return q.selected}).join(" ")}</p>
    </div>
  )
}

export default SelectedAnswers