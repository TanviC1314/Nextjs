'use client' 
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Home Page
        <User name="Tanvi"/>
        <button onClick={HelloCall}>Click me</button>
      </main>
    
    </div> 
  );
}

const HelloCall=()=>{alert("Hello World!")}

const User=(props)=>{
return(
  <div>
    <h2>User is {props.name} </h2>
  </div>
)
}
