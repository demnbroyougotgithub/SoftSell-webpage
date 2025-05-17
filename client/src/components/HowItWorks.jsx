// src/components/HowItWorks.jsx
import { FaUpload, FaCalculator, FaMoneyBillWave } from 'react-icons/fa';

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaUpload size={40} className="text-primary" />,
      title: 'Upload License',
      description: 'Send us details of the license you want to sell.',
    },
    {
      icon: <FaCalculator size={40} className="text-primary" />,
      title: 'Get Valuation',
      description: 'We calculate its resale value instantly.',
    },
    {
      icon: <FaMoneyBillWave size={40} className="text-primary" />,
      title: 'Get Paid',
      description: 'Receive payment quickly after the deal closes.',
    },
  ];

  return (
    <section className="py-5 text-center">
      <h2 className="mb-4 text-body">How It Works</h2>
      <div className="container">
        <div className="row">
          {steps.map((step, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="mb-2">{step.icon}</div>
              <h5 className="text-body">{step.title}</h5>
              <p className="text-body-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
