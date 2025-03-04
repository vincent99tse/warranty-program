# Shopify Warranty Activation Form - Deployment Fix

If your warranty activation form is showing up empty on your Shopify store, follow these steps to fix the issue:

## 1. Check the Exact Filenames

First, verify the exact filenames of your built assets:

1. Look in the `dist/assets` directory
2. Note the exact filenames of the JavaScript and CSS files (they include a hash, like `index-CQp-3bsu.js`)

## 2. Create a Simplified Liquid Template

Create a new, simplified template that directly includes the JavaScript and CSS files:

```liquid
<div id="warranty-activation-app"></div>

<!-- Make sure these filenames match exactly what's in your dist/assets folder -->
<script src="{{ 'index-CQp-3bsu.js' | asset_url }}"></script>
<link rel="stylesheet" href="{{ 'index-Dd1Hr2R2.css' | asset_url }}">

<style>
  /* Basic styling to ensure the app displays properly */
  #warranty-activation-app {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
</style>
```

## 3. Upload Files to Shopify

1. Log in to your Shopify admin dashboard
2. Go to **Online Store** > **Themes**
3. Find your Kella theme and click on **Actions** > **Edit code**
4. In the Assets folder, click on **Add a new asset**
5. Upload the following files from your `dist/assets` directory:
   - The JavaScript file (e.g., `index-CQp-3bsu.js`)
   - The CSS file (e.g., `index-Dd1Hr2R2.css`)
   
   **IMPORTANT**: Upload these files with their exact filenames - do not rename them!

## 4. Create a Section Template

1. In your Shopify theme editor, go to the **Sections** folder
2. Click **Add a new section**
3. Name it `warranty-activation.liquid`
4. Paste the simplified liquid template from step 2
5. Make sure the file references match your actual uploaded files
6. Click **Save**

## 5. Create a New Page

1. In your Shopify admin, go to **Online Store** > **Pages**
2. Click **Add page**
3. Set a title (e.g., "Warranty Activation")
4. In the content area, add this single line:
   ```
   {% section 'warranty-activation' %}
   ```
5. Click **Save**

## 6. Verify in Incognito Mode

Open your page in an incognito/private browser window to ensure you're not seeing cached content.

## 7. Check Browser Console

If the page is still empty:
1. Open your browser's developer tools (F12)
2. Check the Console tab for any JavaScript errors
3. Check the Network tab to ensure the JS and CSS files are loading correctly

## 8. Alternative Approach: Direct Script Injection

If the above doesn't work, try this alternative approach:

1. Build your app with `npm run build`
2. Take the contents of `dist/assets/index-[hash].js` and `dist/assets/index-[hash].css`
3. Create a new section in Shopify called `warranty-activation-direct.liquid`
4. Use this template:

```liquid
<div id="warranty-activation-app"></div>

<script>
  // Paste the entire contents of your JavaScript file here
  // This is the contents of dist/assets/index-[hash].js
</script>

<style>
  /* Paste the entire contents of your CSS file here */
  /* This is the contents of dist/assets/index-[hash].css */
  
  /* Additional Kella theme integration styles */
  #warranty-activation-app {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
</style>
```

5. Create a new page that uses this section:
   ```
   {% section 'warranty-activation-direct' %}
   ```

This approach embeds the JavaScript and CSS directly in the page, avoiding any issues with asset URLs.