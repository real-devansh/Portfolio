import type { NextConfig } from "next";

const securityHeaders = [
  // Prevents the page from being embedded in an iframe — stops clickjacking
  { key: "X-Frame-Options", value: "SAMEORIGIN" },

  // Prevents MIME-type sniffing — stops content-type confusion attacks
  { key: "X-Content-Type-Options", value: "nosniff" },

  // Controls how much referrer info is sent with requests
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

  // Restricts access to sensitive browser APIs — tighten to only what's needed
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },

  // Forces HTTPS for 1 year (enable once you are fully on HTTPS/Vercel)
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },

  // Content Security Policy — restricts what resources the browser may load.
  // Tightened for a static portfolio: no inline scripts, only trusted origins.
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js needs 'unsafe-inline' for its runtime style injection;
      // nonce-based CSP is the next hardening step if you add a custom server.
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      // Images: self + data URIs (Next/Image optimisation) + GitHub (avatars etc.)
      "img-src 'self' data: blob: https://github.com https://avatars.githubusercontent.com",
      // Scripts: self + inline required by Next.js App Router hydration scripts
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      // Connections: self + websockets for Next.js HMR in development
      "connect-src 'self' ws: wss:",
      "frame-ancestors 'none'",           // belt-and-suspenders alongside X-Frame-Options
      "base-uri 'self'",                  // prevents base-tag injection
      "form-action 'self'",               // no form submissions to external origins
      "object-src 'none'",               // no Flash / legacy plugins
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply to every route
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
