import productInventory from '../assets/product-inventory.jpg';
import eventTicket from '../assets/event-ticket.jpg';
import landfinder from '../assets/landfinder.jpg';
import planeTicket from '../assets/plane-ticket-management.jpg';
import fred from '../assets/fred.png';
import bazket from '../assets/bazket.jpg';


export const events = [
  {
    id: 1,
    period: '2009 - 2022',
    title: 'School Education',
    institution: 'Maliyadeva College',
    direction: 'left'
  },
  {
    id: 2,
    period: '2023 - present',
    title: 'BSc Computer Science',
    institution: 'Informatics Institute of Technology',
    direction: 'right'
  }
];

export const PROJECTS = [

  {
    title: 'Product Inventory Dashboard',
    image: productInventory,
    description: ' A simple inventory management application for tracking products with name, price, and description. Includes product listing, creation, editing, and deletion with error handling.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'HTML'],
    github: 'https://github.com/dulainperera/laravel-crud-product',
  },

  {
    title: 'Event Ticket management system',
    image: eventTicket, 
    description: 'This project is a real-time event ticketing system built using React and Spring Boot. It simulates the process of vendors releasing tickets and customers retrieving them.',
    technologies: ['React', 'Spring Boot'],
    github: 'https://github.com/dulainperera/Event-Ticketing-System',
  },

  {
    title: 'LandFinder',
    image: landfinder, 
    description: 'A responsive property search web application that helps users find and manage real estate listings with advanced filtering and favorites management.',
    technologies: ['React', 'Spring Boot'],
    github: 'https://github.com/dulainperera/LandFinder',
  },

  {
    title: 'Plane ticket management system',
    image: planeTicket, 
    description: 'This project is a Java-based console application for managing plane seat bookings. It allows users to perform various operations related to seat management',
    technologies: ['Java'],
    github: 'https://github.com/dulainperera/Plane_ticket_manager',
  },

  {
    title: 'FRED- merch store',
    image: fred,
    description: 'a merch store made with basic web development technologies for an educational website',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/dulainperera/FRED-store',
  },
  
  {
    title: 'Bazket',
    image: bazket, 
    description: 'An E-commerce platform built with WordPress, WooCommerce, and Kadence Blocks for a complete online shopping experience.',
    technologies: ['Wordpress'],
    github: '',
  }
];