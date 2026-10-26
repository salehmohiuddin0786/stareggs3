"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import { getGeneralEnquiryUrl } from "@/lib/whatsapp";
import { MessageCircle, ArrowRight, ShieldCheck, Truck, Sparkles, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F8FAF7] via-white to-white"
    >
      {/* Subtle background decorative shapes */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-brand-blue/5 via-brand-green/5 to-brand-yellow/10 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Slogan Pill from Business Card */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-border shadow-sm text-xs sm:text-sm font-semibold text-brand-blue">
              <span className="flex h-2 w-2 rounded-full bg-brand-green animate-pulse" />
              <span>Fresh White Eggs</span>
              <span className="text-brand-yellow font-bold">★</span>
              <span>Healthy Family</span>
              <span className="text-brand-yellow font-bold">★</span>
              <span className="text-brand-green">Better Tomorrow</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark tracking-tight leading-[1.15]">
              Fresh White Eggs.{" "}
              <span className="text-brand-blue underline decoration-brand-yellow decoration-4 underline-offset-4">
                Trusted Quality.
              </span>{" "}
              <span className="text-brand-green">Reliable Supply.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-brand-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Your dependable partner for farm-fresh white table eggs, 30-egg trays, and direct
              commercial distribution across Adilabad, Telangana, and Maharashtra Vidarbha Corridors.
            </p>

            {/* Offerings Tag Banner from Business Card */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="px-3 py-1 bg-brand-blue text-white rounded-md text-xs font-bold tracking-wide uppercase shadow-sm">
                WHOLE SALE &amp; RETAIL
              </span>
              <span className="px-3 py-1 bg-brand-yellow text-brand-dark rounded-md text-xs font-black tracking-wide uppercase shadow-sm border border-yellow-300">
                SUPPLY EICHER FULL LOADED EGGS
              </span>
              <span className="px-3 py-1 bg-white text-brand-green border border-brand-green/30 rounded-md text-xs font-bold uppercase shadow-sm">
                100% Pure White Eggs
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href={getGeneralEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-brand-green hover:bg-brand-green-hover text-white font-bold text-base shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-white text-brand-green" />
                <span>Order on WhatsApp</span>
              </a>

              <a
                href="#wholesale-enquiry"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-brand-blue font-bold text-base border-2 border-brand-blue hover:border-brand-blue-hover transition-all duration-200"
              >
                <span>Wholesale Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Micro-Trust Signals */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-100 text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                <span>Daily Freshness</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0" />
                <span>Quality Assured</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <Truck className="w-4 h-4 text-brand-green shrink-0" />
                <span>Bulk Fleet Supply</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/fresh-eggs-basket.jpg"
                    alt="Fresh table eggs basket with quality assurance"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Bottom Overlay on image */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider font-bold text-brand-yellow">
                        Direct Farm Fresh
                      </p>
                      <h2 className="text-lg font-bold">STAR EGGS CENTRE</h2>
                      <p className="text-xs text-slate-200">Adilabad • Telangana</p>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-brand-green/90 backdrop-blur-sm text-xs font-bold text-white flex items-center gap-1.5 shadow">
                      <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
                      100% Quality
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Bulk Capacity */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white rounded-2xl p-3.5 shadow-xl border border-brand-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-blue-light flex items-center justify-center text-brand-blue font-bold">
                  <Truck className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-brand-muted font-bold">
                    Capacity
                  </p>
                  <p className="text-xs sm:text-sm font-extrabold text-brand-dark">
                    Eicher Full Loaded
                  </p>
                </div>
              </div>

              {/* Floating Badge 2: Wholesale & Retail */}
              <div className="absolute -top-4 -right-3 sm:-right-5 bg-white rounded-2xl p-3 shadow-xl border border-brand-border flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-brand-green-light flex items-center justify-center text-brand-green">
                  <ShieldCheck className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-brand-muted font-bold">
                    Supply
                  </p>
                  <p className="text-xs font-black text-brand-green">
                    Wholesale &amp; Retail
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
