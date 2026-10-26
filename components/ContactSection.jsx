import React from "react";
import { siteConfig } from "@/lib/siteConfig";
import { getGeneralEnquiryUrl } from "@/lib/whatsapp";
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  MessageCircle,
  Clock,
  UserCheck,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-brand-bg-subtle border-t border-brand-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-light text-brand-blue text-xs font-bold uppercase tracking-wider">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Contact STAR EGGS CENTRE
          </h2>
          <p className="text-base text-brand-muted">
            Reach out directly to proprietor Abdul Nayeem for daily wholesale rates, supply
            bookings, or general egg enquiries.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Phone Numbers */}
          <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-blue-light text-brand-blue flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark">Call Us Directly</h3>
              <p className="text-xs text-brand-muted">Available 7 days a week for enquiries</p>
              <div className="space-y-1.5 pt-2">
                <a
                  href={`tel:+${siteConfig.phoneNumbers[0].raw}`}
                  className="block text-base font-bold text-brand-blue hover:underline"
                >
                  +91 {siteConfig.phoneNumbers[0].display}
                </a>
                <a
                  href={`tel:+${siteConfig.phoneNumbers[1].raw}`}
                  className="block text-sm font-semibold text-slate-700 hover:underline"
                >
                  +91 {siteConfig.phoneNumbers[1].display}
                </a>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <span className="text-[11px] font-medium text-brand-green flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5" /> Direct Line: Abdul Nayeem
              </span>
            </div>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center">
                <MessageCircle className="w-6 h-6 fill-brand-green text-white" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark">WhatsApp Chat</h3>
              <p className="text-xs text-brand-muted">Quick replies for quotations &amp; orders</p>
              <div className="pt-2">
                <a
                  href={getGeneralEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-green hover:bg-brand-green-hover text-white text-xs font-bold shadow-sm transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <span className="text-[11px] font-medium text-slate-500">
                Active on: +91 {siteConfig.phoneNumbers[0].display}
              </span>
            </div>
          </div>

          {/* Card 3: Email Address */}
          <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-yellow/30 text-amber-700 flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark">Email Enquiries</h3>
              <p className="text-xs text-brand-muted">For official correspondence &amp; invoicing</p>
              <div className="pt-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-xs sm:text-sm font-semibold text-brand-blue break-all hover:underline"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <span className="text-[11px] font-medium text-slate-500">Official mailbox</span>
            </div>
          </div>

          {/* Card 4: Address & Directions */}
          <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark">Visit Our Centre</h3>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                {siteConfig.address.full}
              </p>
              <div className="pt-2">
                <a
                  href={siteConfig.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-brand-blue-hover"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-1 text-[11px] text-slate-500">
              <Clock className="w-3.5 h-3.5" /> Open Daily: 6:00 AM – 9:30 PM
            </div>
          </div>
        </div>

        {/* Embedded Map Visual Card */}
        <div className="mt-10 rounded-2xl overflow-hidden border border-brand-border bg-white shadow-card p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-green">
              Central Distribution Location
            </p>
            <h4 className="text-lg font-bold text-brand-dark">
              Convenient Pick-up &amp; Wholesale Loading Point in Adilabad
            </h4>
            <p className="text-xs sm:text-sm text-brand-muted">
              Located at {siteConfig.address.locality}, Adilabad. Vehicles and delivery tempos can
              easily access our facility for daily loading.
            </p>
          </div>
          <a
            href={siteConfig.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white text-xs sm:text-sm font-bold shadow transition-all duration-200"
          >
            <MapPin className="w-4 h-4 text-brand-yellow" />
            <span>Get Driving Directions</span>
          </a>
        </div>
      </div>
    </section>
  );
}
