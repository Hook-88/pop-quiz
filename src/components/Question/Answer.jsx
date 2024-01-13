import { useContext } from "react"
import { QuestionContext } from "./Question"

export default function Answer({children}) {
  const {id} = useContext(QuestionContext).questionData

  return (
    <span>
      <input type="radio" name={id}/>
      {children}
    </span>
  )
}