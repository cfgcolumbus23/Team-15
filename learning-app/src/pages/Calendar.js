import React, { useState } from 'react';

const eventsData = [
  {
    description: 'SMARTNet - CERTIPORT Digital Literacy Certification',
    timeDate: new Date(),
    location: '1350 Cleveland Ave #100, Columbus, OH 43211',
    moreDetails:
      'CompTIA IT Fundamentals (ITF+) ',
  },
  {
    description: 'SMARTNet - CompTIA IT Fundamental',
    timeDate: new Date(),
    location: '1350 Cleveland Ave #100, Columbus, OH 43211',
    moreDetails:
      'IC3 Digital Literacy Certification Program',
  },
  // Add more events as needed
];

const CalendarPage = () => {
  const [events, setEvents] = useState(eventsData);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <h1>Calendar</h1>
      {events.map((event, index) => (
        <div key={index}>
          <h2>{event.description}</h2>
          <p>{event.timeDate.toString()}</p>
          <p>{event.location}</p>
          <button onClick={() => toggleDetails(index)}>
            {openIndex === index ? '- Less Details' : '+ More Details'}
          </button>
          {openIndex === index && <p>{event.moreDetails}</p>}
          {index < events.length - 1 && <hr />} {/* Add this line */}
        </div>
      ))}
    </div>
  );
};

export default CalendarPage;
