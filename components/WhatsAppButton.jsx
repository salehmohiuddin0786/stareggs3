"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { getGeneralEnquiryUrl } from "@/lib/whatsapp";
import { MessageCircle, Phone } from "lucide-react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Desktop & Tablet WhatsApp Action Button */}
      <div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        } hidden md:block`}
      >
        <a
          href={getGeneralEnquiryUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 px-4 py-3 bg-brand-green hover:bg-brand-green-hover text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          aria-label="Chat with STAR EGGS CENTRE on WhatsApp"
        >
          {/* Ping ring animation */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brand-yellow"></span>
          </span>

          <MessageCircle className="w-6 h-6 fill-white text-brand-green shrink-0" />
          <span className="font-bold text-sm tracking-wide pr-1">Chat on WhatsApp</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-brand-border py-2 px-3 shadow-lg">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={`tel:+${siteConfig.phoneNumbers[0].raw}`}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-brand-blue text-white font-bold text-xs"
          >
            <Phone className="w-4 h-4 text-brand-yellow" />
            <span>Call Now</span>
          </a>

          <a
            href={getGeneralEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-brand-green text-white font-bold text-xs"
          >
            <MessageCircle className="w-4 h-4 fill-white text-brand-green" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
