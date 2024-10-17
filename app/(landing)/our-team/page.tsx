"use client";
import React, { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

// Liste des employés
const employeeLocations = [
  { id: 1, name: "Kessi Adjari", position: "Senior Consultant", country: "Albania", img: "/images/team/kessi.png", lat: 54.5074, lon: 11.0 },
  { id: 2, name: "Hung Nguyen", position: "Developer", country: "Vietnam", img: "/images/team/hung.jpg", lat: 15.8688, lon: 80.2093 },
  { id: 3, name: "Chan Myae Khine", position: "Developer", country: "Thailand", img: "/images/team/chan.jpg", lat: 24.8688, lon: 71.2093 },
  { id: 4, name: "Eddy Azoulay", position: "Founder & CEO", country: "Thailand", img: "/images/team/eddy.jpg", lat: 10.8688, lon: 72.2093 },
  { id: 5, name: "Bao Nguyen", position: "Head of App", country: "Germany", img: "/images/team/bao.png", lat: 69.5074, lon: 2.1278 },
  { id: 6, name: "Sandaruwan Gunathilake", position: "Senior Developer", country: "Chile", img: "/images/employee-sample.png", lat: -30.7128, lon: -55.0060 },
];

// Conversion des coordonnées en position sur la carte
const convertLatLonToPosition = (lat: number, lon: number) => {
  const x = (lon + 180) * (100 / 360); // échelle de la longitude
  const y = (90 - lat) * (100 / 180); // échelle de la latitude
  return { x: `${x}%`, y: `${y}%` };
};

const WorldMap = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredEmployeeId, setHoveredEmployeeId] = useState<number | null>(null);

  // Apparition progressive des pins sur la carte
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-12 md:py-2">
      {/* Section carte du monde */}
      <h2 className="text-4xl font-semibold py-12 bg-gray-100 text-center">Our Team</h2>
      <div className="relative w-full h-auto mb-10 flex justify-center mt-8">
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
                transform: `translate(-50%, -50%) ${
                  hoveredEmployeeId === employee.id ? "translateY(-20px)" : ""
                }`,
                transitionDelay: `${index * 200}ms`,
                width: "5vw", // Taille responsive
              }}
              onMouseEnter={() => setHoveredEmployeeId(employee.id)}
              onMouseLeave={() => setHoveredEmployeeId(null)}
            >
              <div
                className={`relative p-2 bg-white shadow-md transition-transform transform ${
                  hoveredEmployeeId === employee.id ? "scale-150" : ""
                } rounded-full`}
                style={{
                  width: "5vw",
                  height: "5vw",
                }}
              >
                {/* Image de l'employé */}
                <img
                  src={employee.img}
                  alt={employee.name}
                  className="w-full h-full object-cover rounded-full"
                />

                {/* Queue du pin */}
                <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-white"></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Carrousel mobile trié par ID */}
      <div className="md:hidden mx-14">
        <Carousel>
          <CarouselContent className="flex gap-4">
            {employeeLocations
              .sort((a, b) => a.id - b.id) 
              .map((employee) => (
                <CarouselItem key={employee.id} className="basis-1/3 w-48 h-64 bg-gray-100/50 border border-gray-200 shadow-md p-4 text-center flex flex-col justify-between">
                  <img
                    src={employee.img}
                    alt={employee.name}
                    className="w-20 h-20 mx-auto mb-4 object-cover rounded-full border border-gray-300"
                  />
                  <h3 className="text-lg font-semibold text-blue-700 mb-2">{employee.name}</h3>
                  <p className="text-gray-600 text-sm mb-1">{employee.position}</p>
                  <p className="text-gray-500 text-xs">{employee.country}</p>
                </CarouselItem>
              ))}
          </CarouselContent>

          {/* Boutons Précédent et Suivant */}
          <CarouselPrevious className="text-blue-700 hover:text-blue-900" />
          <CarouselNext className="text-blue-700 hover:text-blue-900" />
        </Carousel>
      </div>

      {/* Cartes d'employés (cachées sur mobile) */}
      <div className="hidden md:flex flex-wrap justify-center items-start gap-4 pb-28">
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
