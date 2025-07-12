import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Linkedin, Mail, Phone } from 'lucide-react';

// Header & Footer components (feel free to reuse yours)
const EdaptLogo = () => (
  <div className="font-poppins font-bold text-2xl tracking-tight text-white">edapt</div>
);

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F2C59]/80 backdrop-blur-lg border-b border-blue-800/30">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="/"><EdaptLogo /></a>
      <a href="/blogs" className="hidden sm:inline-block text-white font-semibold hover:text-[#F2C94C]">
        Back to Blog
      </a>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-[#0A1F44] text-blue-200">
    <div className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <EdaptLogo />
          <p className="max-w-xs mt-4">Empowering professionals... future-proof your career.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Mail className="mr-3 text-[#F2C94C]" />
              <a href="mailto:support@edapt.me" className="hover:text-white">support@edapt.me</a>
            </li>
            <li className="flex items-center">
              <Phone className="mr-3 text-[#F2C94C]" />
              <a href="tel:+919072616500" className="hover:text-white">+91 9072 6165 00</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
          <a href="#" className="text-blue-200 hover:text-white">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
      <div className="mt-12 border-t border-blue-800/50 pt-8 text-center text-sm">
        &copy; {new Date().getFullYear()} Edapt. All Rights Reserved.
      </div>
    </div>
  </footer>
);

// --- The Page Itself ---
export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<null | { title: string; content: string }>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: replace this mock with your Strapi fetch by slug
    setTimeout(() => {
      setPost({
        title: `Mock Post for “${slug}”`,
        content: `<p>This is mock content for the post with slug <strong>${slug}</strong>. Replace this with your real API data.</p>`
      });
      setLoading(false);
    }, 300);
  }, [slug]);

  if (loading) return <div className="h-screen flex items-center justify-center text-white">Loading…</div>;
  if (!post)  return <div className="h-screen flex items-center justify-center text-white">Post not found.</div>;

  return (
    <div className="bg-[#0F2C59] font-poppins text-white min-h-screen">
      <Header />
      <main className="pt-24 container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div
          className="prose prose-white max-w-none text-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </main>
      <Footer />
    </div>
  );
}
