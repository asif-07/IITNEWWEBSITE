import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, Linkedin, Star, BookOpen, UserCheck, Award, Globe, Zap, Phone, Mail, Clock, BarChart2, Users, HelpCircle, Shield, TrendingUp, Briefcase, PlusCircle, Calendar, Coffee, CheckCircle } from 'lucide-react';

// --- Helper for Animations ---
const AnimatedSection = ({ children, className = '' }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      className={`py-20 sm:py-28 ${className}`}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      {children}
    </motion.section>
  );
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};


// --- Mock Data ---
const trustedByLogos = [
  { name: "TCS", logo: "https://placehold.co/150x60/FFFFFF/0F2C59?text=TCS" },
  { name: "Aramco", logo: "https://placehold.co/150x60/FFFFFF/0F2C59?text=Aramco" },
  { name: "Emaar", logo: "https://placehold.co/150x60/FFFFFF/0F2C59?text=Emaar" },
  { name: "Infosys", logo: "https://placehold.co/150x60/FFFFFF/0F2C59?text=Infosys" },
  { name: "FedEx", logo: "https://placehold.co/150x60/FFFFFF/0F2C59?text=FedEx" },
  { name: "EY", logo: "https://placehold.co/150x60/FFFFFF/0F2C59?text=EY" },
  { name: "Wipro", logo: "https://placehold.co/150x60/FFFFFF/0F2C59?text=Wipro" },
  { name: "Hyundai", logo: "https://placehold.co/150x60/FFFFFF/0F2C59?text=Hyundai" },
  { name: "Airbus", logo: "https://placehold.co/150x60/FFFFFF/0F2C59?text=Airbus" },
];

const highlights = [
  { icon: <Clock className="h-8 w-8 text-[#F2C94C]" />, title: "6 Hrs/Week Commitment", description: "Flexible evening live classes designed for working professionals." },
  { icon: <UserCheck className="h-8 w-8 text-[#F2C94C]" />, title: "Expert Mentors", description: "Learn from best industry practitioners - from NIT's, IIT's, Fortune 500 companies and experts." },
  { icon: <Award className="h-8 w-8 text-[#F2C94C]" />, title: "IIT-M Pravartak Certified", description: "Earn a globally-recognized certificate from a top institution." },
  { icon: <Zap className="h-8 w-8 text-[#F2C94C]" />, title: "Hands-On & No-Code", description: "Build real AI agents and workflows you can use the next day." },
  { icon: <Users className="h-8 w-8 text-[#F2C94C]" />, title: "Lifetime Community", description: "Get lifetime access to a network of peers and experts on Slack." },
  { icon: <BookOpen className="h-8 w-8 text-[#F2C94C]" />, title: "Lifetime Recordings", description: "Access all class recordings and materials forever." },
];

const syllabus = [
  { module: "Module 1", title: "AI Foundations & Prompt Mastery", weeks: "Weeks 1-2 (Lives 1-4)", details: ["Master core AI concepts and advanced prompting patterns.", "Create multi-turn prompts that cut research time by 60%.", "Understand and apply ethical AI use-cases and guardrails."] },
  { module: "Module 2", title: "GenAI Productivity Toolkit", weeks: "Weeks 3 & 6 (Lives 5-6, 11-12)", details: ["Get hands-on with top GenAI tools like ChatGPT, Claude, & Synthesia.", "Build a personal AI 'Swiss-army knife' for your daily workflow.", "Leverage Power BI's AI features for data visualization."] },
  { module: "Module 3", title: "AI for Business Functions", weeks: "Weeks 4-5 (Lives 7-10)", details: ["Automate tasks in Marketing, Operations, HR, and Finance.", "Build ROI calculators to measure the impact of your automations.", "Deploy 3 job-specific automations by the end of the module."] },
  { module: "Module 4", title: "No-Code AI Apps & Sites", weeks: "Weeks 7-8 (Lives 13-16)", details: ["Build and publish a live AI microsite using Bubble or Softr.", "Understand Bubble logic and connect to APIs.", "Implement RAG-lite search for your no-code applications."] },
  { module: "Module 5", title: "Autonomous Agents & Automation", weeks: "Weeks 9-10 (Lives 17-20)", details: ["Agentic AI building with n8n, Zapier, and Make.", "Design and build agents that operate in complex chains.", "Launch an end-to-end agent that reduces a repetitive task by ≥40%."] },
  { module: "Module 6", title: "Capstone & Impact Lab", weeks: "4-Week Sprint", details: ["Work on a mentor-guided project to solve a real-world problem.", "Develop a portfolio piece that showcases your skills and ROI.", "Present your project's business impact to mentors and peers."] },
];

const projects = [
    { title: "AI-Powered No-Code Chatbot", kpi: "KPI: 40% drop in support emails", tools: ["Zapier", "ChatGPT"], skills: "Deployed on a live website in 48 hours to provide 24/7 support." },
    { title: "Workflow Automation Suite", kpi: "KPI: 5+ hours/week saved per team", tools: ["Make", "GPT"], skills: "Automate multi-step business processes for maximum efficiency." },
    { title: "AI-Driven Content Campaign", kpi: "KPI: 3x engagement, 20% CPL reduction", tools: ["Claude", "Canva"], skills: "Auto-generate and schedule blogs, reels, and social media posts." },
    { title: "AI Microsite in Bubble", kpi: "KPI: Idea-to-launch in 6 days", tools: ["Bubble", "GPT"], skills: "Build a functional web app with GPT-powered search and RAG-lite." },
];

const tools = [
  "ChatGPT", "Gemini", "Perplexity", "Claude",
  "Zapier", "Make", "n8n", "Firebase",
  "Hugging Face", "Copy.ai", "Gamma", "Lovable",
  "Bolt AI", "Synthesia", "Power BI", "Bubble",
  "Softr", "RunwayML", "Sora", "Ideogram",
  "ElevenLabs", "Grok", "Midjourney", "Webflow",
];

const faqData = [
    { q: "When are the live sessions?", a: "Live sessions are held on Tuesdays & Thursdays from 7:00 PM to 8:30 PM IST. All sessions are recorded and posted within 4 hours." },
    { q: "I'm non-technical. Can I cope?", a: "Absolutely. 70% of our alumni had no prior coding background. The program is designed to be no-code friendly." },
    { q: "What tools will I need?", a: "You'll need a laptop with a stable internet connection. We will primarily use free accounts on platforms like ChatGPT, Claude, Zapier, and Bubble." },
    { q: "Is the certificate recognized?", a: "Yes, it is issued by the IIT Madras Pravartak Centre for AI and includes a verifiable QR code, making it globally recognized." },
    { q: "Can my employer sponsor me?", a: "Yes. A GST invoice is automatically generated upon enrollment, which you can use for company reimbursement." },
];

// --- Reusable Components ---
const AccordionItem = ({ item, isOpen, onClick }) => (
  <div className="border-b border-blue-800/50">
    <button onClick={onClick} className="w-full flex justify-between items-start text-left p-6 hover:bg-[#1A3A69]/30 transition-colors duration-300">
      <div className="flex items-center">
        <span className="text-[#F2C94C] font-bold text-lg mr-4"><HelpCircle className="h-6 w-6" /></span>
        <span className="text-white font-semibold text-lg">{item.q}</span>
      </div>
      <ChevronDown className={`h-6 w-6 text-blue-300 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} mt-1 flex-shrink-0`} />
    </button>
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
      <div className="p-6 pt-0 pl-16 text-blue-200">
        <p>{item.a}</p>
      </div>
    </div>
  </div>
);

const EdaptLogo = () => (
    <div className="font-poppins font-bold text-2xl tracking-tight text-white">
        edapt
    </div>
);

const WhatsAppButton = () => (
    <a
        href="https://wa.me/919072616500"
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-8 right-8 z-50"
    >
        <div className="flex items-center justify-center h-16 w-16 bg-[#25D366] rounded-full shadow-lg animate-pulse-whatsapp transform group-hover:scale-110 transition-transform duration-300">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-8 w-8 text-white"
                fill="currentColor"
            >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.919 6.066l-1.285 4.685 4.849-1.282z" />
            </svg>
        </div>
        <div className="absolute right-0 bottom-full mb-2 w-max bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:-translate-y-1">
            Chat with us!
        </div>
    </a>
);

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F2C59]/80 backdrop-blur-lg border-b border-blue-800/30">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <EdaptLogo />
      <a href="#form" className="hidden sm:inline-block bg-[#00DB77] text-gray-900 font-bold py-2 px-6 rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105">
        Apply Now
      </a>
    </div>
  </header>
);

const HeroSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', education: 'Graduate', profile: 'Working' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    
    const handleApplyNow = () => {
        if (!formData.name || !formData.email || !formData.phone) {
            setError('Please fill all required fields.');
            setTimeout(() => setError(''), 3000);
            return;
        }
        
        setIsSubmitted(true);
    };

    return (
      <section className="relative min-h-screen flex items-center bg-[#0F2C59] pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="absolute inset-0 bg-grid-blue-900/50 [mask-image:linear-gradient(to_bottom,white_5%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(38,70,128,0.3),_transparent_70%)]"></div>
        <div className="container mx-auto px-6 z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-white">
              <div className="inline-flex items-center bg-blue-900/50 text-blue-200 px-4 py-1 rounded-full text-sm mb-6 border border-blue-700">
                <Star className="h-4 w-4 text-yellow-400 mr-2" />
                Certified by IIT Madras Pravartak
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Double Your Productivity in 10 Weeks with <span className="text-[#F2C94C]">AI Automation</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-200 mb-10">
                A hands-on program by IIT Madras Pravartak for working professionals to master AI, Automation, No-Code, and Agents.
              </p>
              <div className="flex items-center space-x-8 text-blue-200">
                  <div className="flex items-center space-x-3">
                      <Calendar className="h-7 w-7 text-[#F2C94C]" />
                      <span>Evening Live<br/>Classes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                      <Coffee className="h-7 w-7 text-[#F2C94C]" />
                      <span>Lifetime Community<br/>Access</span>
                  </div>
              </div>
            </motion.div>
            
            <motion.div id="form" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-blue-500/30 shadow-2xl shadow-blue-900/20">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-white mb-4">Thank You!</h2>
                  <p className="text-blue-200 mb-6">Your submission was successful. Click below to get the brochure.</p>
                   <a 
                    href="https://xhrdzvnnztpppsjlcwlt.supabase.co/storage/v1/object/public/files/IIT%20Madras%20Prompt%20Engineering%20Brochure%20.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full inline-block bg-[#00DB77] text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105 text-lg"
                  >
                    Download Brochure
                  </a>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-white mb-1 text-center">Start Your AI Journey</h2>
                  <p className="text-center text-blue-300 mb-6">Next cohort starts soon. Limited seats.</p>
                  <div className="space-y-4">
                    <input name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-blue-900/50 border border-blue-700 text-white rounded-lg px-4 py-3 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-[#F2C94C]" type="text" placeholder="Full Name" required />
                    <input name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-blue-900/50 border border-blue-700 text-white rounded-lg px-4 py-3 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-[#F2C94C]" type="email" placeholder="Email Address" required />
                    <input name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-blue-900/50 border border-blue-700 text-white rounded-lg px-4 py-3 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-[#F2C94C]" type="tel" placeholder="Phone Number" required />
                    <select name="education" value={formData.education} onChange={handleInputChange} className="w-full bg-blue-900/50 border border-blue-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F2C94C]">
                      <option value="Graduate">Graduate</option>
                      <option value="Post Grad">Post Grad</option>
                      <option value="PhD">PhD</option>
                      <option value="Other">Other</option>
                    </select>
                    <select name="profile" value={formData.profile} onChange={handleInputChange} className="w-full bg-blue-900/50 border border-blue-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F2C94C]">
                      <option value="Working">Working</option>
                      <option value="Student">Student</option>
                    </select>
                    <button 
                        type="button" 
                        onClick={handleApplyNow} 
                        className={`w-full font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg ${
                            error ? 'bg-red-500 text-white' : 'bg-[#00DB77] text-gray-900 hover:bg-white'
                        }`}
                    >
                      {error ? error : 'Apply Now & Get Brochure'}
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    );
};

const TrustedBySection = () => (
    <div className="bg-[#0A1F44] py-12">
        <div className="container mx-auto px-6">
            <h3 className="text-center text-blue-300 text-lg mb-8">400+ professionals from leading companies have up-skilled with us</h3>
            <div className="relative w-full overflow-hidden">
                <div className="flex animate-marquee-rtl">
                    {[...trustedByLogos, ...trustedByLogos].map((company, index) => (
                        <div key={index} className="flex-shrink-0 w-48 flex items-center justify-center mx-4">
                            <img src={company.logo} alt={company.name} className="h-10 object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const ProductivityGapSection = () => (
    <AnimatedSection className="bg-[#0F2C59]">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Productivity Gap Professionals Can't Ignore</h2>
                    <p className="text-lg text-blue-200 mb-8">Repetitive tasks and information overload are costing you hours every day. Our program turns manual processes into autonomous AI workflows, so you can focus on high-impact strategy, not busywork.</p>
                    <div className="space-y-4">
                        <div className="flex items-start"><BarChart2 className="h-6 w-6 text-[#F2C94C] mr-4 mt-1 flex-shrink-0" /><p className="text-blue-100"><strong className="text-white">34% of daily tasks</strong> can be automated with today's AI. (McKinsey)</p></div>
                        <div className="flex items-start"><Clock className="h-6 w-6 text-[#F2C94C] mr-4 mt-1 flex-shrink-0" /><p className="text-blue-100"><strong className="text-white">2.6 hours per day</strong> are wasted just searching for information. (IDC)</p></div>
                    </div>
                </div>
                <div className="bg-[#1A3A69]/50 p-8 rounded-2xl border border-blue-800/50">
                    <h3 className="text-xl font-bold text-[#F2C94C] mb-4">Transformation Narrative</h3>
                    <p className="text-white text-2xl font-semibold mb-6 italic">"Imagine reclaiming an entire work-day each week."</p>
                    <div className="border-t border-blue-700 pt-4">
                        <p className="font-bold text-white">Case Snapshot: Kiran, Product Manager</p>
                        <ul className="list-disc list-inside text-blue-200 mt-2 space-y-1">
                            <li>Automated user-feedback analysis, saving 5+ hrs/week.</li>
                            <li>Deployed a no-code GPT-powered FAQ bot in 3 days.</li>
                            <li>Landed a 12% salary bump for AI initiative leadership.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </AnimatedSection>
);

const StatCard = ({ icon, value, label, growth }) => {
    const countRef = useRef(null);
    const [inViewRef, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

    useEffect(() => {
        if (inView && countRef.current) {
            const node = countRef.current;
            const targetValue = parseFloat(value);

            const controls = animate(0, targetValue, {
                duration: 2,
                onUpdate(latest) {
                    if (value.includes('.')) {
                        node.textContent = latest.toFixed(1);
                    } else {
                        node.textContent = Math.round(latest);
                    }
                }
            });
            return () => controls.stop();
        }
    }, [inView, value]);

    const suffix = value.replace(/[0-9.]/g, '');

    return (
        <motion.div ref={inViewRef} variants={itemVariants} className="bg-[#1A3A69]/50 p-6 rounded-2xl border border-blue-800/50 text-center">
            <div className="h-12 w-12 text-[#F2C94C] mx-auto mb-4 flex items-center justify-center">{icon}</div>
            <h3 className="text-4xl font-bold text-white mb-2">
                <span ref={countRef}>0</span>{suffix}
            </h3>
            <p className="text-blue-200">{label}</p>
            <p className="text-sm text-gray-400 mt-1">{growth}</p>
        </motion.div>
    );
};

const ImpactSection = () => (
    <AnimatedSection className="bg-[#0A1F44]">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Real-World Impact & ROI in 10 Weeks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <StatCard icon={<TrendingUp size={48} />} value="6.4hrs" label="Average weekly time-savings" growth="reported by our alumni." />
                <StatCard icon={<Zap size={48} />} value="42%" label="Faster project turnaround" growth="on AI-enabled tasks." />
                <StatCard icon={<Briefcase size={48} />} value="2.1L" label="Median annual cost-saving" growth="from automated workflows." />
                <StatCard icon={<Star size={48} />} value="90" label="Average days to promotion" growth="after showcasing AI skills." />
            </div>
        </div>
    </AnimatedSection>
);


const HighlightsSection = () => (
    <AnimatedSection className="bg-[#0F2C59]">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">A Program Designed for Immediate Impact</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {highlights.map((item, index) => (
                    <motion.div key={index} variants={itemVariants} className="bg-[#1A3A69]/50 p-6 rounded-2xl border border-blue-800/50 hover:border-[#F2C94C] hover:scale-105 transition-all duration-300">
                        <div className="flex items-center mb-4">{item.icon}<h3 className="text-xl font-bold text-white ml-4">{item.title}</h3></div>
                        <p className="text-blue-200">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

const SyllabusSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeModule = syllabus[activeTab];

  return (
    <AnimatedSection className="bg-[#0A1F44]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Explore Our Industry-Aligned Curriculum ✨
        </h2>
        <div className="max-w-5xl mx-auto bg-[#1A3A69]/30 backdrop-blur-md p-4 sm:p-8 rounded-2xl border border-blue-800/50">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Panel: Tabs */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible -mx-4 px-4 md:w-1/3">
              {syllabus.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`text-left w-full p-4 rounded-lg transition-all duration-300 flex-shrink-0 md:flex-shrink-1 ${
                    activeTab === index
                      ? 'bg-[#F2C94C] text-[#0F2C59] font-bold shadow-lg'
                      : 'text-white hover:bg-blue-900/50'
                  }`}
                >
                  {item.module}
                </button>
              ))}
            </div>

            {/* Right Panel: Content */}
            <div className="md:w-2/3">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 p-8 rounded-xl border border-blue-700/50"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{activeModule.title}</h3>
                  <span className="bg-[#F2C94C]/20 text-[#F2C94C] text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap">{activeModule.weeks}</span>
                </div>
                <ul className="space-y-3 text-blue-200">
                  {activeModule.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 mt-1 text-[#00DB77] flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const ProjectsSection = () => (
    <AnimatedSection className="bg-[#0F2C59]">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Build a Portfolio That Speaks ROI</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div key={index} variants={itemVariants} className="bg-[#1A3A69]/50 p-8 rounded-2xl border border-blue-800/50 transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-lg font-semibold text-[#00DB77] mb-4">{project.kpi}</p>
                        <p className="text-blue-200 mb-4 flex-grow">{project.skills}</p>
                        <div className="border-t border-blue-800/50 pt-4 mt-auto">
                            <p className="text-sm text-blue-300 mb-2 font-semibold">Tools Used:</p>
                            <div className="flex space-x-2"><span className="text-sm text-white">{project.tools.join(', ')}</span></div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

const ToolsSection = () => (
    <AnimatedSection className="bg-[#0A1F44]">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">30+ Tools & Platforms You'll Master</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-4">
                {tools.map((tool) => (
                    <motion.div key={tool} variants={itemVariants} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-[#00DB77] mr-3 flex-shrink-0" />
                        <span className="text-blue-100">{tool}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

const CertificateSection = () => (
    <AnimatedSection className="bg-[#0A1F44]">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get Certified by <span className="text-[#F2C94C]">IIT Madras Pravartak</span></h2>
                    <p className="text-lg text-blue-200 mb-8">Receive proof of your AI mastery, issued from a government-recognized innovation hub, boosting your career profile.</p>
                    <div className="flex items-center space-x-4">
                       <h3 className="text-xl font-bold text-white">IITM Pravartak <span className="text-[#F2C94C]">X</span> edapt</h3>
                    </div>
                </div>
                <div className="transform hover:scale-105 transition-transform duration-500">
                    <img src="https://i.postimg.cc/k4G6BXfX/Whats-App-Image-2025-08-17-at-15-53-38-499fd0da.jpg" alt="Sample Certificate" className="rounded-lg shadow-2xl shadow-blue-900/50 border-2 border-[#F2C94C]" />
                </div>
            </div>
        </div>
    </AnimatedSection>
);

const AboutPravartakSection = () => (
    <AnimatedSection className="bg-[#0F2C59]">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">About IITM Pravartak Digital Skills Academy</h2>
            <p className="text-lg text-blue-200 max-w-4xl mx-auto text-center mb-12">
                IITM Pravartak, a Technology Innovation Hub of IIRM is funded by Department of Science and Technology, GOI under its National Mission on Interdisciplinary Cyber-Physical Systems (NM-ICPS), focuses on application-oriented research and innovation in the areas SNACS. BharOS, India's first mobile operating system is developed by an IITM Pravartak incubated company.
            </p>
            <div className="max-w-4xl mx-auto bg-[#1A3A69]/50 p-8 rounded-2xl border border-blue-800/50">
                <h3 className="text-2xl font-bold text-[#F2C94C] mb-6 text-center">Key Achievements of IIT Madras:</h3>
                <ul className="space-y-4">
                    <li className="flex items-start"><Star className="h-6 w-6 mr-4 mt-1 text-yellow-400 flex-shrink-0" /><p className="text-blue-100">Ranked No: 1 in India in both 'Overall' and 'Engineering' Categories in NIRF 2022 from last 4th consecutive year.</p></li>
                    <li className="flex items-start"><Award className="h-6 w-6 mr-4 mt-1 text-yellow-400 flex-shrink-0" /><p className="text-blue-100">IIT Madras has been identified as an 'Institution of Eminence' by the Government of India.</p></li>
                    <li className="flex items-start"><Globe className="h-6 w-6 mr-4 mt-1 text-yellow-400 flex-shrink-0" /><p className="text-blue-100">Ranked No. 4 Indian Institute in QS World University Ranking and Ranked #250 in the International QS World rankings 2023.</p></li>
                </ul>
            </div>
        </div>
    </AnimatedSection>
);

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(-1);
    return (
        <AnimatedSection className="bg-[#0A1F44]">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto bg-[#1A3A69]/50 rounded-2xl border border-blue-800/50 overflow-hidden">
                    {faqData.map((item, index) => (
                        <AccordionItem key={index} item={item} isOpen={openIndex === index} onClick={() => setOpenIndex(index === openIndex ? -1 : index)} />
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

const CtaSection = () => (
    <section className="py-20 bg-cover bg-center bg-[#0F2C59]">
        <div className="container mx-auto px-6 text-center bg-[#0F2C59]/70 backdrop-blur-sm py-16 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Transform Your Productivity - Start Today</h2>
            <p className="text-blue-200 max-w-2xl mx-auto mb-10">Only 20 seats available for the next cohort. Apply in 2 minutes to secure your spot.</p>
            <a href="#form" className="bg-[#00DB77] text-gray-900 font-bold py-4 px-10 rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105 text-xl inline-block">
                Enrol Now
            </a>
        </div>
    </section>
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


export default function App() {
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
          @keyframes marquee-rtl {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-rtl {
            animation: marquee-rtl 25s linear infinite;
          }
          @keyframes pulse-whatsapp {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
            }
            50% {
              transform: scale(1.05);
              box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
            }
          }
          .animate-pulse-whatsapp {
            animation: pulse-whatsapp 2s infinite;
          }
        `}
      </style>
      <Header />
      <main>
        <HeroSection />
        <TrustedBySection />
        <ProductivityGapSection />
        <ImpactSection />
        <HighlightsSection />
        <SyllabusSection />
        <ProjectsSection />
        <ToolsSection />
        <CertificateSection />
        <AboutPravartakSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
