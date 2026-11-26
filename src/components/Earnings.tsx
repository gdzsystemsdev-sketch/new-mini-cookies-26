import Navbar from './Navbar';
import Footer from './Footer';
import CTAButton from './CTAButton';
import EarningsCalculator from './EarningsCalculator';
import { useCurrency, type Currency } from '../lib/useCurrency';

type PayRow = {
  hours: string;
  minUsd: number;
  maxUsd: number;
  plusSuffix?: boolean;
  suits: string;
  featured?: boolean;
};

type Engine = {
  number: string;
  title: string;
  description: string;
};

const payRows: PayRow[] = [
  { hours: '6–8 hrs', minUsd: 500, maxUsd: 1100, suits: 'Beginners testing the waters, side income' },
  { hours: '10–14 hrs', minUsd: 1500, maxUsd: 2500, suits: 'Part-time alongside studies or another job' },
  { hours: '15–20 hrs', minUsd: 3000, maxUsd: 4500, suits: 'Serious earners building consistent momentum', featured: true },
  { hours: '25–30 hrs', minUsd: 5000, maxUsd: 8500, suits: 'Full-time creators with an established fan base', featured: true },
  { hours: '30+ hrs', minUsd: 6500, maxUsd: 12000, plusSuffix: true, suits: 'Top earners scaling across all 5 streaming platforms.', featured: true },
];

const currencySymbols: Record<Currency, string> = { GBP: '£', USD: '$', EUR: '€' };
const usdRates: Record<Currency, number> = { GBP: 0.79, USD: 1, EUR: 0.92 };

function fmtUsd(usd: number, currency: Currency): string {
  return currencySymbols[currency] + Math.round(usd * usdRates[currency]).toLocaleString('en-US');
}

const trustPoints = [
  ['Free To Join', 'Zero upfront costs or hidden fees'],
  ['Weekly Payouts', 'Paid reliably every week, no holds'],
  ['Zero Lock-In', 'No contracts, leave anytime'],
  ['All-In Managed', '10 income streams built around you'],
];

const engines: Engine[] = [
  {
    number: '01',
    title: '5-Platform Simultaneous Multi-Streaming',
    description: 'We configure low-latency multi-streaming across 5 top platforms at once—multiplying your live room traffic and viewer reach for the exact same time spent on camera. One shift, five audiences paying you simultaneously.',
  },
  {
    number: '02',
    title: 'Live Room Ghostwriters, Peak Timing & Upsells',
    description: 'Showing up on a regular schedule during peak global traffic hours builds loyal regulars who return and tip heavily. On every stream, our live chat team works your room in real time—driving private shows, custom requests, and direct upsells while you focus 100% on performing.',
  },
  {
    number: '03',
    title: '24/7 Off-Platform Earning Engine (Passive Sales)',
    description: 'We set up and manage external accounts across WhatsApp, Telegram, Snapchat, Signal, and Viber. Viewers pay high direct tips on stream to unlock access, and our 24/7 sales team handles daily messaging and relationship building around the clock—closing high-ticket custom sales even while you sleep.',
  },
  {
    number: '04',
    title: '"Blue Page" & Native Subscriptions',
    description: 'Every streaming platform features native monthly fan subscriptions, and we continuously funnel your live traffic directly into your "blue page". Our team manages content scheduling, 4 unique chatting styles that maximize your earnings, and subscriber retention 24/7—turning one-time stream viewers into predictable monthly recurring revenue.'
  },
];

function SectionDivider({ number }: { number: string }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="text-sm font-medium uppercase tracking-[0.3em] text-white/40">{number}</span>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}

function Earnings() {
  const [currency] = useCurrency();
  return (
    <div className="min-h-screen bg-jet-black text-pure-white">
      <Navbar />
      <main className="pt-32 sm:pt-40">
        <div className="mx-auto max-w-6xl px-6">
          <section className="pb-20 sm:pb-32">
            <nav className="mb-10 flex items-center gap-2 text-xs tracking-wide text-white/35" aria-label="Breadcrumb">
              <a href="/" className="transition-colors hover:text-[#ff1493]">Home</a>
              <span>/</span>
              <span className="text-white/60">Earnings</span>
            </nav>

            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#ff1493]/50 bg-[#ff1493]/10 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#ff1493]">
              <span className="h-2 w-2 rounded-full bg-[#ff1493] shadow-[0_0_12px_rgba(255,20,147,0.8)]" />
              Transparent Earnings Guide · 2026
            </div>
            <h1 className="max-w-5xl font-extrabold italic leading-[0.98] tracking-tight" style={{ fontSize: 'clamp(2.75rem, 7vw, 6.75rem)' }}>
              How Much Do Creators Actually <span className="text-[#ff1493]">Take Home?</span>
            </h1>
            <p className="mt-8 max-w-4xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              Most agencies show you inflated gross screenshots while hiding their cut. Every number below is net take-home pay—what actually hits your account after our split, backed by full 24/7 management and zero upfront costs.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <CTAButton label="Apply Now — Get Your Custom Estimate →" href="/#application" color="pink" className="px-6 py-3 text-xs" />
              <CTAButton label="See Sara's Real Case Study →" href="/case-study/sara" variant="outline" className="px-6 py-3 text-xs" />
            </div>
            <p className="mt-5 text-xs uppercase tracking-[0.16em] text-white/40">Free to join · Weekly payouts · Zero lock-in contracts · Must be 18+</p>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {trustPoints.map(([title, text]) => (
                <div key={title} className="bg-[#0d0d0d] p-6 sm:p-7">
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ff1493]">{title}</p>
                  <p className="mt-3 text-sm leading-6 text-white/55">{text}</p>
                </div>
              ))}
            </div>
          </section>

          <EarningsCalculator />

          <section className="border-t border-white/10 py-20 sm:py-32">
            <SectionDivider number="01" />
            <div className="mb-12 max-w-4xl">
              <h2 className="font-extrabold italic leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}>
                Income by <span className="text-[#ff1493]">Hours Worked</span>
              </h2>
              <p className="mt-6 text-center text-[20px] leading-7 text-white/60 sm:leading-8">
                Every figure below reflects real market ranges after our split—<strong>from live streaming platforms alone</strong>, before adding extra income from off-platform channels and your subscription page. When executed properly, off-platform and subscription-page revenue often surpasses streaming earnings on its own. We’ll map out your realistic earnings estimate on our call.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.65fr)_minmax(280px,0.75fr)] lg:items-start">
              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full min-w-[680px] border-collapse text-left">
                  <thead>
                    <tr className="bg-white/[0.04]">
                      <th className="border-r border-white/10 p-5 text-xs font-medium uppercase tracking-[0.16em] text-white/45">Hours / Week</th>
                      <th className="border-r border-white/10 p-5 text-xs font-medium uppercase tracking-[0.16em] text-white/45">Your Monthly Take-Home</th>
                      <th className="p-5 text-xs font-medium uppercase tracking-[0.16em] text-white/45">Who This Suits</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payRows.map((row) => (
                      <tr key={row.hours} className={`border-t border-white/10 transition-colors hover:bg-white/[0.03] ${row.featured ? 'bg-[#ff1493]/[0.045]' : ''}`}>
                        <td className="border-r border-white/10 p-5 text-sm font-semibold text-white">{row.hours}</td>
                        <td className="border-r border-white/10 p-5 text-base font-extrabold text-[#ff1493] sm:text-lg">{fmtUsd(row.minUsd, currency)} – {fmtUsd(row.maxUsd, currency)}{row.plusSuffix ? '+' : ''} / mo</td>
                        <td className="p-5 text-sm leading-6 text-white/60">{row.suits}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="border-t border-[#ff1493]/30 bg-[#ff1493]/[0.06] px-5 py-4 text-xs leading-5 text-white/60">
                  Note: All figures represent your net take-home earnings after agency commission—not inflated gross platform numbers.
                </div>
              </div>

              <aside className="rounded-2xl border border-[#ff1493]/40 bg-[#ff1493]/[0.04] p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff1493]">The income curve</p>
                <h3 className="mt-4 text-2xl font-bold italic leading-tight text-white sm:text-3xl">More than hours. Better infrastructure.</h3>
                <p className="mt-5 text-sm leading-7 text-white/60">Your live hours create the momentum. Our team turns that momentum into more audiences, stronger conversions, and income that continues between shifts.</p>
                <div className="mt-7 space-y-4 border-t border-white/10 pt-6">
                  {['Consistent weekly schedule', 'Peak-hour stream strategy', 'A team handling the backend'].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm leading-6 text-white/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff1493]" />
                      {item}
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </section>

          <section className="border-t border-white/10 py-20 sm:py-32">
            <SectionDivider number="02" />
            <div className="mb-12 max-w-4xl">
              <h2 className="font-extrabold italic leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}>
                How We Multiply What You <span className="text-[#ff1493]">Earn Per Hour</span>
              </h2>
              <p className="mt-6 text-base leading-7 text-white/60 sm:text-lg sm:leading-8">Hours spent live on camera are only one piece of the equation. Here is how our 10-stream infrastructure turns a single streaming shift into round-the-clock recurring revenue:</p>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {engines.map((engine) => (
                <article key={engine.number} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-[#ff1493]/50 sm:p-8">
                  <div className="flex items-start gap-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ff1493] text-sm font-bold text-black shadow-[0_0_20px_rgba(255,20,147,0.25)]">{engine.number}</span>
                    <div>
                      <h3 className="text-xl font-bold italic leading-tight text-white sm:text-2xl">{engine.title}</h3>
                      <p className="mt-5 text-sm leading-7 text-white/65 sm:text-base">{engine.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="border-t border-white/10 py-20 sm:py-32">
            <SectionDivider number="03" />
            <div className="rounded-2xl border border-[#ff1493]/50 bg-[#ff1493]/[0.045] px-6 py-12 text-center sm:px-12 sm:py-16">
              <span className="inline-flex items-center gap-3 rounded-full border border-[#ff1493]/50 bg-[#ff1493]/10 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#ff1493]">
                <span className="h-2 w-2 rounded-full bg-[#ff1493] shadow-[0_0_12px_rgba(255,20,147,0.8)]" />
                Now Accepting New Creators
              </span>
              <h2 className="mx-auto mt-8 max-w-4xl font-extrabold italic leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}>Get Your Personalized <span className="text-[#ff1493]">Earnings Breakdown</span></h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">Zero upfront fees, free studio equipment if needed, weekly payouts, and zero lock-in contracts. Tell us your weekly availability and we&apos;ll map out your exact setup.</p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <CTAButton label="Apply Now — Start Your Private Consultation →" href="/#application" color="pink" className="px-6 py-3 text-xs" />
                <CTAButton label="Read Sara's $14,650/mo Case Study →" href="/case-study/sara" variant="outline" className="px-6 py-3 text-xs" />
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Earnings;
