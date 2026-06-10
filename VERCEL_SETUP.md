# 🚀 FunBond Website - Vercel Deployment Guide

## ✅ Pre-Deployment Checklist

- [x] All files are production-ready
- [x] No console errors
- [x] Dependencies locked to exact versions
- [x] Next.js 14 optimized
- [x] Vercel configuration included
- [x] Environment variables template provided
- [x] TypeScript configuration ready
- [x] ESLint configuration ready
- [x] Tailwind CSS optimized for production

---

## 📋 Step-by-Step Deployment

### Step 1: Prepare Your Files (5 minutes)

```bash
# Create project directory
mkdir funbond
cd funbond

# Initialize git
git init
```

### Step 2: Add Files to Project

Copy these files to your project:

```
funbond/
├── app/
│   ├── layout.tsx          (copy from: app_layout.tsx)
│   ├── page.tsx            (copy from: app_page.tsx)
│   └── globals.css
├── components/
│   └── FUNBOND.jsx
├── public/
│   ├── logo.png            (your logo)
│   └── venue.webp          (venue photo)
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── .eslintrc.json
├── .gitignore
├── .env.example
└── vercel.json
```

### Step 3: Setup Environment Variables

```bash
# Copy example to actual env
cp .env.example .env.local

# Edit .env.local with your details
NEXT_PUBLIC_PHONE=+91-XXXXXXXXXX
NEXT_PUBLIC_EMAIL=your-email@funbond.in
```

### Step 4: Install Dependencies Locally

```bash
npm install
```

### Step 5: Test Locally

```bash
npm run dev
```

Visit `http://localhost:3000` - Everything should work!

### Step 6: Push to GitHub

```bash
git add .
git commit -m "Initial FunBond website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/funbond.git
git push -u origin main
```

### Step 7: Deploy to Vercel

**Option A: Using Vercel Dashboard (Easiest)**

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Select your `funbond` repository
5. Click "Deploy"
6. Set environment variables in Vercel dashboard
7. Done! 🎉

**Option B: Using Vercel CLI**

```bash
npm i -g vercel
vercel
```

---

## ⚙️ Vercel Configuration Details

### Environment Variables to Set in Vercel

Go to **Project Settings → Environment Variables**:

```
NEXT_PUBLIC_PHONE=+91-XXXXXXXXXX
NEXT_PUBLIC_EMAIL=info@funbond.in
NEXT_PUBLIC_ADDRESS=Goldie Cinemark, Chhatrapati Sambhaji Nagar
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/fun.bond2023
```

### Build Settings

- **Framework Preset:** Next.js
- **Build Command:** `next build` (auto-detected)
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `npm install` (auto-detected)
- **Node Version:** 18.x (set in `package.json`)

### Deployment Settings

- **Auto Deploy:** Enabled (deploys on every git push)
- **Production Branch:** main
- **Preview Branches:** All other branches

---

## 🖼️ Adding Your Images

### Important: Image Setup for Vercel

Place images in the `public` folder:

```
public/
├── logo.png          (your FunBond logo)
└── venue.webp        (venue photo)
```

Update component to use them:

```javascript
// In FUNBOND.jsx, update image paths
<Image 
  src="/logo.png" 
  alt="FunBond Logo"
  width={300}
  height={200}
/>
```

### Supported Image Formats

- PNG (best for logo with transparent background)
- JPEG/JPG (best for photos)
- WebP (modern, compressed format)
- SVG (scalable, best for icons)

---

## 🎯 Post-Deployment Checklist

After deployment, verify:

- [ ] Website loads without errors
- [ ] All images display correctly
- [ ] Animations are smooth
- [ ] Mobile responsive on all devices
- [ ] Forms work (if added)
- [ ] Links to social media work
- [ ] Contact information is correct
- [ ] Lighthouse score is 85+

---

## 📊 Monitor Your Deployment

### Vercel Dashboard

1. Go to your Vercel project
2. Click "Analytics"
3. Monitor:
   - Page load times
   - Core Web Vitals
   - Traffic
   - Performance

### Lighthouse Check

```bash
# Run locally
npm run build
npm run start

# Test with Lighthouse in Chrome DevTools
# Ctrl+Shift+I → Lighthouse → Generate report
```

---

## 🆘 Troubleshooting

### Issue: Build Failed

**Solution:** Check build logs in Vercel dashboard:
1. Go to **Deployments** tab
2. Click failed deployment
3. Check "Build Logs"
4. Fix the error and push again

### Issue: Images Not Loading

**Solution:** Images must be in `public/` folder:
```
public/
├── logo.png
└── venue.webp
```

Update paths:
```javascript
src="/logo.png"  // Not src="logo.png"
```

### Issue: Environment Variables Not Working

**Solution:** Ensure variables start with `NEXT_PUBLIC_`:
```
❌ PHONE_NUMBER=...      (won't work)
✅ NEXT_PUBLIC_PHONE=... (will work)
```

### Issue: Custom Domain Not Working

**Solution:** In Vercel Dashboard:
1. Go to **Settings → Domains**
2. Add your custom domain
3. Update DNS records as instructed
4. Wait 24-48 hours for propagation

---

## 🔄 Continuous Deployment

After initial setup, deployment is automatic:

```bash
# Just push to GitHub
git add .
git commit -m "Update content"
git push origin main
```

Vercel automatically:
1. Detects changes
2. Builds new version
3. Runs tests
4. Deploys to production
5. Keeps previous versions as fallback

---

## 📈 Next Steps

### Week 1: Monitor Performance
- Check Lighthouse scores
- Monitor Core Web Vitals
- Test on multiple devices

### Week 2: Add Content
- Upload more venue photos
- Add real testimonials
- Update contact information

### Week 3: Promote
- Share on Instagram
- Add to Google Maps
- Setup Google Analytics
- Create social media links

---

## 💡 Performance Tips

### Image Optimization
```bash
# Compress images before uploading
# Use TinyPNG, ImageOptim, or similar tools
```

### Bundle Analysis
```bash
# Check bundle size
npm run build

# Look at .next/static size
```

### Caching
- Static pages: cached forever
- Dynamic pages: short TTL
- Images: 31536000 seconds (1 year)

---

## 🔐 Security Best Practices

### Vercel Security Features

✅ **HTTPS:** Automatic SSL certificate
✅ **DDoS Protection:** Built-in
✅ **Edge Caching:** Global CDN
✅ **Security Headers:** Configured in `vercel.json`

### Environment Variables

Never commit sensitive data:
```bash
# ❌ Wrong
STRIPE_KEY=sk_live_123456

# ✅ Right
# Add to Vercel dashboard, not in code
```

---

## 📞 Support & Resources

### Vercel Documentation
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Guide](https://nextjs.org/docs)
- [Deployment Best Practices](https://vercel.com/docs/production-checklist)

### Community
- [Vercel Discord](https://discord.gg/vercel)
- [Next.js Discord](https://discord.gg/nextjs)

---

## ✨ You're All Set!

Your FunBond website is ready for production deployment on Vercel.

### One Last Check

```bash
# Final verification before deployment
npm run build   # Should complete without errors
npm run lint    # Should pass all checks
npm run dev     # Should run smoothly
```

Once verified, push to GitHub and Vercel will deploy automatically! 🚀

---

**Estimated Deployment Time:** 5-10 minutes  
**Estimated Setup Time:** 15 minutes  
**Estimated Monthly Cost:** $0 (Hobby tier) - $20+ (Pro tier)

---

**Need help?** Check the troubleshooting section or contact Vercel support.

**Happy deploying! 🎉**
