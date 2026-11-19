/* eslint-disable @next/next/no-img-element */
export default function Apps() {
  return (
    <section
      id="apps"
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
              My
            </span>
          </span>{' '}
          <span className="w">
            <span className="wi" style={{ '--i': '1' }}>
              apps,
            </span>
          </span>{' '}
          <span className="sf">
            <span className="w">
              <span className="wi" style={{ '--i': '2' }}>
                on
              </span>
            </span>{' '}
            <span className="w">
              <span className="wi" style={{ '--i': '3' }}>
                your
              </span>
            </span>{' '}
            <span className="w">
              <span className="wi" style={{ '--i': '4' }}>
                home
              </span>
            </span>{' '}
            <span className="w">
              <span className="wi" style={{ '--i': '5' }}>
                screen.
              </span>
            </span>
          </span>
        </h2>
        <p style={{ margin: 0, maxWidth: 760, color: 'rgb(75, 72, 96)', '--d': '250ms' }} data-r="up">
          Three products I design and build end to end. Every one has an iOS app.
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
            background: 'rgb(255, 61, 13)',
            color: 'rgb(21, 19, 28)',
            borderRadius: 48,
            padding: 32,
            display: 'grid',
            gridTemplateRows: 'subgrid',
            gridRow: 'span 4',
            rowGap: 28,
            alignContent: 'start',
            boxSizing: 'border-box',
            '--d': '0ms',
          }}
          data-r="up"
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
            <img
              className="bob"
              src="/assets/calleo.png"
              alt="Calleo app icon"
              style={{
                '--r': '-6deg',
                width: 'clamp(100px, 27vw, 124px)',
                height: 'clamp(100px, 27vw, 124px)',
                flex: 'none',
                filter: 'drop-shadow(0 16px 16px rgba(21,19,28,.35))',
              }}
            />
            <span
              style={{
                padding: '8px 14px',
                borderRadius: 999,
                whiteSpace: 'nowrap',
                flex: 'none',
                background: '#15131C',
                color: '#FFFFFF',
                fontSize: 14,
                fontWeight: '600',
              }}
            >
              Live on the App Store
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 20 }}>
            <h3
              style={{
                margin: '0',
                fontSize: 'clamp(54px, 5.4vw, 80px)',
                lineHeight: '.9',
                fontWeight: '800',
                letterSpacing: '-.028em',
              }}
            >
              Calleo
            </h3>
            <p className="sf" style={{ margin: '0', fontSize: 30, lineHeight: '1.02' }}>
              Learn words with AI.
            </p>
          </div>
          <p style={{ margin: '0', textWrap: 'pretty' }}>
            Build your own word sets and practise them with flashcards, quizzes, matching, fill-in-the-blank, sentence
            building and crosswords.
          </p>
          <a
            href="https://www.calleo.xyz"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: 48,
              padding: '0 22px',
              borderRadius: 999,
              textDecoration: 'none',
              fontWeight: '800',
              justifySelf: 'start',
              background: '#15131C',
              color: '#FFFFFF',
            }}
          >
            calleo.xyz &rarr;
          </a>
        </article>

        <article
          className="app"
          style={{
            background: 'rgb(238, 177, 75)',
            color: 'rgb(21, 19, 28)',
            borderRadius: 48,
            padding: 32,
            display: 'grid',
            gridTemplateRows: 'subgrid',
            gridRow: 'span 4',
            rowGap: 28,
            alignContent: 'start',
            boxSizing: 'border-box',
            '--d': '110ms',
          }}
          data-r="up"
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
            <img
              className="bob"
              src="/assets/pokito.png"
              alt="Pokito app icon"
              style={{
                '--r': '5deg',
                animationDelay: '-1.6s',
                width: 'clamp(100px, 27vw, 124px)',
                height: 'clamp(100px, 27vw, 124px)',
                flex: 'none',
                filter: 'drop-shadow(0 16px 16px rgba(21,19,28,.35))',
              }}
            />
            <span
              style={{
                padding: '8px 14px',
                borderRadius: 999,
                whiteSpace: 'nowrap',
                flex: 'none',
                background: '#15131C',
                color: '#FFFFFF',
                fontSize: 14,
                fontWeight: '600',
              }}
            >
              Live on the App Store
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 20 }}>
            <h3
              style={{
                margin: '0',
                fontSize: 'clamp(54px, 5.4vw, 80px)',
                lineHeight: '.9',
                fontWeight: '800',
                letterSpacing: '-.028em',
              }}
            >
              Pokito
            </h3>
            <p className="sf" style={{ margin: '0', fontSize: 30, lineHeight: '1.02' }}>
              Spanish, un poquito a day.
            </p>
          </div>
          <p style={{ margin: '0', textWrap: 'pretty' }}>
            A calm daily plan: spaced-repetition words, one grammar rule, one listening item, and an AI tutor for
            role-play who fixes mistakes inline.
          </p>
          <a
            href="https://pokito.study"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: 48,
              padding: '0 22px',
              borderRadius: 999,
              textDecoration: 'none',
              fontWeight: '800',
              justifySelf: 'start',
              background: '#15131C',
              color: '#FFFFFF',
            }}
          >
            pokito.study &rarr;
          </a>
        </article>

        <article
          className="app"
          style={{
            background: 'rgb(21, 19, 28)',
            color: 'rgb(255, 255, 255)',
            borderRadius: 48,
            padding: 32,
            display: 'grid',
            gridTemplateRows: 'subgrid',
            gridRow: 'span 4',
            rowGap: 28,
            alignContent: 'start',
            boxSizing: 'border-box',
            '--d': '220ms',
          }}
          data-r="up"
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
            <div
              className="bob"
              style={{
                '--r': '-4deg',
                animationDelay: '-3.1s',
                width: 'clamp(100px, 27vw, 124px)',
                height: 'clamp(100px, 27vw, 124px)',
                flex: 'none',
                borderRadius: 28,
                background: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 18px 30px -14px rgba(0,0,0,.8)',
              }}
            >
              <img
                src="/assets/anylink.png"
                alt="AnyLink logo"
                style={{ width: '76%', height: '76%', objectFit: 'contain' }}
              />
            </div>
            <span
              style={{
                padding: '8px 14px',
                borderRadius: 999,
                whiteSpace: 'nowrap',
                flex: 'none',
                background: '#D4FF3A',
                color: '#15131C',
                fontSize: 14,
                fontWeight: '600',
              }}
            >
              Web, iOS, extension
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 20 }}>
            <h3
              style={{
                margin: '0',
                fontSize: 'clamp(54px, 5.4vw, 80px)',
                lineHeight: '.9',
                fontWeight: '800',
                letterSpacing: '-.028em',
              }}
            >
              AnyLink
            </h3>
            <p className="sf" style={{ margin: '0', fontSize: 30, lineHeight: '1.02', color: '#D4FF3A' }}>
              Paste anything. It reads the rest.
            </p>
          </div>
          <p style={{ margin: '0', color: '#D6D3E3', textWrap: 'pretty' }}>
            A personal link library that crawls and enriches every URL, files it into collections and adds a reader
            view, &#8984;K search and price tracking.
          </p>
          <a
            href="https://www.anylink.space"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: 48,
              padding: '0 22px',
              borderRadius: 999,
              textDecoration: 'none',
              fontWeight: '800',
              justifySelf: 'start',
              background: '#D4FF3A',
              color: '#15131C',
            }}
          >
            anylink.space &rarr;
          </a>
        </article>
      </div>
    </section>
  );
}
