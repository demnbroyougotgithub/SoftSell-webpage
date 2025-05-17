// src/components/Testimonials.jsx
const testimonials = [
    {
      name: 'Alex Morgan',
      role: 'CTO',
      company: 'TechNova Inc.',
      text: 'SoftSell made it easy for us to monetize our unused licenses. Highly recommended!',
    },
    {
      name: 'Priya Khanna',
      role: 'IT Manager',
      company: 'DataBridge',
      text: 'Seamless experience. Fast payment and excellent support!',
    },
  ];
  
  export default function Testimonials() {
    return (
      <section className="py-5 bg-light-subtle text-center">
        <div className="container">
          <h2 className="mb-4 text-body">What Our Customers Say</h2>
          <div className="row">
            {testimonials.map((t, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card bg-body-tertiary border-0 shadow-sm p-4 h-100">
                  <p className="text-body-secondary">"{t.text}"</p>
                  <h6 className="mt-3 text-body mb-0">{t.name}</h6>
                  <small className="text-body-secondary">
                    {t.role}, {t.company}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  