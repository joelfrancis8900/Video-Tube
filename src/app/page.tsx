'use client'; // 1. Add this at the very top

import { useState } from 'react'; // 2. Import useState

import styles from './page.module.css'
import Image from 'next/image';
import Header from '../components/header';
import Aside from "../components/aside"
import Main from "../components/main"

export default function Home() {
  const [isSemiCollapsed, setIsSemiCollapsed] = useState(false);
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  const toggleSemi = () => setIsSemiCollapsed(!isSemiCollapsed);



  return (


    <div className="flex flex-col h-screen w-full overflow-hidden">

      <Header onToggle={toggleSemi} />
      {/* Flex-grow (grow) forces this div to fill the remaining screen height */}
      <div className="flex flex-1 w-full overflow-hidden">
        <Aside isSemiCollapsed={isSemiCollapsed}
          isHidden={isSidebarHidden} />
        <Main onHideSidebar={() => setIsSidebarHidden(!isSidebarHidden)} />
      </div>
    </div>

  )
}
