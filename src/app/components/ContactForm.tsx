import React from 'react';
import Image from 'next/image';

const ContactForm: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">Contact Us</h2>
        
        {/* Flex container to align the image and form side by side */}
        <div className="flex items-center justify-between mt-8">
          
          {/* Form section */}
          <form className="mt-8 max-w-lg mx-auto w-1/2">
            <div className="grid grid-cols-1 gap-6">
              <input type="text" placeholder="Phone Number" className="border-gray-300 border px-4 py-2 rounded-md" />
              <input type="email" placeholder="Email" className="border-gray-300 border px-4 py-2 rounded-md" />
              <input type="text" placeholder="Interested In" className="border-gray-300 border px-4 py-2 rounded-md" />
              <textarea placeholder="Message" rows={4} className="border-gray-300 border px-4 py-2 rounded-md"></textarea>
            </div>
            <button className="mt-6 w-full bg-gray-800 text-white py-3 rounded-full">Send Email</button>
          </form>
          
          {/* Image section */}
          <div className="w-1/2 pl-8">
            <Image src="/images/form.png" alt="Contact Form" width={500} height={300} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
