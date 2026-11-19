export default function IosToolkit() {
  return (
    <section
      id="ios"
      style={{
        background: '#FFFFFF',
        borderRadius: 40,
        padding: 'clamp(28px, 3.4vw, 48px)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '32px 56px',
        alignItems: 'center',
        marginTop: 'clamp(20px, 2.6vw, 36px)',
      }}
    >
      <div style={{ flex: '1 1 360px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <span style={{ fontWeight: '600', color: '#4B4860' }}>iOS and mobile</span>
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
              Empty
            </span>
          </span>{' '}
          <span className="w">
            <span className="wi" style={{ '--i': '1' }}>
              Xcode
            </span>
          </span>{' '}
          <span className="w">
            <span className="wi" style={{ '--i': '2' }}>
              project
            </span>
          </span>{' '}
          <span className="sf">
            <span className="w">
              <span className="wi" style={{ '--i': '3' }}>
                to
              </span>
            </span>{' '}
            <span className="w">
              <span className="wi" style={{ '--i': '4' }}>
                App
              </span>
            </span>{' '}
            <span className="w">
              <span className="wi" style={{ '--i': '5' }}>
                Store
              </span>
            </span>{' '}
            <span className="w">
              <span className="wi" style={{ '--i': '6' }}>
                review.
              </span>
            </span>
          </span>
        </h2>
      </div>
      <div
        style={{
          flex: '1.3 1 480px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8,
          fontWeight: '600',
          fontSize: 'clamp(14.5px, 1.2vw, 17px)',
        }}
      >
        <span
          style={{
            padding: '10px 16px',
            borderRadius: 999,
            background: 'rgb(21, 19, 28)',
            color: 'rgb(255, 255, 255)',
            '--d': '150ms',
          }}
          data-r="pop"
        >
          SwiftUI
        </span>
        <span
          style={{
            padding: '10px 16px',
            borderRadius: 999,
            background: 'rgb(21, 19, 28)',
            color: 'rgb(255, 255, 255)',
            '--d': '185ms',
          }}
          data-r="pop"
        >
          Swift 6 concurrency
        </span>
        <span
          style={{
            padding: '10px 16px',
            borderRadius: 999,
            background: 'rgb(21, 19, 28)',
            color: 'rgb(255, 255, 255)',
            '--d': '220ms',
          }}
          data-r="pop"
        >
          React Native + Expo
        </span>
        <span
          style={{ padding: '10px 16px', borderRadius: 999, background: 'rgb(236, 234, 243)', '--d': '255ms' }}
          data-r="pop"
        >
          Home-screen widgets
        </span>
        <span
          style={{ padding: '10px 16px', borderRadius: 999, background: 'rgb(236, 234, 243)', '--d': '290ms' }}
          data-r="pop"
        >
          Share sheet extension
        </span>
        <span
          style={{ padding: '10px 16px', borderRadius: 999, background: 'rgb(236, 234, 243)', '--d': '325ms' }}
          data-r="pop"
        >
          Keyboard extension
        </span>
        <span
          style={{ padding: '10px 16px', borderRadius: 999, background: 'rgb(236, 234, 243)', '--d': '360ms' }}
          data-r="pop"
        >
          StoreKit + RevenueCat
        </span>
        <span
          style={{ padding: '10px 16px', borderRadius: 999, background: 'rgb(236, 234, 243)', '--d': '395ms' }}
          data-r="pop"
        >
          iCloud sync
        </span>
        <span
          style={{ padding: '10px 16px', borderRadius: 999, background: 'rgb(236, 234, 243)', '--d': '430ms' }}
          data-r="pop"
        >
          Offline-first
        </span>
        <span
          style={{ padding: '10px 16px', borderRadius: 999, background: 'rgb(236, 234, 243)', '--d': '465ms' }}
          data-r="pop"
        >
          On-device voice model
        </span>
        <span
          style={{ padding: '10px 16px', borderRadius: 999, background: 'rgb(236, 234, 243)', '--d': '500ms' }}
          data-r="pop"
        >
          XcodeGen + fastlane
        </span>
        <span
          style={{ padding: '10px 16px', borderRadius: 999, background: 'rgb(236, 234, 243)', '--d': '535ms' }}
          data-r="pop"
        >
          Unit and UI tests
        </span>
        <span
          style={{ padding: '10px 16px', borderRadius: 999, background: 'rgb(236, 234, 243)', '--d': '570ms' }}
          data-r="pop"
        >
          TestFlight + App Store
        </span>
        <span
          style={{ padding: '10px 16px', borderRadius: 999, background: 'rgb(236, 234, 243)', '--d': '605ms' }}
          data-r="pop"
        >
          12 to 45 languages
        </span>
      </div>
    </section>
  );
}
