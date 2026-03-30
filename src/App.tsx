import { motion } from "motion/react";
import { ArrowUpRight, Phone, Mail, MapPin, Star, CheckCircle2, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen selection:bg-black selection:text-gold">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center">
        <div className="flex flex-col leading-tight">
          <span className="font-black text-sm tracking-tight uppercase">Fine Edge</span>
          <span className="font-medium text-[10px] tracking-widest uppercase opacity-60">Construction LLC</span>
        </div>

        <div className="flex items-center gap-8">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="group flex flex-col gap-1.5 cursor-pointer"
          >
            <div className="w-8 h-0.5 bg-black transition-all group-hover:w-6" />
            <div className="w-8 h-0.5 bg-black transition-all group-hover:w-10" />
          </button>

          <a href="#contact" className="hidden md:flex items-center gap-1 font-medium text-sm tracking-tight uppercase hover:opacity-60 transition-opacity">
            Contact <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 md:pt-44 px-6 pb-16 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-10">
          {/* Left: description + CTA */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs md:text-sm leading-relaxed opacity-60"
            >
              Siding, finish carpentry, remodels, and handyman services — delivered with sharp clean work and clean lines.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="self-start px-6 py-2.5 border border-black rounded-full text-xs font-medium uppercase tracking-wider hover:bg-black hover:text-gold transition-all duration-300"
            >
              Start your project
            </motion.button>
          </div>

          {/* Right: headline only */}
          <div className="md:col-span-9 text-right">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-[5.5vw] font-bold tracking-tighter leading-[0.9] uppercase mb-3 opacity-30">
                Your vision is our
              </h1>
              <h2 className="text-6xl md:text-[10vw] font-black tracking-tighter leading-[0.85] uppercase">
                Precision.
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative w-full aspect-[16/9] md:aspect-[21/8] overflow-hidden clip-path-parallelogram"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
            alt="Fine Edge Construction — Exterior Siding"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end z-20">
            <div className="text-cream">
              <span className="text-xs opacity-50 block mb-1.5 uppercase tracking-widest">01 — Exterior</span>
              <h3 className="text-2xl font-bold tracking-tight">Cedar Lap Siding</h3>
            </div>
            <div className="hidden md:flex items-center gap-3 text-cream/40 text-xs uppercase tracking-widest">
              <span>Scroll</span>
              <div className="w-10 h-px bg-cream/30" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-black text-cream">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none">
              What We<br />Do Best
            </h2>
            <p className="max-w-md opacity-50 text-sm leading-relaxed">
              From first board to final coat, every trade we offer is executed with the same obsessive attention to detail — sharp work, clean lines, zero shortcuts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-gold/10 border border-gold/10">
            {[
              { title: "Siding", desc: "Exterior installation and replacement that protects your home and stands out for all the right reasons." },
              { title: "Finish Carpentry", desc: "Trim, crown molding, and millwork with joints so tight they disappear into the wall." },
              { title: "Remodels", desc: "Full kitchen, bath, and living space transformations — designed around you, built to last." },
              { title: "Handyman", desc: "No job too small. Fast, reliable, and done right the first time, every time." },
              { title: "Clean Work", desc: "We treat your home like our own. Zero mess left behind, zero shortcuts taken on site." },
              { title: "Clean Lines", desc: "Every cut is deliberate. Every install is plumb, level, and square — because details matter." }
            ].map((service, i) => (
              <div key={i} className="p-12 bg-black hover:bg-gold/5 transition-colors group cursor-pointer">
                <span className="text-xs text-gold opacity-60 block mb-8 font-medium">0{i + 1}</span>
                <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:translate-x-2 transition-transform">{service.title}</h3>
                <p className="text-sm opacity-50 leading-relaxed mb-8">{service.desc}</p>
                <div className="w-10 h-px bg-gold/30 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9] mb-12">
              Why homeowners<br />choose Fine Edge
            </h2>
            <div className="space-y-12">
              {[
                { title: "Precision Craftsmanship", desc: "Every nail, joint, and seam is treated as a signature. We don't move on until it's right." },
                { title: "Spotless Job Sites", desc: "We clean up after every day of work — your home stays livable and respected throughout the project." },
                { title: "Honest Estimates", desc: "No hidden fees, no inflated scopes. Straight talk and fair pricing from the first conversation." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-black/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-sm opacity-70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square">
            <img
              src="/src/logo.png"
              alt="Fine Edge Construction LLC"
              className="w-full h-full object-contain p-12"
            />
            <div className="absolute -bottom-10 -left-10 bg-gold p-12 border border-black/10 hidden md:block">
              <span className="text-6xl font-bold block leading-none text-black">100%</span>
              <span className="text-xs uppercase tracking-widest text-black/60">Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio / Projects */}
      <section className="py-24 px-6 bg-[#F2EAD8]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">
              Selected<br />Works
            </h2>
            <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:opacity-60 transition-opacity">
              View All <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: "Cedar Lap Siding", location: "Exterior — Residential", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" },
              { title: "Master Bath Remodel", location: "Interior — Full Renovation", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1000&auto=format&fit=crop" },
              { title: "Trim & Crown Package", location: "Finish Carpentry", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop" },
              { title: "Kitchen Transformation", location: "Interior — Full Remodel", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1000&auto=format&fit=crop" }
            ].map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden mb-6">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight uppercase">{project.title}</h3>
                    <p className="text-xs opacity-60 uppercase tracking-widest mt-1">{project.location}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { quote: "Fine Edge completely transformed our home's exterior. The siding work was immaculate — sharp lines, clean edges, and not a speck of mess left behind.", author: "Sarah M.", role: "Homeowner" },
              { quote: "I hired them for finish carpentry on our new build. The trim work is so precise it looks factory-made. These are real craftsmen who take real pride in their work.", author: "James R.", role: "General Contractor" },
              { quote: "They remodeled our master bath in under two weeks. Professional, clean, and completely honest throughout. We already have them booked for the kitchen.", author: "Linda T.", role: "Homeowner" }
            ].map((t, i) => (
              <div key={i} className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
                  </div>
                  <p className="text-xl md:text-2xl font-medium leading-tight mb-12 italic">"{t.quote}"</p>
                </div>
                <div>
                  <h5 className="font-bold uppercase tracking-tight">{t.author}</h5>
                  <p className="text-xs opacity-50 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-black text-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -skew-x-12 translate-x-1/2" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-6xl md:text-[8vw] font-bold tracking-tighter uppercase leading-[0.8] mb-12">
              Ready to see your<br />vision come to life?
            </h2>
            <div className="flex flex-wrap gap-6">
              <button className="px-10 py-5 bg-gold text-black font-bold uppercase tracking-widest hover:bg-cream transition-colors flex items-center gap-3">
                Get a Free Quote <ChevronRight className="w-5 h-5" />
              </button>
              <button className="px-10 py-5 border border-gold/40 text-cream font-bold uppercase tracking-widest hover:bg-gold/10 transition-colors">
                Call Us Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="contact" className="pt-24 pb-12 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-12 gap-16 mb-24">
            <div className="md:col-span-4">
              <div className="bg-black text-gold px-3 py-1.5 font-bold text-lg tracking-tighter inline-block mb-4">
                Fine Edge
              </div>
              <p className="text-xs uppercase tracking-widest opacity-40 mb-6">Construction LLC</p>
              <p className="text-sm opacity-60 leading-relaxed mb-8 max-w-xs">
                Your vision, our precision. Siding, finish carpentry, remodels, and handyman services built on clean work and clean lines.
              </p>
              <div className="space-y-4">
                <a href="tel:+1234567890" className="flex items-center gap-3 text-sm font-medium hover:text-gold transition-colors">
                  <Phone className="w-4 h-4" /> +1 (234) 567-890
                </a>
                <a href="mailto:hello@fineedgeconstruction.com" className="flex items-center gap-3 text-sm font-medium hover:text-gold transition-colors">
                  <Mail className="w-4 h-4" /> hello@fineedgeconstruction.com
                </a>
                <div className="flex items-center gap-3 text-sm font-medium opacity-60">
                  <MapPin className="w-4 h-4" /> Serving the local area & surrounding communities
                </div>
              </div>
            </div>

            <div className="md:col-span-8">
              <form className="grid md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div className="border-b border-black/20 pb-2">
                    <label className="text-[10px] uppercase tracking-widest opacity-40 block mb-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-transparent outline-none text-sm font-medium placeholder:opacity-20" />
                  </div>
                  <div className="border-b border-black/20 pb-2">
                    <label className="text-[10px] uppercase tracking-widest opacity-40 block mb-1">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-transparent outline-none text-sm font-medium placeholder:opacity-20" />
                  </div>
                  <div className="border-b border-black/20 pb-2">
                    <label className="text-[10px] uppercase tracking-widest opacity-40 block mb-1">Service Needed</label>
                    <select className="w-full bg-transparent outline-none text-sm font-medium appearance-none">
                      <option>Siding</option>
                      <option>Finish Carpentry</option>
                      <option>Remodel</option>
                      <option>Handyman</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="border-b border-black/20 pb-2 flex-grow mb-8">
                    <label className="text-[10px] uppercase tracking-widest opacity-40 block mb-1">Message</label>
                    <textarea placeholder="Tell us about your project..." className="w-full h-full bg-transparent outline-none text-sm font-medium placeholder:opacity-20 resize-none min-h-[100px]" />
                  </div>
                  <button className="w-full py-5 bg-black text-gold font-bold uppercase tracking-widest hover:bg-gold hover:text-black transition-all duration-300">
                    Send Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="pt-12 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] uppercase tracking-widest opacity-40">
              © 2026 Fine Edge Construction LLC. All rights reserved.
            </p>
            <div className="flex gap-8">
              {['Instagram', 'Facebook', 'Houzz', 'Google'].map(social => (
                <a key={social} href="#" className="text-[10px] uppercase tracking-widest font-bold hover:text-gold transition-colors">
                  {social}
                </a>
              ))}
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : "100%" }}
        className="fixed inset-0 bg-black z-[100] p-12 flex flex-col justify-between"
      >
        <div className="flex justify-between items-center">
          <div className="bg-gold text-black px-2 py-1 font-bold text-sm tracking-tighter">
            Fine Edge
          </div>
          <button onClick={() => setIsMenuOpen(false)} className="text-gold text-sm uppercase tracking-widest font-bold">
            Close
          </button>
        </div>

        <nav className="flex flex-col gap-8">
          {['Home', 'Services', 'Work', 'About', 'Contact'].map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-5xl md:text-8xl font-bold text-cream uppercase tracking-tighter hover:text-gold transition-colors"
            >
              <span className="text-xs align-top mr-4 text-gold/40">0{i + 1}</span>
              {item}
            </a>
          ))}
        </nav>

        <div className="flex flex-col md:flex-row justify-between gap-8 text-gold/40 text-xs uppercase tracking-widest">
          <p>Your Vision, Our Precision</p>
          <p>hello@fineedgeconstruction.com</p>
          <p>+1 (234) 567-890</p>
        </div>
      </motion.div>
    </div>
  );
}
