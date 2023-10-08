import React from 'react'
import { closeModel } from './ModelController'

function SmallModel({
  id, 
  data
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
            width: "40rem",
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
              <div style={{ padding: "10px" }}>Title</div>
              <div onClick={()=> {
                closeModel(id);
              }} style={{ padding: "3px 12px", border : "1px solid black", cursor: "pointer" }}>x</div>
           </div>
           <div> Yeee!! Model is Working </div>
           <div style={{ paddingBottom: "15px" }}>Footer</div>
        </div>
    </div>
  )
}

export default SmallModel