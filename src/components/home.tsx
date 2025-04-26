/** @jsxImportSource react */
import React from "react";
import { useNavigate } from "react-router";
import HeroSection from "./HeroSection";
import TopUniversities from "./TopUniversities";
import TestimonialsCarousel from "./TestimonialsCarousel";
import Footer from "./Footer";
import CourseSelectionPage from "./CourseSelectionPage";

interface CourseCardProps {
  title: string;
  icon: React.ReactNode;
  id: string;
}

const CourseCard = ({ title, icon, id }: CourseCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/colleges/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col items-center"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-medium text-center">{title}</h3>
    </div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      <main>

        

      {/* Infinite Logo Scroller */}
      <section className="py-8 md:py-16 bg-white overflow-hidden">
        <style>
          {`
        @keyframes scroll {
          0% {
        transform: translateX(0);
          }
          100% {
        transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
          display: flex;
          width: 200%;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
          `}
        </style>
        <div className="relative flex overflow-hidden">
          <div className="animate-scroll whitespace-nowrap">
        <div className="flex space-x-4 md:space-x-16 min-w-full">
          {/* Logo containers with responsive sizing */}
          <div className="w-24 md:w-40 h-12 md:h-16 p-2 bg-white rounded-lg shadow flex items-center justify-center border border-black">
            <img
          src="https://collegevihar.com/images/university/logo/UTQpHgLMxF1727695204.png"
          alt="Jecrc"
          className="h-6 md:h-8 object-contain"
            />
          </div>
          <div className="w-24 md:w-40 h-12 md:h-16 p-2 bg-white rounded-lg shadow flex items-center justify-center border border-black">
            <img
          src="https://sodel.jnujaipur.ac.in/img/jnu-logo-final.jpg"
          alt="JNU"
          className="h-6 md:h-8 object-contain"
            />
          </div>
          <div className="w-24 md:w-40 h-12 md:h-16 p-2 bg-white rounded-lg shadow flex items-center justify-center border border-black">
            <img
          src="https://www.careerguide.com/career/wp-content/uploads/2023/09/IIT-Jodhpur.png"
          alt="IIT Jodhpur"
          className="h-8 md:h-12 object-contain"
            />
          </div>
          <div className="w-24 md:w-40 h-12 md:h-16 p-2 bg-white rounded-lg shadow flex items-center justify-center border border-black">
            <img
          src="https://i.pinimg.com/736x/2e/26/8e/2e268e3474c5c327953ead21af6c80bb.jpg"
          alt="UOR"
          className="h-8 md:h-10 object-contain"
            />
          </div>
          <div className="w-24 md:w-40 h-12 md:h-16 p-2 bg-white rounded-lg shadow flex items-center justify-center border border-black">
            <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk7ylA3yKD_mFAR5af1KqEyQkHmAclVft3tg&s"
          alt="SSU"
          className="h-6 md:h-8 object-contain"
            />
          </div>
          {/* Duplicate set with same responsive classes */}
          <div className="w-24 md:w-40 h-12 md:h-16 p-2 bg-white rounded-lg shadow flex items-center justify-center border border-black">
            <img
          src="https://collegevihar.com/images/university/logo/UTQpHgLMxF1727695204.png"
          alt="Jecrc"
          className="h-6 md:h-8 object-contain"
            />
          </div>
          <div className="w-24 md:w-40 h-12 md:h-16 p-2 bg-white rounded-lg shadow flex items-center justify-center border border-black">
            <img
          src="https://sodel.jnujaipur.ac.in/img/jnu-logo-final.jpg"
          alt="JNU"
          className="h-6 md:h-8 object-contain"
            />
          </div>
          <div className="w-24 md:w-40 h-12 md:h-16 p-2 bg-white rounded-lg shadow flex items-center justify-center border border-black">
            <img
          src="https://www.careerguide.com/career/wp-content/uploads/2023/09/IIT-Jodhpur.png"
          alt="IIT Jodhpur"
          className="h-8 md:h-12 object-contain"
            />
          </div>
          <div className="w-24 md:w-40 h-12 md:h-16 p-2 bg-white rounded-lg shadow flex items-center justify-center border border-black">
            <img
          src="https://i.pinimg.com/736x/2e/26/8e/2e268e3474c5c327953ead21af6c80bb.jpg"
          alt="UOR"
          className="h-8 md:h-10 object-contain"
            />
          </div>
          <div className="w-24 md:w-40 h-12 md:h-16 p-2 bg-white rounded-lg shadow flex items-center justify-center border border-black">
            <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk7ylA3yKD_mFAR5af1KqEyQkHmAclVft3tg&s"
          alt="SSU"
          className="h-6 md:h-8 object-contain"
            />
          </div>
        </div>
          </div>
        </div>
      </section>


        {/* Courses Section */}
        


        <CourseSelectionPage/>

                   {/* CTA Section */}
                   <section className="py-12 mt-4 bg-gradient-to-r from-blue-300 to-green-300 text-white w-full">
            <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Educational Journey?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let us help you navigate the path to your dream college and
              career.
            </p>
            <div className="relative">
              <button 
              onClick={() => document.getElementById('getInTouch').classList.remove('hidden')}
              className="bg-white hover:text-primary text-blue-600 font-semibold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors"
              >
              Get Started Today
              </button>

              {/* Popup Dialog */}
              <div id="getInTouch" className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
                <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">GET IN TOUCH</h2>
                <button 
                  onClick={() => document.getElementById('getInTouch').classList.add('hidden')}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                </div>
                <p className="text-gray-600 mb-6">Receive tailored solutions, expert advice, and precise estimates</p>
                <form className="space-y-4">
                <div>
                  <input type="text" placeholder="Full Name" className="w-full p-2 border rounded-md" required />
                </div>
                <div>
                  <input type="email" placeholder="Email Address" className="w-full p-2 border rounded-md" required />
                </div>
                <div>
                  <input type="tel" placeholder="Phone No." className="w-full p-2 border rounded-md" required />
                </div>
                
                <div>
                  <textarea placeholder="Message" className="w-full p-2 border rounded-md h-32" required></textarea>
                </div>
                <div className="flex gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>100% Confidential</span>
                  </div>
                  <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>We don't Misuse Customer's Data</span>
                  </div>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
                  Submit
                </button>
                </form>
              </div>
              </div>
            </div>
            </div>
          </section>
        
        {/* Top Universities Section */}
        <TopUniversities />

        {/* Video Gallery Section */}
        <section className="px-4 md:px-8 lg:px-16 bg-white">
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

      

        {/* Testimonials Section */}
        <section className="px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="container mx-auto">
           
            <TestimonialsCarousel />
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

       
      </main>

      <Footer />
    </div>
  );
};

export default Home;
