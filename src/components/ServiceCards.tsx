import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  GraduationCap,
  Briefcase,
  Award,
  Users,
  Globe,
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = (
  { title, description, icon }: ServiceCardProps = {
    title: "Service Title",
    description: "Description of the service offered to students.",
    icon: <BookOpen className="h-10 w-10 text-primary" />,
  },
) => {
  return (
    <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg bg-white">
      <CardHeader className="pb-2">
        <div className="mb-4">{icon}</div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full hover:bg-primary hover:text-white"
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

const ServiceCards = () => {
  const services = [
    {
      title: "Career Counseling",
      description:
        "Personalized guidance to help students identify their strengths and choose the right career path.",
      icon: <Briefcase className="h-10 w-10 text-primary" />,
    },
    {
      title: "College Admission",
      description:
        "Comprehensive support for college applications, entrance exams, and admission processes.",
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
    },
    {
      title: "Scholarship Guidance",
      description:
        "Expert advice on finding and applying for scholarships to fund your education.",
      icon: <Award className="h-10 w-10 text-primary" />,
    },
    {
      title: "Study Abroad",
      description:
        "Complete assistance for students looking to pursue higher education in foreign countries.",
      icon: <Globe className="h-10 w-10 text-primary" />,
    },
    {
      title: "Skill Development",
      description:
        "Programs designed to enhance essential skills required for academic and professional success.",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
    },
    {
      title: "Mentorship Programs",
      description:
        "Connect with industry professionals and academic experts for guidance and networking.",
      icon: <Users className="h-10 w-10 text-primary" />,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive educational planning services to help
            students navigate their academic journey and achieve their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
