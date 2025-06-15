import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../layout/header';
import { productsdata as products } from '../data/data';
import Footer from '../layout/footer';
import { CTA, HeroBanner, ProductCard } from '../layout/section';

const ProductsPage = () => {
    const [activeCategory, setActiveCategory] = useState('Semua');

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }, []);

    return (
        <div className="bg-gray-50">
            <Header isProducts={true} />
            <HeroBanner title={"Koleksi Kacamata Kami"} text={"Temukan frame stylish dan lensa berkualitas tinggi untuk kebutuhan penglihatan Anda"} />

            <section className="py-12 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-8" data-aos="fade-up">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Kategori Produk</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {['Semua', 'Pria', 'Wanita', 'Anak-anak', 'Lensa Kontak', 'Aksesoris'].map((category) => (
                                <button
                                    key={category}
                                    className={`px-4 py-2 rounded-full font-medium transition duration-300 ${activeCategory === category
                                            ? 'bg-primary text-white'
                                            : 'bg-gray-200 hover:bg-primary hover:text-white'
                                        }`}
                                    onClick={() => setActiveCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {activeCategory === 'Semua' ? (
                <>
                    <section className="py-12 bg-gray-50">
                        <div className="container mx-auto px-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-8" data-aos="fade-up">Kacamata Pria</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                {products['Pria'].map((product, index) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        delay={(index % 4 + 1) * 100}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="py-12 bg-white">
                        <div className="container mx-auto px-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-8" data-aos="fade-up">Kacamata Wanita</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                {products['Wanita'].map((product, index) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        delay={(index % 4 + 1) * 100}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="py-12 bg-gray-50">
                        <div className="container mx-auto px-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-8" data-aos="fade-up">Kacamata Anak</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                {products['Anak-anak'].map((product, index) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        delay={(index % 4 + 1) * 100}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="py-12 bg-white">
                        <div className="container mx-auto px-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-8" data-aos="fade-up">Lensa Kontak</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                {products['Lensa Kontak'].map((product, index) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        delay={(index % 4 + 1) * 100}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="py-12 bg-gray-50">
                        <div className="container mx-auto px-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-8" data-aos="fade-up">Aksesoris</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                {products['Aksesoris'].map((product, index) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        delay={(index % 4 + 1) * 100}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            ) : (
                <section className="py-12 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-8" data-aos="fade-up">
                            {activeCategory === 'Pria' && 'Kacamata Pria'}
                            {activeCategory === 'Wanita' && 'Kacamata Wanita'}
                            {activeCategory === 'Anak-anak' && 'Kacamata Anak'}
                            {activeCategory === 'Lensa Kontak' && 'Lensa Kontak'}
                            {activeCategory === 'Aksesoris' && 'Aksesoris'}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {products[activeCategory].map((product, index) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    delay={(index % 4 + 1) * 100}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <CTA title={"Butuh Bantuan Memilih Produk?"} text={"Tim ahli kami siap membantu Anda menemukan kacamata atau lensa kontak yang sempurna."} button={"Konsultasi Gratis"} link={"contact"} />
            <Footer />
        </div>
    );
};

export default ProductsPage;