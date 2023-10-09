import React, { useEffect, useState } from 'react';
import axios from "axios";
import { openModel } from '../Model/ModelController';
import { ModelRegistory } from '../Model/ModelComponentRegistory';

const DataTableBase = ({ name, api, setService }) => {
  const [res, setRes] = useState({
    columns: [],
    data: [],
    model: []
  })
  const [singleRowData, setSingleRowData] = useState({
    col: [],
    row: {} 
  })
  const [model, setModel] = useState({

  })

  useEffect(()=> {
    let model_ids_Object = {}
    res.models?.map((val, index)=> {
      model_ids_Object = {
        ...model_ids_Object,
        [val.id] : false
      }
    })

    setModel(model_ids_Object)
  }, [res])
  
  useEffect(()=> {
    if(api) {
      axios.get(api).then((res) => {
        setRes(res.data.data);
      }) 
    }
  }, [api])
  
  return (
    <>
      {
        res.models?.map((val, index)=> {
          const ModelComponent = ModelRegistory[val.component]; 
          return (
            <div key={index} id={val.id} style={{ display: model[val.id] ? "" : "none" }} ><ModelComponent {...val} data={singleRowData} {...{model, setModel}} /></div>
          )
        })
      }
      <div style={{textAlign: "left", paddingLeft: "10px"}}>{name}</div>
      <table className="striped-table" >
        <thead>
          <tr>
            {res.columns.map((column, index) => (
              <th key={index} style={{ cursor: "pointer" }}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {res.data.map((row, rowIndex) => (
            <tr key={rowIndex} className='table-hover'>
              {res.columns.map((column, colIndex) => (
                <td onClick={()=> {
                  if( column == "edit" && row.model) {
                    openModel(row.model, setModel)
                    setSingleRowData({
                      col: res.columns,
                      row: row
                    });
                  }
                  if(column == "Shopper" && row.config) {
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

export default DataTableBase;