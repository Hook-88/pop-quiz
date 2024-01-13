import { useContext } from "react"
import classNames from "classnames"
import { decode } from "html-entities"
import { QuizContext } from "../Quiz"
import { QuestionContext } from "./Question"

export default function Answer({children, isCorrect}) {
  const {id} = useContext(QuestionContext).questionData
  const {onUserInput, userInput, checkAnswers} = useContext(QuizContext)

  const cssSpan = 
    classNames(
      "answer-button",  
      {"checked": userInput[id] === children},
      {"correct": isCorrect && checkAnswers}
    )

  return (
    <span
      onClick={onUserInput}
      className={cssSpan}
      data-name={id}
      data-value={children}
    >
      {decode(children)}
    </span>
  )
}