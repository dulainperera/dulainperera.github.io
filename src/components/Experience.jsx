import React from 'react';
import { EXPERIENCES } from '../data/constants';

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Experience</h1>
      <div className="flex flex-col items-center">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap justify-center w-full max-w-4xl">
            
            <div className="w-1/4 text-center lg:text-left">
              <p className="mb-2 text-sm text-neutral-400">
                {experience.period}
              </p>
            </div>
            <div className="w-3/4">
              <p className="mb-2 font-semibold">{experience.title}</p>
              <p className="text-sm text-blue-100">{experience.institution}</p>
              <p className="text-sm">{experience.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;