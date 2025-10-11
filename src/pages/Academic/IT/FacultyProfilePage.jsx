// src/pages/academics/information-technology/FacultyProfilePage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const itDepartmentTabs = [
  { name: "DEPT Profile", path: "/academics/information-technology" },
  { name: "Vision-Mission", path: "/academics/information-technology/vision-mission" }, // Assuming a separate Vision-Mission page
  { name: "Programmes", path: "/academics/information-technology/programmes" },
  { name: "Faculty Profile", path: "/academics/information-technology/faculty" },
  { name: "Laboratory", path: "/academics/information-technology/labs" },
  { name: "Training and Placement", path: "/academics/information-technology/training-placement" },
  { name: "Research & Publication", path: "/academics/information-technology/research-publication" }, // Assuming a research-publication page
  { name: "Achievements", path: "/academics/information-technology/achievements" },
  { name: "Departmental Activity", path: "/academics/information-technology/activities" },
  { name: "ITSA", path: "/academics/information-technology/itsa" },
  { name: "Consultancy", path: "/academics/information-technology/consultancy" },
  { name: "Downloads", path: "/academics/information-technology/downloads" },

];

// Faculty data from the provided HTML, cleaned up image paths (assuming /public/images/department/faculty/ or /public/images/)
const teachingStaff = [
  { id: 'hashmi-syed-asrar', img: '/images/gallery/07012014234724-hod.png', name: 'Mr. Hashmi Syed Asrar', designation: 'Head, Department of IT', specialization: 'Information Technology', email: 'hashmi_sa@mgmcen.ac.in' },
  // Placeholder for other 7 assistant professors, adjust as per real data
  { id: 'it-faculty-1', img: '/images/placeholder-faculty.jpg', name: 'IT Faculty Member 1', designation: 'Assistant Professor', specialization: 'Networking', email: 'faculty1@mgmcen.ac.in' },
  { id: 'it-faculty-2', img: '/images/placeholder-faculty.jpg', name: 'IT Faculty Member 2', designation: 'Assistant Professor', specialization: 'Cyber Security', email: 'faculty2@mgmcen.ac.in' },
  { id: 'it-faculty-3', img: '/images/placeholder-faculty.jpg', name: 'IT Faculty Member 3', designation: 'Assistant Professor', specialization: 'Web Technologies', email: 'faculty3@mgmcen.ac.in' },
  { id: 'it-faculty-4', img: '/images/placeholder-faculty.jpg', name: 'IT Faculty Member 4', designation: 'Assistant Professor', specialization: 'Data Science', email: 'faculty4@mgmcen.ac.in' },
  { id: 'it-faculty-5', img: '/images/placeholder-faculty.jpg', name: 'IT Faculty Member 5', designation: 'Assistant Professor', specialization: 'Cloud Computing', email: 'faculty5@mgmcen.ac.in' },
  { id: 'it-faculty-6', img: '/images/placeholder-faculty.jpg', name: 'IT Faculty Member 6', designation: 'Assistant Professor', specialization: 'Mobile Application Development', email: 'faculty6@mgmcen.ac.in' },
  { id: 'it-faculty-7', img: '/images/placeholder-faculty.jpg', name: 'IT Faculty Member 7', designation: 'Assistant Professor', specialization: 'Database Management', email: 'faculty7@mgmcen.ac.in' },
];

const supportingStaff = [
  // Placeholder for 4 supporting staff members, adjust as per real data
  { id: 'it-support-1', img: '/images/placeholder-faculty.jpg', name: 'IT Support Staff 1', designation: 'Lab Assistant', specialization: 'Hardware Maintenance', email: 'support1@mgmcen.ac.in' },
  { id: 'it-support-2', img: '/images/placeholder-faculty.jpg', name: 'IT Support Staff 2', designation: 'Programmer', specialization: 'System Administration', email: 'support2@mgmcen.ac.in' },
  { id: 'it-support-3', img: '/images/placeholder-faculty.jpg', name: 'IT Support Staff 3', designation: 'Technical Assistant', specialization: 'Network Support', email: 'support3@mgmcen.ac.in' },
  { id: 'it-support-4', img: '/images/placeholder-faculty.jpg', name: 'IT Support Staff 4', designation: 'Office Assistant', specialization: 'Admin Support', email: 'support4@mgmcen.ac.in' },
];

// Combine all faculty data for easy lookup in a detail page (if needed later)
export const allItFacultyData = [...teachingStaff, ...supportingStaff];

const FacultyProfilePage = () => {
  const location = useLocation(); // Hook to get the current URL path

  const currentDeptPath = "/academics/information-technology"; // Base path for IT department

  return (
    <div className="container mx-auto px-4 py-8 mt-32 max-w-6xl">
      {/* Hero Section - Consistent with other redesigned pages */}
      <div className="bg-gradient-to-r from-teal-800 to-cyan-700 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden">
        {/* Subtle background SVG for visual interest */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Faculty Profile</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10">
          Meet the dedicated and experienced faculty members of the Information Technology Department.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-cyan-400"></div>
      </div>

      {/* Department Sub-Navigation Tabs - NON-STICKY */}
      <nav className={`mb-8 bg-white rounded-lg shadow-md transition-all duration-300`}>
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
                    ? 'bg-teal-100 text-teal-700 border-2 border-teal-300 shadow-inner'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-teal-600 border border-gray-200'
                  }`}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Main Content Area with improved card design */}
      <div className="bg-white rounded-xl shadow-xl p-8 mb-10 border border-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-teal-800 border-b-2 border-teal-200 pb-4 flex items-center">
          <svg className="w-8 h-8 mr-3 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-4-2V6a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2h-1.25c-.26 0-.5.1-.66.27l-1.68 1.68a1 1 0 01-1.41 0L10.41 17.27a.999.999 0 00-.66-.27z"></path>
          </svg>
          Information Technology Faculty
        </h2>

        {/* Teaching Staff Section */}
        <h3 className="text-2xl font-bold text-teal-700 mb-6 mt-10 border-b border-teal-100 pb-2">Teaching Staff</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teachingStaff.map((faculty) => (
            <div key={faculty.id} className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <Link to={`${currentDeptPath}/faculty/${faculty.id}`} className="block">
                <img
                  src={faculty.img}
                  alt={faculty.name}
                  className="w-full h-48 object-cover object-top" // Use object-top to focus on head/shoulders
                  onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-faculty.jpg'; }} // Fallback image
                />
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-teal-800 hover:underline">{faculty.name}</h4>
                  <p className="text-sm text-gray-600">{faculty.designation}</p>
                  <p className="text-xs text-gray-500 mt-1">{faculty.specialization}</p>
                  {faculty.email !== 'NA' && (
                    <a href={`mailto:${faculty.email}`} className="text-teal-600 hover:text-teal-800 text-xs mt-2 inline-flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      {faculty.email}
                    </a>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Supporting Staff Section */}
        <h3 className="text-2xl font-bold text-teal-700 mb-6 mt-12 border-b border-teal-100 pb-2">Supporting Staff</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {supportingStaff.map((staff) => (
            <div key={staff.id} className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <Link to={`${currentDeptPath}/faculty/${staff.id}`} className="block">
                <img
                  src={staff.img}
                  alt={staff.name}
                  className="w-full h-48 object-cover object-top"
                  onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-faculty.jpg'; }} // Fallback image
                />
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-teal-800 hover:underline">{staff.name}</h4>
                  <p className="text-sm text-gray-600">{staff.designation}</p>
                  <p className="text-xs text-gray-500 mt-1">{staff.specialization}</p>
                  {staff.email !== 'NA' && staff.email !== '' && (
                    <a href={`mailto:${staff.email}`} className="text-teal-600 hover:text-teal-800 text-xs mt-2 inline-flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      {staff.email}
                    </a>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyProfilePage;
