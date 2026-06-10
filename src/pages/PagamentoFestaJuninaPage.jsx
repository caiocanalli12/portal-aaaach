import React, { useState } from 'react';
import { ChevronLeft, Copy, CheckCircle2, MessageCircle } from 'lucide-react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

import img15 from '../assets/images/pix/15.jpeg';
import img20 from '../assets/images/pix/20.jpeg';
import img25 from '../assets/images/pix/25.jpeg';
import img75 from '../assets/images/pix/75.jpeg';
import img100 from '../assets/images/pix/100.jpeg';

const TICKET_DATA = {
    'bixo': {
        title: 'INGRESSO BIXO',
        price: 'R$ 15,00',
        pixCode: '00020126580014BR.GOV.BCB.PIX0136ffe3856c-53d9-40e5-a265-364bd2254bca520400005303986540515.005802BR5912Caio Canalli6009SAO PAULO62140510UBnGGU5DZO6304D948',
        image: img15
    },
    'if': {
        title: 'INGRESSO IF',
        price: 'R$ 20,00',
        pixCode: '00020126580014BR.GOV.BCB.PIX0136ffe3856c-53d9-40e5-a265-364bd2254bca520400005303986540520.005802BR5912Caio Canalli6009SAO PAULO621405100DF4h3StLk6304FCFA',
        image: img20
    },
    'externo': {
        title: 'INGRESSO EXTERNO',
        price: 'R$ 25,00',
        pixCode: '00020126580014BR.GOV.BCB.PIX0136ffe3856c-53d9-40e5-a265-364bd2254bca520400005303986540525.005802BR5912Caio Canalli6009SAO PAULO62140510NWf4pjmH2c6304F08E',
        image: img25
    },
    'grupo-if': {
        title: 'COMBO 5+ IF',
        price: 'R$ 75,00',
        pixCode: '00020126580014BR.GOV.BCB.PIX0136ffe3856c-53d9-40e5-a265-364bd2254bca520400005303986540575.005802BR5912Caio Canalli6009SAO PAULO62140510R4ds5pf9bB63044377',
        image: img75
    },
    'grupo-externo': {
        title: 'COMBO 5+ EXTERNO',
        price: 'R$ 100,00',
        pixCode: '00020126580014BR.GOV.BCB.PIX0136ffe3856c-53d9-40e5-a265-364bd2254bca5204000053039865406100.005802BR5912Caio Canalli6009SAO PAULO621405101r8Xkw3gLY6304B486',
        image: img100
    }
};

const PagamentoFestaJuninaPage = () => {
    const { ticketType } = useParams();
    const navigate = useNavigate();
    const [copied, setCopied] = useState(false);

    const ticket = TICKET_DATA[ticketType];

    if (!ticket) {
        return <Navigate to="/events/festa-junina" replace />;
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(ticket.pixCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <MainLayout>
            <div className="w-full max-w-[800px] mx-auto px-4 md:px-8 py-12 min-h-[70vh] flex flex-col">
                <button
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center gap-2 mb-8 text-black hover:text-college-green font-display font-bold uppercase transition-colors self-start"
                >
                    <ChevronLeft size={24} strokeWidth={3} />
                    Voltar para Evento
                </button>

                <div className="bg-white border-4 border-black shadow-[12px_12px_0px_#000] p-8 md:p-12 text-center">
                    <div className="inline-block bg-college-gold px-4 py-1 border-2 border-black -rotate-2 mb-6">
                        <span className="font-display font-bold text-sm uppercase tracking-widest">PAGAMENTO PIX</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-display font-black text-black uppercase mb-2">
                        {ticket.title}
                    </h1>
                    <p className="text-2xl font-display font-bold text-college-green mb-12">
                        {ticket.price}
                    </p>

                    <div className="flex justify-center mb-8">
                        <div className="border-4 border-black p-2 bg-white shadow-[8px_8px_0px_#ccc]">
                            <img src={ticket.image} alt="QR Code PIX" className="w-64 h-64 object-contain" />
                        </div>
                    </div>

                    <div className="max-w-[500px] mx-auto text-left">
                        <p className="font-display font-bold text-sm text-gray-500 uppercase tracking-wider mb-2">
                            PIX Copia e Cola
                        </p>
                        <div className="flex items-center">
                            <input
                                type="text"
                                readOnly
                                value={ticket.pixCode}
                                className="w-full border-4 border-r-0 border-black p-4 font-mono text-sm bg-gray-50 focus:outline-none"
                            />
                            <button
                                onClick={handleCopy}
                                className={`flex items-center justify-center h-[56px] px-6 border-4 border-black font-display font-bold uppercase transition-colors ${copied ? 'bg-college-green text-white' : 'bg-black text-white hover:bg-college-gold hover:text-black'}`}
                            >
                                {copied ? <CheckCircle2 size={24} /> : <Copy size={24} />}
                            </button>
                        </div>
                        {copied && (
                            <p className="text-college-green font-bold text-sm mt-2 text-center animate-pulse">
                                Chave copiada com sucesso!
                            </p>
                        )}
                    </div>

                    <div className="mt-12 border-t-4 border-black pt-8 max-w-[500px] mx-auto">
                        <p className="font-display font-bold text-gray-600 mb-4">
                            Após o pagamento, envie seu comprovante para o Caio!
                        </p>
                        <a 
                            href={`https://wa.me/5519984209981?text=Ol%C3%A1%21%20Aqui%20est%C3%A1%20o%20meu%20comprovante%20do%20${encodeURIComponent(ticket.title)}%20da%20Festa%20Junina.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-black text-white border-4 border-black p-4 font-display font-bold text-xl uppercase transition-colors shadow-[6px_6px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                        >
                            <MessageCircle size={28} />
                            Enviar no WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default PagamentoFestaJuninaPage;
