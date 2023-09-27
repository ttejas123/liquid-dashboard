import { useEffect, useState } from 'react'
import axios from "axios"
import "./mockapis"
import './App.css'
import { ComponentRegistry } from './components/MainComponentRegistory'
function App() {
  const [count, setCount] = useState(0)
  const [ response, setResponse ] = useState([])
  
  useEffect(()=> {
    axios.get("/config").then((res) => {
      setResponse(res.data.config)
    })
  }, [])

  function generateRandomData(columns, numRows) {
    const data = [];
  
    for (let i = 0; i < numRows; i++) {
      const row = {};
      columns.forEach((column) => {
        const dataType = column.dataType;
        const columnName = column.name;
        let value;
  
        switch (dataType) {
          case 'string':
            value = generateRandomString();
            break;
          case 'number':
            value = generateRandomNumber();
            break;
          case 'boolean':
            value = generateRandomBoolean();
            break;
          // Add more data types as needed
          default:
            value = null;
        }
  
        row[columnName] = value;
      });
  
      data.push(row);
    }
  
    return data;
  }
  
  function generateRandomString() {
    return Math.random().toString(36).substring(2, 15);
  }
  
  function generateRandomNumber() {
    return Math.floor(Math.random() * 1000);
  }
  
  function generateRandomBoolean() {
    return Math.random() < 0.5;
  }

  return (
    <>
    <h2> Fooo Yoo.... 🎉</h2>
    <div style={{display: "flex", flexWrap: "wrap"}}>
      {response.map((item, index) => {
        
          const Table = ComponentRegistry[item['type']][item['tableType']]
          return (
            <div style={item['tableProperties']}>
            <Table
              key={index}
              api={item.api}
              tableType={item.tableType}
              name={item.name}
              tableProperties={item.tableProperties}
              columns={item.columns}
              data={item.data}
            />
            </div>
          );
        
      
      })}
    </div>
    </>
  )
}

export default App
