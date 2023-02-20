import { useEffect, useState } from "react"


function IndexPopup() {
  

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding:"0",
        margin:"0",
        height:"200px",
        background:"darkviolet",
        color:"white"
        
        
      }}>
      <div style={{
        display: "",
        width: "130px",
        background:"gray",
        margin:"10px",
        borderRadius:"15px"
        
      }}>
      <h2 style={{
        padding:"5px",
        fontSize: "15px"
      }}>
        Hey,Al there?
      </h2>
      </div>
      
      <p style={{
        display: "flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        margin:"0",
        fontWeight:"500"
        
        
      }}>
        <p>
        AI content present:
        </p>

        <h1 style={{
        
      }}>
          14%
        </h1>
         
      </p>
    </div>
  )
}

export default IndexPopup
