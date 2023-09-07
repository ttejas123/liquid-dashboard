import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ComponentRegistry } from './components/MainComponentRegistory'
function App() {
  const [count, setCount] = useState(0)

  const response = [
    {
      "type": "table",
      "tableType": "persona_table",
      "tableProperties": {
        "width": "80%",
        "height": "300px",
        "border": "1px solid #ccc"
      },
      "columns": ["Name", "Age", "Location"],
      "data": [
        { "Name": "John", "Age": 30, "Location": "New York" },
        { "Name": "Alice", "Age": 25, "Location": "Los Angeles" },
        { "Name": "Bob", "Age": 35, "Location": "Chicago" }
      ]
    },
    {
      "type": "table",
      "tableType": "coupon_table",
      "tableProperties": {
        "width": "60%",
        "height": "200px",
        "border": "1px solid #ccc"
      },
      "columns": ["Name", "unique_code"],
      "data": [
        { "Name": "ABC", "unique_code": 30 },
        { "Name": "SSE", "unique_code": 25 },
        { "Name": "OOD", "unique_code": 35 }
      ]
    },
    // Add more entries with "persona_table" and "coupon_table" types
    {
      "type": "table",
      "tableType": "persona_table",
      "tableProperties": {
        "width": "70%",
        "height": "250px",
        "border": "1px solid #999"
      },
      "columns": ["Name", "Age", "Location"],
      "data": [
        { "Name": "Eva", "Age": 28, "Location": "San Francisco" },
        { "Name": "David", "Age": 40, "Location": "Seattle" },
        { "Name": "Linda", "Age": 32, "Location": "Miami" }
      ]
    },
    {
      "type": "table",
      "tableType": "coupon_table",
      "tableProperties": {
        "width": "50%",
        "height": "180px",
        "border": "1px solid #666"
      },
      "columns": ["Name", "unique_code"],
      "data": [
        { "Name": "XYZ", "unique_code": 45 },
        { "Name": "PQR", "unique_code": 27 },
        { "Name": "LMN", "unique_code": 39 }
      ]
    }
    // Add more entries as needed
  ];
  
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    <div style={{display: "flex"}}>
      {response.map((item, index) => {
        if (item.type === 'table' && ComponentRegistry[item['type']]) {
          // Render a table
          const Table = ComponentRegistry[item['type']][item['tableType']]
          return (
            <div style={item['tableProperties']}>
            <Table
              key={index}
              tableType={item.tableType}
              tableProperties={item.tableProperties}
              columns={item.columns}
              data={item.data}
            />
            </div>
          );
        }
      
      })}
      </div>
    </>
  )
}

export default App
