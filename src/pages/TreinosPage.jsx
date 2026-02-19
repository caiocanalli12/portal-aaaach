import React from 'react';
import { ChevronLeft, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const DAYS = [
    { name: 'SEGUNDA', id: 'segunda' },
    { name: 'TERÇA', id: 'terca' },
    { name: 'QUARTA', id: 'quarta' },
    { name: 'QUINTA', id: 'quinta' }
];

const TreinosPage = () => {
    const navigate = useNavigate();

    return (
        <MainLayout>
            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 py-12 min-h-[60vh] flex flex-col">
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
                    <h1 className="text-4xl md:text-6xl font-display font-black text-black uppercase leading-none tracking-tighter mb-2">
                        TREINOS GERAIS
                    </h1>
                    <p className="text-xl md:text-2xl font-display font-bold text-gray-500 uppercase tracking-widest">
                        Confira a grade semanal
                    </p>
                </div>

                {/* Schedule Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {DAYS.map((day) => (
                        <div key={day.id} className="bg-white border-4 border-black shadow-[8px_8px_0px_#000] flex flex-col">
                            {/* Day Header */}
                            <div className="bg-college-green border-b-4 border-black p-4 text-center">
                                <h3 className="text-2xl font-display font-black text-white uppercase tracking-wider">
                                    {day.name}
                                </h3>
                            </div>

                            {/* Content Placeholder */}
                            <div className="p-8 flex flex-col items-center justify-center gap-4 min-h-[200px] bg-gray-50">
                                {/* Ball Icon Placeholder */}
                                <div className="w-20 h-20 rounded-full border-4 border-dashed border-gray-300 flex items-center justify-center">
                                    <Trophy size={32} className="text-gray-300" />
                                </div>

                                {/* Sport Name Placeholder */}
                                <div className="w-3/4 h-8 bg-gray-200/50 rounded flex items-center justify-center">
                                    <span className="text-gray-400 font-display font-bold text-sm uppercase">EM BREVE</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
};

export default TreinosPage;
