import { useContext, useState } from "react"
import { QuestionContext } from "./Question"
import classNames from "classnames"

//TODO make click on span second time posible
//Idea: create state for question array per quesion obj en checked prop
export default function Answer({children}) {
  const {id} = useContext(QuestionContext).questionData
  const [on, setOn] = useState(false)

  function select() {
    setOn(true)
  }

  const cssSpan = classNames("answer-button")

  return (
    <span
      onClick={select}
      className={cssSpan}
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