// This file contains Shopify API integration code for Kella theme

/**
 * Saves warranty activation data to Shopify
 * @param data The form data to save
 */
export async function saveWarrantyActivation(data: any) {
  try {
    // In a real implementation, you would:
    // 1. Use the Shopify Admin API to create a customer if they don't exist
    // 2. Add metafields to store warranty information
    // 3. Create a draft order for the free gift
    // 4. Send confirmation emails
    
    console.log('Saving warranty activation data:', data);
    
    // For Kella theme integration, we can use Shopify's AJAX API
    // This is a placeholder for the actual implementation
    const shopifyEndpoint = '/apps/warranty-activation/register';
    
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: 'Warranty activated successfully' });
      }, 1000);
    });
    
    // Actual implementation would look something like this:
    /*
    const response = await fetch(shopifyEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error('Failed to save warranty activation');
    }
    
    return await response.json();
    */
  } catch (error) {
    console.error('Error saving warranty activation:', error);
    throw error;
  }
}

/**
 * Fetches products from Shopify
 */
export async function fetchShopifyProducts() {
  // In development mode, always return demo products without attempting API calls
  if (import.meta.env.DEV) {
    console.log('Development environment detected, using demo products');
    return getDemoProducts();
  }
  
  try {
    // In a Shopify environment, we fetch products using the Shopify AJAX API
    // This endpoint returns all published products in the store
    const shopifyProductsEndpoint = window.Shopify?.routes?.root 
      ? `${window.Shopify.routes.root}products.json?limit=50` 
      : '/products.json?limit=50';
    
    try {
      // Attempt to fetch products from the actual Shopify store
      const response = await fetch(shopifyProductsEndpoint);
      
      if (!response.ok) {
        throw new Error('Failed to fetch products from Shopify');
      }
      
      const data = await response.json();
      
      if (data.products && Array.isArray(data.products) && data.products.length > 0) {
        // Transform Shopify product data to match our app's format
        return data.products.map(product => ({
          id: product.id,
          name: product.title,
          image: product.featured_image || product.images?.[0]?.src || 
            'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
          // Get Amazon review link from metafields or use a default format
          amazonReviewLink: getAmazonReviewLink(product)
        }));
      } else {
        console.log('No products found in Shopify store, using demo products');
        return getDemoProducts();
      }
    } catch (error) {
      console.log('Could not connect to Shopify API, using demo products');
      return getDemoProducts();
    }
  } catch (error) {
    console.log('Using demo products');
    return getDemoProducts();
  }
}

/**
 * Extract Amazon review link from product data or generate a default one
 */
function getAmazonReviewLink(product) {
  // Try to get Amazon ASIN from metafields
  let asin = '';
  
  // Check if metafields exist and try to find amazon_asin or amazon_review_link
  if (product.metafields && Array.isArray(product.metafields)) {
    const asinMetafield = product.metafields.find(
      m => (m.key === 'amazon_asin' || m.key === 'asin')
    );
    
    if (asinMetafield && asinMetafield.value) {
      asin = asinMetafield.value;
    }
    
    // If there's a direct amazon_review_link metafield, use that
    const reviewLinkMetafield = product.metafields.find(
      m => m.key === 'amazon_review_link'
    );
    
    if (reviewLinkMetafield && reviewLinkMetafield.value) {
      return reviewLinkMetafield.value;
    }
  }
  
  // If no ASIN found, try to extract from tags
  if (!asin && product.tags && Array.isArray(product.tags)) {
    const asinTag = product.tags.find(tag => tag.startsWith('asin:'));
    if (asinTag) {
      asin = asinTag.replace('asin:', '').trim();
    }
  }
  
  // If we have an ASIN, construct the review link
  if (asin) {
    return `https://www.amazon.com/review/create-review/ref=cm_cr_dp_d_wr_but_top?ie=UTF8&channel=glance-detail&asin=${asin}`;
  }
  
  // Default review links based on product ID to ensure uniqueness
  const defaultAsins = [
    'B08DTRK696',
    'B08BHS7PWS',
    'B097ZNHWDD',
    'B099ZLDYCW'
  ];
  
  // Use product ID to select a default ASIN
  const productIdNumber = parseInt(String(product.id).replace(/\D/g, '')) || 0;
  const defaultAsin = defaultAsins[productIdNumber % defaultAsins.length];
  
  return `https://www.amazon.com/review/create-review/ref=cm_cr_dp_d_wr_but_top?ie=UTF8&channel=glance-detail&asin=${defaultAsin}`;
}

/**
 * Returns demo products for development or fallback
 */
function getDemoProducts() {
  return [
    { 
      id: 1, 
      name: "Infinity Heartbeat Collection", 
      image: "https://m.media-amazon.com/images/I/41S0ox+EYTL.jpg",
      amazonReviewLink: "https://www.amazon.com/review/create-review/ref=cm_cr_dp_d_wr_but_top?ie=UTF8&channel=glance-detail&asin=B08DTRK696"
    },
    { 
      id: 2, 
      name: "Butterfly Collection", 
      image: "https://m.media-amazon.com/images/I/51-INQpM-pS.jpg",
      amazonReviewLink: "https://www.amazon.com/review/create-review/ref=cm_cr_dp_d_wr_but_top?ie=UTF8&channel=glance-detail&asin=B08BHS7PWS"
    },
    { 
      id: 3, 
      name: "Star Of David Collection", 
      image: "https://m.media-amazon.com/images/I/41Pcy34OInL.jpg",
      amazonReviewLink: "https://www.amazon.com/review/create-review/ref=cm_cr_dp_d_wr_but_top?ie=UTF8&channel=glance-detail&asin=B097ZNHWDD"
    },
    { 
      id: 4, 
      name: "Pineapple Collection", 
      image: "https://m.media-amazon.com/images/I/416wpIfKUiS.jpg",
      amazonReviewLink: "https://www.amazon.com/review/create-review/ref=cm_cr_dp_d_wr_but_top?ie=UTF8&channel=glance-detail&asin=B099ZLDYCW"
    },
    { 
      id: 5, 
      name: "Music Note Collection", 
      image: "https://m.media-amazon.com/images/I/41dXLpE7zAL.jpg",
      amazonReviewLink: "https://www.amazon.com/review/create-review/ref=cm_cr_dp_d_wr_but_top?ie=UTF8&channel=glance-detail&asin=B08DTRK696"
    },
    { 
      id: 6, 
      name: "Heart Collection", 
      image: "https://m.media-amazon.com/images/I/41PZDbotK5L.jpg",
      amazonReviewLink: "https://www.amazon.com/review/create-review/ref=cm_cr_dp_d_wr_but_top?ie=UTF8&channel=glance-detail&asin=B08BHS7PWS"
    },
    { 
      id: 7, 
      name: "Cross Collection", 
      image: "https://m.media-amazon.com/images/I/31m-zBDzHxL.jpg",
      amazonReviewLink: "https://www.amazon.com/review/create-review/ref=cm_cr_dp_d_wr_but_top?ie=UTF8&channel=glance-detail&asin=B097ZNHWDD"
    },
    { 
      id: 8, 
      name: "Broken Heart Collection", 
      image: "https://m.media-amazon.com/images/I/41ynkQVJh-L.jpg",
      amazonReviewLink: "https://www.amazon.com/review/create-review/ref=cm_cr_dp_d_wr_but_top?ie=UTF8&channel=glance-detail&asin=B099ZLDYCW"
    },
    { 
      id: 9, 
      name: "Compass Collection", 
      image: "https://m.media-amazon.com/images/I/4150tfFh8bL.jpg",
      amazonReviewLink: "https://www.amazon.com/review/create-review/ref=cm_cr_dp_d_wr_but_top?ie=UTF8&channel=glance-detail&asin=B08DTRK696"
    },
    { 
      id: 10, 
      name: "Locket Collection", 
      image: "https://m.media-amazon.com/images/I/41gM-6QnlkS.jpg",
      amazonReviewLink: "https://www.amazon.com/review/create-review/ref=cm_cr_dp_d_wr_but_top?ie=UTF8&channel=glance-detail&asin=B08BHS7PWS"
    },
    { 
      id: 11, 
      name: "Celtic Collection", 
      image: "https://m.media-amazon.com/images/I/316TxmOsBEL.jpg",
      amazonReviewLink: "https://www.amazon.com/review/create-review/ref=cm_cr_dp_d_wr_but_top?ie=UTF8&channel=glance-detail&asin=B097ZNHWDD"
    },
    { 
      id: 12, 
      name: "Stethoscope Cross Collection", 
      image: "https://m.media-amazon.com/images/I/31aIxuXm45L.jpg",
      amazonReviewLink: "https://www.amazon.com/review/create-review/ref=cm_cr_dp_d_wr_but_top?ie=UTF8&channel=glance-detail&asin=B099ZLDYCW"
    },
    { 
      id: 13, 
      name: "Italian Horn Collection", 
      image: "https://m.media-amazon.com/images/I/21yshvBRHxL.jpg",
      amazonReviewLink: "https://www.amazon.com/review/create-review/ref=cm_cr_dp_d_wr_but_top?ie=UTF8&channel=glance-detail&asin=B08DTRK696"
    },
    { 
      id: 14, 
      name: "Hamsa Collection", 
      image: "https://m.media-amazon.com/images/I/31QrLUfyaLL.jpg",
      amazonReviewLink: "https://www.amazon.com/review/create-review/ref=cm_cr_dp_d_wr_but_top?ie=UTF8&channel=glance-detail&asin=B08BHS7PWS"
    }
  ];
}

/**
 * Adds Amazon review link to a product
 * This function would be used in a Shopify admin app to configure products
 */
export async function addAmazonReviewLink(productId, amazonAsin) {
  // This would be implemented in a real Shopify app to add metafields to products
  console.log(`Adding Amazon review link for product ${productId} with ASIN ${amazonAsin}`);
  
  // In a real implementation, you would use the Shopify Admin API to add a metafield
  // This requires proper authentication and permissions
  
  // Example metafield structure:
  // {
  //   namespace: "warranty_activation",
  //   key: "amazon_review_link",
  //   value: `https://www.amazon.com/review/create-review/ref=cm_cr_dp_d_wr_but_top?ie=UTF8&channel=glance-detail&asin=${amazonAsin}`,
  //   type: "single_line_text_field"
  // }
}