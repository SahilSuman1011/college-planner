import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import ReviewsSection from "./ReviewsSection";
import {
  Star,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Award,
  Building,
} from "lucide-react";

const CollegeDetailPage = () => {
  const { collegeId } = useParams<{ collegeId: string }>();
  const navigate = useNavigate();

  // Mock data for college details
  const getCollegeDetails = (id: string) => {
    const collegeDetails = {
      "iit-delhi": {
        name: "IIT Delhi",
        fullName: "Indian Institute of Technology Delhi",
        location: "New Delhi, India", 
        rating: 4.8,
        images: [
          "https://home.iitd.ac.in/public/storage/uploads/itc_1651484470.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwpwXoBWpvgu1xymmbEUZh0hIHNnw_GzFzew&s",
          "https://infra.iitd.ac.in/static/media/aboutiitd.196c72b0b0d8b8770ad6.png",
          "https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2018/12/06/63074-iitdelhi-dna.jpg?itok=69zTnGuw",
        ],
        description: "IIT Delhi is a public technical and research university located in Delhi, India. It is one of the oldest and most prestigious IITs in India, known for its excellence in engineering education and research.",
        established: 1961,
        type: "Public Institute of National Importance",
        campus: "320 acres",
        accreditation: "NAAC A++",
        courses: [
          "Computer Science Engineering",
          "Electrical Engineering", 
          "Mechanical Engineering",
          "Civil Engineering",
          "Chemical Engineering",
          "Aerospace Engineering",
          "Biotechnology",
        ],
        fees: {
          btech: "₹2,20,000/year",
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
        ],
        contactInfo: {
          address: "IIT Campus, Hauz Khas, New Delhi, Delhi 110016",
          phone: "+91-11-2659-7135",
          email: "info@iitd.ac.in",
          website: "https://home.iitd.ac.in/",
        },
      },
      "iim-ahmedabad": {
        name: "IIM Ahmedabad",
        fullName: "Indian Institute of Management Ahmedabad",
        location: "Ahmedabad, Gujarat",
        rating: 4.9,
        images: [
          "https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2025/04/10135125/IIM-Ahmedabad-to-Set-Up-Campus-in-Dubai.jpg",
          "https://simplidistanceimage.b-cdn.net/wp-content/uploads/2022/08/iim-ahemdaba2.jpg",
          "https://www.iima.ac.in/sites/default/files/2022-09/pp_gupta_audi_0.jpeg",
          "https://images.indianexpress.com/2016/10/iim-ahmedabad.jpg?w=728"
        ],
        description: "IIM Ahmedabad is India's premier management institute known for its world-class education and research in management studies.",
        established: 1961,
        type: "Public Autonomous Institute",
        campus: "106 acres",
        accreditation: "EQUIS",
        courses: [
          "Post Graduate Programme in Management",
          "Executive MBA",
          "PhD Programme",
          "Executive Education"
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
        name: "AIIMS Delhi",
        fullName: "All India Institute of Medical Sciences Delhi",
        location: "New Delhi, India",
        rating: 4.9,
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
          "Major Hospitals",
          "Research Institutions",
          "Healthcare Organizations"
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
            className="bg-primary hover:bg-primary/90"
          >
            Browse Courses
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <Button
              variant="outline"
              onClick={() => navigate(-1)}
              className="hover:bg-primary hover:text-white mb-4"
            >
              Back
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold">{college.name}</h1>
            <p className="text-gray-600 text-lg">{college.fullName}</p>
            <div className="flex items-center mt-2">
              <MapPin className="h-5 w-5 text-gray-500 mr-1" />
              <span className="text-gray-600">{college.location}</span>
              <div className="flex items-center bg-yellow-100 px-2 py-1 rounded ml-4">
                <Star className="h-4 w-4 text-yellow-500 mr-1" fill="#EAB308" />
                <span className="text-sm font-medium">{college.rating}</span>
              </div>
            </div>
          </div>
        </div>

        {/* College Images */}
        <div className="mb-8 overflow-hidden rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-96">
            <div className="md:col-span-2 md:row-span-2 h-full">
              <img
                src={college.images[0]}
                alt={college.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {college.images.slice(1, 4).map((image, index) => (
              <div key={index} className="h-full">
                <img
                  src={image}
                  alt={`${college.name} ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* College Information Tabs */}
        <div className="space-y-8">
          {/* Overview Section */}
          
            <h2 className="text-2xl font-bold mb-4">About {college.name}</h2>
            <p className="text-gray-700 mb-6">{college.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start">
          <Calendar className="h-6 w-6 text-primary mr-3 mt-1" />
          <div>
            <h3 className="font-semibold">Established</h3>
            <p className="text-gray-600">{college.established}</p>
          </div>
              </div>
              <div className="flex items-start">
          <Building className="h-6 w-6 text-primary mr-3 mt-1" />
          <div>
            <h3 className="font-semibold">Institute Type</h3>
            <p className="text-gray-600">{college.type}</p>
          </div>
              </div>
              <div className="flex items-start">
          <MapPin className="h-6 w-6 text-primary mr-3 mt-1" />
          <div>
            <h3 className="font-semibold">Campus Size</h3>
            <p className="text-gray-600">{college.campus}</p>
          </div>
              </div>
              <div className="flex items-start">
          <Award className="h-6 w-6 text-primary mr-3 mt-1" />
          <div>
            <h3 className="font-semibold">Accreditation</h3>
            <p className="text-gray-600">{college.accreditation}</p>
          </div>
              </div>
            </div>
          {/* Courses Section */}
          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Courses & Fees</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Available Courses</h3>
                <div className="grid gap-3">
                  {college.courses.map((course, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-md flex items-center">
                      <div className="h-2 w-2 rounded-full bg-primary mr-3" />
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
          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Campus Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {college.facilities.map((facility, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <div className="h-6 w-6 rounded-full bg-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{facility}</h3>
                  <p className="text-gray-600">
                    State-of-the-art {facility.toLowerCase()} for students
                  </p>
                </div>
              ))}
            </div>
          </section>

            {/* Placement Details */}
            <section className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4 md:mb-6">Placement Details</h2>
            <div>
              <h3 className="text-xl font-semibold mb-3">Top Recruiters</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {Array.isArray(college.PlacementPartners) && college.PlacementPartners.map((partner, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-2 bg-gray-50 rounded-lg">
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
            </div>
            </section>

            {/* Reviews Section */}
            <section className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <div className="w-full max-w-full overflow-x-hidden">
              <ReviewsSection collegeId={collegeId} />
            </div>
            </section>

          {/* Contact Section */}
          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Address</h3>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                    <p className="text-gray-700">{college.contactInfo.address}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Contact Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-primary mr-3" />
                      <p className="text-gray-700">{college.contactInfo.phone}</p>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-primary mr-3" />
                      <p className="text-gray-700">{college.contactInfo.email}</p>
                    </div>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary/90 w-full md:w-auto">
                  Visit Website
                </Button>
              </div>
              
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetailPage;
