import React from 'react'

const PersonForm = ({ onSubmit, nameValue, numberValue, handleName, handleNumber }) => {
  return (
    <form onSubmit={onSubmit}>
      <h2>add a new</h2>
      <div>name: <input type="text" value={nameValue} onChange={handleName} /></div>
      <div>number: <input type="text" value={numberValue} onChange={handleNumber} /></div>
      <div>
        <button type="submit">
          add
        </button>
      </div>
  </form>
  )
}

export default PersonForm;