import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a
            href="https://github.com/onurcangonul/codexist-case-onurcan-gonul"
            className="hover:underline"
          >
            Git Repository
          </a>
          . This Application is made for Codeist
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://www.linkedin.com/in/onurcangonul/"
              className="hover:underline me-4 md:me-6"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/onurcgnl"
              className="hover:underline me-4 md:me-6"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@onurcangonul"
              className="hover:underline me-4 md:me-6"
            >
              Medium
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer