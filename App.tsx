import React, { useState, useEffect } from 'react';
import { Star, ExternalLink, Copy, Check, Gift } from 'lucide-react';
import { fetchShopifyProducts, saveWarrantyActivation } from './shopify/api';

// US States for dropdown
const usStates = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

// Gift options
const giftOptions = [
  {
    id: 1,
    name: "60% Coupon",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    description: "Get 60% off your next purchase with this exclusive coupon code."
  },
  {
    id: 2,
    name: "Free Necklace",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    description: "Receive a beautiful, complimentary necklace with your choice of pendant."
  },
  {
    id: 3,
    name: "Free Earrings",
    image: "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    description: "Elegant, complimentary earrings that perfectly match our jewelry collections."
  }
];

// Rating labels
const ratingLabels = [
  "Very Dissatisfied",
  "Dissatisfied",
  "Neutral",
  "Satisfied",
  "Very Satisfied"
];

function ShopifyAppWrapper() {
  // State variables
  const [currentStep, setCurrentStep] = useState(1);
  const [productOptions, setProductOptions] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    orderId: ''
  });
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [review, setReview] = useState('');
  const [returnChecked, setReturnChecked] = useState(true);
  const [copied, setCopied] = useState(false);
  const [selectedGift, setSelectedGift] = useState('');
  const [selectedGiftOption, setSelectedGiftOption] = useState(null);
  const [contactConsent, setContactConsent] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    contactNumber: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showProductImage, setShowProductImage] = useState(false);

  // Kella theme classes
  const kellaButtonClasses = "btn btn--primary";
  const kellaInputClasses = "field__input";
  const kellaSelectClasses = "select__select";
  const kellaLabelClasses = "form__label";
  const kellaFormClasses = "form";

  // Fetch products on component mount
  useEffect(() => {
    async function loadProducts() {
      try {
        const products = await fetchShopifyProducts();
        setProductOptions(products);
      } catch (error) {
        console.error('Error loading products:', error);
      }
    }
    
    loadProducts();
  }, []);

  // Handle product selection
  const handleProductChange = (e) => {
    const productId = parseInt(e.target.value, 10);
    if (productId) {
      const product = productOptions.find(p => p.id === productId);
      setSelectedProduct(product);
      setShowProductImage(true);
    } else {
      setSelectedProduct(null);
      setShowProductImage(false);
    }
  };

  // Handle customer info changes
  const handleCustomerInfoChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle rating click
  const handleRatingClick = (star) => {
    setRating(star);
  };

  // Handle rating hover
  const handleRatingHover = (star) => {
    setHoveredRating(star);
  };

  // Handle rating leave
  const handleRatingLeave = () => {
    setHoveredRating(0);
  };

  // Handle copy review
  const handleCopyReview = () => {
    navigator.clipboard.writeText(review);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Handle Amazon review link click
  const handleAmazonReviewClick = () => {
    // Move to next step after opening the Amazon review link
    setTimeout(() => {
      setCurrentStep(prev => prev + 1);
    }, 500);
  };

  // Handle gift selection
  const handleGiftChange = (e) => {
    const giftId = parseInt(e.target.value, 10);
    setSelectedGift(e.target.value); // Store as string to avoid NaN issues
    const gift = giftOptions.find(g => g.id === giftId);
    setSelectedGiftOption(gift);
  };

  // Handle shipping info changes
  const handleShippingInfoChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Validate step 1
  const isStep1Valid = () => {
    return (
      selectedProduct && 
      customerInfo.orderId.trim() !== ''
    );
  };

  // Validate step 7
  const isStep7Valid = () => {
    return (
      shippingInfo.firstName.trim() !== '' &&
      shippingInfo.lastName.trim() !== '' &&
      shippingInfo.emailAddress.trim() !== '' &&
      shippingInfo.contactNumber.trim() !== '' &&
      shippingInfo.address1.trim() !== '' &&
      shippingInfo.city.trim() !== '' &&
      shippingInfo.state.trim() !== '' &&
      shippingInfo.zip.trim() !== ''
    );
  };

  // Handle next step
  const handleNextStep = async () => {
    // Validate current step
    if (currentStep === 1 && !isStep1Valid()) {
      return;
    }
    
    if (currentStep === 3 && rating >= 4 && review.length < 10) {
      return;
    }
    
    if (currentStep === 7 && !isStep7Valid()) {
      return;
    }
    
    // Handle form submission on step 7
    if (currentStep === 7) {
      setIsLoading(true);
      
      try {
        // Prepare data for submission
        const formData = {
          product: selectedProduct,
          customerInfo,
          rating,
          review,
          gift: selectedGiftOption,
          shippingInfo,
          contactConsent
        };
        
        // Submit data
        await saveWarrantyActivation(formData);
        
        // Move to thank you page
        setCurrentStep(8);
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your information. Please try again.');
      } finally {
        setIsLoading(false);
      }
    } else {
      // Move to next step
      setCurrentStep(prev => prev + 1);
    }
  };

  // Handle previous step
  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  return (
    <div className="warranty-activation-form">
      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div className="progress-steps">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(step => (
            <div 
              key={step} 
              className={`progress-step ${
                currentStep === step 
                  ? 'active' 
                  : currentStep > step 
                    ? 'completed' 
                    : ''
              }`}
            >
              <div className="step-number">{step}</div>
              <span className="step-label">Step {step}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Form Container */}
      <div className="form-container">
        {/* Step 1 */}
        {currentStep === 1 && (
          <div className="grid-container">
            {/* Left Column */}
            <div className="info-column">
              <div className="icon-container">
                <Star className="icon" />
                <Gift className="icon" />
              </div>
              <h1 className="main-heading">
                Activate Your Warranty and get a FREE Gift
              </h1>
              <h2 className="sub-heading">
                NO Shipping Charges, NO Hidden Fees, No Credit Card Required!
              </h2>
              <p className="disclaimer">
                *Conditions Apply: To qualify, participants agree to share their experience with the previously purchased product that they have been actively using for at least 5 days*
              </p>
              <div className="divider"></div>
              <div className="conditions">
                <p className="condition-item">
                  1- Only for customers that bought our product from Official Seller on Amazon.com
                </p>
                <p className="condition-item">
                  2- Each customer can only claim one FREE GIFT for one product.
                </p>
                <p className="condition-item">
                  3- Proof of purchase from an authorized retailer may also be required.
                </p>
                <p className="condition-item">
                  4- No additional purchase is necessary.
                </p>
                <p className="condition-item">
                  5- Our offer is not in any way dependent on feed back that you provide.
                </p>
                <p className="condition-item">
                  6- Offer only valid in the United States of America
                </p>
                <p className="condition-item">
                  7- Offer valid while supplies last and subject to change or cancellation at any time.
                </p>
              </div>
              <div className="divider"></div>
            </div>

            {/* Right Column */}
            <div className="form-column">
              <h1 className="form-heading">
                Activate Your Warranty and get a FREE Gift Now!
              </h1>
              <p className="form-subheading">
                Offer Limited to Existing Customers Only
              </p>
              {/* Added separator/divider after the subheading */}
              <div className="divider"></div>
              
              {/* Added H2 heading for "Which Product Did You Purchase" */}
              <h2 style={{
                textAlign: 'center', 
                fontSize: '1.1rem', 
                fontWeight: '600', 
                margin: '15px 0',
                color: '#374151'
              }}>
                Which Product Did You Purchase
              </h2>
              
              <form className={kellaFormClasses}>
                <div className="form-field">
                  {/* Removed the label from the dropdown */}
                  <select
                    id="product"
                    name="product"
                    value={selectedProduct ? String(selectedProduct.id) : ''}
                    onChange={handleProductChange}
                    className={kellaSelectClasses}
                  >
                    <option value="">Select a product</option>
                    {productOptions.map(product => (
                      <option key={product.id} value={String(product.id)}>
                        {product.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* "You purchased..." text - only shown when a product is selected */}
                {selectedProduct && (
                  <div style={{ textAlign: 'center', margin: '10px 0' }}>
                    <p style={{ fontWeight: 'bold', fontSize: '14px' }}>You purchased....</p>
                  </div>
                )}

                {/* Product Image - Only shown when a product is selected */}
                {showProductImage && selectedProduct && (
                  <div className="product-image-container" style={{ marginBottom: '15px' }}>
                    <div className="product-image-wrapper" style={{ 
                      width: '180px', 
                      height: '180px', 
                      margin: '0 auto',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '3px solid #4f46e5',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}>
                      <img 
                        src={selectedProduct.image} 
                        alt={selectedProduct.name} 
                        className="product-image"
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          objectPosition: 'center'
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Product Label - Only shown when a product is selected - UPDATED with word-wrap */}
                {selectedProduct && (
                  <div style={{ 
                    backgroundColor: '#4f46e5', 
                    color: 'white', 
                    padding: '6px 12px', 
                    borderRadius: '50px',
                    textAlign: 'center',
                    margin: '0 auto 15px',
                    maxWidth: '80%',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {selectedProduct.name}
                  </div>
                )}

                {/* Add separator/divider after the product label */}
                {selectedProduct && (
                  <div className="divider" style={{ margin: '15px auto', width: '80%' }}></div>
                )}

                {/* Amazon Order Number Text */}
                <div style={{ textAlign: 'center', margin: '20px 0 10px' }}>
                  <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>What is your Amazon Order Number?</p>
                </div>

                {/* Find Your Amazon Order Number Link */}
                <div className="form-field" style={{ marginBottom: '10px' }}>
                  <a 
                    href="https://www.amazon.com/gp/css/order-history" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="amazon-link"
                    style={{ 
                      backgroundColor: 'rgb(209 233 255)', 
                      color: 'black',
                      width: '80%',
                      margin: '0 auto'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = 'rgb(189 213 235)'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'rgb(209 233 255)'}
                  >
                    Find Your Amazon Order Number 
                    <ExternalLink className="icon-small" />
                  </a>
                </div>

                {/* Order ID input with picture layout style but without the image */}
                <div style={{ textAlign: 'center', margin: '15px 0' }}>
                  <div style={{
                    width: '80%',
                    margin: '0 auto',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    padding: '15px',
                    backgroundColor: '#f9fafb'
                  }}>
                    <input
                      type="text"
                      id="orderId"
                      name="orderId"
                      value={customerInfo.orderId}
                      onChange={handleCustomerInfoChange}
                      placeholder="Enter your Amazon Order Number..."
                      className={kellaInputClasses}
                      style={{
                        border: '2px solid #4f46e5',
                        borderRadius: '6px',
                        padding: '10px 15px',
                        fontSize: '16px',
                        width: '100%',
                        boxSizing: 'border-box',
                        textAlign: 'center'
                      }}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleNextStep}
                  disabled={!isStep1Valid()}
                  className={`${kellaButtonClasses} ${
                    isStep1Valid() ? '' : 'disabled'
                  }`}
                >
                  Activate Now
                </button>

                <p className="privacy-note">
                  *We don't share your personal info with anyone. Check our Privacy Policy for more information.*
                </p>
              </form>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {currentStep === 2 && (
          <div className="step-container">
            <div className="step-header">
              <h1 className="step-heading">
                Thank you for activating your warranty!
              </h1>
              <p className="step-subheading">
                You Are Selected to Get Our Exclusive Gifts
              </p>
              <div className="divider"></div>
            </div>
            
            <div className="info-grid">
              <div className="info-card blue">
                <h2 className="card-heading">
                  Your Order Info
                </h2>
                <div className="info-list">
                  <div className="info-item">
                    <span className="info-label">Order ID:</span>
                    {customerInfo.orderId}
                  </div>
                  {selectedProduct && (
                    <div className="info-item">
                      <span className="info-label">Product:</span>
                      {selectedProduct.name}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="info-card green">
                <div className="icon-container" style={{ marginBottom: '10px' }}>
                  <Gift className="icon" />
                </div>
                <h2 className="card-heading">
                  What You Can Get
                </h2>
                <div className="bullet-list">
                  <div className="bullet-item">
                    <span className="bullet">•</span>
                    Free Necklace Gifts
                  </div>
                  <div className="bullet-item">
                    <span className="bullet">•</span>
                    Free Earrings Gifts
                  </div>
                  <div className="bullet-item">
                    <span className="bullet">•</span>
                    60% Off Coupon
                  </div>
                </div>
                {selectedProduct && (
                  <div className="product-thumbnail-container">
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name} 
                      className="product-thumbnail"
                    />
                  </div>
                )}
              </div>
              
              <div className="info-card purple">
                <h2 className="card-heading">
                  About The Free Gift
                </h2>
                <div className="bullet-list">
                  <div className="bullet-item">
                    <span className="bullet">•</span>
                    No Shipping Charges
                  </div>
                  <div className="bullet-item">
                    <span className="bullet">•</span>
                    No Hidden Fees
                  </div>
                  <div className="bullet-item">
                    <span className="bullet">•</span>
                    No Credit Card Required
                  </div>
                  <div className="bullet-item">
                    <span className="bullet">•</span>
                    Simple Steps to Get It (Generally less than 5 minutes)
                  </div>
                  <div className="bullet-item">
                    <span className="bullet">•</span>
                    The gift will be shipped in 2-5 working days after you claim it
                  </div>
                </div>
              </div>
            </div>
            
            <div className="button-container">
              <button
                onClick={handlePrevStep}
                className="btn btn--secondary"
              >
                Previous Step
              </button>
              <button
                onClick={handleNextStep}
                className={kellaButtonClasses}
              >
                Claim It Now
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {currentStep === 3 && (
          <div className="step-container">
            {/* Product Image */}
            {selectedProduct && (
              <div className="product-image-container">
                <div className="product-image-wrapper">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    className="product-image"
                  />
                </div>
              </div>
            )}
            
            <div className="step-header">
              <h1 className="step-heading">
                How was your experience with TRENSYGO?
              </h1>
              <div className="divider"></div>
            </div>
            
            {/* Star Rating */}
            <div className="rating-container">
              <h2 className="rating-heading">
                Overall Rating?
              </h2>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingClick(star)}
                    onMouseEnter={() => handleRatingHover(star)}
                    onMouseLeave={handleRatingLeave}
                    className="star-button"
                  >
                    <Star 
                      className={`star-icon ${
                        (hoveredRating || rating) >= star 
                          ? 'filled' 
                          : ''
                      }`} 
                    />
                  </button>
                ))}
              </div>
              
              {/* Rating Label */}
              {rating > 0 && (
                <p className="rating-label">
                  {ratingLabels[rating - 1]}
                </p>
              )}
            </div>
            
            {/* Conditional Content Based on Rating */}
            {rating > 0 && rating < 4 ? (
              <div className="feedback-container negative">
                <p className="feedback-text">
                  We do apologize that your experience with us are not as expected but not to worry we are here to make things right for you. Please do contact us at support@trensygo.com and one of our representative will make the time and effort to make things right for you.
                </p>
              </div>
            ) : rating >= 4 ? (
              <div className="review-container">
                <h2 className="review-heading">
                  Add a written review
                </h2>
                <textarea
                  name="review"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="What did you like or dislike? How was your overall experience?"
                  className={`${kellaInputClasses} review-textarea`}
                  minLength={10}
                ></textarea>
                {review.length < 10 && review.length > 0 && (
                  <p className="error-message">
                    Please write at least 10 characters.
                  </p>
                )}
              </div>
            ) : null}
            
            <div className="button-container">
              <button
                onClick={handlePrevStep}
                className="btn btn--secondary"
              >
                Previous Step
              </button>
              <button
                onClick={handleNextStep}
                disabled={rating >= 4 && review.length < 10}
                className={`${kellaButtonClasses} ${
                  rating >= 4 && review.length < 10 ? 'disabled' : ''
                }`}
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {/* Step 4 */}
        {currentStep === 4 && (
          <div className="step-container">
            <div className="step-header">
              <h1 className="step-heading">
                We're glad you're enjoying TRENSYGO Jewelry
              </h1>
              <p className="step-subheading">
                Please consider leaving your honest, unbiased review and Share Your Experience With Others
              </p>
              <div className="divider"></div>
              <h2 className="comment-heading">
                Your Comment
              </h2>
            </div>
            
            {/* Display Rating */}
            <div className="display-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star}
                  className={`star-icon ${
                    rating >= star ? 'filled' : ''
                  }`} 
                />
              ))}
            </div>
            
            {/* Display Review */}
            <div className="review-display">
              <p className="review-text">
                {review}
              </p>
            </div>
            
            {/* Checkbox - Updated with new styling */}
            <label style={{
              display: 'block',
              margin: '0 0 1.5rem 1rem',
              cursor: 'pointer'
            }}>
              <input
                type="checkbox"
                id="returnCheckbox"
                checked={returnChecked}
                onChange={() => setReturnChecked(!returnChecked)}
                style={{
                  verticalAlign: 'middle',
                  position: 'relative',
                  bottom: '1px',
                  marginRight: '0.75rem'
                }}
              />
              I know returning to this page for the final step When Review done
            </label>
            
            {/* Action Buttons */}
            <div className="action-buttons">
              <button
                onClick={handleCopyReview}
                className={`${kellaButtonClasses} copy-button`}
              >
                {copied ? (
                  <>
                    <Check className="button-icon" />
                    COPIED!
                  </>
                ) : (
                  <>
                    <Copy className="button-icon" />
                    COPY COMMENT TEXT
                  </>
                )}
              </button>
              
              {selectedProduct && (
                <a
                  href={selectedProduct.amazonReviewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="amazon-button"
                  onClick={handleAmazonReviewClick}
                  style={{
                    fontSize: '1.1rem',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
                >
                  <ExternalLink className="button-icon" />
                  PASTE ON AMAZON
                </a>
              )}
            </div>
            
            <div className="button-container">
              <button
                onClick={handlePrevStep}
                className="btn btn--secondary"
              >
                Previous Step
              </button>
              <button
                onClick={handleNextStep}
                className={kellaButtonClasses}
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {/* Step 5 - Have you copied and pasted your review on Amazon? */}
        {currentStep === 5 && (
          <div className="step-container">
            <div className="step-header">
              <h1 className="step-heading">
                Have you copied and pasted your review on Amazon?
              </h1>
            </div>
            
            <div className="yes-no-buttons">
              <button
                onClick={handleNextStep}
                className={`${kellaButtonClasses} yes-button`}
                style={{ width: '180px !important', flex: '1', maxWidth: '180px' }}
              >
                Yes
              </button>
              
              {selectedProduct && (
                <a
                  href={selectedProduct.amazonReviewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-button"
                  style={{ width: '180px !important', flex: '1', maxWidth: '180px' }}
                >
                  No
                </a>
              )}
            </div>
          </div>
        )}

        {/* Step 6 - Which gift would you like? */}
        {currentStep === 6 && (
          <div className="step-container">
            <div className="step-header">
              <h1 className="step-heading">
                Which gift would you like?
              </h1>
            </div>
            
            <div className="gift-selection">
              <select
                id="giftSelect"
                value={selectedGift}
                onChange={handleGiftChange}
                className={`${kellaSelectClasses} gift-select`}
              >
                <option value="">Select a product</option>
                {giftOptions.map(gift => (
                  <option key={gift.id} value={String(gift.id)}>
                    {gift.name}
                  </option>
                ))}
              </select>
            </div>
            
            {selectedGiftOption && (
              <div className="selected-gift">
                <div className="gift-image-container">
                  <img 
                    src={selectedGiftOption.image} 
                    alt={selectedGiftOption.name} 
                    className="gift-image"
                  />
                </div>
                
                <p className="gift-prompt">
                  You selected...
                </p>
                
                <h1 className="gift-name">
                  {selectedGiftOption.name}
                </h1>
                
                <p className="gift-description">
                  {selectedGiftOption.description}
                </p>
                
                <button
                  onClick={handleNextStep}
                  className={kellaButtonClasses}
                >
                  Claim It Now
                </button>
              </div>
            )}
          </div>
        )}

        {/* Step 7 */}
        {currentStep === 7 && (
          <div className="step-container">
            <div className="step-header">
              <h1 className="success-heading">
                Congratulation! One last step to receiving Free Gifts
              </h1>
              <div className="divider"></div>
              <h2 className="shipping-heading">
                To receive your free gift, please enter your information below
              </h2>
              <p className="shipping-note">
                Please double-check all information is correct before submitting. Inputting incorrect information may result in you not receiving your gift.
              </p>
              <div className="divider"></div>
              <h3 className="form-subheading">
                Shipping Information
              </h3>
            </div>
            
            <form className={`${kellaFormClasses} shipping-form`}>
              <div className="form-grid">
                {/* First Name & Last Name */}
                <div className="form-field">
                  <label htmlFor="firstName" className={kellaLabelClasses}>
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={shippingInfo.firstName}
                    onChange={handleShippingInfoChange}
                    placeholder="Enter your first name...."
                    className={kellaInputClasses}
                    disabled={isLoading}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="lastName" className={kellaLabelClasses}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={shippingInfo.lastName}
                    onChange={handleShippingInfoChange}
                    placeholder="Enter your last name...."
                    className={kellaInputClasses}
                    disabled={isLoading}
                  />
                </div>
                
                {/* Email & Contact Number */}
                <div className="form-field">
                  <label htmlFor="emailAddress" className={kellaLabelClasses}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    value={shippingInfo.emailAddress}
                    onChange={handleShippingInfoChange}
                    placeholder="Enter your email address...."
                    className={kellaInputClasses}
                    disabled={isLoading}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contactNumber" className={kellaLabelClasses}>
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={shippingInfo.contactNumber}
                    onChange={handleShippingInfoChange}
                    placeholder="Enter your contact number...."
                    className={kellaInputClasses}
                    disabled={isLoading}
                  />
                </div>
              </div>
              
              {/* Contact Consent - Updated with new styling */}
              <label style={{
                display: 'block',
                margin: '0 0 1.5rem 0',
                cursor: 'pointer'
              }}>
                <input
                  type="checkbox"
                  id="contactConsent"
                  checked={contactConsent}
                  onChange={() => setContactConsent(!contactConsent)}
                  style={{
                    verticalAlign: 'middle',
                    position: 'relative',
                    bottom: '1px',
                    marginRight: '0.75rem'
                  }}
                  disabled={isLoading}
                />
                Ok to contact me with other offers and future deals.
              </label>
              
              {/* Address */}
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="address1" className={kellaLabelClasses}>
                    Address 1
                  </label>
                  <input
                    type="text"
                    id="address1"
                    name="address1"
                    value={shippingInfo.address1}
                    onChange={handleShippingInfoChange}
                    placeholder="Enter your address...."
                    className={kellaInputClasses}
                    disabled={isLoading}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="address2" className={kellaLabelClasses}>
                    Address 2 (Optional)
                  </label>
                  <input
                    type="text"
                    id="address2"
                    name="address2"
                    value={shippingInfo.address2}
                    onChange={handleShippingInfoChange}
                    placeholder="Enter your address...."
                    className={kellaInputClasses}
                    disabled={isLoading}
                  />
                </div>
              </div>
              
              {/* City, State, Zip */}
              <div className="form-grid three-columns">
                <div className="form-field">
                  <label htmlFor="city" className={kellaLabelClasses}>
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={shippingInfo.city}
                    onChange={handleShippingInfoChange}
                    placeholder="Enter City...."
                    className={kellaInputClasses}
                    disabled={isLoading}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="state" className={kellaLabelClasses}>
                    State
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={shippingInfo.state}
                    onChange={handleShippingInfoChange}
                    className={kellaSelectClasses}
                    disabled={isLoading}
                  >
                    <option value="">Select a state</option>
                    {usStates.map(state => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="zip" className={kellaLabelClasses}>
                    Zip
                  </label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    value={shippingInfo.zip}
                    onChange={handleShippingInfoChange}
                    placeholder="Enter your zip code...."
                    className={kellaInputClasses}
                    disabled={isLoading}
                  />
                </div>
              </div>
              
              <div className="button-container">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="btn btn--secondary"
                  disabled={isLoading}
                >
                  Previous Step
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  disabled={!isStep7Valid() || isLoading}
                  className={`${kellaButtonClasses} ${
                    isStep7Valid() && !isLoading ? '' : 'disabled'
                  }`}
                >
                  {isLoading ? 'Processing...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 8 (Thank You page) */}
        {currentStep === 8 && (
          <div className="thank-you-container">
            <div className="thank-you-icon">
              <Gift className="gift-icon" />
            </div>
            <h2 className="thank-you-heading">Thank you for your feedback!</h2>
            <p className="thank-you-message">
              We appreciate you taking the time to share your experience with us! Please allow 3-5 working days to received your free product.
            </p>
            <div className="button-container">
              <button
                onClick={handlePrevStep}
                className="btn btn--secondary"
                disabled={isLoading}
              >
                Previous Step
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  return <ShopifyAppWrapper />;
}

export default App;