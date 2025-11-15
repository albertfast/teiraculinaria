import React from 'react';
import { StarIcon } from './Icons';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

const Rating: React.FC = () => (
    <div className="flex justify-center mb-4 text-amber-400">
        {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5" />)}
    </div>
);

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role }) => (
  <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-lg shadow-lg border border-slate-700/50 flex flex-col items-center text-center">
    <Rating />
    <p className="text-neutral-300 italic mb-6">"{quote}"</p>
    <div className="font-semibold text-neutral-100">{author}</div>
    <div className="text-sm text-neutral-400">{role}</div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Absolutely fantastic! The attention to detail and customer service exceeded my expectations every single time. A truly world-class experience.",
      author: "Jane Smith",
      role: "Private Event Host"
    },
    {
      quote: "The Anatolian Table transformed our event with exquisite dishes and impeccable service. Chef Deniz's expertise truly shines through in every bite.",
      author: "Emily Carter",
      role: "Corporate Client"
    },
    {
      quote: "This service transformed my experience! Highly recommend for anyone looking for quality and professionalism. Worth every penny.",
      author: "John Doe",
      role: "Family Dinner"
    }
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-slate-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-serif text-neutral-100 mb-4">Rated 5 Stars by Customers</h2>
        <p className="text-lg text-neutral-300 max-w-3xl mx-auto mb-16">
          Don't just take our word for it. Here's what our valued clients have to say about their experience.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;