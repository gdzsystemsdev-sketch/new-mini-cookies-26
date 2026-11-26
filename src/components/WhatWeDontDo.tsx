type Item = {
  title: string;
  description: string;
};

const items: Item[] = [
  {
    title: 'We never charge upfront fees or monthly retainers.',
    description: 'Zero out-of-pocket costs to start. We only earn a percentage of the revenue we generate together, never before you get paid.',
  },
  {
    title: 'We never up-sell you courses, guides, or coaching.',
    description: 'Every creator gets the exact same management: a personal team, live support, training, 1-1 coaching, scaling systems, a 5-platform multi-stream setup, a 5-part off-platform earning engine, and full "blue page" management.',
  },
  {
    title: 'We never force you onto public social media to chase free views.',
    description: 'No dancing on Instagram or TikTok for zero dollars or risking exposure on mainstream social media apps. Your time goes straight into paid, high-converting platforms.',
  },
  {
    title: 'We don’t accept applicants we don’t believe will succeed.',
    description: 'If the fit isn’t there, we tell you before a team gets built around you.',
  },
  {
    title: 'We never lock you into predatory, multi-year contracts.',
    description: 'You stay with Mini Cookies because of the results—not because you’re trapped in a contract you can’t exit.',
  },
  {
    title: 'We never rely on a single platform that can ban you overnight.',
    description: 'Putting 100% of your income on one site is a gamble. We diversify across up to 5 live platforms and 5 off-platform systems so one algorithm shift never wipes out your monthly earnings.',
  },
  {
    title: 'We never leave your growth dependent on luck or viral algorithms.',
    description: 'Going viral on social media is a lottery ticket. Our multi-platform system puts you directly in front of active buyers who are already logged in to spend.',
  },
  {
    title: 'We never make you film hundreds of unpaid TikToks or Reels every week.',
    description: 'Traditional agencies treat creators like unpaid video factories. We eliminate the endless social media hamster wheel so you focus strictly on generating earnings.',
  },
  {
    title: 'We never promise overnight riches with zero effort.',
    description: 'Real income takes consistent execution and smart systems—we give you the infrastructure and support to make your effort count.',
  },
];

export default function WhatWeDontDo() {
  return (
    <section className="py-10 sm:py-32 px-6 bg-jet-black border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">06</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <h2 className="font-extrabold tracking-tight leading-[1.1] mb-6 text-center" style={{ fontSize: 'clamp(2.125rem, 5vw, 3.5rem)', fontStyle: 'italic' }}>
          What We Don’t <span style={{ color: '#ff1493' }}>Do</span>
        </h2>
        <p className="text-center text-white/40 font-bold text-[25px] leading-relaxed mb-16 max-w-xl mx-auto">
          A brand is defined by what it refuses, not just what it provides.
        </p>

        <ul>
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-5 py-8 border-t border-white/10">
              <span className="shrink-0 w-8 h-8 rounded-full bg-[#ff1493] flex items-center justify-center mt-1">
                <span className="text-white text-sm font-bold leading-none">✕</span>
              </span>
              <div className="flex flex-col gap-2">
                <p className="text-white font-bold text-lg leading-snug">{item.title}</p>
                <p className="text-white/45 font-light text-base leading-relaxed">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
