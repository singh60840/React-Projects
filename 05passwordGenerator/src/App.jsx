import { useState, useCallback, useEffect ,useRef, use } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  //useRef Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "0123456789"
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_+[]{}|;:,.<>?/"
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, characterAllowed])

  const copyPasswordToclipboard = useCallback(() => {
   window.navigator.clipboard.writeText(Password)
   passwordRef.current?.select()
  }, [Password, passwordRef]) 




  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input
            type="text"
            value={Password}
            className='w-full py-1 outline-none px-3 bg-gray-700'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPasswordToclipboard}
            className='outline-none px-4 py-1 rounded-full text-blue font-semibold shadow-lg bg-white shrink-0'>
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-4 mb-4'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(Number(e.target.value)) }}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              checked={numberAllowed}
              id='numberInput'
              onChange={() => setNumberAllowed(prev => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              checked={characterAllowed}
              id='charInput'
              onChange={() => setCharacterAllowed(prev => !prev)}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
