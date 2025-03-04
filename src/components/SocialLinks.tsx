import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/coderkeshav-yt', icon: <FaGithub className="text-2xl" /> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/keshav-singh-developer/', icon: <FaLinkedin className="text-2xl" /> },
  { name: 'Twitter', url: 'https://twitter.com/coderkeshav', icon: <FaTwitter className="text-2xl" /> },
];

const SocialLinks = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold mb-4 text-gray-200 bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient">Connect With Me</h3>
      <div className="flex flex-col space-y-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors duration-300 group"
          >
            <span className="text-primary group-hover:scale-110 transition-transform duration-300">
              {link.icon}
            </span>
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;