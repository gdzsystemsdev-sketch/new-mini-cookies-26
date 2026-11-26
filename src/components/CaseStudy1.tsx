import { useState, type ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import CTAButton from './CTAButton';

type ProofItem = {
  label: string;
  value: string;
};

type OperationCardProps = {
  number: string;
  title: string;
  children: ReactNode;
  proofTitle: string;
  proofItems: ProofItem[];
};

type FinancialRow = {
  engine: string;
  gross: string;
  net: string;
  agency: string;
  effort: string;
};

type TotalComparisonRow = {
  metric: string;
  solo: string;
  miniCookies: string;
};

type GrowthRow = {
  phase: string;
  gross: string;
  net: string;
  agency: string;
  hours?: string;
  milestones: string;
  peak?: boolean;
  isTotal?: boolean;
};

type Currency = 'GBP' | 'USD' | 'EUR';

const currencySymbols: Record<Currency, string> = { GBP: '£', USD: '$', EUR: '€' };
const currencyLabels: Record<Currency, string> = { GBP: 'GBP (£)', USD: 'USD ($)', EUR: 'EUR (€)' };

const gbpRates: Record<Currency, number> = {
  GBP: 1,
  USD: 1 / 0.79,
  EUR: 0.92 / 0.79,
};

function fmt(gbp: number, currency: Currency): string {
  return currencySymbols[currency] + (gbp * gbpRates[currency]).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function fmtWhole(gbp: number, currency: Currency): string {
  return currencySymbols[currency] + Math.round(gbp * gbpRates[currency]).toLocaleString('en-US');
}

function CurrencyBar({ currency, onChange }: { currency: Currency; onChange: (c: Currency) => void }) {
  const options: Currency[] = ['GBP', 'USD', 'EUR'];
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] p-3 sm:p-4">
      <span className="mr-2 text-xs font-medium uppercase tracking-[0.2em] text-white/40">Currency</span>
      {options.map((c) => (
        <button
          key={c}
          type="button"
          onClick={() => onChange(c)}
          aria-pressed={currency === c}
          className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ${
            currency === c
              ? 'bg-[#ff1493] text-black'
              : 'border border-white/20 text-white/60 hover:border-white/40 hover:text-white'
          }`}
        >
          {currencyLabels[c]}
        </button>
      ))}
    </div>
  );
}

const getHeroStats = (currency: Currency) => [
  {
    label: 'Peak Monthly Net Take-Home',
    value: `${fmt(11573.5, currency)} / mo`,
    detail: `(Peak Gross Revenue: ${fmt(27018, currency)} / mo)`,
  },
  {
    label: 'Breakout Window',
    value: '4-Month Sprint',
    detail: '(vs. Entire Prior Year Solo)',
  },
  {
    label: 'Active Income Streams',
    value: '10 Total',
    detail: '(5 Live Streaming Platforms + 5 Off-Platform & Subscription Channels)',
  },
  {
    label: 'Weekly Streaming Schedule',
    value: '30 hrs / weekly',
    detail: '(Down from 65+ hrs/wk total grind)',
  },
];

const bottlenecks = [
  {
    title: 'Trapped on One Platform',
    text: 'Streaming on a single site with manual setup, missing out on peak global traffic windows and multi-platform reach.',
  },
  {
    title: 'Endless Offline Messaging & Admin',
    text: 'Trying to reply to every DM across every timezone alone, manually handling profile updates, and troubleshooting technical drops instead of focusing on her broadcast.',
  },
  {
    title: 'Missed High-Ticket Spenders',
    text: 'Entertaining live viewers while answering messages simultaneously caused high-spending regulars to drop off before converting.',
  },
];

const goals = [
  'Scale her monthly net take-home income significantly without burning out.',
  'Hand over 100% of daily live-room chatting and 24/7 off-platform messaging.',
  'Fully optimize her profiles, pricing menus, and multi-stream tech setup.',
  'Build and scale recurring subscription revenue on her "blue page".',
];

const getFinancialRows = (currency: Currency): FinancialRow[] => [
  {
    engine: 'Live Streaming (5 Platforms)',
    gross: fmt(9954, currency),
    net: fmt(4977, currency),
    agency: fmt(4977, currency),
    effort: 'Live on camera only',
  },
  {
    engine: 'Off-Platform Engine (WhatsApp, TG, Snap, etc.)',
    gross: fmt(7742, currency),
    net: fmt(1935.5, currency),
    agency: fmt(5806.5, currency),
    effort: '0 hrs (100% 24/7 team)',
  },
  {
    engine: '"Blue Page" (OnlyFans) & Subscriptions',
    gross: fmt(9322, currency),
    net: fmt(4661, currency),
    agency: fmt(4661, currency),
    effort: '0 hrs (Fully managed 24/7)',
  },
];

const getTotalComparison = (currency: Currency): TotalComparisonRow[] => [
  {
    metric: 'Total Revenue',
    solo: `~${fmt(15642, currency)}`,
    miniCookies: fmt(52614, currency),
  },
  {
    metric: "Sara's Net Take-Home",
    solo: `~${fmt(10636.56, currency)}`,
    miniCookies: fmt(23621, currency),
  },
  {
    metric: 'Agency Earned',
    solo: fmt(0, currency),
    miniCookies: fmt(28993, currency),
  },
  {
    metric: 'Hours Worked by Sara',
    solo: '3,120+ hrs',
    miniCookies: '480 hrs',
  },
  {
    metric: 'Time Period',
    solo: '12 months',
    miniCookies: '4 months',
  },
];

const getGrowthRows = (currency: Currency): GrowthRow[] => [
  {
    phase: 'Months 1–12 (Solo Phase)',
    gross: `~${fmt(15642, currency)} total`,
    net: `~${fmt(10636.56, currency)} total`,
    agency: fmt(0, currency),
    hours: '3,120+ hrs',
    milestones: 'Grinding 65+ hrs/wk on 1 platform, manual DMs, constant burnout and technical bottlenecks. 12 months of effort for less than a third of what she earned in 4 months with Mini Cookies.',
  },
  {
    phase: 'Month 13 (Onboarding & Setup)',
    gross: fmt(5056, currency),
    net: fmt(2449, currency),
    agency: fmt(2607, currency),
    milestones: 'Full technical deployment: 5-platform simulcast, geo-blocking, alias setup, and initial profile overhaul.',
  },
  {
    phase: 'Month 14 (30-Day Sprint Mark)',
    gross: fmt(11692, currency),
    net: fmt(5490.5, currency),
    agency: fmt(6201.5, currency),
    milestones: 'Live room chat team activated; external messaging apps (WhatsApp/Telegram) launched for VIPs.',
  },
  {
    phase: 'Month 15 (Slight Dip / Adjustment)',
    gross: fmt(8848, currency),
    net: fmt(4108, currency),
    agency: fmt(4740, currency),
    milestones: 'A slower month with traffic normalization and testing new streaming hours, proving consistency through dips.',
  },
  {
    phase: 'Month 16 (Peak Breakthrough)',
    gross: fmt(27018, currency),
    net: fmt(11573.5, currency),
    agency: fmt(15444.5, currency),
    milestones: 'Fully optimized 10-stream ecosystem hitting peak performance, whale tipping, and OnlyFans subscriber scaling.',
    peak: true,
  },
  {
    phase: '4-Month Partnership Total',
    gross: fmt(52614, currency),
    net: fmt(23621, currency),
    agency: fmt(28993, currency),
    hours: '480 hrs',
    milestones: 'Total revenue, net take-home, and agency earnings across the full 4-month partnership. Sara worked 480 hours compared to 3,120+ hours solo—2,640+ fewer hours for +12,984.44 more net take-home.',
    isTotal: true,
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

function OperationCard({ number, title, children, proofTitle, proofItems }: OperationCardProps) {
  return (
    <article className="border-t border-white/10 py-10 first:border-t-0 sm:py-14">
      <div className="grid gap-6 lg:grid-cols-[5rem_minmax(0,1fr)] lg:gap-10">
        <div className="flex items-start gap-4 lg:block">
          <span className="text-2xl font-extrabold italic leading-none text-[#ff1493] sm:text-3xl">{number}</span>
          <div className="mt-2 hidden h-px w-10 bg-white/20 lg:block" />
        </div>
        <div className="min-w-0">
          <h3 className="max-w-4xl font-extrabold italic leading-[1.1] tracking-tight text-white" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>{title}</h3>
          <div className="mt-7 space-y-6 text-sm leading-7 text-white/70 sm:text-base">{children}</div>
          {proofItems.length > 0 && (
            <div className="mt-10 border-t border-white/10 pt-6">
              <h4 className="font-bold uppercase tracking-[0.16em] text-[#ff1493]" style={{ fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)' }}>{proofTitle}</h4>
              <div className="mt-5 grid gap-x-8 sm:grid-cols-2">
                {proofItems.map((item) => (
                  <div key={item.label} className="border-t border-white/10 py-4">
                    <p className="text-xs uppercase tracking-[0.12em] text-white/40">{item.label}</p>
                    <p className="mt-2 text-base font-bold leading-6 text-white sm:text-lg">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function CaseStudy1() {
  const [currency, setCurrency] = useState<Currency>('GBP');

  const heroStats = getHeroStats(currency);
  const financialRows = getFinancialRows(currency);
  const totalComparison = getTotalComparison(currency);
  const growthRows = getGrowthRows(currency);

  return (
    <div className="min-h-screen bg-jet-black text-pure-white">
      <Navbar />
      <main className="pt-36 sm:pt-48">
        <div className="mx-auto max-w-6xl px-6">
          <section className="pb-20 sm:pb-32">
            <nav className="mb-10 flex items-center gap-2 text-xs tracking-wide text-white/35" aria-label="Breadcrumb">
              <a href="/" className="transition-colors hover:text-[#ff1493]">Home</a>
              <span>/</span>
              <span>Case Study</span>
              <span>/</span>
              <span className="text-white/60">Sara</span>
            </nav>
            <h1 className="headline">
              Most Agencies Show You Huge Numbers. Nobody Shows You What You Actually Take Home.
            </h1>
            <p className="mt-8 max-w-4xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              Most agencies brag about massive gross revenue screenshots while hiding their cuts and leaving you guessing what actually hits your bank account. At Mini Cookies, we believe in complete transparency. Here is the exact breakdown of how Sara went from a burnt-out solo creator trapped on one platform to scaling across 10 income streams—showing her Total Gross Revenue, Agency Earnings, and Exact Net Take-Home Pay across every single service.
            </p>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {heroStats.map((stat) => (
                <div key={stat.label} className="bg-[#0d0d0d] p-6 sm:p-7">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/45">{stat.label}</p>
                  <p className="mt-5 text-2xl font-extrabold italic leading-tight text-[#ff1493] sm:text-3xl">{stat.value}</p>
                  <p className="mt-3 text-sm leading-6 text-white/55">{stat.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mb-12">
            <CurrencyBar currency={currency} onChange={setCurrency} />
          </div>

          <section className="border-t border-white/10 py-20 sm:py-32">
            <SectionDivider number="01" />
            <div className="mb-14 max-w-5xl">
              <h2 className="font-extrabold italic leading-[1.1] tracking-tight text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                Before Mini Cookies. The Solo Bottleneck & <span className="text-[#ff1493]">Sara&apos;s Goals.</span>
              </h2>
              <p className="mt-6 max-w-4xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">Before partnering with Mini Cookies, Sara was working over 65 hours a week as an independent creator, earning roughly {fmtWhole(886.38, currency)}/month—and just {fmt(10636.56, currency)} total across an entire year. Operating alone meant carrying every technical, administrative, and sales task on her own shoulders.</p>
            </div>
            <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
              <div>
                <h3 className="font-extrabold italic leading-[1.1] tracking-tight text-white" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>The Solo <span className="text-[#ff1493]">Bottlenecks</span></h3>
                <div className="mt-8">{bottlenecks.map((item) => <div key={item.title} className="border-t border-white/10 py-6 last:border-b last:border-white/10"><h4 className="text-lg font-bold italic text-white sm:text-xl">{item.title}</h4><p className="mt-3 text-sm leading-7 text-white/55 sm:text-base">{item.text}</p></div>)}</div>
              </div>
              <div>
                <h3 className="font-extrabold italic leading-[1.1] tracking-tight text-white" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>Sara&apos;s Core <span className="text-[#ff1493]">Goals When Joining</span></h3>
                <div className="mt-8">{goals.map((goal, index) => <div key={goal} className="flex items-start gap-5 border-t border-white/10 py-6 last:border-b last:border-white/10"><span className="shrink-0 text-xl font-extrabold italic text-[#ff1493] sm:text-2xl">{String(index + 1).padStart(2, '0')}</span><p className="text-sm leading-7 text-white/75 sm:text-base">{goal}</p></div>)}</div>
              </div>
            </div>
          </section>

          <section className="border-t border-white/10 py-20 sm:py-32">
            <SectionDivider number="02" />
            <div className="mb-14 max-w-5xl">
              <h2 className="font-extrabold italic leading-[1.1] tracking-tight text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                How the Operation Runs. The Infrastructure & The System Behind <span className="text-[#ff1493]">Sara&apos;s Results</span>
              </h2>
              <p className="mt-6 max-w-4xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">When Sara joined Mini Cookies, we built a dedicated team around her and deployed our 10-source monetization ecosystem so her only job was showing up on camera with great energy.</p>
            </div>
            <div>
              <OperationCard number="01" title="Multi-Platform Streaming & Enterprise Privacy Shielding" proofTitle="Verified Audience & Spender Proof — Top 3 Live Tippers (5 Platforms Combined, 4-Month Totals)" proofItems={[{ label: 'Total Combined Followers', value: '34,500+ followers across all 5 streaming platforms' }, { label: 'Top Tipper #1', value: `${fmt(2725.5, currency)} in live room tips & private shows` }, { label: 'Top Tipper #2', value: `${fmt(2212, currency)} in live room tips & private shows` }, { label: 'Top Tipper #3', value: `${fmt(1659, currency)} in live room tips & private shows` }]}>
                <p><strong className="font-semibold text-white">5-Platform Simultaneous Multi-Streaming:</strong> Our Tech Support team configured low-latency multi-streaming across 5 top platforms at once—multiplying Sara&apos;s live audience and room traffic for the exact same time spent on camera.</p>
                <p><strong className="font-semibold text-white">Full Identity & Geo-Blocking Protection:</strong> Before going live, we set up a dedicated stage alias, municipal/regional/national geo-blocking so nobody in her area can find her, and automated DMCA content monitoring.</p>
                <p><strong className="font-semibold text-white">Profile & Storefront Optimization:</strong> Dedicated Profile Operators overhauled her bios, thumbnails, media folders, and tipping menus to turn casual room visitors into paying buyers.</p>
              </OperationCard>
              <OperationCard number="02" title="Real-Time Stream-Platforms Sales Team (Live Ghost-Writers)" proofTitle="Live Room Sales & Conversion Support" proofItems={[]}>
                <p><strong className="font-semibold text-white">Live Room Domination:</strong> On every single broadcast, specialized stream ghost-writers operate Sara&apos;s chat in real time—greeting viewers the second they enter, spotting high-spending whales immediately, and driving tips and private invites while she focuses 100% on performing.</p>
                <p><strong className="font-semibold text-white">1-on-1 Coaching & Peak-Hour Strategy:</strong> Her Personal Coach and Account Manager track live metrics daily, guiding her on peak traffic hours, show psychology, and custom pricing mechanics.</p>
              </OperationCard>
              <OperationCard number="03" title="24/7 Off-Platform Earning Engine (Passive Round-the-Clock Sales)" proofTitle="Off-Platform Loyal VIP Audience & Top 3 Spenders (4-Month Totals)" proofItems={[{ label: 'Active VIP Funnel Size', value: '180 active off-platform contacts across WhatsApp, Telegram, Snapchat & Signal' }, { label: 'VIP Fan #1', value: `${fmt(5925, currency)} total spend (Custom content & daily relationship management)` }, { label: 'VIP Fan #2', value: `${fmt(4108, currency)} total spend (High-ticket monthly packages)` }, { label: 'VIP Fan #3', value: `${fmt(3239, currency)} total spend (Recurring off-stream tips & requests)` }]}>
                <p><strong className="font-semibold text-white">5 Done-For-You Messaging Channels:</strong> We set up and manage external accounts across WhatsApp, Telegram, Snapchat, Signal, and Viber. Fans on stream pay high direct tips to unlock access to these apps.</p>
                <p><strong className="font-semibold text-white">24/7 Relationship & High-Ticket Sales Team:</strong> Once fans land on messaging apps, our dedicated off-platform sales team takes over 24/7 in structured shifts—building genuine long-term connections in Sara&apos;s voice and closing high-ticket custom sales around the clock while she is offline or sleeping.</p>
              </OperationCard>
              <OperationCard number="04" title={'"Blue Page" (OnlyFans) & Platform Subscriptions'} proofTitle="OnlyFans Audience & Revenue Proof (Month 16)" proofItems={[{ label: 'Total Active Subscribers', value: '1,450 paying subscribers' }, { label: 'Month 16 Gross Revenue', value: fmt(9322, currency) }, { label: "Sara's Net Take-Home", value: fmt(4661, currency) }]}>
                <p><strong className="font-semibold text-white">Automated Traffic Forwarding:</strong> Across all 5 live streaming platforms, traffic is continuously funneled into her OnlyFans ("blue page") and native platform subscription tiers.</p>
                <p><strong className="font-semibold text-white">24/7 Full Account Management:</strong> Our team handles content scheduling, DM sales, and subscriber retention 24/7, turning live stream viewers into predictable monthly recurring revenue.</p>
              </OperationCard>
            </div>
          </section>

          <section className="border-t border-white/10 py-20 sm:py-32">
            <SectionDivider number="03" />
            <div className="mb-14 max-w-5xl">
              <h2 className="font-extrabold italic leading-[1.1] tracking-tight text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                Transparent Earnings Breakdown (Gross vs. <span className="text-[#ff1493]">Net Take-Home</span>)
              </h2>
              <p className="mt-6 max-w-4xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">Unlike agencies that hide behind inflated gross revenue numbers, here is the exact earnings breakdown matching Sara&apos;s peak month (Month 16) of {fmt(27018, currency)} gross—showing every pound of revenue, Sara&apos;s net take-home, and the agency&apos;s earnings across each income engine.</p>
            </div>
            <div className="mt-12">
              {financialRows.map((row) => (
                <article key={row.engine} className="border-t border-white/10 py-8 last:border-b last:border-white/10 sm:py-10">
                  <h3 className="max-w-3xl text-xl font-bold italic leading-tight text-white sm:text-2xl">{row.engine}</h3>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    <div><p className="text-xs uppercase tracking-[0.16em] text-white/40">Monthly Gross Revenue</p><p className="mt-2 text-2xl font-extrabold italic leading-tight text-white sm:text-3xl">{row.gross}</p></div>
                    <div><p className="text-xs uppercase tracking-[0.16em] text-white/40">Sara&apos;s Net Take-Home</p><p className="mt-2 text-2xl font-extrabold italic leading-tight text-[#ff1493] sm:text-3xl">{row.net}</p></div>
                    <div><p className="text-xs uppercase tracking-[0.16em] text-white/40">Agency Earned</p><p className="mt-2 text-xl font-bold leading-tight text-white sm:text-2xl">{row.agency}</p></div>
                    <div><p className="text-xs uppercase tracking-[0.16em] text-white/40">Creator Active Effort</p><p className="mt-2 text-sm leading-6 text-white/65 sm:text-base">{row.effort}</p></div>
                  </div>
                </article>
              ))}
              <div className="border-t border-white/10 pt-8 sm:pt-10">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">Month 16 Total</p>
                <div className="mt-4 grid gap-6 sm:grid-cols-3 sm:items-end lg:grid-cols-4 lg:gap-8">
                  <div><p className="text-xs uppercase tracking-[0.16em] text-white/40">Total Gross Revenue</p><p className="mt-2 text-2xl font-extrabold italic text-white sm:text-3xl">{fmt(27018, currency)}</p></div>
                  <div><p className="text-xs uppercase tracking-[0.16em] text-white/40">Sara&apos;s Net Take-Home</p><p className="mt-2 text-2xl font-extrabold italic text-[#ff1493] sm:text-3xl">{fmt(11573.5, currency)}</p></div>
                  <div><p className="text-xs uppercase tracking-[0.16em] text-white/40">Agency Earned</p><p className="mt-2 text-xl font-bold text-white sm:text-2xl">{fmt(15444.5, currency)}</p></div>
                  <p className="text-sm font-semibold leading-6 text-white">Weekly Payouts, Zero Lock-In</p>
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-white/10 py-20 sm:py-32">
            <SectionDivider number="04" />
            <div className="mb-14 max-w-5xl">
              <h2 className="font-extrabold italic leading-[1.1] tracking-tight text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                Growth Trajectory &amp; <span className="text-[#ff1493]">Month-by-Month Breakdown</span>
              </h2>
            </div>

            <div className="mb-20">
              <h3 className="font-extrabold italic leading-[1.1] tracking-tight text-white" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
                Direct Total Comparison: Solo (12 Months) vs. Mini Cookies <span className="text-[#ff1493]">(4 Months)</span>
              </h3>
              <div className="mt-8">
                {totalComparison.map((row) => (
                  <article key={row.metric} className="border-t border-white/10 py-8 last:border-b last:border-white/10 sm:py-10">
                    <h4 className="text-xl font-bold italic text-white sm:text-2xl">{row.metric}</h4>
                    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:gap-10">
                      <div><p className="text-xs uppercase tracking-[0.16em] text-white/40">Solo (12 Months)</p><p className="mt-2 text-lg font-bold leading-7 text-white/55 sm:text-xl">{row.solo}</p></div>
                      <div><p className="text-xs uppercase tracking-[0.16em] text-white/40">Mini Cookies (4 Months)</p><p className="mt-2 text-xl font-extrabold italic leading-7 text-[#ff1493] sm:text-2xl">{row.miniCookies}</p></div>
                    </div>
                  </article>
                ))}
              </div>
              <div className="mt-10 rounded-2xl bg-[#ff1493]/[0.04] px-6 py-8 text-center sm:px-12 sm:py-10">
                <p className="text-lg font-extrabold italic leading-tight text-white sm:text-2xl">
                  +{fmt(12984.44, currency)} more net take-home for Sara <span className="text-[#ff1493]">in one-third the months</span>, and 2,640+ fewer hours worked.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-extrabold italic leading-[1.1] tracking-tight text-white" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>Month-by-Month Growth Timeline <span className="text-[#ff1493]">(Months 13–16)</span></h3>
              <div className="mt-8">
                {growthRows.map((row) => (
                  <article key={row.phase} className={`border-t border-white/10 py-8 last:border-b last:border-white/10 sm:py-10 ${row.peak ? 'bg-white/[0.03]' : ''} ${row.isTotal ? 'bg-[#ff1493]/[0.03]' : ''}`}>
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
                      <h4 className="min-w-0 flex-1 text-xl font-bold italic leading-tight text-white sm:text-2xl">{row.phase}</h4>
                      <div className="grid gap-5 sm:grid-cols-2 lg:w-[60%] lg:grid-cols-4">
                        <div><p className="text-xs uppercase tracking-[0.16em] text-white/40">Gross Revenue</p><p className="mt-2 text-xl font-extrabold italic text-white sm:text-2xl">{row.gross}</p></div>
                        <div><p className="text-xs uppercase tracking-[0.16em] text-white/40">Sara&apos;s Net</p><p className={`mt-2 text-xl font-extrabold italic sm:text-2xl ${row.peak || row.isTotal ? 'text-[#ff1493]' : 'text-white'}`}>{row.net}</p></div>
                        <div><p className="text-xs uppercase tracking-[0.16em] text-white/40">Agency Earned</p><p className="mt-2 text-lg font-bold text-white sm:text-xl">{row.agency}</p></div>
                        {row.hours && <div><p className="text-xs uppercase tracking-[0.16em] text-white/40">Hours Worked</p><p className="mt-2 text-sm font-semibold leading-6 text-white/80 sm:text-base">{row.hours}</p></div>}
                      </div>
                    </div>
                    <div className="mt-6 max-w-4xl border-t border-white/10 pt-5"><p className="text-xs uppercase tracking-[0.16em] text-white/40">Key Milestones &amp; Operations</p><p className="mt-2 text-sm leading-7 text-white/60 sm:text-base">{row.milestones}</p></div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="case-study-application" className="border-t border-white/10 py-20 sm:py-32">
            <SectionDivider number="05" />
            <div className="mb-12 text-center"><h2 className="font-extrabold italic leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}>Ready to Build Your Own Case Study?</h2><p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">We accept fewer than 3% of applicants because we build an entire dedicated team around every creator we partner with—with zero upfront costs, free studio equipment if needed, weekly payouts, and zero lock-in contracts.</p></div>
            <div className="flex justify-center">
              <CTAButton label="Apply Now" href="/#application" color="pink" />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
