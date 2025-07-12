import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Linkedin, Star, Award, Globe, Search, ArrowRight, Phone, Mail } from 'lucide-react';

// --- Reusable Components ---
const EdaptLogo = () => (
    <div className="font-poppins font-bold text-2xl tracking-tight text-white">
        edapt
    </div>
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

// --- Main Single Post Page Component ---
export default function BlogPostPage() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams(); // This gets the [blogname] from the URL

  useEffect(() => {
    const fetchPost = async () => {
      // --- Replace this with your Strapi API call for a single post ---
      // Example: fetch(`https://your-strapi-url/api/blogs?filters[slug][$eq]=${slug}`)
      console.log(`Fetching post with slug: ${slug}`);
      
      const mockPostData = {
        title: 'The Art of the Perfect Prompt: A Guide for Beginners',
        category: 'Prompt Engineering',
        imageUrl: 'https://placehold.co/1200x600/0A1F44/F2C94C?text=Prompt+Engineering',
        author: 'Dr. Ananya Rao',
        date: 'July 10, 2025',
        // This content would come from Strapi's Rich Text Editor
        content: `
          <p>This is where the full blog post content, fetched from your Strapi CMS, will be displayed. It can include paragraphs, headings, lists, and images.</p>
          <p>Prompt engineering is more than just asking a question; it's about structuring your query in a way that guides the AI to the best possible outcome. Here are a few key principles:</p>
          <h3 class="text-2xl font-bold text-white my-4">1. Be Specific and Provide Context</h3>
          <p>Instead of asking "Tell me about cars," try "Explain the key differences in engine performance between a 2023 Honda Civic and a 2023 Toyota Corolla for a potential buyer who values fuel efficiency."</p>
          <h3 class="text-2xl font-bold text-white my-4">2. Use Role-Playing</h3>
          <p>Assigning a role to the AI can dramatically improve the quality of the response. For example: "You are a senior marketing consultant. Write a three-paragraph summary of a go-to-market strategy for a new productivity app."</p>
          <p>By mastering these simple techniques, you can transform any LLM into a powerful tool for research, creativity, and problem-solving.</p>
        `
      };
      // --- End of mock data ---

      setPost(mockPostData);
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <div className="bg-[#0F2C59] h-screen flex justify-center items-center text-white">Loading post...</div>;
  }

  if (!post) {
    return <div className="bg-[#0F2C59] h-screen flex justify-center items-center text-white">Post not found.</div>;
  }

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
          .prose-custom p { margin-bottom: 1.25rem; }
          .prose-custom h3 { margin-top: 2rem; margin-bottom: 1rem; }
        `}
      </style>
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto">
                <p className="text-lg font-semibold text-[#F2C94C] mb-2">{post.category}</p>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">{post.title}</h1>
                <div className="flex items-center text-blue-300 mb-8">
                    <span>By {post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                </div>
                <img src={post.imageUrl} alt={post.title} className="w-full h-auto max-h-[500px] object-cover rounded-2xl mb-8" />
                <div 
                    className="prose-custom text-lg text-blue-200 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.content }} 
                />
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
