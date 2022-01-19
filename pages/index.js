import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import {useEffect} from "react";
export default function Home() {
  const router = useRouter()
     useEffect(() => {
        if(router.pathname === '/'){
             router.push({pathname: '/homePage',})
        }else{
            router.push({pathname: '/error',})
        }
         window.setTimeout(() => {
             window.location.reload(true);
         }, 200);
    });


  return (
      <div>

      </div>
  )
}
