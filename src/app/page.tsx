"use client";
import type { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Stethoscope, HeartPulse, Home as HomeIcon, Calendar, ArrowRight, ShieldCheck, PhoneCall, MapPin, Star } from 'lucide-react';
import { clinicData } from '@/config/clinic';
import { BaseButton, WhatsAppButton, CallButton } from '@/components/ui/Buttons';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';

// Note: In Next.js App Router with "use client", metadata must be exported from a separate layout.tsx 
// or a server component. Since we are using animations on the page level, the global metadata 
// established in layout.tsx during Step 1 naturally covers the home page perfectly.

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp} className="order-2 md:order-1 text-center md:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-supporting/50 text-primary text-sm font-semibold mb-6">
              Veterinary Clinic in Ulwe & Karanjade 
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
              Compassionate Veterinary Care for Your Happy, Healthy Pets
            </h1>
            <p className="text-lg text-textLight mb-8 max-w-lg mx-auto md:mx-0">
              Professional consultation and convenient care for dogs, cats, and pets. Led by Dr. Dinesh Kumar.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <BaseButton asAnchor href="/contact" className="w-full sm:w-auto">
                Book an Appointment
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
            {/* TODO: Replace ImagePlaceholder with <Image src="/images/hero/hero-pet.jpg" /> */}
            <ImagePlaceholder filename="/images/hero/hero-pet.jpg" className="w-full aspect-[4/3] shadow-soft" />
          </motion.div>
        </div>
      </section>

      {/* 2. QUICK ACTION / TRUST STRIP */}
      <section className="py-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Stethoscope, title: "Veterinary Consultation", desc: "Professional pet care" },
              { icon: HeartPulse, title: "Pet Health Care", desc: "Routine & preventive care" },
              { icon: HomeIcon, title: "Vet At Home", desc: "Convenient home visits" },
              { icon: Calendar, title: "Easy Appointment", desc: "Simple enquiry process" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 p-4 rounded-xl hover:bg-secondary transition-colors"
              >
                <div className="bg-supporting/30 p-3 rounded-lg text-primary shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-textMain text-sm md:text-base">{item.title}</h3>
                  <p className="text-xs md:text-sm text-textLight mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT / INTRODUCTION SECTION */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}>
            {/* TODO: Replace ImagePlaceholder with <Image src="/images/clinic/clinic-introduction.jpg" /> */}
            <ImagePlaceholder filename="/images/clinic/clinic-introduction.jpg" className="w-full aspect-[4/5] md:aspect-square shadow-soft" />
          </motion.div>
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Care That Puts Your Pet First</h2>
            <p className="text-textLight text-lg mb-6 leading-relaxed">
              Happy Puppy Pets Clinic provides comprehensive veterinary care for pets in the {clinicData.address.short} area. Led by {clinicData.doctor} ({clinicData.qualifications}), we focus on professional diagnosis, treatment, and preventive care.
            </p>
            <ul className="space-y-4 mb-8">
              {['Veterinary consultation for dogs, cats and other pets', 'Diagnosis and treatment of pet illnesses', 'Preventive and routine pet care', 'Home visit veterinary consultation available'].map((point, i) => (
                <li key={i} className="flex items-start">
                  <ShieldCheck className="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                  <span className="text-textMain">{point}</span>
                </li>
              ))}
            </ul>
            <BaseButton asAnchor href="/about" variant="outline" className="group">
              Learn More About Us
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </BaseButton>
          </motion.div>
        </div>
      </section>

      {/* 4. VETERINARY CARE SERVICES PREVIEW */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Veterinary Services</h2>
            <p className="text-textLight text-lg">Comprehensive care to support your pet&apos;s health at every stage of life.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clinicData.services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-secondary p-8 rounded-2xl shadow-soft border border-gray-50 group"
              >
                <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center text-accent mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <HeartPulse className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{service.name}</h3>
                <p className="text-textLight">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center mt-12">
            <BaseButton asAnchor href="/services" variant="secondary">
              View All Services
            </BaseButton>
          </motion.div>
        </div>
      </section>

      {/* 5. VET AT HOME CTA */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp} className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Veterinary Care, At Your Home</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              We understand that visiting the clinic isn&apos;t always easy. Our home visit service provides professional veterinary consultation for pet parents who prefer care in the comfort of their own home.
            </p>
            <div className="space-y-6 mb-10">
              {[
                { title: 'Convenient', desc: 'Care without unnecessary travel.' },
                { title: 'Comfortable', desc: 'Your pet can be seen in familiar surroundings.' },
                { title: 'Easy to Arrange', desc: 'Contact the clinic to enquire about a home visit.' }
              ].map((benefit, i) => (
                <div key={i} className="flex">
                  <div className="bg-blue-800/50 p-2 rounded-lg h-fit mr-4">
                    <HomeIcon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{benefit.title}</h4>
                    <p className="text-blue-200">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <BaseButton asAnchor href="/vet-at-home" className=" text-primary rounded">
                Book a Home Visit
              </BaseButton>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            {/* TODO: Replace ImagePlaceholder with <Image src="/images/hero/vet-at-home.jpg" /> */}
            <ImagePlaceholder filename="/images/hero/vet-at-home.jpg" className="w-full aspect-square md:aspect-[4/3] bg-blue-900 border-none text-blue-300" />
          </motion.div>
        </div>
      </section>

      {/* 6. WHY CHOOSE HAPPY PUPPY */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Pet Parents Choose Us</h2>
            <p className="text-textLight text-lg">Committed to providing a welcoming, professional environment for you and your pets.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Compassionate Care", desc: "A caring approach for pets and their families." },
              { num: "02", title: "Professional Guidance", desc: `Veterinary consultation led by ${clinicData.doctor}.` },
              { num: "03", title: "Convenient Visits", desc: "Veterinary consultation can also be requested at home." },
              { num: "04", title: "Easy Communication", desc: "Call or WhatsApp the clinic for appointment enquiries." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-soft"
              >
                <span className="text-4xl font-black text-supporting/50 block mb-4">{item.num}</span>
                <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-textLight">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. APPOINTMENT CTA & 8. GOOGLE REVIEWS STRIP */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Trust Strip */}
          <motion.div {...fadeInUp} className="inline-flex items-center space-x-4 bg-secondary px-6 py-3 rounded-full mb-10 border border-gray-100">
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => <Star key={i} className={`w-5 h-5 ${i === 4 ? 'fill-accent/50' : 'fill-accent'}`} />)}
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <span className="font-semibold text-primary">{clinicData.reviews.rating} Rating</span>
            <div className="h-4 w-px bg-gray-300 hidden sm:block"></div>
            <span className="text-textLight hidden sm:block">{clinicData.reviews.count} Google Reviews</span>
          </motion.div>

          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Your Pet Deserves the Right Care</h2>
            <p className="text-textLight text-lg mb-10">
              Have a question about your pet&apos;s health or want to schedule a consultation? Get in touch with {clinicData.name}.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <BaseButton asAnchor href="/contact">Book an Appointment</BaseButton>
              <WhatsAppButton />
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

      {/* 10. FINAL CTA */}
      <section className="py-24 bg-accent text-white text-center">
        <motion.div {...fadeInUp} className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let&apos;s Keep Those Tails Wagging</h2>
          <p className="text-amber-50 text-xl mb-10">
            For appointments, veterinary consultation or home visit enquiries, we&apos;re just a call or WhatsApp away.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <BaseButton asAnchor href="/contact" className=" text-accent hover:bg-primary-50 shadow-lg">
              Book an Appointment
            </BaseButton>
            <BaseButton asAnchor href={clinicData.links.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white text-white hover:bg-white/10">
              WhatsApp Us
            </BaseButton>
          </div>
        </motion.div>
      </section>

    </div>
  );
}