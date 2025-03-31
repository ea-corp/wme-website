"use client";

import React, { useState, useEffect } from "react";
import { MapPin } from "lucide-react";

// Employee data remains the same
const employeeLocations = [
  { 
    id: 4,
    name: "Eddy Azoulay", 
    position: "Founder & CEO", 
    country: "Thailand", 
    img: "/images/team/eddy.png", 
    lat: -2.8688, 
    lon: 72.2093, 
    offsetDirection: "left",
    offsetDistance: 15,
  },
  { 
    id: 1, 
    name: "Kessi Adhjari", 
    position: "Senior Implementation Specialist", 
    country: "Albania", 
    img: "/images/team/kessi.png", 
    lat: 42.5074, 
    lon: 11.0, 
    offsetDirection: "right",
    offsetDistance: 15,
  },
  { 
    id: 3, 
    name: "Chan Myae Khine", 
    position: "Junior Implementation Specialist", 
    country: "Myanmar", 
    img: "/images/team/chan.png", 
    lat: 12.8688, 
    lon: 68.2093, 
    offsetDirection: "left",
    offsetDistance: 35,
  },
  { 
    id: 5, 
    name: "Bao Nguyen", 
    position: "Solutions Engineer", 
    country: "Germany", 
    img: "/images/team/bao.png", 
    lat: 53.5074, 
    lon: 2.1278, 
    offsetDirection: "left",
    offsetDistance: 18,
  },
  { 
    id: 2, 
    name: "Hung Nguyen", 
    position: "Monday.com Platform Developer", 
    country: "Vietnam", 
    img: "/images/team/hung.png", 
    lat: 2.8688, 
    lon: 78.2093, 
    offsetDirection: "right",
    offsetDistance: 20,
  },
  { 
    id: 6, 
    name: "Sanda Guna", 
    position: "Senior Software Architect", 
    country: "Chile", 
    img: "/images/team/sanda.png", 
    lat: -45.7128, 
    lon: -54.0060, 
    offsetDirection: "left",
    offsetDistance: 22,
  },
] as const;


const convertLatLonToPosition = (lat: number, lon: number, offset: number = 0) => {
  const x = (lon + offset + 180) * (100 / 360);
  const y = (90 - lat) * (100 / 180);
  return { x: `${x}%`, y: `${y}%` };
};

const EmployeeCard = ({ 
  employee, 
  isHovered, 
  onMouseEnter, 
  onMouseLeave, 
  isMobile = false 
}: { 
  employee: typeof employeeLocations[number];
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isMobile?: boolean;
}) => {
  return (
    <div
      className={`${
        isMobile 
          ? "w-full bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 mb-6" 
          : "w-48 h-60 bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
      } ${isHovered ? "scale-105 shadow-xl" : ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative">
        <div className={`h-20 bg-gradient-to-r from-blue-500 to-blue-600`}></div>
        <img
          src={employee.img}
          alt={employee.name}
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
        />
      </div>
      
      <div className="px-4 pt-12 pb-4">
        <h3 className="text-base font-bold text-gray-900 text-center mb-1">
          {employee.name}
        </h3>
        <div className="space-y-2 items-center w-full mx-auto">
          <div className="flex items-center justify-center text-center text-gray-600 text-xs">
            <MapPin className="w-3 h-3 mr-1.5" />
            <span>{employee.country}</span>
          </div>
        </div>
        <p className={`text-xs font-semibold text-center mb-3 ${
          employee.id === 4 ? "text-indigo-600" : "text-blue-600"
        }`}>
          {employee.position}
        </p>
        
        
      </div>
    </div>
  );
};

const WorldMap = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredEmployeeId, setHoveredEmployeeId] = useState<number | null>(null);
  const [showDots, setShowDots] = useState(false);
  const [showLines, setShowLines] = useState(false);
  const [showPins, setShowPins] = useState(false);

  useEffect(() => {
    // Staggered animation sequence
    const dotsTimer = setTimeout(() => setShowDots(true), 500);
    const linesTimer = setTimeout(() => setShowLines(true), 1000);
    const pinsTimer = setTimeout(() => {
      setShowPins(true);
      setIsVisible(true);
    }, 1500);

    return () => {
      clearTimeout(dotsTimer);
      clearTimeout(linesTimer);
      clearTimeout(pinsTimer);
    };
  }, []);

  return (
    <div className="pb-28">
      <h2 className="text-4xl font-bold py-16 bg-gray-100 text-gray-800 text-center">
        Our Global Team
      </h2>
      
      <div className="relative w-full h-auto mb-10 flex justify-center mt-8">
        <img src="/images/world-2.svg" className="w-3/4 h-auto" alt="World Map" />
        {employeeLocations.map((employee, index) => {
          const originalPos = convertLatLonToPosition(employee.lat, employee.lon);
          const offsetAmount = employee.offsetDirection === "right" ? employee.offsetDistance : -employee.offsetDistance;
          const offsetPos = convertLatLonToPosition(employee.lat, employee.lon, offsetAmount);
          const isHovered = hoveredEmployeeId === employee.id;

          return (
            <div key={employee.id}>
              {/* Location dot with animation */}
              <div
                className={`absolute w-4 h-4 bg-blue-600 shadow-lg border-2 border-white rounded-full transform transition-all duration-500 ${
                  showDots ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
                style={{
                  left: originalPos.x,
                  top: originalPos.y,
                  transform: 'translate(-50%, -50%)',
                  transitionDelay: `${index * 100}ms`,
                }}
              />

              {/* Connection line with animation */}
              <div
                className={`absolute h-[2px] bg-blue-600 transition-all duration-500 ${
                  showLines ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  left: employee.offsetDirection === "right" ? originalPos.x : offsetPos.x,
                  top: originalPos.y,
                  width: `calc(${employee.offsetDirection === "right" ? offsetPos.x : originalPos.x} - ${employee.offsetDirection === "right" ? originalPos.x : offsetPos.x})`,
                  transform: 'translateY(-50%)',
                  transitionDelay: `${index * 100 + 200}ms`,
                  transformOrigin: employee.offsetDirection === "right" ? "left" : "right",
                }}
              />

              {/* Employee Pin with animation */}
              <div
                className={`absolute transition-all duration-500 ${
                  showPins && isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
                style={{
                  left: offsetPos.x,
                  top: offsetPos.y,
                  transform: `translate(${employee.offsetDirection === "right" ? "-40%" : "-60%"}, -50%) ${
                    isHovered ? "translateY(-20px)" : ""
                  }`,
                  transitionDelay: `${index * 100 + 400}ms`,
                  width: "5vw",
                  zIndex: isHovered ? 50 : 1,
                }}
                onMouseEnter={() => setHoveredEmployeeId(employee.id)}
                onMouseLeave={() => setHoveredEmployeeId(null)}
              >
                <div
                  className={`relative md:p-2 bg-white border shadow-md transition-transform ${
                    isHovered ? "scale-150" : ""
                  } rounded-full`}
                  style={{
                    width: "5vw",
                    height: "5vw",
                  }}
                >
                  <img
                    src={employee.img}
                    alt={employee.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile View - Vertical Stack */}
      <div className="md:hidden px-4 space-y-6">
        {employeeLocations.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            isHovered={hoveredEmployeeId === employee.id}
            onMouseEnter={() => setHoveredEmployeeId(employee.id)}
            onMouseLeave={() => setHoveredEmployeeId(null)}
            isMobile={true}
          />
        ))}
      </div>

      {/* Desktop View - Single Line */}
      <div className="hidden md:flex justify-center items-start gap-4 px-4 pb-28">
        {employeeLocations.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            isHovered={hoveredEmployeeId === employee.id}
            onMouseEnter={() => setHoveredEmployeeId(employee.id)}
            onMouseLeave={() => setHoveredEmployeeId(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default WorldMap;