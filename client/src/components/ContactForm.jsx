// src/components/ContactForm.jsx
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    license: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' })); // Clear error on change
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.license) newErrors.license = 'Please select a license';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit logic here (e.g., send data to API)
      console.log('Form submitted:', formData);
    }
  };

  return (
    <section className="py-5 bg-light-subtle">
      <div className="container">
        <h2 className="mb-4 text-center text-body">Get In Touch</h2>
        <form className="row g-3" onSubmit={handleSubmit} noValidate>
          <div className="col-md-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              placeholder="Enter name"
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>
          <div className="col-md-6">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              placeholder="Enter email"
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <div className="col-md-6">
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={`form-control ${errors.company ? 'is-invalid' : ''}`}
              placeholder="Enter company"
            />
            {errors.company && <div className="invalid-feedback">{errors.company}</div>}
          </div>
          <div className="col-md-6">
            <select
              name="license"
              value={formData.license}
              onChange={handleChange}
              className={`form-select ${errors.license ? 'is-invalid' : ''}`}
            >
              <option value="">Choose...</option>
              <option value="Office">Office Suite</option>
              <option value="Design">Design Software</option>
              <option value="Security">Security Tools</option>
            </select>
            {errors.license && <div className="invalid-feedback">{errors.license}</div>}
          </div>
          <div className="col-12">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`form-control ${errors.message ? 'is-invalid' : ''}`}
              rows="4"
              placeholder="Your message..."
            />
            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}

