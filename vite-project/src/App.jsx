import { StrictMode,useState } from 'react'
import './App.css'

function App() {
  const [cont, setCont] = useState(0);      
  const [showTitle, setShowTitle] = useState(true); 
  const [text, setText] = useState("");     
  const [theme, setTheme] = useState(false); 

  return (
    <>
     
      <button onClick={() => setTheme(!theme)}>
        TROCAR COR DO FUNDO
      </button>
      
      
      {theme ? (
        <div className='fundo-preto'>
          {showTitle && <h1>BALACOBACO</h1>}
          <input 
            type="text" 
            placeholder="Digite seu nome" 
            onChange={(e) => setText(e.target.value)} 
          />
        </div>
      ) : (
        <div className='fundo-branco'>
          {showTitle && <h1>BALACOBACO</h1>}
          <input 
            type="text" 
            placeholder="Digite seu nome" 
            onChange={(e) => setText(e.target.value)} 
          />
        </div>
      )}

      
      <div className="card">
        <button onClick={() => setCont(cont + 10)}>
           {cont}
        </button>
        <button onClick={() => setCont(cont - 10)}>
          {cont}
        </button>
      </div>

      
      <button onClick={() => setShowTitle(!showTitle)}>
        {showTitle ? "Esconder Título" : "Mostrar Título"}
      </button>

      
      <div>
        <p>Texto atual: {text}</p>
        {text === "SENAI" && <p>Apareci!</p>}
      </div>
    </>
  );
}

export default App;
