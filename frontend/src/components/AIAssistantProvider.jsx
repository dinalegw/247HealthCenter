import React, { createContext, useContext, useState, useCallback } from 'react';

const AIAssistantContext = createContext(null);

export const useAIAssistant = () => {
  const context = useContext(AIAssistantContext);
  if (!context) throw new Error('useAIAssistant must be used within AIAssistantProvider');
  return context;
};

export default function AIAssistantProvider({ children, siteData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'ai', text: "Hello! I'm your 247HealthCenter AI Assistant. I'm available 24/7 to help with any questions about our platform, services, or healthcare guidance. How can I assist you today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const aiKnowledgeBase = {
    platform: {
      name: "247HealthCenter",
      description: "A next-generation healthcare platform connecting patients, doctors, specialists, and emergency support systems.",
      mission: "Making quality healthcare accessible from the comfort of your home.",
      availability: "24 hours a day, 7 days a week, 365 days a year"
    },
    services: {
      "remote consultation": {
        description: "Book secure video appointments with trusted doctors from anywhere",
        features: ["Live video appointments", "Secure symptom exchange", "Doctor access to patient information", "Follow-up recommendations"],
        booking: "Click 'Book Consultation' on the homepage or navigate to the Services section"
      },
      "specialist access": {
        description: "Connect with specialists remotely for advanced medical evaluation",
        features: ["Multi-disciplinary review", "Remote specialist evaluation", "Faster decision-making"]
      },
      "in-person escalation": {
        description: "Seamless transition to physical hospital care when necessary",
        features: ["Right care at the right time", "No unnecessary waiting", "Virtual to hospital transition"]
      },
      "emergency coverage": {
        description: "Register for emergency support and rapid healthcare response",
        features: ["Priority response", "24/7 coverage", "Peace of mind", "Pre-paid emergency fees"],
        registration: "Register with a hospital or clinic and pay emergency service fees in advance"
      },
      "home services": {
        description: "Book home nursing, diagnostics, and doctor visits with ease",
        services: ["Doctor Visit at Home", "Nursing Care", "Diagnostics at Home", "Physiotherapy at Home", "Specialist Visit"]
      }
    },
    stats: {
      patients: "10,000+",
      doctors: "500+",
      specialties: "50+",
      support: "24/7",
      satisfaction: "99%"
    },
    contact: {
      email: "support@247healthcenter.com",
      phone: "+234 800 000 0000",
      support: "24/7 Healthcare Assistance"
    },
    navigation: {
      "book consultation": "#",
      "find doctors": "#doctors",
      "services": "#services",
      "about us": "#about",
      "contact": "#contact"
    }
  };

  const generateResponse = useCallback((userMessage) => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('emergency') || msg.includes('urgent')) {
      return "For emergencies, you can register for our Emergency Coverage service. This provides priority response and 24/7 coverage. Click 'Register Now' in the Emergency Coverage section, or call our emergency line at +234 800 000 0000. We also have an Emergency Registration form in the Emergency section of our platform.";
    }
    
    if (msg.includes('book') || msg.includes('appointment')) {
      return "You can book a consultation by clicking the 'Book Consultation' button on the homepage. This will schedule a secure video appointment with one of our qualified doctors. You can also find the booking option under the Services section.";
    }
    
    if (msg.includes('home service') || msg.includes('home visit') || msg.includes('nurse at home')) {
      return "We offer home services including: Doctor Visit at Home, Nursing Care, Diagnostics at Home, Physiotherapy at Home, and Specialist Visit. Click 'Book Home Service' to schedule any of these services. We bring quality healthcare directly to your home.";
    }
    
    if (msg.includes('doctor') || msg.includes('specialist')) {
      return "We have 500+ qualified doctors across 50+ specialties. You can find doctors through our platform by clicking 'Find Doctors' in the navigation or 'Book Consultation' on the homepage. Our AI can help match you with the right specialist based on your symptoms.";
    }
    
    if (msg.includes('cost') || msg.includes('price') || msg.includes('fee') || msg.includes('payment')) {
      return "For pricing information, please contact our support team at support@247healthcenter.com or +234 800 000 0000. We offer competitive rates for consultations, and emergency coverage requires pre-payment for faster response times.";
    }
    
    if (msg.includes('24/7') || msg.includes('available') || msg.includes('hours')) {
      return "247HealthCenter is available 24 hours a day, 7 days a week. Our AI Assistant is here to help anytime, and our medical professionals provide round-the-clock support.";
    }
    
    if (msg.includes('symptom') || msg.includes('pain') || msg.includes('hurt')) {
      return "I'm not a substitute for professional medical advice, but I can help you navigate to the right service. For symptom assessment, please book a Remote Consultation with one of our doctors. If this is a medical emergency, please call emergency services immediately or use our Emergency Coverage registration.";
    }
    
    if (msg.includes('who') || msg.includes('what is') || msg.includes('about')) {
      return "247HealthCenter is a next-generation digital health platform that connects patients, doctors, and specialists through secure online care. We provide remote consultations, emergency response coordination, and home medical services to reduce wait times and improve access to care.";
    }
    
    if (msg.includes('stats') || msg.includes('numbers') || msg.includes('how many')) {
      return "Our platform serves 10,000+ happy patients with 500+ qualified doctors across 50+ specialties. We maintain 99% patient satisfaction and provide 24/7 support. Over 50,000 remote sessions have been completed successfully.";
    }
    
    if (msg.includes('thank') || msg.includes('thanks')) {
      return "You're welcome! I'm here 24/7 to help. Is there anything else I can assist you with?";
    }
    
    if (msg.includes('hello') || msg.includes('hi')) {
      return "Hello! I'm your 247HealthCenter AI Assistant, available 24/7. I can help answer questions about our services, guide you through booking consultations, explain our emergency coverage, or assist with home service bookings. What would you like to know?";
    }
    
    return "I'm here to help! I can assist with information about our Remote Consultation, Specialist Access, In-Person Escalation, Emergency Coverage, or Home Services. I can also help guide you through booking appointments or finding the right doctor. What would you like to know?";
  }, []);

  const sendMessage = useCallback((text) => {
    if (!text.trim()) return;
    
    const userMessage = { id: Date.now(), sender: 'user', text };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    
    setTimeout(() => {
      const response = generateResponse(text);
      const aiMessage = { id: Date.now() + 1, sender: 'ai', text: response };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000);
  }, [generateResponse]);

  const toggleChat = useCallback(() => setIsOpen(prev => !prev), []);

  return (
    <AIAssistantContext.Provider value={{ isOpen, messages, isTyping, sendMessage, toggleChat, aiKnowledgeBase, siteData }}>
      {children}
      <AIAssistantWidget />
    </AIAssistantContext.Provider>
  );
}

function AIAssistantWidget() {
  const { isOpen, messages, isTyping, sendMessage, toggleChat } = useAIAssistant();
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
    setInput('');
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 shadow-2xl shadow-blue-300 flex items-center justify-center text-white text-3xl z-50 transition transform hover:scale-110"
        aria-label="Open AI Assistant"
      >
        🤖
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col z-50 overflow-hidden">
          <div className="bg-blue-600 text-white p-4 rounded-t-3xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg">247HealthCenter AI</h3>
                <p className="text-xs opacity-80">Available 24/7</p>
              </div>
              <button onClick={toggleChat} className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center">
                ✕
              </button>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-900'}`}>
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-100 p-3 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-slate-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about 247HealthCenter..."
                className="flex-1 px-4 py-2 rounded-2xl border border-slate-300 focus:outline-none focus:border-blue-600"
              />
              <button type="submit" className="px-4 py-2 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}