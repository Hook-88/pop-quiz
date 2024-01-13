import { useState, createContext, useEffect } from "react"
import { nanoid } from "nanoid"
import Question from "./Question/index"
import Button from "./Button/Button"

const URL = "https://opentdb.com/api.php?amount=5&type=multiple"
const QuizContext = createContext()

export default function Quiz() {
  const [data, setData] = useState([])
  const [userInput, setUserInput] = useState({})
  const [checkAnswers, setCheckAnsers] = useState(false)
  const [restartQuiz, setRestartQuiz] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL)
        const result = await response.json()
        //add id to question obj
        setData(
          result.results[0] ?
          result.results.map(result => ({...result, id: nanoid()}))
          : []
        )
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [restartQuiz])

  function onUserInput(event) {
    const {name, value} = event.target.dataset
    
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [name]: value
      }
    })
  }

  function checkUserAnswers(event) {
    event.preventDefault()
    if (!checkAnswers) {
      setCheckAnsers(true)
    } else {
      setCheckAnsers(false)
      setRestartQuiz(prevRestartQuiz => !prevRestartQuiz)
    }

  }

  return (
    data[0] ?
      <QuizContext.Provider 
        value={
          {onUserInput, userInput, checkAnswers}
        }
      >
        <form 
          className="quiz--form" 
          onSubmit={checkUserAnswers}
        
        >
          {data.map(questionObj => (
            <Question questionData={questionObj} key={questionObj.id}>
              <Question.Title>{questionObj.question}</Question.Title>
              <Question.Answers />
            </Question>
          ))}
          
          {// when user gave alle answers, display check answers button.
            Object.keys(userInput).length === data.length &&
            <Button 
              className={"check--answers--button"}
            >{!checkAnswers ? "Check Answers" : "Restart Quiz"}</Button>
          } 
          
        </form>
      </QuizContext.Provider>

    : null
  )
}

export { QuizContext }

// category: "Celebrities"
// correct_answer: "2035"
// difficulty: "medium"
// id: "HO6OyPz4h6Jc6Mh9stf4b"
// incorrect_answers: Array(3) [ "2030", "2040", "2045" ]
// question: "If he was still alive, in what year would Elvis Presley celebrate his 100th birthday?"
// type: "multiple"