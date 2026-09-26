export const clinicData = {
  name: "HAPPY PUPPY PETS CLINIC",
  doctor: "Dr. Dinesh Kumar",
  qualifications: "B.V.Sc. & A.H., PG.C.V.H.",
  phone: "+91 91667 92133",
  email: "happypuppypetclinic@gmail.com",
  
  // Root address used for global footer/home/about pages
  address: {
    full: "Dream Home, Shop No. 1/2, Plot No. 158, Sector 19, Opp. Om Sai Hospital, Ulwe, Navi Mumbai - 410206, Maharashtra, India",
    short: "Ulwe, Navi Mumbai",
  },

  // Multiple Locations Array for Contact Page & Forms
  locations: [
    {
      id: "ulwe",
      name: "Ulwe Clinic",
      address: "Dream Home, Shop No. 1/2, Plot No. 158, Sector 19, Opp. Om Sai Hospital, Ulwe, Navi Mumbai - 410206",
      phone: "+91 91667 92133",
      mapDirections: "https://www.google.com/maps/search/?api=1&query=HAPPY+PUPPY+PETS+CLINIC+Ulwe",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1540.8817503973135!2d73.02729981874901!3d18.97233716674289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c37623aa027b%3A0x585bae25a755b017!2sHAPPY%20PUPPY%20PETS%20CLINIC!5e0!3m2!1sen!2sin!4v1790278269604!5m2!1sen!2sin",
    },
    {
      id: "karanjade",
      name: "Karanjade Clinic & Pet Shop",
      address: "Sector-2A, Shop no-13, Neel Ashima, near Axis Bank, Karanjade, Panvel, Maharashtra 410206",
      phone: "+91 90761 20293",
      mapDirections: "https://www.google.com/maps/search/?api=1&query=Happy+Puppy+Pets+Clinic+Karanjade",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.8679221147554!2d73.098559375203!3d18.981439582203752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e90d52017329%3A0xe1c2355336bcc791!2sHappy%20Puppy%20Pets%20Clinic%20%26%20Pet%20Shop%20Karanjade!5e0!3m2!1sen!2sin!4v1790419589478!5m2!1sen!2sin",
    }
  ],

  // Links block (This was missing!)
  links: {
    whatsapp: "https://wa.me/919166792133?text=Hello%20Happy%20Puppy%20Pets%20Clinic,%20I%20would%20like%20to%20book%20an%20appointment%20for%20my%20pet.",
    googleMapsDirections: "https://www.google.com/maps/search/?api=1&query=HAPPY+PUPPY+PETS+CLINIC+Ulwe",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1540.8817503973135!2d73.02729981874901!3d18.97233716674289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c37623aa027b%3A0x585bae25a755b017!2sHAPPY%20PUPPY%20PETS%20CLINIC!5e0!3m2!1sen!2sin!4v1790278269604!5m2!1sen!2sin",
    instagram: "", 
    facebook: "", 
    googleBusinessUrl: "", 
  },
  
  reviews: { 
    rating: "4.6", 
    count: "205+" 
  },
  
  placeholders: { 
    workingHours: "Open until 10:00 PM" 
  },
  
  services: [
    { name: "Veterinary Consultation", description: "Professional veterinary consultation for understanding your pet's health concerns and care needs." },
    { name: "Diagnosis & Treatment", description: "Veterinary evaluation and appropriate treatment guidance based on your pet's condition." },
    { name: "Preventive & Routine Pet Care", description: "Support for routine health needs and preventive care to help maintain your pet's wellbeing." },
    { name: "Vaccination", description: "Veterinary guidance for keeping your pet's vaccination schedule on track." },
    { name: "Pet Health Guidance", description: "Practical veterinary guidance for everyday pet health and care." },
    { name: "Veterinary Home Visits", description: "Convenient veterinary consultation at home for pet parents who prefer care in familiar surroundings." }
  ]
};