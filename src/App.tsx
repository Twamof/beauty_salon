import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Navigation from './components/Navigation';
import ServiceGallery from './components/ServiceGallery';
import { SERVICES, Service } from './constants';

import heroVideo from './beauty-salon.mp4';

const App: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    // Floating background elements for 3D depth
    const bgY1 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
    const bgY2 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
    const bgRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

    return (
        <div ref={containerRef} className="relative bg-[#fdfbf7] min-h-screen">
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-[#e9d5ca] z-[60] origin-left"
                style={{ scaleX }}
            />

            <Navigation />

            {/* Decorative Parallax Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <motion.div
                    style={{ y: bgY1, rotate: bgRotate }}
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[#f8ecea] rounded-full blur-[100px] opacity-60"
                />
                <motion.div
                    style={{ y: bgY2, rotate: -bgRotate }}
                    className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-[#e9d5ca] rounded-full blur-[120px] opacity-40"
                />
            </div>

            <main className="relative z-10">
                {/* HERO SECTION */}
                <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
                    {/* Background Video */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <video
                            className="w-full h-full object-cover opacity-80"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src={heroVideo} type="video/mp4" />
                        </video>
                        {/* Overlay to ensure text readability */}
                        <div className="absolute inset-0 bg-[#fdfbf7]/60" />
                    </div>


                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="text-center relative z-10"
                    >
                        <span className="text-[12px] uppercase tracking-[0.4em] text-stone-400 mb-6 block">Elegance Redefined</span>
                        <h1 className="text-7xl md:text-9xl text-stone-800 leading-tight mb-8 serif">
                            Pure <br />
                            <span className="italic font-light text-stone-500">Harmony</span>
                        </h1>
                        <p className="max-w-md mx-auto text-stone-500 text-lg font-light leading-relaxed mb-10">
                            Immerse yourself in a sanctuary where modern artistry meets timeless luxury.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(233, 213, 202, 0.4)' }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-4 bg-stone-800 text-white rounded-full text-sm tracking-[0.2em] uppercase transition-all"
                        >
                            Book Experience
                        </motion.button>
                    </motion.div>

                    <motion.div
                        style={{ y: useTransform(scrollYProgress, [0, 0.2], [0, 200]) }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-stone-300"
                    >
                        <div className="w-[1px] h-20 bg-gradient-to-b from-stone-200 to-transparent mx-auto" />
                        <span className="text-[10px] uppercase tracking-widest mt-4 block text-center">Scroll</span>
                    </motion.div>
                </section>

                {/* SERVICES SECTIONS */}
                {SERVICES.map((service: Service, idx: number) => (
                    <ServiceSection key={service.id} service={service} index={idx} />
                ))}

                {/* FOOTER */}
                <footer className="py-32 px-4 bg-white border-t border-stone-100">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
                        <div className="col-span-1">
                            <h2 className="serif text-4xl text-stone-800 mb-6">Pure Harmony</h2>
                            <p className="text-stone-400 text-sm leading-relaxed">
                                A destination for the discerning individual seeking perfection in every detail.
                            </p>
                        </div>
                        <div className="col-span-1">
                            <h4 className="text-[11px] uppercase tracking-widest text-stone-800 font-bold mb-6">Stay Connected</h4>
                            <ul className="space-y-4 text-stone-500 text-sm font-light">
                                <li className="hover:text-stone-800 cursor-pointer transition-colors">Instagram</li>
                                <li className="hover:text-stone-800 cursor-pointer transition-colors">Pinterest</li>
                                <li className="hover:text-stone-800 cursor-pointer transition-colors">Contact</li>
                            </ul>
                        </div>
                        <div className="col-span-1">
                            <h4 className="text-[11px] uppercase tracking-widest text-stone-800 font-bold mb-6">Location</h4>
                            <p className="text-stone-500 text-sm font-light leading-loose">
                                124 Luxury Avenue, Suite 500<br />
                                Beauty District, CA 90210
                            </p>
                        </div>
                    </div>
                    <div className="mt-20 pt-10 border-t border-stone-50 text-center">
                        <p className="text-[10px] text-stone-300 uppercase tracking-widest">&copy; 2024 Pure Harmony Beauty Center. All rights reserved.</p>
                    </div>
                </footer>
            </main>
        </div>
    );
};

const ServiceSection: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

    const isEven = index % 2 === 0;

    return (
        <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-4 md:px-20 overflow-hidden">
            <motion.div
                style={{ opacity, scale, y }}
                className={`max-w-7xl w-full grid md:grid-cols-2 gap-12 md:gap-24 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}
            >
                <div className={`space-y-8 ${isEven ? 'order-1' : 'md:order-2'}`}>
                    <motion.div
                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <span className="text-[11px] uppercase tracking-[0.3em] text-stone-400">0{index + 1} &mdash; Collection</span>
                        <h2 className="text-5xl md:text-7xl text-stone-800 mt-4 serif">{service.title}</h2>
                    </motion.div>

                    <p className="text-stone-500 font-light text-lg leading-relaxed max-w-md">
                        {service.description}
                    </p>

                    <ul className="grid grid-cols-1 gap-4">
                        {service.items.map((item: string, i: number) => (
                            <motion.li
                                key={item}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + (i * 0.1) }}
                                className="flex items-center gap-4 text-stone-700 font-medium group cursor-default"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#e9d5ca] transition-transform group-hover:scale-150" />
                                {item}
                            </motion.li>
                        ))}
                    </ul>

                    <motion.button
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-4 text-[11px] uppercase tracking-widest font-bold text-stone-800"
                    >
                        Explore Services
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </motion.button>
                </div>

                <div className={`relative h-[600px] w-full ${isEven ? 'order-2' : 'md:order-1'}`}>
                    <div className="relative w-full h-full">
                        {/* Top Left Image */}
                        <motion.div
                            style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
                            className="absolute top-0 left-0 w-3/5 z-20"
                        >
                            <ServiceGallery prompt={service.imagePrompts[0]} index={index} title={service.title} />
                        </motion.div>

                        {/* Top Right Image */}
                        <motion.div
                            style={{ y: useTransform(scrollYProgress, [0, 1], [-20, 20]), x: 20 }}
                            className="absolute top-10 right-0 w-2/5 z-10"
                        >
                            <ServiceGallery prompt={service.imagePrompts[1]} index={index + 1} title={service.title} />
                        </motion.div>

                        {/* Bottom Left Image */}
                        <motion.div
                            style={{ y: useTransform(scrollYProgress, [0, 1], [40, -40]), x: -20 }}
                            className="absolute bottom-10 left-10 w-2/5 z-30"
                        >
                            <ServiceGallery prompt={service.imagePrompts[2]} index={index + 2} title={service.title} />
                        </motion.div>

                        {/* Main Bottom Right Image */}
                        <motion.div
                            style={{ y: useTransform(scrollYProgress, [0, 1], [-80, 80]) }}
                            className="absolute bottom-0 right-10 w-3/5 z-20"
                        >
                            <ServiceGallery prompt={service.imagePrompts[3]} index={index + 3} title={service.title} />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default App;
