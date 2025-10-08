import React from 'react';
import { ChefHatIcon, UsersIcon, BookOpenIcon } from './Icons';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-lg shadow-lg hover:shadow-2xl border border-slate-700/50 transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
    <div className="bg-amber-900/50 text-amber-400 p-4 rounded-full mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-serif text-neutral-100 mb-3">{title}</h3>
    <p className="text-neutral-300 leading-relaxed">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <ChefHatIcon className="w-8 h-8" />,
      title: 'Private Chef Services',
      description: 'An intimate and tailored culinary experience for your special occasions, romantic dinners, or family gatherings, right in the comfort of your home.',
    },
    {
      icon: <UsersIcon className="w-8 h-8" />,
      title: 'Catering & Dinner Parties',
      description: 'Elevate your events with exquisite, customized catering options. From canapés to multi-course tasting menus designed to impress your guests.',
    },
    {
      icon: <BookOpenIcon className="w-8 h-8" />,
      title: 'Culinary Masterclasses',
      description: 'Discover the secrets behind Michelin-level cuisine. Hands-on cooking classes for individuals or groups, blending local flavors with innovative techniques.',
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-serif text-neutral-100 mb-4">Our Services</h2>
        <p className="text-lg text-neutral-300 max-w-3xl mx-auto mb-16">
          Experience culinary excellence with bespoke menus and exceptional dining experiences crafted from the finest ingredients.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;