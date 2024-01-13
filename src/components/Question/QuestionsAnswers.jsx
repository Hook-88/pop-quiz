import { useContext } from "react"
import { nanoid } from "nanoid"
import { QuestionContext } from "./Question"
import Answer from "./Answer"

export default function QuestionAnswers() {
  const {questionData} = useContext(QuestionContext)
  const {correct_answer, incorrect_answers} = questionData

  const shuffledAnswerObjects = 
    shuffleItemInArray().map(item => ({value: item, id: nanoid()}))

  function shuffleItemInArray() {
    const randomIndex = 
      Math.floor(Math.random() * incorrect_answers.length)
    const firstPart = incorrect_answers.slice(0, randomIndex)
    const secondPart = incorrect_answers.slice(randomIndex)

    firstPart.push(correct_answer)

    return [...firstPart, ...secondPart]
  }


  return (
    <div>
      {shuffledAnswerObjects.map(answer => (
        <Answer key={answer.id}>{answer.value}</Answer>
      ))}
    </div>
  )
}

// category: "Entertainment: Video Games"
// correct_answer: "Lee Everett"
// difficulty: "easy"
// id: "BS_kB11tNitnEifaQ6duE"
// incorrect_answers: Array(3) [ "Clementine", "Kenny", "Rick Grimes" ]
// question: "Who is the protagonist in the game &quot;The Walking Dead: Season One&quot;?"
// type: "multiple"