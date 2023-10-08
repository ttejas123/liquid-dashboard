import { useEffect, useState } from 'react'
import axios from "axios"
import "./mockapis"
import './App.css'
import { ComponentRegistry } from './components/MainComponentRegistory'
import BaseSplitLayOut from './components/Layout/BaseSplitLayOut'
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
    <>
    <h2> Fooo Yoo.... 🎉</h2>
      {
        service.map((val, index)=> {
          return (
            <div style={{ marginTop: "5rem" }}>
             
               <BaseSplitLayOut>
                {
                  val.map((item, i) => {
          
                    const Table = ComponentRegistry[item['type']][item['tableType']]
                    return (
                      <div style={item['tableProperties']}>
                      <Table
                        key={i}
                        api={item.api}
                        tableType={item.tableType}
                        name={item.name}
                        tableProperties={item.tableProperties}
                        columns={item.columns}
                        data={item.data}
                        setService={setService}
                      />
                      </div>
                    )})
                }
              </BaseSplitLayOut>
            </div>
          )
        })
      }
    </>
  )
}

export default App