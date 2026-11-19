export default function Nav() {
  return (
    <header style={{ display: 'flex', justifyContent: 'center', padding: '20px 0 4px' }}>
      <nav
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
          background: '#FFFFFF',
          borderRadius: 999,
          padding: 6,
          boxShadow: '0 10px 30px -18px rgba(21,19,28,.5)',
        }}
      >
        <span className="ind" aria-hidden="true" />
        <a href="#web" style={{ textDecoration: 'none', fontWeight: '600', padding: '12px 16px' }}>
          Web
        </a>
        <a href="#apps" style={{ textDecoration: 'none', fontWeight: '600', padding: '12px 16px' }}>
          Apps
        </a>
        <a href="#ai" style={{ textDecoration: 'none', fontWeight: '600', padding: '12px 16px' }}>
          AI
        </a>
        <a href="#ios" style={{ textDecoration: 'none', fontWeight: '600', padding: '12px 16px' }}>
          iOS
        </a>
        <a href="#path" style={{ textDecoration: 'none', fontWeight: '600', padding: '12px 16px' }}>
          Path
        </a>
        <a
          href="#hi"
          style={{
            textDecoration: 'none',
            fontWeight: '800',
            padding: '12px 18px',
            borderRadius: 999,
            background: '#D4FF3A',
            color: '#15131C',
          }}
        >
          Say hi
        </a>
      </nav>
    </header>
  );
}
