"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import {
  MapPin,
  Truck,
  Building2,
  Navigation,
  ArrowRight,
  ShieldCheck,
  Clock,
  Send,
  Compass,
  Layers,
  Map,
  CheckCircle2,
} from "lucide-react";

export default function NetworkSection() {
  const allHubs = [
    ...siteConfig.deliveryNetwork.telangana,
    ...siteConfig.deliveryNetwork.maharashtra,
  ];

  // Currently selected hub in the interactive inspector
  const [selectedHub, setSelectedHub] = useState(siteConfig.deliveryNetwork.telangana[0]); // Adilabad default
  const [viewMode, setViewMode] = useState("map"); // 'map' | 'grid'
  const [filterRegion, setFilterRegion] = useState("all"); // 'all' | 'telangana' | 'maharashtra'

  const filteredHubs =
    filterRegion === "all"
      ? allHubs
      : filterRegion === "telangana"
      ? siteConfig.deliveryNetwork.telangana
      : siteConfig.deliveryNetwork.maharashtra;

  const getRouteEnquiryUrl = (hub) => {
    const text = `Hello STAR EGGS CENTRE, I am interested in wholesale egg supply for *${hub.city}* (${hub.state}) via your *${hub.corridor}*. Please share pricing, fleet schedules, and delivery options.`;
    return getWhatsAppUrl(text);
  };

  const adilabadHQ = siteConfig.deliveryNetwork.telangana[0];

  return (
    <section id="network" className="py-20 bg-[#0f172a] text-white relative overflow-hidden scroll-mt-20">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-blue/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-brand-green/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-brand-yellow tracking-wider uppercase backdrop-blur-md">
            <Compass className="w-3.5 h-3.5 text-brand-yellow animate-spin" style={{ animationDuration: "12s" }} />
            <span>Interactive Supply Corridors</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Our Delivery &amp; <span className="text-brand-yellow">Distribution Network</span>
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            Headquartered at the strategic border hub of <strong>Adilabad</strong>, STAR EGGS CENTRE
            powers seamless daily and scheduled egg supply across <strong>Telangana</strong> and{" "}
            <strong>Maharashtra&apos;s Vidarbha Region</strong>.
          </p>

          {/* View Switcher Controls */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <button
              type="button"
              onClick={() => setViewMode("map")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                viewMode === "map"
                  ? "bg-brand-blue text-white shadow-lg border border-blue-400/40"
                  : "bg-white/10 text-slate-300 hover:bg-white/15"
              }`}
            >
              <Map className="w-4 h-4 text-brand-yellow" />
              <span>Interactive Transit Map</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                viewMode === "grid"
                  ? "bg-brand-green text-white shadow-lg border border-green-400/40"
                  : "bg-white/10 text-slate-300 hover:bg-white/15"
              }`}
            >
              <Layers className="w-4 h-4 text-brand-yellow" />
              <span>All 12 Corridors Directory</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Interactive Schematic Map & Live Inspector */}
        {viewMode === "map" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Cols: Interactive Vector Transit Schematic */}
            <div className="lg:col-span-7 bg-slate-900/90 rounded-3xl p-5 sm:p-7 border border-white/10 shadow-2xl backdrop-blur-xl relative">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    Live Transit Radar
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    Maharashtra (Vidarbha)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    Telangana
                  </span>
                </div>
              </div>

              {/* Schematic Map Container */}
              <div className="relative aspect-[4/3] w-full bg-gradient-to-b from-[#0b1329] via-[#0f172a] to-[#0a1124] rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center p-4">
                {/* Background grid lines */}
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* State Border dividing dashed line */}
                <div className="absolute top-[38%] left-4 right-4 border-b border-dashed border-white/20 flex items-center justify-between text-[10px] text-slate-500 uppercase tracking-widest px-2 pointer-events-none">
                  <span className="bg-slate-900/90 px-2 py-0.5 rounded text-amber-300">
                    ▲ Maharashtra (Vidarbha Corridors)
                  </span>
                  <span className="bg-slate-900/90 px-2 py-0.5 rounded text-emerald-300">
                    ▼ Telangana Network
                  </span>
                </div>

                {/* SVG Route Connecting Rays */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {allHubs.map((hub) => {
                    if (hub.id === "adilabad") return null;
                    const isSelected = selectedHub.id === hub.id;
                    const strokeColor =
                      hub.state === "Maharashtra" ? "#f59e0b" : "#10b981";

                    return (
                      <line
                        key={`line-${hub.id}`}
                        x1={`${adilabadHQ.x}%`}
                        y1={`${adilabadHQ.y}%`}
                        x2={`${hub.x}%`}
                        y2={`${hub.y}%`}
                        stroke={strokeColor}
                        strokeWidth={isSelected ? "2.5" : "1.2"}
                        strokeDasharray={isSelected ? "none" : "4 4"}
                        opacity={isSelected ? 1 : 0.4}
                        className="transition-all duration-300"
                      />
                    );
                  })}
                </svg>

                {/* Hub Interactive Nodes */}
                {allHubs.map((hub) => {
                  const isSelected = selectedHub.id === hub.id;
                  const isHQ = hub.isHQ;
                  const isMaharashtra = hub.state === "Maharashtra";

                  return (
                    <button
                      key={hub.id}
                      type="button"
                      onClick={() => setSelectedHub(hub)}
                      style={{
                        left: `${hub.x}%`,
                        top: `${hub.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      className="absolute group focus:outline-none z-20 cursor-pointer"
                      title={`${hub.city} - ${hub.role}`}
                    >
                      {/* Outer pulse for HQ or selected */}
                      {(isHQ || isSelected) && (
                        <span
                          className={`absolute -inset-2 rounded-full animate-ping opacity-60 ${
                            isHQ ? "bg-amber-400" : isMaharashtra ? "bg-amber-500" : "bg-emerald-400"
                          }`}
                        />
                      )}

                      {/* Main Node Circle */}
                      <div
                        className={`relative flex items-center justify-center transition-all duration-300 ${
                          isHQ
                            ? "w-9 h-9 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-black shadow-lg shadow-amber-500/40 border-2 border-white scale-110"
                            : isSelected
                            ? "w-7 h-7 rounded-full bg-white text-slate-900 font-bold shadow-lg shadow-blue-500/50 scale-125 border-2 border-blue-500"
                            : isMaharashtra
                            ? "w-5 h-5 rounded-full bg-amber-500/90 hover:bg-amber-400 border border-white/60 shadow"
                            : "w-5 h-5 rounded-full bg-emerald-500/90 hover:bg-emerald-400 border border-white/60 shadow"
                        }`}
                      >
                        {isHQ ? (
                          <span className="text-xs">★</span>
                        ) : isSelected ? (
                          <span className="text-[10px]">●</span>
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </div>

                      {/* City Name Label */}
                      <span
                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 whitespace-nowrap text-[10px] sm:text-[11px] font-bold px-1.5 py-0.5 rounded pointer-events-none transition-all ${
                          isHQ
                            ? "bg-amber-400 text-slate-950 shadow font-black"
                            : isSelected
                            ? "bg-white text-slate-900 shadow font-black scale-105"
                            : "bg-slate-900/80 text-slate-200 border border-white/10 group-hover:bg-slate-800"
                        }`}
                      >
                        {hub.city.split("&")[0].trim()}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Instructions */}
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
                <span className="flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-brand-yellow" />
                  <span>Click any city node to inspect live transit &amp; fleet schedule</span>
                </span>
                <span className="text-emerald-400 font-bold">12 Strategic Routes Connected</span>
              </div>
            </div>

            {/* Right 5 Cols: Live Hub Inspector Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-850 rounded-3xl p-6 sm:p-7 border border-white/15 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                      selectedHub.isHQ
                        ? "bg-amber-400 text-slate-950"
                        : selectedHub.state === "Maharashtra"
                        ? "bg-amber-500/20 text-amber-300 border border-amber-400/30"
                        : "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30"
                    }`}
                  >
                    {selectedHub.isHQ ? "★ Operational Headquarters" : `${selectedHub.state} Corridor`}
                  </span>
                </div>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-brand-yellow" />
                  {selectedHub.distance}
                </span>
              </div>

              {/* Hub Title & Role */}
              <div className="mt-5 space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                  <span>{selectedHub.city}</span>
                </h3>
                <p className="text-sm font-semibold text-brand-yellow">
                  {selectedHub.role}
                </p>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  <span>{selectedHub.corridor}</span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedHub.description}
              </p>

              {/* Transit & Schedule Stats */}
              <div className="mt-6 space-y-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Fleet Dispatch Schedule
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-white">
                      {selectedHub.schedule}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-white/5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Standard Supply Options
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-white">
                      30-Egg Trays • Bulk Crates • Dedicated Eicher Truck Loads
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Direct Action Button */}
              <div className="mt-6">
                <a
                  href={getRouteEnquiryUrl(selectedHub)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-green hover:bg-brand-green-hover text-white font-bold text-sm shadow-lg shadow-emerald-950/60 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Enquire Supply for {selectedHub.city.split("&")[0].trim()}</span>
                </a>
              </div>

              {/* Quick Hub Selector Pills */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-2">
                  Quick Select Hub:
                </p>
                <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-1">
                  {allHubs.map((hub) => (
                    <button
                      key={`pill-${hub.id}`}
                      type="button"
                      onClick={() => setSelectedHub(hub)}
                      className={`text-[11px] px-2.5 py-1 rounded-lg border transition-all ${
                        selectedHub.id === hub.id
                          ? "bg-brand-yellow text-slate-950 font-black border-yellow-300"
                          : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/15 hover:text-white"
                      }`}
                    >
                      {hub.city.split("&")[0].trim()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View Mode 2: Full Corridor Directory Cards */}
        {viewMode === "grid" && (
          <div className="space-y-6">
            {/* Region Filter Buttons */}
            <div className="flex justify-center gap-2 pb-2">
              <button
                type="button"
                onClick={() => setFilterRegion("all")}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  filterRegion === "all"
                    ? "bg-white text-slate-900 shadow"
                    : "bg-white/10 text-slate-300 hover:bg-white/20"
                }`}
              >
                All Corridors (12)
              </button>
              <button
                type="button"
                onClick={() => setFilterRegion("telangana")}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  filterRegion === "telangana"
                    ? "bg-brand-green text-white shadow"
                    : "bg-white/10 text-slate-300 hover:bg-white/20"
                }`}
              >
                Telangana Network (7)
              </button>
              <button
                type="button"
                onClick={() => setFilterRegion("maharashtra")}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  filterRegion === "maharashtra"
                    ? "bg-amber-500 text-white shadow"
                    : "bg-white/10 text-slate-300 hover:bg-white/20"
                }`}
              >
                Maharashtra Vidarbha (5)
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredHubs.map((hub) => {
                const isHQ = hub.isHQ;
                const isMaharashtra = hub.state === "Maharashtra";

                return (
                  <div
                    key={`card-${hub.id}`}
                    className={`rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                      isHQ
                        ? "bg-gradient-to-br from-blue-900/40 via-slate-900 to-slate-900 border-brand-yellow/80 shadow-xl"
                        : "bg-slate-900/80 border-white/10 hover:border-white/30 shadow-lg"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${
                            isHQ
                              ? "bg-brand-yellow text-slate-950"
                              : isMaharashtra
                              ? "bg-amber-500/20 text-amber-300 border border-amber-400/30"
                              : "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30"
                          }`}
                        >
                          {isHQ ? "★ Central HQ" : `${hub.state} Hub`}
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {hub.distance}
                        </span>
                      </div>

                      <h4 className="text-xl font-bold text-white group-hover:text-brand-yellow transition-colors">
                        {hub.city}
                      </h4>

                      <p className="text-xs font-semibold text-emerald-400 mt-1">
                        {hub.role}
                      </p>

                      <p className="text-[11px] text-cyan-300 font-mono mt-1">
                        Corridor: {hub.corridor}
                      </p>

                      <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                        {hub.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                      <div className="text-[11px] text-slate-400">
                        <span className="block font-medium text-slate-300">Schedule:</span>
                        <span>{hub.schedule.split("&")[0]}</span>
                      </div>
                      <a
                        href={getRouteEnquiryUrl(hub)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-brand-yellow hover:text-white inline-flex items-center gap-1 group-hover:underline"
                      >
                        <span>Book Route</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom Logistics Capabilities Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-2xl sm:text-3xl font-black text-brand-yellow">12 Hubs</p>
            <p className="text-xs text-slate-300 mt-1">Strategic Supply Terminals</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-2xl sm:text-3xl font-black text-emerald-400">2 States</p>
            <p className="text-xs text-slate-300 mt-1">Telangana &amp; Maharashtra</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-2xl sm:text-3xl font-black text-cyan-400">NH-44</p>
            <p className="text-xs text-slate-300 mt-1">Direct Express Transit Link</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-2xl sm:text-3xl font-black text-amber-400">Eicher Fleet</p>
            <p className="text-xs text-slate-300 mt-1">Dedicated Full Truck Consignments</p>
          </div>
        </div>
      </div>
    </section>
  );
}
