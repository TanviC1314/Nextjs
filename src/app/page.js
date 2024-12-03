'use client' 
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";


export default function Home() {
  const [name,setName]=useState("")
  const [age, setAge]=useState("")
  const callUser=()=>{
    setName("Tanvi")
    setAge(22)
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>User Name: {name} </h1>
        <h1>User's Age: {age} </h1>

        {/* <input type="text" onChange={(e)=> setName(e.target.value)} /> */}
        <button onClick={()=>callUser()} >Click me</button>
      </main>
    </div> 
  );
}