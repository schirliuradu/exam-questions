import React, { useEffect, useState } from "react"

function Filter({ filterString, setFilterString }) {
  return (
    <input
      className="border-2 border-red-300 w-2/3 py-2 px-3 rounded outline-none"
      type="text"
      name="filter"
      id="filter"
      placeholder="Inserisci la domanda che vuoi cercare"
      value={filterString}
      onChange={(e) => setFilterString(e.target.value)}
    />
  )
}

export default Filter
