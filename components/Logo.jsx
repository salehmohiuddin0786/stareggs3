import React from "react";

/**
 * STAR EGGS CENTRE brand logo recreated cleanly from the official business card
 * Contains the iconic egg + star emblem and typography:
 * "STAR" in #104789 with star in 'A'
 * "EGGS CENTRE" in #08713E
 */
export default function Logo({ className = "h-11", light = false }) {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Emblem SVG */}
      <svg
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto shrink-0 filter drop-shadow-sm"
      >
        {/* Egg base and outer border */}
        <ellipse
          cx="62"
          cy="50"
          rx="32"
          ry="44"
          fill="#FFFFFF"
          stroke="#1F2937"
          strokeWidth="3.5"
        />
        {/* Egg inner highlight shadow */}
        <ellipse
          cx="62"
          cy="50"
          rx="27"
          ry="39"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="3"
        />
        {/* Inner gentle grey egg curvature */}
        <path
          d="M74 24C83 34 83 60 72 74C65 83 55 83 48 83"
          stroke="#CBD5E1"
          strokeWidth="5"
          strokeLinecap="round"
        />
        
        {/* Dynamic Star overlapping the egg */}
        <path
          d="M10 40L38 46L48 18L58 46L86 40L64 60L72 88L48 72L24 88L32 60L10 40Z"
          fill="#104789"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Star highlight streak in cyan */}
        <path
          d="M48 24L55 46L76 41L59 56L66 78L48 65L48 24Z"
          fill="#38BDF8"
        />
        <path
          d="M48 24L48 65L30 78L37 56L20 41L41 46L48 24Z"
          fill="#0284C7"
        />
        <circle cx="48" cy="48" r="4" fill="#FFFFFF" />
      </svg>

      {/* Typography */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center tracking-tight">
          <span
            className={`font-black text-2xl sm:text-3xl tracking-tight ${
              light ? "text-white" : "text-[#104789]"
            }`}
            style={{ fontFamily: "Impact, Montserrat, sans-serif" }}
          >
            ST
          </span>
          {/* Letter A with Star cutout */}
          <span className="relative inline-block">
            <span
              className={`font-black text-2xl sm:text-3xl tracking-tight ${
                light ? "text-white" : "text-[#104789]"
              }`}
              style={{ fontFamily: "Impact, Montserrat, sans-serif" }}
            >
              A
            </span>
            <span className="absolute inset-0 flex items-center justify-center top-[-1px] text-[10px] text-white font-black">
              ★
            </span>
          </span>
          <span
            className={`font-black text-2xl sm:text-3xl tracking-tight ${
              light ? "text-white" : "text-[#104789]"
            }`}
            style={{ fontFamily: "Impact, Montserrat, sans-serif" }}
          >
            R
          </span>
        </div>
        <span
          className={`font-extrabold text-[11px] sm:text-[13px] tracking-wider uppercase mt-0.5 ${
            light ? "text-[#FFD600]" : "text-[#08713E]"
          }`}
          style={{ letterSpacing: "0.15em" }}
        >
          EGGS CENTRE
        </span>
      </div>
    </div>
  );
}
