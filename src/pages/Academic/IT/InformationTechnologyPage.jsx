// InformationTechnologyPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Data for the Department Details table
const departmentDetails = [
  { label: 'Department Location', value: 'First Floor' },
  { label: 'Year of Establishment', value: '1999' },
  { label: 'Head of Department', value: 'Mr. Hashmi S.A.' },
  { label: 'Contact No', value: '+91 2462222999' },
  { label: 'E –mail ID', value: 'hashmi_sa@mgmcen.ac.in', type: 'email' },
  { label: 'Total No of Classrooms', value: '03' },
  { label: 'Total no of Laboratories', value: '06' },
  { label: 'Number of Professors', value: '-' },
  { label: 'Number of Assistant Professors', value: '08' },
  { label: 'Total Teaching Faculty', value: '08' },
  { label: 'Supporting Teaching Staff', value: '04' },
];

// Navigation tabs for the Information Technology department
const itDepartmentTabs = [
  { name: "Faculty Detail", path: "/academics/information-technology/faculty-detail" },
  { name: "Faculty Profile", path: "/academics/information-technology/faculty-profile" },
  { name: "Information Technology", path: "/academics/information-technology" },
  { name: "IT Achievements", path: "/academics/information-technology/achievements" },
  { name: "IT Curriculum", path: "/academics/information-technology/curriculum" },
  { name: "IT Departmental Activity", path: "/academics/information-technology/departmental-activity" },
  { name: "IT Laboratory Detail", path: "/academics/information-technology/laboratory-detail" },
  { name: "IT Laboratory", path: "/academics/information-technology/laboratory" },
  { name: "IT Profile", path: "/academics/information-technology/profile" },
  { name: "IT Programmes", path: "/academics/information-technology/programmes" },
  { name: "IT Research Publication", path: "/academics/information-technology/research-publication" },
  { name: "ITSA", path: "/academics/information-technology/itsa" },
  { name: "IT Training Placement", path: "/academics/information-technology/training-placement" },
  { name: "IT Vision Mission", path: "/academics/information-technology/vision-mission" },
];

const InformationTechnologyPage = () => {
  const location = useLocation();

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-900 to-cyan-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-teal-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Information Technology</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Comprehensive profile of the Information Technology Department.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-cyan-400 print:hidden"></div>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden">
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2">
          {itDepartmentTabs.map((tab) => {
            const isActive = location.pathname === tab.path;
            return (
              <Link
                key={tab.name}
                to={tab.path}
                className={`p-3 text-center rounded-md transition-all duration-300 ease-in-out whitespace-nowrap text-sm font-medium
                  ${isActive
                    ? 'bg-cyan-100 text-cyan-700 border-2 border-cyan-300 shadow-inner'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-cyan-600 border border-gray-200'
                  }`}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100 print:shadow-none print:border-none print:rounded-none">
        <h2 className="text-3xl font-bold mb-6 text-cyan-800 border-b-2 border-cyan-100 pb-4 flex items-center print:text-2xl">
          <svg className="w-8 h-8 mr-3 text-cyan-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          Information Technology Department
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="flex-1">
            {/* Department Overview Paragraph */}
            <div className="prose prose-lg max-w-none text-gray-700 mb-6 print:text-sm">
              <p className="leading-relaxed mb-4">
              Today we are living in the era of information technology which has affected our lives greater than the Industry Revolution of the 18th Century. The 21st Century is referred to the IT Century. Information and information technology tools have become an indispensable requirement of Today's world. This course is an effort to prepare the future technologists who are equipped with the skill and knowledge needed to design and develop the IT gadgets which include hardware, software and telecommunication. The graduates of our department are employed in MNCs like Wipro, HSBC, Infosys, PCS, Satyam, Symantec, Adobe, MBT, Oracle etc.
              </p>
            </div>

            {/* Department Details Table */}
            <div className="overflow-x-auto relative rounded-xl shadow-md mb-8 border border-gray-200 print:shadow-none print:border print:rounded-none">
              <table className="w-full text-sm text-left text-gray-700 print:text-xs">
                <thead className="text-xs text-white uppercase bg-gradient-to-r from-cyan-700 to-teal-800 print:bg-gray-800">
                  <tr>
                    <th scope="col" className="py-4 px-4 md:px-6 rounded-tl-lg print:py-2 print:px-3">Detail</th>
                    <th scope="col" className="py-4 px-4 md:px-6 rounded-tr-lg print:py-2 print:px-3">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {departmentDetails.map((item, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-cyan-50 transition-colors print:border-b`}>
                      <td className="py-4 px-4 md:px-6 font-medium text-gray-900 whitespace-nowrap print:py-2 print:px-3">
                        <strong>{item.label}</strong>
                      </td>
                      <td className="py-4 px-4 md:px-6 print:py-2 print:px-3">
                        {item.type === 'email' ? (
                          <a href={`mailto:${item.value}`} target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800 font-medium flex items-center print:text-gray-700">
                            <svg className="w-4 h-4 mr-1 print:hidden" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            {item.value}
                          </a>
                        ) : (
                          <span className="font-medium">{item.value}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Sidebar - HOD Information */}
          <div className="lg:w-96 flex-shrink-0 print:hidden">
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 sticky top-32">
              <img
                alt="Mr. Hashmi Syed Asrar, Head, Department of IT"
                className="w-full h-64 object-cover"
                src="/images/gallery/07012014234724-hod.png"
              />
              <div className="p-5 bg-gradient-to-b from-white to-gray-50">
                <h3 className="text-xl font-semibold text-teal-800 mb-1">
                  Mr. Hashmi Syed Asrar
                </h3>
                <p className="text-gray-600 mb-2">Head, Department of IT</p>
                <a
                  href="mailto:hashmi_sa@mgmcen.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:text-cyan-800 text-sm flex items-center transition-colors"
                >
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  hashmi_sa@mgmcen.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links to other sections */}
        <div className="mt-10 p-6 bg-cyan-50 rounded-xl border border-cyan-100 print:hidden">
          <h3 className="text-xl font-bold text-cyan-800 mb-4">Explore More</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
              to="/academics/information-technology/vision-mission"
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center"
            >
              <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-700">Vision & Mission</h4>
                <p className="text-sm text-gray-600">Our guiding principles and objectives</p>
              </div>
            </Link>
            <Link 
              to="/academics/information-technology/programmes"
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center"
            >
              <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-700">Programmes</h4>
                <p className="text-sm text-gray-600">Our academic offerings</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default InformationTechnologyPage;