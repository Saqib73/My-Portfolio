const servicesData = [
    { id: 1, title: 'Web Development', description: 'Build Responsive and SEO-friendly websites' },
    { id: 2, title: 'SEO Optimization', description: 'Optimize websites for search engines' },
    { id: 3, title: 'Marketing', description: 'Digital Marketing and Social Media Marketing' },
    { id: 4, title: 'E-commerce', description: 'Build E-commerce websites' }
];

export const Services = () => {
    return (
        <section className="text-white py-20">
            <div className="container mx-auto flex flex-col md:flex-row">
                <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
                    <h2 className="text-6xl  text-purple-300 font-extrabold sticky top-20">SERVICES</h2>
                </div>

                <div className="md:w-3/4">
                    {servicesData.map(service => (
                        <div key={service.id} className="mb-16 flex items-start">
                            <div className="text-gray-300 font-bold text-5xl mr-6">
                                {service.id}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                <p className="text-white">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
