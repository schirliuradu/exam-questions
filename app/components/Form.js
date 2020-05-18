import React, { useState } from "react"
import axios from "../axios-instance"
import Flash from "./Flash"

function Form({ custom, setCustom }) {
  const [flash, setFlash] = useState(false)
  const [title, setTitle] = useState("")
  const [answer, setAnswer] = useState("")

  const insertQuestion = () => {
    let settings = {
      title,
      answer,
    }

    axios
      .post("/first-exam/questions.json", settings)
      .then((res) => {
        setFlash(true)
        setCustom(custom + 1)
        setTitle("")
        setAnswer("")
      })
      .catch((err) => {
        alert(
          "Qualcosa non va! Controlla la tua connessione internet e riprova!"
        )
      })
  }

  const handleAddQuestion = () => {
    if (title && answer) {
      insertQuestion()
    } else {
      alert("Forse dovresti compilare qualche campo, scienza :D")
    }
  }

  return (
    <div className="question-form">
      <div className="w-2/3 mx-auto">
        <span className="w-full text-center block mb-3">
          Aggiungi una nuova domanda
        </span>
        <div>
          <label htmlFor="title" className="text-xs font-semibold m-0 p-0">
            Inserisci il titolo della domanda
          </label>
          <input
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            className="w-full px-2 py-1 outline-none mb-3 border-2 border-red-200 rounded"
            type="text"
            name="title"
            placeholder="Inserisci domanda..."
            id="title"
          />
        </div>
        <div>
          <label htmlFor="answer" className="text-xs font-semibold m-0 p-0">
            Inserisci la risposta alla domanda
          </label>
          <input
            onChange={(event) => setAnswer(event.target.value)}
            value={answer}
            className="w-full px-2 py-1 outline-none border-2 border-red-200 rounded"
            type="text"
            name="answer"
            placeholder="Inserisci risposta..."
            id="answer"
          />
        </div>
        <div className="mt-4 mb-2">
          <Flash active={flash} setActive={setFlash} />
        </div>
        <div className="mx-auto text-center py-2 mt-4">
          <span
            onClick={handleAddQuestion}
            id="submit-button"
            className="py-2 px-20 border-b-4 border-red-700 bg-red-500 text-white font-semibold uppercase rounded hover:bg-red-600 cursor-pointer"
          >
            Inserisci
          </span>
        </div>
      </div>
    </div>
  )
}

export default Form
