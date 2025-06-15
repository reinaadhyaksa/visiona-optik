import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../layout/header';
import Footer from '../layout/footer';
import { CTA, HeroBanner, StorySection, TeamSection, VMSection, ValuesSection } from '../layout/section';

const AboutPage = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }, []);

    return (
        <div className="bg-gray-50">
            <Header isAbout={true} />
            <HeroBanner title={"Tentang Visiona Optik"} text={"Komitmen kami terhadap kesehatan mata dan kepuasan pelanggan"} />
            <StorySection />
            <VMSection />
            <TeamSection />
            <ValuesSection />
            <CTA title={"Siap Memperbaiki Penglihatan Anda?"} text={"Jadwalkan pemeriksaan mata gratis hari ini dan temukan kacamata sempurna untuk Anda."} button={"Hubungi Kami Sekarang"} link={"contact"} />
            <Footer />
        </div>
    );
};

export default AboutPage;