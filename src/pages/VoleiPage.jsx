import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const VoleiPage = () => {
    return (
        <MainLayout>
            <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 py-12">
                {/* Back Button */}
                <Link to="/" className="inline-flex items-center gap-2 mb-8 text-black hover:text-college-green font-display font-bold uppercase transition-colors">
                    <ChevronLeft size={24} strokeWidth={3} />
                    Voltar para Início
                </Link>

                {/* Header */}
                <div className="mb-12 border-l-8 border-college-green pl-6 py-2">
                    <div className="bg-college-gold inline-block px-3 py-1 mb-2 border-2 border-black shadow-[4px_4px_0px_#000]">
                        <span className="font-display font-bold text-xs uppercase tracking-wider">ESPORTE</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-display font-black text-black uppercase leading-none mb-4">
                        VÔLEI INTEGRAÇÃO
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 font-medium">
                        Integração Bixos e Veteranos
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-[2fr_1fr] gap-12 mb-12">
                    {/* Description and Image */}
                    <div className="space-y-8">
                        {/* Main Image Placeholder */}
                        <div className="w-full aspect-video bg-gray-200 border-4 border-black shadow-[8px_8px_0px_#000] overflow-hidden relative flex items-center justify-center">
                            <span className="font-display font-bold text-gray-400 text-xl uppercase">Arte do Evento (Em Breve)</span>
                        </div>

                        {/* Description Text */}
                        <div className="bg-white p-8 border-2 border-gray-200">
                            <h2 className="text-2xl font-display font-black uppercase mb-4 flex items-center gap-3">
                                <div className="w-3 h-3 bg-college-green rounded-full" />
                                Sobre o Evento
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-justify">
                                Será um jogo de vôlei descontraído, sem muitas formalidades, focado puramente na integração. O objetivo é criar um ambiente leve para que os bixos possam se conhecer melhor e interagir com os veteranos, fortalecendo a união da nossa atlética desde o início.
                            </p>
                        </div>
                    </div>

                    {/* Sidebar Info */}
                    <div className="space-y-6">
                        {/* Info Card */}
                        <div className="bg-white text-black p-6 border-4 border-black shadow-[8px_8px_0px_#004d25]">
                            <h3 className="text-2xl font-display font-black uppercase mb-6 border-b-2 border-college-green pb-2">
                                Detalhes
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Calendar className="text-college-dark-green shrink-0 mt-1" size={24} />
                                    <div>
                                        <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">DATA</p>
                                        <p className="font-display font-bold text-xl">11 de Março</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Clock className="text-college-dark-green shrink-0 mt-1" size={24} />
                                    <div>
                                        <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">HORÁRIO</p>
                                        <p className="font-display font-bold text-xl">18:00</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <MapPin className="text-college-dark-green shrink-0 mt-1" size={24} />
                                    <div>
                                        <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">LOCALIZAÇÃO</p>
                                        <p className="font-display font-bold text-lg leading-tight">
                                            Quadra do IF
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default VoleiPage;
