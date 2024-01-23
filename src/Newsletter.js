import React, { useState } from 'react';

const News = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your actual API call to subscribe the user
    // For simplicity, we'll just set 'subscribed' to true
    setSubscribed(true);
  };

  return (
    <div className="newsletter-signup" style={{backgroundColor:'black'}}>
      <h2 style={{color:'whitesmoke'}}>Subscribe to Our Newsletter</h2>
      <p style={{color:'whitesmoke'}}>Stay updated with the latest news, offers, and product releases!</p>

      {subscribed ? (
        <p style={{color:'whitesmoke'}}>Thank you for subscribing! You will receive our newsletter soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label style={{color:'whitesmoke'}} htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      )}
    </div>
  );
};

export default News;
