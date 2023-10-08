import { useEffect, useState } from 'react'
import axios from "axios"
import "./mockapis"
import './App.css'
import { ComponentRegistry } from './components/MainComponentRegistory'
import ServiceListCompoent from './components/DefaultBaseComponents/ServiceListCompoent'

function App() {
  const [service, setService ] = useState([]);

  useEffect(()=> {
    if(service.length === 0) {
      axios.get("/config").then((res) => {
        setService([...service, res.data.config])
      })
    }
  }, [])

  return (
    <div style={{position: "relative"}}>
    <h2> Fooo Yoo.... 🎉</h2>
      <ServiceListCompoent ComponentRegistry={ComponentRegistry} setService={setService} service={service} />
    </div>
  )
}

export default App