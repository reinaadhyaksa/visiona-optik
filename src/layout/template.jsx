export const Mision = ({ text }) => {
    return (
        <li className="flex items-start">
            <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            {text}
        </li>
    )
}

export const TeamMemberCard = ({ name, title, des, images }) => {
    return (
        <div className="bg-gray-50 rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay="200">
            <img src={images} alt={name} className="w-full h-[450px]" />
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
                <p className="text-primary font-medium mb-4">{title}</p>
                <p className="text-gray-600">{des}</p>
            </div>
        </div>
    )
}

export const ValuesSectionCard = ({ icons, title, text }) => {
    return (
        <div className="text-center p-6" data-aos="fade-up" data-aos-delay="200">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icons}></path>
                </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
            <p className="text-gray-600">{text}</p>
        </div>
    )
}

export const ContactInfoCard = ({ icons, title, info, text, button, color, link, isLocation }) => {
    return (
        <div className="bg-gray-50 p-8 rounded-lg text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icons}></path>
                    {
                        isLocation ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        ) : null
                    }
                </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
            <p className="text-gray-600 mb-2">{info}</p>
            <p className="text-gray-600">{text}</p>
            <a href={link} className={`inline-block mt-4 ${color} text-white font-medium py-2 px-4 rounded-full transition duration-300`}>{button}</a>
        </div>
    )
}

export const BranchCard = ({ title, text1, text2, text3 }) => {
    return (
        <div className="bg-gray-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
            <p className="text-gray-600 mb-4 flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                {text1}
            </p>
            <p className="text-gray-600 mb-4 flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                {text2}
            </p>
            <p className="text-gray-600 flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                {text3}
            </p>
        </div>
    )
}

export const ServiceCard = ({ service }) => {
    return (
        <div className="bg-gray-50 rounded-lg p-6 service-card transition duration-300" data-aos="fade-up" data-aos-delay={service.delay}>
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="text-gray-600 space-y-2 mb-4">
                {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const StepCard = ({ step }) => {
    return (
        <div className="text-center" data-aos="fade-up" data-aos-delay={step.delay}>
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                {step.stepNumber}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
        </div>
    );
};

export const PricingCard = ({ packageItem }) => {
    return (
        <div
            className={`bg-gray-50 rounded-lg overflow-hidden ${packageItem.featured ? 'border-2 border-primary transform scale-105' : ''}`}
            data-aos="fade-up"
            data-aos-delay={packageItem.delay}
        >
            <div className="bg-primary text-white py-4 px-6">
                <h3 className="text-xl font-semibold">{packageItem.name}</h3>
                <p className="opacity-90">{packageItem.description}</p>
            </div>
            <div className="p-6">
                <div className="text-3xl font-bold text-gray-800 mb-6">
                    {packageItem.price}
                    <span className="text-lg font-normal text-gray-600">{packageItem.priceNote}</span>
                </div>
                <ul className="space-y-3 mb-8">
                    {packageItem.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>
                <a
                    href={packageItem.ctaLink}
                    className="block w-full bg-primary hover:bg-blue-800 text-white text-center font-medium py-2 px-4 rounded transition duration-300"
                >
                    {packageItem.ctaText}
                </a>
            </div>
        </div>
    );
};