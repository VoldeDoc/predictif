import React from "react";

const meetupsData = [
  {
    month: "Feb",
    day: 7,
    title: "UIHUT - Crunchbase Company Profile...",
    location: "UIHUT • Sylhet, Bangladesh",
    img: "/assets/images/dashboard/dashboard/comp.png",
    types: ["Meetup", "Meetup", "Meetup"]
  },
  {
    month: "Mar",
    day: 15,
    title: "Tech Conference 2023",
    location: "Tech Hub • San Francisco, USA",
    img: "/assets/images/dashboard/dashboard/comp.png",
    types: ["Conference", "Networking", "Tech"]
  },
  {
    month: "Mar",
    day: 15,
    title: "Tech Conference 2023",
    location: "Tech Hub • San Francisco, USA",
    img: "/assets/images/dashboard/dashboard/comp.png",
    types: ["Conference", "Networking", "Tech"]
  },
  // Add more meetups as needed
];

const Meetups: React.FC = () => {
  return (
    <div>
      {meetupsData.map((meetup, index) => (
        <div key={index} className="flex space-between py-4 space-x-2">
          <div className="date bg-blue-800 text-white text-xl rounded-lg py-2 px-2 text-center font-semibold space-y-4">
            <p>{meetup.month}</p>
            <p>{meetup.day}</p>
          </div>
          <div>
            <p className="company font-semibold">{meetup.title}</p>
            <div className="flex space-x-2 py-1">
              <div>
                <img
                  src={meetup.img}
                  alt=""
                  width={18}
                  height={18}
                  className="rounded-full mr-1 shadow-md"
                />
              </div>
              <div>
                <p className="text-sm text-gray-500">{meetup.location}</p>
              </div>
            </div>
            <div className="meetup-type flex space-x-4 py-1">
              {meetup.types.map((type, typeIndex) => (
                <p
                  key={typeIndex}
                  className="text-sm text-gray-300 bg-black-500 px-2 py-2 rounded-lg overflow-hidden text-ellipsis whitespace-nowrap"
                  style={{ maxWidth: "100px" }} // Adjust the max-width as needed
                >
                  {type}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Meetups;