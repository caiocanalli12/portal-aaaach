import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import amistosoFutImg from '../assets/images/ARTES/amistosofut.png';

const AmistososPage = () => {
    const navigate = useNavigate();

    return (
        <MainLayout>
            <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 py-12 min-h-[60vh] flex flex-col">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center gap-2 mb-8 text-black hover:text-college-green font-display font-bold uppercase transition-colors self-start"
                >
                    <ChevronLeft size={24} strokeWidth={3} />
                    Voltar para Início
                </button>

                {/* Title */}
                <div className="mb-12 border-l-8 border-college-green pl-6 py-2">
                    <div className="bg-college-gold inline-block px-3 py-1 mb-2 border-2 border-black shadow-[4px_4px_0px_#000]">
                        <span className="font-display font-bold text-xs uppercase tracking-wider">PRÓXIMOS JOGOS</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-black text-black uppercase leading-none tracking-tighter mb-2">
                        AMISTOSOS
                    </h1>
                    <p className="text-xl md:text-2xl font-display font-bold text-gray-500 uppercase tracking-widest">
                        Venha torcer pela Lagarto!
                    </p>
                </div>

                <div className="grid gap-6">
                    {/* Futsal Card */}
                    <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#000] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_#004d25] transition-all">
                        {/* Imagem do Amistoso */}
                        <div className="w-full md:w-1/3 aspect-[4/3] bg-gray-100 border-4 border-black overflow-hidden flex-shrink-0">
                            <img
                                src={amistosoFutImg}
                                alt="Arte do Amistoso IF x Eng. Software"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Detalhes Corposos */}
                        <div className="flex-grow flex flex-col md:flex-row items-center justify-between w-full md:w-auto gap-6">
                            <div className="flex flex-col gap-2 w-full md:w-auto text-center md:text-left">
                                <h3 className="text-3xl font-display font-black uppercase text-black">
                                    FUTSAL
                                </h3>
                                <p className="text-xl font-medium text-gray-700">
                                    IF <span className="text-college-green font-bold mx-2">X</span> Eng. Software
                                </p>
                            </div>
                            
                            <div className="flex flex-col items-center md:items-end gap-1 w-full md:w-auto bg-gray-50 border-2 border-dashed border-gray-300 p-4 md:p-6 shrink-0">
                                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">DATA E HORÁRIO</p>
                                <p className="text-2xl font-display font-black text-black">18/03 - 18:30</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default AmistososPage;
