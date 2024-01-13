import {useState, createContext} from "react"
import LandingPage from "./components/LandingPage"
import Quiz from "./components/Quiz"
import "./App.css"

const QuizContext = createContext()

function App() {
  const [quizStarted, setQuizStarted] = useState(false)

  function startQuiz() {
    setQuizStarted(true)
  }


  return (
    <div>
      <QuizContext.Provider value={{quizStarted, startQuiz}}>
      {!quizStarted ? <LandingPage /> : <Quiz />}
      </QuizContext.Provider>
    </div>
  )
}

export default App

export { QuizContext }