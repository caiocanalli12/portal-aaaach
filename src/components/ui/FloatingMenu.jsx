import React from 'react';
import { motion } from 'framer-motion';
import { Home, Calendar, Trophy, Ticket, Users } from 'lucide-react';

const MENU_ITEMS = [
    { icon: Home, label: 'Início', target: 'hero' },
    { icon: Ticket, label: 'Eventos', target: 'events' },
    { icon: Trophy, label: 'Esportes', target: 'sports' },
    { icon: Calendar, label: 'Agenda', target: 'calendar' },
    { icon: Users, label: 'Gestão', target: 'management' },
];

const FloatingMenu = () => {

    const scrollToSection = (targetId) => {
        if (targetId === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const element = document.getElementById(targetId);
        if (element) {
            // Offset using standard scroll
            const offset = 100; // Adjustment for visual space
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
            <div className="flex items-center gap-2 p-2 rounded-full bg-college-green border-4 border-white shadow-[0_8px_20px_rgba(0,0,0,0.3)] ring-4 ring-black/10">
                {MENU_ITEMS.map((item, index) => (
                    <motion.button
                        key={index}
                        onClick={() => scrollToSection(item.target)}
                        whileHover={{ scale: 1.1, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        className={`
              relative p-3 rounded-full flex flex-col items-center justify-center transition-all duration-300 group
              text-white/70 hover:text-white hover:bg-white/20
            `}
                    >
                        <item.icon size={22} strokeWidth={2.5} />

                        {/* Tooltip */}
                        <span className="absolute -top-12 scale-0 group-hover:scale-100 transition-all duration-200 bg-black text-white text-xs font-bold px-3 py-1 rounded shadow-lg whitespace-nowrap border-2 border-white pointer-events-none">
                            {item.label}
                        </span>
                    </motion.button>
                ))}

            </div>
        </motion.div>
    );
};

export default FloatingMenu;
