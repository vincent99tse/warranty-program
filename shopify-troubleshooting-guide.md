# Shopify Warranty Activation Form - Troubleshooting Guide

If you're experiencing issues with the warranty activation form on your Shopify store, follow this troubleshooting guide to identify and fix the problem.

## Common Issues and Solutions

### 1. Empty Page / Form Not Displaying

**Possible Causes:**
- JavaScript or CSS files not loading correctly
- Incorrect file references in the liquid template
- JavaScript errors preventing the app from rendering
- Theme conflicts

**Solutions:**

#### Check File References
1. Verify the exact filenames in your `dist/assets` folder
2. Make sure the filenames in your liquid template match exactly
3. Check that you uploaded the files to the correct location in Shopify

#### Check Browser Console
1. Open your browser's developer tools (F12 or right-click > Inspect)
2. Go to the Console tab
3. Look for any error messages related to your app
4. If you see 404 errors for your JS or CSS files, the file references are incorrect

#### Check Network Tab
1. In developer tools, go to the Network tab
2. Reload the page
3. Look for your JS and CSS files in the list
4. Check if they're loading successfully (status code 200) or failing (status code 404)

#### Try a Simplified Version
If the React app is having issues, try the simplified HTML/CSS/JS version provided in `warranty-activation-direct.liquid`.

### 2. Styling Issues

**Possible Causes:**
- CSS conflicts with the Kella theme
- Missing CSS variables
- Responsive design issues

**Solutions:**

#### Add Theme-Specific Overrides
Add these CSS overrides to your liquid template:

```css
/* Kella theme integration styles */
#warranty-activation-app {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: var(--font-body-family, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif) !important;
}

/* Ensure the form inherits Kella theme styles */
#warranty-activation-app .btn--primary {
  background-color: var(--color-button, #3b82f6) !important;
  color: var(--color-button-text, white) !important;
}

#warranty-activation-app .btn--secondary {
  color: var(--color-button, #3b82f6) !important;
  border-color: var(--color-button, #3b82f6) !important;
}
```

#### Fix Layout Issues
If the layout is broken, add these CSS fixes:

```css
/* Fix layout issues */
.page-width {
  max-width: 100% !important;
}

/* Fix grid layout */
@media (min-width: 768px) {
  #warranty-activation-app .grid-container {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 2rem !important;
  }
}
```

### 3. Functionality Issues

**Possible Causes:**
- JavaScript errors
- Missing dependencies
- API connection issues

**Solutions:**

#### Check for JavaScript Errors
1. Open the browser console
2. Look for any error messages
3. Fix any syntax or reference errors in your code

#### Test with Simplified Functionality
Use the simplified version that doesn't rely on React or complex state management.

## Advanced Troubleshooting

### Direct Script Embedding

If all else fails, you can embed the JavaScript and CSS directly in your liquid template:

1. Build your app with `npm run build`
2. Open the generated JS and CSS files in the `dist/assets` folder
3. Copy the entire contents of these files
4. Create a new section in Shopify with this structure:

```liquid
<div id="warranty-activation-app"></div>

<script>
  // Paste the entire contents of your JavaScript file here
</script>

<style>
  /* Paste the entire contents of your CSS file here */
</style>
```

### jQuery Conflict Resolution

If your theme uses jQuery and it's conflicting with your app:

```liquid
<script>
  // Save a reference to jQuery
  var shopifyJQuery = window.jQuery;
  
  // Your app code here
  
  // Restore jQuery if needed
  if (typeof window.jQuery === 'undefined' && shopifyJQuery) {
    window.jQuery = shopifyJQuery;
  }
</script>
```

### Content Security Policy Issues

If your theme has strict Content Security Policy settings:

```liquid
<script>
  // Add meta tag to allow inline scripts
  var meta = document.createElement('meta');
  meta.httpEquiv = "Content-Security-Policy";
  meta.content = "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.shopify.com *.shopifycdn.com;";
  document.head.appendChild(meta);
</script>
```

## Getting Additional Help

If you're still experiencing issues after trying these solutions:

1. Check the Shopify Community forums for similar issues
2. Contact Shopify Support for theme-specific issues
3. Consult with a Shopify developer who specializes in theme customization