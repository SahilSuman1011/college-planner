import React, { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface UniversityCardProps {
  id: string;
  name: string;
  location: string;
  rating: number;
  image: string;
  courses: string[];
}
const UniversityCard = (
  { id, name, location, rating, image, courses }: UniversityCardProps = {
    id: "default-university",
    name: "University Name",
    location: "Location, Country",
    rating: 4.5,
    image:
      "https://www.sikareducationhub.in/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-28-at-16.09.04.jpeg",
    courses: ["Course 1", "Course 2", "Course 3"],
  },
) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/college/${id}`);
  };

  return (
    <Card className="min-w-[calc(100%-1rem)] md:min-w-[calc(33.333%-1rem)] flex flex-col h-full transition-all duration-300 hover:shadow-lg bg-white">
      <div
        className="h-40 w-full bg-cover bg-center"
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
        <CardDescription className="text-sm text-gray-600">
          {location}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-1">
          {courses.slice(0, 3).map((course, index) => (
            <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
              {course}
            </span>
          ))}
          {courses.length > 3 && (
            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
              +{courses.length - 3} more
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleClick}
          variant="outline"
          className="w-full hover:bg-primary hover:text-white"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

const TopUniversities = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const universities = [
    {
      id: "jnu-jaipur",
      name: "Jaipur National University",
      location: "Jaipur, India",
      rating: 4.8,
      image:
        "https://www.jnujaipur.ac.in/Uploads/image/522imguf_career.webp",
      courses: ["Engineering", "Technology", "Research"],
    },
    {
      id: "srisai-palampur",
      name: "Sri Sai University",
      location: "Palampur, India",
      rating: 4.9,
      image:
        "https://www.srisaiuniversity.org/downloads/Block-A.jpg",
      courses: ["MBA", "Engineering", "Technology"],
    },
    {
      id: "aiims-delhi",
      name: "AIIMS Delhi",
      location: "New Delhi, India",
      rating: 4.9,
      image:
        "https://medicaldialogues.in/h-upload/2022/10/10/1500x900_187486-aiims-delhi.webp",
      courses: ["Medicine", "Nursing", "Paramedical"],
    },
    {
      id: "jnu",
      name: "JNU",
      location: "New Delhi, India",
      rating: 4.7,
      image:
        "https://images.indianexpress.com/2022/09/jnu.jpeg",
      courses: ["Arts", "Humanities", "Social Sciences"],
    },
    {
      id: "du",
      name: "Delhi University",
      location: "Delhi, India",
      rating: 4.6,
      image:
        "https://cdn.britannica.com/68/263768-050-69EEA7B7/Students-at-Delhi-University-north-campus-on-the-second-day-of-admissions-for-2021-22-on-October-5-2021-in-New-Delhi-India-University-of-Delhi.jpg",
      courses: ["Arts", "Science", "Commerce"],
    },
    {
      id: "bits-pilani",
      name: "BITS Pilani",
      location: "Pilani, Rajasthan",
      rating: 4.7,
      image:
        "https://www.catalyser.in/public/img/blog/bitcblog1.jpg",
      courses: ["Engineering", "Pharmacy", "Management"],
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 330; // Card width + gap
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50 relative">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl font-bold mb-4">
            Top Universities & Colleges
          </h2>
          <p className="text-gray-600 text-2xl mx-auto font-normal">
            Explore the best educational institutions across India to find your
            perfect fit for higher education.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 -ml-4"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {universities.map((university, index) => (
              <UniversityCard key={index} {...university} />
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 -mr-4"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="text-center mt-8">
          <Button
            onClick={() => (window.location.href = "/AllColleges")}
            className="bg-primary bg-blue-500  text-white"
          >
            Explore All Colleges
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopUniversities;
