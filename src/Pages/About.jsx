import React from 'react'
import { Github, Linkedin, Mail } from "lucide-react"

export default function AboutMe() {
  return (
    <div className=" mt-10 min-h-screen bg-gray-50 py-12 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">About Me</h1>
          </div>
          <div className="border-t border-gray-200">
            <div className="px-4 py-5 sm:p-6">
              <div className="sm:flex sm:items-center sm:justify-between">
                <div className="sm:flex sm:items-center">
                  <div className="mt-4 sm:mt-0 sm:ml-6">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Chenou Wu</h2>
                    <p className="mt-1 text-sm text-gray-500">Full Stack Developer</p>
                  </div>
                </div>
                <div className="mt-5 flex justify-center sm:mt-0">
                  <a href="https://github.com/chenouwu" className="text-gray-400 hover:text-gray-500" aria-label="GitHub profile">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/chenouwu" className="ml-3 text-gray-400 hover:text-gray-500" aria-label="LinkedIn profile">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="mailto:chenou.wu@example.com" className="ml-3 text-gray-400 hover:text-gray-500" aria-label="Email me">
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-base text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum a vero quo, voluptates voluptas deserunt impedit accusantium modi nisi tenetur itaque veniam quidem, incidunt aspernatur. Aliquid omnis sed officiis error!
                </p>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-8">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Key Information</h3>
                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      <dt className="text-sm font-medium text-gray-500 truncate">Location</dt>
                      <dd className="mt-1 text-3xl font-semibold text-gray-900">Halifax, CA</dd>
                    </div>
                  </div>
                  <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      <dt className="text-sm font-medium text-gray-500 truncate">Languages</dt>
                      <dd className="mt-1 text-3xl font-semibold text-gray-900">JavaScript, Java, Python</dd>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-8">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Skills</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["React", "Node.js", "TypeScript", "GraphQL", "Docker", "AWS"].map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}