import React, { useState } from 'react';
import './LandingPage.css'; // Import the CSS file for styling

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState('about');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="landing-page">
       <div className='title'> 
      <h1>Welcome to FRANK & FRANK</h1>
      </div>
      <div className="button-container">
        <button
          className={activeTab === 'about' ? 'active' : ''}
          onClick={() => handleTabClick('about')}
        >
          About Us
        </button>
        <button
          className={activeTab === 'fleet' ? 'active' : ''}
          onClick={() => handleTabClick('fleet')}
        >
          Our Fleet
        </button>
        <button
          className={activeTab === 'why' ? 'active' : ''}
          onClick={() => handleTabClick('why')}
        >
          Why Choose Us
        </button>
        <button
          className={activeTab === 'contact' ? 'active' : ''}
          onClick={() => handleTabClick('contact')}
        >
          Contact Us
        </button>
      </div>
      <div className={`content ${activeTab}`}>
        {activeTab === 'about' && (
          <div>
            <h2>About Us</h2>
            <p>
              FRANK & FRANK is an emerging luxury car rental service company in Dubai. With our humble beginning and guiding principles, our services surround honesty, integrity, and transparency. With Frank & Frank, you just don't rent out cars but you get treated as an extended family that’s part of our ecosystem.
            </p>
            <p>
        We offer the largest transportation solutions in Dubai. From cars, trucks, and SUVs to car sharing, you get ample options to choose from to make your everyday or special commutes a seamless experience. As sustainability is an integral part of our vision, we take an active role in it to make car services faster while making the world a better place for generations to come.
      </p>
      <p>
        Because of our reach and networks in Dubai, we offer a very unique position to:
      </p>
      <ul>
        <li>Foster Innovation with the Automobile Space</li>
        <li>Futuristic Car Service</li>
        <li>Flexible Car Service Option</li>
        <li>Seamless Booking Process</li>
        <li>Personalized Service</li>
        <li>Luxury Add-ons</li>
        <li>Exquisite Fleet Selection</li>
        <li>Exclusive Partnerships</li>
        <li>24/7 Support</li>
      </ul>
      <p>We emphasize providing optimum quality, flexibility, personalized service, and luxury experience to all our customers.</p>
          </div>
        )}
        {activeTab === 'fleet' && (
          <div>
            <h2>Our Fleet</h2>
            <p>
              FRANK & FRANK offers a diverse selection of luxury car rental services to cater to the needs and preferences of every customer. As we understand that each customer has a unique style to travel, from spacious vehicles to luxury limos, you get access to it all at one place!
            </p>
            <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Brand Names</th>
            <th>Price</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {/* Add rows for each car type with corresponding information */}
        </tbody>
      </table>

      <h2>Additional Features and Amenities for Your Convenience at FRANK & FRANK Car Services</h2>
      <h3>GPS Navigation</h3>
      <p>
        We offer GPS navigation options with selected car models to help you familiarize unexplored roads with ease. Whether you're on a road trip or exploring a brand-new city in Dubai. Our GPS devices will help you with turn-by-turn navigation, real-time traffic updates to reach your destination without a hassle.
      </p>
      <h3>Child Seats</h3>
      <p>
        When you explore, there are chances that you're traveling with your family. We prioritize comfort and safety for the families who travel with their young children. Our child seat offerings include toddler seats, infant seats, and booster seats which are compliant with the highest safety standard. Before you book with us, come up with your requirement and we’ll figure everything out there after.
      </p>
      <h3>Complimentary Amenities</h3>
      <p>
        Our exceptional customer service ensures you get vehicle safety kits, car chargers, roadside assistance to make your ride pleasant. These additions enhance the customer's convenience and ensure that you have everything you need for your journey.
      </p>
      <h3>Chauffeur Options</h3>
      <p>
        As an end-to-end car rental service, you get to roam around cities, streets, and adventure scenes with an in-house driver. You can also choose to have an additional driver to avoid any mishap that's to come! The convenience ensures you enjoy the riding experience without having to drive.
      </p>
          </div>
        )}
        {activeTab === 'why' && (
          <div>
            <h2>Why Choose Us</h2>
            <h3>Transparent Pricing</h3>
      <p>
        At FRANK & FRANK Car Rentals, we provide our customers with transparent and upfront pricing. You will get a detailed breakdown of costs which further ensure that your understanding of the rental charges is unwavered from the time of reservation till the end of the service. You'll receive fair and competitive pricing for all of your car rental needs.
      </p>
      <h3>Flexible Rental Terms</h3>
      <p>
        Every customer has unique needs and preferences, and that's why your needs and requirements are of great importance to us. With our flexible rental terms, we can accommodate your specific needs for your travel. This feature will allow you to tailor your overall rental duration that suits the travel plan while providing you with immeasurable flexibility and convenience.
      </p>
      <h3>Hassle-free Booking Process</h3>
      <p>
        We value your time and strive to make the entire car rental process as hassle-free and seamless as possible. We allow you to book directly from our website by browsing through our extensive fleet. With FRANK & FRANK, you can choose the vehicle of your choice and finish the reservation process with just a few clicks.
      </p>
      <h3>Special Perks</h3>
      <p>
        You can avail a wide range of special perks as well as services which come under our purview, and that makes us different from our competitors. These special perks are curated to enhance your overall rental experience while providing you a real-life solution.
      </p>
      <h3>Guaranteed Customer Satisfaction</h3>
      <p>
        Your satisfaction is our priority. At FRANK & FRANK, we are committed to providing customer services that are exceptional and meet up with your expectations. Our expert staff will assist you throughout your journey from selecting the ideal vehicle, addressing queries, providing travel tips, and answering your questions. We partner with travel agencies, hotels, or tourism services for your travel convenience!
      </p>
          </div>
        )}
        {activeTab === 'contact' && (
          <div>
            <h2>Contact Us</h2>
            <p>We would love to hear from you! Whether you have inquiries, require customer support, or simply want to connect with us, we've got you covered. Here's how you can reach out to FRANK & FRANK:</p>
      <ul>
        <li>Phone: _____</li>
        <li>Email: info@frankandfrank.com</li>
        <li>Address: ____________</li>
      </ul>
      <p>Feel free to give us a call during our operating hours or send us an email, and our dedicated team will be delighted to assist you. We strive to provide prompt and efficient customer support to ensure your experience with FRANK & FRANK is exceptional.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
