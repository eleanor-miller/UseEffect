import React, { useEffect, useState } from 'react'

export function App() {
  const [count, setCount] = useState(0)
  // useEffect:
  //        function to call
  //                |        array of variables to watch for changes
  //                |         |
  //                |         |
  //                v         v
  useEffect(theCountChanged, [count])

  function handleClickButton() {
    setCount(count + 1)
  }

  function theCountChanged() {
    console.log(`Wow, the count is now ${count}`)
  }

  return (
    <div>
      <p>
        Count: {count} <button onClick={handleClickButton}>Click Me</button>
      </p>
      <p>
        <button
          onClick={function () {
            setCount(count + 2)
          }}
        >
          Plus 2
        </button>
      </p>
      <p>
        <button
          onClick={function () {
            setCount(2 * count)
          }}
        >
          Times 2
        </button>
      </p>
    </div>
  )
}
