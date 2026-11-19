/* eslint-disable @next/next/no-img-element */
export default function WebProjects() {
  return (
    <section
      id="web"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(12px, 1.4vw, 20px)',
        paddingTop: 'clamp(32px, 4vw, 56px)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '12px 40px',
          padding: '0 clamp(8px, 2vw, 28px) 12px',
        }}
      >
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
              Web
            </span>
          </span>{' '}
          <span className="w">
            <span className="wi" style={{ '--i': '1' }}>
              projects,
            </span>
          </span>{' '}
          <span className="sf">
            <span className="w">
              <span className="wi" style={{ '--i': '2' }}>
                live
              </span>
            </span>{' '}
            <span className="w">
              <span className="wi" style={{ '--i': '3' }}>
                for
              </span>
            </span>{' '}
            <span className="w">
              <span className="wi" style={{ '--i': '4' }}>
                real
              </span>
            </span>{' '}
            <span className="w">
              <span className="wi" style={{ '--i': '5' }}>
                clients.
              </span>
            </span>
          </span>
        </h2>
        <p style={{ margin: 0, maxWidth: 760, color: 'rgb(75, 72, 96)', '--d': '250ms' }} data-r="up">
          Three sites I built for clients, from a ministry portal to a neighbourhood studio.
        </p>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
          gap: 'clamp(12px, 1.4vw, 20px)',
        }}
      >
        <article
          className="app"
          style={{
            background: 'rgb(255, 255, 255)',
            borderRadius: 40,
            padding: '14px 14px 28px',
            display: 'grid',
            gridTemplateRows: 'subgrid',
            gridRow: 'span 4',
            rowGap: 22,
            boxSizing: 'border-box',
            '--d': '0ms',
          }}
          data-r="up"
        >
          <div
            style={{
              background: '#15131C',
              color: '#FFFFFF',
              borderRadius: 28,
              padding: 14,
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              minHeight: 240,
              boxSizing: 'border-box',
              position: 'relative',
              overflow: 'hidden',
              isolation: 'isolate',
            }}
          >
            <img
              src="/assets/blaze.jpg"
              alt="Blaze Studio home page"
              style={{
                position: 'absolute',
                inset: '0',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: '50% 0',
                zIndex: '0',
                filter: 'grayscale(1)',
              }}
            />
            <div
              aria-hidden="true"
              style={{ position: 'absolute', inset: '0', zIndex: '0', background: '#15131C', opacity: '.45' }}
            />
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: '0',
                zIndex: '0',
                background: 'linear-gradient(rgba(21,19,28,0) 20%, #15131C 82%)',
              }}
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: '1' }}>
              <span aria-hidden="true" style={{ display: 'flex', gap: 6 }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFFFFF', opacity: '.45' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFFFFF', opacity: '.45' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFFFFF', opacity: '.45' }} />
              </span>
              <span
                style={{
                  flex: '1 1 auto',
                  minWidth: '0',
                  padding: '7px 14px',
                  borderRadius: 999,
                  background: '#FFFFFF',
                  color: '#15131C',
                  fontSize: 14,
                  fontWeight: '600',
                  letterSpacing: '.01em',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                blazestudio.kyiv.ua
              </span>
            </div>
            <div
              style={{
                flex: '1 1 auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '10px 12px 8px',
                gap: 6,
                position: 'relative',
                zIndex: '1',
              }}
            >
              <span style={{ fontWeight: '600', fontSize: 15, letterSpacing: '.01em', color: '#FF9A7A' }}>
                Hair studio and barbershop, Kyiv
              </span>
              <h3
                style={{
                  margin: '0',
                  fontSize: 'clamp(40px, 4vw, 58px)',
                  lineHeight: '.96',
                  fontWeight: '800',
                  letterSpacing: '-.03em',
                }}
              >
                Blaze Studio
              </h3>
            </div>
          </div>
          <p style={{ margin: '0', padding: '0 14px', textWrap: 'pretty' }}>
            A site for a modern haircut studio with two locations: services, team, portfolio, prices, reviews and online
            booking.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 8,
              padding: '0 14px',
              fontSize: '14.5px',
              fontWeight: '600',
              letterSpacing: '.01em',
              alignContent: 'flex-start',
            }}
          >
            <span style={{ padding: '8px 13px', borderRadius: 999, background: '#ECEAF3' }}>Business site</span>
            <span style={{ padding: '8px 13px', borderRadius: 999, background: '#ECEAF3' }}>Next.js + PayloadCMS</span>
          </div>
          <a
            href="https://www.blazestudio.kyiv.ua/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: 48,
              padding: '0 22px',
              margin: '0 14px',
              borderRadius: 999,
              textDecoration: 'none',
              fontWeight: '800',
              justifySelf: 'start',
              background: '#15131C',
              color: '#FFFFFF',
            }}
          >
            Visit blazestudio.kyiv.ua &rarr;
          </a>
        </article>

        <article
          className="app"
          style={{
            background: 'rgb(255, 255, 255)',
            borderRadius: 40,
            padding: '14px 14px 28px',
            display: 'grid',
            gridTemplateRows: 'subgrid',
            gridRow: 'span 4',
            rowGap: 22,
            boxSizing: 'border-box',
            '--d': '110ms',
          }}
          data-r="up"
        >
          <div
            style={{
              background: '#2B3FE0',
              color: '#FFFFFF',
              borderRadius: 28,
              padding: 14,
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              minHeight: 240,
              boxSizing: 'border-box',
              position: 'relative',
              overflow: 'hidden',
              isolation: 'isolate',
            }}
          >
            <img
              src="/assets/tysiachovesna.jpg"
              alt="Tysiachovesna home page"
              style={{
                position: 'absolute',
                inset: '0',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: '50% 0',
                zIndex: '0',
                filter: 'grayscale(1) contrast(1.1)',
              }}
            />
            <div
              aria-hidden="true"
              style={{ position: 'absolute', inset: '0', zIndex: '0', background: '#2B3FE0', mixBlendMode: 'multiply' }}
            />
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: '0',
                zIndex: '0',
                background: 'linear-gradient(rgba(43,63,224,0) 25%, #2B3FE0 80%)',
              }}
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: '1' }}>
              <span aria-hidden="true" style={{ display: 'flex', gap: 6 }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFFFFF', opacity: '.45' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFFFFF', opacity: '.45' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFFFFF', opacity: '.45' }} />
              </span>
              <span
                style={{
                  flex: '1 1 auto',
                  minWidth: '0',
                  padding: '7px 14px',
                  borderRadius: 999,
                  background: '#FFFFFF',
                  color: '#15131C',
                  fontSize: 14,
                  fontWeight: '600',
                  letterSpacing: '.01em',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                culture.gov.ua
              </span>
            </div>
            <div
              style={{
                flex: '1 1 auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '10px 12px 8px',
                gap: 6,
                position: 'relative',
                zIndex: '1',
              }}
            >
              <span style={{ fontWeight: '600', fontSize: 15, letterSpacing: '.01em', color: '#D4FF3A' }}>
                Ministry of Culture of Ukraine
              </span>
              <h3
                style={{
                  margin: '0',
                  fontSize: 'clamp(40px, 4vw, 58px)',
                  lineHeight: '.96',
                  fontWeight: '800',
                  letterSpacing: '-.03em',
                }}
              >
                Tysiachovesna
              </h3>
            </div>
          </div>
          <p style={{ margin: '0', padding: '0 14px', textWrap: 'pretty' }}>
            A government portal for submitting and reviewing applications for state-funded cultural projects, from film
            to animation.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 8,
              padding: '0 14px',
              fontSize: '14.5px',
              fontWeight: '600',
              letterSpacing: '.01em',
              alignContent: 'flex-start',
            }}
          >
            <span style={{ padding: '8px 13px', borderRadius: 999, background: '#ECEAF3' }}>Government portal</span>
            <span style={{ padding: '8px 13px', borderRadius: 999, background: '#ECEAF3' }}>Next.js</span>
            <span style={{ padding: '8px 13px', borderRadius: 999, background: '#ECEAF3' }}>2026</span>
          </div>
          <a
            href="https://www.culture.gov.ua/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: 48,
              padding: '0 22px',
              margin: '0 14px',
              borderRadius: 999,
              textDecoration: 'none',
              fontWeight: '800',
              justifySelf: 'start',
              background: '#15131C',
              color: '#FFFFFF',
            }}
          >
            Visit culture.gov.ua &rarr;
          </a>
        </article>

        <article
          className="app"
          style={{
            background: 'rgb(255, 255, 255)',
            borderRadius: 40,
            padding: '14px 14px 28px',
            display: 'grid',
            gridTemplateRows: 'subgrid',
            gridRow: 'span 4',
            rowGap: 22,
            boxSizing: 'border-box',
            '--d': '220ms',
          }}
          data-r="up"
        >
          <div
            style={{
              background: '#1E1814',
              color: '#FFFFFF',
              borderRadius: 28,
              padding: 14,
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              minHeight: 240,
              boxSizing: 'border-box',
              position: 'relative',
              overflow: 'hidden',
              isolation: 'isolate',
            }}
          >
            <img
              src="/assets/hubremontu.jpg"
              alt="Hub Remontu home page"
              style={{
                position: 'absolute',
                inset: '0',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: '50% 0',
                zIndex: '0',
              }}
            />
            <div
              aria-hidden="true"
              style={{ position: 'absolute', inset: '0', zIndex: '0', background: '#1E1814', opacity: '.3' }}
            />
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: '0',
                zIndex: '0',
                background: 'linear-gradient(rgba(30,24,20,0) 15%, #1E1814 85%)',
              }}
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: '1' }}>
              <span aria-hidden="true" style={{ display: 'flex', gap: 6 }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFFFFF', opacity: '.45' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFFFFF', opacity: '.45' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFFFFF', opacity: '.45' }} />
              </span>
              <span
                style={{
                  flex: '1 1 auto',
                  minWidth: '0',
                  padding: '7px 14px',
                  borderRadius: 999,
                  background: '#FFFFFF',
                  color: '#15131C',
                  fontSize: 14,
                  fontWeight: '600',
                  letterSpacing: '.01em',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                hubremontu.ua
              </span>
            </div>
            <div
              style={{
                flex: '1 1 auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '10px 12px 8px',
                gap: 6,
                position: 'relative',
                zIndex: '1',
              }}
            >
              <span style={{ fontWeight: '600', fontSize: 15, letterSpacing: '.01em', color: '#E3B691' }}>
                Renovation studio, Kyiv
              </span>
              <h3
                style={{
                  margin: '0',
                  fontSize: 'clamp(40px, 4vw, 58px)',
                  lineHeight: '.96',
                  fontWeight: '800',
                  letterSpacing: '-.03em',
                }}
              >
                Hub Remontu
              </h3>
            </div>
          </div>
          <p style={{ margin: '0', padding: '0 14px', textWrap: 'pretty' }}>
            A portfolio site for a full-cycle apartment design and renovation studio, showing its completed residential
            projects.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 8,
              padding: '0 14px',
              fontSize: '14.5px',
              fontWeight: '600',
              letterSpacing: '.01em',
              alignContent: 'flex-start',
            }}
          >
            <span style={{ padding: '8px 13px', borderRadius: 999, background: '#ECEAF3' }}>Portfolio site</span>
            <span style={{ padding: '8px 13px', borderRadius: 999, background: '#ECEAF3' }}>Next.js + PayloadCMS</span>
            <span style={{ padding: '8px 13px', borderRadius: 999, background: '#ECEAF3' }}>2025</span>
          </div>
          <a
            href="https://hubremontu.ua/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: 48,
              padding: '0 22px',
              margin: '0 14px',
              borderRadius: 999,
              textDecoration: 'none',
              fontWeight: '800',
              justifySelf: 'start',
              background: '#15131C',
              color: '#FFFFFF',
            }}
          >
            Visit hubremontu.ua &rarr;
          </a>
        </article>
      </div>
    </section>
  );
}
