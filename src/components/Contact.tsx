export default function Contact() {
  return (
    <footer
      id="hi"
      style={{
        background: '#FF3D0D',
        color: '#15131C',
        borderRadius: 48,
        padding: 'clamp(32px, 5vw, 72px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(28px, 4vw, 56px)',
        marginTop: 'clamp(20px, 2.6vw, 36px)',
      }}
    >
      <h2
        style={{
          margin: '0',
          fontSize: 'clamp(48px, 10.4vw, 150px)',
          lineHeight: '.96',
          fontWeight: '800',
          letterSpacing: '-.028em',
        }}
        data-split=""
      >
        <span className="w">
          <span className="wi" style={{ '--i': '0' }}>
            Say
          </span>
        </span>{' '}
        <span className="w">
          <span className="wi" style={{ '--i': '1' }}>
            hi.
          </span>
        </span>{' '}
        <span className="sf" style={{ display: 'block' }}>
          <span className="w">
            <span className="wi" style={{ '--i': '2' }}>
              Bring
            </span>
          </span>{' '}
          <span className="w">
            <span className="wi" style={{ '--i': '3' }}>
              your
            </span>
          </span>{' '}
          <span className="w">
            <span className="wi" style={{ '--i': '4' }}>
              team.
            </span>
          </span>
        </span>
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, '--d': '300ms' }} data-r="up">
        <a
          href="mailto:viacheslav.stetsenko@gmail.com"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            minHeight: 64,
            padding: '0 clamp(18px, 4vw, 30px)',
            whiteSpace: 'nowrap',
            borderRadius: 999,
            background: '#15131C',
            color: '#FFFFFF',
            textDecoration: 'none',
            fontWeight: '800',
            fontSize: 'clamp(15px, 1.4vw, 19px)',
          }}
          className="mag"
        >
          viacheslav.stetsenko@gmail.com
        </a>
        <a
          href="https://t.me/slava_stetsenko"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            minHeight: 64,
            padding: '0 clamp(18px, 4vw, 30px)',
            whiteSpace: 'nowrap',
            borderRadius: 999,
            background: '#FFFFFF',
            color: '#15131C',
            textDecoration: 'none',
            fontWeight: '800',
            fontSize: 'clamp(15px, 1.4vw, 19px)',
          }}
          className="mag"
        >
          Telegram @slava_stetsenko
        </a>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '8px 24px',
          fontWeight: '600',
          borderTop: '1.5px solid rgb(21, 19, 28)',
          paddingTop: 18,
          '--d': '420ms',
        }}
        data-r="up"
      >
        <span>Viacheslav Stetsenko &copy; 2026</span>
        <span>Kyiv, Ukraine</span>
      </div>
    </footer>
  );
}
