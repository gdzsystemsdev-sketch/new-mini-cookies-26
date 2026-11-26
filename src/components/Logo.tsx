type LogoProps = {
  className?: string;
  taglineColor?: string;
};

export default function Logo({ className = '', taglineColor = '#ff1493' }: LogoProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <span
        className="whitespace-nowrap font-extrabold tracking-tight leading-none text-[clamp(2.75rem,14vw,9rem)] sm:text-[clamp(3.5rem,12vw,9rem)]"
      >
        mini<span className="font-light italic">cookies</span>
      </span>
      <span className="mt-2 text-[0.6rem] sm:text-xs tracking-[0.4em] uppercase font-medium" style={{ color: taglineColor }}>
        become a model
      </span>
    </div>
  );
}
