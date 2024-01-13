import { useContext, useState } from "react"
import { QuestionContext } from "./Question"

export default function Answer({children}) {
  const {id} = useContext(QuestionContext).questionData
  const [on, setOn] = useState(false)

  function select() {
    setOn(true)
  }

  return (
    <span
      onClick={select}
    >
      <input 
        type="radio" 
        name={id} 
        onChange={() => console.log("selecterd")}
        checked={on}
        
      />
      {children}
    </span>
  )
}