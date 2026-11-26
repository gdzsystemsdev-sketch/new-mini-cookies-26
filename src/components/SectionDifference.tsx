import CTAButton from './CTAButton';

type ComparisonTopic = {
  title: string;
  typicalAgency: string;
  miniCookies: string;
};

const comparisonTopics: ComparisonTopic[] = [
  {
    title: 'Pay & Platforms',
    typicalAgency:
      'Pushes TikTok, Instagram, Reddit, X, Snapchat, Clapper, and dating apps chasing wasted views; hours spent filming, marketing, and growing socials bring zero direct pay.',
    miniCookies:
      'You earn from all 5 streaming platforms at once from day one, up to 5 off-platform earning channels that run 24/7, and your subscription page—so your time goes straight into paid income, without leaving room for uncaptured sales.',
  },
  {
    title: 'Fan Journey & Trust',
    typicalAgency:
      "Viewers see a short video, broken links in story highlights, landing page redirects, and finally subscribe—an endless loop of redirects that hits a dead end if they don't buy. Heavy time-wasters from social media apps, trust is lower than ever, no real connection, and almost every fan nowadays is aware that the page is run by a management agency, period.",
    miniCookies:
      'Active traffic is already waiting for you on all 5 streaming platforms with recurring subscriptions plus live earning features. Viewers already saw you live for higher trust and real connection—forwarding your existing viewers to your subscription page while promoting and growing your social media safely without bans, and most importantly moving loyal supporters into off-platform messaging apps instead of losing them.',
  },
  {
    title: 'Risk & Privacy',
    typicalAgency:
      'Competing with massive creators, shadowbans, sudden account wipes, lost followers, one fragile income stream, and partial visibility with high identity exposure.',
    miniCookies:
      'Low competition, up to 10 diversified income streams, never losing your followers or momentum, and full identity protection with privacy control.',
  },
];

function ComparisonText({ label, children, positive }: { label: string; children: string; positive?: boolean }) {
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <span
        className={`text-xs font-bold uppercase tracking-[0.18em] ${
          positive ? 'text-pink-500' : 'text-white/40'
        }`}
      >
        {label}
      </span>
      <p className="text-sm leading-relaxed text-white/70 sm:text-base sm:leading-relaxed">{children}</p>
    </div>
  );
}

export default function SectionDifference() {
  return (
    <section className="border-t border-white/5 bg-jet-black px-6 py-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-center gap-4">
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-white/40">04</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-pink-500"><span style={{ color: 'rgb(255, 20, 147)' }}>The Difference</span></p>

        <h2
          className="mb-6 max-w-4xl font-extrabold italic leading-[1.1] tracking-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
        >
          The Advantages You Have <span className="text-pink-500"><span style={{ color: 'rgb(255, 20, 147)' }}>Working With Us</span></span>
        </h2>

        <p className="mb-12 max-w-3xl text-[25px] font-bold leading-relaxed text-white/50 sm:mb-16">
          Unlike any other agency, we’ve designed a bulletproof growth system that simply makes sense.
        </p>

        <div className="hidden overflow-hidden rounded-2xl border border-white/10 lg:block">
          <div className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-white/10 bg-white/[0.03]">
            <div className="p-6 text-xs font-bold uppercase tracking-[0.18em] text-white/40">The difference</div>
            <div className="border-l border-white/10 p-6 text-xs font-bold uppercase tracking-[0.18em] text-white/40">
              Typical Agency
            </div>
            <div className="border-l border-white/10 p-6 text-xs font-bold uppercase tracking-[0.18em] text-pink-500">
              mini cookies
            </div>
          </div>

          {comparisonTopics.map((topic, index) => (
            <div
              key={topic.title}
              className={`grid grid-cols-[1.1fr_1fr_1fr] ${index < comparisonTopics.length - 1 ? 'border-b border-white/10' : ''}`}
            >
              <div className="p-6 sm:p-8">
                <h3 className="text-lg font-extrabold uppercase tracking-tight text-white sm:text-xl">{topic.title}</h3>
              </div>
              <div className="border-l border-white/10 p-6 sm:p-8">
                <p className="text-sm leading-relaxed text-white/65 sm:text-base">{topic.typicalAgency}</p>
              </div>
              <div className="border-l border-pink-500/25 bg-pink-500/[0.04] p-6 sm:p-8">
                <p className="text-sm leading-relaxed text-white/90 sm:text-base">{topic.miniCookies}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4 lg:hidden">
          {comparisonTopics.map((topic) => (
            <article key={topic.title} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
              <h3 className="border-b border-pink-500/30 bg-pink-500/[0.06] px-5 py-4 text-base font-extrabold uppercase tracking-tight text-white">
                {topic.title}
              </h3>
              <div className="space-y-6 p-5">
                <ComparisonText label="Typical Agency">{topic.typicalAgency}</ComparisonText>
                <div className="h-px bg-white/10" />
                <ComparisonText label="mini cookies" positive>
                  {topic.miniCookies}
                </ComparisonText>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center sm:mt-16">
          <h3
            className="font-extrabold italic leading-[1.1] tracking-tight"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            Imagine what you’re currently doing—just <span className="text-pink-500">10x.</span>
          </h3>
          <p className="mt-4 text-[25px] font-bold leading-relaxed text-white/60">
            And if you’re just starting out, you’re 10x ahead from day one.
          </p>
        </div>

        <div className="mt-12 flex justify-center sm:mt-16">
          <CTAButton label="Apply Now" variant="solid" color="pink" href="#application" />
        </div>
      </div>
    </section>
  );
}
