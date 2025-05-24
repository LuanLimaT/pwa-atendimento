import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div style={{ padding: 24 }}>
      <h1>PWA Atendimento</h1>
      <p>Este é o painel do operador.</p>
      <p>Pronto para receber mensagens do chat em tempo real.</p>
      {/* Aqui depois vai a integração com WebSocket */}
    </div>
      
    </>
  )
}

export default App
