"use client";
import { motion } from 'framer-motion';
import { 
  Heart, 
  ShieldCheck, 
  MessageCircle, 
  Home as HomeIcon,
  CheckCircle2,
  MapPin,
  PhoneCall,
  Mail,
  ArrowRight
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

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. ABOUT HERO */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp} className="order-2 md:order-1 text-center md:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-supporting/50 text-primary text-sm font-semibold mb-6 tracking-wide uppercase">
              About {clinicData.name}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
              Compassionate Care for the Pets You Love
            </h1>
            <p className="text-lg text-textLight mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {clinicData.name} provides veterinary consultation and pet care support for families in {clinicData.address.short} and the surrounding area.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <BaseButton asAnchor href="/contact" className="w-full sm:w-auto">
                Book an Appointment
              </BaseButton>
              <WhatsAppButton className="w-full sm:w-auto" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            {/* TODO: Replace ImagePlaceholder with <Image src="/images/about/about-hero.jpg" /> */}
            <ImagePlaceholder filename="/images/about/about-hero.jpg" className="w-full aspect-[4/3] shadow-soft" />
          </motion.div>
        </div>
      </section>

      {/* 2. CLINIC INTRODUCTION */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* TODO: Replace ImagePlaceholder with <Image src="/images/about/clinic.jpg" /> */}
            <ImagePlaceholder filename="/images/about/clinic.jpg" className="w-full aspect-square md:aspect-[4/5] shadow-soft" />
          </motion.div>
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About {clinicData.name}</h2>
            <div className="space-y-4 text-textLight text-lg mb-8 leading-relaxed">
              <p>
                {clinicData.name} is a veterinary clinic serving pet parents in {clinicData.address.short}. The clinic provides veterinary consultation, routine and preventive pet care, vaccination guidance, pet health guidance and veterinary home visits.
              </p>
              <p>
                The goal is to make veterinary care easier to access while providing pet parents with clear and practical guidance about their pets&apos; health.
              </p>
            </div>
            <BaseButton asAnchor href="/services" variant="outline" className="group">
              Explore Our Services
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </BaseButton>
          </motion.div>
        </div>
      </section>

      {/* 3. MEET THE VETERINARIAN */}
      <section className="py-20 md:py-32 bg-secondary border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft grid md:grid-cols-5 gap-12 items-center">
            <motion.div 
              {...fadeInUp}
              className="md:col-span-2"
            >
              {/* TODO: Replace ImagePlaceholder with <Image src="/images/doctor/dr-dinesh-kumar.jpg" /> */}
              <ImagePlaceholder filename="/images/doctor/dr-dinesh-kumar.jpg" className="w-full aspect-[4/5] shadow-sm rounded-2xl" />
            </motion.div>
            <motion.div 
              {...fadeInUp}
              className="md:col-span-3"
            >
              <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">Meet Our Veterinarian</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">{clinicData.doctor}</h2>
              <p className="text-textLight font-medium mb-6 pb-6 border-b border-gray-100">{clinicData.qualifications}</p>
              
              <p className="text-lg text-textLight mb-8 leading-relaxed">
                {clinicData.doctor} provides veterinary consultation and guidance for pet health and care. Dedicated to a professional and patient approach, he helps pet parents better understand and support the well-being of their companions.
              </p>
              
              <BaseButton asAnchor href="/contact">
                Book a Consultation
              </BaseButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. OUR APPROACH TO PET CARE */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Approach to Pet Care</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Heart, num: "01", title: "Compassionate", desc: "Treat every pet with patience and care." },
              { icon: ShieldCheck, num: "02", title: "Professional", desc: "Provide veterinary consultation and health guidance based on the pet's needs." },
              { icon: MessageCircle, num: "03", title: "Clear Communication", desc: "Help pet parents understand their pet's care requirements." },
              { icon: HomeIcon, num: "04", title: "Convenient", desc: "Offer clinic consultations and home visit options where appropriate." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-secondary p-8 rounded-2xl shadow-soft"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center text-primary shadow-sm">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black text-supporting/50">{item.num}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-textLight">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. WHAT PET PARENTS CAN EXPECT */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You Can Expect From Us</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Friendly Communication", desc: "A welcoming environment for pet parents to discuss their concerns." },
              { title: "Veterinary Guidance", desc: "Professional consultation to help understand your pet's health needs." },
              { title: "Convenient Options", desc: "Clinic appointments and home visit enquiries." },
              { title: "Pet-Focused Care", desc: "A caring approach that keeps the pet and pet parent's needs in focus." }
            ].map((block, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-blue-900/50 border border-blue-800 p-6 rounded-2xl flex items-start"
              >
                <CheckCircle2 className="w-6 h-6 text-accent mr-4 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">{block.title}</h4>
                  <p className="text-blue-200">{block.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHO WE CARE FOR */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Care for Your Companion</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Dogs Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-soft border border-gray-50 group"
            >
              <div className="w-full h-64 bg-gray-100 relative overflow-hidden">
                {/* TODO: Replace ImagePlaceholder with <Image src="/images/about/dog.jpg" /> */}
                <ImagePlaceholder filename="/images/about/dog.jpg" className="w-full h-full border-none rounded-none" />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-3">Dogs</h3>
                <p className="text-textLight">Veterinary consultation and routine care for your canine companion.</p>
              </div>
            </motion.div>

            {/* Cats Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-soft border border-gray-50 group"
            >
              <div className="w-full h-64 bg-gray-100 relative overflow-hidden">
                {/* TODO: Replace ImagePlaceholder with <Image src="/images/about/cat.jpg" /> */}
                <ImagePlaceholder filename="/images/about/cat.jpg" className="w-full h-full border-none rounded-none" />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-3">Cats</h3>
                <p className="text-textLight">Veterinary consultation and health guidance for your feline companion.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. LOCATION / SERVICE AREA */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Serving Pet Parents in {clinicData.address.short.split(',')[0]}</h2>
            <p className="text-lg text-textLight mb-8 leading-relaxed">
              {clinicData.name} is located in {clinicData.address.short}, making veterinary consultation and pet care services accessible to local pet families.
            </p>
            
            <div className="space-y-4 mb-8 bg-secondary p-6 rounded-2xl border border-gray-50">
              <div className="flex items-start text-textLight">
                <MapPin className="w-6 h-6 text-accent mr-4 shrink-0 mt-1" />
                <p className="leading-relaxed font-medium">{clinicData.address.full}</p>
              </div>
              <div className="flex items-center text-textLight">
                <PhoneCall className="w-6 h-6 text-accent mr-4 shrink-0" />
                <p className="font-medium">{clinicData.phone}</p>
              </div>
              <div className="flex items-center text-textLight">
                <Mail className="w-6 h-6 text-accent mr-4 shrink-0" />
                <p className="font-medium">{clinicData.email}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <BaseButton asAnchor href={clinicData.links.googleMapsDirections} target="_blank" rel="noopener noreferrer" variant="primary">
                Get Directions
              </BaseButton>
              <CallButton />
              <WhatsAppButton />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-full h-96 bg-gray-200 rounded-3xl overflow-hidden shadow-inner border border-gray-100"
          >
            <iframe 
              src={clinicData.links.googleMapsEmbed} 
              className="w-full h-full border-0" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location for Happy Puppy Pets Clinic"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* 8. CONTACT CTA */}
      <section className="py-20 md:py-32 bg-secondary text-center border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Let&apos;s Take Better Care of Your Pet</h2>
            <p className="text-textLight text-lg mb-10">
              Have a question or want to schedule a veterinary consultation? Get in touch with {clinicData.name}.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <BaseButton asAnchor href="/contact" className="w-full sm:w-auto">Book an Appointment</BaseButton>
              <WhatsAppButton className="w-full sm:w-auto" />
              <CallButton className="w-full sm:w-auto" />
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}