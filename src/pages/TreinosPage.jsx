import React from 'react';
import { ChevronLeft, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const SCHEDULE = [
    {
        id: 'segunda',
        name: 'SEGUNDA',
        sports: [
            { name: 'Vôlei', details: ['Fem: 18h às 20h', 'Masc: 20h às 22h'] },
            { name: 'Xadrez', details: ['18h às 19h30'] }
        ]
    },
    {
        id: 'terca',
        name: 'TERÇA',
        sports: [
            { name: 'Basquete', details: ['Misto: a partir das 18h'] }
        ]
    },
    {
        id: 'quarta',
        name: 'QUARTA',
        sports: [
            { name: 'Futsal', details: ['Fem: 18h às 20h', 'Masc: 20h às 22h'] }
        ]
    },
    {
        id: 'quinta',
        name: 'QUINTA',
        sports: [
            { name: 'Handebol', details: ['Misto: a partir das 18h'] }
        ]
    },
    {
        id: 'outros',
        name: 'A DEFINIR',
        sports: [
            { name: 'Tênis de Mesa', details: ['Decidir dia e horário'] },
            { name: 'Atletismo', details: ['(CIC)'] },
            { name: 'Natação', details: ['(CIC)'] }
        ]
    }
];

const TreinosPage = () => {
    const navigate = useNavigate();

    return (
        <MainLayout>
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-12 min-h-[60vh] flex flex-col">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {SCHEDULE.map((day) => (
                        <div key={day.id} className="bg-white border-4 border-black shadow-[8px_8px_0px_#000] flex flex-col">
                            {/* Day Header */}
                            <div className="bg-college-green border-b-4 border-black p-4 text-center">
                                <h3 className="text-2xl font-display font-black text-white uppercase tracking-wider">
                                    {day.name}
                                </h3>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col gap-6 flex-grow bg-gray-50">
                                {day.sports.map((sport, idx) => (
                                    <div key={idx} className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2 border-b-2 border-gray-200 pb-1">
                                            <Trophy size={18} className="text-college-gold shrink-0" />
                                            <span className="font-display font-black text-lg uppercase text-black leading-tight">
                                                {sport.name}
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-1 pl-6">
                                            {sport.details.map((detail, dIdx) => (
                                                <span key={dIdx} className="text-gray-600 font-medium text-sm pr-2">
                                                    {detail}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
};

export default TreinosPage;
