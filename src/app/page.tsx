import styles from './page.module.css'
import Image from 'next/image';
import Header from './components/header';
import Aside from "./components/aside"
import Main from "./components/main"
export default function Home() {
  return (


    <div className="flex flex-col min-h-screen w-full">

      <Header />
      {/* Flex-grow (grow) forces this div to fill the remaining screen height */}
      <div className="flex flex-1 w-full">
        <Aside />
        <Main />
      </div>
    </div>

  )
}
