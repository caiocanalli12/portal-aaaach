import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const SemaforoPage = () => {
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
                        <span className="font-display font-bold text-xs uppercase tracking-wider">INTEGRAÇÃO</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-display font-black text-black uppercase leading-none mb-4">
                        SEMÁFORO DOS BIXOS
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 font-medium">
                        Para começar com o pé direito!
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
                                O Semáforo dos Bixos é uma ação tradicional de arrecadação para a Atlética, onde os calouros ocupam as ruas centrais da cidade para interagir com a comunidade. Durante o evento, os estudantes abordam os motoristas nos sinais de trânsito em um clima de competição por prêmios em quem arrecadar mais, podendo participar de brincadeiras como pinturas, cortes de cabelo e dinâmicas com bebidas.
                                <br /><br />
                                É fundamental destacar que a atividade é pautada pela ética e pela liberdade individual: lembrando que atuamos com respeito e ninguém é obrigado a fazer o que não quer, garantindo que a integração seja uma experiência positiva e segura para todos os envolvidos.
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
                                        <p className="font-display font-bold text-xl">18 de Março</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Clock className="text-college-dark-green shrink-0 mt-1" size={24} />
                                    <div>
                                        <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">HORÁRIO</p>
                                        <p className="font-display font-bold text-xl">15:00</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <MapPin className="text-college-dark-green shrink-0 mt-1" size={24} />
                                    <div>
                                        <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">LOCALIZAÇÃO</p>
                                        <p className="font-display font-bold text-lg leading-tight">
                                            Praça Coronel Joaquim José <br />
                                            <span className="text-gray-500 text-sm font-normal">(Esquina do Canecão)</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="w-full h-[400px] border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,0.2)]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231.25276674168114!2d-46.79787862476954!3d-21.971264026024933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c9cb002d799c03%3A0xf68488c641c70f66!2sBig%20Dog!5e0!3m2!1spt-BR!2sbr!4v1769717170522!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </MainLayout>
    );
};

export default SemaforoPage;
