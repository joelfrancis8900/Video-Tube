'use client'; // 1. Add this at the very top

import { useState, useEffect } from 'react';

import styles from './page.module.css'
import Image from 'next/image';
import Header from '../components/header';
import Aside from "../components/aside"
import Main from "../components/main"
import MobileDrawer from "../components/mobile-drawer";

export default function Home() {
  const [isSemiCollapsed, setIsSemiCollapsed] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // const toggleSemi = () => setIsSemiCollapsed(!isSemiCollapsed);

  // Track window size to decide which menu to trigger
  useEffect(() => {
    const handleResize = () => {
      // 640px is Tailwind's 'sm' breakpoint
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);

      // Auto-hide the mobile drawer if the user expands the window to desktop
      if (!mobile) setIsDrawerOpen(false);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize on mount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuToggle = () => {
    if (isMobile) {
      setIsDrawerOpen(!isDrawerOpen);
    } else {
      setIsSemiCollapsed(!isSemiCollapsed);
    }
  };

  return (


    <div className="flex flex-col h-screen w-full overflow-hidden">
      <Header onToggle={handleMenuToggle} />

      <div className="flex flex-1 w-full overflow-hidden relative">
        {/* Only exists/renders on Mobile (< 640px) */}
        <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

        {/* Aside is HIDDEN below 'sm' (640px), and visible/toggleable above it */}
        <div className="hidden sm:block">
          <Aside isSemiCollapsed={isSemiCollapsed} />
        </div>

        <Main />
      </div>
    </div>

  )
}
