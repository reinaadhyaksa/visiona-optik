import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CTA, HeroBanner, HowItWorksSection, PricingSection, ServiceSection } from '../layout/section';
import Header from '../layout/header';
import Footer from '../layout/footer';

const ServicesPage = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }, []);

    return (
        <div className="bg-gray-50">
            <Header isServices={true} />
            <HeroBanner 
                title={"Layanan Profesional Kami"} 
                text={"Solusi lengkap untuk semua kebutuhan perawatan mata dan kacamata Anda"} 
            />
            <ServiceSection />
            <HowItWorksSection />
            <PricingSection />
            <CTA 
                title={"Siap Memperbaiki Penglihatan Anda"} 
                text={"Jadwalkan pemeriksaan mata gratis hari ini dan temukan solusi terbaik untuk kebutuhan penglihatan Anda."} 
                button={"Hubungi Kami Sekarang"} 
                link={"/contact"}
            />
            <Footer />
        </div>
    );
};

export default ServicesPage;