import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

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
                        Venha torcer pelo Lagarto!
                    </p>
                </div>


            </div>
        </MainLayout>
    );
};

export default AmistososPage;
