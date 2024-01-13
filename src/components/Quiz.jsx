import { useState, useEffect } from "react"
import { nanoid } from "nanoid"

const URL = "https://opentdb.com/api.php?amount=5&type=multiple"

export default function Quiz() {
  const [data, setData] = useState([])

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
  
  return (
    <form>
      here goes quiz
    </form>
  )
}