import CTAButton from './CTAButton';
import { useCurrency, type Currency } from '../lib/useCurrency';

const referralAmounts: Record<Currency, string> = {
  GBP: '£32,766',
  USD: '$41,476',
  EUR: '€38,158',
};

type ReferModelProps = {
  currency?: Currency;
};

export default function ReferModel({ currency: currencyProp }: ReferModelProps = {}) {
  const [sharedCurrency] = useCurrency();
  const currency = currencyProp ?? sharedCurrency;
  return (
    <section id="referrals" className="py-10 sm:py-32 px-6 bg-jet-black border-t border-white/5 relative overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">11</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="flex flex-col items-center text-center">
          <h2
            className="font-extrabold tracking-tight leading-[1.05] mb-8"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontStyle: 'italic' }}
          >
            Referral <span style={{ color: '#ff1493' }}>Program</span>
          </h2>

          <p className="text-lg sm:text-xl text-white/80 font-light max-w-xl mb-4 leading-relaxed">
            One introduction. <span style={{ color: '#ff1493', fontWeight: 700 }}>{referralAmounts[currency]}</span> earned. Without actually working with us.
          </p>

          <p className="text-base text-white/60 font-light max-w-xl mb-4 leading-relaxed">
            Earn a % share each month from every creator you refer to us.
          </p>

          <p className="text-base text-white/50 font-light max-w-2xl mb-4 leading-relaxed">
            Know someone who could be a great fit to become a creator, or an established creator
            who could be earning way more?
          </p>

          <p className="text-base text-white/50 font-light max-w-2xl mb-12 leading-relaxed">
            Send them our way and collect your % share from their earnings each month.
          </p>

          <CTAButton
            label="See How It Works"
            href="/referrals"
            variant="solid"
            color="pink"
          />
        </div>
      </div>
    </section>
  );
}
