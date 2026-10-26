"use client";

import React, { useState } from "react";
import { getCustomEnquiryUrl } from "@/lib/whatsapp";
import { MessageCircle, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessType: "Retail Shop",
    quantity: "",
    location: "Adilabad",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your name or business name";
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    if (!formData.phone.trim()) {
      errs.phone = "Please enter your contact phone number";
    } else if (cleanPhone.length < 10) {
      errs.phone = "Please enter a valid 10-digit mobile number";
    }
    if (!formData.quantity.trim()) {
      errs.quantity = "Please mention your required quantity (e.g. 5 crates, 50 trays, 1 truck load)";
    }
    if (!formData.location.trim()) {
      errs.location = "Please provide your delivery town or area";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const whatsappUrl = getCustomEnquiryUrl({
      name: formData.name,
      phone: formData.phone,
      businessType: formData.businessType,
      quantity: formData.quantity,
      location: formData.location,
      message: formData.message,
    });

    setSubmitted(true);
    // Open WhatsApp directly with prefilled message
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="wholesale-enquiry" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-bg-subtle border border-brand-border rounded-3xl p-6 sm:p-10 shadow-card">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green-light text-brand-green text-xs font-bold uppercase tracking-wider">
              Fast Response
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
              Need Eggs for Your Business?
            </h2>
            <p className="text-sm sm:text-base text-brand-muted">
              Tell us about your requirement and our team can discuss suitable supply options with
              you. We communicate directly via WhatsApp and phone.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Customer / Business Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1.5"
                >
                  Your Name / Business Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh / Royal Hotel"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                    errors.name ? "border-red-500" : "border-brand-border"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1.5"
                >
                  Phone Number (WhatsApp preferred) <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 9876543210"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                    errors.phone ? "border-red-500" : "border-brand-border"
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Business Type */}
              <div>
                <label
                  htmlFor="businessType"
                  className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1.5"
                >
                  Business Type
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all cursor-pointer"
                >
                  <option value="Retail Shop">Retail Shop / Kirana</option>
                  <option value="Supermarket">Supermarket</option>
                  <option value="Hotel">Hotel</option>
                  <option value="Restaurant">Restaurant / Fast Food</option>
                  <option value="Bakery">Bakery / Confectionery</option>
                  <option value="Distributor">Wholesale Distributor / Stockist</option>
                  <option value="Household">Household / Personal Order</option>
                  <option value="Other">Other Business</option>
                </select>
              </div>

              {/* Required Quantity */}
              <div>
                <label
                  htmlFor="quantity"
                  className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1.5"
                >
                  Required Quantity <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g. 20 trays / 5 crates / 1 Eicher Load"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                    errors.quantity ? "border-red-500" : "border-brand-border"
                  }`}
                />
                {errors.quantity && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.quantity}
                  </p>
                )}
              </div>
            </div>

            {/* Delivery Location with quick corridor chips */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="location"
                  className="block text-xs font-bold uppercase tracking-wider text-brand-dark"
                >
                  Delivery Town / Corridor <span className="text-red-500">*</span>
                </label>
                <span className="text-[11px] text-brand-muted">Telangana &amp; Vidarbha Hubs</span>
              </div>
              <input
                type="text"
                id="location"
                name="location"
                list="delivery-corridors"
                value={formData.location}
                onChange={handleChange}
                placeholder="Select or enter your city (e.g. Adilabad, Hyderabad, Nagpur...)"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                  errors.location ? "border-red-500" : "border-brand-border"
                }`}
              />
              <datalist id="delivery-corridors">
                <option value="Adilabad (HQ & Logistics Hub)" />
                <option value="Hyderabad & Secunderabad" />
                <option value="Warangal & Hanamkonda" />
                <option value="Nizamabad" />
                <option value="Karimnagar" />
                <option value="Khammam" />
                <option value="Mahbubnagar" />
                <option value="Nagpur (Vidarbha)" />
                <option value="Akola (Vidarbha)" />
                <option value="Yavatmal (Vidarbha)" />
                <option value="Arni (Vidarbha)" />
                <option value="Vani / Wani (Vidarbha)" />
              </datalist>

              {/* Quick Clickable Suggestions */}
              <div className="flex flex-wrap items-center gap-1.5 mt-2">
                <span className="text-[11px] text-brand-muted font-medium">Quick select:</span>
                {[
                  "Adilabad",
                  "Hyderabad",
                  "Warangal",
                  "Nizamabad",
                  "Karimnagar",
                  "Nagpur",
                  "Akola",
                  "Yavatmal",
                  "Wani",
                ].map((hub) => (
                  <button
                    key={hub}
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, location: hub }));
                      if (errors.location) {
                        setErrors((prev) => ({ ...prev, location: null }));
                      }
                    }}
                    className={`text-[11px] px-2 py-0.5 rounded-md border transition-colors ${
                      formData.location === hub
                        ? "bg-brand-blue text-white border-brand-blue font-bold"
                        : "bg-white text-slate-700 border-slate-200 hover:border-brand-blue hover:text-brand-blue"
                    }`}
                  >
                    {hub}
                  </button>
                ))}
              </div>

              {errors.location && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.location}
                </p>
              )}
            </div>

            {/* Optional Notes */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1.5"
              >
                Special Requirements or Timing (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us if you require daily, weekly supply or specific delivery schedules..."
                className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-green hover:bg-brand-green-hover text-white font-bold text-base shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white text-brand-green" />
                <span>Submit &amp; Open in WhatsApp</span>
                <Send className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* Honest Feedback Notice */}
            <div className="text-center pt-2">
              <p className="text-xs text-brand-muted">
                Submitting this form prepares your details and opens your WhatsApp app to send the
                message directly to proprietor <strong>Abdul Nayeem</strong>.
              </p>
            </div>

            {submitted && (
              <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-xs sm:text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                <span>
                  WhatsApp window opened! Please tap Send in WhatsApp to deliver your requirement.
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
