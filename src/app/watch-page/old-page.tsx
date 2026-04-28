'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/homePage/header';
import MobileDrawer from "@/components/homePage/mobile-drawer";

export default function WatchPage() {
    // Keep isDrawerOpen as the primary state for your menu
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 640;
            setIsMobile(mobile);
            // Optional: Close drawer when resizing if you want it to reset
            // setIsDrawerOpen(false); 
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Simplified: Always toggle the drawer, ignore isSemiCollapsed
    const handleMenuToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div>
            <Header onToggle={handleMenuToggle} />


            {/* Ensure MobileDrawer isn't hidden by CSS (like 'sm:hidden') 
                   inside its own component if you want it visible on desktop! 
                */}
            <MobileDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                isUniversal={true}
            />

            <div>Watch page</div>
            <div className="bg-gray-400">test</div>

        </div>
    );
}

// Mobile drawer and everything below was in below div before.
{/* <div className="flex flex-1 w-full overflow-hidden relative"> */ }
{/* </div> */ }







