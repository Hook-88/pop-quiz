import {useContext} from "react"
import Button from "./Button/Button"
import { QuizContext } from "../App"

export default function LandingPage() {
  const {startQuiz} = useContext(QuizContext)

  return (
    <section className="card landing--page">
      <h1>Paulny's Pop quiz</h1>
      <p>A short quiz of five multiple choice questions</p>
      <Button onClick={startQuiz}>Start the quiz</Button>
    </section>
  )
  
}

