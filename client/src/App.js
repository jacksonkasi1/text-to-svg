import React, { useEffect, useState } from 'react'
// import TextToSVG from 'text-to-svg'


const App = () => {

  const [MySvg, setMySvg] = useState('')

  useEffect(() => {
    // TextToSVG.load('./fonts/MagicRetro.ttf', (err, txt2SVG) => { // you shoud pass font for this method ( .load )
    //   const svg = txt2SVG.getSVG('hello')
    //   setMySvg(svg)
    // })
  }, [])

  return (
    <div>
      <h1>App</h1>
      {/* <MySvg /> */}
    </div>
  )
}

export default App