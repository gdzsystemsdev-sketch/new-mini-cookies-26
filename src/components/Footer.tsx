import { MessageCircle, Send } from 'lucide-react';
import Logo from './Logo';

type FooterLink = {
  label: string;
  href: string;
};

const footerLinks: FooterLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Earnings', href: '/earnings' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'FAQs', href: '/#faqs' },
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Referrals', href: '/referrals' },
  { label: 'Privacy', href: '/privacy' },
];

export default function Footer() {
  const applicationHref = window.location.pathname === '/' ? '#application' : '/#application';

  return (
    <footer className="border-t border-white/10 bg-jet-black px-6 pb-28 pt-16 sm:pb-24 sm:pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <Logo className="scale-[0.72]" taglineColor="rgb(255, 20, 147)" />
          <p className="mt-2 max-w-xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
            Built to give creators what <span style={{ color: 'rgb(255, 20, 147)' }}>every other agency couldn’t.</span>
          </p>
          <a
            href={applicationHref}
            className="mt-8 inline-flex items-center justify-center rounded-full border border-[rgba(255,20,147,0.65)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(255,20,147)] transition-all duration-300 hover:border-[rgb(255,20,147)] hover:bg-[rgba(255,20,147,0.1)] hover:text-white"
          >
            Apply Now -&gt;
          </a>
        </div>

        <nav
          aria-label="Footer navigation"
          className="mt-16 border-y border-white/10 py-8"
        >
          <ul className="flex flex-col items-center justify-center gap-5 text-center md:flex-row md:gap-8 lg:gap-10">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-xs font-medium uppercase tracking-[0.16em] text-[rgb(255,20,147)] transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col items-center pt-8 text-center">
          <p className="text-xs tracking-wide text-white/45">
            © 2026 Mini Cookies. All rights reserved.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs tracking-wide text-white/45">
            <a href="/privacy" className="transition-colors hover:text-[rgb(255,20,147)]">
              Privacy
            </a>
            <span className="text-white/20" aria-hidden="true">·</span>
            <a href="/terms" className="transition-colors hover:text-[rgb(255,20,147)]">
              Terms
            </a>
            <span className="text-white/20" aria-hidden="true">·</span>
            <a href="mailto:example@domain.com" className="transition-colors hover:text-[rgb(255,20,147)]">
              example@domain.com
            </a>
          </div>

          <div className="mt-6 flex flex-col items-center gap-3 text-xs tracking-wide text-white/50">
            <a
              href="https://t.me/mini_cookies_mgmt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <Send className="h-4 w-4 text-[rgb(255,20,147)]" strokeWidth={1.8} aria-hidden="true" />
              <span>@mini_cookies_mgmt</span>
              <span className="sr-only">on Telegram</span>
            </a>
            <a
              href="https://wa.me/message/CCNVZVWNKGFPA1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <MessageCircle className="h-4 w-4 text-[rgb(255,20,147)]" strokeWidth={1.8} aria-hidden="true" />
              <span>@mini_cookies_mgmt</span>
              <span className="sr-only">on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
