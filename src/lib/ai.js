// src/lib/ai.js

export function tokiyoAI(message) {
  const text = message.toLowerCase();

  // PAYMENT
  if (text.includes("evc") || text.includes("zaad") || text.includes("payment")) {
    return "💳 Waxaan aqbalnaa EVC, Zaad, Jeeb & Sahal. Marka aad doorato package-ka ‘Buy Now’ taabo, WhatsApp ayaa si automatic kuu furaya.";
  }

  // PUBG GLOBAL
  if (text.includes("global")) {
    return "🌍 PUBG GLOBAL waa version-ka caalami ah. UC-ga waxaan ku siineynaa delivery degdeg ah 24/7.";
  }

  // PUBG KOREAN
  if (text.includes("korean") || text.includes("kr")) {
    return "🇰🇷 PUBG KOREAN (KR) UC waa version gaar u ah Korea. Waxaan bixinaynaa UC KR dhammaan packages.";
  }

  // EFOOTBALL
  if (text.includes("efootball") || text.includes("coins")) {
    return "⚽ E-Football coins waxaa laga heli karaa iOS & Android labadaba. Door package, kadib Buy Now.";
  }

  // ID HELP
  if (text.includes("id") || text.includes("how to find")) {
    return "🆔 Si aad u hesho Game ID: Furo PUBG → Profile → ID-gaaga ayaa ku qoran halka sare.";
  }

  // DEFAULT
  return "🤖 TOKIYO AI Chat: Waxaad igu weydiin kartaa UC, Coins, Prices, Payment, ama sida loo order gareeyo!";
}
