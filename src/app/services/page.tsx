"use client";
import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  HeartPulse, 
  Home as HomeIcon, 
  Syringe, 
  Activity,
  ShieldCheck, 
  PhoneCall, 
  MapPin, 
  ArrowRight,
  ClipboardList,
  MessageCircle,
  Stethoscope as ConsultIcon,
  CheckCircle2,
  Mail
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

// Local icon mapping to prevent unnecessary structural changes to clinic.ts
const getServiceIcon = (serviceName: string) => {
  if (serviceName.includes("Consultation")) return Stethoscope;
  if (serviceName.includes("Diagnosis")) return Activity;
  if (serviceName.includes("Preventive")) return HeartPulse;
  if (serviceName.includes("Vaccination")) return Syringe;
  if (serviceName.includes("Guidance")) return ShieldCheck;
  if (serviceName.includes("Home")) return HomeIcon;
  return Stethoscope;
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. SERVICES HERO */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp} className="order-2 md:order-1 text-center md:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-supporting/50 text-primary text-sm font-semibold mb-6 tracking-wide">
              OUR VETERINARY SERVICES
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
              Care for Every Stage of Your Pet&apos;s Journey
            </h1>
            <p className="text-lg text-textLight mb-8 max-w-lg mx-auto md:mx-0">
              Happy Puppy Pets Clinic provides professional veterinary consultation and dedicated pet health care for pet parents in {clinicData.address.short}.
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
            {/* TODO: Replace ImagePlaceholder with <Image src="/images/services/services-hero.jpg" /> */}
            <ImagePlaceholder filename="/images/services/services-hero.jpg" className="w-full aspect-[4/3] shadow-soft" />
          </motion.div>
        </div>
      </section>

      {/* 2. INTRODUCTORY SECTION */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* TODO: Replace ImagePlaceholder with <Image src="/images/services/service-introduction.jpg" /> */}
            <ImagePlaceholder filename="/images/services/service-introduction.jpg" className="w-full aspect-square md:aspect-[4/5] shadow-soft" />
          </motion.div>
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Veterinary Care With a Personal Approach</h2>
            <div className="space-y-4 text-textLight text-lg mb-8">
              <p>
                Pets need regular health attention to thrive. Professional veterinary consultation helps identify underlying health concerns early, ensuring your pet receives the right guidance.
              </p>
              <p>
                Preventive care is an important part of our practice. We encourage pet parents in {clinicData.address.short} to contact the clinic for ongoing health support, routine check-ups, and tailored advice to maintain their pet&apos;s wellbeing.
              </p>
            </div>
            <BaseButton asAnchor href="/contact" variant="outline" className="group">
              Talk to Our Clinic
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </BaseButton>
          </motion.div>
        </div>
      </section>

      {/* 3. MAIN SERVICES GRID */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Veterinary Services</h2>
            <p className="text-textLight text-lg">
              Explore the veterinary care and support available at {clinicData.name}.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {clinicData.services.map((service, index) => {
              const IconComponent = getServiceIcon(service.name);
              return (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-soft border border-gray-50 flex flex-col h-full group"
                >
                  <div className="bg-supporting/30 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{service.name}</h3>
                  <p className="text-textLight flex-grow mb-6">{service.description}</p>
                  <a href="/contact" className="inline-flex items-center text-accent font-medium hover:text-amber-600 transition-colors">
                    Enquire Now <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 4. HOW WE HELP YOUR PET */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Supporting Your Pet&apos;s Health</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Consultation", desc: "Understand your pet's health concerns.", icon: ConsultIcon },
              { num: "02", title: "Assessment", desc: "Discuss symptoms and health needs with the veterinarian.", icon: ClipboardList },
              { num: "03", title: "Care Guidance", desc: "Receive appropriate guidance for your pet's care.", icon: ShieldCheck },
              { num: "04", title: "Follow-up", desc: "Stay connected with the clinic when follow-up care is needed.", icon: MessageCircle }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto bg-secondary rounded-full flex items-center justify-center mb-6 relative">
                  <step.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  <div className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                    {step.num}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-primary mb-2">{step.title}</h4>
                <p className="text-textLight text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VET AT HOME HIGHLIGHT */}
      <section className="py-20 md:py-32 bg-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {/* TODO: Replace ImagePlaceholder with <Image src="/images/services/vet-at-home-services.jpg" /> */}
            <ImagePlaceholder filename="/images/services/vet-at-home-services.jpg" className="w-full aspect-[4/3] bg-blue-900 border-none text-blue-300" />
          </motion.div>
          <motion.div {...fadeInUp}>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-800 text-blue-100 text-sm font-semibold mb-6">
              Home Visit Service
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Veterinary Care at Home</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              For pet parents who prefer consultation at home, {clinicData.name} also offers veterinary home visits.
            </p>
            <ul className="space-y-6 mb-10">
              {[
                { title: 'Convenient', desc: 'Avoid unnecessary travel when a home consultation is suitable.' },
                { title: 'Comfortable', desc: 'Your pet can remain in familiar surroundings.' },
                { title: 'Easy to Enquire', desc: 'Contact the clinic to check home visit availability.' }
              ].map((benefit, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-accent mr-4 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-lg">{benefit.title}</h4>
                    <p className="text-blue-200 mt-1">{benefit.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <BaseButton asAnchor href="/vet-at-home" className="w-full sm:w-auto hover:bg-blue-800">
                Book a Home Visit
              </BaseButton>
              <WhatsAppButton className="bg-transparent border border-blue-400 text-white hover:bg-blue-800" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. APPOINTMENT CTA */}
      <section className="py-20 md:py-32 bg-secondary text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Need Veterinary Care for Your Pet?</h2>
            <p className="text-textLight text-lg mb-10">
              Contact {clinicData.name} to enquire about an appointment or veterinary home visit.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <BaseButton asAnchor href="/contact" className="w-full sm:w-auto">Book an Appointment</BaseButton>
              <WhatsAppButton className="w-full sm:w-auto" />
              <CallButton variant="white" className="w-full sm:w-auto" />
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

    </div>
  );
}
