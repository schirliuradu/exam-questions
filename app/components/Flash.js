import React, { useEffect } from "react"

function Flash({ active, setActive }) {
  useEffect(() => {
    setTimeout(() => {
      setActive(false)
    }, 3000)
  }, [active])

  return (
    <>
      {active && (
        <div
          className="flashMessage bg-orange-100 border-l-4 border-red-500 text-orange-700 px-4 py-3"
          role="alert"
        >
          <p className="font-bold">Nuova domanda aggiunta!</p>
        </div>
      )}
    </>
  )
}

export default Flash
