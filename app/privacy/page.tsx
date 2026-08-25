import Link from "next/link"

const sections = [
  {
    number: "01",
    title: "Identity & scope",
    body: [
      "This Privacy Policy is provided by Oreca Technologies Pvt. Ltd. (“Oreca”, “we”, “us”, or “our”). It applies to the Oreca desktop application, cloud web app, API access, and Spaces team workspaces.",
      "The effective date of this policy will be announced. We will provide at least 30 days’ advance notice of material changes by email.",
    ],
  },
  {
    number: "02",
    title: "Information we collect",
    body: [
      "Account information, including your email address, name, and Firebase authentication UID.",
      "Conversation information, including user messages, AI-generated responses, and session IDs.",
      "Files uploaded to Knowledge Bases, including PDFs, CSVs, text, and audio.",
      "Voice inputs processed by local Whisper speech-to-text, encrypted OAuth access and refresh tokens, agent execution logs, and memory data such as L1 facts and L2 timeline events.",
      "If you opt in, aggregated usage telemetry such as response latency and error rates.",
    ],
  },
  {
    number: "03",
    title: "What we do not collect",
    body: [
      "Oreca does not collect continuous screen captures, keystroke logs, or clipboard contents. We do not index your entire file system, run persistent background processes after the app is closed, or sell, rent, or broker personal data to third parties.",
    ],
  },
  {
    number: "04",
    title: "Legal basis for processing",
    body: [
      "We process account and conversation data when necessary to provide the service you request. We rely on legitimate interest to maintain system health through usage telemetry and error logs. Voice audio, Brain or memory extraction, and cross-session search require separate, granular opt-in consent.",
      "Oreca will appoint a Data Protection Officer for users residing in the EEA or UK.",
    ],
  },
  {
    number: "05",
    title: "Local-first architecture",
    body: [
      "In desktop mode, memory and chat history are stored exclusively in a local SQLite database at ~/.oreca/memory.db. You remain the sole data controller of that local database. Deleting it constitutes a complete exercise of the right to erasure under GDPR Article 17.",
      "Knowledge Base documents are automatically deleted 30 days after removal.",
    ],
  },
]

const retention = [
  ["Account data", "Account duration + 90 days", "Manual deletion or account closure"],
  ["Conversation data", "User-configurable; unlimited by default", "Manual deletion or account closure"],
  ["Cloud-uploaded documents", "30 days after removal", "Removal or account closure"],
  ["OAuth tokens", "Until revoked", "User revocation or account closure"],
  ["Agent execution logs", "90 days", "Account deletion"],
  ["Voice audio inputs", "Not retained", "Never stored"],
  ["Usage telemetry", "12 months, anonymized", "Rolling deletion"],
  ["Sandbox code and output", "Session duration only", "Session end"],
]

const additionalSections = [
  ["Third-party subprocessors", "Oreca may use Google Cloud (Gemini), OpenAI or Anthropic as optional failover providers, Firebase/Google for identity, Tavily, Firecrawl and Arxiv for web and scholarly retrieval, user-registered MCP servers, and Stripe for payments. Oreca does not warrant the security of user-registered external processes."],
  ["Children’s data", "The service is not directed at children under 13 in the United States or under 16 in the European Union. Accounts discovered to belong to children under 13 will be deleted within 48 hours of discovery."],
  ["International transfers", "International transfers are conducted lawfully under the EU–US Data Privacy Framework or standard contractual clauses. For users in India, Oreca is committed to compliance with the Digital Personal Data Protection Act, 2023."],
  ["Security safeguards", "Data in transit uses TLS 1.2 minimum, with TLS 1.3 preferred. OAuth tokens are encrypted at rest using Fernet (AES-128-CBC), and decrypted only in volatile memory when needed. Generated code runs in isolated microVM containers with restricted network access, read-only host access by default, and a 30-second execution timeout."],
  ["Access controls & incidents", "Cloud queries are scoped by user_id, Space Knowledge Bases by space_id, and chat histories by session_id. Oreca staff have no routine internal access to conversation data. A response team is activated within two hours of a potential breach, and users will be notified within 72 hours of confirmation, subject to applicable law."],
]

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8 md:px-10">
        <Link href="/" className="font-pixel text-xs tracking-[0.3em] text-foreground/70">ORECA</Link>
        <Link href="/" className="text-sm text-foreground/55 transition-colors hover:text-foreground">Back to home</Link>
      </header>

      <div className="mx-auto max-w-6xl px-6 pb-24 md:px-10">
        <section className="border-b border-border pb-16 pt-16 md:pb-24 md:pt-24">
          <p className="font-pixel text-[10px] tracking-[0.28em] text-primary">LEGAL / PRIVACY</p>
          <h1 className="mt-6 max-w-3xl text-balance text-5xl font-light tracking-tight md:text-7xl">Privacy, by design.</h1>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">Oreca is built to give you useful intelligence without turning your computer into a surveillance device.</p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <span>Oreca Technologies Pvt. Ltd.</span>
            <span>Effective date: To be announced</span>
          </div>
        </section>

        <div className="grid gap-16 pt-16 lg:grid-cols-[180px_1fr] md:pt-24">
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <p className="font-pixel text-[10px] tracking-[0.24em] text-muted-foreground">CONTENTS</p>
            <nav className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground lg:flex-col">
              {sections.map((section) => <a key={section.number} href={`#section-${section.number}`} className="transition-colors hover:text-primary">{section.number} {section.title}</a>)}
              <a href="#retention" className="transition-colors hover:text-primary">06 Retention</a>
            </nav>
          </aside>

          <article className="max-w-3xl space-y-16">
            {sections.map((section) => (
              <section id={`section-${section.number}`} key={section.number} className="scroll-mt-8">
                <div className="flex items-baseline gap-4"><span className="font-pixel text-[10px] tracking-[0.2em] text-primary">{section.number}</span><h2 className="text-2xl font-light tracking-tight md:text-3xl">{section.title}</h2></div>
                <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground">{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              </section>
            ))}

            <section id="retention" className="scroll-mt-8">
              <div className="flex items-baseline gap-4"><span className="font-pixel text-[10px] tracking-[0.2em] text-primary">06</span><h2 className="text-2xl font-light tracking-tight md:text-3xl">Retention schedule</h2></div>
              <p className="mt-6 text-base leading-7 text-muted-foreground">These are maximum retention periods. You may request earlier deletion at any time.</p>
              <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card">
                <div className="grid grid-cols-[1.1fr_1fr_1fr] gap-4 border-b border-border bg-muted/50 px-4 py-3 text-[10px] uppercase tracking-[0.14em] text-muted-foreground"><span>Data type</span><span>Retention</span><span>Deletion trigger</span></div>
                {retention.map((row) => <div key={row[0]} className="grid grid-cols-[1.1fr_1fr_1fr] gap-4 border-b border-border px-4 py-4 text-sm leading-5 last:border-0"><span>{row[0]}</span><span className="text-muted-foreground">{row[1]}</span><span className="text-muted-foreground">{row[2]}</span></div>)}
              </div>
            </section>

            <div className="space-y-12 border-t border-border pt-16">
              {additionalSections.map(([title, body]) => <section key={title}><h2 className="text-xl font-light tracking-tight">{title}</h2><p className="mt-4 text-base leading-7 text-muted-foreground">{body}</p></section>)}
            </div>

            <section className="rounded-xl border border-primary/20 bg-primary/5 p-6 md:p-8"><h2 className="text-xl font-light">A note on this policy</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">This page is a plain-language presentation of Oreca’s internal legal framework and should be reviewed and finalized by qualified legal counsel before publication or reliance.</p></section>
          </article>
        </div>
      </div>
    </main>
  )
}
