import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e9f827a3-9066-4f84-94d8-027d36be60c6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-[#5a065a] dark:to-gray-900"
    >
      <div className="max-w-5xl mx-auto text-center px-5">
        <h2 className="text-5xl font-extrabold mb-3 text-purple-700 dark:text-purple-400">
          Contact with me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-12 text-lg">
          I'd love to hear from you! If you have any questions, feedback, or a
          project in mind, please use the form below to get in touch. Let's
          connect and create something amazing together.
        </p>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="flex-1 flex flex-col gap-5 bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl border-2 border-purple-200 dark:border-[#9ab5e4]"
          >
            <div className="flex flex-col gap-3 text-white">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                name="name"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition animated-border"
                name="email"
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows="5"
              required
              className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition text-white"
              name="message"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition cursor-pointer active:from-purple-200 active:to-pink-900"
            >
              Send Message
            </button>
            <p className="mt-4 text-blue-300">{result}</p>
          </form>

          {/* Contact Info */}
          <div className="flex-1 flex flex-col justify-center gap-6 text-gray-700 dark:text-gray-200">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-700 shadow hover:shadow-lg transition">
              <FaPhone className="text-purple-500 text-2xl" />{" "}
              <span className="text-lg font-medium">+91 94758 27545</span>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-700 shadow hover:shadow-lg transition">
              <FaEnvelope className="text-pink-500 text-2xl" />{" "}
              <span className="text-lg font-medium">
                avishekgupta129@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-700 shadow hover:shadow-lg transition">
              <FaWhatsapp className="text-pink-500 text-2xl" />{" "}
              <span className="text-lg font-medium">+91 94758 27545</span>
            </div>

            {/* Social Icons with IDs */}
            <div className="flex flex-col gap-4 mt-4 text-left">
              <a
                href="https://www.instagram.com/avishekgupta05/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-pink-500 text-2xl hover:text-pink-700 transition"
              >
                <FaInstagram />{" "}
                <span className="text-lg font-medium">
                  @avishekgupta05
                </span>
              </a>

              <a
                href="https://www.instagram.com/theavieffect/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-pink-500 text-2xl hover:text-pink-700 transition"
              >
                <FaInstagram />{" "}
                <span className="text-lg font-medium">
                  @theavieffect
                </span>
              </a>
              <a
                href="https://www.facebook.com/share/19ujvBpHtn/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-blue-600 text-2xl hover:text-blue-800 transition"
              >
                <FaFacebookF />{" "}
                <span className="text-lg font-medium">Avishek Gupta</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
