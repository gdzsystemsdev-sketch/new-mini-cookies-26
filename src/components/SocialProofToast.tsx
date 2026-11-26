import { useEffect, useRef, useState } from 'react';
import { MapPin, X } from 'lucide-react';

const countries = [
  'United Kingdom',
  'United States',
  'Australia',
  'Canada',
  'Netherlands',
  'Germany',
];

type Notification = {
  country: string;
};

function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function selectCountry(previousCountry: string | null): string {
  const availableCountries = countries.filter((country) => country !== previousCountry);
  return availableCountries[Math.floor(Math.random() * availableCountries.length)];
}

export default function SocialProofToast() {
  const [notification, setNotification] = useState<Notification>({ country: '' });
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const previousCountry = useRef<string | null>(null);
  const dismissRef = useRef<() => void>(() => undefined);

  useEffect(() => {
    let cancelled = false;
    let nextTimer: number | undefined;
    let hideTimer: number | undefined;
    let removeTimer: number | undefined;

    const clearTimer = (timer: number | undefined): void => {
      if (timer !== undefined) window.clearTimeout(timer);
    };

    function scheduleNext(): void {
      nextTimer = window.setTimeout(showNotification, randomBetween(20000, 35000));
    }

    function dismissNotification(): void {
      clearTimer(hideTimer);
      hideTimer = undefined;
      setVisible(false);
      clearTimer(removeTimer);
      removeTimer = window.setTimeout(() => setMounted(false), 300);
      scheduleNext();
    }

    function showNotification(): void {
      const country = selectCountry(previousCountry.current);
      previousCountry.current = country;
      setNotification({ country });
      setMounted(true);
      window.requestAnimationFrame(() => {
        if (!cancelled) setVisible(true);
      });
      hideTimer = window.setTimeout(dismissNotification, 4000);
    }

    dismissRef.current = dismissNotification;
    nextTimer = window.setTimeout(showNotification, randomBetween(6000, 8000));

    return () => {
      cancelled = true;
      clearTimer(nextTimer);
      clearTimer(hideTimer);
      clearTimer(removeTimer);
      dismissRef.current = () => undefined;
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`pointer-events-auto fixed bottom-4 left-1/2 z-[55] w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 transition-all duration-300 ease-out md:bottom-6 md:left-6 md:w-auto md:translate-x-0 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}
      role="status"
      aria-live="polite"
    >
      <div className="relative flex items-start gap-3 rounded-xl border border-white/10 bg-black/90 px-4 py-3.5 pr-10 shadow-2xl backdrop-blur-md">
        <span className="mt-1.5 h-2 w-2 shrink-0 animate-pulse rounded-full bg-pink-500" aria-hidden="true" />
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-wide text-white">New Application Submitted</p>
          <p className="mt-1 flex items-center gap-1.5 text-xs text-white/55">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-pink-500" strokeWidth={2} aria-hidden="true" />
            From {notification.country}
            <span className="text-white/30">·</span>
            Just now
          </p>
        </div>
        <button
          type="button"
          onClick={() => dismissRef.current()}
          className="absolute right-2.5 top-2.5 rounded-full p-1 text-white/45 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Close notification"
        >
          <X className="h-4 w-4" strokeWidth={1.8} />
        </button>
      </div>
    </div>
  );
}
