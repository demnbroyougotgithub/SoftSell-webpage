// src/components/WhyChooseUs.jsx
import { FaCheckCircle, FaShieldAlt, FaClock, FaHandsHelping } from 'react-icons/fa';

const features = [
  {
    icon: <FaCheckCircle className="text-primary mb-2" size={24} />,
    title: 'Verified Buyers',
    description: 'We only work with trusted buyers.',
  },
  {
    icon: <FaShieldAlt className="text-primary mb-2" size={24} />,
    title: 'Secure Process',
    description: 'Your license data stays safe.',
  },
  {
    icon: <FaClock className="text-primary mb-2" size={24} />,
    title: 'Fast Turnaround',
    description: 'Sell and get paid in 24–48 hours.',
  },
  {
    icon: <FaHandsHelping className="text-primary mb-2" size={24} />,
    title: 'Great Support',
    description: 'We’re here to help every step of the way.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-5 text-center">
      <div className="container">
        <h2 className="mb-4 text-body">Why Choose Us</h2>
        <div className="row">
          {features.map((item, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="card bg-body-tertiary border-0 p-3 shadow-sm h-100">
                {item.icon}
                <h5 className="text-body mt-2">{item.title}</h5>
                <p className="text-body-secondary">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
