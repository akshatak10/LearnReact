import { useState, useCallback } from 'react'

function App() {

  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();

  // const passwordGenerator = () => {

  // }

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()_+-=[]{}|;:',.<>?/";
    for(let i = 0; i<=array.length; i++){
      let c = Math.floor(Math.random() * str.length + 1);
      pass += str[c];
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  return (
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
   <h1 className='text-white text-center my-3'>Password generator</h1>
   <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input 
    type="text"
    value={password}
    className='outline-none w-full py-1 px-3'
    placeholder='password'
    readOnly
     />
     <button>Copy</button>
   </div>
   </div>
  )
}

export default App
