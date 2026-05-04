import { useState, useEffect, useCallback } from 'react'
import { META, HERO_STATS, NAV_ITEMS, SECTIONS } from './data.js'
import { TrendingUp, ShieldCheck, Activity, BrainCircuit, BookOpen, Code2, Layers, Users, ArrowDown, Sun, Moon } from 'lucide-react'

// ─────────────────────────────────────────────
//  SMALL ATOMS
// ─────────────────────────────────────────────

function ReadingBar({ progress }) {
  return <div className="reading-bar" style={{ width: `${progress}%` }} />
}

function BackToTop({ visible }) {
  const scroll = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <button
      className={`back-to-top${visible ? ' visible' : ''}`}
      onClick={scroll}
      aria-label="Back to top"
    >↑</button>
  )
}

function Callout({ label, text, variant = 'default' }) {
  return (
    <div className={`callout${variant !== 'default' ? ` callout-${variant}` : ''}`}>
      <div className="callout-label">{label}</div>
      <p>{text}</p>
    </div>
  )
}

function Rule({ data }) {
  if (!data) return null
  const cls = data.color && data.color !== 'none' ? ` ${data.color}` : ''
  return (
    <div className={`rule${cls}`}>
      <div className="rule-title">{data.title}</div>
      <div className="rule-desc">{data.desc}</div>
      {data.tip && <div className="tip">{data.tip}</div>}
    </div>
  )
}

function CodeBlock({ label, content }) {
  return (
    <div style={{ margin: '12px 0' }}>
      {label && (
        <div style={{
          fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink3)',
          marginBottom: '4px', letterSpacing: '0.04em',
        }}>
          {label}
        </div>
      )}
      <pre className="code">{content}</pre>
    </div>
  )
}

function TierRow({ data }) {
  const cls = `tier-badge t-${data.badge}`
  return (
    <div className="tier-row">
      <span className={cls}>{data.label}</span>
      <div className="tier-text">
        {data.bold ? <strong>{data.text}</strong> : data.text}
      </div>
    </div>
  )
}

function ToolCard({ tool }) {
  return (
    <div className="tool-card">
      <div className="tool-name">{tool.name}</div>
      <div className="tool-use">{tool.desc}</div>
    </div>
  )
}

// ─────────────────────────────────────────────
//  PILLAR (accordion)
// ─────────────────────────────────────────────

function Pillar({ data }) {
  const [open, setOpen] = useState(!!data.open)

  return (
    <div className={`pillar${open ? ' open' : ''}`}>
      <div className="pillar-head" onClick={() => setOpen(o => !o)}>
        <span className="phead-num">{data.id}</span>
        <span className="phead-title">{data.title}</span>
        <span className="phead-tag">{data.tag}</span>
        <span className="phead-chevron">▾</span>
      </div>
      {open && (
        <div className="pillar-body">
          {data.tiers?.map((t, i) => <TierRow key={i} data={t} />)}
          {data.rules?.map((r, i) => <Rule key={i} data={r} />)}
          {data.code && <CodeBlock label={data.code.label} content={data.code.content} />}
        </div>
      )}
    </div>
  )
}

// ─────────────────────────────────────────────
//  SECTION HEADER
// ─────────────────────────────────────────────

function SectionHeader({ num, title, subtitle }) {
  return (
    <div className="section-header">
      <div className="section-num">{num}</div>
      <div className="section-title-group">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
//  SECTION TYPE RENDERERS
// ─────────────────────────────────────────────

function FundamentalsSection({ section }) {
  const colorMap = { gold: 'gold-top', teal: 'teal-top', purple: 'purple-top', blue: 'blue-top', coral: 'coral-top', green: 'green-top' }
  return (
    <>
      <Callout label={section.callout.label} text={section.callout.text} />
      <div className="intro-grid">
        {section.cards.map((c, i) => (
          <div key={i} className={`intro-card ${colorMap[c.color] || ''}`}>
            <span className="intro-icon">{c.icon}</span>
            <div className="intro-title">{c.title}</div>
            <div className="intro-desc">{c.desc}</div>
          </div>
        ))}
      </div>
      {section.infoCallout && (
        <Callout
          label={section.infoCallout.label}
          text={section.infoCallout.text}
          variant={section.infoCallout.variant}
        />
      )}
    </>
  )
}

function PillarsSection({ section }) {
  return (
    <>
      {section.callout && <Callout label={section.callout.label} text={section.callout.text} variant={section.callout.variant} />}
      {section.pillars.map(p => <Pillar key={p.id} data={p} />)}
    </>
  )
}

function ToolsSection({ section }) {
  return (
    <>
      {section.callout && <Callout label={section.callout.label} text={section.callout.text} />}
      {section.toolGroups.map(group => (
        <div key={group.id} className="pillar open" style={{ marginBottom: 12 }}>
          <div className="pillar-head" style={{ cursor: 'default' }}>
            <span className="phead-num">{group.id}</span>
            <span className="phead-title">{group.title}</span>
            <span className="phead-tag">{group.tag}</span>
          </div>
          <div className="pillar-body">
            <div className="tool-grid">
              {group.tools.map((t, i) => <ToolCard key={i} tool={t} />)}
            </div>
            {group.rule && <Rule data={group.rule} />}
          </div>
        </div>
      ))}
    </>
  )
}

function MindsetSection({ section }) {
  return (
    <div className="mindset-grid">
      {section.cards.map((c, i) => (
        <div key={i} className="mindset-card">
          <div className="mindset-q">{c.q}</div>
          <div className="mindset-a">{c.a}</div>
        </div>
      ))}
    </div>
  )
}

function AntiPatternsSection({ section }) {
  return (
    <>
      <Callout label={section.callout.label} text={section.callout.text} />
      <div className="antipattern-grid">
        {section.cards.map((c, i) => (
          <div key={i} className="ap-card">
            <div className="ap-num">{c.num}</div>
            <div className="ap-title">{c.title}</div>
            <div className="ap-desc">{c.desc}</div>
          </div>
        ))}
      </div>
    </>
  )
}

function HierarchySection({ section }) {
  return (
    <>
      <div className="hierarchy">
        {section.levels.map((l, i) => (
          <div key={i} className="hier-row">
            <div className={`hier-level ${l.colorClass}`}>{l.level}</div>
            <div className="hier-content">
              <div className="hier-title">{l.title}</div>
              <div className="hier-desc">{l.desc}</div>
            </div>
            <div className="hier-bar">
              <div className="hier-prog">
                <div className="hier-fill" style={{ width: `${l.fill}%`, background: l.fillColor }} />
              </div>
            </div>
          </div>
        ))}
      </div>
      {section.callout && (
        <Callout label={section.callout.label} text={section.callout.text} />
      )}
    </>
  )
}

function ActionSection({ section }) {
  return (
    <div className="action-grid">
      {section.cards.map((c, i) => (
        <div key={i} className={`action-card${c.dark ? ' action-card--dark' : ''}`}>
          <div className="action-day" style={c.dark ? { color: 'rgba(245,242,236,0.5)' } : {}}>{c.day}</div>
          <div className="action-title" style={c.dark ? { color: '#fff' } : {}}>{c.title}</div>
          <ul className="action-items">
            {c.items.map((item, j) => (
              <li key={j} style={c.dark ? { color: 'rgba(245,242,236,0.75)' } : {}}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

// ─────────────────────────────────────────────
//  CLAUDE.MD SECTION (special rich renderer)
// ─────────────────────────────────────────────

const FOLDER_COLOR_MAP = {
  teal:   { badge: 'teal-top', accent: 'var(--teal)', bg: 'var(--teal-light)', border: 'var(--teal-border)' },
  purple: { badge: 'purple-top', accent: 'var(--purple)', bg: 'var(--purple-light)', border: 'var(--purple-border)' },
  gold:   { badge: 'gold-top', accent: 'var(--gold)', bg: 'var(--gold-light)', border: 'var(--gold-border)' },
  coral:  { badge: 'coral-top', accent: 'var(--coral)', bg: 'var(--coral-light)', border: 'var(--coral-border)' },
}

function FolderCard({ folder }) {
  const [open, setOpen] = useState(false)
  const col = FOLDER_COLOR_MAP[folder.color] || FOLDER_COLOR_MAP.teal
  const displayPath = folder.displayPath || `.claude/${folder.name}`

  return (
    <div style={{
      border: `1px solid ${col.border}`,
      borderTop: `3px solid ${col.accent}`,
      borderRadius: 'var(--radius)',
      marginBottom: 14,
      background: 'var(--surface)',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden',
      minWidth: 0,
    }}>
      <div
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'flex', alignItems: 'center', gap: 12,
          padding: '0.9rem 1rem', cursor: 'pointer',
          background: open ? col.bg : 'var(--surface)',
          transition: 'background var(--transition)',
        }}
      >
        <span style={{
          fontSize: 20, flexShrink: 0,
          width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: col.bg, borderRadius: 'var(--radius-sm)',
          border: `1px solid ${col.border}`,
        }}>{folder.icon}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: 'var(--mono)', fontSize: 12.5, fontWeight: 600,
            color: col.accent, letterSpacing: '0.03em',
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>
            {displayPath}
          </div>
          <div style={{ fontFamily: 'var(--body)', fontSize: 12, color: 'var(--ink3)', marginTop: 2, lineHeight: 1.4 }}>
            {folder.what.slice(0, 72)}…
          </div>
        </div>
        <span style={{
          fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink4)',
          transform: open ? 'rotate(180deg)' : 'none', transition: '0.2s', flexShrink: 0,
          background: 'var(--bg2)', borderRadius: 4, padding: '2px 6px',
        }}>{open ? 'close' : 'expand'}</span>
      </div>

      {open && (
        <div style={{ padding: '1.1rem 1.1rem', borderTop: `1px solid ${col.border}`, background: 'var(--surface2)', minWidth: 0, overflow: 'hidden' }}>
          <div style={{ fontFamily: 'var(--body)', fontSize: 14, color: 'var(--ink2)', lineHeight: 1.7, marginBottom: 12 }}>
            {folder.what}
          </div>

          <div style={{
            background: col.bg, border: `1px solid ${col.border}`,
            borderRadius: 'var(--radius-sm)', padding: '0.9rem 1.1rem', marginBottom: 14,
          }}>
            <div style={{
              fontFamily: 'var(--body)', fontSize: 11, fontWeight: 600,
              textTransform: 'uppercase', letterSpacing: '0.12em', color: col.accent, marginBottom: 8,
            }}>
              How to use
            </div>
            <ol style={{ paddingLeft: 18, margin: 0 }}>
              {folder.howToUse.map((step, i) => (
                <li key={i} style={{
                  fontFamily: 'var(--body)', fontSize: 13.5, color: 'var(--ink2)',
                  lineHeight: 1.65, marginBottom: 4,
                }}>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <CodeBlock label={folder.codeLabel} content={folder.code} />
          {folder.code2 && <CodeBlock label={folder.code2Label} content={folder.code2} />}
        </div>
      )}
    </div>
  )
}

function ClaudeMdSection({ section }) {
  return (
    <>
      <Callout label={section.callout.label} text={section.callout.text} />

      <CodeBlock label={section.structureCode.label} content={section.structureCode.content} />

      <div style={{ margin: '2rem 0 1rem' }}>
        <div style={{
          fontFamily: 'var(--body)', fontSize: 11, fontWeight: 600,
          textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--ink4)', marginBottom: 4,
        }}>
          The 4 Core Folders — click any to expand
        </div>
        <div style={{ fontFamily: 'var(--body)', fontSize: 12.5, color: 'var(--ink3)', marginBottom: 14 }}>
          hooks/ · agents/ · commands/ (skills) · CLAUDE.md → ## Rules
        </div>
        {section.folders.map((f, i) => <FolderCard key={i} folder={f} />)}
      </div>

      <div style={{ marginTop: '2rem' }}>
        <div style={{
          fontFamily: 'var(--body)', fontSize: 11, fontWeight: 600,
          textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--ink4)', marginBottom: 12,
        }}>
          Structure & Best Practices
        </div>
        {section.pillars.map(p => <Pillar key={p.id} data={p} />)}
      </div>
    </>
  )
}

// ─────────────────────────────────────────────
//  TEACHING SECTION (structured What / How / Why)
// ─────────────────────────────────────────────

function TeachingSection({ section }) {
  return (
    <>
      {section.intro && (
        <div className="teaching-intro">{section.intro}</div>
      )}
      {section.blocks && (
        <div className={`teaching-grid${section.layout === 'vertical' ? ' teaching-grid--vertical' : ''}`}>
          {section.blocks.map((block, i) => (
            <div key={i} className={`teaching-block tb-${block.type}`}>
              <div className="tb-header">
                <span className="tb-icon">{block.icon}</span>
                <span className="tb-label">{block.label}</span>
              </div>
              <div className="tb-body">
                <p className="tb-text">{block.text}</p>
                {block.bullets && (
                  <ul className="tb-list">
                    {block.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                )}
                {block.code && <CodeBlock label={block.code.label} content={block.code.content} />}
              </div>
            </div>
          ))}
        </div>
      )}
      {section.callout && (
        <Callout label={section.callout.label} text={section.callout.text} variant={section.callout.variant} />
      )}
      {section.pillars?.length > 0 && (
        <div style={{ marginTop: '1.5rem' }}>
          <div className="teaching-divider-label">Deep Dive — click to expand</div>
          {section.pillars.map(p => <Pillar key={p.id} data={p} />)}
        </div>
      )}
    </>
  )
}

// ─────────────────────────────────────────────
//  SECTION DISPATCHER
// ─────────────────────────────────────────────

function Section({ section }) {
  const renderers = {
    teaching:     TeachingSection,
    fundamentals: FundamentalsSection,
    pillars:      PillarsSection,
    claudemd:     ClaudeMdSection,
    tools:        ToolsSection,
    mindset:      MindsetSection,
    antipatterns: AntiPatternsSection,
    hierarchy:    HierarchySection,
    action:       ActionSection,
  }
  const Renderer = renderers[section.type] || PillarsSection

  return (
    <section className="content-section fade-up" id={section.id}>
      <SectionHeader
        num={section.sectionNum}
        title={section.title}
        subtitle={section.subtitle}
      />
      <Renderer section={section} />
    </section>
  )
}

// ─────────────────────────────────────────────
//  HEADER
// ─────────────────────────────────────────────

function Header({ sidebarOpen, setSidebarOpen, theme, toggleTheme }) {
  return (
    <header className="site-header">
      <a href="#" className="logo">{META.logoLabel}</a>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      >
        {theme === 'dark' ? <Sun size={16} strokeWidth={2} /> : <Moon size={16} strokeWidth={2} />}
      </button>
      <button
        className={`hamburger${sidebarOpen ? ' active' : ''}`}
        onClick={() => setSidebarOpen(o => !o)}
        aria-label="Toggle navigation"
        aria-expanded={sidebarOpen}
      >
        <span /><span /><span />
      </button>
    </header>
  )
}

// ─────────────────────────────────────────────
//  SIDEBAR
// ─────────────────────────────────────────────

function Sidebar({ activeSection, sidebarOpen, setSidebarOpen }) {
  return (
    <>
      <div
        className={`sidebar-overlay${sidebarOpen ? ' active' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />
      <aside className={`sidebar${sidebarOpen ? ' open' : ''}`} id="sidebar">
        <button
          className="sidebar-close"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close navigation"
        >✕</button>
        <div className="sidebar-label">Contents</div>
        <ul className="sidebar-nav">
          {NAV_ITEMS.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={() => setSidebarOpen(false)}
              >
                <span className="sidebar-num">{item.num}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="sidebar-divider" />
        <div className="sidebar-meta">{META.sidebarMeta}</div>
      </aside>
    </>
  )
}

// ─────────────────────────────────────────────
//  HERO
// ─────────────────────────────────────────────

const STAT_ICON_MAP = { TrendingUp, ShieldCheck, Activity, BrainCircuit }

function Hero() {
  return (
    <section className="hero">
      <div className="hero-eyebrow">{META.eyebrow}</div>
      <h1>100X Agentic<br /><em>Engineering</em></h1>
      <p className="hero-sub">{META.heroSub}</p>

      <div className="hero-sources">
        <span className="hero-sources-label">Synthesized from</span>
        <div className="hero-source-pill"><BookOpen size={12} strokeWidth={2} />Anthropic Research</div>
        <div className="hero-source-pill"><Code2 size={12} strokeWidth={2} />Boris Cherny</div>
        <div className="hero-source-pill"><Layers size={12} strokeWidth={2} />Addy Osmani</div>
        <div className="hero-source-pill"><Users size={12} strokeWidth={2} />Community Intel</div>
      </div>

      <div className="stats-row">
        {HERO_STATS.map((s, i) => {
          const Icon = STAT_ICON_MAP[s.icon]
          return (
            <div key={i} className="stat-item">
              {Icon && <div className="stat-icon"><Icon size={20} strokeWidth={1.5} /></div>}
              <span className="stat-n">{s.n}</span>
              <span className="stat-l">{s.label}</span>
            </div>
          )
        })}
      </div>

      <a className="hero-cta" href="#agentic-coding">
        Explore the guide <ArrowDown size={14} strokeWidth={2} />
      </a>
    </section>
  )
}

// ─────────────────────────────────────────────
//  APP ROOT
// ─────────────────────────────────────────────

export default function App() {
  const [readingProgress, setReadingProgress] = useState(0)
  const [backToTopVisible, setBackToTopVisible] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('fundamentals')
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    }
    return 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  const handleScroll = useCallback(() => {
    // Reading bar
    const total = document.body.scrollHeight - window.innerHeight
    setReadingProgress(total > 0 ? (window.scrollY / total) * 100 : 0)

    // Back to top visibility
    setBackToTopVisible(window.scrollY > 500)

    // Active section for sidebar
    const sections = document.querySelectorAll('.content-section[id]')
    let current = 'fundamentals'
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 140) current = s.id
    })
    setActiveSection(current)

    // Close sidebar on Escape
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape' && sidebarOpen) setSidebarOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [sidebarOpen])

  // Fade-up observer
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.05, rootMargin: '200px 0px 0px 0px' }
    )
    elements.forEach(el => observer.observe(el))
    // Fallback: if IntersectionObserver never fires (e.g. hidden iframe, SSR),
    // make everything visible after 800ms
    const fallback = setTimeout(() => {
      elements.forEach(el => el.classList.add('visible'))
    }, 800)
    return () => { observer.disconnect(); clearTimeout(fallback) }
  }, [])

  return (
    <>
      <ReadingBar progress={readingProgress} />
      <BackToTop visible={backToTopVisible} />

      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} theme={theme} toggleTheme={toggleTheme} />
      <Hero />

      <div className="page-grid">
        <Sidebar
          activeSection={activeSection}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <main className="main-content">
          {SECTIONS.map(section => (
            <Section key={section.id} section={section} />
          ))}
        </main>
      </div>

      <footer className="site-footer">
        <div className="footer-left">{META.logoLabel}</div>
        <div className="footer-right">
          {META.footerNote.split('\n').map((line, i) => (
            <span key={i}>{line}{i < 2 ? <br /> : null}</span>
          ))}
        </div>
      </footer>
    </>
  )
}
