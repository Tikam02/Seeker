# PWA Icons Generation Guide

Since we can't generate actual image files programmatically, you'll need to create the following icon files manually. Here are the required sizes and suggested content:

## Required Icon Sizes:
- `/public/icons/icon-72x72.png`
- `/public/icons/icon-96x96.png` 
- `/public/icons/icon-128x128.png`
- `/public/icons/icon-144x144.png`
- `/public/icons/icon-152x152.png`
- `/public/icons/icon-192x192.png`
- `/public/icons/icon-384x384.png`
- `/public/icons/icon-512x512.png`

## Additional Icons for Windows:
- `/public/icons/icon-70x70.png`
- `/public/icons/icon-150x150.png`
- `/public/icons/icon-310x310.png`
- `/public/icons/icon-310x150.png` (wide format)

## Shortcut Icons:
- `/public/icons/shortcut-find.png` (96x96)
- `/public/icons/shortcut-help.png` (96x96) 
- `/public/icons/shortcut-post.png` (96x96)

## Badge and Notification Icons:
- `/public/icons/badge-72x72.png`
- `/public/icons/checkmark.png`
- `/public/icons/xmark.png`

## Design Guidelines:
1. **Background**: Use the Seeker brand colors (purple-blue gradient: #6366f1 to #764ba2)
2. **Logo**: Use a bold "S" or the full "Seeker" text depending on icon size
3. **Style**: Modern, clean, with rounded corners for iOS compatibility
4. **Maskable**: Ensure icons work well when masked (add padding around the main content)

## Free Tools to Create Icons:
- **Online**: 
  - Canva (free templates)
  - IconKitchen (https://icon.kitchen/)
  - PWA Builder Icon Generator (https://www.pwabuilder.com/imageGenerator)
  
- **Software**: 
  - GIMP (free)
  - Adobe Illustrator/Photoshop
  - Sketch (Mac)

## Quick Creation Method:
1. Start with a 512x512 canvas
2. Add purple-blue gradient background
3. Add white "S" or "Seeker" text in center
4. Export as PNG
5. Use online tools to resize to all required dimensions

## Test Your Icons:
After creating icons, test them by:
1. Running `npm run dev`
2. Opening Chrome DevTools → Application → Manifest
3. Checking that all icons load properly
4. Testing install prompt on mobile devices