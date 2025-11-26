import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialIcons from "@/components/Icons";

const stats = [
  {
    label: "Guardian Reserve",
    value: "$2.5M",
    detail: "Funds locked and checked for launch day",
  },
  {
    label: "Presale Window",
    value: "Q1 2026",
    detail: "We give 72h notice before we open",
  },
  {
    label: "Base Allocation",
    value: "$0.12",
    detail: "Starting price for each $OCTO",
  },
];

const pillars = [
  {
    title: "Security-first DNA",
    copy: "Multi-sig wallets, open books, and steady audits keep our funds honest.",
  },
  {
    title: "Adaptive Liquidity",
    copy: "We add and lock liquidity as demand grows so trades stay calm.",
  },
  {
    title: "Community Intelligence",
    copy: "Guardians test partners, swap notes, and vote on what ships next.",
  },
];

const tokenomics = [
  {
    label: "Community Treasury",
    value: "32%",
    description: "Covers community drops, ops, and co-marketing.",
  },
  {
    label: "Strategic Presale",
    value: "28%",
    description: "Set aside for allowlisted wallets who plan to stay.",
  },
  {
    label: "Liquidity Vault",
    value: "20%",
    description: "Locked LP so price swings are softer on day one.",
  },
  {
    label: "Ecosystem Builders",
    value: "12%",
    description: "Simple grants for devs, auditors, and tool makers.",
  },
  {
    label: "Guardian Council",
    value: "8%",
    description: "Vested tokens for the core crew and advisors.",
  },
];

const systems = [
  {
    title: "Sentinel Network",
    body: "Global watchers flag weird wallet moves and kick off auto alerts.",
  },
  {
    title: "Vault Intelligence",
    body: "Vaults shift between stables and growth bags with on-chain proof.",
  },
  {
    title: "Signal Studio",
    body: "Community posts real talk dashboards, warnings, and partner checks.",
  },
];

const roadmap = [
  {
    phase: "Phase 01",
    quarter: "Q4 2025",
    title: "Signal & Alignment",
    description:
      "Share the plan, invite early guardians, and finish two audits.",
    milestones: ["Guardian ID program", "Surveillance alpha"],
  },
  {
    phase: "Phase 02",
    quarter: "Q1 2026",
    title: "Formation & TGE",
    description: "Run presale, mint tokens, and seed DEX liquidity in public.",
    milestones: ["Vault activation", "Daily treasury dashboard"],
  },
  {
    phase: "Phase 03",
    quarter: "Q2 2026",
    title: "Expansion & Governance",
    description: "Start council votes, launch sentinels, and fund builders.",
    milestones: ["Council elections", "Partner vault pilots"],
  },
];

const faqs = [
  {
    q: "How is Octowarden audited?",
    a: "Two outside firms and community white-hats check the code. We post the reports before any presale money moves.",
  },
  {
    q: "What chains will $OCTO support?",
    a: "We launch on an Ethereum L2. Base and Solana come later if guardians vote yes.",
  },
  {
    q: "What utility does $OCTO provide?",
    a: "$OCTO lets you vote on the treasury, unlock deeper intel, and get early partner spots.",
  },
  {
    q: "Is there a referral program?",
    a: "Yes. Guardian codes give a small boost, but caps stay tight so no one whales the list.",
  },
];

const presaleChecklist = [
  "Join Telegram + X for instant Guardian alerts.",
  "Complete the Vanguard allowlist form once it opens.",
  "Bookmark the launch window and enable push notifications.",
  "Fund a wallet with verified stablecoins ahead of time.",
];

const presaleMilestones = [
  { label: "Allowlist Form", status: "Opening Soon" },
  { label: "Audits & Proofs", status: "In Final Review" },
  { label: "Presale Launch", status: "Targeting Q1 2026" },
  { label: "TGE + Liquidity", status: "48h after close" },
];

const socials = [
  {
    iconName: "twitter",
    label: "X (Twitter)",
    href: "https://x.com/octowardencoin",
  },
  {
    iconName: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/octowardencoin24",
  },
  {
    iconName: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/share/1DFFnMh5vw/",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#eecf94] text-[#0a1116]">
      <Header />
      <main className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(10,17,22,0.12),_transparent_45%),radial-gradient(circle_at_bottom,_rgba(85,79,55,0.18),_transparent_55%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-4 py-16 sm:px-6 lg:px-8">
          <section className="grid gap-10 lg:grid-cols-[1.1fr,_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#554f37]/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-[#554f37]">
                Guardian presale loading
              </p>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-[#0a1116] sm:text-5xl lg:text-6xl">
                  Octowarden Coin
                  <span className="mt-2 block text-3xl font-semibold text-[#ca9944] sm:text-4xl">
                    A calm, secure lane for everyday crypto people
                  </span>
                </h1>
                <p className="text-lg text-[#554f37]">
                  We are putting together a clear, treasury-first coin run by a
                  hands-on community. Think steady liquidity, open accounting,
                  and neighbors who actually show up to calls.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="#presale"
                  className="inline-flex items-center justify-center rounded-full bg-[#d6a757] px-8 py-3 text-base font-semibold text-[#0a1116] shadow-xl shadow-[#d6a757]/40 transition hover:-translate-y-0.5 hover:bg-[#ca9944]"
                >
                  Hop on the presale list
                </Link>
                <Link
                  href="https://t.me/octowardenHQ"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-full border border-[#554f37]/50 px-8 py-3 text-base font-semibold text-[#0a1116] transition hover:border-[#0a1116] hover:bg-white/50"
                >
                  Chat on Telegram
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-[#ca9944]/40 bg-white/70 p-4 shadow-sm"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-[#554f37]">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-[#0a1116]">
                      {stat.value}
                    </p>
                    <p className="text-xs text-[#554f37]">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-[#554f37]/30 bg-gradient-to-br from-[#f6e1b8] via-[#ebcb90] to-[#eecf94] p-8 text-left shadow-2xl shadow-[#d6a757]/30">
              <Image
                src="/coin_logo.jpg"
                alt="Octowarden_Coin"
                width={500}
                height={500}
              />
            </div>
          </section>

          <section className="rounded-3xl border border-[#ca9944]/30 bg-white/80 p-8 shadow-lg shadow-[#d6a757]/10">
            <div className="flex flex-col gap-4 text-center sm:text-left">
              <p className="text-sm uppercase tracking-[0.4em] text-[#554f37]">
                Guardian pillars
              </p>
              <h2 className="text-3xl font-semibold text-[#0a1116]">
                Built for calm, not chaos
              </h2>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-3xl border border-[#d6a757]/40 bg-[#f9edd1] p-6"
                >
                  <h3 className="text-lg font-semibold text-[#0a1116]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#554f37]">{pillar.copy}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="tokenomics"
            className="rounded-3xl border border-[#ca9944]/40 bg-white/90 p-8 shadow-lg shadow-[#d6a757]/15"
          >
            <div className="grid gap-8 lg:grid-cols-[0.9fr,_1.1fr]">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.4em] text-[#554f37]">
                  Token architecture
                </p>
                <h2 className="text-3xl font-semibold text-[#0a1116]">
                  How $OCTO keeps things running
                </h2>
                <p className="text-sm text-[#554f37]">
                  The split keeps builders fed, keeps LP thick, and keeps the
                  treasury under public watch.
                </p>
                <div className="rounded-3xl border border-[#d6a757]/30 bg-[#f9edd1] p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#554f37]">
                    Utility loops
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-[#0a1116]">
                    <li>• Vote on treasury moves and partner picks</li>
                    <li>• Unlock deeper Signal Studio breakdowns</li>
                    <li>• Earn simple yields for vault upkeep</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-5">
                {tokenomics.map((bucket) => (
                  <div
                    key={bucket.label}
                    className="rounded-2xl border border-[#d6a757]/30 bg-white/70 p-5"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#554f37]">
                        {bucket.label}
                      </p>
                      <span className="text-xl font-semibold text-[#ca9944]">
                        {bucket.value}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-[#554f37]">
                      {bucket.description}
                    </p>
                    <div className="mt-3 h-2 rounded-full bg-[#e2c182]">
                      <span
                        className="block h-full rounded-full bg-[#d6a757]"
                        style={{ width: bucket.value }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-3">
            {systems.map((system) => (
              <div
                key={system.title}
                className="rounded-3xl border border-[#554f37]/30 bg-white/75 p-6 shadow-md shadow-[#d6a757]/15"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-[#554f37]">
                  {system.title}
                </p>
                <p className="mt-3 text-base text-[#0a1116]">{system.body}</p>
              </div>
            ))}
          </section>

          <section
            id="roadmap"
            className="rounded-3xl border border-[#ca9944]/40 bg-white/85 p-8"
          >
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-[#554f37]">
                Roadmap
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#0a1116]">
                Our next few moves
              </h2>
            </div>
            <div className="relative mt-10 space-y-10 border-l-2 border-[#d6a757]/40 pl-8">
              {roadmap.map((phase, index) => (
                <div key={phase.phase} className="relative pl-4">
                  <span className="absolute -left-[31px] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#ca9944] bg-[#eecf94] text-xs font-semibold text-[#0a1116]">
                    {index + 1}
                  </span>
                  <p className="text-xs uppercase tracking-[0.4em] text-[#554f37]">
                    {phase.phase} · {phase.quarter}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-[#0a1116]">
                    {phase.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#554f37]">
                    {phase.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {phase.milestones.map((milestone) => (
                      <span
                        key={milestone}
                        className="rounded-full border border-[#d6a757]/40 px-3 py-1 text-xs font-semibold text-[#0a1116]"
                      >
                        {milestone}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            id="faq"
            className="grid gap-8 rounded-3xl border border-[#ca9944]/40 bg-white/85 p-8 lg:grid-cols-[0.85fr,_1.15fr]"
          >
            <div className="rounded-3xl border border-[#d6a757]/30 bg-[#f9edd1] p-6 text-center lg:text-left">
              <p className="text-sm uppercase tracking-[0.4em] text-[#554f37]">
                FAQ
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[#0a1116]">
                Real answers, no fluff
              </h3>
              <p className="mt-3 text-sm text-[#554f37]">
                We only publish what we can back up on-chain or in public calls.
                If you do not see it here or on our socials, it is not real.
              </p>
              <Link
                href="https://x.com/OctowardenCoin"
                target="_blank"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-[#554f37]/50 px-6 py-2 text-sm font-semibold text-[#0a1116] transition hover:border-[#0a1116] hover:bg-white/60"
              >
                Ask us on X →
              </Link>
            </div>
            <div className="grid gap-4">
              {faqs.map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl border border-[#d6a757]/30 bg-white/70 p-5"
                >
                  <p className="text-base font-semibold text-[#0a1116]">
                    {item.q}
                  </p>
                  <p className="mt-2 text-sm text-[#554f37]">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="presale"
            className="rounded-3xl border border-[#d6a757]/60 bg-gradient-to-r from-[#f6e1b8] via-[#ebcb90] to-[#eecf94] p-8 shadow-xl shadow-[#d6a757]/25"
          >
            <div className="grid gap-10 lg:grid-cols-[1.1fr,_0.9fr]">
              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.4em] text-[#554f37]">
                  Presale HQ
                </p>
                <h2 className="text-3xl font-semibold text-[#0a1116]">
                  Presale opens soon. Get your wallet set.
                </h2>
                <p className="text-sm text-[#554f37]">
                  We are wrapping audits, tightening multisig rules, and lining
                  up partners. Links only drop here and on pinned socials.
                </p>
                <div className="space-y-4">
                  {presaleMilestones.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-[#554f37]/30 bg-white/80 p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-[#554f37]">
                        {item.label}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-[#0a1116]">
                        {item.status}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4 rounded-3xl border border-[#d6a757]/40 bg-white/80 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[#554f37]">
                  Vanguard checklist
                </p>
                <div className="space-y-3 text-sm text-[#554f37]">
                  {presaleChecklist.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="text-[#ca9944]">✔</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="https://t.me/octowardenHQ"
                  target="_blank"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#d6a757] px-8 py-3 text-base font-semibold text-[#0a1116] shadow-lg shadow-[#d6a757]/40 transition hover:-translate-y-0.5 hover:bg-[#ca9944]"
                >
                  Join the Telegram crew
                </Link>
                <p className="text-xs uppercase tracking-[0.4em] text-[#554f37]">
                  No contract yet — ignore any fake links
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 border-t border-[#d6a757]/30 pt-4 text-sm font-semibold text-[#554f37]">
                  {socials.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      className="flex items-center gap-2 transition hover:text-[#0a1116]"
                    >
                      <SocialIcons
                        iconName={social.iconName}
                        color="#554f37"
                        height="18"
                        className="opacity-70"
                      />
                      {social.label}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-sm text-[#554f37]">
                  <Link
                    href="https://coinmarketcap.com"
                    target="_blank"
                    className="transition hover:opacity-80"
                  >
                    <Image
                      src="/coinmarketcap-logo.png"
                      alt="CoinMarketCap"
                      width={140}
                      height={140}
                    />
                  </Link>
                  <Link
                    href="https://coingecko.com"
                    target="_blank"
                    className="transition hover:opacity-80"
                  >
                    <Image
                      src="/coingecko-logo.png"
                      alt="CoinGecko"
                      width={140}
                      height={140}
                    />
                  </Link>
                  <Link
                    href="https://cryptogugu.com"
                    target="_blank"
                    className="transition hover:opacity-80"
                  >
                    <Image
                      src="/cryptogugu-logo.svg"
                      alt="CryptoGugu"
                      width={90}
                      height={90}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
