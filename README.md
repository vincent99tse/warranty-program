# Warranty Activation Form for Shopify

This project provides a multi-step warranty activation form that can be integrated into your Shopify store. The form allows customers to register their product for warranty, share their experience, leave a review, and receive a free gift.

## Features

- Multi-step form with progress indicator
- Product selection
- Star rating system
- Amazon review integration
- Gift selection
- Shipping information collection
- Mobile-responsive design

## Getting Started

### Prerequisites

- Node.js and npm installed
- A Shopify store

### Installation

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## Deployment to Shopify

See the detailed instructions in `shopify-deploy-instructions.md` for how to deploy this form to your Shopify store.

## Customization

### Products

Update the product options in `src/App.tsx`:

```typescript
const productOptions = [
  { 
    id: 1, 
    name: "Your Product Name", 
    image: "Your Product Image URL",
    amazonReviewLink: "Amazon Review Link"
  },
  // Add more products...
];
```

### Gift Options

Modify the gift options in `src/App.tsx`:

```typescript
const giftOptions = [
  {
    id: 1,
    name: "Your Gift Name",
    image: "Gift Image URL",
    description: "Gift Description"
  },
  // Add more gifts...
];
```

### Styling

The form uses Tailwind CSS for styling. You can customize the appearance by modifying the classes in the JSX or by updating the Tailwind configuration.

## Integration with Shopify

The form is designed to be integrated with Shopify using the Shopify API. The `src/shopify/api.ts` file contains placeholder functions for:

- Fetching products from your Shopify store
- Saving warranty activation data

In a production environment, you would need to implement these functions to interact with your Shopify store's API.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support or customization requests, please contact [your contact information].