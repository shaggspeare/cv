import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import WebProjects from '@/components/WebProjects';
import Apps from '@/components/Apps';
import AiEnablement from '@/components/AiEnablement';
import IosToolkit from '@/components/IosToolkit';
import Path from '@/components/Path';
import Contact from '@/components/Contact';
import Motion from '@/components/Motion';

export default function Home() {
  return (
    <div
      style={{
        background: '#ECEAF3',
        color: '#15131C',
        fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
        fontSize: 17,
        lineHeight: 1.45,
        overflow: 'hidden',
        padding: '0 clamp(12px, 2vw, 28px) clamp(12px, 2vw, 28px)',
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(12px, 1.4vw, 20px)',
        }}
      >
        <Nav />
        <main style={{ display: 'contents' }}>
          <Hero />
          <Stats />
          <WebProjects />
          <Apps />
          <AiEnablement />
          <IosToolkit />
          <Path />
        </main>
        <Contact />
      </div>
      <Motion />
    </div>
  );
}
