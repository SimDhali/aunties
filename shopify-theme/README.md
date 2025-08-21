# Aunties Eats Shopify Theme

A custom Shopify theme converted from the original React/Vite application, featuring the signature hero section with infinite scrolling carousel of free-from product benefits.

## Features

- **Hero Section**: Full-screen background with lime bottom section
- **Infinite Carousel**: Scrolling display of product benefits (Palm oil free, All natural, No nasty stuff, Low salt, Non-GMO)
- **Wavy Design**: Custom scalloped wave effect between sections
- **Responsive Design**: Mobile-first approach with responsive typography
- **Customizable**: Theme settings for colors, fonts, and content

## Installation

### Option 1: Upload to Shopify Admin
1. Compress the entire `shopify-theme` folder into a ZIP file
2. In your Shopify admin, go to **Online Store > Themes**
3. Click **Add theme > Upload ZIP file**
4. Select your ZIP file and upload

### Option 2: Shopify CLI (Recommended for Development)
1. Install Shopify CLI: `npm install -g @shopify/cli @shopify/theme`
2. Navigate to the theme directory: `cd shopify-theme`
3. Connect to your store: `shopify theme dev --store=your-store-name`
4. Deploy: `shopify theme push`

## Theme Structure

```
shopify-theme/
├── assets/
│   ├── base.css              # Base theme styles
│   ├── aunties-theme.css     # Custom Aunties Eats styles
│   └── global.js             # Theme JavaScript
├── config/
│   └── settings_schema.json  # Theme customization options
├── layout/
│   └── theme.liquid          # Main layout template
├── sections/
│   ├── hero-section.liquid   # Main hero section with carousel
│   ├── header.liquid         # Site header
│   ├── footer.liquid         # Site footer
│   └── announcement-bar.liquid
├── snippets/
│   └── meta-tags.liquid      # SEO meta tags
└── templates/
    └── index.liquid          # Homepage template
```

## Customization

### Theme Settings
Access theme settings in **Shopify Admin > Online Store > Themes > Customize**:

- **Colors**: Customize lime, navy, and turquoise brand colors
- **Typography**: Select header and body fonts
- **Layout**: Adjust page width
- **Social Media**: Add social media links
- **Favicon**: Upload store favicon

### Hero Section Settings
- **Background Image**: Upload hero background image
- **Logo Image**: Upload logo for bottom section
- **Left Text**: Customize left text (default: "ALL-NATURAL INGREDIENTS")
- **Right Text**: Customize right text (default: "INDIAN INSPIRED")
- **Carousel Items**: Add/edit free-from benefit items with custom icons and text

### Adding Images
Upload your images to **Settings > Files** in Shopify admin, then reference them in the theme settings.

## Key Components

### Hero Section
- Full-screen background image
- Lime-colored bottom section with logo and text
- Infinite scrolling carousel of product benefits
- Responsive design with mobile optimization

### Carousel Animation
- 20-second infinite loop
- Pauses on hover
- Seamless transition with duplicated items
- Custom SVG icons for each benefit type

### Wavy Design
- CSS-based scalloped wave effect
- Smooth transition between sections
- Customizable colors and sizing

## Development

### Local Development
1. Use Shopify CLI for live development
2. Edit files in the theme directory
3. Changes sync automatically to your development store

### CSS Structure
- `base.css`: Core Shopify theme styles
- `aunties-theme.css`: Custom styles with utility classes
- Responsive design with mobile-first approach

### JavaScript
- `global.js`: Theme functionality and interactions
- Accessibility features included
- Menu drawer and focus management

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement approach

## Support
For theme customization or issues, refer to Shopify's theme development documentation or contact the development team.

## License
Custom theme for Aunties Eats - All rights reserved.
