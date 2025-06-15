import { useState } from 'react';

const Header = ({ isHome, isAbout, isProducts, isServices, isContact }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-3">
                <div className="flex justify-between items-center">
                    <a href="/" className="text-2xl font-bold text-primary">Visiona Optik</a>
                    <div className="hidden md:flex space-x-8">
                        <a 
                            href="/" 
                            className={isHome ? `text-primary font-medium` : `text-gray-600 font-medium` }
                        >
                            Beranda
                        </a>
                        <a 
                            href="about" 
                            className={isAbout ? `text-primary font-medium` : `text-gray-600 hover:text-primary`}
                        >
                            Tentang Kami
                        </a>
                        <a 
                            href="products" 
                            className={isProducts ? `text-primary font-medium` : `text-gray-600 hover:text-primary`}
                        >
                            Produk
                        </a>
                        <a 
                            href="services" 
                            className={isServices ? `text-primary font-medium` : `text-gray-600 hover:text-primary`}
                        >
                            Layanan
                        </a>
                        <a 
                            href="contact" 
                            className={isContact ? `text-primary font-medium` : `text-gray-600 hover:text-primary`}
                        >
                            Kontak
                        </a>
                    </div>
                    <button
                        className="md:hidden focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} mt-4`}>
                    <a href="/" className="block py-2 text-primary">Beranda</a>
                    <a href="about" className="block py-2 text-gray-600">Tentang Kami</a>
                    <a href="products" className="block py-2 text-gray-600">Produk</a>
                    <a href="services" className="block py-2 text-gray-600">Layanan</a>
                    <a href="contact" className="block py-2 text-gray-600">Kontak</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;