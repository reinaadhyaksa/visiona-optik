import Header from "../layout/header";
import Footer from "../layout/footer";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ContactForm, ContactInfo, CTA, FAQSection, HeroBanner, MapSection } from "../layout/section";

export default function ContactPage() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }, []);
    return (
        <div className="bg-gray-50">
            <Header isContact={true} />
            <HeroBanner title={"Hubungi Kami"} text={"Tim kami siap membantu semua kebutuhan penglihatan Anda"} />
            <ContactInfo />
            <ContactForm />
            <MapSection />
            <FAQSection />
            <CTA title={"Masih Ada Pertanyaan?"} text={"Tim customer service kami siap membantu Anda 7 hari seminggu."} button={"Hubungi Kami Sekarang"} link={"contact"} />
            <Footer />
        </div>
    )
}