import React, { useState } from 'react';

interface ServiceGalleryProps {
    prompt?: string;
    index: number;
    title?: string;
}

const ServiceGallery: React.FC<ServiceGalleryProps> = ({ prompt, title }) => {
    // If prompt is null/empty, we consider it missing immediately
    const [hasError, setHasError] = useState(false);

    // If we have no image source, or if we encountered an error loading it
    const showPlaceholder = !prompt || hasError;

    return (
        <div className="relative group w-full aspect-square overflow-hidden rounded-2xl bg-stone-100 shadow-xl transition-all duration-700 hover:scale-[1.02]">
            {!showPlaceholder ? (
                <img
                    src={prompt}
                    alt={title || "Beauty Service"}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    onError={() => setHasError(true)}
                />
            ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-200 text-stone-400">
                    <span className="text-sm font-light tracking-widest uppercase">Image Coming Soon</span>
                </div>
            )}

            {/* Overlay effect */}
            <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
    );
};

export default ServiceGallery;
