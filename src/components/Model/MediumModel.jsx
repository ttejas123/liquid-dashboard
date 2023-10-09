import React from 'react'
import { closeModel } from './ModelController'

function MediumModel({
  id, 
  data,
  title,
  footer,
  setModel
}) {
  return (
    <div style={{
        zIndex: 10,
        position: "absolute",
        width: "100%",
        top: 0,
        left: 0,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <div style={{ position: "absolute", zIndex: 11, width: "100%", height: "100%", background: "#000", opacity: "0.5" }}></div>
        <div style={{
            height: "auto",
            minHeight: "20rem",
            width: "50rem",
            background: "white",
            zIndex: 12,
            color: "black",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "",
            flexDirection: "column"

        }}> 
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 20px 0 20px" }}>
              <div style={{ padding: "10px" }}>{title}</div>
              <div onClick={()=> {
                closeModel(id, setModel);
              }} style={{ padding: "3px 12px", border : "1px solid black", cursor: "pointer" }}>x</div>
           </div>
           <div> 
              {
                data.row ? JSON.stringify(data.row) : ""
              } 
            </div>
           <div style={{ paddingBottom: "15px" }}>{footer}</div>
        </div>
    </div>
  )
}

export default MediumModel