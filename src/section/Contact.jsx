import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import debounce from 'lodash.debounce'; // Install lodash.debounce if not already installed

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  // Debounced handle change
  const debouncedHandleChange = debounce(({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  }, 300);

  const handleChange = (e) => {
    debouncedHandleChange(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_zo36en3',
        'template_mrnf7rw',
        {
          from_name: form.name,
          to_name: 'Praveen',
          from_email: form.email,
          to_email: 'spartanswolves@gmail.com',
          message: form.message,
        },
        'PNulwWn_L4k69t1ul'
      );

      setLoading(false);
      alert('Your message has been sent');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert('Something went wrong');
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-[-2] min-h-screen" />

        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                defaultValue={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                defaultValue={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                defaultValue={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
