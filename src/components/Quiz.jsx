import { useState, useEffect, createContext } from "react"
import { nanoid } from "nanoid"
import Question from "./Question/index"

const URL = "https://opentdb.com/api.php?amount=5&type=multiple"
const QuizContext = createContext()

export default function Quiz() {
  const [data, setData] = useState([])
  const [userInput, setUserInput] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL)
        const result = await response.json()
        //add id to question obj
        setData(result.results.map(result => ({...result, id: nanoid()})))
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  function onUserInput(event) {
    const {name, value} = event.target.dataset
    
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [name]: value
      }
    })
  }
  
  return (
    data[0] ?
      <QuizContext.Provider value={{onUserInput, userInput}}>
        <form>
          {data.map(questionObj => (
            <Question questionData={questionObj} key={questionObj.id}>
              <Question.Title>{questionObj.question}</Question.Title>
              <Question.Answers />
            </Question>
          ))}
          {/* TODO add submit button */}
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