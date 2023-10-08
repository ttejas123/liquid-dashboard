import React, { useEffect, useState } from 'react';
import axios from "axios";
import SmallModel from '../Model/SmallModel';
import { openModel } from '../Model/ModelController';

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

  const model_id = "persona_model"
  
  return (
    <>
      <div id={model_id} style={{ display: "none" }}><SmallModel id={model_id} /></div>
      <div style={{textAlign: "left", paddingLeft: "10px"}}>{name}</div>
      <table className="striped-table" >
        <thead>
          <tr>
            {res.columns.map((column, index) => (
              <th key={index} style={{ cursor: "pointer" }} onClick={()=> {
                openModel(model_id);
              }}>{column}</th>
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
