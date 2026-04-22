import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Copy, Check, Info, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

import qrcodeImg from '../assets/images/qrcodetiasj.png';

const PagamentoTIASJPage = () => {
    const navigate = useNavigate();
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const pixCode = "00020126550014br.gov.bcb.pix0124atleticaifsjbv@gmail.com0205TIASJ520400005303986540530.005802BR5925Raissa Figueiredo Machado6009Sao Paulo62240520daqr312392961888774363040C5C";
    const truncatedPix = pixCode.substring(0, 32) + "...";

    const contacts = [
        { name: "Raissa", number: "5515997216434", display: "+55 15 99721-6434" },
        { name: "Caio", number: "5519984209981", display: "+55 19 98420-9981" }
    ];

    const copyToClipboard = () => {
        navigator.clipboard.writeText(pixCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };

    // Custom WhatsApp SVG Icon
    const WhatsAppIcon = ({ size = 24, className }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
        >
            <path d="M17.498 14.398c-.282-.141-1.673-.827-1.932-.922-.259-.094-.447-.141-.634.141-.188.282-.729.922-.894 1.11-.165.188-.329.211-.611.07-.282-.141-1.196-.441-2.278-1.408-.841-.752-1.409-1.682-1.574-1.964-.165-.282-.018-.435.123-.576.128-.128.282-.329.423-.494.141-.165.188-.282.282-.47.094-.188.047-.353-.024-.494-.07-.141-.634-1.53-.87-2.094-.229-.549-.462-.475-.634-.484-.165-.009-.353-.009-.541-.009-.188 0-.494.07-.752.353-.259.282-.988.966-.988 2.356 0 1.39.1011 2.731 1.152 3.107 1.272.482 1.839 2.155 3.107 3.673 1.54 1.84 3.65 2.94 5.67 3.33.682.132 1.314.111 1.808.067.557-.049 1.673-.684 1.908-1.346.235-.662.235-1.229.165-1.346-.07-.117-.259-.188-.541-.329ZM12.002 22.036c-1.658 0-3.284-.429-4.721-1.242l-.338-.192-3.509.919.937-3.418-.21-.336a9.986 9.986 0 0 1-1.541-5.362C2.62 6.554 7.228 1.956 12 1.956c2.404 0 4.66.936 6.36 2.636S21.002 8.544 21.002 11c0 4.992-4.608 9.59-10.404 9.59A10.024 10.024 0 0 1 12 22.036Z" />
        </svg>
    );

    return (
        <MainLayout>
            <div className="w-full max-w-[800px] mx-auto px-4 md:px-8 py-12">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center gap-2 mb-8 text-black hover:text-college-green font-display font-bold uppercase transition-colors"
                >
                    <ChevronLeft size={24} strokeWidth={3} />
                    Voltar aos Jogos
                </button>

                {/* Header */}
                <div className="text-center mb-10">
                    <div className="bg-college-gold inline-block px-4 py-2 mb-4 border-2 border-black shadow-[4px_4px_0px_#000]">
                        <span className="font-display font-bold text-sm uppercase tracking-wider">GARANTA SUA VAGA</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-black text-black uppercase leading-tight mb-4">
                        PAGAMENTO TIASJ
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-2xl mx-auto">
                        Acesso válido para os <span className="font-bold text-college-dark-green">3 dias</span> de evento,
                        tanto para atletas jogarem quanto para torcedores.
                    </p>
                </div>

                <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_#000] mb-12">
                    <div className="flex flex-col items-center">
                        {/* Price Display */}
                        <div className="bg-gray-100 border-b-4 border-college-green w-full text-center py-6 mb-8">
                            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">VALOR ÚNICO</p>
                            <p className="text-6xl font-display font-black text-college-green">R$ 30,00</p>
                        </div>

                        {/* QR Code */}
                        <div className="bg-white border-4 border-gray-200 p-2 mb-8 mx-auto hover:border-college-green transition-colors w-64 h-64 md:w-80 md:h-80 flex items-center justify-center relative group">
                            <img
                                src={qrcodeImg}
                                alt="QR Code Pix"
                                className="w-full h-full object-contain"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-college-green/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </div>

                        {/* Pix Copia e Cola */}
                        <div className="w-full max-w-lg mb-8">
                            <p className="text-center font-bold text-gray-600 uppercase mb-3 text-sm flex items-center justify-center gap-2">
                                <Info size={16} />
                                Ou use o Pix Copia e Cola
                            </p>
                            <button
                                onClick={copyToClipboard}
                                className="w-full group relative flex items-center justify-between bg-gray-50 border-2 border-dashed border-gray-400 hover:border-college-green p-4 overflow-hidden transition-colors"
                            >
                                <span className="font-mono text-gray-500 font-medium truncate pr-4 text-left flex-grow">
                                    {truncatedPix}
                                </span>
                                <div className={`shrink-0 flex items-center justify-center p-2 rounded-full transition-colors ${copied ? 'bg-college-green text-white' : 'bg-gray-200 group-hover:bg-college-gold text-black'}`}>
                                    {copied ? <Check size={20} /> : <Copy size={20} />}
                                </div>
                            </button>
                            {copied && (
                                <p className="text-center text-college-dark-green font-bold text-sm mt-3 animate-pulse">
                                    ✓ Código copiado com sucesso!
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Verification Section */}
                    <div className="mt-16 w-full max-w-4xl mx-auto border-t-8 border-black pt-12">
                        <div className="flex flex-col lg:flex-row gap-12 items-start">
                            {/* Left Text */}
                            <div className="w-full lg:w-1/3">
                                <div className="border-l-8 border-college-green pl-6 py-2 mb-6">
                                    <h3 className="text-4xl font-display font-black text-black uppercase leading-none tracking-tight">
                                        E AGORA?
                                    </h3>
                                </div>
                                <p className="text-xl font-medium text-gray-700 leading-relaxed">
                                    Clique em um dos gestores abaixo para enviar o comprovante do seu <span className="font-bold text-black border-b-4 border-college-gold">Pix finalizado</span>
                                </p>
                            </div>

                            {/* Right Contacts */}
                            <div className="w-full lg:w-2/3 flex flex-col gap-6">
                                {contacts.map((contact, idx) => (
                                    <a
                                        key={idx}
                                        href={`https://wa.me/${contact.number}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group block w-full bg-white hover:bg-college-gold border-4 border-black p-6 shadow-[8px_8px_0px_#000] transition-colors hover:shadow-none hover:translate-x-2 hover:translate-y-2 relative overflow-hidden"
                                    >
                                        <div className="flex flex-row items-center justify-between relative z-10">
                                            <div className="text-left flex flex-col">
                                                <h3 className="font-display font-black text-3xl uppercase text-black transition-colors">
                                                    {contact.name}
                                                </h3>
                                                <p className="font-mono text-gray-600 font-bold group-hover:text-black mt-1">
                                                    {contact.display}
                                                </p>
                                            </div>
                                            <div className="bg-black group-hover:bg-white p-4 transition-colors border-4 border-transparent group-hover:border-black shrink-0">
                                                <MessageCircle className="text-white group-hover:text-black" size={32} />
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default PagamentoTIASJPage;
