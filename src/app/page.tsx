import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Darkmode from './components/Darkmode'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Darkmode/>
    </div>
  )
}
