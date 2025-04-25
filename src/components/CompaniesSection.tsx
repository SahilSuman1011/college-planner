import React from "react";

interface Company {
  id: string;
  name: string;
  logo: string;
  hires: number;
}

interface CompaniesSectionProps {
  collegeId?: string;
  companies?: Company[];
}

const CompaniesSection = ({
  collegeId = "iit-delhi",
  companies = [
    {
      id: "1",
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png",
      hires: 45,
    },
    {
      id: "2",
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/800px-Microsoft_logo.svg.png",
      hires: 38,
    },
    {
      id: "3",
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      hires: 42,
    },
    {
      id: "4",
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png",
      hires: 25,
    },
    {
      id: "5",
      name: "Facebook",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png",
      hires: 30,
    },
    {
      id: "6",
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png",
      hires: 22,
    },
    {
      id: "7",
      name: "Intel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/800px-Intel_logo_%282006-2020%29.svg.png",
      hires: 18,
    },
    {
      id: "8",
      name: "Adobe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/800px-Adobe_Illustrator_CC_icon.svg.png",
      hires: 15,
    },
  ],
}: CompaniesSectionProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Top Recruiting Companies</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {companies.map((company) => (
          <div
            key={company.id}
            className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="h-16 flex items-center justify-center mb-3">
              <img
                src={company.logo}
                alt={company.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <h3 className="font-medium text-center">{company.name}</h3>
            <p className="text-sm text-gray-500 text-center">
              {company.hires} students hired
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Average Package:</span> ₹18.5 LPA
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Highest Package:</span> ₹1.2 Cr
        </p>
      </div>
    </div>
  );
};

export default CompaniesSection;
