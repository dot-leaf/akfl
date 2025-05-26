import React, { useEffect } from 'react'
import AlkhidmatRoutes from './routes/alkhidmatRoutes'

const App = () => {
  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
    
  }, [])

  return (
    <>
    <AlkhidmatRoutes />
      </>
  )
}

export default App
