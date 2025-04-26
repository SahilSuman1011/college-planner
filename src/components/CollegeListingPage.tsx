import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Star } from "lucide-react";

interface CollegeCardProps {
  id: string;
  name: string;
  location: string;
  rating: number;
  image: string;
  fees: string;
  courses: string[];
}

const CollegeCard = ({
  id,
  name,
  location,
  rating,
  image,
  fees,
  courses,
}: CollegeCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/college/${id}`);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all cursor-pointer bg-white">
      <div
        className="h-48 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{name}</CardTitle>
          <div className="flex items-center bg-yellow-100 px-2 py-1 rounded">
            <Star className="h-4 w-4 text-yellow-500 mr-1" fill="#EAB308" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        <p className="text-sm text-gray-500">{location}</p>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm font-medium">Fees: {fees}</p>
        <div className="mt-2">
          <p className="text-sm font-medium mb-1">Courses:</p>
          <div className="flex flex-wrap gap-1">
            {courses.slice(0, 3).map((course, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 px-2 py-1 rounded"
              >
                {course}
              </span>
            ))}
            {courses.length > 3 && (
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                +{courses.length - 3} more
              </span>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleClick}
          className="w-full bg-primary hover:bg-primary/90"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

const CollegeListingPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();

  // Mock data for colleges based on course
  const getCollegesByCourse = (course: string) => {
    const allColleges = {
      engineering: [
        {
          id: "jnu-jaipur",
          name: "Jaipur National University",
          location: " Jaipur, India",
          rating: 4.8,
          image:
            "https://www.jnujaipur.ac.in/Uploads/image/522imguf_career.webp",
          fees: "₹2,20,000/year",
          courses: [
            "Under-Graduate",
            "Post-Graduate",
            "Diploma",
            "Doctorate",
            "Certificate",
          ],
        },
        {
          id: "srisai-palampur",
          name: "Sri Sai University",
          location: "Palampur, India",
          rating: 4.9,
          image:
            "https://www.srisaiuniversity.org/downloads/Block-A.jpg",
          fees: "₹2,20,000/year",
          courses: [
            "Under-Graduate",
            "Post-Graduate",
            "Diploma",
            "Doctorate",
            "Certificate",
          ], 
        },
        {
          id: "sangam-bhilwara",
          name: "Sangam University",
          location: "Bhilwara, Rajasthan",
          rating: 4.7,
          image:
          "https://images.shiksha.com/mediadata/images/1533711383php12pHB1.jpeg",
          fees: "₹2,00,000/year",
          courses: [
           "Under-Graduate",
            "Post-Graduate",
            "Diploma",
            "Doctorate",
            "Certificate",
          ],
        },
        {
          id: "nit-trichy",
          name: "NIT Trichy",
          location: "Tiruchirappalli, Tamil Nadu",
          rating: 4.6,
          image:
            "https://www.nitt.edu/home/Library-2019.JPG",
          fees: "₹1,25,000/year",
          courses: [
            "Computer Science",
            "Electrical Engineering",
            "Mechanical Engineering",
          ],
        },
        {
          id: "iiit-hyderabad",
          name: "IIIT Hyderabad",
          location: "Hyderabad, Telangana",
          rating: 4.7,
          image:
            "https://image-static.collegedunia.com/public/college_data/images/appImage/25357_00.jpg?h=260&w=360&mode=crop",
          fees: "₹2,10,000/year",
          courses: ["Computer Science", "Data Science", "AI & ML"],
        },
        {
          id: "vit-vellore",
          name: "VIT Vellore",
          location: "Vellore, Tamil Nadu",
          rating: 4.5,
          image:
            "https://justgetadmission.com/assets/img/college/justgetadmission-20102024171607.webp",
          fees: "₹1,80,000/year",
          courses: [
            "Computer Science",
            "Electronics",
            "Mechanical Engineering",
          ],
        },
      ],
      "mba-pgdm": [
        {
          id: "iim-ahmedabad",
          name: "IIM Ahmedabad",
          location: "Ahmedabad, Gujarat",
          rating: 4.9,
          image:
            "https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2025/04/10135125/IIM-Ahmedabad-to-Set-Up-Campus-in-Dubai.jpg",
          fees: "₹23,00,000/program",
          courses: ["MBA", "Executive MBA", "PGDM"],
        },
        {
          id: "iim-bangalore",
          name: "IIM Bangalore",
          location: "Bangalore, Karnataka",
          rating: 4.9,
          image:
            "https://etimg.etb2bimg.com/thumb/msid-99615796,imgsize-156416,width-1200,height=765,overlay-etinfra/news/logistics/iim-bangalore-to-open-supply-chain-sustainability-lab-in-partnership-with-tci.jpg",
          fees: "₹22,50,000/program",
          courses: ["MBA", "Business Analytics", "Executive Education"],
        },
        {
          id: "xlri-jamshedpur",
          name: "XLRI Jamshedpur",
          location: "Jamshedpur, Jharkhand",
          rating: 4.8,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ30qHkrgThr9bm3FfxcZgQuRbLONWCdAjIg&s",
          fees: "₹25,00,000/program",
          courses: ["Business Management", "Human Resource Management"],
        },
      ],
      // Add more courses and colleges as needed
    };

    return allColleges[course as keyof typeof allColleges] || [];
  };

  const colleges = getCollegesByCourse(courseId || "");

  const getCourseTitle = (courseId: string) => {
    const courseTitles: { [key: string]: string } = {
      engineering: "Engineering",
      "mba-pgdm": "MBA & PGDM",
      "computer-applications": "Computer Applications",
      law: "Law",
      management: "Management",
      design: "Design",
      pharmacy: "Pharmacy",
      nursing: "Nursing",
      "arts-humanities": "Arts and Humanities",
      dental: "Dental",
      science: "Science",
      agriculture: "Agriculture",
      "commerce-banking": "Commerce & Banking",
      "hotel-management": "Hotel Management",
      education: "Education",
      paramedical: "Paramedical",
      "media-communication": "Media & Mass Communication",
      architecture: "Architecture",
    };

    return courseTitles[courseId] || "Colleges";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            Top Colleges for {getCourseTitle(courseId || "")}
          </h1>
          <Button
            variant="outline"
            onClick={() => navigate("/courses")}
            className="hover:bg-primary hover:text-white"
          >
            Back to Courses
          </Button>
        </div>

        {colleges.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colleges.map((college) => (
              <CollegeCard key={college.id} {...college} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">
              No colleges found for this course
            </h2>
            <p className="text-gray-600 mb-6">
              We're currently updating our database. Please check back later or
              explore other courses.
            </p>
            <Button
              onClick={() => navigate("/courses")}
              className="bg-primary hover:bg-primary/90"
            >
              Explore Other Courses
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollegeListingPage;
