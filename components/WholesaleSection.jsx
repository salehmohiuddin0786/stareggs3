"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import { getWholesaleEnquiryUrl } from "@/lib/whatsapp";
import {
  Truck,
  Building2,
  Store,
  UtensilsCrossed,
  MessageCircle,
  Phone,
  ShieldAlert,
} from "lucide-react";

const clientSectors = [
  {
    icon: Store,
    title: "Retail Shops & Supermarkets",
    desc: "Clean 30-egg trays and steady weekly restocking for grocery stores.",
  },
  {
    icon: UtensilsCrossed,
    title: "Hotels & Restaurants",
    desc: "Consistent grade and volume supply tailored for commercial kitchens.",
  },
  {
    icon: Building2,
    title: "Bakeries & Food Caterers",
    desc: "Bulk egg cartons with reliable dispatch schedules to meet your baking peaks.",
  },
  {
    icon: Truck,
    title: "Eicher Full-Loaded Distribution",
    desc: "Dedicated high-capacity truck consignments for stockists across Telangana.",
  },
];

export default function WholesaleSection() {
  return (
    <section id="wholesale" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner Card */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#104789] via-[#0d3b74] to-[#082a55] text-white shadow-xl">
          {/* Subtle background glow */}
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-brand-yellow/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-16">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-yellow text-brand-dark text-xs font-black tracking-wide uppercase">
                <Truck className="w-3.5 h-3.5" />
                <span>Bulk Distribution Specialists</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Your Trusted Partner for <span className="text-brand-yellow">Bulk Egg Supply</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl">
                Looking for a dependable egg supplier for your shop, hotel, restaurant, or business?
                Contact <strong>STAR EGGS CENTRE</strong> to discuss your wholesale and bulk supply
                requirements.
              </p>

              {/* Highlights & Logistics badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
                  <p className="text-brand-yellow font-black text-sm uppercase">
                    Eicher Full Loaded Eggs
                  </p>
                  <p className="text-xs text-slate-200">
                    High-volume direct farm shipments for major stockists.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
                  <p className="text-brand-yellow font-black text-sm uppercase">
                    Telangana &amp; Vidarbha Corridors
                  </p>
                  <p className="text-xs text-slate-200">
                    Daily routes across 12 strategic hubs from our Adilabad border logistics base.
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <a
                  href={getWholesaleEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-brand-green hover:bg-brand-green-hover text-white font-bold text-sm sm:text-base shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-brand-green" />
                  <span>Request Wholesale Pricing</span>
                </a>

                <a
                  href="#network"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm sm:text-base border border-white/20 transition-all duration-200"
                >
                  <Truck className="w-4 h-4 text-brand-yellow" />
                  <span>View Delivery Network</span>
                </a>
              </div>
            </div>

            {/* Right Graphic / Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-900 aspect-[4/3]">
                <Image
                  src="/images/eicher-truck.jpg"
                  alt="STAR EGGS CENTRE Eicher delivery truck fully loaded with egg crates"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                  <div className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-brand-yellow text-sm">Wholesale Crates Ready</p>
                      <p className="text-[11px] text-slate-300">
                        Hygienic standard trays for seamless transport
                      </p>
                    </div>
                    <span className="px-2.5 py-1 bg-brand-green text-[10px] font-black uppercase rounded text-white">
                      Active Supply
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sectors Served Grid */}
        <div className="mt-14">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-dark">
              Who We Regularly Supply
            </h3>
            <p className="text-sm text-brand-muted mt-1">
              Customized volume arrangements suited for different business scales.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientSectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <div
                  key={sector.title}
                  className="p-6 rounded-2xl bg-brand-bg-subtle border border-brand-border hover:border-brand-blue/30 transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-brand-border flex items-center justify-center text-brand-blue mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-brand-dark text-base mb-2">{sector.title}</h4>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {sector.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Transparent Service Availability Note */}
        <div className="mt-8 flex items-start sm:items-center gap-3 p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 text-amber-900 text-xs sm:text-sm">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong>Active Supply Coverage:</strong> Regular local dispatches in Adilabad, full supply
            coverage across Telangana (Hyderabad, Warangal, Nizamabad, Karimnagar, Khammam, Mahbubnagar),
            and border wholesale corridors into Maharashtra Vidarbha (Nagpur, Akola, Yavatmal, Arni, Wani).
            Contact our logistics team for daily timing and truck-load bookings.
          </p>
        </div>
      </div>
    </section>
  );
}
