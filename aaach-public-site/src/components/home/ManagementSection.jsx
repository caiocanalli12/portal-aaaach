import React from 'react';

const SECTORS = [
    { name: 'Presidência', members: [1, 2] },
    { name: 'Eventos', members: [1, 2, 3, 4] },
    { name: 'Financeiro', members: [1, 2] },
    { name: 'Mídias Sociais', members: [1, 2, 3] },
    { name: 'Esportes', members: [1, 2, 3, 4] },
    { name: 'Confecção', members: [1, 2] },
    { name: 'Patrocínio', members: [1, 2] },
];

const ManagementSection = () => {
    return (
        <section id="management" className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-12 mb-32">
            <div className="flex items-center gap-4 mb-12">
                <div className="h-8 w-4 bg-college-green border-2 border-black -skew-x-12" />
                <h2 className="text-3xl font-display font-black text-black uppercase tracking-tight">
                    Gestão 2026
                </h2>
                <div className="h-1 flex-grow bg-black/10 mt-2" />
            </div>

            <div className="space-y-16">
                {SECTORS.map((sector, index) => (
                    <div key={index}>
                        {/* Sector Title */}
                        <div className="inline-block bg-black text-white px-4 py-1 mb-6 transform -rotate-1 shadow-[4px_4px_0px_#ccc]">
                            <h3 className="font-display font-bold text-xl uppercase tracking-wider">
                                {sector.name}
                            </h3>
                        </div>

                        {/* Grid for Members */}
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {sector.members.map((_, idx) => (
                                <div key={idx} className="group relative">
                                    {/* Photo Placeholder */}
                                    <div className="aspect-[3/4] bg-gray-100 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.2)] flex items-center justify-center overflow-hidden transition-transform group-hover:-translate-y-1 relative">
                                        {/* Placeholder Icon/Text */}
                                        <div className="text-gray-300 font-display font-black text-5xl opacity-20 rotate-[-12deg]">
                                            ?
                                        </div>

                                        {/* Overlay for "Add Photo" hint usually, but here purely decorative */}
                                        <div className="absolute inset-0 bg-college-green/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>

                                    {/* Name Placeholder */}
                                    <div className="mt-3 text-center">
                                        <div className="h-4 w-24 bg-gray-200 mx-auto mb-1 rounded-sm" />
                                        <div className="h-3 w-16 bg-gray-100 mx-auto rounded-sm" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Divider between sectors if needed, or just space */}
                        <div className="w-full h-px bg-gray-200 mt-12" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ManagementSection;
