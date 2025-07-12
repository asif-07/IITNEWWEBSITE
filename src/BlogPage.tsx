import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Star, Award, Globe, Search, ArrowRight, Phone, Mail } from 'lucide-react';

// --- Reusable Components (for this page) ---
const EdaptLogo = () => (
    <div className="font-poppins font-bold text-2xl tracking-tight text-white">
        edapt
    </div>
);

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
                <div>
                    <EdaptLogo />
                    <p className="max-w-xs mt-4">Empowering professionals with the skills of tomorrow, today. Join us to future-proof your career.</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center"><Mail className="h-5 w-5 mr-3 text-[#F2C94C]" /><a href="mailto:support@edapt.me" className="hover:text-white">support@edapt.me</a></li>
                        <li className="flex items-center"><Phone className="h-5 w-5 mr-3 text-[#F2C94C]" /><a href="tel:+919072616500" className="hover:text-white">+91 9072 6165 00</a></li>
                        <li className="flex items-center"><Globe className="h-5 w-5 mr-3 text-[#F2C94C]" /><a href="https://edapt.me" target="_blank" rel="noopener noreferrer" className="hover:text-white">edapt.me</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
                    <div className="flex space-x-4"><a href="#" className="text-blue-200 hover:text-white"><Linkedin size={24} /></a></div>
                </div>
            </div>
            <div className="mt-12 border-t border-blue-800/50 pt-8 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Edapt. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);

const BlogPostCard = ({ post }) => (
    <motion.div 
        className="bg-[#1A3A69]/50 rounded-2xl border border-blue-800/50 overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300"
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
    >
        <div className="overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-6">
            <p className="text-sm font-semibold text-[#F2C94C] mb-2">{post.category}</p>
            <h3 className="text-xl font-bold text-white mb-3 h-20">{post.title}</h3>
            <p className="text-blue-200 mb-4 h-24 overflow-hidden">{post.excerpt}</p>
            <div className="text-sm text-blue-300 flex justify-between items-center mb-6">
                <span>{post.author}</span>
                <span>{post.date}</span>
            </div>
            <a href="#" className="font-bold text-[#00DB77] flex items-center group-hover:text-white transition-colors">
                Read More <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
    </motion.div>
);

// --- Mock Data for Blog Posts ---
const mockPosts = [
  {
    id: 1,
    category: 'Prompt Engineering',
    title: 'The Art of the Perfect Prompt: A Guide for Beginners',
    excerpt: 'Unlock the full potential of large language models by mastering the art of prompt engineering. Learn the techniques that separate a good response from a great one.',
    author: 'Dr. Ananya Rao',
    date: 'July 10, 2025',
    image: 'https://placehold.co/600x400/0A1F44/F2C94C?text=Prompt+Art',
  },
  {
    id: 2,
    category: 'Automation',
    title: '5 Repetitive Tasks You Can Automate This Week with Zapier',
    excerpt: 'Stop wasting time on manual data entry and repetitive emails. Discover five simple but powerful automations you can build today with no-code tools.',
    author: 'Girish Menon',
    date: 'July 05, 2025',
    image: 'https://placehold.co/600x400/0A1F44/00DB77?text=Automation',
  },
  {
    id: 3,
    category: 'No-Code',
    title: 'From Idea to App in a Weekend: Building with Bubble.io',
    excerpt: 'Think you need to be a coder to build an app? Think again. Follow our journey of building a functional web application using the no-code platform Bubble.',
    author: 'Umer Mohammed',
    date: 'June 28, 2025',
    image: 'https://placehold.co/600x400/0A1F44/FFFFFF?text=No-Code+App',
  },
  {
    id: 4,
    category: 'AI Agents',
    title: 'Introduction to Agentic AI: The Future of Autonomous Systems',
    excerpt: 'AI agents are more than just chatbots. They can plan, execute tasks, and solve problems. Learn the fundamentals of agentic AI and how it will change the workforce.',
    author: 'Dr. Ananya Rao',
    date: 'June 21, 2025',
    image: 'https://placehold.co/600x400/0A1F44/F2C94C?text=AI+Agents',
  },
   {
    id: 5,
    category: 'Productivity',
    title: 'How Our Team Reclaimed 10 Hours a Week with n8n',
    excerpt: 'A case study on how we integrated n8n into our internal workflows to automate reporting, notifications, and data synchronization, saving countless hours.',
    author: 'Edapt Team',
    date: 'June 15, 2025',
    image: 'https://placehold.co/600x400/0A1F44/00DB77?text=Productivity',
  },
   {
    id: 6,
    category: 'No-Code',
    title: 'Building Your First Website with Framer AI',
    excerpt: 'Framer is revolutionizing web design with its powerful AI features. Learn how to go from a simple text prompt to a fully published website in minutes.',
    author: 'Megha V',
    date: 'June 08, 2025',
    image: 'https://placehold.co/600x400/0A1F44/FFFFFF?text=Framer+AI',
  },
];


// --- Main Blog Page Component ---
export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPosts = mockPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#0F2C59] font-poppins text-white">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet" />
       <style>
        {`
          .font-poppins {
            font-family: 'Poppins', sans-serif;
          }
        `}
      </style>
      <Header />
      <main className="pt-24">
        <section className="py-20 text-center bg-grid-blue-900/50">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">The Edapt AI Blog</h1>
                <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto">Insights on AI, Automation, and the Future of Productivity.</p>
                <div className="mt-8 max-w-lg mx-auto relative">
                    <input 
                        type="text"
                        placeholder="Search for articles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-blue-900/50 border border-blue-700 text-white rounded-full px-6 py-3 pl-12 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-[#F2C94C]"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-300" />
                </div>
            </div>
        </section>

        <motion.section 
            className="py-20"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map(post => (
                        <BlogPostCard key={post.id} post={post} />
                    ))}
                </div>
                 {filteredPosts.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-xl text-blue-200">No articles found for "{searchTerm}".</p>
                    </div>
                )}
            </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
