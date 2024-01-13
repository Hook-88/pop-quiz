import { useContext, useState } from "react"
import { QuestionContext } from "./Question"
import { QuizContext } from "../Quiz"
import classNames from "classnames"

export default function Answer({children}) {
  const {id} = useContext(QuestionContext).questionData
  const {onUserInput, userInput} = useContext(QuizContext)

  const cssSpan = 
    classNames(
      "answer-button",  
      {"checked": userInput[id] === children}
    )

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