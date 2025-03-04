# Shopify Warranty Activation Form - Deployment Checklist

Use this checklist to ensure you've completed all the necessary steps to deploy the warranty activation form to your Shopify store.

## 1. Build the Application ✅

- [ ] Run `npm run build` to generate production files
- [ ] Verify that the build completed successfully
- [ ] Note the exact filenames of the generated JS and CSS files in `dist/assets`

## 2. Upload Files to Shopify ✅

- [ ] Log in to your Shopify admin dashboard
- [ ] Go to **Online Store** > **Themes**
- [ ] Find your Kella theme and click on **Actions** > **Edit code**
- [ ] In the Assets folder, click on **Add a new asset**
- [ ] Upload the JavaScript file from `dist/assets` (e.g., `index-CQp-3bsu.js`)
- [ ] Upload the CSS file from `dist/assets` (e.g., `index-Dd1Hr2R2.css`)
- [ ] Verify that both files appear in your theme's Assets folder

## 3. Create the Section Template ✅

- [ ] In your Shopify theme editor, go to the **Sections** folder
- [ ] Click **Add a new section**
- [ ] Name it `warranty-activation.liquid`
- [ ] Paste the contents of the `warranty-activation-simple.liquid` file
- [ ] Update the file references to match your actual uploaded files:
  ```liquid
  <script src="{{ 'YOUR-JS-FILENAME.js' | asset_url }}"></script>
  <link rel="stylesheet" href="{{ 'YOUR-CSS-FILENAME.css' | asset_url }}">
  ```
- [ ] Click **Save**

## 4. Create a New Page ✅

- [ ] In your Shopify admin, go to **Online Store** > **Pages**
- [ ] Click **Add page**
- [ ] Set a title (e.g., "Warranty Activation")
- [ ] In the content area, add this single line:
  ```
  {% section 'warranty-activation' %}
  ```
- [ ] Click **Save**

## 5. Verify the Installation ✅

- [ ] Visit the newly created page on your store
- [ ] Check that the warranty activation form loads correctly
- [ ] Test the form to ensure all steps work properly
- [ ] Verify that the styling is consistent with your Kella theme
- [ ] Test on mobile devices to ensure responsive design works

## 6. Troubleshooting (If Needed) ✅

If the page appears empty or has styling issues:

- [ ] Check browser console for errors (F12 > Console tab)
- [ ] Verify file references in the liquid template
- [ ] Try the alternative `warranty-activation-direct.liquid` template
- [ ] Clear browser cache or try in incognito mode
- [ ] Add additional CSS overrides if needed

## 7. Alternative Approaches (If Standard Method Fails) ✅

If the standard approach doesn't work:

- [ ] Try the direct embedding approach with `warranty-activation-direct.liquid`
- [ ] Create a standalone HTML page with `warranty-activation-standalone.html` and embed it using an iframe

## 8. Final Checks ✅

- [ ] Form loads correctly on desktop and mobile
- [ ] All steps of the form work as expected
- [ ] Styling is consistent with your Kella theme
- [ ] No JavaScript errors in the console
- [ ] Form data is collected and processed correctly

## Notes

- The exact filenames of your JS and CSS files will include a hash (e.g., `index-CQp-3bsu.js`). Make sure to use the exact filenames in your liquid template.
- If you update the app and rebuild it, you'll need to upload the new files and update the references in your liquid template.
- For advanced customization, you can modify the CSS in the `<style>` section of your liquid template.