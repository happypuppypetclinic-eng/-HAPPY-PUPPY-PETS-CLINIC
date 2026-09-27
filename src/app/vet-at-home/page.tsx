"use client";
import { motion } from 'framer-motion';
import { 
  Home as HomeIcon, 
  MapPin, 
  Clock, 
  Heart, 
  Car, 
  User, 
  CheckCircle2, 
  AlertCircle,
  PhoneCall,
  Mail,
  ArrowRight,
  ClipboardList
} from 'lucide-react';
import { clinicData } from '@/config/clinic';
import { BaseButton, WhatsAppButton, CallButton } from '@/components/ui/Buttons';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';

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

export default function VetAtHomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp} className="order-2 md:order-1 text-center md:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-supporting/50 text-primary text-sm font-semibold mb-6 tracking-wide">
              VETERINARY CARE AT HOME
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
              Comfortable Veterinary Care, Right at Home
            </h1>
            <p className="text-lg text-textLight mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {clinicData.name} offers veterinary home visits for pet parents in {clinicData.address.short} who prefer consultation and care in their pet&apos;s familiar surroundings.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <BaseButton asAnchor href="/contact?service=Veterinary+Home+Visits" variant="primary" className="w-full sm:w-auto">
                Book a Home Visit
              </BaseButton>
              <WhatsAppButton className="w-full sm:w-auto" />
            </div>
            <div className="mt-6 flex items-center justify-center md:justify-start text-textLight">
              <span className="text-sm">Or call directly:</span>
              <a href={`tel:${clinicData.phone.replace(/[^0-9+]/g, '')}`} className="ml-2 font-semibold text-primary hover:text-accent transition-colors">
                {clinicData.phone}
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            {/* TODO: Replace ImagePlaceholder with <Image src="/images/vet-at-home/vet-at-home-hero.jpg" /> */}
            <ImagePlaceholder filename="/images/vet-at-home/vet-at-home-hero.jpg" className="w-full aspect-[4/3] shadow-soft" />
          </motion.div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* TODO: Replace ImagePlaceholder with <Image src="/images/vet-at-home/home-consultation.jpg" /> */}
            <ImagePlaceholder filename="/images/vet-at-home/home-consultation.jpg" className="w-full aspect-square md:aspect-[4/5] shadow-soft" />
          </motion.div>
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Veterinary Care in Familiar Surroundings</h2>
            <div className="space-y-4 text-textLight text-lg mb-8 leading-relaxed">
              <p>
                Visiting a clinic can sometimes be difficult for pets and their families. We understand that a peaceful environment can make a big difference during a health assessment.
              </p>
              <p>
                A home visit provides a convenient way to discuss your pet&apos;s health directly with a veterinarian in a familiar, stress-free environment.
              </p>
            </div>
            <BaseButton asAnchor href="/contact?service=Veterinary+Home+Visits" variant="primary" className="group">
              Enquire for a Home Visit
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </BaseButton>
          </motion.div>
        </div>
      </section>

      {/* 3. WHY CONSIDER A HOME VISIT */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Pet Parents May Choose a Home Visit</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Clock, title: "Convenience", desc: "Avoid unnecessary travel when a home consultation is suitable for your pet." },
              { icon: Heart, title: "Familiar Surroundings", desc: "Some pets may feel more comfortable and relaxed in their own environment." },
              { icon: Car, title: "Less Travel Stress", desc: "A home consultation can reduce the need to transport your pet for suitable appointments." },
              { icon: User, title: "Personal Attention", desc: "Discuss your pet's health concerns directly with the veterinarian." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-soft"
              >
                <div className="bg-supporting/30 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-textLight">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. SUITABLE SITUATIONS & 5. HOW IT WORKS */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Suitable Situations */}
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold text-primary mb-6">Home Visits May Be Useful For</h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Routine veterinary consultation",
                  "General health concerns",
                  "Preventive care discussions",
                  "Follow-up discussions when appropriate",
                  "Pets that find travel difficult",
                  "Senior pets where travel may be inconvenient"
                ].map((situation, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-accent mr-3 shrink-0" />
                    <span className="text-textMain text-lg">{situation}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-red-50 border border-red-100 rounded-xl p-5 flex items-start">
                <AlertCircle className="w-6 h-6 text-red-500 mr-3 shrink-0 mt-0.5" />
                <p className="text-sm text-red-800">
                  <strong className="block mb-1">Important Note:</strong>
                  For urgent or emergency situations, please contact the clinic first to understand the appropriate next step.
                </p>
              </div>
            </motion.div>

            {/* How It Works */}
            <motion.div {...fadeInUp} className="bg-secondary p-8 md:p-10 rounded-3xl shadow-soft border border-gray-50">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">How a Home Visit Works</h2>
              <div className="space-y-8 relative">
                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-200 hidden sm:block"></div>
                {[
                  { title: "Contact Us", desc: "Call or WhatsApp the clinic to enquire about a home visit." },
                  { title: "Share Your Requirement", desc: "Tell the clinic about your pet and the reason for the consultation." },
                  { title: "Confirm Your Visit", desc: "The clinic will discuss availability and appointment details." },
                  { title: "Veterinary Consultation", desc: "The veterinarian visits your home at the confirmed time, where appropriate." }
                ].map((step, index) => (
                  <div key={index} className="flex relative z-10">
                    <div className="w-12 h-12 bg-white border-2 border-primary rounded-full flex items-center justify-center text-primary font-bold shrink-0 mr-6 shadow-sm">
                      {index + 1}
                    </div>
                    <div className="pt-2">
                      <h4 className="font-bold text-primary text-lg mb-1">{step.title}</h4>
                      <p className="text-textLight">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 6. WHAT TO EXPECT */}
      <section className="py-20 md:py-32 bg-secondary border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp} className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">What to Keep Ready</h2>
            <p className="text-lg text-textLight mb-8">
              To help the consultation run smoothly, we recommend having a few things prepared before the veterinarian arrives.
            </p>
            <ul className="space-y-4">
              {[
                "Your pet's basic information",
                "Previous medical records, if available",
                "Current medicines, if any",
                "Vaccination information, if available",
                "A brief description of the concern"
              ].map((item, i) => (
                <li key={i} className="flex items-center bg-white px-4 py-3 rounded-lg shadow-sm">
                  <ClipboardList className="w-5 h-5 text-accent mr-4 shrink-0" />
                  <span className="text-textMain">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            {/* TODO: Replace ImagePlaceholder with <Image src="/images/vet-at-home/home-visit.jpg" /> */}
            <ImagePlaceholder filename="/images/vet-at-home/home-visit.jpg" className="w-full aspect-[4/3] shadow-soft" />
          </motion.div>
        </div>
      </section>

      {/* 7. IMPORTANT NOTE */}
      <section className="py-12 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="bg-blue-900/50 border border-blue-700 rounded-2xl p-8 text-center"
          >
            <h3 className="text-xl font-bold text-white mb-4">Before Requesting a Home Visit</h3>
            <p className="text-blue-200 leading-relaxed max-w-2xl mx-auto">
              Home visits are subject to availability and suitability. Some examinations, diagnostic procedures, or treatments may require a visit to a veterinary clinic. Please contact {clinicData.name} to discuss your pet&apos;s specific needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 8. APPOINTMENT CTA */}
      <section className="py-20 md:py-32 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Need a Veterinary Home Visit?</h2>
            <p className="text-textLight text-lg mb-10">
              Contact {clinicData.name} to enquire about availability and schedule a suitable consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <BaseButton asAnchor href="/contact?service=Veterinary+Home+Visits" variant="primary" className="w-full sm:w-auto">Book a Home Visit</BaseButton>
              <WhatsAppButton className="w-full sm:w-auto" />
              <CallButton className="w-full sm:w-auto" />
            </div>
          </motion.div>
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
                    <CallButton className="flex-1 min-w-[140px] text-sm" />
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

    </div>
  );
}