import React from 'react'

const Tech = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <h2 className="text-4xl  mt-10 mb-10 text-center">Technologies</h2>
      <div className="flex flex-col md:flex-row gap-6 justify-between text-center">
        
        <div className="flex-1 border border-gray-700 rounded-xl p-6 shadow-xl ">
          <h3 className="text-xl mb-4 font-medium">Languages</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="mr-2">•</span> Python
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> Java
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> HTML
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> CSS
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> JavaScript
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> PHP
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> SQL
            </li>
          </ul>
        </div>

        
        <div className="flex-1 border border-gray-700 rounded-xl p-6 shadow-xl">
          <h3 className="text-xl mb-4 font-medium">Libraries & Frameworks</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="mr-2">•</span> React
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> Tailwind
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> Bootstrap
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> Laravel
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> Spring Boot
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> Node.js
            </li>
          </ul>
        </div>

        
        <div className="flex-1 border border-gray-700 rounded-xl p-6 shadow-xl">
          <h3 className="text-xl mb-4 font-medium">Tools</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="mr-2">•</span> Git/GitHub
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> VS Code
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> IntelliJ
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> Postman
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> MySQL
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> MongoDB
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Tech