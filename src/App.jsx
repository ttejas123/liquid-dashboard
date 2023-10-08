import { useEffect, useState } from 'react'
import axios from "axios"
import "./mockapis"
import './App.css'
import { ComponentRegistry } from './components/MainComponentRegistory'
import BaseSplitLayOut from './components/Layout/BaseSplitLayOut'
import { RegularListCompoent } from './components/DefaultBaseComponents/RegularListCompoent'

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
    <div>
    <h2> Fooo Yoo.... 🎉</h2>
      {
        service.map((val, index)=> {
          return (
            <div style={{ marginTop: "5rem" }} key={index}>
                    <RegularListCompoent { ...{itemList: val, ComponentRegistry, setService }} />
            </div>
          )
        })
      }
    </div>
  )
}

export default App