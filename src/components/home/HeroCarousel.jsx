import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import bemVindoImg from '../../assets/images/ARTES/bem vindo.jpeg';

import bannerImg from '../../assets/images/ARTES/banner.jpeg';

const HERO_ITEMS = [
    {
        id: 1,
        title: "BEM-VINDO À AAAACH",
        subtitle: "IFUDEU FEDERAL APARECEU!",
        image: bemVindoImg,
        link: "#start-here"
    },
    {
        id: 2,
        title: "GESTÃO 2k26",
        subtitle: "INOVAÇÃO E RAÇA",
        image: bannerImg,
        link: "#management"
    }
];


const HeroCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % HERO_ITEMS.length);
        }, 6000); // Slower for "composed" feel
        return () => clearInterval(timer);
    }, []);

    const paginate = (newDirection) => {
        setCurrentIndex((prev) => (prev + newDirection + HERO_ITEMS.length) % HERO_ITEMS.length);
    };

    const handleSlideClick = (item) => {
        if (item.link) {
            const element = document.querySelector(item.link);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="w-full max-w-[1400px] px-4 md:px-8 pt-8 pb-12 flex justify-center">
            <div className="relative w-full aspect-[7/5] md:aspect-[21/9] lg:aspect-[7/4] bg-white border-[8px] border-college-green shadow-[10px_10px_0px_#1a1a1a] overflow-hidden group">

                <AnimatePresence initial={false} mode="wait">
                    <motion.div
                        key={currentIndex}
                        onClick={() => handleSlideClick(HERO_ITEMS[currentIndex])}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className={`absolute inset-0 w-full h-full touch-pan-y ${HERO_ITEMS[currentIndex].link ? 'cursor-pointer' : ''}`}
                    >
                        {HERO_ITEMS[currentIndex].image ? (
                            <img
                                src={HERO_ITEMS[currentIndex].image}
                                alt={HERO_ITEMS[currentIndex].title}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            /* Abstract Background for slides without image */
                            <div className="w-full h-full bg-college-green/10 flex items-center justify-center">
                                <div className="w-[120%] h-[20%] bg-college-green/20 rotate-12 blur-3xl absolute" />
                                <div className="w-[120%] h-[20%] bg-college-gold/20 -rotate-12 blur-3xl absolute" />
                            </div>
                        )}

                        {/* Boxed Content Overlay */}
                        <div className="absolute inset-x-8 bottom-8 md:bottom-12 flex flex-col items-center text-center z-10">
                            <div className="bg-college-green/90 px-6 py-2 mb-2 shadow-[4px_4px_0px_#000] rotate-[-1deg]">
                                <h3 className="text-white font-display text-lg md:text-xl tracking-widest uppercase">
                                    {HERO_ITEMS[currentIndex].subtitle}
                                </h3>
                            </div>
                            <div className="bg-white/95 border-4 border-black px-8 py-4 shadow-[8px_8px_0px_#000] rotate-[1deg]">
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-black uppercase leading-none trcking-tighter">
                                    {HERO_ITEMS[currentIndex].title}
                                </h1>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Indicators - Squares instead of dots */}
                <div className="absolute top-8 right-8 flex gap-3 z-20">
                    {HERO_ITEMS.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-4 h-4 border-2 border-black transition-all duration-300 ${index === currentIndex ? 'bg-college-green scale-110' : 'bg-white hover:bg-college-gold'
                                }`}
                        />
                    ))}
                </div>

                {/* Navigation Buttons (Classic aesthetic) */}
                <button
                    onClick={() => paginate(-1)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-college-green border-r-4 border-y-4 border-black text-white p-4 hover:bg-college-gold hover:text-black transition-colors hidden md:block shadow-[4px_4px_0px_#000]"
                >
                    <ChevronLeft size={32} strokeWidth={3} />
                </button>
                <button
                    onClick={() => paginate(1)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-college-green border-l-4 border-y-4 border-black text-white p-4 hover:bg-college-gold hover:text-black transition-colors hidden md:block shadow-[-4px_4px_0px_#000]"
                >
                    <ChevronRight size={32} strokeWidth={3} />
                </button>
            </div>
        </section>
    );
};

export default HeroCarousel;
