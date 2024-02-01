import PageHeader from './components/PageHeader'
import Display from './components/Display'
import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {document.title = "Starcraft 2 Quiz"}, [])
  return (
    <>
        <PageHeader />  
        <Display />
    </>
  )
}

export default App
