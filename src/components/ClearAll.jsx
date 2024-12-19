import React from 'react'

const ClearAll = ({todo,handleClearAll}) => {
  return (
    todo.length == 0 ? (
        null
      ) : (
        <section className="clear-all">
          <button className="clear-all-btn" onClick={handleClearAll}>
            Clear All
          </button>
        </section>
      )
  )
}

export default ClearAll
