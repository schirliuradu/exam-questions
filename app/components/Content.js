import React, { useEffect, useState, useCallback } from "react"
import axios from "../axios-instance"
import Form from "./Form"
import Questions from "./Questions"
import Filter from "./Filter"

function Content() {
  const [questions, setQuestions] = useState([])
  const [filterString, setFilterString] = useState("")
  const [customProp, setCustomProp] = useState(0)

  const fetchQuestions = () => {
    axios
      .get("/first-exam/questions.json")
      .then((res) => {
        let array = []

        Object.keys(res.data).forEach(function (key) {
          array.push(res.data[key])
        })

        setQuestions(
          array.filter((item) => {
            return item.title.toLowerCase().includes(filterString.toLowerCase())
              ? 1
              : 0
          })
        )
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchQuestions()
  }, [filterString, customProp])

  return (
    <div className="p-4 bg-white">
      <Form custom={customProp} setCustom={setCustomProp} />
      <div className="mx-20">
        <hr className="my-4 bg-red-500 w-full" />
      </div>
      <div>
        <div className="text-lg text-red-700 font-semibold text-center">
          Filtra tra le domande esistenti
        </div>
        <div className="w-2/3 mx-auto">
          <div className="my-4 text-center">
            <Filter
              questions={questions}
              setQuestions={setQuestions}
              filterString={filterString}
              setFilterString={setFilterString}
            />
            <Questions questions={questions} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
