import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import ReviewsSection from "./ReviewsSection";
import Footer from "./Footer";

import {
  Star,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Award,
  Building,
  Bookmark,
  Share2,
  ArrowLeft,
  ChevronRight,
  Check,
} from "lucide-react";

const CollegeDetailPage = () => {
  const { collegeId } = useParams<{ collegeId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("about");

  // Mock data for college details
  const getCollegeDetails = (id: string) => {
    const collegeDetails = {
      "jnu-jaipur": {
        name: "Jaipur National University",
        fullName: "Jaipur National University Jaipur",
        tagline: "Ranked Among Top Universities in India",
        location: "Jaipur, India", 
        rating: 4.8,
        reviews: 296,
        approvals: ["UGC","AIU", "NCTE","BCI","INC","ICAR","NMC(MCI)","RNC","AICTE",],
        images: [
          "https://images.shiksha.com/mediadata/images/1583911645php0u4sxi.png",
          "https://images.shiksha.com/mediadata/images/1583911675phpAe88Fy.jpeg",
          "https://image-static.collegedunia.com/public/college_data/images/appImage/25819_Jaipuruni_New.jpg?h=260&w=360&mode=crop",
          "https://www.searchurcollege.com/exam/admin/search/gallery/college/col_694.jpg",
        ],
        description: "Jaipur National University, also referred to as JNU University, was established in 2007 and is located in Jaipur, Rajasthan. Jaipur National University is a self-financed private university. It is a UGC-recognised university and has also been accredited with an 'A+' grade by NAAC. Jaipur National University is ranked at 39th position in the Overall category as per India Today rankings 2024. Jaipur National University has been awarded 'Pride of the Nation' in the III edition of India's Greatest Leaders 2017-18. His contributions were counted amongst the stalwarts of India namely Honorable Prime Minister Sh. Narendra Modi.As per NIRF rankings 2024, Jaipur National University (JNU) was ranked 10th in the overall category. Apart from this, JNU also ranked 2nd in the university category in 2024",
        established: 2007,
        type: "Public Institute of National Importance",
        campus: "320 acres",
        details: "The Jaipur National University placement cell is known as the Corporate Resource Cell. The Corporate Resource Cell of JNU Jaipur trains the students and makes them employable. Jaipur National University placement cell offers facilities like soft skills training, job trend tracking, writing and oral skill development, personality development, and campus placement. The Jaipur National University placement cell also organizes group discussions and mock interviews. Dr. Purnima Nag is the director of the JNU Jaipur placement cell. The Corporate Resource Cell of this university follows the following placement process to help students get their desired jobs.First, they create student profiles on the university website. Then, they organize workshops and industry visits to familiarize students with the work environment, then they invite companies for recruitment, and then the placement cell trains students according to their job goals. They also help students understand the job roles. Then, they encourage them to complete industry-related projects and finally help students prepare before the interview round.",
        accreditation: "NAAC A++",
        courses: [
          "Computer Science Engineering",
          "Electrical Engineering", 
          "Mechanical Engineering",
          "Civil Engineering",
          "Chemical Engineering",
          "Biotechnology",
        ],
        placementStats: {
          avgSalary: "50%",
          hiringPartners: "300+",
          interviewOpportunities: "3X"
        },
        fees: {
          btech: "₹1,09,000/year",
          mtech: "₹2,00,000/year", 
          phd: "₹1,75,000/year",
        },
        facilities: [
          "Central Library",
          "Sports Complex",
          "Hostels",
          "Medical Center",
          "Cafeteria",
          "Auditorium",
          "Research Labs",
        ],
        PlacementPartners: [
           { name: "Google", logo: "https://storage.googleapis.com/gd-prod/images/f4f4bc5f-904a-4b61-972f-c403bc060679.799a99c1196c2fd4.webp" },
           { name: "Microsoft", logo: "https://msblogs.thesourcemediaassets.com/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg" },
           { name: "Bain & Co", logo: "https://i.pinimg.com/736x/76/92/4b/76924bf3b16400a6d0b6e7e1aeed033d.jpg" },
           { name: "BCG", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5uxBqyB_DV6L4qmZbfF9z3BqIIaxOve4ioQ&s" },
           { name: "Mckinsey", logo: "https://assets.channelinsider.com/uploads/2022/01/CI.McKinsey.png" },
           { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" },
           { name: "Airtel", logo: "https://1000logos.net/wp-content/uploads/2023/06/Airtel-logo.png" },
           { name: "Deloitte", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAI5b0dd2gKoQBBt9dkWH42lhrKJPRW0VsUQ&s" },
           { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/2560px-Infosys_logo.svg.png" },
           { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/2560px-Tata_Consultancy_Services_old_logo.svg.png" }
        ],
        contactInfo: {
          address: "IIT Campus, Hauz Khas, New Delhi, Delhi 110016",
          phone: "+91-11-2659-7135",
          email: "info@iitd.ac.in",
          website: "https://home.iitd.ac.in/",
        },
      },
      // Other college data maintained as before
      "srisai-palampur": {
        name: "Sri Sai University Palampur",
        fullName: "Sri Sai University SSU Palampur",
        tagline: "Ranked Among Top Universities in India",
        location: "Palampur, India",
        rating: 4.9,
        reviews: 180,
        approvals: ["UGC","AICTE"],
        images: [
          "https://images.shiksha.com/mediadata/images/1536061475phpsqXSFn.png",
          "https://www.srisaiuniversity.org/downloads/Block-A.jpg",
          "https://images.shiksha.com/mediadata/images/1536061475phpsqXSFn.png",
          "https://www.srisaiuniversity.org/img/img5.jpg"
        ],
        description: "Sri Sai University (also known as SSU University) [SSU], Palampur established in 2010 is a Private University. SSU Palampur is approved by AICTE and UGC. Admission in Sri Sai University is offered in Engineering, Management and Humanities at UG/ PG/ Diploma/ Doctorate level with scholarship benefits to deserving students.Sri Sai University Palampur offers UG, PG, and Research courses in Engineering & Technology, Computer Application, Management, IT, Education, Basic & Applied Sciences, Law, Pharmacy, etc.",
        established: 1961,
        type: "Public Autonomous Institute",
        campus: "106 acres",
        accreditation: "NAAC",
        placementStats: {
          avgSalary: "40%",
          hiringPartners: "150+",
          interviewOpportunities: "2X"
        },
        details: " Sri Sai University has a dedicated Career Development and Placement Cell that takes care of all the placements in the university. Placements are available for various courses, like MBA, MCA, BCA, and B.Tech. Apart from Placements, Sri Sai University also has several different training programs to boost employability and build skills. Some of the major recruiters for the Engineering Discipline are Accenture, Fortis Hospital, Idea Cellular, Hero Cycles, IBM, Dell, Apollo, etc. On the other hand, the major recruiters for the Management courses include Aditya Birla Group, Aviva Group, HDFC Bank, Kotak Securities, Reliance Money, Tech Mahindra among others. ",
        courses: [
          "Bachelor of Technology",
          "Master of Technology",
          "Post Graduate Programme in Management",
          "Executive MBA",
          "PhD Programme",
        ],
        fees: {
          btech: "Not Applicable",
          mtech: "₹23,00,000/year",
          phd: "₹5,00,000/year"
        },
        facilities: [
          "World-class Library",
          "Modern Classrooms",
          "Computing Facilities",
          "Student Housing",
          "Sports Complex",
          "Healthcare Center"
        ],
        
        PlacementPartners: [          
          { name: "Google", logo: "https://storage.googleapis.com/gd-prod/images/f4f4bc5f-904a-4b61-972f-c403bc060679.799a99c1196c2fd4.webp" },
          { name: "Microsoft", logo: "https://msblogs.thesourcemediaassets.com/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg" },
          { name: "Bain & Co", logo: "https://i.pinimg.com/736x/76/92/4b/76924bf3b16400a6d0b6e7e1aeed033d.jpg" },
          { name: "BCG", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5uxBqyB_DV6L4qmZbfF9z3BqIIaxOve4ioQ&s" },
          { name: "Mckinsey", logo: "https://assets.channelinsider.com/uploads/2022/01/CI.McKinsey.png" },
       ],
        contactInfo: {
          address: "Vastrapur, Ahmedabad, Gujarat 380015",
          phone: "+91-79-6632-4000",
          email: "info@iima.ac.in",
          website: "https://www.iima.ac.in/"
        }
      },
      "aiims-delhi": {
        // AIIMS data maintained
        name: "AIIMS Delhi",
        fullName: "All India Institute of Medical Sciences Delhi",
        tagline: "Premier Medical Institution of India",
        location: "New Delhi, India",
        rating: 4.9,
        reviews: 320,
        approvals: ["Ministry of Health", "MCI"],
        images: [
          "https://medicaldialogues.in/h-upload/2022/10/10/1500x900_187486-aiims-delhi.webp",
          "https://static.india.com/wp-content/uploads/2024/09/QT-aiims-delhi.jpg?impolicy=Medium_Widthonly&w=400",
          "https://nsventures.in/wp-content/uploads/2022/08/AIIMS.jpg",
          "https://static.theprint.in/wp-content/uploads/2020/07/AIIMS-2.jpg"
        ],
        description: "AIIMS Delhi is India's premier medical institution offering world-class medical education and healthcare services.",
        established: 1956,
        type: "Public Medical Institute",
        campus: "107.6 acres",
        accreditation: "NAAC A++",
        placementStats: {
          avgSalary: "60%",
          hiringPartners: "200+",
          interviewOpportunities: "4X"
        },
        courses: [
          "MBBS",
          "MD/MS",
          "DM/MCh",
          "BSc Nursing",
          "Paramedical Courses"
        ],
        fees: {
          btech: "Not Applicable",
          mtech: "Not Applicable",
          phd: "₹1,50,000/year"
        },
        facilities: [
          "Super Specialty Hospital",
          "Research Centers",
          "Digital Library",
          "Skills Lab",
          "Hostels",
          "Sports Facility"
        ],
        PlacementPartners: [
          { name: "Apollo Hospitals", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Apollo_Hospitals_Logo.svg/1200px-Apollo_Hospitals_Logo.svg.png" },
          { name: "Fortis Healthcare", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Fortis_Healthcare_Logo.svg/2560px-Fortis_Healthcare_Logo.svg.png" },
          { name: "Max Healthcare", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Max_Healthcare_logo.svg/1200px-Max_Healthcare_logo.svg.png" },
          { name: "Medanta", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Medanta_Logo.svg/1200px-Medanta_Logo.svg.png" },
          { name: "WHO", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/1200px-Flag_of_the_United_Nations.svg.png" }
        ],
        contactInfo: {
          address: "Ansari Nagar East, New Delhi, Delhi 110029",
          phone: "+91-11-2658-8500",
          email: "info@aiims.edu",
          website: "https://www.aiims.edu/"
        }
      }
    };

    return collegeDetails[id as keyof typeof collegeDetails] || null;
  };

  const college = getCollegeDetails(collegeId || "");

  if (!college) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-6">College Not Found</h1>
          <p className="mb-6">
            The college you are looking for does not exist.
          </p>
          <Button
            onClick={() => navigate("/courses")}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Browse Courses
          </Button>
        </div>
      </div>
    );
  }

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveTab(sectionId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto py-4 px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => navigate(-1)}
                className="hover:bg-gray-100"
              >
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back
              </Button>
            </div>
            <div className="flex items-center space-x-3">
              
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Apply to University
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white py-6 shadow-sm mb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Side - College Information */}
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{college.name}</h1>
              <p className="text-lg text-gray-600 mt-1">{college.fullName}</p>
              <p className="text-md text-gray-500 mt-2">{college.tagline}</p>
              
              <div className="flex items-center mt-4">
                <div className="flex items-center px-3 py-1 bg-yellow-50 rounded-full">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" fill="#EAB308" />
                  <span className="font-medium text-gray-800">{college.rating}</span>
                </div>
                <span className="text-blue-600 ml-2 font-medium">({college.reviews} Reviews)</span>
                <div className="mx-3 h-5 border-l border-gray-300"></div>
                <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                <span className="text-gray-600">{college.location}</span>
              </div>
              
              <div className="flex items-center mt-4 space-x-2">
                {college.approvals && college.approvals.map((approval, index) => (
                  <div key={index} className="bg-blue-50 flex items-center px-3 py-1 rounded-full">
                    <Check className="h-3 w-3 text-blue-600 mr-1" />
                    <span className="text-sm font-medium text-blue-700">{approval}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Side - Quick Actions */}
            <div className="md:w-1/3 flex flex-col justify-center space-y-3">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                Apply to University
              </Button>
              <Button variant="outline" className="w-full flex justify-center items-center">
                Talk to University
                <Phone className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="md:w-64 space-y-4">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-24">
              <nav className="space-y-1">
                {[
                  { id: "about", name: "About" },
                  { id: "courses", name: "Courses" },
                  { id: "facilities", name: "Facilities" },
                  { id: "placements", name: "Placements" },
                  { id: "reviews", name: "Reviews" },
                  { id: "contact", name: "Contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 flex justify-between items-center ${
                      activeTab === item.id
                        ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <span className="font-medium">{item.name}</span>
                    <ChevronRight className={`h-4 w-4 ${activeTab === item.id ? "text-blue-600" : "text-gray-400"}`} />
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* College Images Gallery */}
            <div className="mb-8 overflow-hidden rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-2 h-96">
                <div className="md:col-span-2 md:row-span-2 h-full">
                  <img
                    src={college.images[0]}
                    alt={college.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {college.images.slice(1, 4).map((image, index) => (
                  <div key={index} className="h-full">
                    <img
                      src={image}
                      alt={`${college.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* About Section */}
            <section id="about" className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-4">About {college.name}</h2>
              <p className="text-gray-700 mb-6">{college.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex items-start">
                  <Calendar className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Established</h3>
                    <p className="text-gray-600">{college.established}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Building className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Institute Type</h3>
                    <p className="text-gray-600">{college.type}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Campus Size</h3>
                    <p className="text-gray-600">{college.campus}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Accreditation</h3>
                    <p className="text-gray-600">{college.accreditation}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Courses Section */}
            <section id="courses" className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-6">Courses & Fees</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Available Courses</h3>
                  <div className="grid gap-3">
                    {college.courses.map((course, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-md flex items-center">
                        <div className="h-2 w-2 rounded-full bg-blue-600 mr-3" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Fee Structure</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-semibold">B.Tech</h4>
                      <p className="text-gray-600">4 Years | {college.fees.btech}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-semibold">M.Tech</h4>
                      <p className="text-gray-600">2 Years | {college.fees.mtech}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-semibold">Ph.D</h4>
                      <p className="text-gray-600">3-5 Years | {college.fees.phd}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Facilities Section */}
            <section id="facilities" className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-6">Campus Facilities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {college.facilities.map((facility, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                      <div className="h-5 w-5 rounded-full bg-blue-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{facility}</h3>
                    <p className="text-gray-600 text-sm">
                      State-of-the-art {facility.toLowerCase()} for students
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Placement Section */}
            <section id="placements" className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-4">Placement Details</h2>
              <p className="text-gray-700 mb-6">{college.details}</p>
              
              {/* Placement Stats */}
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-4 text-blue-800">Our students work at</h3>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-blue-600 text-4xl font-bold">{college.placementStats?.avgSalary || "50%"}</p>
                    <p className="text-gray-600 text-sm mt-2">Average Salary Hike</p>
                  </div>
                  <div>
                    <p className="text-blue-600 text-4xl font-bold">{college.placementStats?.hiringPartners || "300+"}</p>
                    <p className="text-gray-600 text-sm mt-2">Hiring Partners</p>
                  </div>
                  <div>
                    <p className="text-blue-600 text-4xl font-bold">{college.placementStats?.interviewOpportunities || "3X"}</p>
                    <p className="text-gray-600 text-sm mt-2">Increase in Interview Opportunities</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Top Recruiters</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {Array.isArray(college.PlacementPartners) && college.PlacementPartners.map((partner, index) => (
                  <div key={index} className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm flex flex-col items-center justify-center">
                    {typeof partner === 'string' ? (
                      <span className="text-center text-sm">{partner}</span>
                    ) : (
                      <>
                        <img 
                          src={partner.logo} 
                          alt={partner.name} 
                          className="h-12 w-auto object-contain mb-2"
                        />
                        <span className="text-xs text-gray-600 text-center">{partner.name}</span>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews Section */}
            <section id="reviews" className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-6">Student Reviews</h2>
              <div className="w-full max-w-full overflow-x-hidden">
                <ReviewsSection collegeId={collegeId} />
              </div>
            </section>

          
        
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CollegeDetailPage;
