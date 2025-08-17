# <img src="/public/images/logo/logo.png" alt="Tayseer Logo" width="70" align="center" /> Tayseer Company Website

A modern corporate website for **Tayseer Company**, built with **Next.js, TypeScript, and Tailwind CSS**.  
The website introduces the company, its services, and includes an **Articles System** that converts **Markdown** into rich HTML pages.  

---

## 🚀 Features

- **Company Introduction Pages** – About, Services, and Contact.  
- **Articles System** – Write articles in Markdown with metadata (title, date, tags, cover image).  
- **Automatic Conversion** – Markdown files are parsed into styled HTML pages.  
- **SEO-Friendly** – Optimized with Next.js for server-side rendering (SSR).  
- **Responsive Design** – Fully responsive UI styled with Tailwind CSS.  

---

## 📰 Articles from Markdown

Articles are written in Markdown with a **YAML frontmatter** that defines metadata.  
Here’s an example:

```md
---
title: Aluminium Hydroxide (Al(OH)3)
excerpt: High-quality Aluminium Hydroxide for pharmaceuticals and water treatment
date: 2025-08-17
coverImage: /images/article/blog-07.jpg
author: Prof/Fathy
tags: ["commodities"]
---

## Aluminium Hydroxide

TSC supplies high-quality aluminium hydroxide for pharmaceutical, vaccine, and industrial applications.
```

➡️ This file will automatically render into a styled HTML article on the site.  

---

## 🛠️ Tech Stack

- **Frontend:** Next.js (TypeScript)  
- **Styling:** Tailwind CSS  
- **Content:** Markdown + Frontmatter  
- **Deployment:** Vercel (or any Node hosting)  

---

## ⚙️ Getting Started

Clone the repository:

```bash
git clone https://github.com/your-username/tayseer-company-website.git
cd tayseer-company-website
```

Install dependencies:

```bash
npm install
# or
yarn install
```

Run locally:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.  

---

## 📌 Future Improvements

- Add a CMS (e.g., Sanity or Strapi) for article management.  
- Implement article search & filtering.  
- Multi-language support (Arabic / English).  
