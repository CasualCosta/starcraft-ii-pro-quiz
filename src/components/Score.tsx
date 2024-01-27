import { questions } from '../questions'
questions

const Score = () => {
    function calculateScore(){
        let sum = [0,0]
        for(let i = 0; i < questions.length; i++){
            if(questions[i].selected === -1)
                continue
            sum[0] += questions[i].answers[questions[i].selected].x
            sum[1] += questions[i].answers[questions[i].selected].y
        }
        return sum
    }
    return (
        <div>Score: {calculateScore().join(" ")}</div>
    )
}

export default Score