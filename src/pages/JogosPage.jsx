import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronLeft, ShoppingCart, Activity, Goal, PersonStanding, Trophy, Dribbble, Waves, Volleyball, ChessKnight, CircleDot, MoveUpRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

import tiasjImg from '../assets/images/ARTES/tiasj.png';

const JogosPage = () => {
    const navigate = useNavigate();

    const FutsalIcon = ({ size = 24, className }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16l4-3-1-5-6 0-1 5 4 3z" />
            <path d="M12 16v6" />
            <path d="M16 13l5.5 2" />
            <path d="M15 8l3.5-3.5" />
            <path d="M9 8L5.5 4.5" />
            <path d="M8 13l-5.5 2" />
        </svg>
    );

    const PingPongIcon = ({ size = 24, className }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <circle cx="10" cy="11" r="6" />
            <line x1="14.24" y1="15.24" x2="18.5" y2="19.5" strokeWidth="4" />
            <circle cx="18" cy="5" r="1.5" />
        </svg>
    );

    const modalities = [
        { name: 'Atletismo', icon: PersonStanding },
        { name: 'Basquete', icon: Dribbble },
        { name: 'Futsal', icon: FutsalIcon },
        { name: 'Handebol', icon: CircleDot },
        { name: 'Natação', icon: Waves },
        { name: 'Tênis de Mesa', icon: PingPongIcon },
        { name: 'Vôlei', icon: Volleyball },
        { name: 'Xadrez', icon: ChessKnight }
    ];

    return (
        <MainLayout>
            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 py-12">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center gap-2 mb-8 text-black hover:text-college-green font-display font-bold uppercase transition-colors"
                >
                    <ChevronLeft size={24} strokeWidth={3} />
                    Voltar para Início
                </button>

                {/* Header */}
                <div className="mb-12 border-l-8 border-college-green pl-6 py-2">
                    <div className="bg-college-gold inline-block px-3 py-1 mb-2 border-2 border-black shadow-[4px_4px_0px_#000]">
                        <span className="font-display font-bold text-xs uppercase tracking-wider">JOGOS UNIVERSITÁRIOS</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-black uppercase leading-none mb-4">
                        TIASJ
                    </h1>
                    <p className="text-xl md:text-3xl text-gray-600 font-medium">
                        Torneio Interatléticas de São João
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 mb-16">
                    {/* Left Column: Image & Buy Button */}
                    <div className="space-y-8 flex flex-col">
                        <div className="w-full bg-white border-4 border-black shadow-[8px_8px_0px_#000] overflow-hidden relative">
                            <img
                                src={tiasjImg}
                                alt="TIASJ Banner"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Buy Banner Action */}
                        <Link 
                            to="/sports/jogos/pagamento"
                            className="group block w-full bg-college-gold hover:bg-black border-4 border-black p-8 shadow-[8px_8px_0px_#000] transition-colors hover:shadow-none hover:translate-x-2 hover:translate-y-2 relative overflow-hidden"
                        >
                            <div className="flex flex-col md:flex-row items-center justify-between relative z-10 gap-6">
                                <div className="text-center md:text-left">
                                    <h3 className="font-display font-black text-4xl lg:text-5xl text-black group-hover:text-white uppercase transition-colors">
                                        COMPRE AQUI
                                    </h3>
                                </div>
                                <div className="bg-black group-hover:bg-college-gold p-4 transition-colors">
                                    <ShoppingCart className="text-college-gold group-hover:text-black" size={48} />
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Right Column: Info Sidebar */}
                    <div className="space-y-8">
                        {/* Info Card */}
                        <div className="bg-white text-black p-8 border-4 border-black shadow-[8px_8px_0px_#004d25]">
                            <h3 className="text-3xl font-display font-black uppercase mb-8 border-b-4 border-college-green pb-4">
                                Info Principal
                            </h3>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6">
                                    <Calendar className="text-college-dark-green shrink-0 mt-1" size={32} />
                                    <div>
                                        <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-2">DATA</p>
                                        <p className="font-display font-black text-2xl">29 a 31 de Maio</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <MapPin className="text-college-dark-green shrink-0 mt-1" size={32} />
                                    <div>
                                        <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-2">LOCAL</p>
                                        <p className="font-display font-black text-2xl leading-tight">
                                            CIC
                                        </p>
                                        <p className="text-gray-600 font-medium text-lg mt-1">
                                            Centro de Integração Comunitária
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modalities Card */}
                        <div className="bg-white text-black p-8 border-4 border-black shadow-[8px_8px_0px_#000]">
                            <h3 className="text-2xl font-display font-black uppercase mb-6 flex items-center gap-4">
                                <Trophy className="text-college-gold" size={28} />
                                Modalidades em Disputa
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                {modalities.map((mod, idx) => {
                                    const IconComponent = mod.icon;
                                    return (
                                        <div key={idx} className="flex flex-col items-center justify-center gap-3 p-4 border-2 border-gray-200 hover:border-college-green hover:shadow-[4px_4px_0px_#004d25] transition-all bg-gray-50 group">
                                            <IconComponent size={32} className="text-black group-hover:text-college-green transition-colors" />
                                            <span className="font-display font-bold uppercase text-center text-sm leading-tight group-hover:text-college-dark-green transition-colors">
                                                {mod.name}
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-16 border-t-8 border-black pt-16">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-8 w-4 bg-college-green border-2 border-black -skew-x-12" />
                        <h2 className="text-3xl lg:text-4xl font-display font-black text-black uppercase tracking-tight">
                            Localização do Evento
                        </h2>
                    </div>

                    <div className="w-full h-[500px] bg-white border-4 border-black shadow-[12px_12px_0px_rgba(0,0,0,0.1)] p-2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.241979690034!2d-46.7918656!3d-21.9636741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c9cb7dcaa5a6e7%3A0x16f7c9be5432c51!2sCIC%20-%20Centro%20de%20Integra%C3%A7%C3%A3o%20Comunit%C3%A1ria!5e0!3m2!1spt-BR!2sbr!4v1776896194533!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default JogosPage;
