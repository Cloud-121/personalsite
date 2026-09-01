'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './resume.module.css';

const skills = [
  'Python',
  'JavaScript',
  'TypeScript',
  'C++',
  'Rust',
  'Bash',
  'React',
  'Next.js',
  'Node.js',
  'Docker',
  'Kubernetes',
  'Linux',
  'Git & GitHub',
  'MQTT',
  'PCB Design',
  '3D Modeling',
  'Reverse Engineering',
  'LoRa & MeshCore',
];

const projects = [
  {
    name: 'Gulf Coast Mesh App',
    description:
      'Companion app for encrypted, off-grid communication with MeshCore LoRa radios—without cell service, Wi-Fi, or internet.',
  },
  {
    name: 'Gulf Coast Mesh Analyzer',
    description:
      'Unified backend for repeater monitoring, event logging, outage detection, and mesh network maintenance.',
  },
  {
    name: 'The Grumpy Board',
    description:
      'Partnered with GrumpyMesh to design a purpose-built MeshCore radio that sold out in less than six hours.',
  },
  {
    name: 'MyEntergy API & Bridge',
    description:
      'Tools that retrieve advanced-meter usage and publish it over MQTT for Home Assistant and other automations.',
  },
];

export default function Resume() {
  return (
    <main className={styles.pageShell}>
      <div className={styles.toolbar}>
        <Link href="/" className={styles.backLink}>
          <span aria-hidden="true">←</span> Back to site
        </Link>
        <button
          type="button"
          className={styles.printButton}
          onClick={() => window.print()}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <path d="M6 14h12v8H6z" />
          </svg>
          Print / Download PDF
        </button>
      </div>

      <article className={styles.resume}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Software &amp; Hardware Developer</p>
            <h1>Lenley Ngo</h1>
            <p className={styles.intro}>
              Open-source builder and community leader creating resilient mesh
              communications, practical hardware, and self-hosted software.
            </p>
          </div>
          <div className={styles.headerMark} aria-hidden="true">
            LN
          </div>
        </header>

        <div className={styles.contentGrid}>
          <aside className={styles.sidebar}>
            <section>
              <h2>Contact</h2>
              <div className={styles.contactList}>
                <a href="mailto:contact@lenleyngo.com">
                  contact@lenleyngo.com
                </a>
                <a href="https://lenleyngo.com">lenleyngo.com</a>
                <a href="https://github.com/Cloud-121">github.com/Cloud-121</a>
                <a href="https://www.linkedin.com/in/lenley-ngo-634452268/">
                  LinkedIn / Lenley Ngo
                </a>
              </div>
            </section>

            <section>
              <h2>Technical Skills</h2>
              <div className={styles.skillList}>
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </section>

            <section>
              <h2>Education</h2>
              <p className={styles.education}>
                High school student studying at Acellus Academy.
              </p>
            </section>

            <section>
              <h2>Core Strengths</h2>
              <ul className={styles.compactList}>
                <li>Open-source development</li>
                <li>Community leadership</li>
                <li>Systems integration</li>
                <li>Rapid prototyping</li>
                <li>Technical collaboration</li>
              </ul>
            </section>
          </aside>

          <div className={styles.mainColumn}>
            <section>
              <div className={styles.sectionHeading}>
                <span>01</span>
                <h2>Leadership &amp; Experience</h2>
              </div>
              <div className={styles.experience}>
                <div className={styles.roleHeader}>
                  <div>
                    <h3>Founder &amp; Lead Maintainer</h3>
                    <p>Gulf Coast Mesh</p>
                  </div>
                  <span>Louisiana &amp; the Gulf Coast</span>
                </div>
                <ul>
                  <li>
                    Lead a volunteer-built communications network anchored in
                    Louisiana and growing across the US Gulf Coast.
                  </li>
                  <li>
                    Coordinate volunteers and industry partners to expand
                    resilient radio infrastructure using MeshCore and related
                    mesh technologies.
                  </li>
                  <li>
                    Build community tools for repeater monitoring, outage
                    detection, meeting operations, and off-grid messaging.
                  </li>
                  <li>
                    Design and deploy radio hardware for reliable community and
                    emergency communications.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <div className={styles.sectionHeading}>
                <span>02</span>
                <h2>Selected Projects</h2>
              </div>
              <div className={styles.projectList}>
                {projects.map((project) => (
                  <div className={styles.project} key={project.name}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className={styles.sectionHeading}>
                <span>03</span>
                <h2>Additional Work</h2>
              </div>
              <div className={styles.additionalGrid}>
                <p>
                  <strong>TG-Mesh</strong>
                  Low-cost radio designed for emergency distribution.
                </p>
                <p>
                  <strong>LVR Module</strong>
                  Automatic low-voltage protection for solar repeaters.
                </p>
                <p>
                  <strong>Motionblob</strong>
                  Motion-cue indicators for Unix-like platforms.
                </p>
                <p>
                  <strong>Web VESC XML Viewer</strong>
                  Shareable, readable formatting for VESC Tool XML files.
                </p>
              </div>
            </section>
          </div>
        </div>

        <footer className={styles.footer}>
          <div>
            <strong>Build openly. Solve practical problems.</strong>
            <span>More work and project details at lenleyngo.com</span>
          </div>
          <div className={styles.qrBlock}>
            <span>Portfolio</span>
            <Image
              src="/files/images/lenleyngo-website-qr.png"
              alt="QR code linking to lenleyngo.com"
              height={232}
              width={232}
              unoptimized
            />
          </div>
        </footer>
      </article>
    </main>
  );
}
