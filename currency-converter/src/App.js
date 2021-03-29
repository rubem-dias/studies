import React, { useState } from 'react'
import EffectExample from './EffectExample'

export default function App() {

  const [visible, setVisible] = useState(true)

  setTimeout(() => {
    setVisible(false)
  }, 5000)
  return (
     visible && <EffectExample /> //retorna o componente se o visible for true
  )
}
