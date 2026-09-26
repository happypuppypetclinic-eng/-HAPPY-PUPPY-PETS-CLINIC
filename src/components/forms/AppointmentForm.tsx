"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';
import { clinicData } from '@/config/clinic';
import { BaseButton } from '@/components/ui/Buttons';

export default function AppointmentForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [minDate, setMinDate] = useState('');
  
  const [formData, setFormData] = useState({
    parentName: '',
    mobile: '',
    email: '',
    petName: '',
    petType: '',
    service: '',
    preferredLocation: '', // NEW
    preferredDate: '',
    preferredTime: '',
    message: '',
    consent: false
  });

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setMinDate(today);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const generateWhatsAppLink = () => {
    const text = `Hello Happy Puppy Pets Clinic, I would like to book an appointment for my pet.
    
*Pet Parent:* ${formData.parentName || '[Not provided]'}
*Mobile:* ${formData.mobile || '[Not provided]'}
*Pet Name:* ${formData.petName || '[Not provided]'}
*Pet Type:* ${formData.petType || '[Not provided]'}
*Service:* ${formData.service || '[Not provided]'}
*Location:* ${formData.preferredLocation || '[Not provided]'}
*Date:* ${formData.preferredDate || '[Not provided]'}
*Time:* ${formData.preferredTime || 'Any'}
*Message:* ${formData.message || 'None'}`;

    return `https://wa.me/${clinicData.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error("Web3Forms Access Key is missing");
      setStatus('error');
      return;
    }

    try {
      const form = new FormData();
      form.append("access_key", accessKey);
      form.append("subject", "New Appointment Enquiry - Happy Puppy Pets Clinic");
      form.append("from_name", clinicData.name);
      
      form.append("Pet Parent Name", formData.parentName);
      form.append("Mobile Number", formData.mobile);
      if (formData.email) form.append("Email", formData.email);
      form.append("Pet Name", formData.petName);
      form.append("Pet Type", formData.petType);
      form.append("Service Required", formData.service);
      form.append("Preferred Clinic Location", formData.preferredLocation);
      form.append("Preferred Date", formData.preferredDate);
      if (formData.preferredTime) form.append("Preferred Time", formData.preferredTime);
      if (formData.message) form.append("Message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: form });
      if (response.ok) setStatus('success');
      else setStatus('error');
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-supporting/30 border border-supporting rounded-2xl p-8 text-center shadow-soft">
        <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-primary mb-2">Thank you!</h3>
        <p className="text-textLight mb-8 text-lg">Your appointment enquiry has been sent successfully. The clinic team will contact you shortly to confirm the appointment.</p>
        <div className="flex flex-col items-center border-t border-supporting/50 pt-6">
          <span className="text-sm font-medium text-textLight mb-3">Prefer a quicker response?</span>
          <BaseButton asAnchor href={clinicData.links.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20b858]">
            <MessageCircle className="w-4 h-4 mr-2" /> Book via WhatsApp instead
          </BaseButton>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-soft border border-gray-50">
      {status === 'error' && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-red-50 text-red-800 p-4 rounded-xl flex items-start mb-6 border border-red-100">
          <AlertCircle className="w-5 h-5 mr-3 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-semibold text-sm mb-2">Something went wrong while sending your enquiry.</p>
            <p className="text-xs mb-3">Please try again or contact us directly on WhatsApp.</p>
            <div className="flex gap-3">
              <button onClick={() => setStatus('idle')} className="text-xs font-bold underline hover:text-red-900">Try Again</button>
              <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#25D366] underline hover:text-[#20b858]">WhatsApp Us</a>
            </div>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="parentName" className="block text-sm font-semibold text-primary mb-2">Pet Parent Name *</label>
            <input type="text" id="parentName" name="parentName" required minLength={2} value={formData.parentName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="Enter your full name" />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm font-semibold text-primary mb-2">Mobile Number *</label>
            <input type="tel" id="mobile" name="mobile" required pattern="^[6-9]\d{9}$" title="Please enter a valid 10-digit Indian mobile number" value={formData.mobile} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="e.g. 9876543210" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="petName" className="block text-sm font-semibold text-primary mb-2">Pet Name *</label>
            <input type="text" id="petName" name="petName" required value={formData.petName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="Your pet's name" />
          </div>
          <div>
            <label htmlFor="petType" className="block text-sm font-semibold text-primary mb-2">Pet Type *</label>
            <select id="petType" name="petType" required value={formData.petType} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white">
              <option value="" disabled>Select pet type</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-primary mb-2">Service Required *</label>
            <select id="service" name="service" required value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white">
              <option value="" disabled>Select a service</option>
              {clinicData.services.map((s, idx) => (
                <option key={idx} value={s.name}>{s.name}</option>
              ))}
            </select>
          </div>
          <div>
             <label htmlFor="preferredLocation" className="block text-sm font-semibold text-primary mb-2">Clinic Location *</label>
             <select id="preferredLocation" name="preferredLocation" required value={formData.preferredLocation} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white">
               <option value="" disabled>Select a clinic</option>
               {clinicData.locations.map((loc, idx) => (
                 <option key={idx} value={loc.name}>{loc.name}</option>
               ))}
             </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="preferredDate" className="block text-sm font-semibold text-primary mb-2">Preferred Date *</label>
            <input type="date" id="preferredDate" name="preferredDate" required min={minDate} value={formData.preferredDate} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-textMain" />
          </div>
          <div>
            <label htmlFor="preferredTime" className="block text-sm font-semibold text-primary mb-2">Preferred Time (Optional)</label>
            <input type="time" id="preferredTime" name="preferredTime" value={formData.preferredTime} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-textMain" />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">Message / Reason for Visit (Optional)</label>
          <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none" placeholder="Tell us briefly what you would like to discuss about your pet."></textarea>
        </div>

        <div className="flex items-start mt-2">
          <input type="checkbox" id="consent" name="consent" required checked={formData.consent} onChange={handleChange} className="mt-1 mr-3 w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent" />
          <label htmlFor="consent" className="text-sm text-textLight">I agree to be contacted by {clinicData.name} regarding my appointment enquiry.</label>
        </div>

        <BaseButton type="submit" disabled={status === 'submitting'} className="w-full py-4 text-lg mt-4 shadow-md flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed">
          {status === 'submitting' ? 'Sending...' : 'Submit Enquiry'}
          {status !== 'submitting' && <Send className="w-5 h-5 ml-2" />}
        </BaseButton>
      </form>
    </div>
  );
}