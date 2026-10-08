<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#0a0e1a">
  <title>YachtOS - Operating System of the Superyacht Industry</title>
  <style>
/* ===== RESET ===== */
.yos-root,
.yos-root * { box-sizing: border-box; }
.yos-root input,
.yos-root textarea,
.yos-root select { font: inherit; }
html { -webkit-text-size-adjust: 100%; text-size-adjust: 100%; scroll-behavior: smooth; scroll-padding-top: 80px; }
body { margin: 0; }

/* ===== TOKENS ===== */
:root {
  --brand-black: #0a0e1a;
  --brand-dark: #1a2332;
  --brand-steel: #2a3a50;
  --accent-gold: #d4af37;
  --accent-red: #e63946;
  --accent-white: #ffffff;
  --accent-navy: #1b263b;
  --text-primary: #ffffff;
  --text-secondary: #b8c5d6;
  --text-muted: #7a8697;
  --border-subtle: rgba(212, 175, 55, 0.15);
  --border-active: rgba(230, 57, 70, 0.3);
  --t-headline-font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --t-text-font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* ===== BASE ===== */
.yos-root {
  font-family: var(--t-text-font);
  background: #0a0e1a;
  color: var(--text-primary);
  overflow-x: hidden;
  line-height: 1.6;
  -webkit-tap-highlight-color: transparent;
}

.yos-root .yos-worlds { background: transparent; }
.yos-root .yos-nodes { background: transparent; }
.yos-root .yos-transform { background: transparent; }
.yos-root .yos-system { background: transparent; }
.yos-root .yos-entry { background: transparent; }
.yos-root .yos-footer { background: #000000; border-top: 1px solid var(--border-subtle); }

/* ===== NAV ===== */
.yos-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background: rgba(10, 14, 26, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-subtle);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  transition: padding 0.3s, background 0.3s;
}
.yos-nav.is-scrolled {
  padding-top: 10px;
  padding-bottom: 10px;
  background: rgba(5, 7, 15, 0.97);
}
.yos-nav__brand { display: flex; flex-direction: column; }
.yos-nav__burger { 
  display: none; 
  flex-direction: column; 
  gap: 5px; 
  cursor: pointer; 
  padding: 10px; 
  background: none; 
  border: none; 
  margin-right: -10px;
  min-width: 44px; 
  min-height: 44px; 
  align-items: center; 
  justify-content: center;
}
.yos-nav__burger span { 
  display: block; 
  width: 22px; 
  height: 2px; 
  background: var(--text-secondary); 
  transition: transform 0.3s, opacity 0.3s, background 0.2s; 
  transform-origin: center; 
}
.yos-nav__burger.is-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); background: var(--accent-gold); }
.yos-nav__burger.is-open span:nth-child(2) { opacity: 0; }
.yos-nav__burger.is-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); background: var(--accent-gold); }
.yos-nav__logo {
  font-family: var(--t-headline-font);
  font-size: 1.3rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: var(--accent-white);
}
.yos-nav__logo span { color: var(--accent-gold); }
.yos-nav__powered {
  font-family: var(--t-text-font);
  font-size: 0.6rem;
  color: var(--text-muted);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-top: 2px;
}
.yos-nav__links {
  display: flex;
  gap: 40px;
  list-style: none;
  margin: 0; padding: 0;
}
.yos-nav__links a {
  font-family: var(--t-text-font);
  font-size: 0.82rem;
  color: var(--text-secondary);
  text-decoration: none;
  letter-spacing: 0.05em;
  font-weight: 500;
  transition: color 0.2s;
  text-transform: uppercase;
  padding: 8px 0;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
}
.yos-nav__links a:hover, .yos-nav__links a:active { color: var(--accent-gold); }
.yos-nav__right { display: flex; align-items: center; }
.yos-nav__lang {
  font-family: var(--t-text-font);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-secondary);
  background: rgba(212, 175, 55, 0.12);
  border: 1px solid var(--border-subtle);
  padding: 10px 14px;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.2s;
  margin-left: 12px;
  min-width: 44px;
  min-height: 44px;
}
.yos-nav__lang:hover, .yos-nav__lang:active {
  background: rgba(212, 175, 55, 0.25);
  color: var(--accent-gold);
  border-color: var(--accent-gold);
}

/* ===== MOBILE MENU ===== */
.yos-nav__mobile {
  position: fixed;
  top: 60px; left: 0; right: 0;
  background: rgba(5, 7, 15, 0.98);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border-subtle);
  padding: 24px;
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  transition: transform 0.3s ease, opacity 0.3s ease, visibility 0.3s;
  z-index: 99;
}
.yos-nav__mobile.is-open {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}
.yos-nav__mobile-list {
  list-style: none;
  margin: 0; padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
}
.yos-nav__mobile-list a {
  font-family: var(--t-headline-font);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-secondary);
  text-decoration: none;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 16px 0;
  display: block;
  border-bottom: 1px solid var(--border-subtle);
  min-height: 44px;
  transition: color 0.2s, padding-left 0.2s;
}
.yos-nav__mobile-list a:hover, .yos-nav__mobile-list a:active {
  color: var(--accent-gold);
  padding-left: 8px;
}
.yos-nav__mobile-list li:last-child a { border-bottom: none; }

/* ===== SCREEN 1: HERO ===== */
.yos-hero {
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 100px 32px 60px;
  background: linear-gradient(135deg, #0a0e1a 0%, #1a2332 100%);
  margin-top: 60px;
}
.yos-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: 
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><filter id="blur1"><feGaussianBlur stdDeviation="3"/></filter></defs><rect width="1200" height="800" fill="%230a0e1a"/><ellipse cx="150" cy="400" rx="280" ry="320" fill="url(%23gradYacht)" opacity="0.12" filter="url(%23blur1)"/><defs><radialGradient id="gradYacht"><stop offset="0%25" stop-color="%23d4af37"/><stop offset="100%25" stop-color="%23000000"/></radialGradient></defs></svg>'),
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><filter id="blur2"><feGaussianBlur stdDeviation="2.5"/></filter></defs><ellipse cx="1050" cy="200" rx="250" ry="280" fill="%23d4af37" opacity="0.08" filter="url(%23blur2)"/></svg>');
  background-size: 600px 600px, 500px 500px;
  background-position: left 20%, right top;
  background-repeat: no-repeat;
  pointer-events: none;
  z-index: 0;
}
.yos-hero::after {
  content: '';
  position: absolute;
  bottom: 10%;
  right: 5%;
  width: 400px;
  height: 300px;
  background: radial-gradient(ellipse at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%);
  filter: blur(40px);
  pointer-events: none;
  z-index: 0;
}
.yos-hero__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 1;
}
.yos-hero__content {
  position: relative;
  z-index: 1;
  max-width: 580px;
}
.yos-hero__image {
  position: relative;
  height: 600px;
  border-radius: 0;
  overflow: hidden;
  border: 1px solid var(--border-subtle);
  box-shadow: 0 40px 80px rgba(212, 175, 55, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}
.yos-hero__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.9) saturate(0.85);
}
.yos-hero__eyebrow {
  font-family: var(--t-text-font);
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent-gold);
  margin-bottom: 16px;
  font-weight: 600;
}
.yos-hero__h1 {
  font-family: var(--t-headline-font);
  font-size: clamp(2rem, 5vw, 4.2rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.08;
  text-wrap: balance;
  color: var(--accent-white);
  margin: 0 0 28px;
}
.yos-hero__h1-accent {
  color: var(--accent-gold);
  display: block;
  margin-bottom: 4px;
  font-weight: 900;
  font-size: 0.95em;
  letter-spacing: -0.05em;
}
.yos-hero__h1-primary {
  display: block;
  color: var(--accent-white);
  font-weight: 900;
}
.yos-hero__h1-red {
  color: var(--accent-red);
  display: block;
}
.yos-hero__sub {
  font-family: var(--t-text-font);
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--text-secondary);
  margin: 0 0 24px;
  letter-spacing: 0.01em;
  line-height: 1.7;
}
.yos-hero__para {
  font-family: var(--t-text-font);
  font-size: 0.9rem;
  line-height: 1.8;
  color: var(--text-muted);
  max-width: 560px;
  margin: 0 0 32px;
}
.yos-hero__cta {
  display: inline-block;
  font-family: var(--t-headline-font);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 18px 44px;
  color: var(--brand-black);
  background: var(--accent-gold);
  border: 2px solid var(--accent-gold);
  border-radius: 0;
  transition: background 0.25s, color 0.25s, box-shadow 0.25s;
  box-shadow: 0 12px 32px rgba(212, 175, 55, 0.25);
  min-height: 56px;
  text-align: center;
}
.yos-hero__cta:hover, .yos-hero__cta:active {
  background: transparent;
  color: var(--accent-gold);
  box-shadow: 0 12px 48px rgba(212, 175, 55, 0.35);
}
.yos-hero__cta-wrap {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}
.yos-hero__hint {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.14) 0%, rgba(212, 175, 55, 0.04) 100%);
  border: 1px solid rgba(212, 175, 55, 0.35);
  border-left: 3px solid var(--accent-gold);
  position: relative;
  overflow: hidden;
  flex: 0 1 auto;
  max-width: 320px;
}
.yos-hero__hint::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.18), transparent);
  animation: hintShine 3.5s ease-in-out infinite;
  pointer-events: none;
}
.yos-hero__hint-icon {
  font-size: 0.9rem;
  color: var(--accent-gold);
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(212, 175, 55, 0.18);
  border-radius: 50%;
  animation: hintPulse 2s ease-in-out infinite;
  font-weight: 900;
  text-shadow: 0 0 8px rgba(212, 175, 55, 0.5);
}
.yos-hero__hint-text {
  font-family: var(--t-text-font);
  font-size: 0.74rem;
  font-weight: 600;
  color: var(--accent-gold);
  letter-spacing: 0.03em;
  line-height: 1.45;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
}
@keyframes hintShine {
  0% { left: -100%; }
  60%, 100% { left: 100%; }
}
@keyframes hintPulse {
  0%, 100% { opacity: 0.75; transform: scale(1); box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.4); }
  50% { opacity: 1; transform: scale(1.08); box-shadow: 0 0 0 6px rgba(212, 175, 55, 0); }
}
@media (max-width: 640px) {
  .yos-hero__cta-wrap { flex-direction: column; align-items: flex-start; gap: 16px; }
  .yos-hero__hint { max-width: 100%; padding: 10px 14px; }
  .yos-hero__hint-text { font-size: 0.7rem; }
}
.yos-hero__scroll {
  position: absolute;
  bottom: 32px;
  left: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  opacity: 0.5;
  animation: scrollBounce 2s ease-in-out infinite;
  z-index: 1;
}
.yos-hero__scroll span {
  font-family: var(--t-text-font);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  font-weight: 600;
}
.yos-hero__scroll-line {
  width: 2px;
  height: 20px;
  background: var(--accent-gold);
  animation: scrollLine 2s ease-in-out infinite;
}
@keyframes scrollBounce {
  0%, 100% { opacity: 0.5; }
50% { opacity: 1; }
}
@keyframes scrollLine {
  0% { opacity: 1; transform: translateY(-4px); }
  50% { opacity: 0.5; }
100% { opacity: 1; transform: translateY(4px); }
}

/* ===== SECTION COMMON ===== */
.yos-section {
  position: relative;
  padding: 100px 32px;
  overflow: visible;
}
.yos-section__label {
  font-family: var(--t-text-font);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent-gold);
  margin-bottom: 16px;
  font-weight: 600;
}
.yos-section__h2 {
  font-family: var(--t-headline-font);
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.08;
  text-wrap: balance;
  color: var(--accent-white);
  margin: 0;
}
.yos-section__h2-accent {
  color: var(--accent-gold);
  display: block;
}
.yos-section__h2-red {
  color: var(--accent-red);
  display: block;
}

/* ===== SCREEN 2: FOUR WORLDS ===== */
.yos-worlds {
  padding: 100px 32px;
  position: relative;
  background-image: 
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200"><defs><filter id="blurYacht"><feGaussianBlur stdDeviation="3.5"/></filter></defs><ellipse cx="100" cy="500" rx="320" ry="380" fill="%23d4af37" opacity="0.09" filter="url(%23blurYacht)"/></svg>');
  background-repeat: no-repeat;
  background-position: left 40%;
  background-size: 700px;
  background-attachment: scroll;
}
.yos-worlds::after {
  content: '';
  position: absolute;
  bottom: 20%;
  right: 10%;
  width: 450px;
  height: 350px;
  background: radial-gradient(ellipse at center, rgba(230, 57, 70, 0.12) 0%, transparent 70%);
  filter: blur(50px);
  pointer-events: none;
}
.yos-worlds__header {
  max-width: 100%;
  margin: 0 0 60px;
  position: relative;
  padding: 48px 32px;
  background:
    url('https://static.tildacdn.net/tild6263-3864-4033-a265-393762626335/photo-1787945834401-.jpg') center/cover no-repeat,
    linear-gradient(135deg, #0a0e1a 0%, #1a2332 50%, #2a3a50 100%);
  border: 1px solid var(--border-subtle);
  border-top: 2px solid var(--accent-gold);
  overflow: hidden;
  min-height: 200px;
}
.yos-worlds__header::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><filter id="blurSuper"><feGaussianBlur stdDeviation="4"/></filter></defs><ellipse cx="900" cy="300" rx="350" ry="280" fill="%23d4af37" opacity="0.08" filter="url(%23blurSuper)"/><ellipse cx="150" cy="150" rx="280" ry="250" fill="%23e63946" opacity="0.05" filter="url(%23blurSuper)"/></svg>') center/cover no-repeat;
  pointer-events: none;
  opacity: 1;
}
.yos-worlds__header > * {
  position: relative;
  z-index: 1;
}
.yos-worlds__intro-label {
  font-family: var(--t-text-font);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent-gold);
  margin-bottom: 16px;
  margin-top: 0;
  font-weight: 600;
}
.yos-worlds__intro-h2 {
  font-family: var(--t-headline-font);
  font-size: clamp(1.7rem, 4.5vw, 4rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.08;
  color: var(--accent-white);
  margin: 0;
  max-width: 380px;
}
.yos-worlds__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
  background: var(--border-subtle);
  overflow: hidden;
  position: relative;
  z-index: 1;
}
.yos-world-card {
  position: relative;
  overflow: hidden;
  aspect-ratio: 1;
  background: var(--brand-dark);
  border: 1px solid var(--border-subtle);
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.yos-world-card:hover, .yos-world-card.is-active {
  background: var(--brand-steel);
  border-color: var(--accent-red);
  transform: translateY(-4px);
}
.yos-world-card__img {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: grayscale(0%) brightness(0.55) saturate(1.1);
  transition: filter 0.6s ease, transform 0.5s ease, opacity 0.6s ease;
  opacity: 1;
}
.yos-world-card__img.is-dimmed {
  filter: grayscale(80%) brightness(0.35);
}
.yos-world-card:hover .yos-world-card__img, .yos-world-card.is-active .yos-world-card__img {
  filter: grayscale(0%) brightness(0.7) saturate(1.2);
  transform: scale(1.05);
  opacity: 1;
}
.yos-world-card__body {
  position: relative;
  z-index: 2;
  padding: 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(to top, rgba(10, 14, 26, 0.95) 0%, rgba(10, 14, 26, 0.7) 60%, transparent 100%);
}
.yos-world-card__num {
  font-family: var(--t-headline-font);
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  color: var(--accent-gold);
  margin-bottom: 8px;
  font-weight: 700;
  text-transform: uppercase;
}
.yos-world-card__title {
  font-family: var(--t-headline-font);
  font-size: 1.2rem;
  font-weight: 900;
  color: var(--accent-white);
  margin: 0 0 12px;
  letter-spacing: -0.02em;
}
.yos-world-card__reality {
  font-family: var(--t-text-font);
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.65;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease-out, opacity 0.25s;
  opacity: 0;
}
.yos-world-card:hover .yos-world-card__reality, .yos-world-card.is-active .yos-world-card__reality {
  max-height: 200px;
  opacity: 1;
}
.yos-worlds__footer {
  padding: 48px 32px;
  background: linear-gradient(135deg, #1a2332 0%, #2a3a50 100%);
  border: 1px solid var(--border-subtle);
  border-top: 2px solid var(--accent-gold);
  text-align: left;
  margin-top: 32px;
  max-width: 800px;
  position: relative;
  z-index: 1;
}
.yos-worlds__footer p {
  font-family: var(--t-headline-font);
  font-size: clamp(0.95rem, 1.6vw, 1.35rem);
  font-weight: 300;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.75;
  letter-spacing: 0.01em;
}

/* ===== SCREEN 3: NODES ===== */
.yos-nodes {
  position: relative;
  padding: 100px 32px;
}
.yos-nodes::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 150px;
  bottom: 150px;
  width: 4px;
  background: linear-gradient(to bottom, 
    transparent 0%,
    var(--accent-gold) 15%,
    var(--accent-gold) 85%,
    transparent 100%
  );
  animation: flowingLine 3.5s ease-in-out infinite;
  z-index: 4;
  box-shadow: 
    0 0 15px rgba(212, 175, 55, 0.5),
    0 0 30px rgba(212, 175, 55, 0.25),
    inset 0 0 8px rgba(212, 175, 55, 0.3);
  filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.4));
}
@keyframes flowingLine {
  0% { 
    opacity: 0.65;
    box-shadow: 
      0 0 15px rgba(212, 175, 55, 0.4),
      0 0 30px rgba(212, 175, 55, 0.15),
      inset 0 0 8px rgba(212, 175, 55, 0.2);
  }
  50% { 
    opacity: 1;
    box-shadow: 
      0 0 25px rgba(212, 175, 55, 0.7),
      0 0 50px rgba(212, 175, 55, 0.4),
      inset 0 0 12px rgba(212, 175, 55, 0.4);
  }
  100% { 
    opacity: 0.65;
    box-shadow: 
      0 0 15px rgba(212, 175, 55, 0.4),
      0 0 30px rgba(212, 175, 55, 0.15),
      inset 0 0 8px rgba(212, 175, 55, 0.2);
  }
}
.yos-nodes::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 300px;
  background: radial-gradient(ellipse at 50% 100%, rgba(212, 175, 55, 0.15), transparent);
  pointer-events: none;
  z-index: 1;
}
.yos-nodes__header {
  max-width: 100%;
  margin: 0 0 60px;
  position: relative;
  z-index: 1;
  padding: 48px 32px;
  background:
    url('https://static.tildacdn.net/tild3730-6366-4637-b037-653336646334/photo-1779806799527-.jpg') center/cover no-repeat,
    linear-gradient(135deg, #0a0e1a 0%, #1a2332 50%, #2a3a50 100%);
  border: 1px solid var(--border-subtle);
  border-top: 2px solid var(--accent-gold);
  overflow: hidden;
  min-height: 200px;
}
.yos-nodes__header::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(10, 14, 26, 0.75) 0%, rgba(10, 14, 26, 0.4) 60%, transparent 100%);
  pointer-events: none;
  opacity: 1;
  z-index: 0;
}
.yos-nodes__header > * {
  position: relative;
  z-index: 1;
}
.yos-nodes__header-label {
  font-family: var(--t-text-font);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent-gold);
  margin-bottom: 16px;
  font-weight: 600;
}
.yos-nodes__header-h2 {
  font-family: var(--t-headline-font);
  font-size: clamp(1.7rem, 4.5vw, 4rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.08;
  color: var(--accent-white);
  margin: 0;
  max-width: 500px;
}
.yos-nodes__header-accent {
  color: var(--accent-gold);
  display: block;
}
.yos-node {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 80px;
  align-items: start;
  z-index: 2;
}
.yos-node:last-child { margin-bottom: 0; }
.yos-node--right { grid-template-columns: 1fr 1fr; }
.yos-node--right .yos-node__content { grid-column: 2; }
.yos-node--right .yos-node__visual { grid-column: 1; order: -1; }
.yos-node--left .yos-node__content { grid-column: 1; }
.yos-node--left .yos-node__visual { grid-column: 2; }

.yos-node__visual {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;
  position: relative;
  z-index: 1;
}
.yos-node__visual-img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border: 1px solid var(--border-subtle);
  display: block;
  filter: grayscale(100%) brightness(0.5);
  transition: filter 0.6s ease, transform 0.35s;
}
.yos-node__visual-img:hover {
  filter: grayscale(0%) brightness(0.85);
  transform: scale(1.02);
}
.yos-node__visual-img.is-color {
  filter: grayscale(0%) brightness(0.85) saturate(1.1);
}
.yos-node__visual-img--tall {
  aspect-ratio: 3/4;
  flex: 1 1 auto;
}
.yos-node__visual--collage {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 8px;
  align-self: stretch;
}
.yos-node__visual--collage .yos-node__visual-img {
  width: 100%;
  height: 100%;
  aspect-ratio: unset;
}
.yos-node__visual-img--c1 { grid-column: 1; grid-row: 1; }
.yos-node__visual-img--c2 { grid-column: 2; grid-row: 1; }
.yos-node__visual-img--c3 { grid-column: 1; grid-row: 2; }
.yos-node__visual-img--c4 { grid-column: 2; grid-row: 2; }

.yos-node__content {
  padding: 40px;
  background: linear-gradient(135deg, #1a2332 0%, #2a3a50 100%);
  border: 1px solid var(--border-subtle);
  position: relative;
  overflow: visible;
  z-index: 1;
}
.yos-node__content::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(to right, transparent, var(--accent-gold), transparent);
  opacity: 0.5;
}
.yos-node__context {
  font-family: var(--t-text-font);
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border-subtle);
  font-style: italic;
}
.yos-node__h3 {
  font-family: var(--t-headline-font);
  font-size: 1.4rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: var(--accent-gold);
  margin: 0 0 28px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
}

/* ===== INFO TOOLTIP & ANIMATION STYLES (Anna + Maxim) ===== */
.yos-info-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  margin-left: 6px;
  vertical-align: middle;
  background: rgba(212, 175, 55, 0.18);
  border: 1px solid rgba(212, 175, 55, 0.5);
  color: var(--accent-gold);
  border-radius: 50%;
  font-family: var(--t-headline-font);
  font-size: 0.65rem;
  font-weight: 900;
  font-style: italic;
  cursor: help;
  position: relative;
  transition: background 0.2s, border-color 0.2s, transform 0.2s;
  flex-shrink: 0;
  line-height: 1;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
}
.yos-info-trigger:hover, .yos-info-trigger:active, .yos-info-trigger:focus {
  background: rgba(212, 175, 55, 0.4);
  border-color: var(--accent-gold);
  transform: scale(1.15);
  outline: none;
}
.yos-info-trigger::after {
  content: attr(data-tip);
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  width: max-content;
  max-width: min(320px, 80vw);
  padding: 12px 14px;
  background: linear-gradient(135deg, #0a0e1a 0%, #1a2332 100%);
  border: 1px solid var(--accent-gold);
  border-left: 3px solid var(--accent-gold);
  color: var(--text-secondary);
  font-family: var(--t-text-font);
  font-size: 0.78rem;
  font-weight: 400;
  font-style: normal;
  text-transform: none;
  letter-spacing: 0.01em;
  line-height: 1.55;
  text-align: left;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.7), 0 0 24px rgba(212, 175, 55, 0.15);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s;
  z-index: 100;
  white-space: pre-line;
}
.yos-info-trigger::before {
  content: '';
  position: absolute;
  bottom: calc(100% + 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 10px;
  height: 10px;
  background: #1a2332;
  border-right: 1px solid var(--accent-gold);
  border-bottom: 1px solid var(--accent-gold);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.25s ease, visibility 0.25s;
  z-index: 101;
}
.yos-info-trigger:hover::after, .yos-info-trigger:active::after, .yos-info-trigger:focus::after,
.yos-info-trigger.is-tip-open::after {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}
.yos-info-trigger:hover::before, .yos-info-trigger:active::before, .yos-info-trigger:focus::before,
.yos-info-trigger.is-tip-open::before {
  opacity: 1;
  visibility: visible;
}
@media (max-width: 640px) {
  .yos-info-trigger::after {
    left: auto;
    right: 0;
    transform: translateY(4px);
    max-width: calc(100vw - 32px);
    width: max-content;
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;
    box-sizing: border-box;
  }
  .yos-info-trigger:hover::after, .yos-info-trigger:active::after, .yos-info-trigger:focus::after,
  .yos-info-trigger.is-tip-open::after {
    transform: translateY(0);
    right: 0;
  }
  .yos-info-trigger::before {
    left: auto;
    right: 14px;
  }
}

.yos-info-trigger.is-tip-flip::after {
  bottom: auto;
  top: calc(100% + 10px);
  transform: translateY(-4px);
}
.yos-info-trigger.is-tip-flip:hover::after,
.yos-info-trigger.is-tip-flip:active::after,
.yos-info-trigger.is-tip-flip:focus::after,
.yos-info-trigger.is-tip-flip.is-tip-open::after {
  transform: translateY(0);
}
.yos-info-trigger.is-tip-flip::before {
  bottom: auto;
  top: calc(100% + 4px);
}

/* ===== FEATURE CARDS (slide-in animation) ===== */
.yos-feature {
  margin-top: 20px;
  padding: 0;
  background: rgba(10, 14, 26, 0.7);
  border-left: 3px solid var(--accent-gold);
  position: relative;
  overflow: visible;
  opacity: 0;
  transform: translateX(-40px);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s, background 0.3s;
}
.yos-feature.is-visible {
  opacity: 1;
  transform: translateX(0);
}
.yos-feature:hover, .yos-feature:active {
  background: rgba(10, 14, 26, 0.85);
  border-left-color: var(--accent-white);
}
.yos-feature__quote {
  font-family: var(--t-headline-font);
  font-size: 0.92rem;
  font-style: italic;
  font-weight: 400;
  color: var(--text-secondary);
  margin: 0;
  padding: 16px 20px 16px;
  line-height: 1.6;
  border-bottom: 1px solid var(--border-subtle);
  position: relative;
}
.yos-feature__quote::before {
  content: '"';
  position: absolute;
  top: -2px;
  left: 12px;
  font-family: var(--t-headline-font);
  font-size: 2.4rem;
  color: var(--accent-red);
  opacity: 0.55;
  line-height: 1;
  font-weight: 900;
}
.yos-feature__anim {
  font-family: var(--t-text-font);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-muted);
  padding: 8px 20px;
  border-bottom: 1px dashed var(--border-subtle);
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  position: static;
  background: transparent;
  width: auto;
  height: auto;
  min-height: 0;
  opacity: 1;
  visibility: visible;
  transform: none;
}
.yos-feature__anim::before {
  content: '▶';
  color: var(--accent-gold);
  font-size: 0.65rem;
  animation: animPulse 1.6s ease-in-out infinite;
  position: static;
  background: none;
  display: inline;
  width: auto;
  height: auto;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: none;
  transition: none;
}
@keyframes animPulse {
  0%, 100% { opacity: 0.4; transform: translateX(0); }
  50% { opacity: 1; transform: translateX(2px); }
}
.yos-feature__body {
  padding: 18px 20px 20px;
}
.yos-feature__h4 {
  font-family: var(--t-headline-font);
  font-size: 1.05rem;
  font-weight: 900;
  letter-spacing: -0.01em;
  color: var(--accent-gold);
  margin: 0 0 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
}
.yos-feature__p {
  font-family: var(--t-text-font);
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
}
.yos-feature__p strong { color: var(--accent-gold); font-weight: 700; }
.yos-feature__note {
  font-family: var(--t-text-font);
  font-size: 0.74rem;
  color: var(--text-muted);
  font-style: italic;
  margin: 10px 0 0;
  padding-top: 10px;
  border-top: 1px solid var(--border-subtle);
  line-height: 1.5;
}
.yos-feature--pulse { position: relative; }
.yos-feature--pulse.is-visible {
  animation: pulseFlash 1.6s ease-out 0.4s 1;
}
@keyframes pulseFlash {
  0% { box-shadow: 0 0 0 0 rgba(230, 57, 70, 0); }
  10% { box-shadow: 0 0 0 0 rgba(230, 57, 70, 0.55); background: rgba(230, 57, 70, 0.25); }
  20% { box-shadow: 0 0 0 0 rgba(230, 57, 70, 0.55); background: rgba(230, 57, 70, 0.15); }
  100% { box-shadow: 0 0 0 0 rgba(230, 57, 70, 0); background: rgba(10, 14, 26, 0.7); }
}

/* ===== Intro quotes between features ===== */
.yos-anna-intro {
  margin: 0 0 24px;
  padding: 16px 20px;
  background: rgba(230, 57, 70, 0.06);
  border-left: 3px solid var(--accent-red);
  border-radius: 0;
}
.yos-anna-intro__p {
  font-family: var(--t-text-font);
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
  font-style: italic;
}
.yos-anna-intro__p strong {
  color: var(--accent-white);
  font-weight: 700;
  font-style: normal;
}

/* ===== Network Pulse (with shine sweep) ===== */
.yos-node__impulse--anna {
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(212, 175, 55, 0.04) 100%);
  border: 1px solid var(--accent-gold);
  position: relative;
  padding: 22px 24px;
}
.yos-node__impulse--anna::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(45deg, transparent 30%, rgba(212, 175, 55, 0.3) 50%, transparent 70%);
  background-size: 200% 200%;
  animation: shineSweep 3s linear infinite;
  pointer-events: none;
  z-index: 0;
}
@keyframes shineSweep {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
.yos-node__impulse--anna > * { position: relative; z-index: 1; }
.yos-node__impulse--anna .yos-node__impulse-label {
  color: var(--accent-white);
  font-size: 0.75rem;
}
.yos-node__impulse--anna p {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.7;
}
.yos-node__impulse--anna p strong {
  color: var(--accent-gold);
  font-weight: 800;
}

/* Золотые точки */
.yos-node::before,
.yos-node::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 12px;
  height: 12px;
  background: var(--accent-gold);
  border-radius: 50%;
  border: 2px solid var(--brand-black);
  box-shadow: 0 0 12px rgba(212, 175, 55, 0.6);
  z-index: 5;
}
.yos-node::before { top: -20px; }
.yos-node::after { bottom: -20px; }

/* ===== SCREEN 4: TRANSFORMATION ===== */
.yos-transform {
  position: relative;
  background-image: 
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200"><defs><filter id="blur-yacht-2"><feGaussianBlur stdDeviation="4"/></filter></defs><ellipse cx="200" cy="400" rx="300" ry="340" fill="%23d4af37" opacity="0.08" filter="url(%23blur-yacht-2)"/><ellipse cx="1100" cy="900" rx="280" ry="300" fill="%23d4af37" opacity="0.06" filter="url(%23blur-yacht-2)"/></svg>');
  background-repeat: no-repeat;
  background-position: left 30%, right bottom;
  background-size: 700px, 650px;
}
.yos-transform::after {
  content: '';
  position: absolute;
  top: 20%;
  right: 5%;
  width: 400px;
  height: 400px;
  background: radial-gradient(ellipse at center, rgba(230, 57, 70, 0.1), transparent);
  filter: blur(60px);
  pointer-events: none;
}
.yos-transform__header {
  max-width: 100%;
  margin: 0 0 60px;
  padding: 48px 32px;
  position: relative;
  background:
    url('https://static.tildacdn.net/tild3765-3339-4635-a335-626138353462/photo-1523496922380-.jpg') center/cover no-repeat,
    linear-gradient(135deg, #0a0e1a 0%, #1a2332 50%, #2a3a50 100%);
  border: 1px solid var(--border-subtle);
  border-top: 2px solid var(--accent-gold);
  overflow: hidden;
  min-height: 200px;
}
.yos-transform__header::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(10, 14, 26, 0.8) 0%, rgba(10, 14, 26, 0.4) 60%, transparent 100%);
  pointer-events: none;
  opacity: 1;
  z-index: 0;
}
.yos-transform__header > * {
  position: relative;
  z-index: 1;
}
.yos-transform__label {
  font-family: var(--t-text-font);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent-gold);
  margin-bottom: 16px;
  font-weight: 600;
}
.yos-transform__h2 {
  font-family: var(--t-headline-font);
  font-size: clamp(1.7rem, 4.5vw, 4rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.08;
  color: var(--accent-white);
  margin: 0;
  max-width: 500px;
  position: relative;
  z-index: 1;
}
.yos-transform__h2-accent {
  color: var(--accent-gold);
  display: block;
}
.yos-transform__h2-red {
  color: var(--accent-red);
  display: block;
}
.yos-transform__table {
  max-width: 100%;
  margin: 0 0 48px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: var(--border-subtle);
  border: 1px solid var(--border-subtle);
  overflow: hidden;
  position: relative;
  z-index: 1;
}
.yos-tr-row {
  display: grid;
  grid-template-columns: 1fr 60px 1fr;
  align-items: stretch;
  background: var(--brand-dark);
  gap: 2px;
  border-bottom: 2px solid var(--border-subtle);
  transition: background 0.25s;
}
.yos-tr-row:last-child { border-bottom: none; }
.yos-tr-row:hover {
  background: var(--brand-steel);
}
.yos-tr-row__before,
.yos-tr-row__after {
  padding: 28px;
  font-family: var(--t-text-font);
  font-size: 0.9rem;
  line-height: 1.7;
  display: flex;
  align-items: center;
  background: inherit;
}
.yos-tr-row__before {
  color: var(--text-secondary);
  font-style: italic;
}
.yos-tr-row__after {
  color: var(--text-secondary);
}
.yos-tr-row__after strong {
  color: var(--accent-gold);
  font-weight: 700;
}
.yos-tr-row__sep {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(212, 175, 55, 0.15);
  position: relative;
}
.yos-tr-row__sep svg {
  width: 20px;
  height: 20px;
  color: var(--accent-gold);
  flex-shrink: 0;
}
.yos-transform__labels {
  max-width: 100%;
  margin: 0 0 20px;
  display: grid;
  grid-template-columns: 1fr 60px 1fr;
  gap: 2px;
  position: relative;
  z-index: 1;
}
.yos-transform__labels span {
  font-family: var(--t-text-font);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-muted);
  padding: 12px 32px;
  font-weight: 700;
}
.yos-transform__labels span:first-child,
.yos-transform__labels span:last-child {
  color: var(--accent-gold);
}
.yos-transform__footer {
  max-width: 800px;
  text-align: left;
  font-family: var(--t-headline-font);
  font-size: clamp(0.95rem, 1.6vw, 1.25rem);
  color: var(--text-secondary);
  line-height: 1.75;
  font-weight: 300;
  letter-spacing: 0.01em;
  position: relative;
  z-index: 1;
}

/* ===== SCREEN 5: SYSTEM ===== */
.yos-system {
  position: relative;
  background-image: 
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200"><defs><filter id="blurTeam"><feGaussianBlur stdDeviation="3.2"/></filter></defs><ellipse cx="80" cy="450" rx="280" ry="340" fill="%23d4af37" opacity="0.08" filter="url(%23blurTeam)"/></svg>');
  background-repeat: no-repeat;
  background-position: left 35%;
  background-size: 650px;
}
.yos-system::after {
  content: '';
  position: absolute;
  bottom: 10%;
  left: 5%;
  width: 350px;
  height: 350px;
  background: radial-gradient(ellipse at center, rgba(212, 175, 55, 0.12), transparent);
  filter: blur(45px);
  pointer-events: none;
}
.yos-system__header {
  max-width: 100%;
  margin: 0 0 60px;
  position: relative;
  z-index: 1;
  padding: 48px 32px;
  background:
    url('https://static.tildacdn.net/tild6139-6261-4735-b938-633363326561/photo-1513346940221-.jpg') center/cover no-repeat,
    linear-gradient(135deg, #0a0e1a 0%, #1a2332 50%, #2a3a50 100%);
  border: 1px solid var(--border-subtle);
  border-top: 2px solid var(--accent-gold);
  overflow: hidden;
  min-height: 200px;
}
.yos-system__header::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(10, 14, 26, 0.92) 0%,
    rgba(10, 14, 26, 0.85) 40%,
    rgba(10, 14, 26, 0.5) 70%,
    rgba(10, 14, 26, 0.25) 100%
  );
  pointer-events: none;
  opacity: 1;
  z-index: 0;
}
.yos-system__header::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 20% 50%, rgba(212, 175, 55, 0.08), transparent 60%);
  pointer-events: none;
  opacity: 1;
  z-index: 0;
}
.yos-system__header > * {
  position: relative;
  z-index: 1;
}
.yos-system__label {
  font-family: var(--t-text-font);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent-gold);
  margin-bottom: 16px;
  font-weight: 600;
}
.yos-system__h2 {
  font-family: var(--t-headline-font);
  font-size: clamp(1.7rem, 4.5vw, 4rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.08;
  color: var(--accent-white);
  margin: 0;
  max-width: 400px;
}
.yos-pillars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  gap: 2px;
  background: var(--border-subtle);
  overflow: hidden;
  margin-bottom: 60px;
  position: relative;
  z-index: 1;
}
.yos-pillar {
  padding: 48px;
  background: linear-gradient(135deg, #1a2332 0%, #2a3a50 100%);
  border: 1px solid var(--border-subtle);
  transition: background 0.3s, border-color 0.3s, transform 0.3s;
  position: relative;
}
.yos-pillar:hover, .yos-pillar:active {
  background: linear-gradient(135deg, #2a3a50 0%, #3a4a60 100%);
  border-color: var(--accent-gold);
  transform: translateY(-4px);
}
.yos-pillar__img {
  width: calc(100% + 96px);
  height: 140px;
  margin: -48px -48px 24px;
  object-fit: cover;
  filter: grayscale(60%) brightness(0.6) saturate(1.1);
  display: block;
  border-bottom: 2px solid var(--accent-gold);
  transition: filter 0.4s ease, transform 0.4s ease;
}
.yos-pillar:hover .yos-pillar__img {
  filter: grayscale(20%) brightness(0.75) saturate(1.2);
  transform: scale(1.02);
}
.yos-pillar__h3 {
  font-family: var(--t-headline-font);
  font-size: 1.15rem;
  font-weight: 900;
  color: var(--accent-gold);
  margin: 0 0 12px;
  letter-spacing: -0.02em;
}
.yos-pillar__text {
  font-family: var(--t-text-font);
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.75;
  margin: 0;
}

/* ===== PILLAR FEATURED (full image + text backdrop) ===== */
.yos-pillar--featured {
  padding: 0;
  position: relative;
  overflow: hidden;
  min-height: 280px;
  display: flex;
}
.yos-pillar--featured .yos-pillar__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(40%) brightness(0.45) saturate(1.15);
  display: block;
  z-index: 0;
  transition: filter 0.4s ease, transform 0.5s ease;
}
.yos-pillar--featured:hover .yos-pillar__bg, .yos-pillar--featured:active .yos-pillar__bg {
  filter: grayscale(15%) brightness(0.55) saturate(1.25);
  transform: scale(1.04);
}
.yos-pillar--featured .yos-pillar__overlay {
  position: relative;
  z-index: 1;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 12px;
  width: 100%;
  background: linear-gradient(
    to top,
    rgba(10, 14, 26, 0.95) 0%,
    rgba(10, 14, 26, 0.85) 40%,
    rgba(10, 14, 26, 0.5) 70%,
    rgba(10, 14, 26, 0.2) 100%)
}
.yos-pillar--featured .yos-pillar__h3 {
  color: var(--accent-gold);
  margin: 0;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
}
.yos-pillar--featured .yos-pillar__text {
  color: var(--text-secondary);
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.7);
  background: rgba(10, 14, 26, 0.55);
  padding: 12px 16px;
  border-left: 2px solid var(--accent-gold);
}

/* ===== HELP BUTTON ===== */
.yos-help-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-left: 12px;
  background: var(--accent-gold);
  border: 3px solid var(--accent-gold);
  border-radius: 50%;
  font-size: 1.1rem;
  font-weight: 900;
  color: var(--brand-black);
  cursor: pointer;
  padding: 0;
  transition: all 0.2s;
  text-decoration: none;
  flex-shrink: 0;
  line-height: 1;
  box-shadow: 0 6px 16px rgba(212, 175, 55, 0.5);
}
.yos-help-btn:hover, .yos-help-btn:active {
  background: var(--accent-white);
  border-color: var(--accent-gold);
  color: var(--accent-gold);
  box-shadow: 0 8px 28px rgba(212, 175, 55, 0.7), inset 0 0 12px rgba(212, 175, 55, 0.3);
  transform: scale(1.15);
}
.yos-nervous {
  max-width: 100%;
  margin: 0 0 48px;
  padding: 40px;
  background: linear-gradient(135deg, #1a2332 0%, #2a3a50 100%);
  border: 1px solid var(--border-subtle);
  border-left: 3px solid var(--accent-red);
  position: relative;
  z-index: 1;
}
.yos-nervous::before {
  content: '';
  position: absolute;
  top: -1px; left: 10%; right: 10%;
  height: 2px;
  background: linear-gradient(to right, transparent, var(--accent-gold), transparent);
}
.yos-nervous__h3 {
  font-family: var(--t-headline-font);
  font-size: 1.25rem;
  font-weight: 900;
  color: var(--accent-white);
  margin: 0 0 16px;
  letter-spacing: -0.02em;
}
.yos-nervous__lead {
  font-family: var(--t-text-font);
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin: 0 0 24px;
}
.yos-chain {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin-bottom: 24px;
}
.yos-chain__step {
  font-family: var(--t-text-font);
  font-size: 0.78rem;
  color: var(--accent-white);
  background: rgba(212, 175, 55, 0.12);
  border: 1px solid var(--border-subtle);
  padding: 8px 14px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: background 0.3s, border-color 0.3s, color 0.3s;
  min-height: 36px;
  display: inline-flex;
  align-items: center;
}
.yos-chain__step:hover, .yos-chain__step:active {
  background: rgba(212, 175, 55, 0.25);
  border-color: var(--accent-gold);
  color: var(--accent-gold);
}
.yos-chain__arrow {
  color: var(--accent-gold);
  font-size: 1rem;
  opacity: 0.8;
  flex-shrink: 0;
}
.yos-nervous__close {
  font-family: var(--t-headline-font);
  font-size: 0.95rem;
  color: var(--text-secondary);
  font-style: italic;
  margin: 0;
  line-height: 1.75;
  font-weight: 300;
}
.yos-alchemy {
  max-width: 100%;
  padding: 40px;
  background: linear-gradient(135deg, rgba(230, 57, 70, 0.08) 0%, rgba(212, 175, 55, 0.08) 100%);
  border: 1px solid var(--border-active);
  border-left: 3px solid var(--accent-red);
  position: relative;
  z-index: 1;
}
.yos-alchemy__h3 {
  font-family: var(--t-headline-font);
  font-size: 1.15rem;
  font-weight: 900;
  color: var(--accent-gold);
  margin: 0 0 16px;
  letter-spacing: -0.02em;
}
.yos-alchemy p {
  font-family: var(--t-text-font);
  font-size: 0.92rem;
  color: var(--text-secondary);
  margin: 0 0 12px;
  line-height: 1.75;
}
.yos-alchemy p:last-child { margin: 0; }
.yos-alchemy strong { color: var(--accent-gold); font-weight: 700; }

/* ===== SCREEN 6: ENTRY POINT ===== */
.yos-entry {
  position: relative;
  padding-bottom: 60px;
  background-image: 
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><filter id="blurYacht3"><feGaussianBlur stdDeviation="2.5"/></filter></defs><ellipse cx="600" cy="600" rx="350" ry="300" fill="%23d4af37" opacity="0.06" filter="url(%23blurYacht3)"/></svg>');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 900px;
}
.yos-entry::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 100%, rgba(212, 175, 55, 0.08), transparent);
  pointer-events: none;
}
.yos-entry__header {
  max-width: 100%;
  margin: 0 0 48px;
  padding: 48px 32px;
  position: relative;
  background:
    url('https://static.tildacdn.net/tild3661-3138-4434-b465-663638373031/photo-1774579892259-.jpg') center/cover no-repeat,
    linear-gradient(135deg, #0a0e1a 0%, #1a2332 50%, #2a3a50 100%);
  border: 1px solid var(--border-subtle);
  border-top: 2px solid var(--accent-gold);
  overflow: hidden;
  min-height: 200px;
}
.yos-entry__header::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(10, 14, 26, 0.8) 0%, rgba(10, 14, 26, 0.4) 60%, transparent 100%);
  pointer-events: none;
  opacity: 1;
}
.yos-entry__header > * {
  position: relative;
  z-index: 1;
}
.yos-entry__label {
  font-family: var(--t-text-font);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent-gold);
  margin-bottom: 16px;
  font-weight: 600;
}
.yos-entry__h2 {
  font-family: var(--t-headline-font);
  font-size: clamp(1.7rem, 4.5vw, 4rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.08;
  color: var(--accent-white);
  margin: 0 0 20px;
  max-width: 500px;
}
.yos-entry__h2-accent {
  color: var(--accent-gold);
  display: block;
}
.yos-entry__manifesto {
  font-family: var(--t-headline-font);
  font-size: clamp(0.95rem, 1.6vw, 1.2rem);
  color: var(--text-secondary);
  line-height: 1.8;
  margin: 0 0 40px;
  font-weight: 300;
  letter-spacing: 0.01em;
  max-width: 680px;
}
.yos-entry__manifesto strong {
  color: var(--accent-gold);
  font-weight: 700;
}
.yos-entry__cta-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
  background: var(--border-subtle);
  margin-bottom: 32px;
  z-index: 1;
}
.yos-entry__btn {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  padding: 0;
  background: var(--brand-dark);
  border: 1px solid var(--border-subtle);
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  min-height: 44px;
}
.yos-entry__btn:hover, .yos-entry__btn:active {
  background: var(--brand-steel);
  border-color: var(--accent-gold);
  transform: translateY(-4px);
}
.yos-entry__btn-img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  display: block;
  filter: grayscale(100%) brightness(0.45);
  transition: filter 0.35s, transform 0.35s;
}
.yos-entry__btn:hover .yos-entry__btn-img, .yos-entry__btn:active .yos-entry__btn-img {
  filter: grayscale(40%) brightness(0.6);
  transform: scale(1.03);
}
.yos-entry__btn-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 28px;
  background: linear-gradient(to top, rgba(10, 14, 26, 0.95) 0%, rgba(26, 35, 50, 0.5) 100%);
  position: relative;
  width: 100%;
}
.yos-entry__btn::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(to right, transparent, var(--accent-gold), transparent);
  opacity: 0;
  transition: opacity 0.35s;
}
.yos-entry__btn:hover::after, .yos-entry__btn:active::after { opacity: 1; }
.yos-entry__btn-label {
  font-family: var(--t-headline-font);
  font-size: 0.9rem;
  font-weight: 900;
  color: var(--accent-white);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-wrap: balance;
  line-height: 1.3;
}
.yos-entry__btn-sub {
  font-family: var(--t-text-font);
  font-size: 0.78rem;
  color: var(--text-muted);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.yos-entry__btn:hover .yos-entry__btn-sub, .yos-entry__btn:active .yos-entry__btn-sub {
  color: var(--accent-gold);
}
.yos-entry__wave {
  position: relative;
  text-align: left;
  font-family: var(--t-headline-font);
  font-size: clamp(0.95rem, 1.6vw, 1.2rem);
  color: var(--text-secondary);
  font-style: italic;
  font-weight: 300;
  z-index: 1;
}

/* ===== ENTRY BUTTON FULL WIDTH ===== */
.yos-entry__btn--full { grid-column: 1 / -1; width: 100%; }
@media (max-width: 640px) {
  .yos-entry__btn--full { grid-column: 1; }
}

/* ===== WORLD CARD NUMBER AS ANCHOR ===== */
.yos-world-card__num {
  text-decoration: none;
  color: var(--accent-gold);
  display: inline-block;
  transition: color 0.2s, transform 0.2s;
}
.yos-world-card:hover .yos-world-card__num,
.yos-world-card.is-active .yos-world-card__num {
  color: var(--accent-white);
  transform: translateX(4px);
}

/* ===== FAQ ACCORDION ===== */
.yos-faq { display: flex; flex-direction: column; gap: 8px; margin-top: 4px; }
.yos-faq__item {
  border: 1px solid var(--border-subtle);
  background: rgba(10, 14, 26, 0.4);
}
.yos-faq__q {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: none;
  border: none;
  color: var(--accent-white);
  font-family: var(--t-text-font);
  font-size: 0.85rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  min-height: 48px;
  gap: 12px;
  transition: background 0.2s;
  touch-action: manipulation;
}
.yos-faq__q:hover, .yos-faq__q:active { background: rgba(212, 175, 55, 0.08); }
.yos-faq__q:focus { outline: 1px solid var(--accent-gold); outline-offset: -1px; }
.yos-faq__plus {
  color: var(--accent-gold);
  font-size: 1.2rem;
  font-weight: 900;
  flex-shrink: 0;
  transition: transform 0.25s;
  line-height: 1;
}
.yos-faq__item.is-open .yos-faq__plus { transform: rotate(45deg); }
.yos-faq__a {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  padding: 0 16px;
  font-family: var(--t-text-font);
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.6;
}
.yos-faq__item.is-open .yos-faq__a {
  max-height: 120px;
  padding: 0 16px 14px;
  overflow-y: auto;
}

/* ===== FOOTER ===== */
.yos-footer {
  padding: 48px 32px;
  border-top: 1px solid var(--border-subtle);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}
.yos-footer__brand {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.yos-footer__name {
  font-family: var(--t-headline-font);
  font-size: 1.05rem;
  font-weight: 900;
  color: var(--accent-white);
}
.yos-footer__name span { color: var(--accent-gold); }
.yos-footer__powered {
  font-family: var(--t-text-font);
  font-size: 0.7rem;
  color: var(--text-muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.yos-footer__meta {
  font-family: var(--t-text-font);
  font-size: 0.78rem;
  color: var(--text-muted);
  line-height: 1.8;
  text-align: right;
}
.yos-footer__meta a { 
  color: var(--text-muted);
  text-decoration: underline;
  transition: color 0.2s;
}
.yos-footer__meta a:hover, .yos-footer__meta a:active { color: var(--accent-gold); }

/* ===== RESPONSIVE ===== */
@media (max-width: 1200px) {
  .yos-worlds__grid { grid-template-columns: repeat(2, 1fr); }
  .yos-node { grid-template-columns: 1fr; gap: 32px; margin-bottom: 60px; }
  .yos-node--right .yos-node__visual { order: -1; }
  .yos-node--left .yos-node__visual { order: -1; }
  .yos-node--left .yos-node__content,
  .yos-node--left .yos-node__visual,
  .yos-node--right .yos-node__content,
  .yos-node--right .yos-node__visual { grid-column: 1; }
  .yos-pillars { grid-template-columns: 1fr 1fr; }
  .yos-hero__wrapper { grid-template-columns: 1fr; gap: 40px; }
  .yos-hero__image { height: 400px; }
  .yos-nodes::before { display: none; }
  .yos-node::before, .yos-node::after { display: none; }
  .yos-node__visual--collage { min-height: 320px; }
  .yos-node__visual--collage .yos-node__visual-img { aspect-ratio: 1; }
  .yos-hero__scroll { left: 32px; }
}

@media (max-width: 960px) {
  .yos-section { padding: 80px 24px; }
  .yos-hero { padding: 100px 24px 60px; }
  .yos-nav { padding: 14px 24px; }
  .yos-nav__links { display: none; }
  .yos-nav__burger { display: flex; }
  .yos-worlds { padding: 80px 24px; }
  .yos-worlds__grid { grid-template-columns: 1fr 1fr; }
  .yos-worlds__header { padding: 36px 24px; }
  .yos-worlds__footer { padding: 36px 24px; }
  .yos-nodes { padding: 80px 24px; }
  .yos-nodes__header { padding: 36px 24px; }
  .yos-node { grid-template-columns: 1fr; margin-bottom: 56px; }
  .yos-node__content { padding: 32px 24px; }
  .yos-node__h3 { font-size: 1.2rem; }
  .yos-tr-row { grid-template-columns: 1fr 40px 1fr; }
  .yos-tr-row__before, .yos-tr-row__after { padding: 20px 16px; font-size: 0.85rem; }
  .yos-tr-row__sep svg { width: 18px; height: 18px; }
  .yos-pillars { grid-template-columns: 1fr 1fr; }
  .yos-pillar { padding: 32px 24px; }
  .yos-pillar--featured .yos-pillar__overlay { padding: 24px; }
  .yos-nervous { padding: 32px 24px; }
  .yos-alchemy { padding: 32px 24px; }
  .yos-system__header { padding: 36px 24px; }
  .yos-transform__header { padding: 36px 24px; }
  .yos-entry__header { padding: 36px 24px; }
  .yos-entry__cta-grid { grid-template-columns: 1fr 1fr; }
  .yos-entry__btn-body { padding: 24px; }
  .yos-footer { padding: 40px 24px; gap: 24px; }
}

@media (max-width: 640px) {
  .yos-section { padding: 64px 20px; }
  .yos-hero { padding: 88px 20px 60px; min-height: auto; }
  .yos-hero__wrapper { gap: 32px; }
  .yos-hero__image { height: 280px; }
  .yos-hero__h1 { font-size: clamp(1.8rem, 7vw, 2.8rem); }
  .yos-hero__cta { padding: 16px 32px; width: 100%; }
  .yos-hero__scroll { display: none; }
  .yos-nav { padding: 12px 20px; }
  .yos-nav__logo { font-size: 1.15rem; }
  .yos-nav__lang { padding: 8px 12px; font-size: 0.7rem; margin-left: 8px; }
  .yos-nav__mobile { top: 56px; padding: 20px; }
  .yos-worlds { padding: 64px 20px; }
  .yos-worlds__grid { grid-template-columns: 1fr; }
  .yos-world-card { aspect-ratio: auto; min-height: 280px; }
  .yos-world-card__body { padding: 24px; }
  .yos-world-card__title { font-size: 1.1rem; }
  .yos-world-card__reality { max-height: 200px; opacity: 1; }
  .yos-worlds__header { padding: 28px 20px; min-height: 160px; }
  .yos-worlds__footer { padding: 28px 20px; }
  .yos-nodes { padding: 64px 20px; }
  .yos-nodes__header { padding: 28px 20px; min-height: 160px; }
  .yos-node { margin-bottom: 48px; }
  .yos-node__content { padding: 24px 20px; }
  .yos-node__h3 { font-size: 1.1rem; margin-bottom: 20px; }
  .yos-node__visual--collage { min-height: 240px; }
  .yos-node__impulse { padding: 16px; }
  .yos-feature__p { font-size: 0.85rem; }
  .yos-feature__h4 { font-size: 1rem; }
  .yos-tr-row { grid-template-columns: 1fr; }
  .yos-tr-row__sep { height: 32px; width: 100%; }
  .yos-tr-row__before, .yos-tr-row__after { padding: 20px; }
  .yos-tr-row__sep svg { transform: rotate(90deg); }
  .yos-transform__labels { display: none; }
  .yos-transform__header { padding: 28px 20px; min-height: 160px; }
  .yos-system__header { padding: 28px 20px; min-height: 160px; }
  .yos-pillars { grid-template-columns: 1fr; }
  .yos-pillar { padding: 32px 24px; }
  .yos-pillar--featured { min-height: 240px; }
  .yos-pillar--featured .yos-pillar__overlay { padding: 24px; }
  .yos-nervous { padding: 24px 20px; }
  .yos-alchemy { padding: 24px 20px; }
  .yos-entry__header { padding: 28px 20px; min-height: 160px; }
  .yos-entry__manifesto { margin-bottom: 32px; }
  .yos-entry__cta-grid { grid-template-columns: 1fr; }
  .yos-entry__btn-body { padding: 24px 20px; }
  .yos-footer { flex-direction: column; gap: 24px; padding: 32px 20px; }
  .yos-footer__meta { text-align: left; }
}

@media (max-width: 480px) {
  .yos-section { padding: 48px 16px; }
  .yos-hero { padding: 80px 16px 48px; }
  .yos-hero__h1 { font-size: clamp(1.6rem, 8vw, 2.4rem); }
  .yos-hero__image { height: 220px; }
  .yos-hero__sub { font-size: 1rem; }
  .yos-hero__para { font-size: 0.85rem; }
  .yos-nav { padding: 10px 16px; }
  .yos-nav__logo { font-size: 1.1rem; }
  .yos-nav__powered { font-size: 0.55rem; }
  .yos-worlds { padding: 48px 16px; }
  .yos-worlds__header { padding: 24px 16px; min-height: 140px; }
  .yos-worlds__footer { padding: 24px 16px; }
  .yos-worlds__grid { grid-template-columns: 1fr; }
  .yos-nodes { padding: 48px 16px; }
  .yos-nodes__header { padding: 24px 16px; min-height: 140px; }
  .yos-node { margin-bottom: 40px; }
  .yos-node__content { padding: 20px 16px; }
  .yos-node__h3 { font-size: 1rem; }
  .yos-node__context { font-size: 0.8rem; }
  .yos-node__visual--collage { min-height: 200px; gap: 6px; }
  .yos-feature { margin-top: 16px; }
  .yos-feature__body { padding: 14px 16px 16px; }
  .yos-feature__quote { padding: 14px 16px; font-size: 0.85rem; }
  .yos-tr-row__before, .yos-tr-row__after { padding: 16px; font-size: 0.82rem; }
  .yos-transform__header { padding: 24px 16px; min-height: 140px; }
  .yos-system__header { padding: 24px 16px; min-height: 140px; }
  .yos-pillar { padding: 24px 20px; }
  .yos-pillar--featured { min-height: 220px; }
  .yos-pillar--featured .yos-pillar__overlay { padding: 20px; }
  .yos-nervous { padding: 20px 16px; }
  .yos-alchemy { padding: 20px 16px; }
  .yos-entry__header { padding: 24px 16px; min-height: 140px; }
  .yos-entry__btn-body { padding: 20px 16px; }
  .yos-entry__btn-label { font-size: 0.85rem; }
  .yos-entry__btn-sub { font-size: 0.75rem; }
  .yos-footer { padding: 32px 16px; }
  .yos-chain { gap: 6px; }
  .yos-chain__step { padding: 6px 12px; font-size: 0.75rem; }
}

@media (max-width: 360px) {
  .yos-section { padding: 40px 12px; }
  .yos-hero { padding: 76px 12px 40px; }
  .yos-hero__image { height: 200px; }
  .yos-nav { padding: 10px 12px; }
  .yos-worlds, .yos-nodes, .yos-transform, .yos-system, .yos-entry { padding-left: 12px; padding-right: 12px; }
  .yos-worlds__header, .yos-nodes__header, .yos-transform__header, 
  .yos-system__header, .yos-entry__header { padding: 20px 12px; min-height: 120px; }
  .yos-node__content { padding: 18px 14px; }
  .yos-pillar { padding: 20px 16px; }
  .yos-pillar--featured .yos-pillar__overlay { padding: 16px; }
  .yos-nervous, .yos-alchemy { padding: 18px 14px; }
  .yos-footer { padding: 28px 12px; }
}

/* ===== ANIMATIONS ===== */
.yos-reveal {
  opacity: 1;
  transform: none;
}
.yos-reveal[data-state="hidden"] {
  opacity: 0;
  transform: translateY(32px);
}
.yos-reveal[data-state="hidden"],
.yos-reveal[data-state="visible"] {
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.yos-reveal[data-state="visible"] {
  opacity: 1;
  transform: translateY(0);
}

/* Touch optimization: disable hover effects on touch devices */
@media (hover: none), (pointer: coarse) {
  .yos-world-card__reality { max-height: 200px; opacity: 1; }
  .yos-entry__btn-img { filter: grayscale(60%) brightness(0.5); }
  .yos-pillar__img { filter: grayscale(40%) brightness(0.65) saturate(1.15); }
  .yos-node__visual-img { filter: grayscale(50%) brightness(0.65); }
}

/* Touch optimization for buttons */
.yos-nav__lang, .yos-nav__burger, .yos-modal__close, .yos-modal__submit,
.yos-entry__btn, .yos-world-card, .yos-info-trigger {
  touch-action: manipulation;
  -webkit-tap-highlight-color: rgba(212, 175, 55, 0.2);
}

/* Safety: если JS не запустился — контент виден сразу. */
html:not(.js-ready) .yos-reveal[data-state="hidden"] { opacity: 1 !important; transform: none !important; }

@media (prefers-reduced-motion: reduce) {
  .yos-reveal[data-state="hidden"], .yos-reveal[data-state="visible"] { transition: none; }
  .yos-reveal[data-state="hidden"] { opacity: 1; transform: none; }
  .yos-hero__scroll, .yos-hero__scroll-line { animation: none; }
  .yos-nodes::before { animation: none; opacity: 0.6; }
  .yos-feature { opacity: 1; transform: none; }
  .yos-feature--pulse.is-visible { animation: none; }
  .yos-feature__anim::before { animation: none; }
  .yos-node__impulse--anna::before { animation: none; }
}

/* ===== MODAL ===== */
.yos-modal {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: flex-start;
  justify-content: stretch;
  padding: 60px 0 0 0;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  pointer-events: none;
  overflow: hidden;
}
.yos-modal.is-open {
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
}
.yos-modal__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(5, 7, 15, 0.94);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  cursor: pointer;
}
.yos-modal__dialog {
  position: relative;
  width: 100vw;
  height: calc(100vh - 60px);
  background: #0a0e1a;
  border: none;
  border-top: 2px solid var(--accent-gold);
  display: flex;
  flex-direction: column;
  transform: translateY(20px);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}
.yos-modal.is-open .yos-modal__dialog {
  transform: translateY(0);
}
.yos-modal__close {
  position: fixed;
  top: 68px;
  right: 16px;
  width: 44px;
  height: 44px;
  background: rgba(212, 175, 55, 0.15);
  border: 1px solid rgba(212, 175, 55, 0.4);
  color: var(--accent-gold);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10001;
  transition: background 0.2s, border-color 0.2s, transform 0.3s;
  padding: 0;
  flex-shrink: 0;
  min-height: 44px;
  min-width: 44px;
  border-radius: 50%;
}
.yos-modal__close:hover, .yos-modal__close:active, .yos-modal__close:focus {
  background: rgba(212, 175, 55, 0.3);
  border-color: var(--accent-gold);
  transform: rotate(90deg);
  outline: none;
}
.yos-modal__content {
  flex: 1 1 auto;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.yos-modal__iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
.yos-root.has-modal-open {
  overflow: hidden;
  position: fixed;
  width: 100%;
}
html.has-modal-open {
  overflow: hidden;
  position: fixed;
  width: 100%;
  height: 100%;
}
@media (max-width: 640px) {
  .yos-modal { padding: 56px 0 0 0; }
  .yos-modal__dialog { height: calc(100vh - 56px); }
  .yos-modal__close { top: 62px; right: 8px; width: 40px; height: 40px; }
}
  </style>
</head>
<body>
<div class="yos-root" data-vibeblock-unique-section="yes">
<nav aria-label="YachtOS Navigation" class="yos-nav">
<div class="yos-nav__brand">
<div class="yos-nav__logo"><span>Yacht</span>OS</div>
<div class="yos-nav__powered" data-i18n="footer-powered">powered by Startinyachting</div>
</div>
<ul class="yos-nav__links">
<li><a data-i18n="nav-worlds" href="#worlds">Audience</a></li>
<li><a data-i18n="nav-nodes" href="#nodes">System</a></li>
<li><a data-i18n="nav-transform" href="#transform">Transformation</a></li>
<li><a data-i18n="nav-entry" href="#entry">Sign In</a></li>
</ul>
<div class="yos-nav__right">
<button aria-label="Switch language" class="yos-nav__lang" id="yos-lang-toggle">EN</button>
<button aria-label="Open menu" class="yos-nav__burger" id="yos-nav-burger">
<span></span>
<span></span>
<span></span>
</button>
</div>
</nav>

<div aria-label="Mobile navigation" class="yos-nav__mobile" id="yos-nav-mobile">
<ul class="yos-nav__mobile-list">
<li><a data-i18n="nav-worlds" href="#worlds">Audience</a></li>
<li><a data-i18n="nav-nodes" href="#nodes">System</a></li>
<li><a data-i18n="nav-transform" href="#transform">Transformation</a></li>
<li><a data-i18n="nav-entry" href="#entry">Sign In</a></li>
</ul>
</div>

<!-- ===== SCREEN 1: HERO ===== -->
<section aria-labelledby="yos-hero-h1" class="yos-hero">
<div class="yos-hero__wrapper">
<div class="yos-hero__content">
<p class="yos-hero__eyebrow" data-i18n="hero-eyebrow">YachtOS · Startinyachting</p>
<h1 class="yos-hero__h1" id="yos-hero-h1">
<span class="yos-hero__h1-accent" data-i18n="hero-h1-accent">YachtOS</span>
<span class="yos-hero__h1-primary" data-i18n="hero-h1-primary">OPERATING SYSTEM</span>
<span class="yos-hero__h1-red" data-i18n="hero-h1-red">OF THE SUPERYACHT INDUSTRY</span>
</h1>
<p class="yos-hero__sub" data-i18n="hero-sub">Turning network chaos into measurable social capital.</p>
<p class="yos-hero__para" data-i18n="hero-para">YachtOS is the result of Startinyachting's decade-long work inside the industry. We've seen how it breaks people and loses money. We built a system that connects all participants through one transparent network of trust.</p>
<div class="yos-hero__cta-wrap">
<a class="yos-hero__cta" data-i18n="hero-cta" href="https://startinyachting.com/members/login">ENTER THE ECOSYSTEM</a>
<div class="yos-hero__hint" data-i18n="hero-cta-hint">
<span aria-hidden="true" class="yos-hero__hint-icon">★</span>
<span class="yos-hero__hint-text">Sign up and get access to additional project materials</span>
</div>
</div>
</div>
<div aria-hidden="true" class="yos-hero__image">
<img alt="" src="https://static.tildacdn.net/tild3264-6364-4137-b731-383831346339/photo-1784095578936-.jpg">
</div>
</div>
<div aria-hidden="true" class="yos-hero__scroll">
<span data-i18n="hero-scroll">Scroll</span>
<div class="yos-hero__scroll-line"></div>
</div>
</section>

<!-- ===== SCREEN 2: FOUR WORLDS ===== -->
<section aria-labelledby="yos-worlds-h2" class="yos-section yos-worlds" id="worlds" data-section-name="Four Worlds">
<div class="yos-worlds__header yos-reveal" data-state="hidden">
<p class="yos-worlds__intro-label" data-i18n="worlds-label">Four Worlds</p>
<h2 class="yos-worlds__intro-h2" id="yos-worlds-h2">
<span data-i18n="worlds-h2">Industry</span><br><span data-i18n="worlds-h2-accent" style="color: var(--accent-gold);">Through the Eyes of Participants</span>
</h2>
</div>
<div class="yos-worlds__grid">
<article class="yos-world-card yos-reveal" data-state="hidden">
<div class="yos-world-card__img" style="background-image:url('https://static.tildacdn.net/tild6365-3238-4062-a637-336534643730/photo-1696626475567-.jpg')"></div>
<div class="yos-world-card__body">
<a class="yos-world-card__num" data-i18n="worlds-card-1-num" href="#node-maxim">01 / Newcomer</a>
<h3 class="yos-world-card__title" data-i18n="worlds-card-1-title">Searching for a Path</h3>
<p class="yos-world-card__reality" data-i18n="worlds-card-1-desc">Chat chaos, scam fears, PDFs nobody opens. 4–12 months to a contract, €2,000–€5,000 with no guarantees.</p>
</div>
</article>
<article class="yos-world-card yos-reveal" data-state="hidden">
<div class="yos-world-card__img" style="background-image:url('https://static.tildacdn.net/tild3666-3631-4265-b639-356439656461/photo-1713259037743-.jpg')"></div>
<div class="yos-world-card__body">
<a class="yos-world-card__num" data-i18n="worlds-card-2-num" href="#node-anna">02 / Professional</a>
<h3 class="yos-world-card__title" data-i18n="worlds-card-2-title">Experienced Professional</h3>
<p class="yos-world-card__reality" data-i18n="worlds-card-2-desc">Contract ended. Impressions faded, connections lost, burnout hit. Standard: "just deal with it".</p>
</div>
</article>
<article class="yos-world-card yos-reveal" data-state="hidden">
<div class="yos-world-card__img" style="background-image:url('https://static.tildacdn.net/tild6633-6337-4231-b037-363535653835/photo-1599582297450-.jpg')"></div>
<div class="yos-world-card__body">
<a class="yos-world-card__num" data-i18n="worlds-card-3-num" href="#node-ivan">03 / Owner</a>
<h3 class="yos-world-card__title" data-i18n="worlds-card-3-title">Guest / Yacht Owner</h3>
<p class="yos-world-card__reality" data-i18n="worlds-card-3-desc">I pay an agency €15,000 for crew selection and don't know who will arrive. Resumes look good. People are different.</p>
</div>
</article>
<article class="yos-world-card yos-reveal" data-state="hidden">
<div class="yos-world-card__img" style="background-image:url('https://static.tildacdn.net/tild3832-3735-4661-a335-396230326431/photo-1786456790704-.jpg')"></div>
<div class="yos-world-card__body">
<a class="yos-world-card__num" data-i18n="worlds-card-4-num" href="#node-mark">04 / Business</a>
<h3 class="yos-world-card__title" data-i18n="worlds-card-4-title">Port Business</h3>
<p class="yos-world-card__reality" data-i18n="worlds-card-4-desc">Crew passes by every day and doesn't know I exist. No access to those who spend thousands of euros per week.</p>
</div>
</article>
</div>
<div class="yos-worlds__footer">
<p data-i18n="worlds-footer">Resumes can be faked. Reviews can be bought. But when Anna helps Maxim find a marina, her advice becomes a point on the map that saves time for ten others. That's how trust is born.</p>
</div>
</section>

<!-- ===== SCREEN 3: NODES ===== -->
<section aria-labelledby="yos-nodes-h2" class="yos-section yos-nodes" id="nodes" data-section-name="Living Connection Map">
<div class="yos-nodes__header yos-reveal" data-state="hidden">
<p class="yos-nodes__header-label" data-i18n="nodes-label">Living Connection Map</p>
<h2 class="yos-nodes__header-h2" id="yos-nodes-h2">
<span data-i18n="nodes-h2-line-1">ONE</span><span class="yos-nodes__header-accent" data-i18n="nodes-h2-line-2"> SYSTEM</span><br><span data-i18n="nodes-h2-line-3">DIFFERENT</span><span class="yos-nodes__header-accent" data-i18n="nodes-h2-line-4"> NEEDS</span>
</h2>
</div>

<!-- NODE 1: ANNA -->
<div class="yos-node yos-node--left yos-reveal" data-state="hidden" id="node-anna">
<div class="yos-node__content">
<p class="yos-node__context" data-i18n="anna-context">Anna steps ashore after six months on a 65-meter yacht. Fired via a single message — the industry standard.</p>
<h3 class="yos-node__h3">
<span data-i18n="anna-title-pre">ANNA:</span> <span data-i18n="anna-title" style="display:inline">Point Zero</span><button aria-label="More info about Point Zero" class="yos-info-trigger" data-i18n-tip="tip-anna-title" data-tip="&quot;Point Zero&quot; is a protective protocol. When a contract is terminated abruptly, the system logs the event to protect your reputation from &quot;AWOL&quot; (Absent Without Leave) status and preserves your history until recovery." type="button">i</button>
</h3>

<div class="yos-anna-intro">
<p class="yos-anna-intro__p" data-i18n="anna-quote-1"><strong>"The contract vanished.</strong> The boat erased me from memory as if I never existed."</p>
</div>

<div class="yos-feature" data-feature>
<p class="yos-feature__anim" data-i18n="anna-anim-1">[ Animation: Logbook card slides onto the screen ]</p>
<p class="yos-feature__quote" data-i18n="anna-quote-2">"My contract vanished. The boat erased me from memory."</p>
<div class="yos-feature__body">
<h4 class="yos-feature__h4">
<span data-i18n="anna-feat-1-title-pre">Logbook:</span> <span data-i18n="anna-feat-1-title">Proof of Existence</span><button aria-label="More info about Logbook" class="yos-info-trigger" data-i18n-tip="tip-anna-feat-1" data-tip="The entry indexes the object — M/Y Aura, the Captain, the location. The system registers: you were there, you worked. The boat's Trust Score increases by 5 points for honest feedback, not for silence. This protects future candidates from dishonest employers." type="button">i</button>
</h4>
<p class="yos-feature__p" data-i18n="anna-feat-1-text">Your note indexes the object — M/Y Aura, captain, location. The system registers: you were there, you worked. The boat's Trust Score grows by 5 points for honest feedback, not for silence.</p>
<p class="yos-feature__note" data-i18n="anna-feat-1-note">This protects future candidates from dishonest employers.</p>
</div>
</div>

<div class="yos-anna-intro">
<p class="yos-anna-intro__p" data-i18n="anna-quote-3">"I know how to handle Garmin and run a tender, but my CV just says 'Stew'."</p>
</div>

<div class="yos-feature" data-feature>
<p class="yos-feature__anim" data-i18n="anna-anim-2">[ Animation: Sea-CV card slides onto the screen ]</p>
<p class="yos-feature__quote" data-i18n="anna-quote-4">"I can handle Garmin and run a tender, but my CV just says 'Stew'."</p>
<div class="yos-feature__body">
<h4 class="yos-feature__h4">
<span data-i18n="anna-feat-2-title-pre">Sea-CV:</span> <span data-i18n="anna-feat-2-title">Skill Deconstruction</span><button aria-label="More info about Sea-CV" class="yos-info-trigger" data-i18n-tip="tip-anna-feat-2" data-tip="The AI scanner analyzes not your job title, but work chat logs, checklists, and inventory manifests. It sees &quot;Garmin&quot; and &quot;tender,&quot; translating them into &quot;Navigation&quot; and &quot;Logistics&quot; competencies. Verified by test. The shipyard owner isn't looking for a &quot;stewardess&quot;; he's looking for a specialist. He finds you himself." type="button">i</button>
</H4>
<p class="yos-feature__p" data-i18n="anna-feat-2-text">The AI scanner analyzes not your job title, but work chat logs, checklists, and inventory manifests. It translates "Garmin" and "tender" into "Navigation" and "Logistics" competencies. Verified by test. The shipyard owner finds you himself.</p>
</div>
</div>

<div class="yos-anna-intro">
<p class="yos-anna-intro__p" data-i18n="anna-quote-5">"Connections fall apart. WhatsApp names mean nothing when the boat sails to another ocean."</p>
</div>

<div class="yos-feature" data-feature>
<p class="yos-feature__anim" data-i18n="anna-anim-3">[ Animation: Social Graph card slides onto the screen ]</p>
<p class="yos-feature__quote" data-i18n="anna-quote-6">"Connections fall apart. WhatsApp names mean nothing when the boat sails to another ocean."</p>
<div class="yos-feature__body">
<h4 class="yos-feature__h4">
<span data-i18n="anna-feat-3-title-pre">Social Graph:</span> <span data-i18n="anna-feat-3-title">Invisible Threads</span><button aria-label="More info about Social Graph" class="yos-info-trigger" data-i18n-tip="tip-anna-feat-3" data-tip="The contact is locked in the system based on GPS crossings and shared logs. Upon physical proximity (in the same port) or route intersection — the system pushes a notification: &quot;Anna, you worked with this First Officer 3 years ago. He is currently hiring a crew in Gibraltar.&quot;" type="button">i</button>
</h4>
<p class="yos-feature__p" data-i18n="anna-feat-3-text">The contact is locked in the system based on GPS crossings and shared logs. When you and a former colleague cross paths again — same port, intersecting route — the system pushes a notification and reconnects you.</p>
</div>
</div>

<div class="yos-anna-intro">
<p class="yos-anna-intro__p" data-i18n="anna-quote-7">"I taught the girl everything. She forgot me the moment she got promoted."</p>
</div>

<div class="yos-feature" data-feature>
<p class="yos-feature__anim" data-i18n="anna-anim-4">[ Animation: My Mentees card slides onto the screen ]</p>
<p class="yos-feature__quote" data-i18n="anna-quote-8">"I taught her everything. She forgot me the moment she got promoted."</p>
<div class="yos-feature__body">
<h4 class="yos-feature__h4">
<span data-i18n="anna-feat-4-title-pre">My Mentees:</span> <span data-i18n="anna-feat-4-title">Legacy</span><button aria-label="More info about Mentees" class="yos-info-trigger" data-i18n-tip="tip-anna-feat-4" data-tip="The mentee grew to €8,000. Every one of her promotions is a lifetime bonus for you. Her success is now your passive income. 5% of her salary growth for 24 months after mentorship verification." type="button">i</button>
</H4>
<p class="yos-feature__p" data-i18n="anna-feat-4-text">The mentee grew to €8,000. Every one of her promotions is a lifetime bonus for you. Her success becomes your passive income.</p>
<p class="yos-feature__note" data-i18n="anna-feat-4-note">5% of her salary growth for 24 months after mentorship verification.</p>
</div>
</div>

<div class="yos-anna-intro">
<p class="yos-anna-intro__p" data-i18n="anna-quote-9">"Burned out. Resilience 34/100. Just deal with it, they say."</p>
</div>

<div class="yos-feature yos-feature--pulse" data-feature>
<p class="yos-feature__anim" data-i18n="anna-anim-5">[ Animation: Well-being Pulse card slides onto the screen. The screen softly pulses red, mimicking a critical cardiogram, then calms down ]</p>
<p class="yos-feature__quote" data-i18n="anna-quote-10">"Burned out. Resilience 34/100. Just deal with it, they say."</p>
<div class="yos-feature__body">
<h4 class="yos-feature__h4">
<span data-i18n="anna-feat-5-title-pre">Well-being Pulse:</span> <span data-i18n="anna-feat-5-title">The Right to Pause</span><button aria-label="More info about Well-being Pulse" class="yos-info-trigger" data-i18n-tip="tip-anna-feat-5" data-tip="The system sees a critical stress level. It doesn't offer a &quot;light contract&quot; — it blocks access to Sole Stew vacancies for 3 months to save you from a breakdown. Instead, it offers a &quot;Recovery Contract&quot;: escorting the owner to the marina, no night shifts, with included relaxation sessions. You are safe." type="button">i</button>
</H4>
<p class="yos-feature__p" data-i18n="anna-feat-5-text">The system sees a critical stress level. It doesn't offer a "light contract" — it blocks access to Sole Stew vacancies for 3 months to save you from a breakdown. Instead, it offers a Recovery Contract: escorting the owner to the marina, no night shifts, with included relaxation sessions. You are safe.</p>
</div>
</div>

<div class="yos-node__impulse yos-node__impulse--anna">
<div class="yos-node__impulse-label">
<span data-i18n="anna-impulse-label">Network Pulse</span><button aria-label="More info about Network Pulse" class="yos-info-trigger" data-i18n-tip="tip-anna-impulse" data-tip="Your honesty saved time for dozens of people. Anna receives +6 Trust Score for the detailed review of M/Y Aura. A month later, her rating grows to 84 — her advice saved someone's time and nerves. The system remembers: Anna doesn't just work, she makes the industry better." type="button">i</button>
</div>
<p data-i18n="anna-impulse-text">Your honesty saved time for dozens of people. Anna receives <strong>+6 Trust Score</strong> for the detailed review of M/Y Aura. A month later, her rating grows to <strong>84</strong> — her advice saved someone's time and nerves. The system remembers: Anna doesn't just work, she makes the industry better.</p>
</div>
</div>
<div aria-hidden="true" class="yos-node__visual yos-node__visual--collage">
<img alt="" class="yos-node__visual-img yos-node__visual-img--c1" src="https://static.tildacdn.net/tild3835-3134-4631-b938-396335663739/photo-1748369829728-.jpg">
<img alt="" class="yos-node__visual-img yos-node__visual-img--c2" src="https://static.tildacdn.net/tild6637-3464-4565-b564-636138303739/photo-1681649622291-.jpg">
<img alt="" class="yos-node__visual-img yos-node__visual-img--c3" src="https://static.tildacdn.net/tild3138-3563-4261-b765-656665313938/photo-1536941454940-.jpg">
<img alt="" class="yos-node__visual-img yos-node__visual-img--c4" src="https://static.tildacdn.net/tild6239-3365-4162-a238-356464323462/photo-1554188572-9d1.jpg">
</div>
</div>

<!-- NODE 2: MAXIM -->
<div class="yos-node yos-node--right yos-reveal" data-state="hidden" id="node-maxim">
<div aria-hidden="true" class="yos-node__visual yos-node__visual--collage">
<img alt="" class="yos-node__visual-img yos-node__visual-img--c1" src="https://static.tildacdn.net/tild6239-3930-4638-a264-356138356536/photo-1531159944511-.jpg">
<img alt="" class="yos-node__visual-img yos-node__visual-img--c2" src="https://static.tildacdn.net/tild3862-3939-4765-b761-333361316161/photo-1649411138009-.jpg">
<img alt="" class="yos-node__visual-img yos-node__visual-img--c3" src="https://static.tildacdn.net/tild3938-3335-4535-a431-396634356537/photo-1587365001066-.jpg">
<img alt="" class="yos-node__visual-img yos-node__visual-img--c4" src="https://static.tildacdn.net/tild3862-3635-4532-a165-323638396134/photo-1709805619372-.jpg">
</div>
<div class="yos-node__content">
<p class="yos-node__context" data-i18n="maxim-context">Maxim sits in a café in Antibes. On Google Maps, he is nobody. A backpack, fear, €2,000 in his account, and 200 browser tabs open.</p>
<h3 class="yos-node__h3">
<span data-i18n="maxim-title-pre">MAXIM:</span> <span data-i18n="maxim-title" style="display:inline">Death of Uncertainty</span><button aria-label="More info about Death of Uncertainty" class="yos-info-trigger" data-i18n-tip="tip-maxim-title" data-tip="&quot;Death of Uncertainty&quot; is the system's core promise for newcomers. It replaces anxiety with data-driven certainty by providing verified housing, pre-boarding VR training, and micro-jobs that build confidence before day one." type="button">i</button>
</H3>

<div class="yos-anna-intro">
<p class="yos-anna-intro__p" data-i18n="maxim-quote-1"><strong>"Housing blindly.</strong> The risk of ending up on the street."</p>
</div>

<div class="yos-feature" data-feature>
<p class="yos-feature__anim" data-i18n="maxim-anim-1">[ Animation: My Rental card slides onto the screen ]</p>
<p class="yos-feature__quote" data-i18n="maxim-quote-2">"Housing blindly. The risk of ending up on the street."</p>
<div class="yos-feature__body">
<h4 class="yos-feature__h4">
<span data-i18n="maxim-feat-1-title-pre">My Rental:</span> <span data-i18n="maxim-feat-1-title">Housing Map</span><button aria-label="More info about Housing Map" class="yos-info-trigger" data-i18n-tip="tip-maxim-feat-1" data-tip="An interactive map shows only vetted apartments available within your budget. Price differences are returned as $YTC tokens, turning every booking into an investment in your future reputation." type="button">i</button>
</H4>
<p class="yos-feature__p" data-i18n="maxim-feat-1-text">An interactive map shows only vetted apartments available within your budget. Price differences are returned as <strong>$YTC tokens</strong>, turning every booking into an investment in your future reputation.</p>
</div>
</div>

<div class="yos-anna-intro">
<p class="yos-anna-intro__p" data-i18n="maxim-quote-3"><strong>"Fear of Day One.</strong> Where do I go? Who are these people?"</p>
</div>

<div class="yos-feature" data-feature>
<p class="yos-feature__anim" data-i18n="maxim-anim-2">[ Animation: My Guide card slides onto the screen ]</p>
<p class="yos-feature__quote" data-i18n="maxim-quote-4">"Fear of Day One. Where do I go? Who are these people?"</p>
<div class="yos-feature__body">
<h4 class="yos-feature__h4">
<span data-i18n="maxim-feat-2-title-pre">My Guide:</span> <span data-i18n="maxim-feat-2-title">Pre-Boarding VR Tour</span><button aria-label="More info about Pre-Boarding VR Tour" class="yos-info-trigger" data-i18n-tip="tip-maxim-feat-2" data-tip="Take a virtual walkthrough of the yacht before you step aboard. Learn the layout, locate safety equipment, and meet key crew members via avatars. The Captain awards +5 Trust Score points for completing the tour, recognizing proactive preparation." type="button">i</button>
</H4>
<p class="yos-feature__p" data-i18n="maxim-feat-2-text">Take a virtual walkthrough of the yacht before you step aboard. Learn the layout, locate safety equipment, and meet key crew members via avatars. The Captain awards <strong>+5 Trust Score points</strong> for completing the tour, recognizing proactive preparation.</p>
</div>
</div>

<div class="yos-anna-intro">
<p class="yos-anna-intro__p" data-i18n="maxim-quote-5"><strong>"Wasting money.</strong> Pays scammers for useless courses."</p>
</div>

<div class="yos-feature" data-feature>
<p class="yos-feature__anim" data-i18n="maxim-anim-3">[ Animation: My Partners card slides onto the screen ]</p>
<p class="yos-feature__quote" data-i18n="maxim-quote-6">"Wasting money. Pays scammers for useless courses."</p>
<div class="yos-feature__body">
<h4 class="yos-feature__h4">
<span data-i18n="maxim-feat-3-title-pre">My Partners:</span> <span data-i18n="maxim-feat-3-title">STCW Accredited Schools</span><button aria-label="More info about STCW Accredited Schools" class="yos-info-trigger" data-i18n-tip="tip-maxim-feat-3" data-tip="Only certified maritime schools are listed. You book mandatory certifications at a −5% discount directly through the platform, guaranteeing legitimacy and saving both time and money." type="button">i</button>
</H4>
<p class="yos-feature__p" data-i18n="maxim-feat-3-text">Only certified maritime schools are listed. You book mandatory certifications at a <strong>−5% discount</strong> directly through the platform, guaranteeing legitimacy and saving both time and money.</p>
</div>
</div>

<div class="yos-anna-intro">
<p class="yos-anna-intro__p" data-i18n="maxim-quote-7"><strong>"Impostor Syndrome.</strong> I don't know anything."</p>
</div>

<div class="yos-feature" data-feature>
<p class="yos-feature__anim" data-i18n="maxim-anim-4">[ Animation: Academic Gig card slides onto the screen ]</p>
<p class="yos-feature__quote" data-i18n="maxim-quote-8">"Impostor Syndrome. I don't know anything."</p>
<div class="yos-feature__body">
<h4 class="yos-feature__h4">
<span data-i18n="maxim-feat-4-title-pre">Academic Gig:</span> <span data-i18n="maxim-feat-4-title">Photo Report Task</span><button aria-label="More info about Photo Report Task" class="yos-info-trigger" data-i18n-tip="tip-maxim-feat-4" data-tip="Complete simple tasks like creating a photo report of inventory or deck maintenance. Earn your first $YTC tokens and get a public review from the Chief Officer. This builds your portfolio and proves your competence from day zero." type="button">i</button>
</H4>
<p class="yos-feature__p" data-i18n="maxim-feat-4-text">Complete simple tasks like creating a photo report of inventory or deck maintenance. Earn your first <strong>$YTC tokens</strong> and get a public review from the Chief Officer. This builds your portfolio and proves your competence from day zero.</p>
</div>
</div>

<div class="yos-anna-intro">
<p class="yos-anna-intro__p" data-i18n="maxim-quote-9"><strong>"No mentor.</strong> Questions drown in group chats."</p>
</div>

<div class="yos-feature yos-feature--pulse" data-feature>
<p class="yos-feature__anim" data-i18n="maxim-anim-5">[ Animation: Anna Matchmaking card slides onto the screen. A bright green connection line links Maxim to Anna, lighting up the whole path ]</p>
<p class="yos-feature__quote" data-i18n="maxim-quote-10">"No mentor. Questions drown in group chats."</p>
<div class="yos-feature__body">
<h4 class="yos-feature__h4">
<span data-i18n="maxim-feat-5-title-pre">Algorithm Matchmaking:</span> <span data-i18n="maxim-feat-5-title">Anna Pairing</span><button aria-label="More info about Anna Pairing" class="yos-info-trigger" data-i18n-tip="tip-maxim-feat-5" data-tip="The algorithm identifies Anna nearby, who has a high Recovery Score and mentoring experience. It automatically creates a mentorship pair. Anna receives guidance prompts; Maxim gets answers without ever feeling lost in the noise." type="button">i</button>
</H4>
<p class="yos-feature__p" data-i18n="maxim-feat-5-text">The algorithm identifies <strong>Anna</strong> nearby, who has a high Recovery Score and mentoring experience. It automatically creates a mentorship pair. Anna receives guidance prompts; Maxim gets answers without ever feeling lost in the noise.</p>
</div>
</div>

<div class="yos-node__impulse yos-node__impulse--anna">
<div class="yos-node__impulse-label">
<span data-i18n="maxim-impulse-label">Network Pulse</span><button aria-label="More info about Maxim's Network Pulse" class="yos-info-trigger" data-i18n-tip="tip-maxim-impulse" data-tip="In just four days, Maxim exits uncertainty. He signs a contract with a Trust Score of 78, possesses seven verified skills, holds five active gigs, and has eleven meaningful contacts. The chaos is gone." type="button">i</button>
</div>
<p data-i18n="maxim-impulse-text">In just <strong>four days</strong>, Maxim exits uncertainty. He signs a contract with a Trust Score of <strong>78</strong>, possesses seven verified skills, holds five active gigs, and has eleven meaningful contacts. <strong>The chaos is gone.</strong></p>
</div>
</div>
</div>

<!-- NODE 3: IVAN -->
<div class="yos-node yos-node--left yos-reveal" data-state="hidden" id="node-ivan">
<div class="yos-node__content">
<p class="yos-node__context" data-i18n="ivan-context">Ivan owns a yacht. He hates crew changes. It's always a gamble.</p>
<h3 class="yos-node__h3">
<span data-i18n="ivan-title-pre">IVAN:</span> <span data-i18n="ivan-title" style="display:inline">Eliminating Entropy</span><button aria-label="More info about Eliminating Entropy" class="yos-info-trigger" data-i18n-tip="tip-ivan-title" data-tip="&quot;Eliminating Entropy&quot; is the core function for fleet managers. It transforms chaotic, high-risk human variables into a predictable, data-driven system, protecting the vessel's reputation and the owner's budget." type="button">i</button>
</h3>

<div class="yos-anna-intro">
<p class="yos-anna-intro__p" data-i18n="ivan-quote-1"><strong>"A new Chef went on a binge on day two."</strong></p>
</div>

<div class="yos-feature" data-feature>
<p class="yos-feature__anim" data-i18n="ivan-anim-1">[ Animation: Smart Hire card slides onto the screen ]</p>
<p class="yos-feature__quote" data-i18n="ivan-quote-2">"A new Chef went on a binge on day two."</p>
<div class="yos-feature__body">
<h4 class="yos-feature__h4">
<span data-i18n="ivan-feat-1-title-pre">Smart Hire:</span> <span data-i18n="ivan-feat-1-title">Well-being Filter</span><button aria-label="More info about Well-being Filter" class="yos-info-trigger" data-i18n-tip="tip-ivan-feat-1" data-tip="The system flags a critical &quot;Well-being Score&quot; during the final interview stage. Disaster averted. You hire from a verified labor market, not a database of ticking time bombs." type="button">i</button>
</H4>
<p class="yos-feature__p" data-i18n="ivan-feat-1-text">The system flags a critical <strong>"Well-being Score"</strong> during the final interview stage. Disaster averted. You hire from a <strong>verified labor market</strong>, not a database of ticking time bombs.</p>
</div>
</div>

<div class="yos-anna-intro">
<p class="yos-anna-intro__p" data-i18n="ivan-quote-3">"Chief Stew ruins the marble with the wrong chemicals."</p>
</div>

<div class="yos-feature" data-feature>
<p class="yos-feature__anim" data-i18n="ivan-anim-2">[ Animation: Candidate Profile card slides onto the screen ]</p>
<p class="yos-feature__quote" data-i18n="ivan-quote-4">"Chief Stew ruins the marble with the wrong chemicals."</p>
<div class="yos-feature__body">
<h4 class="yos-feature__h4">
<span data-i18n="ivan-feat-2-title-pre">Candidate Profile:</span> <span data-i18n="ivan-feat-2-title">Verified Skills</span><button aria-label="More info about Verified Skills" class="yos-info-trigger" data-i18n-tip="tip-ivan-feat-2" data-tip="The profile displays a &quot;Stone Care — Verified&quot; tag. This is the platform's Skill Guarantee. If the hire damages property due to a lack of declared skills, the platform's insurance covers the repair." type="button">i</button>
</H4>
<p class="yos-feature__p" data-i18n="ivan-feat-2-text">The profile displays a <strong>"Stone Care — Verified"</strong> tag. This is the platform's Skill Guarantee. If the hire damages property due to a lack of declared skills, the platform's insurance covers the repair.</p>
</div>
</div>

<div class="yos-anna-intro">
<p class="yos-anna-intro__p" data-i18n="ivan-quote-5">"Where is the boat? Is everything alright?"</p>
</div>

<div class="yos-feature" data-feature>
<p class="yos-feature__anim" data-i18n="ivan-anim-3">[ Animation: Dashboard card slides onto the screen ]</p>
<p class="yos-feature__quote" data-i18n="ivan-quote-6">"Where is the boat? Is everything alright?"</p>
<div class="yos-feature__body">
<h4 class="yos-feature__h4">
<span data-i18n="ivan-feat-3-title-pre">Dashboard:</span> <span data-i18n="ivan-feat-3-title">Fleet Status</span><button aria-label="More info about Fleet Status" class="yos-info-trigger" data-i18n-tip="tip-ivan-feat-3" data-tip="Real-time status, fuel levels, and the crew's Stress Index. Stop calling the Captain every two hours. My Career acts as a GPS tracker for professional status, showing you exactly where your asset is and how it feels." type="button">i</button>
</H4>
<p class="yos-feature__p" data-i18n="ivan-feat-3-text">Real-time status, fuel levels, and the crew's <strong>Stress Index</strong>. Stop calling the Captain every two hours. My Career acts as a <strong>GPS tracker for professional status</strong>, showing you exactly where your asset is and how it feels.</p>
</div>
</div>

<div class="yos-anna-intro">
<p class="yos-anna-intro__p" data-i18n="ivan-quote-7">"A guest wants a rare wine at 2 AM."</p>
</div>

<div class="yos-feature yos-feature--pulse" data-feature>
<p class="yos-feature__anim" data-i18n="ivan-anim-4">[ Animation: My Partners card slides onto the screen. A connection line links to the port network ]</p>
<p class="yos-feature__quote" data-i18n="ivan-quote-8">"A guest wants a rare wine at 2 AM."</p>
<div class="yos-feature__body">
<h4 class="yos-feature__h4">
<span data-i18n="ivan-feat-4-title-pre">My Partners:</span> <span data-i18n="ivan-feat-4-title">Referral Network</span><button aria-label="More info about Referral Network" class="yos-info-trigger" data-i18n-tip="tip-ivan-feat-4" data-tip="Place the order through the platform's referral network. The partner gets a new high-value client; you get the wine in 40 minutes and a commission kickback in $YTC tokens. The guest is stunned." type="button">i</button>
</H4>
<p class="yos-feature__p" data-i18n="ivan-feat-4-text">Place the order through the platform's <strong>referral network</strong>. The partner gets a new high-value client; you get the wine in 40 minutes and a <strong>commission kickback in $YTC tokens</strong>. The guest is stunned.</p>
</div>
</div>

<div class="yos-node__impulse yos-node__impulse--anna">
<div class="yos-node__impulse-label">
<span data-i18n="ivan-impulse-label">Closing the Loop</span><button aria-label="More info about Closing the Loop" class="yos-info-trigger" data-i18n-tip="tip-ivan-impulse" data-tip="Animation: The screen zooms out. A digital thread connects Ivan's profile to Anna's profile. The steward Ivan hired is Anna, with a rating of 84. Her burnout, prevented by the system, is his saved €50,000." type="button">i</button>
</div>
<p data-i18n="ivan-impulse-text">The steward Ivan hired is <strong>Anna</strong>, with a rating of <strong>84</strong>. Her burnout, prevented by the system, is his saved <strong>€50,000</strong>.</p>
</div>
</div>
<div aria-hidden="true" class="yos-node__visual yos-node__visual--collage">
<img alt="" class="yos-node__visual-img yos-node__visual-img--c1" src="https://static.tildacdn.net/tild3232-3861-4838-a632-363965343666/photo-1598448251941-.jpg">
<img alt="" class="yos-node__visual-img yos-node__visual-img--c2" src="https://static.tildacdn.net/tild6264-6137-4866-a334-316265373537/photo-1681331325415-.jpg">
<img alt="" class="yos-node__visual-img yos-node__visual-img--c3" src="https://static.tildacdn.net/tild3434-3764-4332-a433-373831636164/photo-1599383885524-.jpg">
<img alt="" class="yos-node__visual-img yos-node__visual-img--c4" src="https://static.tildacdn.net/tild3832-3735-4661-a335-396230326431/photo-1786456790704-.jpg">
</div>
</div>

<!-- NODE 4: MARK -->
<div class="yos-node yos-node--right yos-reveal" data-state="hidden" id="node-mark">
<div aria-hidden="true" class="yos-node__visual yos-node__visual--collage">
<img alt="" class="yos-node__visual-img yos-node__visual-img--c1" src="https://static.tildacdn.net/tild6366-3433-4832-a534-623364636661/photo-1587365001066-.jpg">
<img alt="" class="yos-node__visual-img yos-node__visual-img--c2" src="https://static.tildacdn.net/tild6239-3535-4138-b766-346434313561/photo-1785667042151-.jpg">
<img alt="" class="yos-node__visual-img yos-node__visual-img--c3" src="https://static.tildacdn.net/tild3666-3631-4265-b639-356439656461/photo-1713259037743-.jpg">
<img alt="" class="yos-node__visual-img yos-node__visual-img--c4" src="https://static.tildacdn.net/tild3938-3335-4535-a431-396634356537/photo-1587365001066-.jpg">
</div>
<div class="yos-node__content">
<p class="yos-node__context" data-i18n="mark-context">Mark runs a laundry in Antibes. Crew walks by daily. No access to those spending thousands of euros per week.</p>
<h3 class="yos-node__h3">
<span data-i18n="mark-title-pre">ON-SHORE PARTNER:</span> <span data-i18n="mark-title" style="display:inline">The Presence Ecosystem</span><button aria-label="More info about The Presence Ecosystem" class="yos-info-trigger" data-i18n-tip="tip-mark-title" data-tip="&quot;The Presence Ecosystem&quot; is a hyper-localization protocol. We turn the entire coastline (from Antibes to Monaco) into a service zone for the fleet. Any business with a QR code becomes a legitimate node in our network." type="button">i</button>
</H3>

<div class="yos-anna-intro">
<p class="yos-anna-intro__p" data-i18n="mark-quote-1"><strong>"I'm a taxi driver. I stand at the port for hours, but crews choose aggregators because they don't know my name."</strong></p>
</div>

<div class="yos-feature" data-feature>
<p class="yos-feature__anim" data-i18n="mark-anim-1">[ Animation: QR Business Card slides onto the screen ]</p>
<p class="yos-feature__quote" data-i18n="mark-quote-2">"I'm a taxi driver. I stand at the port for hours, but crews choose aggregators because they don't know my name."</p>
<div class="yos-feature__body">
<h4 class="yos-feature__h4">
<span data-i18n="mark-feat-1-title-pre">QR Business Card:</span> <span data-i18n="mark-feat-1-title">I am on their map</span><button aria-label="More info about QR Business Card" class="yos-info-trigger" data-i18n-tip="tip-mark-feat-1" data-tip="The stewardess scans the sticker on your windshield. You are saved to their Social Graph with the tag &quot;Verified Transfer&quot;. On the next &quot;Taxi to airport&quot; request, the system offers you first, bypassing Uber. You are no longer waiting in a queue — you are part of their route." type="button">i</button>
</H4>
<p class="yos-feature__p" data-i18n="mark-feat-1-text">The stewardess scans the sticker on your windshield. You are saved to their Social Graph with the tag <strong>"Verified Transfer"</strong>. On the next <strong>"Taxi to airport"</strong> request, the system offers you first, <strong>bypassing Uber</strong>. You are no longer waiting in a queue — you are part of their route.</p>
</div>
</div>

<div class="yos-anna-intro">
<p class="yos-anna-intro__p" data-i18n="mark-quote-3">"I'm a florist. I don't know when the Captain's birthday is, and an hour before departure they ask for 'just pretty flowers'."</p>
</div>

<div class="yos-feature" data-feature>
<p class="yos-feature__anim" data-i18n="mark-anim-2">[ Animation: Event Trigger card slides onto the screen ]</p>
<p class="yos-feature__quote" data-i18n="mark-quote-4">"I'm a florist. I don't know when the Captain's birthday is, and an hour before departure they ask for 'just pretty flowers'."</p>
<div class="yos-feature__body">
<h4 class="yos-feature__h4">
<span data-i18n="mark-feat-2-title-pre">Event Trigger:</span> <span data-i18n="mark-feat-2-title">Intelligent Orders</span><button aria-label="More info about Event Trigger" class="yos-info-trigger" data-i18n-tip="tip-mark-feat-2" data-tip="The system sees in the yacht's dashboard a date — Captain's Birthday. It automatically pushes a notification: Order a bouquet. The Captain loves white roses, no allergies. You receive a precise brief instead of a panic in WhatsApp." type="button">i</button>
</H4>
<p class="yos-feature__p" data-i18n="mark-feat-2-text">The system sees in the yacht's dashboard a date — <strong>Captain's Birthday</strong>. It automatically pushes a notification: <strong>"Order a bouquet. The Captain loves white roses, no allergies."</strong> You receive a <strong>precise brief</strong> instead of a panic in WhatsApp.</p>
</div>
</div>

<div class="yos-anna-intro">
<p class="yos-anna-intro__p" data-i18n="mark-quote-5">"I'm a mechanic. I fix Ferraris on land, but I can't reach the yachts where they change €10,000 propellers."</p>
</div>

<div class="yos-feature" data-feature>
<p class="yos-feature__anim" data-i18n="mark-anim-3">[ Animation: B2B Portal card slides onto the screen ]</p>
<p class="yos-feature__quote" data-i18n="mark-quote-6">"I'm a mechanic. I fix Ferraris on land, but I can't reach the yachts where they change €10,000 propellers."</p>
<div class="yos-feature__body">
<h4 class="yos-feature__h4">
<span data-i18n="mark-feat-3-title-pre">B2B Portal:</span> <span data-i18n="mark-feat-3-title">Dock Access</span><button aria-label="More info about B2B Portal" class="yos-info-trigger" data-i18n-tip="tip-mark-feat-3" data-tip="You register as a &quot;Certified Service&quot;. When a tender breaks down, the system's geolocation shows you as the nearest available expert. The Captain hits &quot;Call&quot; — you receive prepayment for parts and marina access." type="button">i</button>
</H4>
<p class="yos-feature__p" data-i18n="mark-feat-3-text">You register as a <strong>"Certified Service"</strong>. When a tender breaks down, the system's geolocation shows you as the nearest available expert. The Captain hits <strong>"Call"</strong> — you receive <strong>prepayment for parts and marina access</strong>.</p>
</div>
</div>

<div class="yos-anna-intro">
<p class="yos-anna-intro__p" data-i18n="mark-quote-7">"I own a café. The season lasts 4 months. In October, my tables are empty, but the rent keeps ticking."</p>
</div>

<div class="yos-feature yos-feature--pulse" data-feature>
<p class="yos-feature__anim" data-i18n="mark-anim-4">[ Animation: Year-Round Flow card slides onto the screen. The camera ascends above the coastline ]</p>
<p class="yos-feature__quote" data-i18n="mark-quote-8">"I own a café. The season lasts 4 months. In October, my tables are empty, but the rent keeps ticking."</p>
<div class="yos-feature__body">
<h4 class="yos-feature__h4">
<span data-i18n="mark-feat-4-title-pre">Year-Round Flow:</span> <span data-i18n="mark-feat-4-title">Off-Record</span><button aria-label="More info about Year-Round Flow" class="yos-info-trigger" data-i18n-tip="tip-mark-feat-4" data-tip="When the fleet sails to the Caribbean, the port still hosts rotation crews, shore staff, and locals. Platform analytics highlight for you: &quot;Drop the business lunch price by 10%, offer a $YTC bonus.&quot; You fill tables with data, not hope." type="button">i</button>
</H4>
<p class="yos-feature__p" data-i18n="mark-feat-4-text">When the fleet sails to the Caribbean, the port still hosts <strong>rotation crews, shore staff, and locals</strong>. Platform analytics highlight for you: <strong>"Drop the business lunch price by 10%, offer a $YTC bonus."</strong> You fill tables with data, not hope.</p>
</div>
</div>

<div class="yos-node__impulse yos-node__impulse--anna">
<div class="yos-node__impulse-label">
<span data-i18n="mark-impulse-label">Network Gravity</span><button aria-label="More info about Network Gravity" class="yos-info-trigger" data-i18n-tip="tip-mark-impulse" data-tip="Animation: Camera ascends above the coastline. Thousands of dots (businesses) light up and connect into a single pulsating network. Any business on the shore is our partner. From the florist to the mechanic, from the taxi driver to the sommelier. When the crew needs rare cheese at 2 AM, the system doesn't search Google. It searches its own network. And finds you." type="button">i</button>
</div>
<p data-i18n="mark-impulse-text">Any business on the shore is our partner. From the florist to the mechanic, from the taxi driver to the sommelier. When the crew needs rare cheese at 2 AM, the system doesn't search Google. It searches its own network. <strong>And finds you.</strong></p>
</div>
</div>
</div>
</section>

<!-- ===== SCREEN 4: TRANSFORMATION ===== -->
<section aria-labelledby="yos-transform-h2" class="yos-section yos-transform" id="transform" data-section-name="Transformation">
<div class="yos-transform__header yos-reveal" data-state="hidden">
<p class="yos-transform__label" data-i18n="transform-label">Resolving Pain</p>
<h2 class="yos-transform__h2" id="yos-transform-h2">
<span data-i18n="transform-h2-line-1">FROM</span> <span class="yos-transform__h2-red" data-i18n="transform-h2-line-2">BURNOUT</span><br><span data-i18n="transform-h2-line-3">TO</span> <span class="yos-transform__h2-accent" data-i18n="transform-h2-line-4">DIGITAL DYNASTY</span>
</H2>
</div>
<div class="yos-transform__labels">
<span data-i18n="transform-label-before">WAS</span>
<span></span>
<span data-i18n="transform-label-after">BECAME</span>
</div>
<div class="yos-transform__table yos-reveal" data-state="hidden">
<div class="yos-tr-row">
<div class="yos-tr-row__before" data-i18n="transform-row-1-before">"My contract disappeared. The boat erased me from memory."</div>
<div aria-hidden="true" class="yos-tr-row__sep"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 20 20"><path d="M4 10h12M12 5l5 5-5 5"></path></svg></div>
<div class="yos-tr-row__after" data-i18n="transform-row-1-after"><strong>Ship's Log:</strong> Your note gets indexed. Your work doesn't disappear. "Connector" badge.</div>
</div>
<div class="yos-tr-row">
<div class="yos-tr-row__before" data-i18n="transform-row-2-before">"Added the sailor to Telegram, the chat died."</div>
<div aria-hidden="true" class="yos-tr-row__sep"><svg fill="none" stroke="currentColor" stroke-width="a" viewBox="0 0 20 20"><path d="M4 10h12M12 5l5 5-5 5"></path></svg></div>
<div class="yos-tr-row__after" data-i18n="transform-row-2-after"><strong>Social Graph:</strong> Contact stays in the graph. Algorithm outputs: "Trust level high."</div>
</div>
<div class="yos-tr-row">
<div class="yos-tr-row__before" data-i18n="transform-row-3-before">"I can work with Garmin, but my CV just says 'Stew'."</div>
<div aria-hidden="true" class="yos-tr-row__sep"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 20 20"><path d="M4 10h12M12 5l5 5-5 5"></path></svg></div>
<div class="yos-tr-row__after" data-i18n="transform-row-3-after"><strong>Sea-CV AI:</strong> "Fixed the generator" → "Technical troubleshooting". Verified. Owners find you.</div>
</div>
<div class="yos-tr-row">
<div class="yos-tr-row__before" data-i18n="transform-row-4-before">"I taught her everything, she forgot me."</div>
<div aria-hidden="true" class="yos-tr-row__sep"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 20 20"><path d="M4 10h12M12 5l5 5-5 5"></path></svg></div>
<div class="yos-tr-row__after" data-i18n="transform-row-4-after"><strong>My Mentees:</strong> She grew to Senior. System credits you <strong>lifetime percentage</strong>.</div>
</div>
<div class="yos-tr-row">
<div class="yos-tr-row__before" data-i18n="transform-row-5-before">"Burned out. Resilience 34/100. Just deal with it."</div>
<div aria-hidden="true" class="yos-tr-row__sep"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 20 20"><path d="M4 10h12M12 5l5 5-5 5"></path></svg></div>
<div class="yos-tr-row__after" data-i18n="transform-row-5-after"><strong>Well-being Pulse:</strong> System prevented overload. Light contract. You're protected.</div>
</div>
<div class="yos-tr-row">
<div class="yos-tr-row__before" data-i18n="transform-row-6-before">"Experience exists, but it's worthless."</div>
<div aria-hidden="true" class="yos-tr-row__sep"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 20 20"><path d="M4 10h12M12 5l5 5-5 5"></path></svg></div>
<div class="yos-tr-row__after" data-i18n="transform-row-6-after">Rating 34 → <strong>84</strong>. At 84—captains see you first.</div>
</div>
</div>
<p class="yos-transform__footer yos-reveal" data-i18n="transform-footer" data-state="hidden">Reputation is a number. Experience is verified by work, not paper. Self-care brings better ratings and better contracts.</p>
</section>

<!-- ===== SCREEN 5: SYSTEM ===== -->
<section aria-labelledby="yos-system-h2" class="yos-section yos-system" id="system" data-section-name="Trust Architecture">
<div class="yos-system__header yos-reveal" data-state="hidden">
<p class="yos-system__label" data-i18n="system-label">Trust Architecture</p>
<h2 class="yos-system__h2" id="yos-system-h2"><span data-i18n="system-h2">HOW</span> <span data-i18n="system-h2-accent" style="color: var(--accent-gold);">THE SYSTEM</span> <span data-i18n="system-h2-rest">BREATHES</span></H2>
</div>
<div class="yos-pillars yos-reveal" data-state="hidden">
<div class="yos-pillar yos-pillar--featured">
<img alt="" aria-hidden="true" class="yos-pillar__bg" src="https://static.tildacdn.net/tild3163-6538-4664-b562-336536396263/photo-1644088379091-.jpg">
<div class="yos-pillar__overlay">
<h3 class="yos-pillar__h3" data-i18n="pillar-1-title">Trust Index v3.0</h3>
<p class="yos-pillar__text" data-i18n="pillar-1-text">Math that predicts burnout before someone wants to quit. Patent-protected.</p>
</div>
</div>
<div class="yos-pillar yos-pillar--featured">
<img alt="" aria-hidden="true" class="yos-pillar__bg" src="https://static.tildacdn.net/tild3163-6538-4664-b562-336536396263/photo-1644088379091-.jpg">
<div class="yos-pillar__overlay">
<h3 class="yos-pillar__h3" data-i18n="pillar-2-title">Well-being Data</h3>
<p class="yos-pillar__text" data-i18n="pillar-2-text">Insurers pay for anonymous industry health statistics. Calm crew = cheaper policies.</p>
</div>
</div>
<div class="yos-pillar yos-pillar--featured">
<img alt="" aria-hidden="true" class="yos-pillar__bg" src="https://static.tildacdn.net/tild3164-6131-4430-a466-363832613934/photo-1640161704729-.jpg">
<div class="yos-pillar__overlay">
<h3 class="yos-pillar__h3" data-i18n="pillar-3-title">Token Economics</h3>
<p class="yos-pillar__text" data-i18n="pillar-3-text">Platform's internal currency. No bank fees for user-to-user payments.</p>
</div>
</div>
<div class="yos-pillar yos-pillar--featured">
<img alt="" aria-hidden="true" class="yos-pillar__bg" src="https://static.tildacdn.net/tild3239-6261-4738-b363-393938666561/photo-1560472355-536.jpg">
<div class="yos-pillar__overlay">
<h3 class="yos-pillar__h3" data-i18n="pillar-4-title">My Documents</h3>
<p class="yos-pillar__text" data-i18n="pillar-4-text">Digital certificate wallet. STCW, ENG1, passports—always current and visible to captains.</p>
</div>
</div>
<div class="yos-pillar yos-pillar--featured">
<img alt="" aria-hidden="true" class="yos-pillar__bg" src="https://static.tildacdn.net/tild3734-3630-4161-b566-353762653034/photo-1720708232403-.jpg">
<div class="yos-pillar__overlay">
<h3 class="yos-pillar__h3" data-i18n="pillar-5-title">My Achievements</h3>
<p class="yos-pillar__text" data-i18n="pillar-5-text">Skills map with badges. More verified skills = higher in crew search results.</p>
</div>
</div>
<div class="yos-pillar yos-pillar--featured">
<img alt="" aria-hidden="true" class="yos-pillar__bg" src="https://static.tildacdn.net/tild3334-3433-4338-b361-656432326233/photo-1662974770404-.jpg">
<div class="yos-pillar__overlay">
<h3 class="yos-pillar__h3" data-i18n="pillar-6-title">Chats and News</h3>
<p class="yos-pillar__text" data-i18n="pillar-6-text">AI response templates and Scam Alerts. Feed warns of visa regime changes.</p>
</div>
</div>
</div>
<div class="yos-nervous yos-reveal" data-state="hidden">
<h3 class="yos-nervous__h3" data-i18n="nervous-h3">Ocean's Nervous System</h3>
<p class="yos-nervous__lead" data-i18n="nervous-lead">When the first officer confirms task completion, the system sends impulses in six directions simultaneously. In 0.4 seconds, one click ignites the entire network.</p>
<div aria-label="Pulse chain" class="yos-chain">
<span class="yos-chain__step" data-i18n="chain-step-1">Gig Exchange</span>
<span aria-hidden="true" class="yos-chain__arrow">→</span>
<span class="yos-chain__step" data-i18n="chain-step-2">Token Engine</span>
<span aria-hidden="true" class="yos-chain__arrow">→</span>
<span class="yos-chain__step" data-i18n="chain-step-3">Trust Score ↑</span>
<span aria-hidden="true" class="yos-chain__arrow">→</span>
<span class="yos-chain__step" data-i18n="chain-step-4">Mentee Module</span>
<span aria-hidden="true" class="yos-chain__arrow">→</span>
<span class="yos-chain__step" data-i18n="chain-step-5">Ship's Log</span>
<span aria-hidden="true" class="yos-chain__arrow">→</span>
<span class="yos-chain__step" data-i18n="chain-step-6">Data Lake</span>
</div>
<p class="yos-nervous__close" data-i18n="nervous-close">One click—machine gears move. Every node action instantly changes all others.</p>
</div>
<div class="yos-alchemy yos-reveal" data-state="hidden">
<h3 class="yos-alchemy__h3" data-i18n="alchemy-h3">Data Alchemy</h3>
<p data-i18n="alchemy-p1">We sell <strong>predictive risk analytics</strong>, not people data.</p>
<p data-i18n="alchemy-p2">Fleets with active Well-being Pulse save up to <strong>40%</strong> on insurance through incident reduction.</p>
</div>
</section>

<!-- ===== SCREEN 6: ENTRY POINT ===== -->
<section aria-labelledby="yos-entry-h2" class="yos-section yos-entry" id="entry" data-section-name="Entry Point">
<div class="yos-entry__header yos-reveal" data-state="hidden">
<p class="yos-entry__label" data-i18n="entry-label">Entry Point</p>
<h2 class="yos-entry__h2" id="yos-entry-h2">
<span data-i18n="entry-h2-line-1">YOUR ENTRY</span><br><span data-i18n="entry-h2-line-2">POINT</span> <span class="yos-entry__h2-accent" data-i18n="entry-h2-line-3">INTO THE SYSTEM</span>
</H2>
<p class="yos-entry__manifesto" data-i18n="entry-manifesto">
      We don't match resumes to job posts. We close the circle of gratitude.<br/><br/>
<strong>A Professional's experience</strong> becomes a map for a Newcomer. <strong>A Guest's peace of mind</strong> depends on Professional health. <strong>Business profit</strong> feeds the system that funds Newcomer education.
    </p>
</div>
<div class="yos-entry__cta-grid yos-reveal" data-state="hidden">
<a class="yos-entry__btn" href="https://startinyachting.com/studymygayd" data-modal-open="steward-modal"><img alt="" class="yos-entry__btn-img" src="https://static.tildacdn.net/tild6239-3930-4638-a264-356138356536/photo-1531159944511-.jpg">
<div class="yos-entry__btn-body">
    <span class="yos-entry__btn-label" data-i18n="entry-btn-1-label">I WANT TO BECOME A STEWARD</span>
    <span class="yos-entry__btn-sub" data-i18n="entry-btn-1-sub">Start Training →</span>
</div></a>
<a class="yos-entry__btn" href="https://startinyachting.com/forcaptain" data-modal-open="captain-modal">
<img alt="" class="yos-entry__btn-img" src="https://static.tildacdn.net/tild3731-6233-4361-a637-356235643735/photo-1763736809655-.jpg">
<div class="yos-entry__btn-body">
<span class="yos-entry__btn-label" data-i18n="entry-btn-2-label">I Manage a Fleet</span>
<span class="yos-entry__btn-sub" data-i18n="entry-btn-2-sub">B2B Dashboard Demo →</span>
</div>
</a>
<a class="yos-entry__btn" href="https://startinyachting.com/withteam" data-modal-open="team-modal">
<img alt="" class="yos-entry__btn-img" src="https://static.tildacdn.net/tild3833-3830-4538-b033-303534613363/photo-1522071820081-.jpg">
<div class="yos-entry__btn-body">
<span class="yos-entry__btn-label" data-i18n="entry-btn-3-label">I WANT TO JOIN YOUR TEAM</span>
<span class="yos-entry__btn-sub" data-i18n="entry-btn-3-sub">Apply →</span>
</div>
</a>
<a class="yos-entry__btn" href="https://startinyachting.com/forinestor" data-modal-open="investor-modal">
<img alt="" class="yos-entry__btn-img" src="https://static.tildacdn.net/tild6664-6236-4166-b133-613636336263/photo-1569263979104-.jpg">
<div class="yos-entry__btn-body">
<span class="yos-entry__btn-label" data-i18n="entry-btn-4-label">I'm an Investor</span>
<span class="yos-entry__btn-sub" data-i18n="entry-btn-4-sub">Pitch Deck & CIPA →</span>
</div>
</a>
<a class="yos-entry__btn yos-entry__btn--full" href="https://startinyachting.com/50faqmainhage" data-modal-open="faq-modal">
<img alt="" class="yos-entry__btn-img" src="https://static.tildacdn.net/tild3264-6364-4137-b731-383831346339/photo-1784095578936-.jpg">
<div class="yos-entry__btn-body">
<span class="yos-entry__btn-label" data-i18n="entry-btn-5-label">FAQ</span>
<span class="yos-entry__btn-sub" data-i18n="entry-btn-5-sub">Frequently Asked Questions →</span>
</div>
</a>
</div>
<p class="yos-entry__wave yos-reveal" data-i18n="entry-wave" data-state="hidden">One click launches a wave across the entire ocean.</p>
</section>

<!-- ===== FOOTER ===== -->
<footer class="yos-footer" role="contentinfo">
<div class="yos-footer__brand">
<div class="yos-footer__name"><span data-i18n="footer-name">Yacht</span>OS</div>
<div class="yos-footer__powered" data-i18n="footer-powered">powered by Startinyachting</div>
</div>
<div class="yos-footer__meta">
<div data-i18n="footer-meta-1">Copyright: Maly A.A. Sendler R.V. Malaya E.M. · </div>
<div data-i18n="footer-meta-2">Parent company — Gibraltar (DLT License)</div>
<div data-i18n="footer-meta-3">Material access — after CIPA signature</div>
</div>
</footer>



<!-- ===== STEWARD MODAL ===== -->
<div aria-hidden="true" aria-modal="true" class="yos-modal" id="steward-modal" role="dialog">
<div class="yos-modal__backdrop" data-modal-close="steward-modal"></div>
<div class="yos-modal__dialog" role="document">
<button aria-label="Close" class="yos-modal__close" data-modal-close="steward-modal" type="button">
<svg fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-width="2" viewBox="0 0 20 20" width="20"><path d="M5 5l10 10M15 5L5 15"></path></svg>
</button>
<div class="yos-modal__content">
<iframe class="yos-modal__iframe" data-src="https://startinyachting.com/studymygayd" frameborder="0" src="about:blank"></iframe>
</div>
</div>
</div>

<!-- ===== CAPTAIN MODAL ===== -->
<div aria-hidden="true" aria-modal="true" class="yos-modal" id="captain-modal" role="dialog">
<div class="yos-modal__backdrop" data-modal-close="captain-modal"></div>
<div class="yos-modal__dialog" role="document">
<button aria-label="Close" class="yos-modal__close" data-modal-close="captain-modal" type="button">
<svg fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-width="2" viewBox="0 0 20 20" width="20"><path d="M5 5l10 10M15 5L5 15"></path></svg>
</button>
<div class="yos-modal__content">
<iframe class="yos-modal__iframe" data-src="https://startinyachting.com/forcaptain" frameborder="0" src="about:blank"></iframe>
</div>
</div>
</div>

<!-- ===== JOIN TEAM MODAL ===== -->
<div aria-hidden="true" aria-modal="true" class="yos-modal" id="team-modal" role="dialog">
<div class="yos-modal__backdrop" data-modal-close="team-modal"></div>
<div class="yos-modal__dialog" role="document">
<button aria-label="Close" class="yos-modal__close" data-modal-close="team-modal" type="button">
<svg fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-width="2" viewBox="0 0 20 20" width="20"><path d="M5 5l10 10M15 5L5 15"></path></svg>
</button>
<div class="yos-modal__content">
<iframe class="yos-modal__iframe" data-src="https://startinyachting.com/withteam" frameborder="0" src="about:blank"></iframe>
</div>
</div>
</div>

<!-- ===== INVESTOR MODAL ===== -->
<div aria-hidden="true" aria-modal="true" class="yos-modal" id="investor-modal" role="dialog">
<div class="yos-modal__backdrop" data-modal-close="investor-modal"></div>
<div class="yos-modal__dialog" role="document">
<button aria-label="Close" class="yos-modal__close" data-modal-close="investor-modal" type="button">
<svg fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-width="2" viewBox="0 0 20 20" width="20"><path d="M5 5l10 10M15 5L5 15"></path></svg>
</button>
<div class="yos-modal__content">
<iframe class="yos-modal__iframe" data-src="https://startinyachting.com/forinestor" frameborder="0" src="about:blank"></iframe>
</div>
</div>
</div>

<!-- ===== FAQ MODAL ===== -->
<div aria-hidden="true" aria-modal="true" class="yos-modal" id="faq-modal" role="dialog">
<div class="yos-modal__backdrop" data-modal-close="faq-modal"></div>
<div class="yos-modal__dialog" role="document">
<button aria-label="Close" class="yos-modal__close" data-modal-close="faq-modal" type="button">
<svg fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-width="2" viewBox="0 0 20 20" width="20"><path d="M5 5l10 10M15 5L5 15"></path></svg>
</button>
<div class="yos-modal__content">
<iframe class="yos-modal__iframe" data-src="https://startinyachting.com/50faqmainhage" frameborder="0" src="about:blank"></iframe>
</div>
</div>
</div>

<script src="https://cdn.jsdelivr.net/gh/AlexAlexM87/yachtos-files-lang@v2.1/yachtos_i18n_data.js" id="yos-i18n-loader"></script>
<script>
(function() {
  'use strict';
  
  var LANG_ORDER = ['ru', 'de', 'es', 'fr', 'en'];
  var LANG_LABELS = { ru: 'RU', en: 'EN', de: 'DE', es: 'ES', fr: 'FR' };
  var STORAGE_KEY = 'yachtosLang';
  var DICT_RETRY_MAX = 50;
  var DICT_RETRY_DELAY = 200;
  
  var memStorage = {};
  var storageAvailable = (function() {
    try {
      var test = '__test__';
      window.localStorage.setItem(test, test);
      window.localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  })();
  
  function getStored(key) {
    if (storageAvailable) {
      try { return window.localStorage.getItem(key); } catch (e) { return null; }
    }
    return memStorage[key] || null;
  }
  
  function setStored(key, val) {
    if (storageAvailable) {
      try { window.localStorage.setItem(key, val); return; } catch (e) {}
    }
    memStorage[key] = String(val);
  }
  
  var currentLang = 'en';
  try {
    var saved = getStored(STORAGE_KEY);
    if (saved) {
      saved = String(saved).toLowerCase();
      if (LANG_ORDER.indexOf(saved) !== -1) currentLang = saved;
    }
  } catch (e) { currentLang = 'en'; }
  
  var burger = document.getElementById('yos-nav-burger');
  var mobileMenu = document.getElementById('yos-nav-mobile');
  
  function closeMobileMenu() {
    if (burger && mobileMenu) {
      burger.classList.remove('is-open');
      mobileMenu.classList.remove('is-open');
      document.body.style.overflow = '';
      burger.setAttribute('aria-label', 'Open menu');
    }
  }
  
  function toggleMobileMenu() {
    if (!burger || !mobileMenu) return;
    var isOpen = burger.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    burger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  }
  
  if (burger) {
    burger.addEventListener('click', toggleMobileMenu);
  }
  
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', closeMobileMenu);
    });
  }
  
  document.addEventListener('click', function(e) {
    if (!mobileMenu || !mobileMenu.classList.contains('is-open')) return;
    if (mobileMenu.contains(e.target) || (burger && burger.contains(e.target))) return;
    closeMobileMenu();
  });
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('is-open')) {
      closeMobileMenu();
    }
  });
  
  var langToggle = document.getElementById('yos-lang-toggle');
  
  function syncLanguageFields() {
    var fields = document.querySelectorAll('.yos-modal__language');
    for (var i = 0; i < fields.length; i++) {
      fields[i].value = currentLang;
    }
  }
  
  if (langToggle) {
    langToggle.textContent = LANG_LABELS[currentLang] || currentLang.toUpperCase();
    langToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var idx = LANG_ORDER.indexOf(currentLang);
      currentLang = LANG_ORDER[(idx + 1) % LANG_ORDER.length];
      setStored(STORAGE_KEY, currentLang);
      langToggle.textContent = LANG_LABELS[currentLang] || currentLang.toUpperCase();
      dictRetries = 0;
      updateLanguage();
      syncLanguageFields();
    });
  }
  
  var dictRetries = 0;
  
  function applyTranslations(dict) {
    var elements = document.querySelectorAll('[data-i18n]');
    var missingKeys = [];
    var appliedCount = 0;
    
    elements.forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (!key) return;
      
      var val = dict[key];
      
      if (typeof val === 'undefined' || val === null) {
        missingKeys.push(key);
        return;
      }
      
      var isHtml = /<[a-z][\s\S]*>/i.test(val);
      try {
        if (isHtml) {
          var temp = document.createElement('div');
          temp.innerHTML = val;
          while (el.firstChild) {
            el.removeChild(el.firstChild);
          }
          while (temp.firstChild) {
            el.appendChild(temp.firstChild);
          }
        } else {
          el.textContent = val;
        }
        appliedCount++;
      } catch (e) {
        if (typeof console !== 'undefined' && console.error) {
          console.error('[YachtOS i18n] Error applying translation for key "' + key + '":', e);
        }
      }
    });
    
    if (typeof console !== 'undefined' && console.log) {
      // ===== TOOLTIP TRANSLATIONS (data-i18n-tip) =====
      var tipEls = document.querySelectorAll('[data-i18n-tip]');
      var missingTipKeys = [];
      var appliedTipCount = 0;
      tipEls.forEach(function(tEl) {
        var tKey = tEl.getAttribute('data-i18n-tip');
        if (!tKey) return;
        var tVal = dict[tKey];
        if (typeof tVal === 'undefined' || tVal === null) {
          missingTipKeys.push(tKey);
          return;
        }
        try { tEl.setAttribute('data-tip', tVal); appliedTipCount++; } catch(ee) {}
      });
      console.log('[YachtOS i18n] Applied ' + appliedCount + ' translations + ' + appliedTipCount + ' tooltips for "' + currentLang + '"');
      if (missingTipKeys.length > 0 && typeof console !== 'undefined' && console.warn) {
        console.warn('[YachtOS i18n] Missing tip keys in "' + currentLang + '":', missingTipKeys);
      }
    }
    if (missingKeys.length > 0 && typeof console !== 'undefined' && console.warn) {
      console.warn('[YachtOS i18n] Missing keys in "' + currentLang + '":', missingKeys);
    }
  }
  
  function updateLanguage() {
    if (window.__i18nLoadFailed) {
      if (typeof console !== 'undefined' && console.warn) {
        console.warn('[YachtOS i18n] External script failed to load (network/CORS). Using original English text.');
      }
      return;
    }
    if (typeof window.i18n === 'undefined') {
      if (dictRetries < DICT_RETRY_MAX) {
        dictRetries++;
        setTimeout(updateLanguage, DICT_RETRY_DELAY);
      } else if (typeof console !== 'undefined' && console.error) {
        console.error('[YachtOS i18n] Dictionary failed to load after ' + DICT_RETRY_MAX + ' attempts. Falling back to original English text.');
      }
      return;
    }
    
    var dict = window.i18n[currentLang];
    
    if (!dict) {
      if (typeof console !== 'undefined' && console.warn) {
        console.warn('[YachtOS i18n] Dictionary not found for: ' + currentLang + '. Available:', Object.keys(window.i18n || {}));
      }
      return;
    }
    
    if (typeof console !== 'undefined' && console.log) {
      console.log('[YachtOS i18n] Applying translations for language: ' + currentLang);
    }
    applyTranslations(dict);
  }
  
  if (currentLang !== 'en') {
    updateLanguage();
  }
  syncLanguageFields();
  
  var worldCards = document.querySelectorAll('.yos-world-card');
  worldCards.forEach(function(card) {
    card.addEventListener('click', function(e) {
      if (window.matchMedia('(hover: hover)').matches) return;
      var wasActive = card.classList.contains('is-active');
      worldCards.forEach(function(c) { c.classList.remove('is-active'); });
      if (!wasActive) card.classList.add('is-active');
    });
  });
  
  var reveals = document.querySelectorAll('.yos-reveal[data-state="hidden"]');
  
  function revealElement(el) {
    el.setAttribute('data-state', 'visible');
  }
  
  function isInViewport(el) {
    var rect = el.getBoundingClientRect();
    var windowH = window.innerHeight || document.documentElement.clientHeight;
    return rect.top < windowH && rect.bottom > 0;
  }
  
  function checkReveals() {
    reveals.forEach(function(el) {
      if (el.getAttribute('data-state') === 'hidden' && isInViewport(el)) {
        revealElement(el);
      }
    });
  }
  
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          revealElement(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px 0px 0px' });
    reveals.forEach(function(el) { io.observe(el); });
    
    var scrollCheckTicking = false;
    window.addEventListener('scroll', function() {
      if (!scrollCheckTicking) {
        window.requestAnimationFrame(function() {
          checkReveals();
          scrollCheckTicking = false;
        });
        scrollCheckTicking = true;
      }
    }, { passive: true });
    
    setTimeout(function() {
      checkReveals();
    }, 3000);
  } else {
    reveals.forEach(function(el) { revealElement(el); });
  }
  
  var nav = document.querySelector('.yos-nav');
  var ticking = false;
  
  function onScroll() {
    var scrollY = window.scrollY || window.pageYOffset || 0;
    if (nav) nav.classList.toggle('is-scrolled', scrollY > 60);
    ticking = false;
  }
  
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });
  
  onScroll();
  
  var i18nLoadTimeout = setTimeout(function() {
    if (typeof window.i18n === 'undefined' && !window.__i18nLoadFailed) {
      window.__i18nLoadFailed = true;
      if (typeof console !== 'undefined' && console.warn) {
        console.warn('[YachtOS i18n] Dictionary failed to load within 8s (Safari/Yandex CORS or network). Using original English text.');
      }
    }
  }, 8000);

  var yosI18nLoader = document.getElementById('yos-i18n-loader');
  if (yosI18nLoader) {
    yosI18nLoader.addEventListener('error', function() {
      window.__i18nLoadFailed = true;
      clearTimeout(i18nLoadTimeout);
      if (typeof console !== 'undefined' && console.warn) {
        console.warn('[YachtOS i18n] External script failed to load (addEventListener error).');
      }
    });
    yosI18nLoader.addEventListener('load', function() {
      clearTimeout(i18nLoadTimeout);
      if (typeof console !== 'undefined' && console.log) {
        console.log('[YachtOS i18n] Dictionary loaded successfully');
      }
    });
  }

  var modalTriggers = document.querySelectorAll('[data-modal-open]');
  var lastFocusedElement = null;

  function getCurrentLang() {
    try {
      return localStorage.getItem('yachtosLang') || 'en';
    } catch(e) {
      return 'en';
    }
  }

  function setIframeLang(iframe, lang) {
    try {
      iframe.contentWindow.postMessage({ type: 'yachtos-lang', lang: lang }, '*');
    } catch(e) {}
  }

  function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (!modal) return;
    lastFocusedElement = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.documentElement.classList.add('has-modal-open');
    document.body.classList.add('has-modal-open');

    var iframe = modal.querySelector('.yos-modal__iframe');
    if (iframe) {
      var src = iframe.getAttribute('data-src') || iframe.getAttribute('src');
      if (src && src !== 'about:blank') {
        var lang = getCurrentLang();
        var sep = src.indexOf('?') > -1 ? '&' : '?';
        iframe.src = src + sep + 'lang=' + lang;
        iframe.addEventListener('load', function onLoad() {
          iframe.removeEventListener('load', onLoad);
          setIframeLang(iframe, lang);
        });
      }
    }

    var closeBtn = modal.querySelector('.yos-modal__close');
    if (closeBtn) setTimeout(function() { closeBtn.focus(); }, 100);
  }

  function closeModalById(modalId) {
    var modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');

    var iframe = modal.querySelector('.yos-modal__iframe');
    if (iframe) {
      iframe.src = 'about:blank';
    }

    if (!document.querySelector('.yos-modal.is-open')) {
      document.documentElement.classList.remove('has-modal-open');
      document.body.classList.remove('has-modal-open');
    }
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  for (var mt = 0; mt < modalTriggers.length; mt++) {
    modalTriggers[mt].addEventListener('click', function(e) {
      e.preventDefault();
      var modalId = this.getAttribute('data-modal-open');
      if (modalId) openModal(modalId);
    });
  }

  document.addEventListener('click', function(e) {
    var closeTarget = e.target.closest('[data-modal-close]');
    if (closeTarget) {
      var modalId = closeTarget.getAttribute('data-modal-close');
      if (modalId) closeModalById(modalId);
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      var openModals = document.querySelectorAll('.yos-modal.is-open');
      for (var m = 0; m < openModals.length; m++) {
        closeModalById(openModals[m].id);
      }
    }
  });

  // ===== ANNA + MAXIM + IVAN + MARK FEATURE CARDS: slide-in animation on scroll =====
  var allFeatures = document.querySelectorAll('#node-anna [data-feature], #node-maxim [data-feature], #node-ivan [data-feature], #node-mark [data-feature]');
  if (allFeatures.length && 'IntersectionObserver' in window) {
    var featureIO = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          featureIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    allFeatures.forEach(function(el) { featureIO.observe(el); });
  } else {
    allFeatures.forEach(function(el) { el.classList.add('is-visible'); });
  }

  // ===== INFO TOOLTIPS: tap to toggle on touch =====
  var infoTriggers = document.querySelectorAll('.yos-info-trigger');
  function positionTip(trigger) {
    if (!window.matchMedia('(max-width: 640px)').matches) return;
    var rect = trigger.getBoundingClientRect();
    var tipText = trigger.getAttribute('data-tip') || '';
    var approxW = Math.min(320, window.innerWidth - 32);
    var approxH = Math.max(80, Math.ceil(tipText.length / 40) * 20 + 60);
    var spaceAbove = rect.top;
    var spaceBelow = window.innerHeight - rect.bottom;
    if (spaceAbove < approxH && spaceBelow > spaceAbove) {
      trigger.classList.add('is-tip-flip');
    } else {
      trigger.classList.remove('is-tip-flip');
    }
  }
  infoTriggers.forEach(function(trigger) {
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var isOpen = trigger.classList.contains('is-tip-open');
      document.querySelectorAll('.yos-info-trigger.is-tip-open').forEach(function(t) {
        if (t !== trigger) t.classList.remove('is-tip-open');
      });
      if (!isOpen) {
        positionTip(trigger);
        trigger.classList.add('is-tip-open');
      }
    });
    trigger.addEventListener('mouseenter', function() { positionTip(trigger); });
    trigger.addEventListener('focus', function() { positionTip(trigger); });
  });
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.yos-info-trigger')) {
      document.querySelectorAll('.yos-info-trigger.is-tip-open').forEach(function(t) {
        t.classList.remove('is-tip-open');
      });
    }
  });
  var lastTipResize = 0;
  window.addEventListener('resize', function() {
    var now = Date.now();
    if (now - lastTipResize < 150) return;
    lastTipResize = now;
    document.querySelectorAll('.yos-info-trigger.is-tip-open').forEach(function(t) {
      positionTip(t);
    });
  });
})();
</script>
</body>
</html>
