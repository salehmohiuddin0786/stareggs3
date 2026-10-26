import React from "react";
import Logo from "./Logo";
import { siteConfig } from "@/lib/siteConfig";
import { getGeneralEnquiryUrl } from "@/lib/whatsapp";
import { Phone, Mail, MapPin, MessageCircle, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue text-white pt-16 pb-12 border-t-4 border-brand-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/15">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Logo className="h-12" light={true} />
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm pt-2">
              STAR EGGS CENTRE is Adilabad&apos;s trusted wholesale and retail egg supplier.
              Committed to providing fresh quality eggs, 30-egg trays, commercial wholesale crates,
              and full Eicher truck-load distribution across Telangana.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={getGeneralEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-brand-green hover:bg-brand-green-hover text-white text-xs font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </a>
              <span className="text-xs text-brand-yellow font-bold uppercase tracking-wider">
                ★ Wholesale &amp; Retail Supply
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-yellow">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors hover:underline inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#wholesale-enquiry"
                  className="hover:text-white transition-colors hover:underline inline-block py-0.5"
                >
                  Wholesale Enquiry Form
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-yellow">
              Business Information
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                <span>{siteConfig.address.full}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-yellow shrink-0" />
                <div className="flex flex-wrap gap-2">
                  <a
                    href={`tel:+${siteConfig.phoneNumbers[0].raw}`}
                    className="hover:text-white hover:underline"
                  >
                    {siteConfig.phoneNumbers[0].display}
                  </a>
                  <span>/</span>
                  <a
                    href={`tel:+${siteConfig.phoneNumbers[1].raw}`}
                    className="hover:text-white hover:underline"
                  >
                    {siteConfig.phoneNumbers[1].display}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-yellow shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white hover:underline break-all"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="pt-2">
                <p className="text-xs text-slate-400">
                  Proprietor: <strong className="text-white">{siteConfig.proprietor}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom micro-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} STAR EGGS CENTRE. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Serving Adilabad &amp; Telangana with Freshness &amp; Trust</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
