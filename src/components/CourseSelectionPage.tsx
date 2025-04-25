import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

interface CourseCardProps {
  title: string;
  icon: React.ReactNode;
  id: string;
}

const BackToHomeButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate('/')}
      className="absolute top-4 right-4 hover:bg-primary hover:text-white mb-4"
      variant="ghost"
    >
      ← Back to Home
    </Button>
  );
};

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

const CourseSelectionPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <BackToHomeButton />
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Select Your Study Goal
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {/* First row */}
          <CourseCard
            id="engineering"
            title="Engineering"
            icon={
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="#F0F9FF" />
                <path
                  d="M40 25C36.13 25 33 28.13 33 32V35H30C28.9 35 28 35.9 28 37V53C28 54.1 28.9 55 30 55H50C51.1 55 52 54.1 52 53V37C52 35.9 51.1 35 50 35H47V32C47 28.13 43.87 25 40 25ZM35 32C35 29.24 37.24 27 40 27C42.76 27 45 29.24 45 32V35H35V32Z"
                  fill="#DC2626"
                />
              </svg>
            }
          />
          <CourseCard
            id="mba-pgdm"
            title="MBA PGDM"
            icon={
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="#F0F9FF" />
                <path
                  d="M52 32H48V28C48 26.9 47.1 26 46 26H34C32.9 26 32 26.9 32 28V32H28C26.9 32 26 32.9 26 34V52C26 53.1 26.9 54 28 54H52C53.1 54 54 53.1 54 52V34C54 32.9 53.1 32 52 32ZM34 28H46V32H34V28ZM52 52H28V34H32H48H52V52Z"
                  fill="#0369A1"
                />
                <path
                  d="M44 42C44 39.79 42.21 38 40 38C37.79 38 36 39.79 36 42C36 44.21 37.79 46 40 46C42.21 46 44 44.21 44 42Z"
                  fill="#DC2626"
                />
              </svg>
            }
          />
          <CourseCard
            id="computer-applications"
            title="Computer Applications"
            icon={
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="#F0F9FF" />
                <path
                  d="M52 28H28C26.9 28 26 28.9 26 30V46C26 47.1 26.9 48 28 48H52C53.1 48 54 47.1 54 46V30C54 28.9 53.1 28 52 28ZM52 46H28V30H52V46Z"
                  fill="#0369A1"
                />
                <path d="M36 52H44V54H36V52Z" fill="#0369A1" />
                <path d="M32 52H34V54H32V52Z" fill="#0369A1" />
                <path d="M46 52H48V54H46V52Z" fill="#0369A1" />
                <path
                  d="M40 38C41.66 38 43 36.66 43 35C43 33.34 41.66 32 40 32C38.34 32 37 33.34 37 35C37 36.66 38.34 38 40 38Z"
                  fill="#DC2626"
                />
                <path
                  d="M44 40H36C34.9 40 34 40.9 34 42V44H46V42C46 40.9 45.1 40 44 40Z"
                  fill="#DC2626"
                />
              </svg>
            }
          />
          <CourseCard
            id="law"
            title="Law"
            icon={
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="#F0F9FF" />
                <path
                  d="M50 42H48V28H50C51.1 28 52 27.1 52 26C52 24.9 51.1 24 50 24H30C28.9 24 28 24.9 28 26C28 27.1 28.9 28 30 28H32V42H30C28.9 42 28 42.9 28 44C28 45.1 28.9 46 30 46H50C51.1 46 52 45.1 52 44C52 42.9 51.1 42 50 42ZM44 42H36V28H44V42Z"
                  fill="#0369A1"
                />
                <path d="M38 48H42V56H38V48Z" fill="#0369A1" />
              </svg>
            }
          />
          <CourseCard
            id="management"
            title="Management"
            icon={
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="#F0F9FF" />
                <path
                  d="M40 26C32.27 26 26 32.27 26 40C26 47.73 32.27 54 40 54C47.73 54 54 47.73 54 40C54 32.27 47.73 26 40 26ZM40 52C33.37 52 28 46.63 28 40C28 33.37 33.37 28 40 28C46.63 28 52 33.37 52 40C52 46.63 46.63 52 40 52Z"
                  fill="#0369A1"
                />
                <path
                  d="M42 34H38V40H32V44H38V50H42V44H48V40H42V34Z"
                  fill="#0369A1"
                />
              </svg>
            }
          />
          <CourseCard
            id="design"
            title="Design"
            icon={
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="#F0F9FF" />
                <path
                  d="M40 26C32.27 26 26 32.27 26 40C26 47.73 32.27 54 40 54C47.73 54 54 47.73 54 40C54 32.27 47.73 26 40 26ZM40 52C33.37 52 28 46.63 28 40C28 33.37 33.37 28 40 28C46.63 28 52 33.37 52 40C52 46.63 46.63 52 40 52Z"
                  fill="#0369A1"
                />
                <path
                  d="M44 36C44 34.9 43.1 34 42 34H38C36.9 34 36 34.9 36 36V44C36 45.1 36.9 46 38 46H42C43.1 46 44 45.1 44 44V36Z"
                  fill="#DC2626"
                />
              </svg>
            }
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {/* Second row */}
          <CourseCard
            id="pharmacy"
            title="Pharmacy"
            icon={
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="#F0F9FF" />
                <path
                  d="M48 32H44V28H36V32H32C30.9 32 30 32.9 30 34V52C30 53.1 30.9 54 32 54H48C49.1 54 50 53.1 50 52V34C50 32.9 49.1 32 48 32ZM38 30H42V32H38V30ZM48 52H32V34H48V52Z"
                  fill="#0369A1"
                />
                <path
                  d="M42 42H40V38H38V42H34V44H38V48H40V44H44V42H42Z"
                  fill="#DC2626"
                />
              </svg>
            }
          />
          <CourseCard
            id="nursing"
            title="Nursing"
            icon={
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="#F0F9FF" />
                <path
                  d="M40 26C32.27 26 26 32.27 26 40C26 47.73 32.27 54 40 54C47.73 54 54 47.73 54 40C54 32.27 47.73 26 40 26ZM40 52C33.37 52 28 46.63 28 40C28 33.37 33.37 28 40 28C46.63 28 52 33.37 52 40C52 46.63 46.63 52 40 52Z"
                  fill="#0369A1"
                />
                <path
                  d="M42 38H40V36C40 34.9 39.1 34 38 34C36.9 34 36 34.9 36 36V38H34C32.9 38 32 38.9 32 40C32 41.1 32.9 42 34 42H36V44C36 45.1 36.9 46 38 46C39.1 46 40 45.1 40 44V42H42C43.1 42 44 41.1 44 40C44 38.9 43.1 38 42 38Z"
                  fill="#DC2626"
                />
              </svg>
            }
          />
          <CourseCard
            id="arts-humanities"
            title="Arts and Humanities"
            icon={
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="#F0F9FF" />
                <path
                  d="M46 28H34C32.9 28 32 28.9 32 30V50C32 51.1 32.9 52 34 52H46C47.1 52 48 51.1 48 50V30C48 28.9 47.1 28 46 28ZM46 50H34V30H46V50Z"
                  fill="#0369A1"
                />
                <path d="M38 44H42V48H38V44Z" fill="#DC2626" />
                <path d="M38 38H42V42H38V38Z" fill="#DC2626" />
                <path d="M38 32H42V36H38V32Z" fill="#DC2626" />
              </svg>
            }
          />
          <CourseCard
            id="dental"
            title="Dental"
            icon={
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="#F0F9FF" />
                <path
                  d="M40 26C32.27 26 26 32.27 26 40C26 47.73 32.27 54 40 54C47.73 54 54 47.73 54 40C54 32.27 47.73 26 40 26ZM40 52C33.37 52 28 46.63 28 40C28 33.37 33.37 28 40 28C46.63 28 52 33.37 52 40C52 46.63 46.63 52 40 52Z"
                  fill="#0369A1"
                />
                <path
                  d="M40 32C36.13 32 33 35.13 33 39C33 41.97 34.93 44.44 37.65 45.45C38.56 45.81 39.26 46.54 39.26 47.22C39.26 47.98 38.99 48.07 38.25 48.07C37.57 48.07 36.81 47.98 36.13 47.8C35.53 47.62 34.93 47.98 34.93 48.61V49.25C34.93 49.7 35.26 50.06 35.71 50.15C36.54 50.33 37.39 50.42 38.25 50.42C40.69 50.42 41.61 49.16 41.61 47.22C41.61 44.89 39.95 43.72 38.87 43.27C37.3 42.63 35.35 41.88 35.35 39C35.35 36.39 37.39 34.35 40 34.35C40.68 34.35 41.35 34.44 42.03 34.62C42.63 34.8 43.23 34.44 43.23 33.81V33.17C43.23 32.72 42.9 32.36 42.45 32.27C41.62 32.09 40.77 32 40 32Z"
                  fill="#0369A1"
                />
              </svg>
            }
          />
          <CourseCard
            id="science"
            title="Science"
            icon={
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="#F0F9FF" />
                <path
                  d="M44 26H36V30H32V34H36V38H32V42H36V46H32V50H36V54H44V50H48V46H44V42H48V38H44V34H48V30H44V26ZM42 52H38V48H42V52ZM42 44H38V40H42V44ZM42 36H38V32H42V36Z"
                  fill="#0369A1"
                />
                <circle cx="40" cy="34" r="2" fill="#DC2626" />
                <circle cx="40" cy="42" r="2" fill="#DC2626" />
                <circle cx="40" cy="50" r="2" fill="#DC2626" />
              </svg>
            }
          />
          <CourseCard
            id="agriculture"
            title="Agriculture"
            icon={
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="#F0F9FF" />
                <path
                  d="M52 42V26H36V42H28V54H52V42ZM38 28H50V40H38V28ZM50 52H30V44H50V52Z"
                  fill="#0369A1"
                />
                <path d="M42 32H46V36H42V32Z" fill="#DC2626" />
                <path d="M42 48H46V50H42V48Z" fill="#DC2626" />
                <path d="M34 48H38V50H34V48Z" fill="#DC2626" />
              </svg>
            }
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {/* Third row */}
          <CourseCard
            id="commerce-banking"
            title="Commerce & Banking"
            icon={
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="#F0F9FF" />
                <path
                  d="M52 32H28C26.9 32 26 32.9 26 34V46C26 47.1 26.9 48 28 48H52C53.1 48 54 47.1 54 46V34C54 32.9 53.1 32 52 32ZM52 46H28V34H52V46Z"
                  fill="#0369A1"
                />
                <path d="M30 42H32V44H30V42Z" fill="#DC2626" />
                <path d="M34 42H36V44H34V42Z" fill="#DC2626" />
                <path d="M38 42H40V44H38V42Z" fill="#DC2626" />
                <path d="M42 42H44V44H42V42Z" fill="#DC2626" />
                <path d="M46 42H48V44H46V42Z" fill="#DC2626" />
                <path d="M30 36H48V40H30V36Z" fill="#0369A1" />
              </svg>
            }
          />
          <CourseCard
            id="hotel-management"
            title="Hotel Management"
            icon={
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="#F0F9FF" />
                <path
                  d="M48 30H32C30.9 30 30 30.9 30 32V48C30 49.1 30.9 50 32 50H48C49.1 50 50 49.1 50 48V32C50 30.9 49.1 30 48 30ZM48 48H32V32H48V48Z"
                  fill="#0369A1"
                />
                <path
                  d="M36 38C37.1 38 38 37.1 38 36C38 34.9 37.1 34 36 34C34.9 34 34 34.9 34 36C34 37.1 34.9 38 36 38Z"
                  fill="#DC2626"
                />
                <path
                  d="M44 38C45.1 38 46 37.1 46 36C46 34.9 45.1 34 44 34C42.9 34 42 34.9 42 36C42 37.1 42.9 38 44 38Z"
                  fill="#DC2626"
                />
                <path
                  d="M36 46C37.1 46 38 45.1 38 44C38 42.9 37.1 42 36 42C34.9 42 34 42.9 34 44C34 45.1 34.9 46 36 46Z"
                  fill="#DC2626"
                />
                <path
                  d="M44 46C45.1 46 46 45.1 46 44C46 42.9 45.1 42 44 42C42.9 42 42 42.9 42 44C42 45.1 42.9 46 44 46Z"
                  fill="#DC2626"
                />
              </svg>
            }
          />
          <CourseCard
            id="education"
            title="Education"
            icon={
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="#F0F9FF" />
                <path d="M40 26L26 34L40 42L54 34L40 26Z" fill="#0369A1" />
                <path
                  d="M32 38.18V46C32 48.21 35.58 50 40 50C44.42 50 48 48.21 48 46V38.18L40 42.82L32 38.18Z"
                  fill="#0369A1"
                />
              </svg>
            }
          />
          <CourseCard
            id="paramedical"
            title="Paramedical"
            icon={
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="#F0F9FF" />
                <path d="M40 26L26 34V38H54V34L40 26Z" fill="#0369A1" />
                <path d="M48 42H32V54H48V42Z" fill="#0369A1" />
                <path d="M42 46H38V50H42V46Z" fill="#DC2626" />
              </svg>
            }
          />
          <CourseCard
            id="media-communication"
            title="Media & Mass Communication"
            icon={
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="#F0F9FF" />
                <path
                  d="M48 30H32C30.9 30 30 30.9 30 32V48C30 49.1 30.9 50 32 50H48C49.1 50 50 49.1 50 48V32C50 30.9 49.1 30 48 30ZM48 48H32V32H48V48Z"
                  fill="#0369A1"
                />
                <path
                  d="M40 44C42.21 44 44 42.21 44 40C44 37.79 42.21 36 40 36C37.79 36 36 37.79 36 40C36 42.21 37.79 44 40 44Z"
                  fill="#DC2626"
                />
              </svg>
            }
          />
          <CourseCard
            id="architecture"
            title="Architecture"
            icon={
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="#F0F9FF" />
                <path
                  d="M50 30H30C28.9 30 28 30.9 28 32V48C28 49.1 28.9 50 30 50H50C51.1 50 52 49.1 52 48V32C52 30.9 51.1 30 50 30ZM50 48H30V32H50V48Z"
                  fill="#0369A1"
                />
                <path d="M40 34L34 44H46L40 34Z" fill="#DC2626" />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CourseSelectionPage;
