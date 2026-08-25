import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const RetroBanner = () => {
    // Fewer particles on mobile for performance
    const particles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 5 + 3,
        color: ['#ff00ff', '#39ff14', '#00ffff', '#ffffff'][Math.floor(Math.random() * 4)],
        duration: Math.random() * 20 + 10,
        delay: Math.random() * -20,
    }));

    return (
        <div className="relative w-full min-h-screen bg-[#1a1a1a] overflow-hidden flex items-center justify-center border-b-4 md:border-b-8 border-[#39ff14]">

            {/* Background Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[radial-gradient(circle,_rgba(255,0,255,0.4)_0%,_transparent_70%)] mix-blend-screen opacity-80" />
                <div className="absolute bottom-[-30%] right-[-10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[radial-gradient(circle,_rgba(57,255,20,0.3)_0%,_transparent_70%)] mix-blend-screen opacity-90" />
                <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[500px] h-[180px] md:h-[300px] bg-[radial-gradient(ellipse,_rgba(57,255,20,0.4)_0%,_transparent_70%)] blur-[40px] mix-blend-screen"
                />
            </div>

            {/* Confetti Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {particles.map(p => (
                    <motion.div
                        key={p.id}
                        className="absolute"
                        style={{
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            width: p.size,
                            height: p.size,
                            backgroundColor: p.color,
                            opacity: 0.6,
                        }}
                        animate={{ y: ['0vh', '100vh'], rotate: [0, 360] }}
                        transition={{ duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay }}
                    />
                ))}
            </div>

            {/* Memphis Shapes — hidden on very small screens */}
            <div className="absolute inset-0 pointer-events-none z-10 hidden sm:block">
                {/* Circle */}
                <motion.div
                    animate={{ y: [0, -30, 0], rotate: [0, 90, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] left-[5%] md:left-[15%] w-10 md:w-16 h-10 md:h-16 rounded-full border-4 border-[#ff00ff] opacity-70"
                />
                {/* Cross */}
                <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, -45, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[25%] right-[5%] md:right-[20%] w-10 md:w-12 h-10 md:h-12 opacity-80"
                >
                    <div className="absolute top-1/2 left-0 w-full h-2 md:h-3 bg-[#00ffff] -translate-y-1/2" />
                    <div className="absolute top-0 left-1/2 w-2 md:w-3 h-full bg-[#00ffff] -translate-x-1/2" />
                </motion.div>
                {/* Zig-Zag */}
                <motion.svg
                    animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-[15%] md:top-[30%] right-[5%] md:right-[10%] w-12 md:w-20 h-12 md:h-20 opacity-70"
                    viewBox="0 0 100 100" fill="none" stroke="#39ff14" strokeWidth="6"
                >
                    <polyline points="0,50 25,25 50,75 75,25 100,50" />
                </motion.svg>
            </div>

            {/* Polaroids — only on md+ */}
            <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
                <motion.div
                    animate={{ y: [0, -15, 0], rotate: [-15, -12, -15] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[10%] right-[30%] w-32 h-40 bg-white p-2 pb-8 shadow-2xl opacity-40 border border-gray-200 rounded-sm"
                >
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-green-400 opacity-50" />
                    </div>
                </motion.div>

                <motion.div
                    animate={{ y: [0, 20, 0], rotate: [20, 25, 20] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                    className="absolute bottom-[15%] left-[5%] w-40 h-48 bg-white p-3 pb-10 shadow-2xl opacity-30 border border-gray-200 rounded-sm"
                >
                    <div className="w-full h-full bg-gray-900 flex items-center justify-center overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-bl from-pink-500 to-blue-400 opacity-60" />
                    </div>
                </motion.div>
            </div>

            {/* Central Typography and Button */}
            <div className="relative z-30 flex flex-col items-center justify-center gap-8 md:gap-12 px-4 text-center">
                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
                    className="text-[clamp(3.5rem,15vw,8rem)] font-display font-black tracking-tighter text-white leading-none"
                    style={{
                        textShadow: 'clamp(4px,1.5vw,8px) clamp(4px,1.5vw,8px) 0px #ff00ff, -2px -2px 0px #00ffff',
                        WebkitTextStroke: '2px #1a1a1a'
                    }}
                >
                    RETRO IF
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <Link
                        to="/comprar"
                        className="inline-block px-6 md:px-10 py-3 md:py-4 bg-[#39ff14] text-[#1a1a1a] font-display font-bold text-xl md:text-3xl tracking-widest border-4 border-[#1a1a1a] shadow-[6px_6px_0px_#ff00ff] md:shadow-[8px_8px_0px_#ff00ff] active:translate-y-1 active:translate-x-1 active:shadow-[2px_2px_0px_#ff00ff] hover:translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_#ff00ff] transition-all duration-200"
                    >
                        COMPRE AQUI
                    </Link>
                </motion.div>
            </div>

        </div>
    );
};

export default RetroBanner;
