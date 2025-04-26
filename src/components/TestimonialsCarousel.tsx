import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface Review {
  id: string;
  name: string;
  avatar: string;
  date?: string;
  rating: number;
  comment: string;
  course: string;
  university: string;
  initials?: string;
}

interface ReviewsSectionProps {
  collegeId?: string;
  reviews?: Review[];
  title?: string;
}

const ReviewsSection = ({
  collegeId = "iit-delhi",
  title = "Latest College Reviews",
  reviews = [
    {
      id: "1",
      name: "Tanmay Awasthi",
      initials: "TA",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=tanmay",
      rating: 4,
      comment:
        "My overall experience of my campus is good. Lots of events are done in university always, slots of programs are also running. The collection of boo",
      course: "Engineering Student",
      university:
        "Indian Institute of Technology Delhi - IIT Delhi",
    },
    {
      id: "2",
      name: "Raghav Anand",
      initials: "RA",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=raghav",
      rating: 5,
      comment:
        "Placements are good, and more than 90 percent of students were placed. The highest salary package offered is 75 lakhs per annum, and the lowest salary",
      course: "Engineering Student",
      university: "Indian Institute of Technology Delhi - IIT Delhi",
    },
    {
      id: "3",
      name: "Ritika Irani",
      initials: "RI",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ritika",
      rating: 5,
      comment:
        "SHUATS Prayagraj is so good. The teachers are so kind and helpful towards our goals. I really appreciate the teachers. They are encouraging us to do b",
      course: "Finance Student",
      university:
        "Indian Institute of Management - IIM Ahmedabad",
    },
  ],
}: ReviewsSectionProps) => {
  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">{title}</h2>
          <Button variant="link" className="text-primary flex items-center">
            View All <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-primary mb-4">
                {review.university}
              </h3>
              <p className="text-gray-700 mb-6">"{review.comment}"</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mr-3">
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-medium">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.course}</p>
                  </div>
                </div>
                {renderStars(review.rating)}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-medium mb-8">
            Trusted by the India's best
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
              alt="Amazon"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/AMD_Logo.svg/2560px-AMD_Logo.svg.png"
              alt="AMD"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cisco_logo.svg/1280px-Cisco_logo.svg.png"
              alt="Cisco"
              className="h-8"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbcPGVoFoAQ1kdwbiQRsHem99eTMUiysMRDA&s"
              alt="Dropcam"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Logitech_logo.svg/2560px-Logitech_logo.svg.png"
              alt="Logitech"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2560px-Spotify_logo_without_text.svg.png"
              alt="Spotify"
              className="h-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;