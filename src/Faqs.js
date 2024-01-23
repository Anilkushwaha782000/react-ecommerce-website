import React, { useState } from 'react';


const FAQSection = () => {
  // Define an array of FAQ items, each with a question and an answer
  const faqItems = [
    {
      id: 1,
      question: 'What is your return policy?',
      answer:
        'Our return policy allows you to return products within 30 days of purchase. Please review our detailed return policy for more information.',
    },
    {
      id: 2,
      question: 'How do I track my order?',
      answer:
        'You can track your order by logging into your account or using the tracking number provided in your order confirmation email.',
    },
    {
        id: 3,
        question: 'How can I return a product?',
        answer:
          'To return a product, log in to your account, go to the Orders section, and select the item you want to return. Follow the instructions to initiate the return process. Please review our return policy for more details.',
      },
      {
        id: 4,
        question: 'What payment methods do you accept?',
        answer:
          'We accept major credit cards, including Visa, MasterCard, and American Express. We also offer alternative payment methods like PayPal and Apple Pay for your convenience.',
      },
      {
        id: 5,
        question: 'Do you offer international shipping?',
        answer:
          'Yes, we offer international shipping to many countries. During the checkout process, you can select your country to see if international shipping is available to your location. Please note that international shipping rates and delivery times may vary.',
      },
      {
        id: 6,
        question: 'How can I contact customer support?',
        answer:
          'You can reach our customer support team by emailing support@example.com or by calling our toll-free customer support hotline at 1-800-123-4567. Our support hours are Monday to Friday, 9:00 AM to 5:00 PM.',
      },
    // Add more FAQ items as needed
  ];

  // Use state to track which FAQ items are open (expanded)
  const [openItems, setOpenItems] = useState([]);

  // Function to toggle the open/closed state of an FAQ item
  const toggleItem = (itemId) => {
    if (openItems.includes(itemId)) {
      // Item is open, so close it
      setOpenItems(openItems.filter((id) => id !== itemId));
    } else {
      // Item is closed, so open it
      setOpenItems([...openItems, itemId]);
    }
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqItems.map((item) => (
          <li key={item.id} className={`faq-item ${openItems.includes(item.id) ? 'open' : ''}`}>
            <div className="faq-question" onClick={() => toggleItem(item.id)}>
              {item.question}
              <span className={`toggle-icon ${openItems.includes(item.id) ? 'open' : ''}`}></span>
            </div>
            <div className={`faq-answer ${openItems.includes(item.id) ? 'open' : ''}`}>{item.answer}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQSection;
