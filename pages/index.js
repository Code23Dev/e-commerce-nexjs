import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()
    if (typeof window !== 'undefined') {
        router.push('/home')
             window.setTimeout(() => {
                 window.location.reload(true);
             }, 200);
    }


  return (
      <div>

      </div>
  )
}
