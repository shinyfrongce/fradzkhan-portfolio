import './globals.css';

export const metadata = {
  title: 'Fradzkhan Ulao | Senior Full-Stack & AI Engineer',
  description:
    'Portfolio of Fradzkhan Ulao — senior full-stack and AI engineering across scalable web platforms, APIs, cloud infrastructure, RAG, automation, and production systems.',
  keywords: [
    'Senior Full-Stack Engineer',
    'AI Engineer',
    'React',
    'Next.js',
    'Node.js',
    'Python',
    'RAG',
    'LLM',
    'AWS',
    'Azure'
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
