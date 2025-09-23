import { FaLinkedin, FaInstagram, FaWhatsapp, FaDiscord, FaReddit } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/your-linkedin/',
    icon: <FaLinkedin size={32} color="#0A66C2" />,
    label: 'LinkedIn'
  },
  {
    href: 'https://www.instagram.com/your-instagram/',
    icon: <FaInstagram size={32} color="#E4405F" />,
    label: 'Instagram'
  },
  {
    href: 'https://wa.me/your-whatsapp-number',
    icon: <FaWhatsapp size={32} color="#25D366" />,
    label: 'WhatsApp'
  },
  {
    href: 'mailto:your@email.com',
    icon: <MdEmail size={32} color="#EA4335" />,
    label: 'Mail'
  },
  {
    href: 'https://discord.com/users/your-discord-id',
    icon: <FaDiscord size={32} color="#5865F2" />,
    label: 'Discord'
  },
  {
    href: 'https://www.reddit.com/user/your-reddit/',
    icon: <FaReddit size={32} color="#FF4500" />,
    label: 'Reddit'
  }
];

const Contact = () => {
  return (
    <div style={{ fontFamily: "'VT323', 'Press Start 2P', 'Courier New', Courier, monospace", color: "#fff", textAlign: "center", marginTop: "2rem" }}>
      <h1>Contact</h1>
      <p>Contact me via any platform below:</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
        {socialLinks.map(link => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" title={link.label} style={{ textDecoration: 'none' }}>
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
