export default function Stats() {
  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(160px, 100%), 1fr))',
        gap: 'clamp(12px, 1.4vw, 20px)',
      }}
    >
      <div
        style={{
          background: 'rgb(21, 19, 28)',
          color: 'rgb(255, 255, 255)',
          borderRadius: 32,
          padding: '24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          '--d': '0ms',
        }}
        data-r="up"
      >
        <span
          style={{ fontSize: 'clamp(52px, 5vw, 72px)', lineHeight: '.95', fontWeight: '800', letterSpacing: '-.035em' }}
          data-count=""
        >
          10+
        </span>
        <span style={{ color: '#C9C6D6' }}>years on the web</span>
      </div>
      <div
        style={{
          background: 'rgb(43, 63, 224)',
          color: 'rgb(255, 255, 255)',
          borderRadius: 32,
          padding: '24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          '--d': '90ms',
        }}
        data-r="up"
      >
        <span
          style={{ fontSize: 'clamp(52px, 5vw, 72px)', lineHeight: '.95', fontWeight: '800', letterSpacing: '-.035em' }}
          data-count=""
        >
          14
        </span>
        <span>engineers in my biggest team</span>
      </div>
      <div
        style={{
          background: 'rgb(255, 255, 255)',
          borderRadius: 32,
          padding: '24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          '--d': '180ms',
        }}
        data-r="up"
      >
        <span
          style={{ fontSize: 'clamp(52px, 5vw, 72px)', lineHeight: '.95', fontWeight: '800', letterSpacing: '-.035em' }}
          data-count=""
        >
          15
        </span>
        <span style={{ color: '#4B4860' }}>mentored from Junior to Senior</span>
      </div>
      <div
        style={{
          background: 'rgb(255, 61, 13)',
          borderRadius: 32,
          padding: '24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          '--d': '270ms',
        }}
        data-r="up"
      >
        <span
          style={{ fontSize: 'clamp(52px, 5vw, 72px)', lineHeight: '.95', fontWeight: '800', letterSpacing: '-.035em' }}
          data-count=""
        >
          3
        </span>
        <span>own products with iOS apps</span>
      </div>
    </section>
  );
}
