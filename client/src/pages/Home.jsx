import React, { useEffect, useState } from "react";
import { Card } from "../component/Card";
import { Navbar } from "../component/Navbar";
import axios from "axios";
export const Home = () => {
  const [data,setData]= useState(null);
  const [flag,setFlag]=useState(false);
  const getData = async () => {
    const response = await fetch(`http://localhost:9090/api/notes/${sessionStorage.getItem("email")}`);
    const json = await response.json();
    setData(json);
    console.log(json);
  };

         
  
  useEffect(() => {
    getData();
    setFlag(sessionStorage.getItem("email"))
  }, []);
  return (

    <>
      <div className="page-content container note-has-grid">
        <Navbar />

        {flag!=null ? <div className="tab-content bg-transparent">
          <div id="note-full-container" className="note-has-grid row">
           {
            data?.map((note)=>{
              return <Card key={note.id} id={note.id} title={note.title} date={note.date}desc={note.description}/>
            })
           }
            

            
          </div>
        </div>:null}
      </div>
      
    </>
  );
};
