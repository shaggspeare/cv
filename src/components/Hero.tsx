/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  return (
    <section id="top" style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(12px, 1.4vw, 20px)' }}>
      <div
        style={{
          flex: '2.2 1 620px',
          minWidth: '0',
          background: '#FFFFFF',
          borderRadius: 40,
          padding: 'clamp(28px, 4vw, 56px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 32,
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          <span
            style={{
              padding: '9px 16px',
              borderRadius: 999,
              background: 'rgb(236, 234, 243)',
              fontWeight: '600',
              fontSize: 15,
              letterSpacing: '0.01em',
              '--d': '150ms',
            }}
            data-r="pop"
          >
            Lead Front-End Engineer
          </span>
          <span
            style={{
              padding: '9px 16px',
              borderRadius: 999,
              background: 'rgb(236, 234, 243)',
              fontWeight: '600',
              fontSize: 15,
              letterSpacing: '0.01em',
              '--d': '220ms',
            }}
            data-r="pop"
          >
            AI Enablement Consultant
          </span>
          <span
            style={{
              padding: '9px 16px',
              borderRadius: 999,
              background: 'rgb(21, 19, 28)',
              color: 'rgb(255, 255, 255)',
              fontWeight: '600',
              fontSize: 15,
              letterSpacing: '0.01em',
              '--d': '290ms',
            }}
            data-r="pop"
          >
            iOS maker
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <h1
            style={{
              margin: 0,
              fontSize: 'clamp(64px, 11.4vw, 164px)',
              lineHeight: '0.88',
              fontWeight: '800',
              letterSpacing: '-0.028em',
              '--d': '180ms',
            }}
            data-split=""
          >
            <span className="w">
              <span className="wi" style={{ '--i': '0' }}>
                Hi,
              </span>
            </span>
            <br />
            <span className="w">
              <span className="wi" style={{ '--i': '1' }}>
                I&apos;m
              </span>
            </span>{' '}
            <span className="w">
              <span className="wi" style={{ '--i': '2' }}>
                Slava
              </span>
            </span>
          </h1>
          <p
            className="sf"
            style={{
              margin: 0,
              maxWidth: 820,
              fontSize: 'clamp(26px, 3.5vw, 50px)',
              lineHeight: '1.04',
              textWrap: 'balance',
              '--d': '900ms',
            }}
            data-r="up"
          >
            I teach engineering teams to build with AI, and I build iOS apps to keep myself honest.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 8 }}>
            <a
              href="#hi"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: 56,
                padding: '0px 28px',
                borderRadius: 999,
                background: 'rgb(21, 19, 28)',
                color: 'rgb(255, 255, 255)',
                textDecoration: 'none',
                fontWeight: '800',
                '--d': '1050ms',
              }}
              data-r="up"
              className="mag"
            >
              Work with me
            </a>
            <a
              href="#apps"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: 56,
                padding: '0px 28px',
                borderRadius: 999,
                border: '1.5px solid rgb(21, 19, 28)',
                textDecoration: 'none',
                fontWeight: '800',
                '--d': '1140ms',
              }}
              data-r="up"
              className="mag"
            >
              See the apps
            </a>
          </div>
        </div>
      </div>
      <div
        className="heroR"
        style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.4vw, 20px)' }}
      >
        <figure
          style={{
            margin: 0,
            flex: '0 0 auto',
            aspectRatio: '1 / 1',
            borderRadius: 40,
            overflow: 'hidden',
            position: 'relative',
            background: 'rgb(21, 19, 28)',
            '--d': '200ms',
          }}
          data-r="up"
        >
          <img
            src="/assets/slava.jpg"
            alt="Portrait of Slava Stetsenko"
            style={{
              position: 'absolute',
              inset: '0',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: '50% 50%',
            }}
          />
          <figcaption
            style={{
              position: 'absolute',
              left: 16,
              bottom: 16,
              padding: '9px 16px',
              borderRadius: 999,
              background: '#FFFFFF',
              fontWeight: '600',
              fontSize: 15,
              letterSpacing: '.01em',
            }}
          >
            Slava Stetsenko &middot; Kyiv
          </figcaption>
        </figure>
        <a
          className="tile"
          href="#hi"
          style={{
            background: 'rgb(212, 255, 58)',
            borderRadius: 40,
            padding: 28,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 24,
            minHeight: 190,
            flex: '1 1 auto',
            textDecoration: 'none',
            boxSizing: 'border-box',
            '--d': '360ms',
          }}
          data-r="up"
        >
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 10,
              fontWeight: '600',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                style={{ width: 12, height: 12, borderRadius: '50%', background: '#15131C', display: 'inline-block' }}
                className="pulse"
              />
              Open to AI enablement work
            </span>
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.4}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 18 18 6M9 6h9v9" />
            </svg>
          </span>
          <span
            style={{
              fontSize: 'clamp(28px, 2.8vw, 38px)',
              lineHeight: '1.02',
              fontWeight: '800',
              letterSpacing: '-.025em',
            }}
          >
            Workshops, playbooks, team setups.
          </span>
        </a>
      </div>
    </section>
  );
}
