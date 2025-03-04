# Shopify Warranty Activation Form Deployment Guide

This guide will help you deploy the Warranty Activation Form to your Shopify store with the Kella theme.

## 1. Build the Application

First, build the application to generate the production files:

```bash
npm run build
```

This will create optimized files in the `dist/assets` directory.

## 2. Upload the Files to Shopify

1. Log in to your Shopify admin dashboard
2. Go to **Online Store** > **Themes**
3. Find your Kella theme and click on **Actions** > **Edit code**
4. In the Assets folder, click on **Add a new asset**
5. Upload the following files from your `dist/assets` directory:
   - `index-CQp-3bsu.js` (the exact filename may vary, it's the JavaScript file)
   - `index-Dd1Hr2R2.css` (the exact filename may vary, it's the CSS file)

## 3. Create the Section Template

1. In your Shopify theme editor, go to the **Sections** folder
2. Click **Add a new section**
3. Name it `warranty-activation.liquid`
4. Paste the contents of the `warranty-activation.liquid` file from this project
5. **IMPORTANT**: Update the file references in the liquid file to match your actual uploaded files:
   ```liquid
   <script src="{{ 'index-CQp-3bsu.js' | asset_url }}"></script>
   <link rel="stylesheet" href="{{ 'index-Dd1Hr2R2.css' | asset_url }}">
   ```
   Make sure these match the exact filenames you uploaded in step 2.
6. Click **Save**

## 4. Create a New Page in Shopify

1. In your Shopify admin, go to **Online Store** > **Pages**
2. Click **Add page**
3. Set a title (e.g., "Warranty Activation")
4. In the content area, add this single line:
   ```
   {% section 'warranty-activation' %}
   ```
5. Click **Save**

## 5. Verify the Installation

1. Visit the newly created page on your store
2. The warranty activation form should load automatically
3. Test the form to ensure all steps work correctly
4. Verify that the styling is consistent with your Kella theme

## 6. Troubleshooting Empty Page Issues

If your page appears empty:

1. **Check Browser Console**: Open your browser's developer tools (F12) and check for any JavaScript errors in the console.

2. **Verify File References**: Make sure the JavaScript and CSS files referenced in your `warranty-activation.liquid` file match the exact filenames you uploaded to Shopify.

3. **Check File Content**: Ensure the uploaded files contain the correct content. You can download them from Shopify to verify.

4. **Try Direct References**: If the automatic asset references aren't working, try using the full URLs:
   ```liquid
   <script src="{{ 'index-CQp-3bsu.js' | asset_url }}"></script>
   <link rel="stylesheet" href="{{ 'index-Dd1Hr2R2.css' | asset_url }}">
   ```

5. **Clear Cache**: Clear your browser cache or try viewing the page in an incognito/private window.

6. **Check Theme Compatibility**: Some themes may have JavaScript that conflicts with the app. Try adding this to your liquid file:
   ```liquid
   <script>
     // Ensure jQuery doesn't conflict if it's used by the theme
     if (window.jQuery) {
       var jq = window.jQuery;
       window.jQueryBackup = jq.noConflict(true);
     }
   </script>
   ```

## 7. Customization Options

### Modifying Products

To customize the products shown in the form, you have two options:

1. **Use Shopify Products (Recommended)**
   - The form will automatically fetch products from your Shopify store
   - No additional configuration needed

2. **Manual Configuration**
   - If you need to modify the default products, edit the `productOptions` array in your JavaScript file

### Customizing Gift Options

To change the gift options, edit the `giftOptions` array in your JavaScript file.

### Styling Adjustments

The form automatically inherits styles from your Kella theme, but you can make additional adjustments:

1. Add custom CSS in the `<style>` section of the `warranty-activation.liquid` file
2. Modify the CSS variables at the top of your CSS file

## 8. Setting Up Data Collection

For a complete solution, you'll need to set up a backend to collect and process the form data:

1. Create a Shopify app to handle the API requests
2. Set up a database to store warranty registrations
3. Configure email notifications for new submissions

For additional support, contact your developer or Shopify support.