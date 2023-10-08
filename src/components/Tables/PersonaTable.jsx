import React, { useEffect, useState } from 'react';
import axios from "axios";

const PersonaTable = ({ name, api, setService }) => {
  const [res, setRes] = useState({
    columns: [],
    data: []
  })
  
  useEffect(()=> {
    if(api) {
      axios.get(api).then((res) => {
        setRes(res.data.data);
      }) 
    }
  }, [api])
  
  return (
    <>
      <div style={{textAlign: "left", paddingLeft: "10px"}}>{name}</div>
      <table class="striped-table" >
        <thead>
          <tr>
            {res.columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {res.data.map((row, rowIndex) => (
            <tr key={rowIndex} className='table-hover'>
              {res.columns.map((column, colIndex) => (
                <td onClick={()=> {
                  if(row.config) {
                    axios.get(row.config).then((res) => {
                      setService((pre)=> {
                        if(pre.length > 1) {
                          const temp = [...pre];
                          temp[1] = res.data.config;
                          pre = temp;
                        } else {
                          pre = [...pre, res.data.config]
                        }
                        return pre;

                      })
                    })
                  } 
                }} style={{fontSize: "12px", fontWeight: "bold", cursor: "pointer"}} key={colIndex}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PersonaTable;
