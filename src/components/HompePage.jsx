import Header from "../layout/header";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import { About, CTA, FeaturedProducts, Hero, Testimonials } from "../layout/section";
import Footer from "../layout/footer";

export default function Homepage() {
    useEffect(() => {
        Aos.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }, []);
    
    return (
        <div className="bg-gray-50">
            <Header isHome={true} />
            <main>
                <Hero />
                <About />
                <FeaturedProducts />
                <Testimonials />
                <CTA title={"Siap Memperbaiki Penglihatan Anda?"} text={"Jadwalkan pemeriksaan mata gratis hari ini dan temukan kacamata sempurna untuk Anda."} button={"Hubungi Kami Sekarang"} link={"contact"} />
                </main>
            <Footer />
        </div>
    )
}