import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone, Globe, Search, ArrowRight } from 'lucide-react';

const EdaptLogo = () => <div className="font-poppins font-bold text-2xl tracking-tight text-white">edapt</div>;

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F2C59]/80 backdrop-blur-lg border-b border-blue-800/30">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="/"><EdaptLogo /></a>
      <a href="/#form" className="hidden sm:inline-block bg-[#00DB77] text-gray-900 font-bold py-2 px-6 rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105">
        Apply Now
      </a>
    </div>
  </header>
);

const Footer = () => (
    <footer className="bg-[#0A1F44] text-blue-200">
        <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-3 gap-8">
                <div><EdaptLogo /><p className="max-w-xs mt-4">Empowering professionals with the skills of tomorrow, today.</p></div>
                <div>
                    <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center"><Mail className="h-5 w-5 mr-3 text-[#F2C94C]" /><a href="mailto:support@edapt.me" className="hover:text-white">support@edapt.me</a></li>
                        <li className="flex items-center"><Phone className="h-5 w-5 mr-3 text-[#F2C94C]" /><a href="tel:+919072616500" className="hover:text-white">+91 9072 6165 00</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
                    <div className="flex space-x-4"><a href="#" className="text-blue-200 hover:text-white"><Linkedin size={24} /></a></div>
                </div>
            </div>
            <div className="mt-12 border-t border-blue-800/50 pt-8 text-center text-sm"><p>&copy; {new Date().getFullYear()} Edapt. All Rights Reserved.</p></div>
        </div>
    </footer>
);

const BlogPostCard = ({ post }) => (
    <motion.a href={`/blogs/${post.slug}`} className="bg-[#1A3A69]/50 rounded-2xl border border-blue-800/50 overflow-hidden group block transform hover:-translate-y-2 transition-transform duration-300">
        <div className="overflow-hidden"><img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" /></div>
        <div className="p-6">
            <p className="text-sm font-semibold text-[#F2C94C] mb-2">{post.category}</p>
            <h3 className="text-xl font-bold text-white mb-3 h-16">{post.title}</h3>
            <p className="text-blue-200 mb-4 h-24 overflow-hidden">{post.excerpt}</p>
            <div className="font-bold text-[#00DB77] flex items-center group-hover:text-white transition-colors">Read More <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" /></div>
        </div>
    </motion.a>
);

const mockPosts = [
  { id: 1, slug: 'the-art-of-the-perfect-prompt', title: 'The Art of the Perfect Prompt', category: 'Prompt Engineering', excerpt: 'Unlock the full potential of large language models by mastering the art of prompt engineering.', imageUrl: 'https://placehold.co/600x400/0A1F44/F2C94C?text=Prompt+Art' },
  { id: 2, slug: '5-tasks-to-automate-with-zapier', title: '5 Tasks to Automate This Week', category: 'Automation', excerpt: 'Stop wasting time on manual data entry and repetitive emails. Discover five simple automations you can build today.', imageUrl: 'https://placehold.co/600x400/0A1F44/00DB77?text=Automation' },
  { id: 3, slug: 'from-idea-to-app-in-a-weekend', title: 'From Idea to App in a Weekend', category: 'No-Code', excerpt: 'Think you need to be a coder to build an app? Think again. Follow our journey of building a functional web application.', imageUrl: 'https://placehold.co/600x400/0A1F44/FFFFFF?text=No-Code+App' },
];

export default function BlogIndexPage() {
  return (
    <div className="bg-[#0F2C59] font-poppins text-white">
      <Header />
      <main className="pt-24">
        <section className="py-20 text-center bg-grid-blue-900/50"><div className="container mx-auto px-6"><h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">The Edapt AI Blog</h1><p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto">Insights on AI, Automation, and the Future of Productivity.</p></div></section>
        <section className="py-20"><div className="container mx-auto px-6"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{mockPosts.map(post => (<BlogPostCard key={post.id} post={post} />))}</div></div></section>
      </main>
      <Footer />
    </div>
  );
}
