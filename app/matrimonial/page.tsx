import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { HomeFooter } from "@/components/HomeFooter";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { Reveal } from "@/components/Reveal";
import { CONTACT } from "@/lib/site";
// Shared header, footer, button and type rules come from the Psychology sheet;
// everything specific to this page lives in matrimonial.css under .p-matri.
import "../psychology/psychology.css";
import "./matrimonial.css";

export const metadata: Metadata = {
  title: "Soulmate Pathways - Matrimonial | Holistic Healing Pathways Foundation",
  description:
    "Soulmate Pathways, a unit of Holistic Healing Pathways Foundation - personalized matrimonial matchmaking built on shared values and meaningful connections. Coming soon.",
};

const SOULMATE_SITE = "www.soulmatepathways.com";

/** Cards in a row fade in one after another; the first has no delay. */
const stagger = (i: number) => (i === 0 ? undefined : (i as 1 | 2 | 3));

const PROMISES = [
  {
    h: "Personalized Matchmaking",
    p: "No endless scrolling. Every introduction is hand-picked around who you are, your family, and the life you hope to build.",
    icon: (
      <>
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </>
    ),
  },
  {
    h: "Shared Values First",
    p: "We look beyond profiles to beliefs, temperament, and outlook - the things that keep a marriage strong for decades.",
    icon: (
      <>
        <path d="M12 3v18" />
        <path d="m19 8 3 8a5 5 0 0 1-6 0Zm0 0V7" />
        <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" />
        <path d="m5 8 3 8a5 5 0 0 1-6 0Zm0 0V7" />
        <path d="M7 21h10" />
      </>
    ),
  },
  {
    h: "Astrological Compatibility",
    p: "Guidance rooted in Nadi Nakshatra Astrology, helping families understand compatibility with clarity and care.",
    icon: (
      <>
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        <path d="M19 3v4M17 5h4" />
      </>
    ),
  },
  {
    h: "Private & Discreet",
    p: "Your details are shared only with your consent. Every conversation is handled with complete confidentiality.",
    icon: (
      <>
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
    ),
  },
];

/** Decorative falling petals: [left %, delay s, duration s, size px]. */
const PETALS: [number, number, number, number][] = [
  [6, 0, 14, 14],
  [18, 4, 17, 10],
  [31, 8, 15, 12],
  [47, 2, 19, 9],
  [62, 6, 16, 13],
  [76, 1, 18, 11],
  [88, 5, 15, 14],
  [95, 9, 20, 9],
];

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

function Lotus() {
  return (
    <svg width="34" height="20" viewBox="0 0 34 20" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M17 18C13 14 13 7 17 2c4 5 4 12 0 16Z" />
      <path d="M17 18c-3-1-8-4-9-10 4 0 8 3 9 10Z" />
      <path d="M17 18c3-1 8-4 9-10-4 0-8 3-9 10Z" />
      <path d="M17 18c-5 0-11-2-14-6 4-1 9 1 14 6Z" />
      <path d="M17 18c5 0 11-2 14-6-4-1-9 1-14 6Z" />
    </svg>
  );
}

export default function MatrimonialPage() {
  return (
    <div className="p-psychology p-matri">
      <ScrollProgress />
      <Header />

      {/* ===== HERO ===== */}
      <section className="mt-hero" id="home">
        <div className="mt-petals" aria-hidden="true">
          {PETALS.map(([left, delay, dur, size], i) => (
            <span
              key={i}
              style={{
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${dur}s`,
                width: size,
                height: size * 0.8,
              }}
            />
          ))}
        </div>

        <div className="wrap mt-hero-grid">
          <Reveal className="mt-hero-copy">
            <span className="mt-soon">
              <i />
              Coming Soon
            </span>
            <p className="eyebrow mt-eyebrow">Soulmate Pathways · Matrimonial</p>
            <h1>
              Where two paths
              <span className="l2">become one.</span>
            </h1>
            <div className="mt-divider" aria-hidden="true">
              <span />
              <Lotus />
              <span />
            </div>
            <p className="sub">
              Personalized matrimonial matchmaking from Holistic Healing Pathways Foundation -
              built on <strong>shared values</strong> and <strong>meaningful connections</strong>.
              We&apos;re preparing something special, and we&apos;d love you to be among the first
              to experience it.
            </p>
            <div className="acts">
              <a href={CONTACT.whatsappHref} className="btn btn-primary mt-btn-maroon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
                </svg>
                Register Your Interest
              </a>
              <a href={CONTACT.phoneHref} className="btn btn-ghost mt-btn-outline">
                Call {CONTACT.phone}
              </a>
            </div>
            <p className="mt-note">
              Enquiries with <b>Dr. Nikunj Walia</b>
            </p>
          </Reveal>

          <Reveal className="mt-poster-wrap" delay={1}>
            <div className="mt-arch" aria-hidden="true" />
            <figure className="mt-poster">
              <img
                src="/images/soulmate-pathways.jpg"
                alt="Soulmate Pathways - Personalized Matrimonial Matchmaking. Shared values, meaningful connections. A unit of Holistic Healing Pathways Foundation."
                width={1122}
                height={1402}
              />
            </figure>
            <div className="mt-float mt-float-a">
              <span className="dot">
                <Icon>
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </Icon>
              </span>
              Meaningful Matches
            </div>
            <div className="mt-float mt-float-b">
              <span className="dot gold">
                <Icon>
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                </Icon>
              </span>
              100% Confidential
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== WHAT TO EXPECT ===== */}
      <section className="mt-expect">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow">What to Expect</span>
            <h2>
              Matchmaking with a <span className="mt-grad ital">soul</span>
            </h2>
            <p>
              Soulmate Pathways brings the same care, wisdom, and holistic understanding that
              guides all of our work - now to one of life&apos;s most important decisions.
            </p>
          </Reveal>
          <div className="mt-cards">
            {PROMISES.map((item, i) => (
              <Reveal className="mt-card" key={item.h} delay={stagger(i)}>
                <div className="ic">
                  <Icon>{item.icon}</Icon>
                </div>
                <h3>{item.h}</h3>
                <p>{item.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ENQUIRY BAND ===== */}
      <section className="mt-band">
        <Reveal className="wrap mt-band-inner">
          <div className="mt-band-lotus" aria-hidden="true">
            <Lotus />
          </div>
          <span className="eyebrow">Be the First to Know</span>
          <h2>
            Your soulmate journey
            <br />
            <span className="ital">begins soon.</span>
          </h2>
          <p>
            Share your interest today and we&apos;ll reach out personally as soon as Soulmate
            Pathways opens its doors.
          </p>
          <div className="mt-contact-row">
            <a href={CONTACT.phoneHref} className="mt-chip">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13.83 16.57a1 1 0 0 0 1.21-.3l.36-.47A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.47.35a1 1 0 0 0-.29 1.23 14 14 0 0 0 6.39 6.39" />
              </svg>
              {CONTACT.phone}
            </a>
            <a href={CONTACT.emailHref} className="mt-chip">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m22 7-8.99 5.73a2 2 0 0 1-2.01 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
              {CONTACT.email}
            </a>
            <span className="mt-chip">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20" />
              </svg>
              {SOULMATE_SITE}
            </span>
          </div>
          <div className="cta-actions">
            <a href={CONTACT.whatsappHref} className="btn btn-gold">
              Message on WhatsApp
            </a>
          </div>
          <p className="mt-unit">A unit of Holistic Healing Pathways Foundation</p>
        </Reveal>
      </section>

      <HomeFooter />
      <BackToTop showAfter={700} />
    </div>
  );
}
