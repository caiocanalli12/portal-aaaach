import React from 'react';
import logoWatermark from '../../assets/logo-watermark.png';

// Attempting to import local logo if available, leveraging the path structure observed
// We'll use a placeholder or generic logo path first, user can refine
// Assuming one of the logos in main_logos is usable.

const MainLayout = ({ children }) => {
    return (
        <div className="bg-college-bg min-h-screen w-full relative overflow-x-hidden text-college-text font-sans selection:bg-college-green selection:text-white">

            {/* Background Texture - Paper/Noise for "College" feel */}
            <div className="fixed inset-0 pointer-events-none opacity-50 z-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />

            {/* Watermark Logo */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[45vw] md:h-[45vw] opacity-[0.05] pointer-events-none z-0 mix-blend-multiply">
                <img src={logoWatermark} alt="AAACH Logo" className="w-full h-full object-contain" />
            </div>

            <main className="relative z-10 w-full flex flex-col items-center">
                {children}
            </main>

            {/* Floating Menu Placeholder */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
                {/* Navigation will inject here */}
            </div>
        </div>
    );
};

export default MainLayout;
