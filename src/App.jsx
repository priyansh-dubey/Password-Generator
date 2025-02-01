import { useState ,useCallback , useEffect , useRef} from 'react'

function App() {
  const [lenght, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  //useRef Hook

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {

    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) {str += "0123456789"}
    if(character) {str += "@#$&*+=-!"}

    for (let i = 1; i<=lenght; i++){

      let char = Math.floor(Math.random()* str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)

  } , [lenght, number , character , setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  } , [password])

  useEffect( () => {
    passwordGenerator()
  } , [lenght, number , character, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto my-20 shadow-md 
      rounded-lg px-4 my-8 pb-4 pt-4 text-orange-500 bg-gray-700'>
        <h1 className='text-white mb-5 font-serif font-semibold text-center'>Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          
          <input 
              type='text' 
              value={password} 
              className='outline-none text-black w-full py-1 px-3'     placeholder='password' 
              readOnly
              ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}>Copy</button>

        </div>

        <div className='flex items-center gap-x-1'>
          <input type="range" min={8} max={100} value={lenght} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}/>
          <label>Lenght : {lenght}</label>

          <div className='ml-2'>
             <input
             type="checkbox" 
             defaultChecked={number} 
             id='numberInput'
             onChange={() => {
               setNumber((prev) => !prev);
             }} />
            <label htmlFor='numberInput' className='ml-0.5'>Numbers</label>
          </div>

          <div className='ml-2'>
            <input
            type="checkbox" 
            defaultChecked={character} 
            id='characterInput'
            onChange={() => {
              setCharacter((prev) => !prev);
            }} />
            <label htmlFor='characterInput'   className='ml-0.5'>Characters</label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
