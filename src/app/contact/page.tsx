"use client";
import { motion } from 'framer-motion';
import { PhoneCall, Mail, MapPin, Clock, MessageCircle, AlertCircle } from 'lucide-react';
import { clinicData } from '@/config/clinic';
import { BaseButton, WhatsAppButton, CallButton } from '@/components/ui/Buttons';
import AppointmentForm from '@/components/forms/AppointmentForm';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function ContactPage() {
  const scrollToForm = () => {
    document.getElementById('appointment-form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. CONTACT HERO */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <span className="inline-block py-1 px-3 rounded-full bg-supporting/50 text-primary text-sm font-semibold mb-6 tracking-wide uppercase">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
              Book an Appointment for Your Pet
            </h1>
            <p className="text-lg text-textLight mb-8 max-w-2xl mx-auto leading-relaxed">
              Have a question about your pet&apos;s health or want to schedule a veterinary consultation? Send us an enquiry and the clinic team will get in touch.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <BaseButton onClick={scrollToForm} className="w-full sm:w-auto">
                Book an Appointment
              </BaseButton>
              <WhatsAppButton className="w-full sm:w-auto" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2 & 3 & 4. MAIN CONTENT: CONTACT CARDS & FORM */}
      <section id="appointment-form-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* LEFT: Appointment Form */}
            <motion.div {...fadeInUp} className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-3">Book an Appointment</h2>
                <p className="text-textLight text-lg">Fill in the details below and the clinic team will contact you to discuss your appointment.</p>
              </div>
              <AppointmentForm />
              
              {/* 7. IMPORTANT APPOINTMENT NOTICE */}
              <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-5 flex items-start">
                <AlertCircle className="w-6 h-6 text-primary mr-3 shrink-0 mt-0.5" />
                <div className="text-sm text-primary">
                  <h4 className="font-bold mb-1">Appointment Information</h4>
                  <p className="mb-2">Submitting this form sends an appointment enquiry to the clinic. The clinic team will contact you to discuss availability and confirm your appointment.</p>
                  <p className="font-semibold text-accent">For urgent concerns, please contact the clinic directly by phone.</p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Contact Information Cards & WhatsApp Alternative */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {/* WhatsApp Alternative */}
              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-green-50 to-[#25D366]/10 p-6 rounded-2xl border border-[#25D366]/20">
                <h3 className="text-xl font-bold text-primary mb-2">Prefer WhatsApp?</h3>
                <p className="text-textLight text-sm mb-4">You can also send your appointment enquiry directly to {clinicData.name} on WhatsApp.</p>
                <WhatsAppButton className="w-full shadow-sm" />
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-secondary p-6 rounded-2xl border border-gray-50 flex items-start">
                <PhoneCall className="w-6 h-6 text-accent mr-4 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-1">Call Us</h4>
                  <p className="text-textLight mb-3">{clinicData.phone}</p>
                  <BaseButton asAnchor href={`tel:${clinicData.phone.replace(/[^0-9+]/g, '')}`} variant="outline" className="text-sm py-2 px-4">Call Now</BaseButton>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-secondary p-6 rounded-2xl border border-gray-50 flex items-start">
                <Mail className="w-6 h-6 text-accent mr-4 shrink-0 mt-1" />
                <div className="w-full">
                  <h4 className="text-sm font-semibold text-primary mb-1">Email</h4>
                  <p className="text-textLight text-sm mb-3 truncate" title={clinicData.email}>{clinicData.email}</p>
                  <BaseButton asAnchor href={`mailto:${clinicData.email}`} variant="outline" className="text-sm py-2 px-4">Email Us</BaseButton>
                </div>
              </motion.div>

              {/* 6. OPENING HOURS */}
              <motion.div variants={fadeInUp} className="bg-secondary p-6 rounded-2xl border border-gray-50 flex items-start">
                <Clock className="w-6 h-6 text-accent mr-4 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-1">Clinic Hours</h4>
                  {clinicData.placeholders.workingHours === "[ADD CLINIC TIMINGS]" ? (
                    <p className="text-textLight text-sm italic">Please contact the clinic for current availability. Opening hours will be updated soon.</p>
                  ) : (
                    <p className="text-textLight text-sm">{clinicData.placeholders.workingHours}</p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GLOBAL MULTI-LOCATION CTA */}
      <section className="py-16 bg-secondary border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Visit Our Clinics</h2>
            <p className="text-textLight text-lg max-w-2xl mx-auto">We are proud to serve pet families at two convenient locations in Navi Mumbai and Panvel.</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {clinicData.locations.map((location, index) => (
              <motion.div 
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-soft border border-gray-100 flex flex-col"
              >
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-bold text-primary mb-6">{location.name}</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start text-textLight">
                      <MapPin className="w-5 h-5 text-accent mr-4 shrink-0 mt-1" />
                      <p className="leading-relaxed text-sm font-medium">{location.address}</p>
                    </div>
                    <div className="flex items-center text-textLight">
                      <PhoneCall className="w-5 h-5 text-accent mr-4 shrink-0" />
                      <p className="text-sm font-medium">{location.phone}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <BaseButton asAnchor href={location.mapDirections} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px] text-sm">
                      Directions
                    </BaseButton>
                    <CallButton phone={location.phone} className="flex-1 min-w-[140px] text-sm" />
                  </div>
                </div>
                
                {/* Map Iframe */}
                <div className="w-full h-56 bg-gray-100 relative border-t border-gray-100">
                  <iframe 
                    src={location.mapEmbed} 
                    className="absolute inset-0 w-full h-full border-0" 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Google Maps Location for ${location.name}`}
                  ></iframe>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-20 md:py-32 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Have Questions About Your Pet?</h2>
            <p className="text-blue-100 text-lg mb-10">
              Our team is just a call or WhatsApp message away.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <CallButton variant="white" className="w-full sm:w-auto" />
              <WhatsAppButton className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10" />
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}