import { useState, type FormEvent, type ReactNode } from 'react';
import { Check } from 'lucide-react';

type ReferralForm = {
  fullName: string;
  email: string;
  whatsapp: string;
  instagram: string;
  telegram: string;
  discord: string;
  background: string;
  otherBackground: string;
  interest: string;
  creatorExperience: string;
  hasSubscriptionAccounts: string;
  subscriptionPlatform: string;
  subscriptionRevenue: string;
  streamingActivity: string;
  streamingRevenue: string;
  hasSocialAccounts: string;
  socialActivity: string;
  socialAge: string;
};

type FormErrors = Partial<Record<keyof ReferralForm, string>>;

type FieldProps = {
  label: string;
  error?: string;
  optional?: boolean;
  children: ReactNode;
};

const initialForm: ReferralForm = {
  fullName: '',
  email: '',
  whatsapp: '',
  instagram: '',
  telegram: '',
  discord: '',
  background: '',
  otherBackground: '',
  interest: '',
  creatorExperience: '',
  hasSubscriptionAccounts: '',
  subscriptionPlatform: '',
  subscriptionRevenue: '',
  streamingActivity: '',
  streamingRevenue: '',
  hasSocialAccounts: '',
  socialActivity: '',
  socialAge: '',
};

const backgroundOptions = [
  'Social media following',
  'I know creators personally',
  'Lead generation / + automations',
  'Appointment setter',
  'DM outreach',
  'Affiliate marketer',
  'Mini Cookies Creator',
  'Other',
];
const creatorExperienceOptions = ['0-1 year', '1-2 years', '2-3 years', '3-4 years', '4-5+ years'];
const subscriptionRevenueOptions = ['0-5k / month', '5k-10k / month', '10k-20k / month', '20-30k+ / month'];
const streamingActivityOptions = ['Brand new (account boost available)', '20 hours / week', '30 hours / week', '40 hours / week', '50+ hours / week'];
const streamingRevenueOptions = ['0-5k / month', '5k-10k / month', '10k-20k / month'];
const socialActivityOptions = ['Almost empty / brand new', 'Few posts / semi-active', 'Regularly posting / active'];
const socialAgeOptions = ['0-3 months', '3-6 months', '6-9 months', '1+ year'];

const inputClass = 'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition-all duration-200 placeholder:text-white/30 focus:border-white/40 focus:bg-white/[0.05]';
const selectClass = `${inputClass} cursor-pointer bg-neutral-900`;
const optionClass = 'bg-neutral-900 text-white';
const labelClass = 'mb-2 block text-xs font-medium uppercase tracking-wide text-white/50';

function Field({ label, error, optional, children }: FieldProps) {
  return (
    <div>
      <label className={labelClass}>
        {label} {optional && <span className="normal-case font-normal text-white/30">(optional)</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}

function GroupHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-8 flex items-center gap-4 border-t border-white/10 pt-8 first:border-t-0 first:pt-0">
      <span className="text-xs font-medium tracking-[0.3em] text-[#ff1493]">{number}</span>
      <h3 className="text-xl font-bold italic text-white sm:text-2xl">{title}</h3>
    </div>
  );
}

function ChoiceGroup({ label, value, onChange, error }: { label: string; value: string; onChange: (value: string) => void; error?: string }) {
  return (
    <Field label={label} error={error}>
      <div className="flex gap-3">
        {['Yes', 'No'].map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={value === option}
            className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${value === option ? 'border-[#ff1493] bg-[#ff1493] text-black' : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white'}`}
          >
            {option}
          </button>
        ))}
      </div>
    </Field>
  );
}

export default function ReferralApplicationForm() {
  const [form, setForm] = useState<ReferralForm>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof ReferralForm>(field: K, value: ReferralForm[K]) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const updateChoice = (field: keyof ReferralForm, value: string) => {
    update(field, value);
    if (field === 'hasSubscriptionAccounts' && value === 'No') {
      setForm((current) => ({ ...current, subscriptionPlatform: '' }));
      setErrors((current) => ({ ...current, subscriptionPlatform: undefined }));
    }
    if (field === 'hasSocialAccounts' && value === 'No') {
      setForm((current) => ({ ...current, socialActivity: '', socialAge: '' }));
      setErrors((current) => ({ ...current, socialActivity: undefined, socialAge: undefined }));
    }
  };

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (form.fullName.trim().length < 2) next.fullName = 'Please enter your full name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) next.email = 'Please enter a valid email address.';
    if (form.whatsapp.trim().length < 3) next.whatsapp = 'Please enter a WhatsApp number.';
    if (form.instagram.trim().length < 2) next.instagram = 'Please enter your Instagram username.';
    if (!form.background) next.background = 'Please choose your background.';
    if (form.background === 'Other' && form.otherBackground.trim().length < 2) next.otherBackground = 'Please specify your background.';
    if (!form.creatorExperience) next.creatorExperience = 'Please select their experience.';
    if (!form.hasSubscriptionAccounts) next.hasSubscriptionAccounts = 'Please choose Yes or No.';
    if (form.hasSubscriptionAccounts === 'Yes' && form.subscriptionPlatform.trim().length < 2) next.subscriptionPlatform = 'Please enter the platform name.';
    if (!form.subscriptionRevenue) next.subscriptionRevenue = 'Please select their current revenue.';
    if (!form.streamingActivity) next.streamingActivity = 'Please select their streaming activity.';
    if (!form.streamingRevenue) next.streamingRevenue = 'Please select their streaming revenue.';
    if (!form.hasSocialAccounts) next.hasSocialAccounts = 'Please choose Yes or No.';
    if (form.hasSocialAccounts === 'Yes' && !form.socialActivity) next.socialActivity = 'Please select their social activity.';
    if (form.hasSocialAccounts === 'Yes' && !form.socialAge) next.socialAge = 'Please select the account age.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()) setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="referral-application" className="scroll-mt-10 border-t border-white/10 px-6 py-20 sm:py-32">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[#ff1493]/40 bg-[#ff1493]/[0.04] px-6 py-16 text-center sm:px-12">
          <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full border border-[#ff1493]/50">
            <Check className="h-9 w-9 text-[#ff1493]" strokeWidth={1.5} />
          </div>
          <h3 className="text-3xl font-bold italic text-white">Application Received</h3>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/60">Thanks, {form.fullName.trim()}. We have your referral partner details and will review the creator information personally before getting back to you.</p>
          <div className="mx-auto mt-8 max-w-md rounded-xl border border-white/10 bg-white/[0.03] p-5 text-left text-sm leading-7 text-white/65">
            <p><span className="text-white/40">Creator experience:</span> {form.creatorExperience}</p>
            <p><span className="text-white/40">Background:</span> {form.background === 'Other' ? form.otherBackground : form.background}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="referral-application" className="scroll-mt-10 border-t border-white/10 px-6 py-20 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#ff1493]">Referral Partner Application</p>
          <h2 className="font-extrabold italic leading-[1.05] text-white" style={{ fontSize: 'clamp(2.3rem, 6vw, 4.5rem)' }}>Introduce Once. <span className="text-[#ff1493]">Earn every month.</span></h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/55">We&apos;re highly selective about the creators we partner with, but if you know the right ones, this is the easiest recurring monthly earnings you will ever get.</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-10">
          <div className="space-y-6">
            <GroupHeading number="01" title="Your Details" />
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Full Name" error={errors.fullName}><input value={form.fullName} onChange={(event) => update('fullName', event.target.value)} className={inputClass} placeholder="e.g. Jane Doe" /></Field>
              <Field label="Email" error={errors.email}><input type="email" value={form.email} onChange={(event) => update('email', event.target.value)} className={inputClass} placeholder="you@example.com" /></Field>
            </div>
            <Field label="WhatsApp Number" error={errors.whatsapp}><input type="tel" value={form.whatsapp} onChange={(event) => update('whatsapp', event.target.value)} className={inputClass} placeholder="Include your country code" /></Field>
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Your Instagram @username" error={errors.instagram}><input value={form.instagram} onChange={(event) => update('instagram', event.target.value)} className={inputClass} placeholder="@username" /></Field>
              <Field label="Your Telegram @username" optional><input value={form.telegram} onChange={(event) => update('telegram', event.target.value)} className={inputClass} placeholder="@username" /></Field>
            </div>
            <Field label="Your Discord @username" optional><input value={form.discord} onChange={(event) => update('discord', event.target.value)} className={inputClass} placeholder="@username" /></Field>
            <Field label="Your Background" error={errors.background}>
              <select value={form.background} onChange={(event) => update('background', event.target.value)} className={selectClass} style={{ colorScheme: 'dark' }}>
                <option className={optionClass} value="">Select your background</option>
                {backgroundOptions.map((option) => <option className={optionClass} key={option}>{option}</option>)}
              </select>
            </Field>
            {form.background === 'Other' && <Field label="Specify your background" error={errors.otherBackground}><input value={form.otherBackground} onChange={(event) => update('otherBackground', event.target.value)} className={inputClass} placeholder="Tell us what best describes you" /></Field>}
            <Field label="Why are you interested in this offer?" optional><textarea value={form.interest} onChange={(event) => update('interest', event.target.value)} className={`${inputClass} min-h-32 resize-y`} placeholder="Explain in a few honest sentences" /></Field>
          </div>

          <div className="space-y-6">
            <GroupHeading number="02" title="Creator's Details" />
            <Field label="Creator&apos;s Experience" error={errors.creatorExperience}>
              <select value={form.creatorExperience} onChange={(event) => update('creatorExperience', event.target.value)} className={selectClass} style={{ colorScheme: 'dark' }}>
                <option className={optionClass} value="">Select their experience</option>
                {creatorExperienceOptions.map((option) => <option className={optionClass} key={option}>{option}</option>)}
              </select>
            </Field>
            <ChoiceGroup label="Do they have registered accounts on any subscription / &quot;blue page&quot; platform?" value={form.hasSubscriptionAccounts} onChange={(value) => updateChoice('hasSubscriptionAccounts', value)} error={errors.hasSubscriptionAccounts} />
            {form.hasSubscriptionAccounts === 'Yes' && <Field label="Platform name?" error={errors.subscriptionPlatform}><input value={form.subscriptionPlatform} onChange={(event) => update('subscriptionPlatform', event.target.value)} className={inputClass} placeholder="Type the name of the platform" /></Field>}
            <Field label="Subscription page current revenue" error={errors.subscriptionRevenue}>
              <select value={form.subscriptionRevenue} onChange={(event) => update('subscriptionRevenue', event.target.value)} className={selectClass} style={{ colorScheme: 'dark' }}>
                <option className={optionClass} value="">Select current revenue</option>
                {subscriptionRevenueOptions.map((option) => <option className={optionClass} key={option}>{option}</option>)}
              </select>
            </Field>
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="How active are their streaming platform accounts?" error={errors.streamingActivity}>
                <select value={form.streamingActivity} onChange={(event) => update('streamingActivity', event.target.value)} className={selectClass} style={{ colorScheme: 'dark' }}>
                  <option className={optionClass} value="">Select activity</option>
                  {streamingActivityOptions.map((option) => <option className={optionClass} key={option}>{option}</option>)}
                </select>
              </Field>
              <Field label="Streaming platform/s revenue" error={errors.streamingRevenue}>
                <select value={form.streamingRevenue} onChange={(event) => update('streamingRevenue', event.target.value)} className={selectClass} style={{ colorScheme: 'dark' }}>
                  <option className={optionClass} value="">Select revenue</option>
                  {streamingRevenueOptions.map((option) => <option className={optionClass} key={option}>{option}</option>)}
                </select>
              </Field>
            </div>
            <ChoiceGroup label="Do they have social media accounts?" value={form.hasSocialAccounts} onChange={(value) => updateChoice('hasSocialAccounts', value)} error={errors.hasSocialAccounts} />
            {form.hasSocialAccounts === 'Yes' && <div className="grid gap-6 sm:grid-cols-2">
              <Field label="How active are their social media account/s?" error={errors.socialActivity}>
                <select value={form.socialActivity} onChange={(event) => update('socialActivity', event.target.value)} className={selectClass} style={{ colorScheme: 'dark' }}>
                  <option className={optionClass} value="">Select activity</option>
                  {socialActivityOptions.map((option) => <option className={optionClass} key={option}>{option}</option>)}
                </select>
              </Field>
              <Field label="How old are their social media account/s?" error={errors.socialAge}>
                <select value={form.socialAge} onChange={(event) => update('socialAge', event.target.value)} className={selectClass} style={{ colorScheme: 'dark' }}>
                  <option className={optionClass} value="">Select account age</option>
                  {socialAgeOptions.map((option) => <option className={optionClass} key={option}>{option}</option>)}
                </select>
              </Field>
            </div>}
          </div>

          <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-[#ff1493] px-8 py-4 text-sm font-bold uppercase tracking-wide text-black transition-all duration-300 hover:scale-[1.01] hover:bg-[#ff1493]/90 active:scale-[0.99]">Submit Application</button>
        </form>
      </div>
    </section>
  );
}
