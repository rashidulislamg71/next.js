import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Product",
            links: ["Features", "Integrations", "Pricing", "Changelog"]
        },
        {
            title: "Company",
            links: ["About Us", "Careers", "Privacy Policy", "Terms of Service"]
        },
        {
            title: "Resources",
            links: ["Documentation", "Help Center", "Community", "Guides"]
        }
    ];

    return (
        <footer className="bg-slate-900 text-slate-300 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">

                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <h2 className="text-white text-2xl font-bold mb-4">NextLearner</h2>
                        <p className="mb-6 max-w-sm text-slate-400">
                            Building the next generation of web experiences with speed,
                            efficiency, and modern design principles.
                        </p>
                        <div className="flex space-x-5">
                            <a href="#" className="hover:text-white transition-colors">Facebook</a>
                            <a href="#" className="hover:text-white transition-colors">Youtube</a>
                            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                          
                        </div>
                    </div>

                    {/* Link Columns */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-white font-semibold mb-4">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-sm hover:text-white transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">
                        © {currentYear} TechWave Inc. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm">
                        <a href="#" className="hover:text-white transition-colors">Status</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;