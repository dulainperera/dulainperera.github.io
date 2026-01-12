

const Footer = () => {

  return (
    <div className="mb-16 inset-0 -z-10">
      
      <div className="absolute "></div>
      {/* social Icons */}
      <div className="flex justify-center space-x-5 sm:space-x-3">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/Dulain03"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-transparent p-4 sm:p-3 text-surface link-style"
        >
          <span className="[&>svg]:h-6 [&>svg]:w-6 sm:[&>svg]:h-5 sm:[&>svg]:w-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512">
              <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
            </svg>
          </span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/dulain_03/"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-transparent p-4 sm:p-3 transition duration-150 ease-in-out link-style"
        >
          <span className="[&>svg]:h-6 [&>svg]:w-6 sm:[&>svg]:h-5 sm:[&>svg]:w-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8s-26.8-12-26.8-26.8 12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9s-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z" />
            </svg>
          </span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/dulain-perera-091778292"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-transparent p-4 sm:p-3 text-surface link-style"
        >
          <span className="[&>svg]:h-6 [&>svg]:w-6 sm:[&>svg]:h-5 sm:[&>svg]:w-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
              <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
            </svg>
          </span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/dulainperera"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-transparent p-4 sm:p-3 text-surface link-style"
        >
          <span className="[&>svg]:h-6 [&>svg]:w-6 sm:[&>svg]:h-5 sm:[&>svg]:w-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
            </svg>
          </span>
        </a>
      </div>

      {/* Footer */}
      <div className="w-full p-4 text-center text-sm text-white/70 ">
        © 2025 Copyright: Dulain Perera
      </div>
    </div>
  );
};

export default Footer;