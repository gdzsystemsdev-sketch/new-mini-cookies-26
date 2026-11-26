import { type ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

type TermsSectionProps = {
  number: string;
  title: ReactNode;
  children: ReactNode;
};

function TermsSection({ number, title, children }: TermsSectionProps) {
  return (
    <section className="border-t border-white/10 py-10 sm:py-24">
      <div className="flex items-center gap-4 mb-10">
        <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">
          {number}
        </span>
        <div className="h-px flex-1 bg-white/10" />
      </div>
      <h2
        className="font-extrabold tracking-tight leading-[1.1] mb-4"
        style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontStyle: 'italic' }}
      >
        {title}
      </h2>
      <div className="space-y-8 text-base sm:text-lg text-white/60 font-light leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function DetailList({ children }: { children: ReactNode }) {
  return <ul className="space-y-4 list-disc pl-6 marker:text-[#ff1493]">{children}</ul>;
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-jet-black text-pure-white">
      <Navbar />
      <main className="pt-36 sm:pt-48">
        <div className="max-w-5xl mx-auto px-6">
          <section className="pb-16 sm:pb-28">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">
                00
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <h1
              className="font-extrabold tracking-tight leading-[1.1] mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontStyle: 'italic' }}
            >
              Terms of <span style={{ color: '#ff1493' }}>Service</span>
            </h1>
            <p className="text-sm sm:text-base text-white/40 font-light mb-10">
              Last updated: November 18, 2026
            </p>
            <p className="max-w-4xl text-lg sm:text-xl text-white/70 font-light leading-relaxed">
              These Terms govern your use of the Mini Cookies website. By using the Site, you agree
              to everything outlined below. Please read them carefully.
            </p>
          </section>

          <TermsSection
            number="01"
            title={<>Acceptance of <span style={{ color: '#ff1493' }}>Terms</span></>}
          >
            <p>
              By visiting, accessing, or utilizing the Mini Cookies website (the &quot;Site&quot;)
              and its associated offerings, you formally agree to comply with and be bound by these
              Terms of Service (&quot;Terms&quot;). If these terms are not acceptable to you, please
              discontinue use of the Site immediately.
            </p>
          </TermsSection>

          <TermsSection
            number="02"
            title={<>Services <span style={{ color: '#ff1493' }}>Overview</span></>}
          >
            <p>
              Mini Cookies delivers comprehensive creator management solutions, encompassing
              services such as content strategy, audience expansion, subscriber interaction
              management, and privacy shielding. Detailed, service-specific provisions are set
              forth in individual creator agreements. Engaging with these services grants entry
              into the operational infrastructure backing over 100 managed creators to date,
              alongside the dedicated team that executes it.
            </p>
          </TermsSection>

          <TermsSection
            number="03"
            title={<><span style={{ color: '#ff1493' }}>Eligibility</span></>}
          >
            <p>
              You are required to be a minimum of 18 years of age to access our services or submit
              an application. By interacting with the Site, you legally certify that you satisfy
              this age condition.
            </p>
          </TermsSection>

          <TermsSection
            number="04"
            title={<>Application <span style={{ color: '#ff1493' }}>Process</span></>}
          >
            <p>
              The submission of an application does not confer automatic acceptance into our
              program. We maintain full autonomy to approve or reject any application at our sole
              discretion. All details submitted via applications must be entirely truthful and
              precise.
            </p>
          </TermsSection>

          <TermsSection
            number="05"
            title={<>Intellectual <span style={{ color: '#ff1493' }}>Property</span></>}
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold italic text-white mb-4">Our Content</h3>
              <p>
                Every piece of content hosted on this Site—including written text, graphics, brand
                logos, visual imagery, and software—is the exclusive property of Mini Cookies.
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold italic text-white mb-4">
                Earnings Screenshots
              </h3>
              <p>
                Financial metrics, screenshots, and video assets featured across the Site originate
                from actual creators and are published under explicit authorization. Individual
                outcomes will fluctuate and are never guaranteed.
              </p>
            </div>
          </TermsSection>

          <TermsSection
            number="06"
            title={<>Earnings <span style={{ color: '#ff1493' }}>Disclaimer</span></>}
          >
            <p>
              Financial earnings figures showcased throughout this Site reflect authentic individual
              results achieved by creators under Mini Cookies management. These outcomes are
              non-standard, and your personal performance may differ depending on your dedication,
              niche selection, market shifts, and external variables. We issue no guarantees
              regarding specific income thresholds.
            </p>
          </TermsSection>

          <TermsSection
            number="07"
            title={<><span style={{ color: '#ff1493' }}>Privacy</span></>}
          >
            <p>
              Your navigation and utilization of the Site are additionally regulated by our{' '}
              <a href="/privacy" className="text-[#ff1493] underline decoration-[#ff1493]/40 underline-offset-4 transition-colors hover:text-white">
                Privacy Policy
              </a>
              , which is formally integrated into these Terms by reference.
            </p>
          </TermsSection>

          <TermsSection
            number="08"
            title={<>Prohibited <span style={{ color: '#ff1493' }}>Conduct</span></>}
          >
            <p>You explicitly agree to refrain from:</p>
            <DetailList>
              <li>Utilizing the Site for any illegal activities or unlawful intents.</li>
              <li>Attempting unauthorized access to restricted areas or backend systems of the Site.</li>
              <li>Scraping, copying, or duplicating Site content without explicit written consent.</li>
              <li>Obstructing, interfering with, or impairing the normal operation of the Site.</li>
              <li>Misrepresenting your identity or posing as another individual.</li>
            </DetailList>
          </TermsSection>

          <TermsSection
            number="09"
            title={<>Limitation of <span style={{ color: '#ff1493' }}>Liability</span></>}
          >
            <p>
              To the maximum extent permitted by applicable law, Mini Cookies shall bear zero
              liability for any indirect, incidental, special, consequential, or punitive losses
              stemming from your usage of the Site or our services.
            </p>
          </TermsSection>

          <TermsSection
            number="10"
            title={<><span style={{ color: '#ff1493' }}>Indemnification</span></>}
          >
            <p>
              You agree to defend, indemnify, and hold harmless Mini Cookies, its founders, team
              members, contractors, and representatives from any third-party claims, liabilities,
              damages, or expenses resulting from your use of the Site or any breach of these
              Terms.
            </p>
          </TermsSection>

          <TermsSection
            number="11"
            title={<><span style={{ color: '#ff1493' }}>Modifications</span></>}
          >
            <p>
              We retain the authority to revise or update these Terms at any moment. Modifications
              will take effect immediately upon publication on this page. Persistent use of the
              Site following alterations signifies your endorsement of the revised Terms.
            </p>
          </TermsSection>

          <TermsSection
            number="12"
            title={<>Contact <span style={{ color: '#ff1493' }}>Us</span></>}
          >
            <p>
              If you have any inquiries regarding these Terms, reach out to us via WhatsApp at{' '}
              <a
                href="https://wa.me/message/CCNVZVWNKGFPA1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff1493] underline decoration-[#ff1493]/40 underline-offset-4 transition-colors hover:text-white"
              >
                [insert number]
              </a>
              .
            </p>
          </TermsSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}
