import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['shikimori.one'], // للسماح بتحميل الصور من هذا الدومين
  },
  async rewrites() {
    return [
      {
        source: '/api/shikimori/:path*', // أي طلب يبدأ بـ /api/shikimori
        destination: 'https://shikimori.one/api/:path*', // سيُحوّل إلى هذا الرابط
      },
    ];
  },
};

export default nextConfig;
