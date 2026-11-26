import { currencyLabels, currencyOptions, type Currency } from '../lib/useCurrency';

type CurrencyBarProps = {
  currency: Currency;
  onChange: (c: Currency) => void;
};

export default function CurrencyBar({ currency, onChange }: CurrencyBarProps) {
  return (
    <div className="mb-10">
      <p className="text-sm text-white/60 font-light leading-relaxed text-center mb-4">
        All earnings are shown in GBP (£). Select your preferred currency below:
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {currencyOptions.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => onChange(c)}
            aria-pressed={currency === c}
            className={`px-5 py-2.5 text-sm font-medium rounded-full border transition-all duration-300 ${
              currency === c
                ? 'bg-[#ff1493] text-black border-[#ff1493]'
                : 'border-white/20 text-white/60 hover:border-[#ff1493]/60 hover:text-white'
            }`}
          >
            {currencyLabels[c]}
          </button>
        ))}
      </div>
    </div>
  );
}
