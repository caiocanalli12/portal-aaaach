import React from 'react';

// Import images
import paiaImg from '../../assets/images/gestao/paia.jpeg';
import mengardoImg from '../../assets/images/gestao/mengardo.jpeg';
import beliImg from '../../assets/images/gestao/beli.jpeg';
import gasparImg from '../../assets/images/gestao/gaspar.jpeg';
import isaImg from '../../assets/images/gestao/isa.jpeg';
import matheusImg from '../../assets/images/gestao/matheus.jpeg';
import jotadImg from '../../assets/images/gestao/jotad.jpeg';
import malaspinaImg from '../../assets/images/gestao/malaspina.jpeg';
import iemonImg from '../../assets/images/gestao/iemon.jpeg';
import dabrisaImg from '../../assets/images/gestao/dabrisa.jpeg';
import boquinhaImg from '../../assets/images/gestao/boquinha.jpeg';
import kantImg from '../../assets/images/gestao/kant.jpeg';
import rogerioImg from '../../assets/images/gestao/rogerio.jpeg';
import hb20Img from '../../assets/images/gestao/hb20.jpeg';
import mussuliniImg from '../../assets/images/gestao/mussulini.jpeg';
import caioImg from '../../assets/images/gestao/caio.jpeg';

const MANAGEMENT_DATA = [
    {
        sector: 'PRESIDÊNCIA',
        members: [
            { name: 'PAIA', role: 'PRESIDENTE', image: paiaImg },
            { name: 'CAIO', role: 'VICE PRESIDENTE', image: caioImg },
        ]
    },
    {
        sector: 'EVENTOS',
        members: [
            { name: 'BELI', role: 'DIRETOR', image: beliImg },
            { name: 'MENGARDO', role: null, image: mengardoImg },
            { name: 'GASPAR', role: null, image: gasparImg },
            { name: 'ISA', role: null, image: isaImg },
            { name: 'MATHEUS', role: null, image: matheusImg },
        ]
    },
    {
        sector: 'MÍDIAS SOCIAIS',
        members: [
            { name: 'DA BRISA', role: 'DIRETORA', image: dabrisaImg },
            { name: 'JOTAD', role: null, image: jotadImg },
            { name: 'MALASPINA', role: null, image: malaspinaImg },
            { name: 'IEMON', role: null, image: iemonImg },
            { name: 'BOQUINHA', role: null, image: boquinhaImg },
            { name: 'KANT', role: null, image: kantImg },
            { name: 'ROGÉRIO', role: null, image: rogerioImg },
        ]
    },
    {
        sector: 'ESPORTES',
        members: [
            { name: 'HB20', role: 'DIRETORA', image: hb20Img },
            { name: 'MUSSULINI', role: null, image: mussuliniImg },
        ]
    },
    {
        sector: 'FINANCEIRO',
        members: [
            { name: 'CAIO', role: 'DIRETOR', image: caioImg },
        ]
    },
];

const ManagementSection = () => {
    return (
        <section id="management" className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-12 mb-32">
            <div className="flex items-center gap-4 mb-12">
                <div className="h-8 w-4 bg-college-green border-2 border-black -skew-x-12" />
                <h2 className="text-3xl font-display font-black text-black uppercase tracking-tight">
                    Gestão 2k26
                </h2>
                <div className="h-1 flex-grow bg-black/10 mt-2" />
            </div>

            <div className="space-y-16">
                {MANAGEMENT_DATA.map((sector, index) => (
                    <div key={index}>
                        {/* Sector Title */}
                        <div className="inline-block bg-black text-white px-4 py-1 mb-6 transform -rotate-1 shadow-[4px_4px_0px_#ccc]">
                            <h3 className="font-display font-bold text-xl uppercase tracking-wider">
                                {sector.sector}
                            </h3>
                        </div>

                        {/* Grid for Members */}
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-6">
                            {sector.members.map((member, idx) => (
                                <div key={idx} className="group relative flex flex-col items-center">
                                    {/* Photo Frame */}
                                    <div className="w-full aspect-[3/4] bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] relative mb-4 transition-transform duration-300 group-hover:scale-105">
                                        {member.image ? (
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gray-100">
                                                <span className="text-gray-300 font-display font-black text-5xl opacity-20 rotate-[-12deg]">?</span>
                                            </div>
                                        )}

                                        {/* Red Ticket for Role */}
                                        {member.role && (
                                            <div className="absolute -top-3 -right-3 bg-college-red border-2 border-black px-2 py-1 transform rotate-3 shadow-[2px_2px_0px_rgba(0,0,0,0.3)] z-10">
                                                <span className="text-white font-display font-bold text-[10px] md:text-xs tracking-widest uppercase whitespace-nowrap">
                                                    {member.role}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Name */}
                                    <h4 className="font-display font-black text-xl md:text-2xl text-black uppercase text-center leading-none tracking-tight">
                                        {member.name}
                                    </h4>
                                </div>
                            ))}
                        </div>

                        {/* Divider between sectors */}
                        {index < MANAGEMENT_DATA.length - 1 && (
                            <div className="w-full h-px bg-gray-200 mt-16" />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ManagementSection;
