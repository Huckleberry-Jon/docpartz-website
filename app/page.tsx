'use client';

import { FormEvent, useState } from 'react';

const specialties = ['Engine & Drivetrain', 'Body & Collision', 'Electrical', 'Heavy-Duty & Fleet', 'Performance', 'Other'];
const repFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSct0KoTNzMRKQefZorcdMPujSK17oKatmad8gcSh_AGQ8ZYhw/formResponse';

function Mark() {
  return <span className="mark" aria-hidden="true"><i>DP</i></span>;
}

export default function Home() {
  const [repSent, setRepSent] = useState(false);
  const [repSending, setRepSending] = useState(false);
  const [repError, setRepError] = useState(false);
  const [updateSent, setUpdateSent] = useState(false);

  async function submitRep(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const googleData = new URLSearchParams({
      'entry.828196774': String(data.get('name') ?? ''),
      'entry.1859909407': String(data.get('email') ?? ''),
      'entry.257469089': String(data.get('phone') ?? ''),
      'entry.785943603': String(data.get('company') ?? ''),
      'entry.2119522505': String(data.get('specialty') ?? ''),
      'entry.1198560176': String(data.get('area') ?? ''),
    });

    setRepSending(true);
    setRepError(false);

    try {
      await fetch(repFormUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: googleData.toString(),
      });
      setRepSent(true);
      form.reset();
    } catch {
      setRepError(true);
    } finally {
      setRepSending(false);
    }
  }

  function submitUpdates(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setUpdateSent(true);
    event.currentTarget.reset();
  }

  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="DocPartz home"><Mark /><span>Doc<span>Partz</span></span></a>
        <a className="nav-cta" href="#rep-signup">Become a Parts Rep</a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Coming Soon</div>
          <h1>The future of parts<br /><em>starts here.</em></h1>
          <p>DocPartz is building a smarter, more connected parts network—bringing trusted parts professionals and the people who need them together, faster.</p>
          <div className="hero-actions">
            <a className="button primary" href="#rep-signup">Sign Up to Be a Parts Rep <b>→</b></a>
            <a className="button ghost" href="#updates">Get Launch Updates</a>
          </div>
          <div className="trust"><span className="avatars"><i>EM</i><i>JR</i><i>KL</i></span><span><strong>Built for the people who know parts.</strong><br />Join our founding network.</span></div>
        </div>
        <div className="hero-art" aria-label="A connected network for every kind of part">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="core"><Mark /><strong>Parts, connected.</strong><small>One smarter network</small></div>
          <div className="node node-a"><span>01</span>Automotive</div>
          <div className="node node-b"><span>02</span>Industrial</div>
          <div className="node node-c"><span>03</span>Specialty</div>
          <div className="glow" />
        </div>
      </section>

      <section className="promise shell">
        <p>ONE NETWORK. REAL EXPERTISE.</p>
        <div className="promise-grid">
          <h2>A better way to find<br />the right part.</h2>
          <p>We&apos;re creating a nationwide network where real parts expertise meets modern technology. Whether it rolls, runs, lifts, hauls, or powers your work—DocPartz is where the search will start.</p>
        </div>
        <div className="feature-grid">
          <article><span>01</span><h3>Trusted expertise</h3><p>Connect with knowledgeable parts reps who understand the equipment and the urgency.</p></article>
          <article><span>02</span><h3>More ways to source</h3><p>One growing network across specialties, suppliers, and service areas.</p></article>
          <article><span>03</span><h3>Built for speed</h3><p>Less searching. Better connections. The right part, without the runaround.</p></article>
        </div>
      </section>

      <section className="rep-section" id="rep-signup">
        <div className="shell rep-grid">
          <div className="rep-copy">
            <div className="eyebrow"><span /> Founding Rep Network</div>
            <h2>Know parts?<br /><em>Let&apos;s build this.</em></h2>
            <p>We&apos;re inviting experienced parts professionals, suppliers, and specialists to help shape the DocPartz network from day one.</p>
            <ul><li><b>✓</b> Early access to the platform</li><li><b>✓</b> Founding rep recognition</li><li><b>✓</b> Help shape the tools you need</li></ul>
          </div>
          <div className="form-card">
            <div className="form-heading"><span>REP INTEREST FORM</span><b>Be first in line.</b><p>Tell us a little about you and your parts expertise.</p></div>
            {repSent ? <div className="success" role="status"><Mark /><h3>You&apos;re on the list.</h3><p>Thanks for raising your hand. We&apos;ll be in touch as the founding DocPartz rep network takes shape.</p><button onClick={() => setRepSent(false)}>Submit another response</button></div> :
            <form onSubmit={submitRep}>
              <div className="fields two"><label>Full name<input name="name" placeholder="Your name" autoComplete="name" required /></label><label>Email address<input name="email" type="email" placeholder="you@company.com" autoComplete="email" required /></label></div>
              <div className="fields two"><label>Phone number<input name="phone" type="tel" placeholder="(555) 000-0000" autoComplete="tel" /></label><label>Company<input name="company" placeholder="Company name" autoComplete="organization" /></label></div>
              <div className="fields two"><label>Parts specialty<select name="specialty" defaultValue="" required><option value="" disabled>Select a specialty</option>{specialties.map(item => <option key={item}>{item}</option>)}</select></label><label>Service area<input name="area" placeholder="City, state, or region" required /></label></div>
              <button className="submit" type="submit" disabled={repSending}>{repSending ? 'Sending…' : <>Sign Up to Be a Parts Rep <span>→</span></>}</button>
              {repError && <small role="alert">We couldn&apos;t send that signup. Please try again.</small>}
              <small>By submitting, you agree to receive DocPartz launch and rep-network updates.</small>
            </form>}
          </div>
        </div>
      </section>

      <section className="updates shell" id="updates">
        <div><span>STAY IN THE LOOP</span><h2>Not a parts rep?<br />Follow the build.</h2></div>
        <div className="update-form-wrap"><p>Get occasional progress notes and be among the first to know when DocPartz goes live.</p>{updateSent ? <div className="update-success" role="status">✓ You&apos;re on the launch list.</div> : <form className="update-form" onSubmit={submitUpdates}><label className="sr-only" htmlFor="launch-email">Email address</label><input id="launch-email" name="email" type="email" placeholder="Enter your email address" autoComplete="email" required /><button type="submit">Get Launch Updates →</button></form>}</div>
      </section>

      <footer><div className="shell footer-inner"><a className="brand" href="#top"><Mark /><span>Doc<span>Partz</span></span></a><p>A Doc Incorporated Company</p><small>© 2026 Doc Incorporated. All rights reserved.</small></div></footer>
    </main>
  );
}
