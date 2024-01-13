import { decode } from "html-entities"

export default function QuestionTitle({children}) {
  
  return <h2>{decode(children)}</h2>
}