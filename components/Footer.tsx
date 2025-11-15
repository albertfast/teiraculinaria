import React from 'react';
import { InstagramIcon, MailIcon, LogoIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950/80 text-neutral-300">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="flex items-center justify-center md:justify-start space-x-2 text-xl font-medium text-white mb-4">
                <LogoIcon className="h-8 w-auto text-amber-500" />
                <span className="font-serif">Deniz Sezer | Culinary Artistry</span>
            </a>
            <p className="text-neutral-400">Exquisite Dining Experiences.</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
             <div className="flex space-x-4 mb-4">
                <a href="mailto:info@denizsezer.com" className="text-neutral-400 hover:text-amber-500 transition-colors duration-300">
                    <MailIcon className="w-6 h-6" />
                </a>
                <a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors duration-300">
                    <InstagramIcon className="w-6 h-6" />
                </a>
             </div>
             <a href="mailto:info@denizsezer.com" className="hover:text-amber-500 transition-colors duration-300 text-neutral-300">
                info@denizsezer.com
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-6 text-center text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Ahmet Sahiner. All Rights Reserved.</p>
          <a href="mailto:ahmetsahinersf@gmail.com" className="hover:text-amber-500 transition-colors duration-300 text-neutral-300">
            ahmetsahinersf@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;