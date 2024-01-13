import { createContext } from "react"

const QuestionContext = createContext()

export default function Question({children, questionData}) {

  return (
    <QuestionContext.Provider value={{questionData}}>
      <section>
        {children}
      </section>
    </QuestionContext.Provider>
  )
}

export {QuestionContext}