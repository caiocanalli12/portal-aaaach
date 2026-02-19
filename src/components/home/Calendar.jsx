import React, { useState } from 'react';
import { createPortal } from 'react-dom';
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
        "1-23": [{ label: "VETERANOS COMEÇAM AQUI", type: "info", customBg: "#6b0202", noClick: true }],
        "2-9": [{ label: "BIXOS COMEÇAM AQUI", type: "info", customBg: "#6b0202", noClick: true }],
        "2-10": [{ label: "BASQUETE", type: "sport", link: "/event/basquete" }],
        "2-11": [{ label: "VÔLEI", type: "sport", link: "/event/volei" }],
        "2-18": [
            { label: "SEMÁFORO", type: "party", link: "/event/semaforo", position: "top" },
            { label: "I CHOPPADA", type: "party", link: "/event/choppada", position: "bottom" }
        ],
        "2-26": [{ label: "CALOURADA", type: "party", link: "/event/calourada" }]
    };

    const [selectedDayEvents, setSelectedDayEvents] = useState(null);

    const handleDayClick = (dayEvents) => {
        if (!dayEvents || dayEvents[0]?.noClick) return;

        if (dayEvents.length === 1) {
            navigate(dayEvents[0].link);
            window.scrollTo(0, 0);
        } else {
            setSelectedDayEvents(dayEvents);
        }
    };

    return (
        <section id="calendar" className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-12 mb-24 relative">
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
                className="grid grid-cols-7 gap-1 md:gap-4 bg-white p-2 md:p-4 border-4 border-black shadow-[12px_12px_0px_#ccc] touch-pan-y relative z-0"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                dragDirectionLock={true}
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
                    <div key={i} className="text-center font-black font-display text-sm md:text-xl py-2 bg-gray-100 border-2 border-transparent select-none">{day}</div>
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
                    const events = EVENTS[eventKey];
                    const hasCustomBg = events && events[0]?.customBg;
                    const isUnclickable = events && events[0]?.noClick;

                    return (
                        <motion.div
                            key={day}
                            onClick={() => handleDayClick(events)}
                            whileHover={events && !isUnclickable ? { scale: 1.05 } : {}}
                            style={hasCustomBg ? { backgroundColor: hasCustomBg } : {}}
                            className={`
                                aspect-square min-h-[60px] md:min-h-auto flex flex-col items-center justify-between relative border-2 p-0.5 md:p-1 overflow-hidden z-10 hover:z-20 select-none
                                ${isToday ? 'bg-college-gold border-black' :
                                    hasCustomBg ? 'border-black text-white' :
                                        events ? 'bg-college-green border-black cursor-pointer' :
                                            'bg-white border-gray-100 hover:border-black'}
                                ${isUnclickable ? 'cursor-default' : ''}
                            `}
                        >
                            <span className={`text-sm md:text-2xl font-bold font-display z-10 ${isToday ? 'text-black' : (events || hasCustomBg) ? 'text-white' : 'text-gray-400 hover:text-black'}`}>
                                {day}
                            </span>

                            {/* Event Stickers Container - Pinned to Bottom */}
                            {events && (
                                <div className="absolute bottom-1 w-full px-0.5 flex flex-col gap-0.5 md:gap-1 z-20">
                                    {events.map((event, index) => (
                                        <div
                                            key={index}
                                            className={`bg-black text-white text-[6px] md:text-[10px] leading-tight font-bold px-0.5 py-0.5 md:px-1 
                                                shadow-[1px_1px_0px_#fff] text-center border border-white truncate transform
                                                ${events.length === 1
                                                    ? (day % 2 === 0 ? 'rotate-2' : '-rotate-2')
                                                    : (index % 2 === 0 ? '-rotate-2' : 'rotate-2')
                                                }
                                            `}
                                        >
                                            {event.label}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Selection Modal - Portaled to Body for correct z-index handling */}
            {selectedDayEvents && createPortal(
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm touch-none" onClick={() => setSelectedDayEvents(null)}>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-white border-4 border-black shadow-[8px_8px_0px_#044f2d] p-6 w-full max-w-sm relative"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedDayEvents(null)}
                            className="absolute top-2 right-2 p-1 hover:bg-gray-100 border-2 border-transparent hover:border-black transition-colors"
                        >
                            <span className="font-display font-black text-xl">X</span>
                        </button>

                        <h3 className="text-2xl font-display font-black uppercase mb-6 text-center pr-6">
                            Escolha o Evento
                        </h3>

                        <div className="space-y-3">
                            {selectedDayEvents.map((event, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        navigate(event.link);
                                        window.scrollTo(0, 0);
                                        setSelectedDayEvents(null);
                                    }}
                                    className="w-full bg-college-green border-2 border-black p-4 font-display font-bold text-xl uppercase text-white shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
                                >
                                    {event.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>,
                document.body
            )}
        </section>
    );
};

export default Calendar;
