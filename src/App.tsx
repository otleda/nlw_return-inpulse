interface ButtonProps {
  text: string;
}

function Button(props: ButtonProps) {

  return  <button className="bg-violet-700 hover:bg-violet-900 px-6 py-3 rounded-md text-white drop-shadow-xl">
            {props.text}
          </button>
  
}

function App() {

  return(
    <div className="flex gap-2">
      <Button text="enviar"/>
      <Button text="ok"/>
    </div>
  )
}

export default App
















