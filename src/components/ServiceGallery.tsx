import React, { useState, useEffect } from 'react';

interface ServiceGalleryProps {
    prompt: string;
    index: number;
    title?: string;
}

const ServiceGallery: React.FC<ServiceGalleryProps> = ({ prompt, index, title }) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        const fetchImage = async () => {
            // If prompt is a path or URL, use it directly
            if (prompt.startsWith('http') || prompt.startsWith('/')) {
                setImageUrl(prompt);
            } else {
                // Fallback to placeholder for generic prompts
                const seed = title ? title.replace(/\s/g, '').toLowerCase() : prompt.replace(/\s/g, '');
                const placeholder = `https://picsum.photos/seed/${seed}${index}/800/800`;
                setImageUrl(placeholder);
            }
            setLoading(false);
        };

        fetchImage();
        return () => { isMounted = false; };
    }, [prompt, index]);

    return (
        <div className="relative group w-full aspect-square overflow-hidden rounded-2xl bg-stone-100 shadow-xl transition-all duration-700 hover:scale-[1.02]">
            {loading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-stone-200 border-t-stone-400 rounded-full animate-spin"></div>
                </div>
            ) : (
                <img
                    src={imageUrl!}
                    alt="Service Gallery Grid"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.src.includes('picsum.photos')) {
                            const seed = title ? title.replace(/\s/g, '').toLowerCase() : prompt.slice(-10);
                            target.src = `https://picsum.photos/seed/${seed}${index}/800/800`;
                        }
                    }}
                />
            )}
            <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
    );
};

export default ServiceGallery;
