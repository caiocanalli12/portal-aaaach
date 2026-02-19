import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const JogosPage = () => {
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

                <div className="flex-grow flex items-center justify-center">
                    <div className="text-center p-12 border-4 border-black shadow-[8px_8px_0px_#000] bg-white rotate-1">
                        <h1 className="text-4xl md:text-6xl font-display font-black text-black uppercase leading-tight">
                            JOGOS UNIVERSITÁRIOS EM BREVE
                        </h1>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default JogosPage;
