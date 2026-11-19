export default function AiEnablement() {
  return (
    <section
      id="ai"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'clamp(12px, 1.4vw, 20px)',
        paddingTop: 'clamp(32px, 4vw, 56px)',
      }}
    >
      <div
        style={{
          flex: '1.1 1 440px',
          minWidth: 0,
          background: 'rgb(43, 63, 224)',
          color: 'rgb(255, 255, 255)',
          borderRadius: 40,
          padding: 'clamp(28px, 3.4vw, 48px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 40,
          boxSizing: 'border-box',
          '--d': '0ms',
        }}
        data-r="up"
      >
        <span style={{ fontWeight: '600' }}>AI enablement</span>
        <h2
          style={{
            margin: '0',
            fontSize: 'clamp(40px, 5vw, 72px)',
            lineHeight: '.98',
            fontWeight: '800',
            letterSpacing: '-.03em',
          }}
          data-split=""
        >
          <span className="w">
            <span className="wi" style={{ '--i': '0' }}>
              From
            </span>
          </span>{' '}
          <span className="w">
            <span className="wi" style={{ '--i': '1' }}>
              &ldquo;we
            </span>
          </span>{' '}
          <span className="w">
            <span className="wi" style={{ '--i': '2' }}>
              tried
            </span>
          </span>{' '}
          <span className="w">
            <span className="wi" style={{ '--i': '3' }}>
              Copilot&rdquo;
            </span>
          </span>{' '}
          <span className="sf">
            <span className="w">
              <span className="wi" style={{ '--i': '4' }}>
                to
              </span>
            </span>{' '}
            <span className="w">
              <span className="wi" style={{ '--i': '5' }}>
                a
              </span>
            </span>{' '}
            <span className="w">
              <span className="wi" style={{ '--i': '6' }}>
                team
              </span>
            </span>{' '}
            <span className="w">
              <span className="wi" style={{ '--i': '7' }}>
                that
              </span>
            </span>{' '}
            <span className="w">
              <span className="wi" style={{ '--i': '8' }}>
                ships
              </span>
            </span>{' '}
            <span className="w">
              <span className="wi" style={{ '--i': '9' }}>
                with
              </span>
            </span>{' '}
            <span className="w">
              <span className="wi" style={{ '--i': '10' }}>
                agents.
              </span>
            </span>
          </span>
        </h2>
        <p style={{ margin: '0', maxWidth: 480, textWrap: 'pretty' }}>
          AI Champion on an enterprise delivery at EPAM, a certified Cursor and Anthropic partner.
        </p>
      </div>
      <div
        style={{
          flex: '1.4 1 520px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
          gap: 'clamp(12px, 1.4vw, 20px)',
        }}
      >
        <div
          className="tile"
          style={{
            background: 'rgb(255, 255, 255)',
            borderRadius: 32,
            padding: 26,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            '--d': '120ms',
          }}
          data-r="up"
        >
          <span className="sf" style={{ fontSize: 44, lineHeight: '1', color: '#2B3FE0' }}>
            1
          </span>
          <div style={{ fontSize: 22, fontWeight: '800', letterSpacing: '-.01em', lineHeight: '1.1' }}>
            Audit and strategy
          </div>
          <div style={{ color: '#4B4860' }}>
            Tool audits, role-specific recommendations for FE, BE, QA and UI/UX, adoption KPIs.
          </div>
        </div>
        <div
          className="tile"
          style={{
            background: 'rgb(255, 255, 255)',
            borderRadius: 32,
            padding: 26,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            '--d': '200ms',
          }}
          data-r="up"
        >
          <span className="sf" style={{ fontSize: 44, lineHeight: '1', color: '#2B3FE0' }}>
            2
          </span>
          <div style={{ fontSize: 22, fontWeight: '800', letterSpacing: '-.01em', lineHeight: '1.1' }}>
            Custom Claude skills
          </div>
          <div style={{ color: '#4B4860' }}>
            Skills and plugins written for the team&apos;s own workflows, used every day.
          </div>
        </div>
        <div
          className="tile"
          style={{
            background: 'rgb(255, 255, 255)',
            borderRadius: 32,
            padding: 26,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            '--d': '280ms',
          }}
          data-r="up"
        >
          <span className="sf" style={{ fontSize: 44, lineHeight: '1', color: '#2B3FE0' }}>
            3
          </span>
          <div style={{ fontSize: 22, fontWeight: '800', letterSpacing: '-.01em', lineHeight: '1.1' }}>
            MCP in the pipeline
          </div>
          <div style={{ color: '#4B4860' }}>
            Figma, PayloadCMS, Remotion, Supabase, Vercel, Playwright and Blender servers.
          </div>
        </div>
        <div
          className="tile"
          style={{
            background: 'rgb(255, 255, 255)',
            borderRadius: 32,
            padding: 26,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            '--d': '360ms',
          }}
          data-r="up"
        >
          <span className="sf" style={{ fontSize: 44, lineHeight: '1', color: '#2B3FE0' }}>
            4
          </span>
          <div style={{ fontSize: 22, fontWeight: '800', letterSpacing: '-.01em', lineHeight: '1.1' }}>Workshops</div>
          <div style={{ color: '#4B4860' }}>
            An AI-literacy program on agents, skills and MCP: 31 slides, presenter script, recording guide.
          </div>
        </div>
        <div
          className="tile"
          style={{
            background: 'rgb(255, 61, 13)',
            borderRadius: 32,
            padding: 26,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            gridColumn: '1 / -1',
            '--d': '440ms',
          }}
          data-r="up"
        >
          <div style={{ fontSize: 22, fontWeight: '800', letterSpacing: '-.01em', lineHeight: '1.1' }}>
            Fast in prototypes, strict in production
          </div>
          <div>Review gates, tests and security checks keep quality intact while AI speeds up delivery.</div>
        </div>
      </div>
    </section>
  );
}
