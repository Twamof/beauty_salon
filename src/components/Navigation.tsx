import React from 'react';

const Navigation: React.FC = () => {
    return (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 px-8 py-3 bg-white/30 backdrop-blur-md rounded-full border border-white/20 shadow-lg transition-all hover:bg-white/40">
            <ul className="flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-medium text-stone-800">
                <li className="cursor-pointer hover:text-stone-500 transition-colors">Experience</li>
                <li className="cursor-pointer hover:text-stone-500 transition-colors">Services</li>
                <li className="serif text-xl normal-case tracking-normal px-4">Pure Harmony</li>
                <li className="cursor-pointer hover:text-stone-500 transition-colors">Philosophy</li>
                <li className="cursor-pointer hover:text-stone-500 transition-colors">Book</li>
            </ul>
        </nav>
    );
};

export default Navigation;
