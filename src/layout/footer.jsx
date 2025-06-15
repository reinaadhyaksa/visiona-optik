import { socialLinks } from "../data/data";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div data-aos="fade-up">
                        <h3 className="text-xl font-semibold mb-4">Visiona Optik</h3>
                        <p className="text-gray-400">Menyediakan solusi penglihatan terbaik sejak 2010 dengan produk berkualitas dan layanan profesional.</p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="200">
                        <h3 className="text-xl font-semibold mb-4">Tautan Cepat</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-400 hover:text-white">Beranda</a></li>
                            <li><a href="about" className="text-gray-400 hover:text-white">Tentang Kami</a></li>
                            <li><a href="products" className="text-gray-400 hover:text-white">Produk</a></li>
                            <li><a href="services" className="text-gray-400 hover:text-white">Layanan</a></li>
                            <li><a href="contact" className="text-gray-400 hover:text-white">Kontak</a></li>
                        </ul>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="400">
                        <h3 className="text-xl font-semibold mb-4">Hubungi Kami</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                (021) 1234-5678
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                info@visionaoptik.com
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                Jl. Optik No. 123, Jakarta
                            </li>
                        </ul>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="600">
                        <h3 className="text-xl font-semibold mb-4">Media Sosial</h3>
                        <div className="flex space-x-4">
                            {socialLinks.map(link => (
                                <a
                                    key={link.id}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition duration-300"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400" data-aos="fade-up">
                    <p>&copy; 2023 Visiona Optik. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;