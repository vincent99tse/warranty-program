# Shopify Kella Theme Deployment Instructions

Follow these steps to deploy the Warranty Activation Form to your Shopify store with Kella theme:

## 1. Build the Application

First, build the application to generate the production files:

```bash
npm run build
```

This will create optimized files in the `dist` directory.

## 2. Upload Assets to Shopify

1. Log in to your Shopify admin dashboard
2. Go to **Online Store** > **Themes**
3. Find your Kella theme and click on **Actions** > **Edit code**
4. In the Assets folder, click on **Add a new asset**
5. Upload the following files from your `dist` directory:
   - The main JavaScript file (rename to `warranty-activation.js`)
   - The main CSS file (rename to `warranty-activation.css`)

## 3. Create a New Page

1. In your Shopify admin, go to **Online Store** > **Pages**
2. Click **Add page**
3. Set a title (e.g., "Warranty Activation")
4. In the content area, click on the **</>** button to access the HTML editor
5. Paste the contents of the `shopify.liquid` file
6. Click **Save**

## 4. Customize for Kella Theme

The code has been specifically optimized for the Kella theme, but you may need to make some adjustments:

1. In your theme editor, go to **Theme settings** > **Colors** to ensure the form matches your theme's color scheme
2. The form automatically inherits Kella's button styles, input styles, and typography
3. If needed, you can adjust the CSS variables in the `<style>` section of the liquid template

## 5. Test the Form

1. Visit the newly created page on your store
2. Test the form to ensure all steps work correctly with the Kella theme
3. Verify that the styling is consistent with the rest of your store
4. Test on mobile devices to ensure responsive design works properly

## 6. Set Up Data Collection

For a complete solution, you'll need to set up a backend to collect and process the form data:

1. Create a Shopify app to handle the API requests
2. Set up a database to store warranty registrations
3. Configure email notifications for new submissions

## 7. Kella Theme-Specific Troubleshooting

If you encounter any issues with the Kella theme integration:

- Check if the Kella theme has been updated and adjust CSS variables accordingly
- Verify that the form is inheriting the correct font families and button styles
- If form elements don't match the theme, inspect the CSS variables used by Kella and update the `shopify.liquid` file
- For layout issues, adjust the grid and container classes to match Kella's spacing system

For additional support, contact your developer or Shopify support.