import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [form, setForm] = useState({
    from_name: '',
    phone: '',
    from_email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!form.from_name) tempErrors.from_name = 'Name is required';
    if (!form.phone) tempErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(form.phone)) tempErrors.phone = 'Phone number is invalid';
    if (!form.from_email) tempErrors.from_email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.from_email)) tempErrors.from_email = 'Email is invalid';
    if (!form.message) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      emailjs.sendForm('service_u6dbj2i', 'template_zzxp4st', e.target, 'bVC9Jtf0AXPu6FykK')
        .then((result) => {
          alert('Message sent successfully');
          setForm({
            from_name: '',
            phone: '',
            from_email: '',
            message: '',
          });
        }, (error) => {
          alert('Failed to send message, please try again later');
        });
    }
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Get in Touch</h2>
            <p className="text-gray-600 md:text-lg">
              Have a question or want to work together? Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>
          <form className="space-y-6 bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="from_name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={form.from_name}
                  onChange={handleChange}
                  className={`block w-full px-4 py-2 mt-1 border ${errors.from_name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-red-500 focus:border-red-500`}
                  placeholder="Enter your name"
                />
                {errors.from_name && <span className="text-red-500 text-sm">{errors.from_name}</span>}
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className={`block w-full px-4 py-2 mt-1 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-red-500 focus:border-red-500`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="from_email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                value={form.from_email}
                onChange={handleChange}
                className={`block w-full px-4 py-2 mt-1 border ${errors.from_email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-red-500 focus:border-red-500`}
                placeholder="Enter your email"
              />
              {errors.from_email && <span className="text-red-500 text-sm">{errors.from_email}</span>}
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                className={`block w-full px-4 py-2 mt-1 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 min-h-[150px]`}
                placeholder="Enter your message"
              />
              {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-black-400 rounded-lg shadow-md hover:bg-white-300 hover:text-black-300 focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
