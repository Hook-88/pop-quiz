import { useContext, useState } from "react"
import { QuestionContext } from "./Question"
import { QuizContext } from "../Quiz"
import classNames from "classnames"

//TODO make click on span second time posible
//Idea: create state for question array per quesion obj en checked prop
export default function Answer({children}) {
  const {id} = useContext(QuestionContext).questionData
  const {onUserInput, userInput} = useContext(QuizContext)

  const cssSpan = classNames("answer-button")

  return (
    <span
      onClick={onUserInput}
      className={cssSpan}
      data-name={id}
      data-value={children}
    >
      {children}
    </span>
  )
}