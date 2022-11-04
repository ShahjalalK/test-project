import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
 
  return (
    <>
       <div className="cards">
       <div className="card">
          <h1>Hello Shahjalal</h1>
          <p>my name is shahjalal</p>
          <Link href="http://www.facebook.com" target="_blank">Click Now</Link>
        </div>

        <div className="card">
          <h1>Hello Shahjalal</h1>
          <p>my name is shahjalal</p>
          <Link href="http://www.facebook.com" target="_blank">Click Now</Link>
        </div>

        <div className="card">
          <h1>Hello Shahjalal</h1>
          <p>my name is shahjalal</p>
          <Link href="http://www.facebook.com" target="_blank">Click Now</Link>
        </div>

       </div>
    
    </>
  )
}
