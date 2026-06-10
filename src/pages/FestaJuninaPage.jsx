import React from 'react';
import { ChevronLeft, Calendar, MapPin, Clock, Ticket, Utensils, Dice5 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const FestaJuninaPage = () => {
    const navigate = useNavigate();

    const tickets = [
        { id: 'bixo', title: 'BIXO', price: 'R$ 15' },
        { id: 'if', title: 'IF', price: 'R$ 20' },
        { id: 'externo', title: 'EXTERNO', price: 'R$ 25' },
        { id: 'grupo-if', title: 'GRUPO 5+ IF', price: 'R$ 15 cada' },
        { id: 'grupo-externo', title: 'GRUPO 5+ EXTERNO', price: 'R$ 20 cada' }
    ];

    const handleBuy = (id) => {
        navigate(`/events/festa-junina/pagamento/${id}`);
        window.scrollTo(0,0);
    };

    return (
        <MainLayout>
            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 py-12">
                <button
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center gap-2 mb-8 text-black hover:text-college-green font-display font-bold uppercase transition-colors"
                >
                    <ChevronLeft size={24} strokeWidth={3} />
                    Voltar para Início
                </button>

                <div className="mb-12 border-l-8 border-college-green pl-6 py-2">
                    <div className="bg-college-gold inline-block px-3 py-1 mb-2 border-2 border-black shadow-[4px_4px_0px_#000]">
                        <span className="font-display font-bold text-xs uppercase tracking-wider">EVENTOS</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-black uppercase leading-none mb-4">
                        FESTA JUNINA
                    </h1>
                    <p className="text-xl md:text-3xl text-gray-600 font-medium">
                        Arraiá da AAACH
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* Coluna 1: Info */}
                    <div className="space-y-8">
                        {/* Info Card */}
                        <div className="bg-white text-black p-8 border-4 border-black shadow-[8px_8px_0px_#004d25] h-full">
                            <h3 className="text-3xl font-display font-black uppercase mb-8 border-b-4 border-college-green pb-4">
                                Informações
                            </h3>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6">
                                    <Calendar className="text-college-dark-green shrink-0 mt-1" size={32} />
                                    <div>
                                        <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-2">DATA</p>
                                        <p className="font-display font-black text-2xl">18 de Junho</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <Clock className="text-college-dark-green shrink-0 mt-1" size={32} />
                                    <div>
                                        <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-2">HORÁRIO</p>
                                        <p className="font-display font-black text-2xl">21:00h</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <MapPin className="text-college-dark-green shrink-0 mt-1" size={32} />
                                    <div>
                                        <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-2">LOCAL</p>
                                        <p className="font-display font-black text-2xl leading-tight">
                                            Em breve
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coluna 2: Cardápio / Atrações */}
                    <div className="space-y-8">
                        <div className="bg-white text-black p-8 border-4 border-black shadow-[8px_8px_0px_#000] h-full">
                            <h3 className="text-2xl font-display font-black uppercase mb-6 flex items-center gap-4">
                                <Utensils className="text-college-gold" size={28} />
                                Vendas
                            </h3>
                            <ul className="list-disc list-inside font-medium text-lg text-gray-700 space-y-2 mb-8">
                                <li>Chopp</li>
                                <li>Vinho Quente</li>
                                <li>Copão de Vodka</li>
                            </ul>

                            <h3 className="text-2xl font-display font-black uppercase mb-6 flex items-center gap-4 border-t-2 border-gray-200 pt-6">
                                <Dice5 className="text-college-gold" size={28} />
                                Jogos
                            </h3>
                            <ul className="font-medium text-lg text-gray-700 space-y-3">
                                <li className="flex justify-between border-b-2 border-gray-100 pb-2"><span>Cadeia</span> <span className="font-display font-bold">R$ 10</span></li>
                                <li className="flex justify-between border-b-2 border-gray-100 pb-2"><span>Beer Pong</span> <span className="font-display font-bold">R$ 12</span></li>
                                <li className="flex justify-between border-b-2 border-gray-100 pb-2"><span>Correio Elegante</span> <span className="font-display font-bold">R$ 1</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Ingressos */}
                <div className="mt-16 border-t-8 border-black pt-16">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-8 w-4 bg-college-green border-2 border-black -skew-x-12" />
                        <h2 className="text-3xl lg:text-4xl font-display font-black text-black uppercase tracking-tight flex items-center gap-4">
                            <Ticket size={40} className="text-college-red" />
                            Ingressos
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tickets.map((ticket, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleBuy(ticket.id)}
                                className="group bg-white border-4 border-black p-8 shadow-[8px_8px_0px_#000] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all flex flex-col justify-between min-h-[200px] text-left relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-16 h-16 bg-college-gold transform rotate-45 translate-x-8 -translate-y-8 border-b-4 border-l-4 border-black group-hover:bg-college-green transition-colors" />
                                
                                <div>
                                    <h3 className="text-3xl font-display font-black uppercase text-black group-hover:text-college-green transition-colors mb-2">
                                        {ticket.title}
                                    </h3>
                                    <div className="h-1 w-12 bg-black mb-6" />
                                </div>
                                <div className="flex items-end justify-between">
                                    <span className="text-2xl font-display font-black bg-black text-white px-3 py-1 -skew-x-6">
                                        {ticket.price}
                                    </span>
                                    <span className="font-display font-bold text-college-red group-hover:text-black uppercase tracking-wider text-sm flex items-center gap-1">
                                        Comprar <ChevronLeft className="rotate-180" size={16} />
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

            </div>
        </MainLayout>
    );
};

export default FestaJuninaPage;
