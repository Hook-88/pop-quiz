import { useContext } from "react"
import { QuizContext } from "./Quiz"

export default function QuizScore() {
  const {data, userInput} = useContext(QuizContext)
  //convert object in array of object
  const userInputArray = 
    Object.entries(userInput).map(([key, value]) => {
      return {
        id: key,
        value
      }
    })

  const correctGivenAnsers = 
    userInputArray.filter(item => {
      const questionDataObj = data.find(question => question.id === item.id)
      return item.value === questionDataObj.correct_answer
    })

  return (
    <p
      style={
        {
          margin: "0"
        }
      }
    >{`You answered ${correctGivenAnsers.length} of ${data.length} questions correct`}</p>
  )
}