import { siteConfig } from "./siteConfig";

/**
 * Builds a direct WhatsApp click-to-chat URL with encoded message.
 * @param {string} message - Message text
 * @param {string} [phone] - Optional phone number override
 * @returns {string} Fully encoded WhatsApp URL
 */
export function getWhatsAppUrl(message, phone = siteConfig.whatsappNumber) {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

export function getGeneralEnquiryUrl() {
  return getWhatsAppUrl("Hello STAR EGGS CENTRE, I would like to enquire about your egg supply.");
}

export function getWholesaleEnquiryUrl() {
  return getWhatsAppUrl(
    "Hello STAR EGGS CENTRE, I am interested in wholesale egg supply. Please share your pricing and available supply options."
  );
}

export function getProductEnquiryUrl(productName) {
  return getWhatsAppUrl(
    `Hello STAR EGGS CENTRE, I would like to enquire about ${productName}. Please share details and pricing.`
  );
}

export function getCustomEnquiryUrl({ name, phone, businessType, quantity, location, message }) {
  let text = `*New Supply Enquiry - STAR EGGS CENTRE*\n`;
  if (name) text += `• *Name:* ${name}\n`;
  if (phone) text += `• *Phone:* ${phone}\n`;
  if (businessType) text += `• *Business Type:* ${businessType}\n`;
  if (quantity) text += `• *Quantity Required:* ${quantity}\n`;
  if (location) text += `• *Delivery Location:* ${location}\n`;
  if (message) text += `• *Notes:* ${message}\n`;
  text += `\nPlease let me know pricing and delivery details. Thank you!`;
  return getWhatsAppUrl(text);
}
