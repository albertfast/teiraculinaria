import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send to an API.
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };
  
  return (
    <section id="contact" className="py-20 sm:py-32">
        <div className="container mx-auto px-6 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="text-white">
                    <h2 className="text-4xl lg:text-6xl font-serif mb-4">Elevate Your Dining</h2>
                    <p className="text-xl text-neutral-200 leading-relaxed">
                        Ready to transform your next event into an unforgettable culinary journey? Bespoke menus crafted with artistry and exceptional flavors await you. Reach out to begin planning your experience in the San Francisco Bay Area.
                    </p>
                </div>
                
                <div className="bg-slate-800/60 backdrop-blur-md p-8 rounded-lg shadow-2xl border border-slate-700">
                    {isSubmitted ? (
                        <div className="text-center py-10">
                            <h3 className="text-2xl font-serif text-neutral-100 mb-2">Thank You!</h3>
                            <p className="text-neutral-300">Your request has been received. We will be in touch shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-neutral-300">Your First Name</label>
                                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full bg-slate-700/50 text-neutral-100 px-4 py-3 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500" placeholder="Enter your first name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-neutral-300">Your Email Address*</label>
                                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full bg-slate-700/50 text-neutral-100 px-4 py-3 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500" placeholder="Enter your email address" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-neutral-300">Phone number*</label>
                                <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} className="mt-1 block w-full bg-slate-700/50 text-neutral-100 px-4 py-3 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500" placeholder="Enter your phone number" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-neutral-300">Your Message*</label>
                                <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full bg-slate-700/50 text-neutral-100 px-4 py-3 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500" placeholder="Tell us about your event..."></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-amber-600 text-white font-bold py-3 px-6 rounded-md hover:bg-amber-500 transition-colors duration-300 text-lg">
                                    Submit Your Request
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;