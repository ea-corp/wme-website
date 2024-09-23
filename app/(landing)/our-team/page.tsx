"use client";
import React, { useState, useEffect } from "react";

const employeeLocations = [
  { id: 2, name: "Kessi Adjari", position: "Senior Consultant", country: "Albania", img: "/images/employee-sample.png", lat: 54.5074, lon: 11.0 },
  { id: 4, name: "Hung Nguyen", position: "Developer", country: "Vietnam", img: "/images/employee-sample.png", lat: 15.8688, lon: 80.2093 },
  { id: 6, name: "Chan Myae Khine", position: "Developer", country: "Thailand", img: "/images/employee-sample.png", lat: 24.8688, lon: 71.2093 },
  { id: 1, name: "Eddy Azoulay", position: "Founder & CEO", country: "Thailand", img: "/images/employee-sample.png", lat: 10.8688, lon: 72.2093 },
  { id: 3, name: "Bao Nguyen", position: "Head of App", country: "Germany", img: "/images/employee-sample.png", lat: 69.5074, lon: 2.1278 },
  { id: 5, name: "Sandaruwan Gunathilake", position: "Senior Developer", country: "Chile", img: "/images/employee-sample.png", lat: -30.7128, lon: -55.0060 },
  { id: 7, name: "Maksym Blyzniuk", position: "Solutions Architect", country: "Portugal", img: "/images/employee-sample.png", lat: 52.5074, lon: -9.1278 },
];

const convertLatLonToPosition = (lat: any, lon: any) => {
  const x = (lon + 180) * (100 / 360); // longitude scaling
  const y = (90 - lat) * (100 / 180); // latitude scaling
  return { x: `${x}%`, y: `${y}%` };
};

const WorldMap = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredEmployeeId, setHoveredEmployeeId] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200); // 200ms delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-6">
      {/* Map section */}
      <div className="relative w-full h-auto mb-10 flex justify-center">
        <img src="/images/world.svg" className="w-3/4 h-auto" alt="World Map" />
        {employeeLocations.map((employee, index) => {
          const { x, y } = convertLatLonToPosition(employee.lat, employee.lon);
          return (
            <div
              key={employee.id}
              className={`absolute transition-opacity duration-1000 ease-out transform ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{
                left: x,
                top: y,
                transform: "translate(-50%, -50%)",
                transitionDelay: `${index * 200}ms`,
                width: "3%", // Icon size slightly adjusted to fit the smaller map
              }}
              onMouseEnter={() => setHoveredEmployeeId(employee.id)}
              onMouseLeave={() => setHoveredEmployeeId(null)}
            >
              <div
                className={`relative p-2 bg-white shadow-md transition-transform transform ${
                  hoveredEmployeeId === employee.id ? "scale-150" : ""
                } rounded-full`}
                style={{
                  width: "60px",
                  height: "60px",
                }}
              >
                {/* Image de l'employé */}
                <img
                  src={employee.img}
                  alt={employee.name}
                  className="w-full h-full object-cover rounded-full"
                />

                {/* Pointe du pin */}
                <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-white"></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Employee cards section */}
      <div className="flex flex-wrap justify-center items-start gap-4">
        {employeeLocations.map((employee) => (
          <div
            key={employee.id}
            className={`bg-gray-100/50 border border-gray-200 shadow-md p-4 text-center transition-transform transform ${
              hoveredEmployeeId === employee.id ? "scale-105 bg-white shadow-xl" : ""
            } w-48 h-64 flex flex-col justify-between`}
            onMouseEnter={() => setHoveredEmployeeId(employee.id)}
            onMouseLeave={() => setHoveredEmployeeId(null)}
          >
            <img
              src={employee.img}
              alt={employee.name}
              className="w-20 h-20 mx-auto mb-4 object-cover rounded-full border border-gray-300"
            />
            <h3 className="text-lg font-semibold text-blue-700 mb-2">{employee.name}</h3>
            <p className="text-gray-600 text-sm mb-1">{employee.position}</p>
            <p className="text-gray-500 text-xs">{employee.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldMap;
