import React, { useEffect } from "react"

function Questions({ questions }) {
  return (
    <div className="m-4">
      {questions &&
        questions.map((question, index) => (
          <div
            key={index}
            className="flex border border-red-300 rounded-lg mb-2 p-2 bg-red-100"
          >
            <span>{index + 1}. </span>
            <span className="inline-block ml-2 text-left">
              <div className="font-bold text-base">{question.title}</div>
              <span className="text-gray-700 text-sm">{question.answer}</span>
            </span>
          </div>
        ))}
    </div>
  )
}

export default Questions
