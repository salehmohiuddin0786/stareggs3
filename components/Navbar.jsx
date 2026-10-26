"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { siteConfig } from "@/lib/siteConfig";
import { getGeneralEnquiryUrl } from "@/lib/whatsapp";
import { Phone, MessageCircle, Menu, X, MapPin } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top micro-bar for quick contact */}
      <div className="bg-brand-blue text-white text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-brand-yellow" />
              Bhuktapur, Adilabad, Telangana - 504001
            </span>
            <span className="text-brand-yellow font-medium">
              ★ Wholesale Supply Across Telangana &amp; Vidarbha Corridors
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:+${siteConfig.phoneNumbers[0].raw}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-yellow" />
              <span>Call: {siteConfig.phoneNumbers[0].display}</span>
            </a>
            <span className="text-slate-400">|</span>
            <a
              href={`tel:+${siteConfig.phoneNumbers[1].raw}`}
              className="text-slate-200 hover:text-white transition-colors"
            >
              {siteConfig.phoneNumbers[1].display}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-border py-2.5"
            : "bg-white py-3.5 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="focus:outline-none focus:ring-2 focus:ring-brand-blue rounded">
              <Logo className="h-10 sm:h-12" />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold text-brand-dark hover:text-brand-blue transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:+${siteConfig.phoneNumbers[0].raw}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-brand-blue bg-brand-blue-light/60 hover:bg-brand-blue-light rounded-lg transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-blue" />
                <span>Call Now</span>
              </a>

              <a
                href={getGeneralEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-brand-green hover:bg-brand-green-hover rounded-lg shadow-sm hover:shadow transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 fill-white text-brand-green" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={getGeneralEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white bg-brand-green rounded-lg"
                aria-label="WhatsApp enquiry"
              >
                <MessageCircle className="w-4 h-4 fill-white text-brand-green" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-brand-dark hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-brand-border px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <div className="flex flex-col space-y-2">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-base font-semibold text-brand-dark hover:bg-brand-blue-light/50 hover:text-brand-blue transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={getGeneralEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-white bg-brand-green hover:bg-brand-green-hover rounded-lg"
              >
                <MessageCircle className="w-4 h-4 fill-white text-brand-green" />
                Order on WhatsApp
              </a>

              <a
                href={`tel:+${siteConfig.phoneNumbers[0].raw}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-brand-blue bg-brand-blue-light rounded-lg"
              >
                <Phone className="w-4 h-4" />
                Call {siteConfig.phoneNumbers[0].display}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
