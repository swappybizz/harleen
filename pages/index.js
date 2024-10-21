// pages/index.js
import { useEffect, useState } from 'react';

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 500);
  }, []);

  return (
    <div className="bg-pink-50 text-gray-800 min-h-screen flex flex-col items-center justify-center p-6">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-red-600 animate-pulse">
          Harleen Makeup Skin Hair Academy
        </h1>
        <p className="text-lg font-light text-gray-500">
          Unlock your beauty potential with expert training.
        </p>
      </header>

      {/* Product & Services Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative">
            <img
              src="https://via.placeholder.com/400x303"
              alt="Skincare"
              className="rounded-lg shadow-lg w-full h-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/path-to-local-fallback-image.jpg'; // Fallback in case image fails to load
              }}
            />
          </div>
          <h3 className="text-2xl font-semibold mt-4 text-center text-red-600">Skincare Training</h3>
          <p className="text-center text-gray-500 mt-2">
            Learn everything from basic to advanced skincare techniques with professional trainers.
          </p>
        </div>

        <div className={`transition-opacity duration-1000 delay-200 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative">
            <img
              src="https://via.placeholder.com/400x303"
              alt="Makeup"
              className="rounded-lg shadow-lg w-full h-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/path-to-local-fallback-image.jpg';
              }}
            />
          </div>
          <h3 className="text-2xl font-semibold mt-4 text-center text-red-600">Makeup Masterclass</h3>
          <p className="text-center text-gray-500 mt-2">
            Get hands-on experience with the latest trends in makeup artistry.
          </p>
        </div>

        <div className={`transition-opacity duration-1000 delay-400 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative">
            <img
              src="https://via.placeholder.com/400x303"
              alt="Hair Styling"
              className="rounded-lg shadow-lg w-full h-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/path-to-local-fallback-image.jpg';
              }}
            />
          </div>
          <h3 className="text-2xl font-semibold mt-4 text-center text-red-600">Hair Styling Techniques</h3>
          <p className="text-center text-gray-500 mt-2">
            Master modern hair styling techniques and trends for all hair types.
          </p>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-12 border-4 border-yellow-500">
        <h2 className="text-3xl font-bold mb-6 text-center text-pink-500">Our Specialized Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="relative">
              <img
                src="https://via.placeholder.com/400x303"
                alt="Bridal Makeup"
                className="rounded-lg shadow-lg w-full h-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/path-to-local-fallback-image.jpg';
                }}
              />
            </div>
            <h3 className="text-2xl font-semibold mt-4 text-center text-red-600">Bridal Makeup</h3>
            <p className="text-center text-gray-500 mt-2">
              Get trained on creating stunning Indian bridal looks with traditional and modern techniques.
            </p>
          </div>

          <div>
            <div className="relative">
              <img
                src="https://via.placeholder.com/400x303"
                alt="Special Effects Makeup"
                className="rounded-lg shadow-lg w-full h-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/path-to-local-fallback-image.jpg';
                }}
              />
            </div>
            <h3 className="text-2xl font-semibold mt-4 text-center text-red-600">Special Effects Makeup</h3>
            <p className="text-center text-gray-500 mt-2">
              Learn the art of special effects makeup for film, TV, and fashion shows.
            </p>
          </div>

          <div>
            <div className="relative">
              <img
                src="https://via.placeholder.com/400x303"
                alt="Advanced Skincare"
                className="rounded-lg shadow-lg w-full h-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/path-to-local-fallback-image.jpg';
                }}
              />
            </div>
            <h3 className="text-2xl font-semibold mt-4 text-center text-red-600">Advanced Skincare</h3>
            <p className="text-center text-gray-500 mt-2">
              From anti-aging treatments to therapeutic facials, become a pro in skincare.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-pink-100 p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-pink-600">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg border-4 border-pink-500">
            <p className="text-gray-500 mb-4">
              "Harleen Academy gave me the confidence and skills to start my own beauty business. The bridal makeup training was amazing!" 
            </p>
            <p className="text-red-600 font-bold">- Riya S.</p>
          </div>
          <div className="p-6 bg-white rounded-lg border-4 border-pink-500">
            <p className="text-gray-500 mb-4">
              "The makeup masterclass was life-changing! I now feel ready to take on any client for Indian bridal makeup."
            </p>
            <p className="text-red-600 font-bold">- Priya K.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mb-12 text-center border-4 border-yellow-500">
        <h2 className="text-3xl font-bold mb-6 text-pink-500">Why Choose Harleen Academy?</h2>
        <p className="text-gray-500 mb-6">
          At Harleen Academy, we provide the latest tools, techniques, and professional insights to help you excel in the beauty industry. Whether you're a beginner or looking to sharpen your skills, our programs are designed to help you succeed.
        </p>
        <ul className="text-left list-disc list-inside space-y-3 text-gray-500">
          <li>Professional instructors with real-world experience.</li>
          <li>Hands-on training with the latest industry tools.</li>
          <li>Personalized learning paths based on your goals.</li>
          <li>State-of-the-art facilities and equipment.</li>
          <li>Job placement assistance and business mentorship.</li>
        </ul>
        <a
          href="mailto:contact@harleenacademy.com"
          className="inline-block bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg mt-6 transition-colors duration-300"
        >
          Contact Us for Enrollment
        </a>
      </section>

      {/* Location Section */}
      <section className="bg-pink-100 p-8 rounded-lg shadow-lg mb-12 text-center border-4 border-yellow-500">
        <h2 className="text-3xl font-bold mb-6 text-pink-500">Our Location</h2>
        <p className="text-gray-500 mb-4">1234 Beauty Lane, Glamour City, India</p>
        <p className="text-gray-500">We are conveniently located in the heart of the city with easy access to public transportation and parking.</p>
      </section>

      {/* Footer Section */}
      <footer className="mt-12 text-gray-500">
        <p>&copy; 2024 Harleen Skin Makeup & Hair Academy. All Rights Reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
      </footer>
    </div>
  );
}
