import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ContentCard = ({ title, subtitle, category, image, date, link }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (link) {
            if (link.endsWith('.pdf')) {
                window.open(link, '_blank');
            } else {
                navigate(link);
                window.scrollTo(0, 0);
            }
        }
    };

    return (
        <motion.div
            onClick={handleClick}
            whileHover={{ y: -8 }}
            className={`relative w-[280px] md:w-[320px] shrink-0 aspect-[4/3] bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] group overflow-hidden ${link ? 'cursor-pointer' : ''}`}
        >
            {/* Image Half */}
            <div className="h-[65%] w-full overflow-hidden border-b-4 border-black relative bg-gray-100 flex items-center justify-center">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-4 left-4 bg-college-gold border-2 border-black px-3 py-1 shadow-[4px_4px_0px_#000]">
                    <span className="text-black text-xs font-display font-bold tracking-wider uppercase">
                        {category}
                    </span>
                </div>

                {/* Date Ticket (Top Right) */}
                {/* Date Ticket (Top Right) */}
                {date && (
                    <div className="absolute top-4 -right-10 bg-college-red w-32 py-1 flex items-center justify-center transform rotate-45 border-y-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,0.3)] z-10 group-hover:scale-110 transition-transform">
                        {/* Dashed lines for ticket effect */}
                        <div className="absolute top-0 w-full border-t border-dashed border-white/30" />
                        <div className="absolute bottom-0 w-full border-b border-dashed border-white/30" />

                        <span className="text-white font-display font-black text-sm tracking-widest relative z-10 scale-110">
                            {date}
                        </span>
                    </div>
                )}
            </div>

            {/* Content Half */}
            <div className="h-[35%] p-4 bg-white flex flex-col justify-center relative">
                <h3 className="text-xl font-display font-black text-black uppercase leading-none mb-1 group-hover:text-college-green transition-colors">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm font-medium border-t-2 border-gray-200 pt-2 mt-1">
                    {subtitle}
                </p>

                {/* Decor Corner */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-t-[20px] border-t-transparent border-r-[20px] border-r-college-green/50 group-hover:border-r-college-green transition-colors" />
            </div>
        </motion.div>
    );
};

const CarouselRow = ({ title, items, id }) => {
    return (
        <div className="mb-16" id={id}>
            <div className="flex items-center gap-4 mb-8 px-4 md:px-8">
                <div className="h-8 w-4 bg-college-green border-2 border-black -skew-x-12" />
                <h2 className="text-3xl font-display font-black text-black uppercase tracking-tight">
                    {title}
                </h2>
                <div className="h-1 flex-grow bg-black/10 mt-2" />
            </div>

            <div className="flex overflow-x-auto gap-8 px-4 md:px-8 pb-8 scrollbar-hide snap-x snap-mandatory pt-2">
                {items.map((item, index) => (
                    <div key={index} className="snap-start">
                        <ContentCard {...item} />
                    </div>
                ))}
                <div className="min-w-[1px]" />
            </div>
        </div>
    );
};


import basqueteImg from '../../assets/images/ARTES/basquete_int.jpeg';
import voleiImg from '../../assets/images/ARTES/volei_int.jpeg';
import semaforoImg from '../../assets/images/ARTES/semaforo.jpeg';
import jogosImg from '../../assets/images/ARTES/jajogos.jpg';
import treinosImg from '../../assets/images/ARTES/treinos.jpeg';
import amistososImg from '../../assets/images/ARTES/amistosos.jpeg';
import ichoppadaImg from '../../assets/images/ARTES/ichoppada.jpeg';
import manualImg from '../../assets/images/ARTES/manual.jpeg';
import amistosoFutImg from '../../assets/images/ARTES/amistosofut.png';
import tiasjImg from '../../assets/images/ARTES/tiasj.png';
import manualPdf from '../../assets/MANUAL DO BIXO BOM 2026.pdf';

const ContentSection = () => {
    const navigate = useNavigate();

    const startHere = [
        {
            title: "O MANUAL DO BIXO BOM",
            subtitle: "Guia de sobrevivência do bixo!",
            category: "IMPORTANTE",
            image: manualImg,
            link: manualPdf
        }
    ];

    const sports = [
        {
            title: "TREINOS GERAIS",
            subtitle: "Confira a grade semanal",
            category: "ESPORTE",
            image: treinosImg,
            link: "/sports/treinos"
        },
        {
            title: "AMISTOSOS",
            subtitle: "Venha jogar e torcer!",
            category: "ESPORTE",
            image: amistososImg,
            link: "/sports/amistosos"
        }
    ];

    return (
        <section className="w-full max-w-[1400px] mx-auto py-8">
            <div className="mb-16" id="events">
                <div className="flex items-center gap-4 mb-8 px-4 md:px-8">
                    <div className="h-8 w-4 bg-college-green border-2 border-black -skew-x-12" />
                    <h2 className="text-3xl font-display font-black text-black uppercase tracking-tight">
                        Próximos Eventos
                    </h2>
                    <div className="h-1 flex-grow bg-black/10 mt-2" />
                </div>

                <div className="px-4 md:px-8">
                    <div 
                        onClick={() => { navigate('/sports/jogos'); window.scrollTo(0,0); }}
                        className="group relative w-full aspect-auto md:aspect-[3/1] bg-white border-4 border-black shadow-[12px_12px_0px_#000] overflow-hidden cursor-pointer flex flex-col md:flex-row transition-all hover:shadow-[16px_16px_0px_#004d25] hover:-translate-y-1"
                    >
                        <div className="w-full md:w-[70%] h-64 md:h-full overflow-hidden relative border-b-4 md:border-b-0 md:border-r-4 border-black">
                             <img src={tiasjImg} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                             <div className="absolute top-4 left-4 bg-college-gold border-2 border-black px-4 py-1 shadow-[4px_4px_0px_#000]">
                                <span className="text-black text-xs font-display font-bold tracking-wider uppercase">ESPORTE</span>
                             </div>
                        </div>
                        <div className="w-full md:w-[30%] bg-white p-6 md:p-8 flex flex-col justify-center relative">
                             <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-black uppercase leading-none mb-3 group-hover:text-college-green transition-colors">
                                 JOGOS
                             </h3>
                             <p className="text-gray-600 text-lg lg:text-xl font-medium border-t-2 border-gray-200 pt-4">
                                 Torneio Interatléticas de São João <span className="bg-college-gold text-black px-2 inline-block ml-1 border-2 border-black rotate-2 shadow-[2px_2px_0px_#000]">(TIASJ)</span>
                             </p>
                             <div className="absolute bottom-0 right-0 w-0 h-0 border-t-[40px] border-t-transparent border-r-[40px] border-r-college-green/50 group-hover:border-r-college-green transition-colors" />
                        </div>
                    </div>
                </div>
            </div>

            <CarouselRow title="Nossos Esportes" items={sports} id="sports" />
            <CarouselRow title="Comece por aqui" items={startHere} id="start-here" />
        </section>
    );
};

export default ContentSection;
