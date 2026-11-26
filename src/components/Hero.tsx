import Logo from './Logo';
import CTAButton from './CTAButton';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-start justify-center overflow-x-hidden bg-jet-black md:items-center">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)',
        }}
      />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 pb-10 pt-[10.5rem] text-center animate-fade-in md:px-6 md:pb-24 md:pt-36">
        <Logo className="hidden md:flex" taglineColor="#ffffff" />
        <h1
          className="mt-8 max-w-3xl font-extrabold italic leading-[1.05] tracking-tight"
          style={{
            fontSize: 'clamp(1.6rem, 7.5vw, 3.75rem)',
            overflowWrap: 'break-word',
          }}
        >
          <span className="block">Built To Give Creators What</span>
          <span className="block" style={{ color: 'rgb(255, 20, 147)' }}>Every Other Agency Couldn't.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
          <span className="text-white">•</span>&nbsp;Without anyone finding out&nbsp;<span className="text-white">•</span>&nbsp;Fully anonymous&nbsp;<span className="text-white">•</span>
          <br />
          <span className="text-white">•</span>&nbsp;No experience needed&nbsp;<span className="text-white">•</span>
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <CTAButton label="Apply Now" href="#application" color="pink" className="px-6 py-3 text-xs" />
          <CTAButton
            label="Calculate My Earnings"
            href="#earnings"
            variant="outline"
            className="border-[#ff1493]/60 px-6 py-3 text-xs text-[#ff1493] hover:border-[#ff1493] hover:bg-[#ff1493]/10"
          />
        </div>

        {/* Scroll indicator */}
        <div className="mt-10 flex flex-col items-center gap-2">
          <span className="text-[0.6rem] tracking-[0.3em] uppercase text-white/30">Scroll down</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
