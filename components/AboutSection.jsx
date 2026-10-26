import React from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import { Check, User, MapPin, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-brand-bg-subtle border-t border-brand-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Business Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-light border border-brand-blue/20 text-xs font-bold text-brand-blue uppercase tracking-wider">
              Local Heritage &amp; Quality
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              About <span className="text-brand-blue">STAR EGGS CENTRE</span>
            </h2>

            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              STAR EGGS CENTRE serves customers through wholesale and retail egg supply from
              Adilabad, Telangana. We aim to make egg purchasing simple and convenient for
              households, retailers, and businesses, with a focus on quality, dependable
              communication, and supply requirements.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-brand-border shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-brand-green-light flex items-center justify-center text-brand-green shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-brand-dark">Direct Leadership</h3>
                  <p className="text-xs text-brand-muted">
                    Proprietor: <strong>{siteConfig.proprietor}</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-brand-border shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-brand-blue-light flex items-center justify-center text-brand-blue shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-brand-dark">Adilabad Roots</h3>
                  <p className="text-xs text-brand-muted">
                    Located in Bhuktapur, catering to local and state-wide orders.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values List */}
            <div className="space-y-2.5 pt-2">
              {[
                "Strict care in handling to ensure shell cleanliness and freshness.",
                "Punctual dispatch for shops, restaurants, and catering events.",
                "Direct communication via phone and WhatsApp with zero hassle.",
                "Bulk transport coordination via dedicated Eicher carriers.",
              ].map((val, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-brand-green flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span>{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Card Spotlight */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-brand-border shadow-card space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-green">
                    Identity Verified
                  </span>
                  <h3 className="text-lg font-bold text-brand-dark">Official Business Card</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-yellow/30 flex items-center justify-center">
                  <Award className="w-5 h-5 text-brand-blue" />
                </div>
              </div>

              {/* Business card image representation */}
              <div className="relative rounded-2xl overflow-hidden border border-brand-border shadow-md aspect-[16/10] bg-slate-50">
                <Image
                  src="/images/business-card.jpeg"
                  alt="Official STAR EGGS CENTRE Business Card"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              <div className="text-xs text-brand-muted bg-brand-bg-subtle p-3.5 rounded-xl border border-brand-border space-y-1">
                <p>
                  <strong>Proprietor:</strong> Abdul Nayeem
                </p>
                <p>
                  <strong>Registered Location:</strong> #6-7-81, Bhuktapur, Adilabad, Telangana - 504001
                </p>
                <p>
                  <strong>Digital Hub:</strong> stareggs.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
