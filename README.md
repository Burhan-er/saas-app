# Saas App Uygulaması 🚀  
**Next.js, Supabase, Stripe, Vapi ve AI Entegrasyonlu Gerçek Zamanlı Eğitim Platformu**

Bu proje, sıfırdan kullanıcı kimlik doğrulama, abonelik sistemi, ödeme altyapısı ve yapay zeka destekli sesli asistan ile entegre edilmiş, gerçek zamanlı bir LMS (Learning Management System - Öğrenim Yönetim Sistemi) SaaS uygulamasıdır.

## 🔧 Kullanılan Teknolojiler

- **Next.js** – Modern, tam yığın React framework'ü
- **Supabase** – Gerçek zamanlı veritabanı ve korumalı erişim
- **Clerk** – Abonelik ve ödeme işlemleri, auth ve kimlik doğrulama hizmeti
- **Vapi** – Gerçek zamanlı sesli iletişim (Voice API)
- **OpenAI (AI Voice Agent)** – Yapay zeka destekli sesli öğretmen/yardımcı

---

## 📚 Özellikler

✅ Kullanıcı Kaydı ve Girişi (JWT ile güvenli kimlik doğrulama)  
✅ Clerk ile Aylık/Yıllık Abonelik ve Ödeme Sistemi  
✅ Kullanıcıya özel ders oturumları ve geçmiş takibi  
✅ Gerçek zamanlı öğrenme modülü (Vapi ile sesli görüşme)  
✅ Yapay Zeka destekli konuşan eğitmen (AI voice agent)  
✅ Bookmarks, favoriler ve içerik arama  
✅ Rol tabanlı erişim (öğrenci/eğitmen)  
✅ Gelişmiş panel ve içerik yönetimi

---

## ⚙️ Kurulum

```bash
git clone https://github.com/Burhan-er/saas-app.git
cd saas-app.git
npm install
```
---

## .env.local dosyası

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/


NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

#VAPI
            
NEXT_PUBLIC_VAPI_WEB_TOKEN = 

```
