import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import Logo from './Logo';

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Earnings', href: '/earnings' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'About us', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Referrals', href: '/referrals' },
  { label: 'Privacy', href: '/privacy' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const isPrivacyPage = window.location.pathname === '/privacy';
  const isAboutPage = window.location.pathname === '/about';
  const isHowItWorksPage = window.location.pathname === '/how-it-works';
  const isCareersPage = window.location.pathname === '/careers';
  const isReferralsPage = window.location.pathname === '/referrals';
  const isLeaderboardPage = window.location.pathname === '/leaderboard';
  const isCaseStudyPage = window.location.pathname === '/case-study/sara';
  const isEarningsPage = window.location.pathname === '/earnings';
  const homeHref = (href: string) =>
    href.startsWith('#') && (isPrivacyPage || isAboutPage || isHowItWorksPage || isCareersPage || isReferralsPage || isLeaderboardPage || isCaseStudyPage || isEarningsPage) ? `/${href}` : href;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="absolute left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6 md:py-4">
        <nav className="mx-auto max-w-6xl">
          {/* Mobile brand and menu */}
          <div className="flex w-full flex-col items-center md:hidden">
            <Logo className="w-full max-w-[90vw]" taglineColor="#ffffff" />
            <button
              onClick={() => setOpen(true)}
              className="mt-2 self-end inline-flex items-center justify-center rounded-full bg-[#ff1493] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:scale-[1.02] hover:bg-[#ff1493]/90 active:scale-[0.98]"
              aria-label="Open menu"
            >
              MENU
            </button>
          </div>

          {/* Desktop links + CTA centered */}
          <div className="hidden items-center justify-end gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={homeHref(item.href)}
                className="text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-300 text-[#ff1493] hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={isCareersPage ? '#careers-application' : isPrivacyPage || isAboutPage || isHowItWorksPage || isReferralsPage || isLeaderboardPage || isCaseStudyPage || isEarningsPage ? '/#application' : '#application'}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wide uppercase rounded-full bg-[#ff1493] text-black hover:bg-[#ff1493]/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Apply Now
            </a>
          </div>

        </nav>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
            onClick={close}
          />

          {/* Panel */}
          <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-jet-black border-l border-white/10 flex flex-col animate-fade-in">
            <div className="flex items-center justify-end px-6 py-4 border-b border-white/10">
              <button
                onClick={close}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white/50 transition-all"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 flex flex-col px-6 py-8 gap-1 overflow-y-auto">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={homeHref(item.href)}
                  onClick={close}
                  className="py-4 text-sm tracking-[0.2em] uppercase font-medium border-b border-white/5 transition-colors duration-300 text-[#ff1493] hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="px-6 py-6 border-t border-white/10">
              <a
                href={isCareersPage ? '#careers-application' : isPrivacyPage || isAboutPage || isHowItWorksPage || isReferralsPage || isLeaderboardPage || isCaseStudyPage || isEarningsPage ? '/#application' : '#application'}
                onClick={close}
                className="w-full inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide uppercase rounded-full bg-[#ff1493] text-black hover:bg-[#ff1493]/90 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
