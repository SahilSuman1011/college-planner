import React from "react";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

interface Review {
  id: string;
  name: string;
  avatar: string;
  date: string;
  rating: number;
  comment: string;
  course: string;
}

interface ReviewsSectionProps {
  collegeId?: string;
  reviews?: Review[];
}

const ReviewsSection = ({
  collegeId = "jnu-jaipur",
  reviews = collegeId === "jnu-jaipur" ? [
    {
      id: "1",
      name: "Raj Kumar",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=raj",
      date: "May 15, 2023",
      rating: 5,
      comment:
        "JNU Jaipur provided me with an excellent foundation in engineering. The professors are highly knowledgeable and the research facilities are world-class.",
      course: "B.Tech Computer Science",
    },
    {
      id: "2",
      name: "Priya Singh",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya",
      date: "April 20, 2023",
      rating: 4.5,
      comment:
        "The campus life is vibrant and the technical clubs offer great opportunities for practical learning. The placement cell does an excellent job.",
      course: "B.Tech Electrical Engineering",
    },
    {
      id: "3",
      name: "Amit Sharma",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=amit",
      date: "March 10, 2023",
      rating: 4.5,
      comment:
        "The academic environment is challenging but rewarding. The exposure to cutting-edge technology and research opportunities is incredible.",
      course: "B.Tech Mechanical Engineering",
    },
  ] : collegeId === "srisai-palampur" ? [
    {
      id: "1",
      name: "Sanjay Patel",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sanjay",
      date: "June 15, 2023",
      rating: 5,
      comment:
        "SSU Palampur offers world-class Engineering education. The clinical exposure and research opportunities are exceptional. The faculty is outstanding.",
      course: "Electrical Engineering",
    },
    {
      id: "2",
      name: "Meera Reddy",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=meera",
      date: "May 25, 2023",
      rating: 4.5,
      comment:
        "The practical training and patient interaction at AIIMS Delhi is unmatched. The hospital provides exposure to diverse medical cases.",
      course: "Agriculture",
    },
    {
      id: "3",
      name: "Arun Kumar",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=arun",
      date: "April 20, 2023",
      rating: 5,
      comment:
        "The research facilities and education infrastructure are top-notch. The academic environment pushes you to excel in research practice.",
      course: "Research",
    },
  ] : [
    {
      id: "1",
      name: "Anita Desai",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=anita",
      date: "June 10, 2023",
      rating: 5,
      comment:
        "IIM Ahmedabad has been a life-changing experience. The case study method of teaching and rigorous curriculum prepared me well for the corporate world.",
      course: "MBA General Management",
    },
    {
      id: "2",
      name: "Rajesh Mehta",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rajesh",
      date: "May 20, 2023",
      rating: 4.5,
      comment:
        "The academic rigor at IIMA is unparalleled. The campus culture promotes leadership and innovation. The alumni network is incredibly strong.",
      course: "MBA Marketing",
    },
    {
      id: "3",
      name: "Sneha Gupta",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sneha",
      date: "April 15, 2023",
      rating: 4.5,
      comment:
        "The learning environment at IIMA is intense but rewarding. The exposure to real-world business problems through case studies is invaluable.",
      course: "MBA Finance",
    },
  ],
}: ReviewsSectionProps) => {
  // Rest of the component remains the same
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className="h-4 w-4 text-yellow-500"
          fill="#EAB308"
        />,
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="h-4 w-4 text-gray-300" fill="#D1D5DB" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="h-4 w-4 text-yellow-500" fill="#EAB308" />
          </div>
        </div>,
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star
          key={`empty-${i}`}
          className="h-4 w-4 text-gray-300"
          fill="#D1D5DB"
        />,
      );
    }

    return stars;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Student Reviews</h2>

      <div className="space-y-6">
        {reviews.map((review) => (
          <Card key={review.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="h-12 w-12 rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{review.name}</h3>
                      <p className="text-sm text-gray-500">{review.course}</p>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex mt-1 mb-3">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
