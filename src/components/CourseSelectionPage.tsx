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
    <div className="min-h-screen bg-gray-50 py-10 px-4">
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
                d="M46.8 30.6l-2.5-.4c-.2-.8-.5-1.5-.9-2.2l1.5-2c.3-.4.2-.9-.1-1.2l-2.4-2.4c-.3-.3-.8-.4-1.2-.1l-2 1.5c-.7-.4-1.4-.7-2.2-.9l-.4-2.5c-.1-.4-.5-.7-.9-.7h-3.4c-.4 0-.8.3-.9.7l-.4 2.5c-.8.2-1.5.5-2.2.9l-2-1.5c-.4-.3-.9-.2-1.2.1l-2.4 2.4c-.3.3-.4.8-.1 1.2l1.5 2c-.4.7-.7 1.4-.9 2.2l-2.5.4c-.4.1-.7.5-.7.9v3.4c0 .4.3.8.7.9l2.5.4c.2.8.5 1.5.9 2.2l-1.5 2c-.3.4-.2.9.1 1.2l2.4 2.4c.3.3.8.4 1.2.1l2-1.5c.7.4 1.4.7 2.2.9l.4 2.5c.1.4.5.7.9.7h3.4c.4 0 .8-.3.9-.7l.4-2.5c.8-.2 1.5-.5 2.2-.9l2 1.5c.4.3.9.2 1.2-.1l2.4-2.4c.3-.3.4-.8.1-1.2l-1.5-2c.4-.7.7-1.4.9-2.2l2.5-.4c.4-.1.7-.5.7-.9v-3.4c0-.4-.3-.8-.7-.9zM40 38c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
                fill="#0369A1"  
                />
                <path
                d="M42 48h-4c-.6 0-1 .4-1 1v3h-2v-2c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-5c0-.6-.4-1-1-1z"
                fill="#22C55E"
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
                  fill="#22C55E"
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
                <path d="M36 52H44V54H36V52Z" fill="#22C55E" />
                <path d="M32 52H34V54H32V52Z" fill="#22C55E" />
                <path d="M46 52H48V54H46V52Z" fill="#22C55E" />
                <path
                  d="M40 38C41.66 38 43 36.66 43 35C43 33.34 41.66 32 40 32C38.34 32 37 33.34 37 35C37 36.66 38.34 38 40 38Z"
                  fill="#22C55E"
                />
                <path
                  d="M44 40H36C34.9 40 34 40.9 34 42V44H46V42C46 40.9 45.1 40 44 40Z"
                  fill="#22C55E"
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
                <path d="M38 48H42V56H38V48Z" fill="#22C55E" />
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
                  fill="#22C55E"
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
                  fill="#22C55E"
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
            fill="#22C55E"
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
            fill="#22C55E"
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
          d="M48 32C46.9 32 46 32.9 46 34C46 34.4 46.1 34.7 46.3 35L40 41.3L38.7 40C39.5 38.9 40 37.5 40 36C40 32.7 37.3 30 34 30C30.7 30 28 32.7 28 36C28 39.3 30.7 42 34 42C35.5 42 36.9 41.5 38 40.7L39.3 42L33 48.3C32.7 48.1 32.4 48 32 48C30.9 48 30 48.9 30 50C30 51.1 30.9 52 32 52C33.1 52 34 51.1 34 50C34 49.6 33.9 49.3 33.7 49L40 42.7L46.3 49C46.1 49.3 46 49.6 46 50C46 51.1 46.9 52 48 52C49.1 52 50 51.1 50 50C50 48.9 49.1 48 48 48C47.6 48 47.3 48.1 47 48.3L40.7 42L47 35.7C47.3 35.9 47.6 36 48 36C49.1 36 50 35.1 50 34C50 32.9 49.1 32 48 32ZM34 40C31.8 40 30 38.2 30 36C30 33.8 31.8 32 34 32C36.2 32 38 33.8 38 36C38 38.2 36.2 40 34 40Z"
          fill="#22C55E"
              />
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
          d="M40 26C35.5 26 32 29.5 32 34C32 37.1 33.9 39.7 36.5 40.8C37.4 41.2 38 42.1 38 43.1V46C38 47.1 38.9 48 40 48C41.1 48 42 47.1 42 46V43.1C42 42.1 42.6 41.2 43.5 40.8C46.1 39.7 48 37.1 48 34C48 29.5 44.5 26 40 26ZM43 38.3C41.8 39 41 40.2 41 41.5V46C41 46.6 40.6 47 40 47C39.4 47 39 46.6 39 46V41.5C39 40.2 38.2 39 37 38.3C35 37.4 34 35.8 34 34C34 30.7 36.7 28 40 28C43.3 28 46 30.7 46 34C46 35.8 45 37.4 43 38.3Z"
          fill="#0369A1"
              />
              <path
          d="M42 34C42 35.1 41.1 36 40 36C38.9 36 38 35.1 38 34C38 32.9 38.9 32 40 32C41.1 32 42 32.9 42 34Z"
          fill="#DC2626"
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
              d="M42 26H38V36L28 51.6V54H52V51.6L42 36V26Z"
              fill="#22C55E"
              />
              <path
              d="M32 52H48L40 40L32 52Z" 
              fill="#0369A1"
              />
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
            d="M52 44h-4v-8h-8v8h-4v-6h-8v10h28v-4h-4zm-10-6h4v6h-4v-6z"
            fill="#0369A1"
          />
          <path
            d="M36 42c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2h8v-2z"
            fill="#22C55E"
          />
          <path
            d="M46 42c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2h8v-2z"
            fill="#22C55E"
          />
          <circle cx="32" cy="48" r="2" fill="#0369A1" />
          <circle cx="48" cy="48" r="2" fill="#0369A1" />
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
                d="M40.5 26C32.77 26 26.5 32.27 26.5 40C26.5 47.73 32.77 54 40.5 54C48.23 54 54.5 47.73 54.5 40C54.5 32.27 48.23 26 40.5 26ZM40.5 52C33.87 52 28.5 46.63 28.5 40C28.5 33.37 33.87 28 40.5 28C47.13 28 52.5 33.37 52.5 40C52.5 46.63 47.13 52 40.5 52Z"
                fill="#0369A1"
              />
              <path
                d="M41.5 34H39.5V38H35.5V42H39.5V46H41.5V42H45.5V38H41.5V34Z"
                fill="#22C55E"
              />
              <path
                d="M40.5 32C39.4 32 38.5 32.9 38.5 34C38.5 35.1 39.4 36 40.5 36C41.6 36 42.5 35.1 42.5 34C42.5 32.9 41.6 32 40.5 32Z"
                fill="#0369A1"
              />
              <path
                d="M40.5 44C39.4 44 38.5 44.9 38.5 46C38.5 47.1 39.4 48 40.5 48C41.6 48 42.5 47.1 42.5 46C42.5 44.9 41.6 44 40.5 44Z"
                fill="#0369A1"
              />
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
                d="M50 36H48C48 32.13 44.87 29 41 29V27C41 26.45 40.55 26 40 26C39.45 26 39 26.45 39 27V29C35.13 29 32 32.13 32 36H30C29.45 36 29 36.45 29 37C29 37.55 29.45 38 30 38H50C50.55 38 51 37.55 51 37C51 36.45 50.55 36 50 36Z"
                fill="#0369A1"
              />
              <path
                d="M48 40H32V48C32 50.21 33.79 52 36 52H44C46.21 52 48 50.21 48 48V40Z"
                fill="#22C55E"
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
              <path
                d="M48 32H32C30.9 32 30 32.9 30 34V46C30 47.1 30.9 48 32 48H48C49.1 48 50 47.1 50 46V34C50 32.9 49.1 32 48 32ZM48 46H32V34H48V46Z"
                fill="#0369A1" 
              />
              <path
                d="M35 38H45V42H35V38Z"
                fill="#22C55E"
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
              <path
                d="M42 38H40V36C40 34.9 39.1 34 38 34C36.9 34 36 34.9 36 36V38H34C32.9 38 32 38.9 32 40C32 41.1 32.9 42 34 42H36V44C36 45.1 36.9 46 38 46C39.1 46 40 45.1 40 44V42H42C43.1 42 44 41.1 44 40C44 38.9 43.1 38 42 38Z"
                fill="#22C55E"
              />
              <path 
                d="M40 26C32.27 26 26 32.27 26 40C26 47.73 32.27 54 40 54C47.73 54 54 47.73 54 40C54 32.27 47.73 26 40 26ZM40 52C33.37 52 28 46.63 28 40C28 33.37 33.37 28 40 28C46.63 28 52 33.37 52 40C52 46.63 46.63 52 40 52Z"
                fill="#0369A1"
              />
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
                d="M46 34L43 37H37L34 34H28C26.9 34 26 34.9 26 36V48C26 49.1 26.9 50 28 50H52C53.1 50 54 49.1 54 48V36C54 34.9 53.1 34 52 34H46Z"
                fill="#0369A1"
              />
              <path
                d="M40 46C42.2091 46 44 44.2091 44 42C44 39.7909 42.2091 38 40 38C37.7909 38 36 39.7909 36 42C36 44.2091 37.7909 46 40 46Z"
                fill="#22C55E"
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
                d="M48 32H32C30.9 32 30 32.9 30 34V50C30 51.1 30.9 52 32 52H48C49.1 52 50 51.1 50 50V34C50 32.9 49.1 32 48 32Z"
                fill="#0369A1"
              />
              <path
                d="M34 36H38V40H34V36Z"
                fill="#22C55E"
              />
              <path
                d="M42 36H46V40H42V36Z"
                fill="#22C55E"
              />
              <path
                d="M34 44H38V48H34V44Z"
                fill="#22C55E"
              />
              <path
                d="M42 44H46V48H42V44Z"
                fill="#22C55E"
              />
              </svg>
            }
            />

            <CourseCard
            id="mbbs"
            title="MBBS"
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
              d="M48 30H46V28C46 26.9 45.1 26 44 26H42C40.9 26 40 26.9 40 28V30H38C36.9 30 36 30.9 36 32V34H34C32.9 34 32 34.9 32 36V52C32 53.1 32.9 54 34 54H46C47.1 54 48 53.1 48 52V36C48 34.9 47.1 34 46 34H44V32H48V30ZM46 52H34V36H36V34H38V32H42V34H44V36H46V52Z"
              fill="#0369A1"
              />
              <path
              d="M42 40H40V38H38V40H36V42H38V44H40V42H42V40Z"
              fill="#22C55E"
              />
              </svg>
            }
            />

            <CourseCard
            id="veter"
            title="Veterinary Science"
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
                d="M48 36h-4v-4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v4h-4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V38c0-1.1-.9-2-2-2zm-8-4h4v4h-4v-4zm8 18H32V38h4v2c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-2h4v12z"
                fill="#0369A1"
              />
              <circle cx="36" cy="42" r="2" fill="#22C55E" />
              <circle cx="44" cy="42" r="2" fill="#22C55E" />
              <path
                d="M42 45c0-1.1-.9-2-2-2s-2 .9-2 2h4z"
                fill="#22C55E"
              />
              </svg>
            }
            />

          <CourseCard
            id="tt"
            title="Travel & Tourism"
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
                d="M52 37.2L44 32V28C44 26.9 43.1 26 42 26H38C36.9 26 36 26.9 36 28V32L28 37.2C27.4 37.6 27 38.3 27 39V41C27 41.6 27.6 42 28.2 41.9L36 40V44L33 45.7C32.4 46 32 46.6 32 47.3V49C32 49.6 32.6 50 33.2 49.9L40 48L46.8 49.9C47.4 50 48 49.6 48 49V47.3C48 46.6 47.6 46 47 45.7L44 44V40L51.8 41.9C52.4 42 53 41.6 53 41V39C53 38.3 52.6 37.6 52 37.2Z"
                fill="#0369A1"
              />
              </svg>
            }
            />

        </div>
      </div>
     
    </div>
  );
};

export default CourseSelectionPage;
