import { contactinfodata, mapinfodata, misiondata, products, services, teammemberdata, testimonials, valuessectiondata, faqs, servicesData, howItWorksData, pricingData } from "../data/data";
import { BranchCard, ContactInfoCard, Mision, TeamMemberCard, ValuesSectionCard, ServiceCard, StepCard, PricingCard } from "./template";
import { useState } from 'react';

export const Hero = () => {
    return (
        <section
            className="hero flex items-center justify-center text-center text-white"
            style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1585486451366-5b5b9520797e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3B0aWslMjBrYWNhbWF0YSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '80vh'
            }}
        >
            <div className="px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-6" data-aos="fade-down">Kacamata Berkualitas untuk Penglihatan Lebih Baik</h1>
                <p className="text-xl md:text-2xl mb-8" data-aos="fade-up" data-aos-delay="200">Temukan koleksi terbaru kami dengan desain stylish dan lensa premium</p>
                <a
                    href="products"
                    className="bg-primary hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    Cek Koleksi Kacamata
                </a>
                <div className="mt-16 animate-bounce" data-aos="fade-up" data-aos-delay="600">
                    <svg className="w-8 h-8 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export const About = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
                        <img 
                            src="https://plus.unsplash.com/premium_photo-1733938563565-3720eba96daf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlzaW9uYSUyMG9wdGlrfGVufDB8fDB8fHww" 
                            alt="Visiona Optik Store" 
                            className="rounded-lg shadow-xl" 
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-12" data-aos="fade-left">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Tentang Visiona Optik</h2>
                        <p className="text-gray-600 mb-6">Sejak 2010, Visiona Optik telah berkomitmen untuk menyediakan solusi penglihatan terbaik dengan produk berkualitas tinggi dan layanan profesional.</p>
                        <p className="text-gray-600 mb-6">Kami percaya bahwa setiap orang berhak mendapatkan penglihatan yang jelas dan nyaman, didukung dengan frame yang sesuai dengan kepribadian mereka.</p>
                        <a
                            href="about"
                            className="inline-block bg-primary hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-full transition duration-300"
                        >
                            Pelajari Lebih Lanjut
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const FeaturedProducts = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Produk Unggulan Kami</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Temukan koleksi kacamata terbaik kami yang dirancang untuk kenyamanan dan gaya Anda.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                            data-aos="fade-up"
                            data-aos-delay={200 + (index * 200)}
                        >
                            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                                <p className="text-gray-600 mb-4">{product.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-primary font-bold">{product.price}</span>
                                    <a href="products" className="text-accent hover:text-blue-800 font-medium">Lihat Detail</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12" data-aos="fade-up">
                    <a
                        href="products"
                        className="inline-block bg-primary hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-full transition duration-300"
                    >
                        Lihat Semua Produk
                    </a>
                </div>
            </div>
        </section>
    );
};

export const Services = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Layanan Profesional Kami</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Kami menawarkan berbagai layanan untuk memenuhi semua kebutuhan perawatan mata Anda.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="text-center p-6 rounded-lg bg-gray-50"
                            data-aos="fade-up"
                            data-aos-delay={200 + (index * 200)}
                        >
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12" data-aos="fade-up">
                    <a
                        href="services"
                        className="inline-block bg-primary hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-full transition duration-300"
                    >
                        Pelajari Semua Layanan
                    </a>
                </div>
            </div>
        </section>
    );
};

export const Testimonials = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Apa Kata Pelanggan Kami</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Dengar langsung dari pelanggan yang puas dengan produk dan layanan kami.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className="bg-white p-6 rounded-lg shadow-md"
                            data-aos="fade-up"
                            data-aos-delay={200 + (index * 200)}
                        >
                            <div className="flex items-center mb-4">
                                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                                <div className="ml-4">
                                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-5 h-5"
                                                fill={i < testimonial.rating ? "currentColor" : "none"}
                                                stroke="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600">"{testimonial.comment}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const CTA = ({ title, text, button, link }) => {
    return (
        <section className="py-16 bg-primary text-white">
            <div className="container mx-auto px-6 text-center" data-aos="fade-up">
                <h2 className="text-3xl font-bold mb-6">{title}</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">{text}</p>
                <a
                    href={link}
                    className="inline-block bg-white hover:bg-gray-100 text-primary font-bold py-3 px-8 rounded-full text-lg transition duration-300"
                >
                    {button}
                </a>
            </div>
        </section>
    );
};

export const HeroBanner = ({ title, text }) => {
    return (
        <section className="banner-hero flex items-center justify-center text-center text-white">
            <div className="px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-down">{title}</h1>
                <p className="text-xl mb-8" data-aos="fade-up" data-aos-delay="200">{text}</p>
            </div>
        </section>
    )
}

export const StorySection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
                        <img 
                            src="https://plus.unsplash.com/premium_photo-1733938563565-3720eba96daf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlzaW9uYSUyMG9wdGlrfGVufDB8fDB8fHww" 
                            alt="Sejarah Visiona Optik" 
                            className="rounded-lg shadow-xl" 
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-12" data-aos="fade-left">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Cerita Kami</h2>
                        <p className="text-gray-600 mb-6">Visiona Optik didirikan pada tahun 2010 dengan misi sederhana:
                            menyediakan solusi penglihatan berkualitas tinggi dengan pelayanan yang ramah dan profesional.
                        </p>
                        <p className="text-gray-600 mb-6">Dari sebuah toko kecil di Jakarta, kami telah berkembang menjadi salah
                            satu optik terpercaya dengan beberapa cabang di wilayah Jabodetabek.</p>
                        <p className="text-gray-600 mb-6">Sepanjang perjalanan kami, komitmen terhadap kualitas produk dan
                            kepuasan pelanggan tetap menjadi prioritas utama.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const VMSection = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Visi & Misi Kami</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Dasar dari semua yang kami lakukan di Visiona Optik</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Visi</h3>
                        <p className="text-gray-600 text-center">Menjadi optik terdepan dalam menyediakan solusi penglihatan
                            yang inovatif dan berkualitas, meningkatkan kualitas hidup masyarakat melalui penglihatan yang
                            lebih baik.</p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="400">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Misi</h3>
                        <ul className="text-gray-600 space-y-2">
                           {
                            misiondata.map((item, index) => {
                                return (
                                    <Mision text={item} key={index} />
                                )
                            })
                           }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const TeamSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Tim Profesional Kami</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Bertemu dengan tim ahli yang siap membantu kebutuhan
                        penglihatan Anda</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        teammemberdata.map((item, index) => {
                            return (
                                <TeamMemberCard images={item.images} name={item.name} title={item.title} des={item.des} key={`team-member ${index}`} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export const ValuesSection = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Nilai-Nilai Kami</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Prinsip-prinsip yang memandu setiap aspek bisnis kami</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        valuessectiondata.map((item, index) => {
                            return (
                                <ValuesSectionCard icons={item.icons} title={item.title} text={item.text} key={`values-section ${index}`} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export const ProductCard = ({ product, delay }) => {
    return (
        <div
            className="bg-white rounded-lg shadow-md overflow-hidden product-card transition duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
            data-aos="fade-up"
            data-aos-delay={delay}
        >
            <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                {product.tag && (
                    <div className={`absolute top-2 right-2 text-white text-xs font-bold px-2 py-1 rounded ${product.tag === 'NEW' ? 'bg-primary' :
                        product.tag === 'SALE' ? 'bg-red-500' :
                            product.tag === 'BEST' ? 'bg-green-500' : 'bg-gray-500'
                        }`}>
                        {product.tag}
                    </div>
                )}
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-primary font-bold">Rp {product.price.toLocaleString('id-ID')}</span>
                        {product.discount && (
                            <span className="text-gray-400 text-sm line-through ml-2">Rp {product.discount.toLocaleString('id-ID')}</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const ContactInfo = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        contactinfodata.map((item, index) => {
                            return (
                                <ContactInfoCard 
                                    icons={item.icons} 
                                    title={item.title} 
                                    info={item.info} 
                                    text={item.text} 
                                    button={item.button} 
                                    link={item.link} 
                                    color={item.color} 
                                    isLocation={item.is}
                                    key={index}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export const ContactForm = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10" data-aos="fade-right">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Kirim Pesan kepada Kami</h2>
                        <p className="text-gray-600 mb-8">Isi formulir di samping untuk pertanyaan, permintaan informasi, atau menjadwalkan pemeriksaan mata. Kami akan merespons dalam waktu 24 jam.</p>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Informasi Tambahan</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-primary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <div>
                                        <h4 className="font-medium text-gray-800">Jam Operasional</h4>
                                        <p className="text-gray-600">Senin - Minggu: 09:00 - 21:00 WIB</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-primary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                    <div>
                                        <h4 className="font-medium text-gray-800">Layanan Pelanggan</h4>
                                        <p className="text-gray-600">Telepon/WhatsApp: 08xx-xxxx-xxxx (24 jam)</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-primary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    <div>
                                        <h4 className="font-medium text-gray-800">Email Resmi</h4>
                                        <p className="text-gray-600">Gunakan hanya alamat email resmi kami untuk komunikasi penting</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2" data-aos="fade-left">
                        <form className="bg-white p-8 rounded-lg shadow-md">
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
                                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Alamat Email</label>
                                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Nomor Telepon</label>
                                <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subjek</label>
                                <select id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                                    <option value="">Pilih subjek...</option>
                                    <option value="appointment">Pemeriksaan Mata</option>
                                    <option value="product">Informasi Produk</option>
                                    <option value="service">Layanan Perbaikan</option>
                                    <option value="other">Lainnya</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Pesan</label>
                                <textarea id="message" rows="5" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required></textarea>
                            </div>
                            <button type="submit" className="w-full bg-primary hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-md transition duration-300">Kirim Pesan</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const MapSection = () => {
    return (
        <section className="py-20 bg-white" id="map">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Lokasi Kami</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Kunjungi toko fisik kami untuk pengalaman berbelanja langsung dan konsultasi tatap muka dengan ahli optometri kami</p>
                </div>

                <div className="rounded-lg overflow-hidden shadow-xl" data-aos="fade-up">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.82256141529485!3d-6.194741662717247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f42d9c5f3e5d%3A0x6a6a7a9f9a9b9c9d!2sJl.%20Optik%20No.123%2C%20Jakarta%20Pusat%2C%20DKI%20Jakarta!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Visiona Optik Location"
                    ></iframe>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {
                        mapinfodata.map((item, index) => {
                            return (
                                <BranchCard
                                    title={item.title} 
                                    text1={item.text1} 
                                    text2={item.text2} 
                                    text3={item.text3}  
                                    key={index} 
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Pertanyaan yang Sering Diajukan</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Temukan jawaban untuk pertanyaan umum tentang produk dan layanan kami
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="mb-6 bg-white rounded-lg shadow-md overflow-hidden"
                            data-aos="fade-up"
                            data-aos-delay={`${(index + 1) * 100}`}
                        >
                            <button
                                className="w-full flex justify-between items-center p-6 focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="text-lg font-semibold text-gray-800 text-left">
                                    {faq.question}
                                </h3>
                                <svg
                                    className={`w-5 h-5 text-primary transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>
                            </button>
                            <div
                                className={`px-6 pb-6 transition-all duration-300 ease-in-out ${activeIndex === index ? 'block' : 'hidden'
                                    }`}
                            >
                                <div className="text-gray-600">{faq.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const ServiceSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Layanan Unggulan Kami</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Kami menyediakan berbagai layanan profesional untuk memastikan penglihatan Anda tetap optimal
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export const HowItWorksSection = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Bagaimana Kami Bekerja</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Proses sederhana untuk mendapatkan layanan terbaik dari Visiona Optik
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {howItWorksData.map((step) => (
                        <StepCard key={step.id} step={step} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export const PricingSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Paket Layanan Kami</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Pilihan paket layanan dengan harga kompetitif dan kualitas terjamin
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {pricingData.map((packageItem) => (
                        <PricingCard key={packageItem.id} packageItem={packageItem} />
                    ))}
                </div>
            </div>
        </section>
    );
};