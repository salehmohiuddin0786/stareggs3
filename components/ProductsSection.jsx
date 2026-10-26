"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import { getProductEnquiryUrl } from "@/lib/whatsapp";
import { MessageCircle, CheckCircle } from "lucide-react";

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-brand-bg-subtle scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green-light border border-brand-green/20 text-xs font-bold text-brand-green uppercase tracking-wider">
            Premium Range
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Goodness in Every Egg
          </h2>
          <p className="text-base text-brand-muted leading-relaxed">
            Egg supply solutions for households, retailers, and bulk buyers across Adilabad and
            Telangana. Contact us for direct rates and timely supply.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {siteConfig.products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col group transform hover:-translate-y-1.5"
            >
              {/* Product Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/95 text-brand-blue shadow-sm backdrop-blur-sm border border-slate-100">
                    {product.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-green">
                    {product.subtitle}
                  </p>
                  <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-blue transition-colors leading-snug">
                    {product.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Features Pill List */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  {product.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-center gap-2 text-xs font-medium text-slate-700"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-brand-green shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <a
                    href={getProductEnquiryUrl(product.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-brand-green hover:bg-brand-green-hover text-white text-xs sm:text-sm font-bold shadow-sm transition-all duration-200"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-brand-green shrink-0" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Notice on Transparent Sourcing */}
        <div className="mt-12 p-4 rounded-xl bg-white border border-brand-border text-center max-w-xl mx-auto shadow-sm">
          <p className="text-xs text-brand-muted">
            <strong className="text-brand-dark">Pure White Eggs Speciality:</strong> We supply
            exclusively fresh white table eggs in trays, crates, and bulk Eicher truckloads. Message
            us on WhatsApp for today&apos;s best wholesale quotation.
          </p>
        </div>
      </div>
    </section>
  );
}
