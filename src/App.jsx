import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ComponentRegistry } from './components/MainComponentRegistory'
function App() {
  const [count, setCount] = useState(0)

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

  const response = [
    {
      "type": "table",
      "tableType": "persona_table",
      "name": "Names Table",
      "tableProperties": {
        "width": "300px",
        // "height": "300px",
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
      "name": "Coupon Table",
      "tableProperties": {
        "width": "250px",
        // "height": "200px",
        "border": "1px solid #ccc"
      },
      "columns": ["Name", "unique_code"],
      "data": [
        { "Name": "ABC", "unique_code": 30 },
        { "Name": "SSE", "unique_code": 25 },
        { "Name": "OOD", "unique_code": 35 }
      ]
    },
    {
      "type": "table",
      "tableType": "persona_table",
      "name": "Employee Table",
      "tableProperties": {
        "width": "500px",
        // "height": "200px",
        "border": "2px solid #555"
      },
      "columns": ["Name", "Department", "Salary"],
      "data": [
        { "Name": "John Doe", "Department": "HR", "Salary": 60000 },
        { "Name": "Alice Smith", "Department": "IT", "Salary": 75000 }
      ]
    },
    {
      "type": "graph",
      "tableType": "bar_chart",
      "name": "Daywise Data",
      "tableProperties": {
        "width": "500px",
        "height": "280px",
        "border": "1px solid #666"
      } 
    },
    {
      "type": "graph",
      "tableType": "area_chart",
      "name": "Daywise Data",
      "tableProperties": {
        "width": "400px",
        "height": "280px",
        "border": "1px solid #666"
      } 
    },
    {
      "type": "graph",
      "tableType": "doughnut_chart",
      "name": "Daywise Data",
      "tableProperties": {
        "width": "300px",
        "height": "380px",
        "border": "1px solid #666"
      } 
    },
    {
      "type": "graph",
      "tableType": "radar_chart",
      "name": "Daywise Data",
      "tableProperties": {
        "width": "500px",
        "height": "500px",
        "border": "1px solid #666"
      } 
    },
    {
      "type": "table",
      "tableType": "persona_table",
      "name": "Users Table",
      "tableProperties": {
        "width": "600px",
        // "height": "250px",
        "border": "1px solid #999"
      },
      "columns": ["Name", "Age", "Location"],
      "data": [
        { "Name": "Eva", "Age": 28, "Location": "San Francisco" },
        { "Name": "David", "Age": 40, "Location": "Seattle" },
        { "Name": "Linda", "Age": 32, "Location": "Miami" }
      ]
    },
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

    <div style={{display: "flex", flexWrap: "wrap"}}>
      {response.map((item, index) => {
        
          const Table = ComponentRegistry[item['type']][item['tableType']]
          return (
            <div style={item['tableProperties']}>
            <Table
              key={index}
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
