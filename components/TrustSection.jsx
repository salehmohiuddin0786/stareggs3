import React from "react";
import { Leaf, ShieldCheck, Truck } from "lucide-react";

const trustPillars = [
  {
    icon: Leaf,
    title: "Fresh Eggs",
    description: "Carefully handled eggs for everyday customers and businesses.",
    tagline: "Natural & Clean",
    bgColor: "bg-brand-green-light",
    iconColor: "text-brand-green",
    borderColor: "hover:border-brand-green",
  },
  {
    icon: ShieldCheck,
    title: "Quality Focused",
    description: "A commitment to quality and careful product handling at every step.",
    tagline: "Consistent Standards",
    bgColor: "bg-brand-blue-light",
    iconColor: "text-brand-blue",
    borderColor: "hover:border-brand-blue",
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    description: "Wholesale and bulk supply enquiries for retailers and businesses.",
    tagline: "Dependable Distribution",
    bgColor: "bg-yellow-50",
    iconColor: "text-amber-700",
    borderColor: "hover:border-brand-yellow",
  },
];

export default function TrustSection() {
  return (
    <section className="py-14 bg-white border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {trustPillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group p-6 sm:p-8 rounded-2xl bg-white border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 ${item.borderColor}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl ${item.bgColor} ${item.iconColor} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-muted">
                      {item.tagline}
                    </span>
                    <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-brand-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
