// Warranty Activation Form for Shopify
// This file contains the entire application bundled for direct use in Shopify

(function() {
  // Create stylesheet
  const styles = document.createElement('style');
  styles.textContent = `
/* Warranty Activation Form Styles - Kella Theme Integration */
:root {
  --warranty-color-primary: #4f46e5;
  --warranty-color-success: #10b981;
  --warranty-color-text: #374151;
  --warranty-color-text-light: #6b7280;
  --warranty-border-radius: 0.375rem;
  --warranty-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

/* Main Container */
.warranty-activation-form {
  font-family: var(--font-body-family, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif);
  color: var(--warranty-color-text);
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

/* Progress Bar */
.warranty-progress-bar-container {
  margin-bottom: 2.5rem;
}

.warranty-progress-steps {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 1rem;
}

.warranty-progress-steps::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #e5e7eb;
  transform: translateY(-50%);
  z-index: 0;
}

.warranty-progress-step {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.warranty-step-number {
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background-color: #e5e7eb;
  color: #6b7280;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.warranty-step-label {
  font-size: 0.75rem;
  color: #6b7280;
  display: none;
}

@media (min-width: 768px) {
  .warranty-step-label {
    display: block;
  }
}

.warranty-progress-step.active .warranty-step-number {
  background-color: var(--warranty-color-primary);
  color: white;
}

.warranty-progress-step.completed .warranty-step-number {
  background-color: #10b981;
  color: white;
}

/* Form Container */
.warranty-form-container {
  background-color: white;
  border-radius: var(--warranty-border-radius);
  box-shadow: var(--warranty-box-shadow);
  padding: 2rem;
}

/* Grid Container */
.warranty-grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .warranty-grid-container {
    grid-template-columns: 1fr 1fr;
  }
}

/* Info Column */
.warranty-info-column {
  padding: 1.5rem;
  background-color: #f9fafb;
  border-radius: var(--warranty-border-radius);
}

.warranty-icon-container {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.warranty-icon {
  height: 2.5rem;
  width: 2.5rem;
  color: var(--warranty-color-primary);
}

.warranty-main-heading {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  text-align: center;
  margin-bottom: 1rem;
}

.warranty-sub-heading {
  font-size: 1.125rem;
  font-weight: 600;
  color: #4b5563;
  text-align: center;
  margin-bottom: 1.5rem;
}

.warranty-disclaimer {
  font-size: 0.875rem;
  color: #6b7280;
  text-align: center;
  margin-bottom: 1.5rem;
}

.warranty-divider {
  height: 1px;
  background-color: #e5e7eb;
  margin: 1.5rem 0;
}

.warranty-conditions {
  margin-bottom: 1.5rem;
}

.warranty-condition-item {
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 0.75rem;
}

/* Form Column */
.warranty-form-column {
  padding: 1.5rem;
}

.warranty-form-heading {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  text-align: center;
  margin-bottom: 0.5rem;
}

.warranty-form-subheading {
  font-size: 1rem;
  color: #6b7280;
  text-align: center;
  margin-bottom: 2rem;
}

.warranty-form-field {
  margin-bottom: 1.5rem;
}

.warranty-privacy-note {
  font-size: 0.75rem;
  color: #6b7280;
  text-align: center;
  margin-top: 1.5rem;
}

/* Step Container */
.warranty-step-container {
  padding: 1.5rem;
}

.warranty-step-header {
  text-align: center;
  margin-bottom: 2rem;
}

.warranty-step-heading {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}

.warranty-step-subheading {
  font-size: 1.125rem;
  color: #4b5563;
  margin-bottom: 1.5rem;
}

.warranty-success-heading {
  font-size: 1.5rem;
  font-weight: 700;
  color: #10b981;
  margin-bottom: 1rem;
}

.warranty-comment-heading {
  font-size: 1.25rem;
  font-weight: 600;
  color: #4b5563;
  margin-bottom: 1rem;
}

/* Info Grid */
.warranty-info-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

@media (min-width: 768px) {
  .warranty-info-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.warranty-info-card {
  padding: 1.5rem;
  border-radius: var(--warranty-border-radius);
  box-shadow: var(--warranty-box-shadow);
}

.warranty-info-card.blue {
  background-color: #f0f9ff;
}

.warranty-info-card.green {
  background-color: #f0fdf4;
}

.warranty-info-card.purple {
  background-color: #faf5ff;
}

.warranty-card-heading {
  font-size: 1.125rem;
  font-weight: 600;
  color: #4b5563;
  margin-bottom: 1rem;
  text-align: center;
}

.warranty-info-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.warranty-info-item {
  color: var(--warranty-color-text);
}

.warranty-info-label {
  font-weight: 500;
  margin-right: 0.25rem;
}

.warranty-card-text {
  text-align: center;
  color: var(--warranty-color-text);
  margin: 1rem 0;
}

.warranty-image-container {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}

.warranty-gift-image {
  width: 100%;
  height: 10rem;
  object-fit: cover;
  border-radius: var(--warranty-border-radius);
}

.warranty-bullet-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.warranty-bullet-item {
  display: flex;
  align-items: flex-start;
}

.warranty-bullet {
  color: #8b5cf6;
  margin-right: 0.5rem;
}

/* Button Container */
.warranty-button-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2.5rem;
}

/* Product Image */
.warranty-product-image-container {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.warranty-product-image-wrapper {
  width: 16rem;
  height: 16rem;
  border-radius: var(--warranty-border-radius);
  overflow: hidden;
  box-shadow: var(--warranty-box-shadow);
}

.warranty-product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Rating */
.warranty-rating-container {
  margin-bottom: 2rem;
}

.warranty-rating-heading {
  font-size: 1.125rem;
  font-weight: 600;
  color: #4b5563;
  margin-bottom: 1rem;
  text-align: center;
}

.warranty-star-rating {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.warranty-star-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.warranty-star-icon {
  height: 2.5rem;
  width: 2.5rem;
  color: #d1d5db;
}

.warranty-star-icon.filled {
  color: #f59e0b;
  fill: #f59e0b;
}

.warranty-rating-label {
  text-align: center;
  margin-top: 0.5rem;
  font-weight: 500;
  color: #4b5563;
}

/* Feedback */
.warranty-feedback-container {
  padding: 1.5rem;
  border-radius: var(--warranty-border-radius);
  margin-bottom: 2rem;
}

.warranty-feedback-container.negative {
  background-color: #fef2f2;
}

.warranty-feedback-text {
  text-align: center;
  color: var(--warranty-color-text);
}

/* Review */
.warranty-review-container {
  margin-bottom: 2rem;
}

.warranty-review-heading {
  font-size: 1.125rem;
  font-weight: 600;
  color: #4b5563;
  margin-bottom: 1rem;
  text-align: center;
}

.warranty-review-textarea {
  height: 8rem;
  resize: vertical;
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: var(--warranty-border-radius);
}

.warranty-display-rating {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.warranty-review-display {
  background-color: #f9fafb;
  padding: 1.5rem;
  border-radius: var(--warranty-border-radius);
  margin-bottom: 1.5rem;
}

.warranty-review-text {
  color: var(--warranty-color-text);
  white-space: pre-wrap;
}

/* Checkbox */
.warranty-checkbox-container {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.warranty-checkbox {
  height: 1.25rem;
  width: 1.25rem;
  color: var(--warranty-color-primary);
  border-color: #d1d5db;
  border-radius: 0.25rem;
}

.warranty-checkbox-label {
  margin-left: 0.5rem;
  color: var(--warranty-color-text);
}

/* Action Buttons */
.warranty-action-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

@media (min-width: 640px) {
  .warranty-action-buttons {
    flex-direction: row;
    justify-content: center;
  }
}

.warranty-button-icon {
  margin-right: 0.5rem;
  height: 1.25rem;
  width: 1.25rem;
}

.warranty-copy-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background-color: var(--warranty-color-primary);
  color: white;
  font-weight: 500;
  border-radius: var(--warranty-border-radius);
  border: none;
  cursor: pointer;
}

.warranty-amazon-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background-color: #f59e0b;
  color: white;
  font-weight: 500;
  border-radius: var(--warranty-border-radius);
  text-decoration: none;
  transition: background-color 0.2s;
}

.warranty-amazon-button:hover {
  background-color: #d97706;
}

/* Yes/No Buttons */
.warranty-yes-no-buttons {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
}

.warranty-yes-button, .warranty-no-button {
  padding: 1rem 2.5rem;
  font-size: 1.125rem;
}

.warranty-no-button {
  background-color: #f59e0b;
  color: white;
  font-weight: 500;
  border-radius: var(--warranty-border-radius);
  text-decoration: none;
  transition: background-color 0.2s;
}

.warranty-no-button:hover {
  background-color: #d97706;
}

/* Gift Selection */
.warranty-gift-selection {
  margin-bottom: 2rem;
}

.warranty-gift-select {
  text-align: center;
  font-size: 1.125rem;
  padding: 0.75rem;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: block;
  border: 1px solid #d1d5db;
  border-radius: var(--warranty-border-radius);
}

.warranty-selected-gift {
  text-align: center;
}

.warranty-gift-image-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.warranty-gift-prompt {
  font-size: 1.125rem;
  color: var(--warranty-color-text);
  margin-bottom: 1rem;
}

.warranty-gift-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--warranty-color-primary);
  margin-bottom: 1.5rem;
}

.warranty-gift-description {
  font-size: 1.25rem;
  color: var(--warranty-color-text);
  margin-bottom: 2rem;
}

/* Shipping Form */
.warranty-shipping-heading {
  font-size: 1.25rem;
  color: var(--warranty-color-text);
  margin-bottom: 1rem;
}

.warranty-shipping-note {
  font-size: 0.875rem;
  color: var(--warranty-color-text-light);
  margin-bottom: 1.5rem;
}

.warranty-shipping-form {
  margin-top: 2rem;
}

.warranty-form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
  .warranty-form-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .warranty-form-grid.three-columns {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

/* Thank You Page */
.warranty-thank-you-container {
  text-align: center;
  padding: 3rem 0;
}

.warranty-thank-you-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.warranty-gift-icon {
  height: 6rem;
  width: 6rem;
  color: var(--warranty-color-success);
}

.warranty-thank-you-heading {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--warranty-color-success);
  margin-bottom: 1.5rem;
}

.warranty-thank-you-message {
  font-size: 1.25rem;
  color: var(--warranty-color-text);
  max-width: 32rem;
  margin: 0 auto 2rem;
}

/* Button Styles */
.warranty-btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  text-align: center;
  border-radius: var(--warranty-border-radius);
  cursor: pointer;
  transition: background-color 0.2s;
  border: none;
}

.warranty-btn--primary {
  background-color: var(--warranty-color-primary);
  color: white;
}

.warranty-btn--secondary {
  background-color: transparent;
  color: var(--warranty-color-primary);
  border: 1px solid var(--warranty-color-primary);
}

.warranty-btn.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Error message styling */
.warranty-error-message {
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

/* Amazon link styling */
.warranty-amazon-link {
  display: inline-flex;
  align-items: center;
  color: #3b82f6;
  font-size: 0.875rem;
  text-decoration: none;
}

.warranty-amazon-link:hover {
  text-decoration: underline;
}

.warranty-icon-small {
  height: 1rem;
  width: 1rem;
  margin-left: 0.25rem;
}

/* Loading indicator */
.warranty-loading-indicator {
  padding: 0.75rem;
  text-align: center;
  color: var(--warranty-color-text);
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: var(--warranty-border-radius);
}

/* Form Input Styles */
.warranty-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: var(--warranty-border-radius);
  font-size: 1rem;
}

.warranty-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--warranty-color-text);
}

/* Inherit Kella theme styles when available */
.warranty-btn--primary {
  background-color: var(--color-button, var(--warranty-color-primary));
  color: var(--color-button-text, white);
  border-radius: var(--buttons-radius-outset, var(--warranty-border-radius));
  font-family: var(--font-button-family, inherit);
  font-weight: var(--font-button-weight, 500);
  font-style: var(--font-button-style, normal);
  padding: var(--buttons-padding-vertical, 0.75rem) var(--buttons-padding-horizontal, 1.5rem);
  min-width: 12rem;
}

.warranty-btn--secondary {
  background-color: transparent;
  color: var(--color-button, var(--warranty-color-primary));
  border: 1px solid var(--color-button, var(--warranty-color-primary));
  border-radius: var(--buttons-radius-outset, var(--warranty-border-radius));
  font-family: var(--font-button-family, inherit);
  font-weight: var(--font-button-weight, 500);
  font-style: var(--font-button-style, normal);
  padding: var(--buttons-padding-vertical, 0.75rem) var(--buttons-padding-horizontal, 1.5rem);
  min-width: 12rem;
}

.warranty-input,
.warranty-gift-select {
  background-color: var(--color-background, white);
  color: var(--color-foreground, var(--warranty-color-text));
  border: var(--inputs-border-width, 1px) solid var(--color-border, #d1d5db);
  border-radius: var(--inputs-radius, var(--warranty-border-radius));
  font-family: var(--font-body-family, inherit);
  padding: var(--inputs-padding-vertical, 0.75rem) var(--inputs-padding-horizontal, 0.75rem);
}

.warranty-label {
  font-family: var(--font-body-family, inherit);
  font-weight: var(--font-body-weight-bold, 500);
  color: var(--color-foreground, var(--warranty-color-text));
}
  `;
  document.head.appendChild(styles);

  // SVG Icons
  const icons = {
    chevronRight: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
    externalLink: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="m10 14 11-11"/></svg>',
    gift: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12v10H4V12"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>',
    shield: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    star: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    copy: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',
    check: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>'
  };

  // Define product options for the dropdown
  const productOptions = [
    { 
      id: 1, 
      name: "Product A", 
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      amazonReviewLink: "https://www.amazon.com/review/create-review/ref=cm_cr_dp_d_wr_but_top?ie=UTF8&channel=glance-detail&asin=B08DTRK696"
    },
    { 
      id: 2, 
      name: "Product B", 
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      amazonReviewLink: "https://www.amazon.com/review/create-review/ref=cm_cr_dp_d_wr_but_top?ie=UTF8&channel=glance-detail&asin=B08BHS7PWS"
    },
    { 
      id: 3, 
      name: "Product C", 
      image: "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      amazonReviewLink: "https://www.amazon.com/review/create-review/ref=cm_cr_dp_d_wr_but_top?ie=UTF8&channel=glance-detail&asin=B097ZNHWDD"
    },
    { 
      id: 4, 
      name: "Product D", 
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      amazonReviewLink: "https://www.amazon.com/review/create-review/ref=cm_cr_dp_d_wr_but_top?ie=UTF8&channel=glance-detail&asin=B099ZLDYCW"
    },
  ];

  // Rating labels
  const ratingLabels = [
    "Very Poor",
    "Poor",
    "Below Average",
    "Average",
    "Outstanding"
  ];

  // US States for dropdown
  const usStates = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", 
    "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", 
    "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", 
    "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", 
    "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", 
    "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", 
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ];

  // Gift options
  const giftOptions = [
    {
      id: 1,
      name: "Free Necklace",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      description: "Enjoy a Free Necklace on us!"
    },
    {
      id: 2,
      name: "Free Earrings",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      description: "Enjoy Free Earrings on us!"
    },
    {
      id: 3,
      name: "60% Coupon Code",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      description: "Enjoy a coupon code on us!"
    }
  ];

  // Main application
  class WarrantyActivationForm {
    constructor(container) {
      this.container = container;
      this.currentStep = 1;
      this.formData = {
        product: '',
        name: '',
        email: '',
        orderId: '',
      };
      this.rating = 0;
      this.hoveredRating = 0;
      this.review = '';
      this.copied = false;
      this.returnChecked = true;
      this.shippingInfo = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        contactNumber: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: ''
      };
      this.contactConsent = true;
      this.orderIdError = '';
      this.selectedGift = '3'; // Default to 60% Coupon Code
      this.isLoading = false;
      this.shopifyProducts = [];

      this.init();
    }

    async init() {
      try {
        // Try to fetch products from Shopify
        this.shopifyProducts = await this.fetchShopifyProducts();
      } catch (error) {
        console.error('Error fetching Shopify products:', error);
        // Use default product options if fetching fails
        this.shopifyProducts = productOptions;
      }

      this.render();
    }

    async fetchShopifyProducts() {
      // In a Shopify environment, we fetch products using the Shopify AJAX API
      // This endpoint returns all published products in the store
      try {
        // Check if we're in a Shopify environment
        if (window.Shopify && window.Shopify.routes && window.Shopify.routes.root) {
          const shopifyProductsEndpoint = `${window.Shopify.routes.root}products.json?limit=50`;
          
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
              amazonReviewLink: this.getAmazonReviewLink(product)
            }));
          }
        }
        
        // If we're not in a Shopify environment or no products found, use demo products
        return productOptions;
      } catch (error) {
        console.log('Using demo products due to error:', error);
        return productOptions;
      }
    }

    getAmazonReviewLink(product) {
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
      const productIdNumber = parseInt(String(product.id).replace(/\\D/g, '')) || 0;
      const defaultAsin = defaultAsins[productIdNumber % defaultAsins.length];
      
      return `https://www.amazon.com/review/create-review/ref=cm_cr_dp_d_wr_but_top?ie=UTF8&channel=glance-detail&asin=${defaultAsin}`;
    }

    async saveWarrantyActivation(data) {
      try {
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
      } catch (error) {
        console.error('Error saving warranty activation:', error);
        throw error;
      }
    }

    handleInputChange = (e) => {
      const { name, value } = e.target;
      this.formData[name] = value;

      // Validate Amazon order ID format when the orderId field changes
      if (name === 'orderId') {
        this.validateOrderId(value);
      }

      this.render();
    }

    handleShippingInfoChange = (e) => {
      const { name, value } = e.target;
      this.shippingInfo[name] = value;
      this.render();
    }

    // Validate Amazon order ID format
    validateOrderId(orderId) {
      // Amazon order IDs typically follow patterns like:
      // - 3 digits followed by hyphens and more digits (e.g., 123-1234567-1234567)
      // - D01 followed by hyphens and digits (e.g., D01-1234567-1234567)
      // - 10 or more alphanumeric characters
      const amazonOrderIdPattern = /^(\\d{3}-\\d{7}-\\d{7}|D\\d{2}-\\d{7}-\\d{7}|[A-Za-z0-9]{10,})$/;
      
      if (!orderId) {
        this.orderIdError = '';
      } else if (!amazonOrderIdPattern.test(orderId)) {
        this.orderIdError = 'Please enter a valid Amazon order ID';
      } else {
        this.orderIdError = '';
      }
    }

    isStep1Valid() {
      return (
        this.formData.product !== '' && 
        this.formData.name.trim() !== '' && 
        this.formData.email.trim() !== '' && 
        this.formData.orderId.trim() !== '' && 
        this.orderIdError === ''
      );
    }

    isStep7Valid() {
      return (
        this.shippingInfo.firstName.trim() !== '' &&
        this.shippingInfo.lastName.trim() !== '' &&
        this.shippingInfo.emailAddress.trim() !== '' &&
        this.shippingInfo.contactNumber.trim() !== '' &&
        this.shippingInfo.address1.trim() !== '' &&
        this.shippingInfo.city.trim() !== '' &&
        this.shippingInfo.state !== '' &&
        this.shippingInfo.zip.trim() !== ''
      );
    }

    handleNextStep = async () => {
      // If we're on step 7 and moving to step 8, submit the data
      if (this.currentStep === 7) {
        this.isLoading = true;
        this.render();
        
        try {
          // Combine all form data
          const completeData = {
            ...this.formData,
            rating: this.rating,
            review: this.review,
            selectedGift: this.selectedGift,
            shippingInfo: this.shippingInfo,
            contactConsent: this.contactConsent
          };
          
          // Save to Shopify
          await this.saveWarrantyActivation(completeData);
          
          // Move to thank you page
          this.currentStep += 1;
        } catch (error) {
          console.error('Error submitting form:', error);
          alert('There was an error submitting your information. Please try again.');
        } finally {
          this.isLoading = false;
          this.render();
        }
      } else {
        // Regular step progression
        this.currentStep += 1;
        this.render();
      }
    }

    handlePrevStep = () => {
      this.currentStep -= 1;
      this.render();
    }

    handleRatingClick = (selectedRating) => {
      this.rating = selectedRating;
      this.render();
    }

    handleRatingHover = (hoveredRating) => {
      this.hoveredRating = hoveredRating;
      this.render();
    }

    handleRatingLeave = () => {
      this.hoveredRating = 0;
      this.render();
    }

    handleCopyReview = () => {
      navigator.clipboard.writeText(this.review);
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
        this.render();
      }, 2000);
      this.render();
    }

    handleGiftChange = (e) => {
      this.selectedGift = e.target.value;
      this.render();
    }

    toggleReturnChecked = () => {
      this.returnChecked = !this.returnChecked;
      this.render();
    }

    toggleContactConsent = () => {
      this.contactConsent = !this.contactConsent;
      this.render();
    }

    handleReviewChange = (e) => {
      this.review = e.target.value;
      this.render();
    }

    render() {
      const selectedProduct = this.shopifyProducts.find(p => p.id.toString() === this.formData.product);
      const selectedGiftOption = giftOptions.find(g => g.id.toString() === this.selectedGift);

      // Clear the container
      this.container.innerHTML = '';

      // Create the main wrapper
      const wrapper = document.createElement('div');
      wrapper.className = 'warranty-activation-form';

      // Progress indicator
      const progressBar = document.createElement('div');
      progressBar.className = 'warranty-progress-bar-container';
      progressBar.innerHTML = `
        <div class="warranty-progress-steps">
          ${[1, 2, 3, 4, 5, 6, 7, 8].map((step) => `
            <div class="warranty-progress-step ${
              step === this.currentStep 
                ? 'active' 
                : step < this.currentStep 
                  ? 'completed' 
                  : ''
            }">
              <div class="warranty-step-number">${step}</div>
              <span class="warranty-step-label">Step ${step}</span>
            </div>
          `).join('')}
        </div>
      `;
      wrapper.appendChild(progressBar);

      // Form container
      const formContainer = document.createElement('div');
      formContainer.className = 'warranty-form-container';

      // Render different steps based on currentStep
      switch (this.currentStep) {
        case 1:
          formContainer.innerHTML = this.renderStep1();
          break;
        case 2:
          formContainer.innerHTML = this.renderStep2();
          break;
        case 3:
          formContainer.innerHTML = this.renderStep3();
          break;
        case 4:
          formContainer.innerHTML = this.renderStep4();
          break;
        case 5:
          formContainer.innerHTML = this.renderStep5();
          break;
        case 6:
          formContainer.innerHTML = this.renderStep6();
          break;
        case 7:
          formContainer.innerHTML = this.renderStep7();
          break;
        case 8:
          formContainer.innerHTML = this.renderStep8();
          break;
      }

      wrapper.appendChild(formContainer);
      this.container.appendChild(wrapper);

      // Add event listeners after rendering
      this.addEventListeners();
    }

    renderStep1() {
      return `
        <div class="warranty-grid-container">
          <!-- Left Column -->
          <div class="warranty-info-column">
            <div class="warranty-icon-container">
              ${icons.shield}
              ${icons.gift}
            </div>
            <h1 class="warranty-main-heading">
              Activate Your Warranty and get a FREE Gifts
            </h1>
            <h2 class="warranty-sub-heading">
              NO Shipping Charges, NO Hidden Fees, No Credit Card Required!
            </h2>
            <p class="warranty-disclaimer">
              *Conditions Apply: To qualify, participants agree to send us their experience with the previously purchased product that they have been actively using for at least 5 days*
            </p>
            <div class="warranty-divider"></div>
            <div class="warranty-conditions">
              <p class="warranty-condition-item">
                1- Only for customers that bought our product at Official Seller on Amazon.com
              </p>
              <p class="warranty-condition-item">
                2- Each customer can only claim one FREE GIFT for one FREE GIFT for one product.
              </p>
            </div>
            <div class="warranty-divider"></div>
          </div>

          <!-- Right Column -->
          <div class="warranty-form-column">
            <h1 class="warranty-form-heading">
              Activate Your Warranty and get a FREE Gifts Now!
            </h1>
            <p class="warranty-form-subheading">
              Offer Limited to Existing Customers Only
            </p>
            <form>
              <div class="warranty-form-field">
                <label for="product" class="warranty-label">
                  Which Product Did You Purchase
                </label>
                <select
                  id="product"
                  name="product"
                  value="${this.formData.product}"
                  class="warranty-gift-select"
                  ${this.isLoading ? 'disabled' : ''}
                >
                  <option value="">Select a product</option>
                  ${this.shopifyProducts.map(product => `
                    <option value="${product.id}" ${this.formData.product == product.id ? 'selected' : ''}>
                      ${product.name}
                    </option>
                  `).join('')}
                </select>
              </div>

              <div class="warranty-form-field">
                <label for="name" class="warranty-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value="${this.formData.name}"
                  placeholder="Enter your name...."
                  class="warranty-input"
                  ${this.isLoading ? 'disabled' : ''}
                />
              </div>

              <div class="warranty-form-field">
                <label for="email" class="warranty-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value="${this.formData.email}"
                  placeholder="Enter your email...."
                  class="warranty-input"
                  ${this.isLoading ? 'disabled' : ''}
                />
              </div>

              <div class="warranty-form-field">
                <label for="orderId" class="warranty-label">
                  Order Id
                </label>
                <input
                  type="text"
                  id="orderId"
                  name="orderId"
                  value="${this.formData.orderId}"
                  placeholder="Enter your order id...."
                  class="warranty-input ${this.orderIdError ? 'error' : ''}"
                  ${this.isLoading ? 'disabled' : ''}
                />
                ${this.orderIdError ? `
                  <p class="warranty-error-message">${this.orderIdError}</p>
                ` : ''}
              </div>

              <div class="warranty-form-field">
                <a 
                  href="https://www.amazon.com/gp/css/order-history" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="warranty-amazon-link"
                >
                  Find Your Amazon Order Number ${icons.externalLink}
                </a>
              </div>

              <button
                type="button"
                id="step1-next"
                ${!this.isStep1Valid() || this.isLoading ? 'disabled' : ''}
                class="warranty-btn warranty-btn--primary ${
                  this.isStep1Valid() && !this.isLoading ? '' : 'disabled'
                }"
              >
                ${this.isLoading ? 'Processing...' : 'Activate Now'}
              </button>

              <p class="warranty-privacy-note">
                *We don't share your personal info with anyone. Check our Privacy Policy for more information.*
              </p>
            </form>
          </div>
        </div>
      `;
    }

    renderStep2() {
      const selectedProduct = this.shopifyProducts.find(p => p.id.toString() === this.formData.product);
      
      return `
        <div class="warranty-step-container">
          <div class="warranty-step-header">
            <h1 class="warranty-success-heading">
              Congratulation! Your Warranty is ACTIVATED!
            </h1>
            <div class="warranty-divider"></div>
            <p class="warranty-step-subheading">
              And you are selected to Get Our Exclusive Gift
            </p>
          </div>
          
          <div class="warranty-info-grid">
            <!-- First Column - Order Info -->
            <div class="warranty-info-card blue">
              <h2 class="warranty-card-heading">
                Your Order Info
              </h2>
              <div class="warranty-info-list">
                <p class="warranty-info-item">
                  <span class="warranty-info-label">Product:</span> ${selectedProduct ? selectedProduct.name : 'Not specified'}
                </p>
                <p class="warranty-info-item">
                  <span class="warranty-info-label">Name:</span> ${this.formData.name || 'Not specified'}
                </p>
                <p class="warranty-info-item">
                  <span class="warranty-info-label">Email:</span> ${this.formData.email || 'Not specified'}
                </p>
                <p class="warranty-info-item">
                  <span class="warranty-info-label">Order ID:</span> ${this.formData.orderId || 'Not specified'}
                </p>
              </div>
            </div>
            
            <!-- Second Column - What You Can Get -->
            <div class="warranty-info-card green">
              <h2 class="warranty-card-heading">
                What You Can Get
              </h2>
              <div class="warranty-icon-container">
                ${icons.gift}
              </div>
              <p class="warranty-card-text">
                Free Selected Gifts From TRENSYGO Jewelry
              </p>
              <div class="warranty-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                  alt="Jewelry Gift" 
                  class="warranty-gift-image"
                />
              </div>
            </div>
            
            <!-- Third Column - About The Free Gift -->
            <div class="warranty-info-card purple">
              <h2 class="warranty-card-heading">
                About The Free Gift
              </h2>
              <div class="warranty-bullet-list">
                <p class="warranty-bullet-item">
                  <span class="warranty-bullet">•</span>
                  <span>NO Shipping Charges, No Hidden Fees, NO Credit Card Required</span>
                </p>
                <p class="warranty-bullet-item">
                  <span class="warranty-bullet">•</span>
                  <span>Simple Steps to Get It (Generally less than 5 minutes)</span>
                </p>
                <p class="warranty-bullet-item">
                  <span class="warranty-bullet">•</span>
                  <span>The gift will shipped in 2-5 working days after you claim it</span>
                </p>
              </div>
            </div>
          </div>
          
          <div class="warranty-button-container">
            <button
              id="step2-prev"
              class="warranty-btn warranty-btn--secondary"
            >
              Previous Step
            </button>
            <button
              id="step2-next"
              class="warranty-btn warranty-btn--primary"
            >
              I WANT IT
            </button>
          </div>
        </div>
      `;
    }

    renderStep3() {
      const selectedProduct = this.shopifyProducts.find(p => p.id.toString() === this.formData.product);
      
      return `
        <div class="warranty-step-container">
          ${selectedProduct ? `
            <div class="warranty-product-image-container">
              <div class="warranty-product-image-wrapper">
                <img 
                  src="${selectedProduct.image}" 
                  alt="${selectedProduct.name}" 
                  class="warranty-product-image"
                />
              </div>
            </div>
          ` : ''}
          
          <div class="warranty-step-header">
            <h1 class="warranty-step-heading">
              How was your experience with TRENSYGO?
            </h1>
            <div class="warranty-divider"></div>
          </div>
          
          <!-- Star Rating -->
          <div class="warranty-rating-container">
            <h2 class="warranty-rating-heading">
              Overall Rating?
            </h2>
            <div class="warranty-star-rating">
              ${[1, 2, 3, 4, 5].map((star) => `
                <button
                  type="button"
                  data-rating="${star}"
                  class="warranty-star-button"
                >
                  <span class="warranty-star-icon ${
                    (this.hoveredRating || this.rating) >= star 
                      ? 'filled' 
                      : ''
                  }">
                    ${icons.star}
                  </span>
                </button>
              `).join('')}
            </div>
            
            <!-- Rating Label -->
            ${this.rating > 0 ? `
              <p class="warranty-rating-label">
                ${ratingLabels[this.rating - 1]}
              </p>
            ` : ''}
          </div>
          
          <!-- Conditional Content Based on Rating -->
          ${this.rating > 0 && this.rating < 4 ? `
            <div class="warranty-feedback-container negative">
              <p class="warranty-feedback-text">
                We do apologize that your experience with us are not as expected but not to worry we are here to make things right for you. Please do contact us at support@trensygo.com and one of our representative will make the time and effort to make things right for you.
              </p>
            </div>
          ` : this.rating >= 4 ? `
            <div class="warranty-review-container">
              <h2 class="warranty-review-heading">
                Add a written review
              </h2>
              <textarea
                id="review-text"
                name="review"
                value="${this.review}"
                placeholder="What did you like or dislike? How was your overall experience?"
                class="warranty-review-textarea"
                minLength="10"
              >${this.review}</textarea>
              ${this.review.length < 10 && this.review.length > 0 ? `
                <p class="warranty-error-message">
                  Please write at least 10 characters.
                </p>
              ` : ''}
            </div>
          ` : ''}
          
          <div class="warranty-button-container">
            <button
              id="step3-prev"
              class="warranty-btn warranty-btn--secondary"
            >
              Previous Step
            </button>
            <button
              id="step3-next"
              ${this.rating >= 4 && this.review.length < 10 ? 'disabled' : ''}
              class="warranty-btn warranty-btn--primary ${
                this.rating >= 4 && this.review.length < 10 ? 'disabled' : ''
              }"
            >
              Next Step
            </button>
          </div>
        </div>
      `;
    }

    renderStep4() {
      const selectedProduct = this.shopifyProducts.find(p => p.id.toString() === this.formData.product);
      
      return `
        <div class="warranty-step-container">
          <div class="warranty-step-header">
            <h1 class="warranty-step-heading">
              We're glad you're enjoying TRENSYGO Jewelry
            </h1>
            <p class="warranty-step-subheading">
              Please consider leaving your honest, unbiased review and Share Your Experience With Others
            </p>
            <div class="warranty-divider"></div>
            <h2 class="warranty-comment-heading">
              Your Comment
            </h2>
          </div>
          
          <!-- Display Rating -->
          <div class="warranty-display-rating">
            ${[1, 2, 3, 4, 5].map((star) => `
              <span class="warranty-star-icon ${
                this.rating >= star ? 'filled' : ''
              }">
                ${icons.star}
              </span>
            `).join('')}
          </div>
          
          <!-- Display Review -->
          <div class="warranty-review-display">
            <p class="warranty-review-text">
              ${this.review}
            </p>
          </div>
          
          <!-- Checkbox -->
          <div class="warranty-checkbox-container">
            <input
              type="checkbox"
              id="returnCheckbox"
              ${this.returnChecked ? 'checked' : ''}
              class="warranty-checkbox"
            />
            <label for="returnCheckbox" class="warranty-checkbox-label">
              I know returning to this page for the final step When Review done
            </label>
          </div>
          
          <!-- Action Buttons -->
          <div class="warranty-action-buttons">
            <button
              id="copy-review"
              class="warranty-copy-button"
            >
              ${this.copied ? `
                ${icons.check}
                COPIED!
              ` : `
                ${icons.copy}
                COPY COMMENT TEXT
              `}
            </button>
            
            ${selectedProduct ? `
              <a
                href="${selectedProduct.amazonReviewLink}"
                target="_blank"
                rel="noopener noreferrer"
                class="warranty-amazon-button"
              >
                ${icons.externalLink}
                PASTE ON AMAZON
              </a>
            ` : ''}
          </div>
          
          <div class="warranty-button-container">
            <button
              id="step4-prev"
              class="warranty-btn warranty-btn--secondary"
            >
              Previous Step
            </button>
            <button
              id="step4-next"
              class="warranty-btn warranty-btn--primary"
            >
              Next Step
            </button>
          </div>
        </div>
      `;
    }

    renderStep5() {
      const selectedProduct = this.shopifyProducts.find(p => p.id.toString() === this.formData.product);
      
      return `
        <div class="warranty-step-container">
          <div class="warranty-step-header">
            <h1 class="warranty-step-heading">
              Have you copied and pasted your review on Amazon?
            </h1>
          </div>
          
          <div class="warranty-yes-no-buttons">
            <button
              id="step5-next"
              class="warranty-btn warranty-btn--primary warranty-yes-button"
            >
              Yes
            </button>
            
            ${selectedProduct ? `
              <a
                href="${selectedProduct.amazonReviewLink}"
                target="_blank"
                rel="noopener noreferrer"
                class="warranty-no-button"
              >
                No
              </a>
            ` : ''}
          </div>
        </div>
      `;
    }

    renderStep6() {
      const selectedGiftOption = giftOptions.find(g => g.id.toString() === this.selectedGift);
      
      return `
        <div class="warranty-step-container">
          <div class="warranty-step-header">
            <h1 class="warranty-step-heading">
              Which gift would you like?
            </h1>
          </div>
          
          <div class="warranty-gift-selection">
            <select
              id="giftSelect"
              class="warranty-gift-select"
            >
              <option value="">Select a gift</option>
              ${giftOptions.map(gift => `
                <option value="${gift.id}" ${this.selectedGift == gift.id ? 'selected' : ''}>
                  ${gift.name}
                </option>
              `).join('')}
            </select>
          </div>
          
          ${selectedGiftOption ? `
            <div class="warranty-selected-gift">
              <div class="warranty-gift-image-container">
                <img 
                  src="${selectedGiftOption.image}" 
                  alt="${selectedGiftOption.name}" 
                  class="warranty-gift-image"
                />
              </div>
              
              <p class="warranty-gift-prompt">
                You selected...
              </p>
              
              <h1 class="warranty-gift-name">
                ${selectedGiftOption.name}
              </h1>
              
              <p class="warranty-gift-description">
                ${selectedGiftOption.description}
              </p>
              
              <button
                id="step6-next"
                class="warranty-btn warranty-btn--primary"
              >
                Claim It Now
              </button>
            </div>
          ` : ''}
        </div>
      `;
    }

    renderStep7() {
      return `
        <div class="warranty-step-container">
          <div class="warranty-step-header">
            <h1 class="warranty-success-heading">
              Congratulation! One last step to receiving Free Gifts
            </h1>
            <div class="warranty-divider"></div>
            <h2 class="warranty-shipping-heading">
              To receive your free gift, please enter your information below
            </h2>
            <p class="warranty-shipping-note">
              Please double-check all information is correct before submitting. Inputting incorrect information may result in you not receiving your gift.
            </p>
            <div class="warranty-divider"></div>
            <h3 class="warranty-form-subheading">
              Shipping Information
            </h3>
          </div>
          
          <form class="warranty-shipping-form">
            <div class="warranty-form-grid">
              <!-- First Name & Last Name -->
              <div class="warranty-form-field">
                <label for="firstName" class="warranty-label">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value="${this.shippingInfo.firstName}"
                  placeholder="Enter your first name...."
                  class="warranty-input"
                  ${this.isLoading ? 'disabled' : ''}
                />
              </div>
              <div class="warranty-form-field">
                <label for="lastName" class="warranty-label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value="${this.shippingInfo.lastName}"
                  placeholder="Enter your last name...."
                  class="warranty-input"
                  ${this.isLoading ? 'disabled' : ''}
                />
              </div>
              
              <!-- Email & Contact Number -->
              <div class="warranty-form-field">
                <label for="emailAddress" class="warranty-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  value="${this.shippingInfo.emailAddress}"
                  placeholder="Enter your email address...."
                  class="warranty-input"
                  ${this.isLoading ? 'disabled' : ''}
                />
              </div>
              <div class="warranty-form-field">
                <label for="contactNumber" class="warranty-label">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value="${this.shippingInfo.contactNumber}"
                  placeholder="Enter your contact number...."
                  class="warranty-input"
                  ${this.isLoading ? 'disabled' : ''}
                />
              </div>
            </div>
            
            <!-- Contact Consent -->
            <div class="warranty-checkbox-container">
              <input
                type="checkbox"
                id="contactConsent"
                ${this.contactConsent ? 'checked' : ''}
                class="warranty-checkbox"
                ${this.isLoading ? 'disabled' : ''}
              />
              <label for="contactConsent" class="warranty-checkbox-label">
                Ok to contact me with other offers and future deals.
              </label>
            </div>
            
            <!-- Address -->
            <div class="warranty-form-grid">
              <div class="warranty-form-field">
                <label for="address1" class="warranty-label">
                  Address 1
                </label>
                <input
                  type="text"
                  id="address1"
                  name="address1"
                  value="${this.shippingInfo.address1}"
                  placeholder="Enter your address...."
                  class="warranty-input"
                  ${this.isLoading ? 'disabled' : ''}
                />
              </div>
              <div class="warranty-form-field">
                <label for="address2" class="warranty-label">
                  Address 2 (Optional)
                </label>
                <input
                  type="text"
                  id="address2"
                  name="address2"
                  value="${this.shippingInfo.address2}"
                  placeholder="Enter your address...."
                  class="warranty-input"
                  ${this.isLoading ? 'disabled' : ''}
                />
              </div>
            </div>
            
            <!-- City, State, Zip -->
            <div class="warranty-form-grid three-columns">
              <div class="warranty-form-field">
                <label for="city" class="warranty-label">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value="${this.shippingInfo.city}"
                  placeholder="Enter City...."
                  class="warranty-input"
                  ${this.isLoading ? 'disabled' : ''}
                />
              </div>
              <div class="warranty-form-field">
                <label for="state" class="warranty-label">
                  State
                </label>
                <select
                  id="state"
                  name="state"
                  class="warranty-gift-select"
                  ${this.isLoading ? 'disabled' : ''}
                >
                  <option value="">Select a state</option>
                  ${usStates.map(state => `
                    <option value="${state}" ${this.shippingInfo.state === state ? 'selected' : ''}>
                      ${state}
                    </option>
                  `).join('')}
                </select>
              </div>
              <div class="warranty-form-field">
                <label for="zip" class="warranty-label">
                  Zip
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  value="${this.shippingInfo.zip}"
                  placeholder="Enter your zip code...."
                  class="warranty-input"
                  ${this.isLoading ? 'disabled' : ''}
                />
              </div>
            </div>
            
            <div class="warranty-button-container">
              <button
                type="button"
                id="step7-prev"
                class="warranty-btn warranty-btn--secondary"
                ${this.isLoading ? 'disabled' : ''}
              >
                Previous Step
              </button>
              <button
                type="button"
                id="step7-next"
                ${!this.isStep7Valid() || this.isLoading ? 'disabled' : ''}
                class="warranty-btn warranty-btn--primary ${
                  this.isStep7Valid() && !this.isLoading ? '' : 'disabled'
                }"
              >
                ${this.isLoading ? 'Processing...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      `;
    }

    renderStep8() {
      return `
        <div class="warranty-thank-you-container">
          <div class="warranty-thank-you-icon">
            ${icons.gift}
          </div>
          <h2 class="warranty-thank-you-heading">Thank you for your feedback!</h2>
          <p class="warranty-thank-you-message">
            We appreciate you taking the time to share your experience with us! Please allow 3-5 working days to received your free product.
          </p>
          <div class="warranty-button-container">
            <button
              id="step8-prev"
              class="warranty-btn warranty-btn--secondary"
              ${this.isLoading ? 'disabled' : ''}
            >
              Previous Step
            </button>
          </div>
        </div>
      `;
    }

    addEventListeners() {
      // Step 1
      const step1NextBtn = document.getElementById('step1-next');
      if (step1NextBtn) {
        step1NextBtn.addEventListener('click', this.handleNextStep);
      }

      const productSelect = document.getElementById('product');
      if (productSelect) {
        productSelect.addEventListener('change', (e) => this.handleInputChange({
          target: { name: 'product', value: e.target.value }
        }));
      }

      const nameInput = document.getElementById('name');
      if (nameInput) {
        nameInput.addEventListener('input', (e) => this.handleInputChange({
          target: { name: 'name', value: e.target.value }
        }));
      }

      const emailInput = document.getElementById('email');
      if (emailInput) {
        emailInput.addEventListener('input', (e) => this.handleInputChange({
          target: { name: 'email', value: e.target.value }
        }));
      }

      const orderIdInput = document.getElementById('orderId');
      if (orderIdInput) {
        orderIdInput.addEventListener('input', (e) => this.handleInputChange({
          target: { name: 'orderId', value: e.target.value }
        }));
      }

      // Step 2
      const step2PrevBtn = document.getElementById('step2-prev');
      if (step2PrevBtn) {
        step2PrevBtn.addEventListener('click', this.handlePrevStep);
      }

      const step2NextBtn = document.getElementById('step2-next');
      if (step2NextBtn) {
        step2NextBtn.addEventListener('click', this.handleNextStep);
      }

      // Step 3
      const step3PrevBtn = document.getElementById('step3-prev');
      if (step3PrevBtn) {
        step3PrevBtn.addEventListener('click', this.handlePrevStep);
      }

      const step3NextBtn = document.getElementById('step3-next');
      if (step3NextBtn) {
        step3NextBtn.addEventListener('click', this.handleNextStep);
      }

      const starButtons = document.querySelectorAll('.warranty-star-button');
      if (starButtons.length) {
        starButtons.forEach(button => {
          const rating = parseInt(button.getAttribute('data-rating'));
          button.addEventListener('click', () => this.handleRatingClick(rating));
          button.addEventListener('mouseenter', () => this.handleRatingHover(rating));
          button.addEventListener('mouseleave', this.handleRatingLeave);
        });
      }

      const reviewTextarea = document.getElementById('review-text');
      if (reviewTextarea) {
        reviewTextarea.addEventListener('input', this.handleReviewChange);
      }

      // Step 4
      const step4PrevBtn = document.getElementById('step4-prev');
      if (step4PrevBtn) {
        step4PrevBtn.addEventListener('click', this.handlePrevStep);
      }

      const step4NextBtn = document.getElementById('step4-next');
      if (step4NextBtn) {
        step4NextBtn.addEventListener('click', this.handleNextStep);
      }

      const copyReviewBtn = document.getElementById('copy-review');
      if (copyReviewBtn) {
        copyReviewBtn.addEventListener('click', this.handleCopyReview);
      }

      const returnCheckbox = document.getElementById('returnCheckbox');
      if (returnCheckbox) {
        returnCheckbox.addEventListener('change', this.toggleReturnChecked);
      }

      // Step 5
      const step5NextBtn = document.getElementById('step5-next');
      if (step5NextBtn) {
        step5NextBtn.addEventListener('click', this.handleNextStep);
      }

      // Step 6
      const giftSelect = document.getElementById('giftSelect');
      if (giftSelect) {
        giftSelect.addEventListener('change', this.handleGiftChange);
      }

      const step6NextBtn = document.getElementById('step6-next');
      if (step6NextBtn) {
        step6NextBtn.addEventListener('click', this.handleNextStep);
      }

      // Step 7
      const step7PrevBtn = document.getElementById('step7-prev');
      if (step7PrevBtn) {
        step7PrevBtn.addEventListener('click', this.handlePrevStep);
      }

      const step7NextBtn = document.getElementById('step7-next');
      if (step7NextBtn) {
        step7NextBtn.addEventListener('click', this.handleNextStep);
      }

      const contactConsentCheckbox = document.getElementById('contactConsent');
      if (contactConsentCheckbox) {
        contactConsentCheckbox.addEventListener('change', this.toggleContactConsent);
      }

      // Shipping info inputs
      const shippingInputs = [
        'firstName', 'lastName', 'emailAddress', 'contactNumber',
        'address1', 'address2', 'city', 'state', 'zip'
      ];

      shippingInputs.forEach(inputName => {
        const input = document.getElementById(inputName);
        if (input) {
          input.addEventListener('input', (e) => this.handleShippingInfoChange({
            target: { name: inputName, value: e.target.value }
          }));
        }
      });

      // Step 8
      const step8PrevBtn = document.getElementById('step8-prev');
      if (step8PrevBtn) {
        step8PrevBtn.addEventListener('click', this.handlePrevStep);
      }
    }
  }

  // Initialize the app when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('warranty-activation-app');
    if (appContainer) {
      new WarrantyActivationForm(appContainer);
    }
  });
})();