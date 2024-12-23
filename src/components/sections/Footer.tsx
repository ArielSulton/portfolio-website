import Container from '../ui/Container';
import { socialLinks } from '@/data';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <Container>
        <div className="text-center">
          {/* Tengahkan logo social links */}
          <div className="flex justify-center space-x-4 items-center mb-6">
            {socialLinks.map(({ Icon, href, ariaLabel }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* Perkecil teks copyright */}
          <p className="text-sm">&copy; {new Date().getFullYear()} Ariel Sulton. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
