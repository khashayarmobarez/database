import Image from "next/image";
import localFont from "next/font/local";
import { useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')

  const postHandler = async () => {
    const res = await fetch('/api/data', {
      method: 'POST',
      body: JSON.stringify({
        name,
        age,
        email
      }),
      headers:{
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    console.log(data); 
  }

  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <h3>connecting data base to nextjs project!</h3>
      <div>
        <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <input type="number" placeholder="Your age" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div>
        <input type="text" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button onClick={postHandler}>post</button>
    </div>
  );
}
