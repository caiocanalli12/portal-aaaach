import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

const Calendar = () => {
    // Start at current date or Jan 2026 if current date is not in 2026 (for safe fallback, though user implies context is 2026)
    // Given the prompt, we will default to the current real date if in 2026, otherwise Jan 2026.
    const today = new Date();
    // Force year to 2026 for demonstration if needed, but keeping logic effectively:
    const currentYear = today.getFullYear();
    const initialDate = currentYear === 2026 ? today : new Date(2026, 0, 1);

    const [currentDate, setCurrentDate] = useState(initialDate);
    const navigate = useNavigate();

    // Helpers
    const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const getFirstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay(); // 0 = Sunday

    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate); // Buffer for grid

    // Navigation Bounds (2026 only)
    const handlePrevMonth = () => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
        if (newDate.getFullYear() === 2026) setCurrentDate(newDate);
    };

    const handleNextMonth = () => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
        if (newDate.getFullYear() === 2026) setCurrentDate(newDate);
    };

    const isMonthStart = currentDate.getMonth() === 0 && currentDate.getFullYear() === 2026;
    const isMonthEnd = currentDate.getMonth() === 11 && currentDate.getFullYear() === 2026;

    // Formatting
    const monthNames = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"];
    const monthName = monthNames[currentDate.getMonth()];

    // Events Data (Month is 0-indexed: 0=Jan, 1=Feb, 2=Mar)
    const EVENTS = {
        "2-11": { label: "VÔLEI", type: "sport", link: "/event/volei" },
        "2-18": { label: "SEMÁFORO", type: "party", link: "/event/semaforo" },
        "2-26": { label: "CALOURADA", type: "party", link: "/event/calourada" }
    };

    const handleDayClick = (event) => {
        if (event && event.link) {
            navigate(event.link);
            window.scrollTo(0, 0);
        }
    }

    return (
        <section id="calendar" className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-12 mb-24">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-end justify-between mb-8 border-b-4 border-black pb-4">
                <div className="flex items-center gap-4">
                    <div className="bg-black text-white px-4 py-2 font-display font-bold text-xl rotate-3 shadow-[4px_4px_0px_#ccc]">
                        {monthName}
                    </div>
                    <h3 className="text-4xl font-display font-black text-college-green italic">2026</h3>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center gap-2 mt-4 md:mt-0">
                    <button
                        onClick={handlePrevMonth}
                        disabled={isMonthStart}
                        className={`p-2 border-2 border-black bg-white hover:bg-college-gold transition-colors disabled:opacity-30 disabled:hover:bg-white shadow-[4px_4px_0px_#000] active:translate-y-1 active:shadow-none`}
                    >
                        <ChevronLeft size={24} strokeWidth={3} />
                    </button>
                    <button
                        onClick={handleNextMonth}
                        disabled={isMonthEnd}
                        className={`p-2 border-2 border-black bg-white hover:bg-college-gold transition-colors disabled:opacity-30 disabled:hover:bg-white shadow-[4px_4px_0px_#000] active:translate-y-1 active:shadow-none`}
                    >
                        <ChevronRight size={24} strokeWidth={3} />
                    </button>
                </div>
            </div>

            <motion.div
                className="grid grid-cols-7 gap-2 md:gap-4 bg-white p-4 border-4 border-black shadow-[12px_12px_0px_#ccc] touch-pan-y"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                        if (!isMonthEnd) handleNextMonth();
                    } else if (swipe > swipeConfidenceThreshold) {
                        if (!isMonthStart) handlePrevMonth();
                    }
                }}
            >
                {/* Weekday Headers */}
                {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, i) => (
                    <div key={i} className="text-center font-black font-display text-xl py-2 bg-gray-100 border-2 border-transparent select-none">{day}</div>
                ))}

                {/* Empty slots for previous month days */}
                {Array.from({ length: firstDay }).map((_, i) => (
                    <div key={`empty-${i}`} className="aspect-square bg-gray-50/50 border-2 border-transparent" />
                ))}

                {/* Days */}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    // Check if is "Today"
                    const isToday =
                        today.getDate() === day &&
                        today.getMonth() === currentDate.getMonth() &&
                        today.getFullYear() === currentDate.getFullYear();

                    const eventKey = `${currentDate.getMonth()}-${day}`;
                    const event = EVENTS[eventKey];

                    return (
                        <motion.div
                            key={day}
                            onClick={() => handleDayClick(event)}
                            whileHover={event ? { scale: 1.05 } : {}}
                            className={`
                                aspect-square flex flex-col items-center justify-between relative border-2 p-1 overflow-visible z-10 hover:z-30 select-none
                                ${isToday ? 'bg-college-gold border-black' : event ? 'bg-college-green border-black cursor-pointer' : 'bg-white border-gray-100 hover:border-black'}
                            `}
                        >
                            <span className={`text-lg md:text-2xl font-bold font-display z-10 ${isToday ? 'text-black' : event ? 'text-white' : 'text-gray-400 hover:text-black'}`}>
                                {day}
                            </span>

                            {/* Event Sticker */}
                            {event && (
                                <div className="absolute bottom-1 md:bottom-2 left-1/2 -translate-x-1/2 w-full z-20">
                                    <div className={`bg-black text-white text-[8px] md:text-[10px] lg:text-xs font-bold px-1 py-0.5 md:py-1 transform ${day % 2 === 0 ? 'rotate-2' : '-rotate-2'} hover:rotate-0 transition-transform shadow-[2px_2px_0px_#fff] text-center leading-none border border-white truncate`}>
                                        {event.label}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
};

export default Calendar;
