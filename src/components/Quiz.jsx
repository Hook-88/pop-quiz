import { useState, useEffect } from "react"

const URL = "https://opentdb.com/api.php?amount=5&type=multiple"

export default function Quiz() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL)
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.log(error)
      }
    };

    fetchData()
  }, [])
  
  return (
    <form>
      here goes quiz
    </form>
  )
}