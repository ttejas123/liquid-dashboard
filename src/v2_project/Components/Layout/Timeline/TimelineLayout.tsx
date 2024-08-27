// TimelineLayout.js
import React from 'react';
import './TimelineLayout.css'; // Create corresponding CSS for styling

interface TimelineLayoutProps {
    events: { date: string, details: React.ReactNode }[]
}

export const TimelineLayoutState = {

}

const TimelineLayout: React.FC<TimelineLayoutProps> = ({ events }) => {
  return (
    <div className="timeline-layout">
      {events.map((event, index) => (
        <div key={index} className="timeline-event">
          <div className="timeline-content">
            <div className="timeline-date">{event.date}</div>
            <div className="timeline-details">{event.details}</div>
          </div>
          <div className="timeline-line"></div>
        </div>
      ))}
    </div>
  );
};

export default TimelineLayout;
