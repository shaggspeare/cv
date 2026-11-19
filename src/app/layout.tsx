import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Slava Stetsenko — Lead Front-End Engineer, AI Enablement Consultant',
  description:
    'Slava Stetsenko teaches engineering teams to build with AI and ships his own iOS apps: Calleo, Pokito and AnyLink.',
};

// Runs before first paint: switches the motion layer on (class "js" on <html>) unless the
// visitor prefers reduced motion. Without it the page renders fully visible and static.
const motionFlag = `(function(){try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver' in window){document.documentElement.classList.add('js')}}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: motionFlag }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
