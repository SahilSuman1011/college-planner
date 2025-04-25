/** @jsxImportSource react */
import React from "react";
import HeroSection from "./HeroSection";
import TopUniversities from "./TopUniversities";
import TestimonialsCarousel from "./TestimonialsCarousel";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      <main>
        {/* Top Universities Section */}
        <TopUniversities />

        {/* Video Gallery Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Video Gallery
          </h2>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            View All →
          </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Video 1 */}
              <div className="relative aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/H7B_k4hgNhk"
            title="SHUATS Campus Tour"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
              </div>

              {/* Video 2 */}
              <div className="relative aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/_euKolJzlzg"
            title="JECRC University Campus Tour"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
              </div>

              {/* Video 3 */}
              <div className="relative aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/WljVe-1EnPY"
            title="Jaipur National University"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Blog
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Blog Post 1 */}
                <a 
                href="https://www.collegeplanner.in/blog/cuet-2025-eligibility-criteria-age-limit-qualification-course-wise-admission-criteria"
                className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                <img
                  src="/eli.png"
                  alt="CUET 2025 Eligibility"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">Jan 17, 2025</p>
                  <h3 className="text-xl font-semibold mb-2">
                  CUET 2025 Eligibility Criteria: Age Limit, Qualification...
                  </h3>
                  <p className="text-gray-600 text-sm">
                  CUET 2025 eligibility criteria determine whethe...
                  </p>
                </div>
                </a>

              {/* Blog Post 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <a 
                href="https://www.collegeplanner.in/blog/nios-result-2024-class-10th-and-12th-october-exam-live-updates-release-date-how-to-check-niosacin"
                className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                <img
                  src="/live.png"
                  alt="CUET 2025 Eligibility"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">Jan 17, 2025</p>
                  <h3 className="text-xl font-semibold mb-2">
                  NIOS Result 2024 Class 10th and 12th (October Exam) Live Updates...
                  </h3>
                  <p className="text-gray-600 text-sm">
                  NIOS Result 2024 October is expected to announc...
                  </p>
                </div>
                </a>
              </div>

              {/* Blog Post 3 */}
              
              <a 
                href="https://www.collegeplanner.in/blog/jee-main-admit-card-city-allotment-2025-live-update-exam-city-slip-out-at-jeemainntanicin"
                className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                <img
                  src="/jee.png"
                  alt="CUET 2025 Eligibility"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">Jan 17, 2025</p>
                  <h3 className="text-xl font-semibold mb-2">
                  JEE Main Admit Card, City Allotment 2025 Live Update: Ex..

                  </h3>
                  <p className="text-gray-600 text-sm">
                  The JEE Main 2025 city intimation slip has been re
                  </p>
                </div>
                </a>
              </div>
            </div>
       
        </section>

        {/* Testimonials Section */}
        <section className="px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="container mx-auto">
           
            <TestimonialsCarousel />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-blue-500 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Educational Journey?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let us help you navigate the path to your dream college and
              career.
            </p>
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors">
              Get Started Today
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
