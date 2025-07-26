import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Download, Clock, CheckCircle } from 'lucide-react';
import { mockData, mockFunctions } from '../mock';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await mockFunctions.sendContactMessage(formData);
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
          variant: "default"
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'EMAIL',
      value: mockData.personal.email,
      href: `mailto:${mockData.personal.email}`
    },
    {
      icon: Phone,
      label: 'PHONE',
      value: mockData.personal.phone,
      href: `tel:${mockData.personal.phone}`
    },
    {
      icon: MapPin,
      label: 'LOCATION',
      value: mockData.personal.location,
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="label mb-4">GET IN TOUCH</div>
          <h2 className="title-big mb-8">CONTACT ME</h2>
          <p className="text-body max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together 
            to bring your ideas to life with cutting-edge mobile and web solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-regular font-bold mb-6">LET'S TALK</h3>
              <p className="text-body mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you need a Flutter developer, mobile app consultant, or 
                want to discuss a potential collaboration, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                return (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent flex items-center justify-center flex-shrink-0">
                      <IconComponent size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="label-small mb-1">{info.label}</div>
                      <a 
                        href={info.href}
                        className="text-body hover:text-accent transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Availability Status */}
            <div className="card bg-green-50 border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle size={20} className="text-green-600" />
                <div className="label text-green-600">AVAILABLE FOR WORK</div>
              </div>
              <p className="text-body">
                Currently accepting new projects. Expected response time: 24-48 hours.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <div className="label mb-4">CONNECT WITH ME</div>
              <div className="flex gap-4">
                <a href="#" className="btn-ghost flex items-center gap-2">
                  <Linkedin size={16} />
                  LINKEDIN
                </a>
                <a href="#" className="btn-ghost flex items-center gap-2">
                  <Github size={16} />
                  GITHUB
                </a>
                <button 
                  onClick={mockFunctions.downloadResume}
                  className="btn-ghost flex items-center gap-2"
                >
                  <Download size={16} />
                  RESUME
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <div className="label mb-6">SEND MESSAGE</div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="label-small block mb-2">NAME *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-200 focus:border-accent focus:outline-none transition-colors text-body"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="label-small block mb-2">EMAIL *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-200 focus:border-accent focus:outline-none transition-colors text-body"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="label-small block mb-2">SUBJECT *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-200 focus:border-accent focus:outline-none transition-colors text-body"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <label className="label-small block mb-2">MESSAGE *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full p-3 border border-gray-200 focus:border-accent focus:outline-none transition-colors text-body resize-none"
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-accent w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Clock size={16} className="animate-spin" />
                    SENDING...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    SEND MESSAGE
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-body text-sm text-center">
                By sending this message, you agree that I may contact you regarding your inquiry.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-12 border-t border-gray-200">
          <div className="text-center">
            <div className="header-logo mb-4">PRATHVIK RAIKAR</div>
            <p className="text-body mb-6">
              Flutter & Mobile App Developer • Building the future, one app at a time
            </p>
            <div className="flex justify-center gap-6">
              <a href="#" className="nav-link">GITHUB</a>
              <a href="#" className="nav-link">LINKEDIN</a>
              <a href="#" className="nav-link">RESUME</a>
              <a href="#" className="nav-link">EMAIL</a>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="label-small">© 2024 PRATHVIK RAIKAR. ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;