import React from "react"
import Button from "./Button"

export default function LandingPage() {

  return (
    <section className="card landing--page">
      <h1>Paulny's Pop quiz</h1>
      <p>A short quiz of five multiple choice questions</p>
      <Button className="danger">Start the quiz</Button>
    </section>
  )
  
}

