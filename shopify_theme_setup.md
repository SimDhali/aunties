# Shopify Theme Transformation Guide

This document will guide you through converting your Replit project into a Shopify theme repository that can be deployed and customized on your Shopify store.

---

## 1. Understand Shopify Theme Structure
A Shopify theme must follow a specific folder/file structure:

```
/theme-root
  ├── assets/        # Images, JS, CSS
  ├── config/        # Theme settings schema
  ├── layout/        # theme.liquid
  ├── locales/       # Translations
  ├── sections/      # Customizable sections
  ├── snippets/      # Reusable code snippets
  ├── templates/     # Page templates (index.liquid, product.liquid, etc.)
  └── package.json   # Optional, for theme tooling
```

Official docs: [Shopify Theme Structure](https://shopify.dev/docs/themes/architecture)

---

## 2. Install Shopify CLI
The **Shopify CLI** helps you preview, test, and push your theme.

```bash
npm install -g @shopify/cli @shopify/theme
```

Verify installation:
```bash
shopify version
```

---

## 3. Prepare Your Replit Project
1. **Identify assets:**
   - Move CSS/JS/images → `assets/`
2. **Create Liquid templates:**
   - Your HTML files should be renamed and converted to `.liquid`
   - Example: `index.html` → `templates/index.liquid`
3. **Layout file:**
   - Create `layout/theme.liquid`
   - This acts as the main wrapper (like `base.html`)
4. **Sections & Snippets:**
   - Break reusable parts (headers, footers, navbars) into `sections/` or `snippets/`
5. **Config & Locales:**
   - Add `config/settings_schema.json` for theme customization options
   - Add `locales/en.default.json` for translations

---

## 4. Initialize Theme Repo
If you haven’t already:

```bash
git init
```

Create `.gitignore`:
```
node_modules/
dist/
.env
```

---

## 5. Connect to Shopify Store
Login to Shopify via CLI:

```bash
shopify login --store your-store.myshopify.com
```

---

## 6. Push Theme to Shopify
From your theme root:

```bash
shopify theme push
```

To preview in development mode:

```bash
shopify theme dev
```

---

## 7. Version Control with GitHub
1. Create a new repo on GitHub
2. Link it to your project:
   ```bash
   git remote add origin https://github.com/your-username/your-theme.git
   git branch -M main
   git push -u origin main
   ```

---

## 8. Best Practices
- Keep assets optimized (minified CSS/JS, compressed images)
- Use Liquid includes for reusability
- Document custom sections in `README.md`
- Test using multiple Shopify storefronts

---

## 9. References
- [Shopify Dev Docs](https://shopify.dev/docs/themes)
- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli)
- [Theme GitHub Workflow](https://shopify.dev/docs/themes/tools/github)

---

✅ After following this guide, your Replit project should be properly structured as a Shopify theme and ready for deployment.

