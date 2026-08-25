import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Wine, ArrowLeft, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const PurchasePage = () => {
    const [loading, setLoading] = useState(null);

    const handlePurchase = async (title, price, type) => {
        setLoading(type);
        try {
            const response = await fetch('http://localhost:3001/create-preference', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, price }),
            });
            if (!response.ok) throw new Error('Erro ao criar preferência');
            const data = await response.json();
            window.location.href = data.init_point;
        } catch (error) {
            console.error(error);
            alert('Erro ao redirecionar para o pagamento. Tente novamente!');
        } finally {
            setLoading(null);
        }
    };

    return (
        <div className="w-full min-h-screen bg-[#121212] text-white relative overflow-hidden flex flex-col items-center pt-6 pb-16 px-4 font-sans">

            {/* Background Glows */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-[radial-gradient(circle,_rgba(57,255,20,0.15)_0%,_transparent_70%)] blur-[50px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[radial-gradient(circle,_rgba(255,0,255,0.15)_0%,_transparent_70%)] blur-[50px]" />
            </div>

            {/* Back Button */}
            <div className="w-full max-w-4xl flex justify-start mb-6 z-10">
                <Link to="/" className="flex items-center gap-2 text-[#ff00ff] hover:text-[#39ff14] active:text-[#39ff14] transition-colors font-bold uppercase tracking-wider text-xs md:text-sm">
                    <ArrowLeft size={14} /> Voltar
                </Link>
            </div>

            {/* Main Title */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="z-10 text-center mb-10 md:mb-16 px-2"
            >
                <h1
                    className="font-display font-black tracking-tighter uppercase text-white mb-2 leading-none"
                    style={{
                        fontSize: 'clamp(2.5rem, 12vw, 5rem)',
                        textShadow: '4px 4px 0px #ff00ff, -1px -1px 0px #39ff14',
                        WebkitTextStroke: '1px #121212'
                    }}
                >
                    RETRO IF
                </h1>
                <p className="text-sm md:text-xl font-bold tracking-widest text-[#39ff14] uppercase drop-shadow-[0_0_8px_rgba(57,255,20,0.6)]">
                    Detalhes do Evento
                </p>
            </motion.div>

            {/* 1. Info Grid */}
            <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 z-10 mb-12 md:mb-24">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 md:gap-6 bg-[#1a1a1a] p-4 md:p-6 border-2 border-[#2a2a2a] shadow-[4px_4px_0px_#39ff14] active:-translate-y-1 hover:-translate-y-1 transition-transform"
                >
                    <div className="p-2 md:p-3 bg-[#121212] border-2 border-[#39ff14] rounded-sm shrink-0">
                        <Calendar size={24} className="text-[#39ff14] md:hidden" />
                        <Calendar size={32} className="text-[#39ff14] hidden md:block" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Data</p>
                        <p className="text-xl md:text-2xl font-bold">03/09</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-4 md:gap-6 bg-[#1a1a1a] p-4 md:p-6 border-2 border-[#2a2a2a] shadow-[4px_4px_0px_#ff00ff] active:-translate-y-1 hover:-translate-y-1 transition-transform"
                >
                    <div className="p-2 md:p-3 bg-[#121212] border-2 border-[#ff00ff] rounded-sm shrink-0">
                        <Clock size={24} className="text-[#ff00ff] md:hidden" />
                        <Clock size={32} className="text-[#ff00ff] hidden md:block" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Horário</p>
                        <p className="text-xl md:text-2xl font-bold">21h</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-4 md:gap-6 bg-[#1a1a1a] p-4 md:p-6 border-2 border-[#2a2a2a] shadow-[4px_4px_0px_#ff00ff] active:-translate-y-1 hover:-translate-y-1 transition-transform"
                >
                    <div className="p-2 md:p-3 bg-[#121212] border-2 border-[#ff00ff] rounded-sm shrink-0">
                        <MapPin size={24} className="text-[#ff00ff] md:hidden" />
                        <MapPin size={32} className="text-[#ff00ff] hidden md:block" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Local</p>
                        <p className="text-base md:text-lg font-bold">Divulgado em breve</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-4 md:gap-6 bg-[#1a1a1a] p-4 md:p-6 border-2 border-[#2a2a2a] shadow-[4px_4px_0px_#39ff14] active:-translate-y-1 hover:-translate-y-1 transition-transform"
                >
                    <div className="p-2 md:p-3 bg-[#121212] border-2 border-[#39ff14] rounded-sm shrink-0">
                        <Wine size={24} className="text-[#39ff14] md:hidden" />
                        <Wine size={32} className="text-[#39ff14] hidden md:block" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Open Bar</p>
                        <p className="text-sm md:text-base font-bold leading-tight">Gummy, Suco de Abóbora e Sangue de Lagarto</p>
                    </div>
                </motion.div>

            </div>

            {/* 2. Tickets Section */}
            <div className="w-full max-w-4xl z-10 flex flex-col items-center">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="font-display font-black tracking-tighter uppercase text-white mb-8 md:mb-12 text-center"
                    style={{
                        fontSize: 'clamp(1.8rem, 8vw, 3rem)',
                        textShadow: '4px 4px 0px #39ff14',
                        WebkitTextStroke: '1px #121212'
                    }}
                >
                    Garanta seu Ingresso
                </motion.h2>

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">

                    {/* Card 1: Aluno IF */}
                    <motion.div
                        whileHover={{ y: -8 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-[#1a1a1a]/80 backdrop-blur-sm border-4 border-[#39ff14] p-6 md:p-8 flex flex-col items-center shadow-xl relative"
                    >
                        <div className="absolute -top-3 w-16 h-4 bg-gray-300 opacity-50 rotate-3"></div>
                        <h3 className="text-2xl md:text-3xl font-display font-black uppercase tracking-wider mb-2 text-white">Aluno IF</h3>
                        <p className="text-4xl md:text-5xl font-black text-[#39ff14] mb-6 md:mb-8">R$ 40,00</p>
                        <button
                            onClick={() => handlePurchase('Ingresso RETRO IF - Aluno IF', 40.00, 'aluno')}
                            disabled={loading !== null}
                            className="w-full flex items-center justify-center gap-2 px-4 md:px-8 py-3 md:py-4 bg-[#39ff14] text-[#121212] font-display font-bold text-lg md:text-2xl tracking-widest border-4 border-[#121212] shadow-[6px_6px_0px_#ff00ff] active:translate-y-1 active:translate-x-1 active:shadow-[2px_2px_0px_#ff00ff] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_#ff00ff] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {loading === 'aluno' ? <><Loader2 size={20} className="animate-spin" /> AGUARDE...</> : 'COMPRAR'}
                        </button>
                    </motion.div>

                    {/* Card 2: Externo */}
                    <motion.div
                        whileHover={{ y: -8 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-[#1a1a1a]/80 backdrop-blur-sm border-4 border-[#ff00ff] p-6 md:p-8 flex flex-col items-center shadow-xl relative"
                    >
                        <div className="absolute -top-3 w-16 h-4 bg-gray-300 opacity-50 -rotate-2"></div>
                        <h3 className="text-2xl md:text-3xl font-display font-black uppercase tracking-wider mb-2 text-white">Público Externo</h3>
                        <p className="text-4xl md:text-5xl font-black text-[#ff00ff] mb-6 md:mb-8">R$ 45,00</p>
                        <button
                            onClick={() => handlePurchase('Ingresso RETRO IF - Público Externo', 45.00, 'externo')}
                            disabled={loading !== null}
                            className="w-full flex items-center justify-center gap-2 px-4 md:px-8 py-3 md:py-4 bg-[#39ff14] text-[#121212] font-display font-bold text-lg md:text-2xl tracking-widest border-4 border-[#121212] shadow-[6px_6px_0px_#ff00ff] active:translate-y-1 active:translate-x-1 active:shadow-[2px_2px_0px_#ff00ff] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_#ff00ff] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {loading === 'externo' ? <><Loader2 size={20} className="animate-spin" /> AGUARDE...</> : 'COMPRAR'}
                        </button>
                    </motion.div>

                </div>
            </div>

        </div>
    );
};

export default PurchasePage;
