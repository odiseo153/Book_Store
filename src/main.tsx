import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import './styles/See.css'
import './styles/ejemplo.css'
import {NextUIProvider} from "@nextui-org/react";
import './globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <NextUIProvider>
     <App />
   </NextUIProvider>
  </React.StrictMode>,
)
