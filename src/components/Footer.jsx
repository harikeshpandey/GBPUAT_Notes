import { FaGithub, FaInstagram, FaReddit } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-dark-800 p-6 text-center">
    <div className="container mx-auto">
      <p className="mb-4 text-dark-200">&copy; 2024 College Notes Portal. All rights reserved.</p>
      <div className="flex justify-center items-center space-x-4">
        <p className="font-semibold text-dark-100">Follow Us:</p>
        <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="text-dark-300 hover:text-white transition-colors">
          <FaGithub size={24} />
        </a>
        <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer" className="text-dark-300 hover:text-accent transition-colors">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.reddit.com/user/your-reddit-profile" target="_blank" rel="noopener noreferrer" className="text-dark-300 hover:text-accent transition-colors">
          <FaReddit size={24} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;