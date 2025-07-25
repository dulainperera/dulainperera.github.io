import { Fragment } from 'react';
import { events } from '../data/constants';

const Timeline = () => {
  return (
    <div className="pb-24 lg:mb-35">
      <h2 className="text-center text-4xl mb-20 lg:mt-16">Experience</h2>
      <div className="relative flex flex-col items-center w-full my-8">
        {/* vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-neutral-500"></div>
        
        {events.map((event, key) => (
          <Fragment key={key}>
            <div className={`relative flex items-center w-full mb-8 ${
              event.direction === 'left' ? 'justify-start' : 'justify-end'
            }`}>
              {/* timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neutral-500 rounded-full z-10"></div>
              
              {/* event card */}
              <div className={`w-5/12 ${event.direction === 'left' ? 'pr-8' : 'pl-8'}`}>
                <EventCard 
                  id={event.id}
                  period={event.period}
                  title={event.title}
                  institution={event.institution}
                  direction={event.direction}
                />
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

const EventCard = ({ id, period, title, institution, direction }) => {
  return (
    <div className={`flex flex-col gap-y-2 border shadow-md rounded-xl p-4 bg-neutral-800 items-center ${
      direction === 'left' ? 'text-right items-end' : 'text-left items-start'
    }`}>
      <div className="text-sm text-neutral-400">{period}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-neutral-300">{institution}</p>
    </div>
  );
};

export default Timeline;