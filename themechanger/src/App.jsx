

import React,{ useEffect } from 'react';
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/Themebtn';
import Card from './components/Card';

function App() {
 
const [themeMode, setThemeMode] = React.useState("Light");

const lightTheme = () => {
  setThemeMode("Light");}

  const darkTheme = () => {
  setThemeMode("Dark");
}

//actuall change in theme
useEffect(() => {
  document.querySelector('html').classList.remove('dark', 'light');
  document.querySelector('html').classList.add(themeMode)
}, [themeMode]);

  return (
    <>
      
 <ThemeProvider value={{themeMode,lightTheme, darkTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ThemeBtn/>

                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>

            </ThemeProvider>     '


    </>
  )
}

export default App
