"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tafrsl8",
        "template_2vjq7lg",
        form.current,
        "7LnXQFeeV1KcNg5oe"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        () => {
          setStatus("Failed to send the message, please try again.");
        }
      );
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-20 bg-black text-white relative">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Left side */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="space-y-6"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-4xl font-extrabold text-white-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.6)]"
          >
            Let’s Connect
          </motion.h2>

          <motion.p
            variants={fadeUp}
            viewport={{ once: false, amount: 0.2 }}
            className="text-gray-300 leading-relaxed"
          >
            I’m always open to discussing new projects, creative ideas, or
            opportunities to collaborate on your vision. Don’t hesitate to reach
            out!
          </motion.p>

          <motion.div
            variants={fadeUp}
            viewport={{ once: false }}
            className="space-y-3"
          >
            <p>
              <span className="font-semibold text-white-400">Email: </span>
              <a
                href="mailto:githigekhristine@mail.com"
                className="hover:underline hover:text-white-400 transition"
              >
                githigekhristine@mail.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-white-400">Phone: </span>
              <a
                href="tel:+254725952696"
                className="hover:underline hover:text-orange-400 transition"
              >
                +254 725 952 696
              </a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="flex space-x-6 text-2xl"
          >
            <a
              href="https://www.linkedin.com/in/khristine-githige/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/khristine-g"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              <FaGithub />
            </a>
          </motion.div>
        </motion.div>

        {/* Right side (form) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="bg-black/70 p-8 rounded-2xl shadow-[0_0_25px_rgba(249,115,22,0.3)] border border-orange-500/30"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            {["name", "email", "subject"].map((field, i) => (
              <motion.input
                key={field}
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                required
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ delay: i * 0.2 }}
                className="w-full px-4 py-3 rounded-lg bg-black border border-orange-500/30 text-white focus:outline-none focus:border-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.2)]"
              />
            ))}

            <motion.textarea
              name="message"
              placeholder="Message"
              required
              rows="5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="w-full px-4 py-3 rounded-lg bg-black border border-orange-500/30 text-white focus:outline-none focus:border-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.2)]"
            ></motion.textarea>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(249,115,22,0.7)" }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 transition text-white font-semibold py-3 rounded-lg shadow-[0_0_20px_rgba(249,115,22,0.5)]"
            >
              {status === "Message sent successfully!" ? "✅ Sent!" : "Send Message"}
            </motion.button>
          </form>

          {status && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`mt-4 text-sm text-center ${
                status.includes("successfully")
                  ? "text-orange-400"
                  : "text-red-400"
              }`}
            >
              {status}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
