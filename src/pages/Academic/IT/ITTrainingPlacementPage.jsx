import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Define the sub-navigation tabs for the IT department
const itDepartmentTabs = [
    { name: "DEPT Profile", path: "/academics/information-technology" },
    { name: "Vision-Mission", path: "/academics/information-technology/vision-mission" },
    { name: "Programmes", path: "/academics/information-technology/programmes" },
    { name: "Faculty Profile", path: "/academics/information-technology/faculty-profile" },
    { name: "Laboratory", path: "/academics/information-technology/laboratory" },
    { name: "Training and Placement", path: "/academics/information-technology/training-placement" },
    { name: "Research & Publication", path: "/academics/information-technology/research-publication" },
    { name: "Achievements", path: "/academics/information-technology/achievement" },
    { name: "Departmental Activity", path: "/academics/information-technology/departmental-activity" },
    { name: "ITSA", path: "/academics/information-technology/itsa" },
    { name: "Downloads", path: "/academics/information-technology/downloads" },
    { name: "Consultancy", path: "/academics/information-technology/consultancy" },
  ];

const ITTrainingPlacementPage = () => {
  const location = useLocation(); // Hook to get the current URL path

  return (
    <div className="container mx-auto px-4 py-8 mt-32 max-w-6xl">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Training and Placement</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10">
          Information about career development, placement records, and major recruiters for the IT department.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md transition-all duration-300">
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2 overflow-x-auto">
          {itDepartmentTabs.map((tab) => {
            const isActive = location.pathname === tab.path;
            return (
              <Link
                key={tab.name}
                to={tab.path}
                className={`p-3 text-center rounded-md transition-all duration-300 ease-in-out whitespace-nowrap text-sm font-medium
                  ${isActive
                    ? 'bg-indigo-100 text-indigo-700 border-2 border-indigo-300 shadow-inner'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600 border border-gray-200'
                  }`}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="bg-white rounded-xl shadow-xl p-8 mb-10 border border-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-4 flex items-center">
          <svg className="w-8 h-8 mr-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          Career Development at IT
        </h2>

        {/* Placements Section */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-500 rounded-xl p-5 md:p-6 shadow-md">
          <h3 className="text-2xl font-bold text-indigo-800 mb-4">Placements</h3>
          <div className="pt-4 border-t border-indigo-200 text-gray-700 leading-relaxed text-base md:text-lg">
            <p>
              Today we are living in the era of information technology which has affected our lives greater than the Industry Revolution of the 18th Century. The 21st Century is referred to the IT Century. Information and information technology tools have become an indispensable requirement of Today's world. This course is an effort to prepare the future technologists who are equipped with the skill and knowledge needed to design and develop the IT gadgets which include hardware, software and telecommunication.
            </p>
            <p className="mt-4">
              The graduates of our department are employed in MNCs like <strong>Wipro, HSBC, Infosys, PCS, Satyam, Symantec, Adobe, MBT, Oracle etc.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITTrainingPlacementPage;