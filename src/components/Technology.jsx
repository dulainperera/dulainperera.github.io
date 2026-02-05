import LogoLoop from './LogoLoop';
import { 
  SiReact, 
  SiTailwindcss,
  SiWordpress,
  SiPython,
  SiLaravel,
  SiGithub,
  SiPostman,
  SiBootstrap,
  SiMysql
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const techLogos = [
  { node: <SiReact className="text-gray-400" />, title: "React", href: "https://react.dev" },
  { node: <SiTailwindcss className="text-gray-400" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiPython className="text-gray-400" />, title: "Python", href: "https://www.python.org" },
  { node: <FaJava className="text-gray-400" />, title: "Java", href: "https://www.java.com" },
  { node: <SiLaravel className="text-gray-400" />, title: "Laravel", href: "https://laravel.com" },
  { node: <SiGithub className="text-gray-400" />, title: "GitHub", href: "https://github.com" },
  { node: <SiWordpress className="text-gray-400" />, title: "WordPress", href: "https://wordpress.org" },
  { node: <SiPostman className="text-gray-400" />, title: "Postman", href: "https://www.postman.com" },
  { node: <SiBootstrap className="text-gray-400" />, title: "Bootstrap", href: "https://getbootstrap.com" },
  { node: <SiMysql className="text-gray-400" />, title: "MySQL", href: "https://www.mysql.com" },
];

function Technology() {  
  return (
    <div className="mt-20 w-full max-w-4xl mx-auto" style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={50}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#04070d"
        ariaLabel="Technology stack"
      />
    </div>
  );
}

export default Technology;