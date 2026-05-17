import { V } from '../theme';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By using PDFKit, you agree to these Terms of Service. If you do not agree, please do not use the service. We reserve the right to update these terms at any time, and continued use constitutes acceptance of the revised terms.',
  },
  {
    title: '2. Use of the Service',
    content: 'PDFKit is provided for personal and commercial use. You may not use this service to process illegal, harmful, or copyrighted content without the rights to do so. You remain solely responsible for all content you upload and process.',
  },
  {
    title: '3. Privacy and Data',
    content: 'We do not store your uploaded files. Files are processed in memory and immediately discarded after your session ends. We do not share your data with third parties for marketing or commercial purposes.',
  },
  {
    title: '4. No Warranty',
    content: 'PDFKit is provided "as is" without any warranty of any kind, express or implied. We do not guarantee that the service will be uninterrupted, error-free, or produce accurate results for every document.',
  },
  {
    title: '5. Limitation of Liability',
    content: 'To the fullest extent permitted by applicable law, PDFKit shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use this service.',
  },
  {
    title: '6. Intellectual Property',
    content: 'You retain full ownership of all files and documents you upload. PDFKit does not claim any rights, license, or ownership over your content.',
  },
  {
    title: '7. Prohibited Content',
    content: 'You must not upload or process content that is unlawful, defamatory, obscene, or that infringes the intellectual property rights of others. We reserve the right to suspend access for violations.',
  },
  {
    title: '8. Changes to the Service',
    content: 'We may modify, suspend, or discontinue any aspect of the service at any time without prior notice.',
  },
  {
    title: '9. Analytics',
    content: 'We use anonymised analytics (Google Analytics) to understand how users interact with the tool. No file content is ever captured or transmitted to analytics services.',
  },
  {
    title: '10. Governing Law',
    content: 'These terms shall be governed by applicable laws. Any disputes arising shall be resolved in the appropriate jurisdiction.',
  },
  {
    title: '11. Contact',
    content: 'If you have questions about these Terms of Service, please contact us at support@pdfkit.app.',
  },
];

export default function Terms() {
  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '48px 20px' }}>

      <div style={{
        display: 'inline-block', background: V.accentSoft, color: V.accentText,
        fontSize: 11, fontWeight: 700, padding: '5px 14px', borderRadius: 999,
        marginBottom: 20, border: '1px solid rgba(99,102,241,0.2)',
      }}>
        LEGAL
      </div>

      <h1 style={{ fontSize: 32, fontWeight: 900, color: V.textP, letterSpacing: '-1px', marginBottom: 4 }}>
        Terms of Service
      </h1>

      <p style={{
        fontSize: 12, color: V.textM, marginBottom: 36,
        paddingBottom: 28, borderBottom: `1px solid ${V.border}`,
      }}>
        Last updated: January 2025
      </p>

      {sections.map((s) => (
        <div key={s.title} style={{ marginBottom: 26 }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, color: V.textP, margin: '0 0 7px' }}>
            {s.title}
          </h2>
          <p style={{ fontSize: 13, color: V.textS, lineHeight: 1.8, margin: 0 }}>
            {s.content}
          </p>
        </div>
      ))}

      <div style={{
        marginTop: 40, padding: 16, background: V.bgCard,
        borderRadius: 10, border: `1px solid ${V.border}`, textAlign: 'center',
      }}>
        <p style={{ margin: 0, fontSize: 12, color: V.textM }}>
          By using PDFKit, you acknowledge that you have read and agree to these Terms of Service.
        </p>
      </div>

    </div>
  );
}