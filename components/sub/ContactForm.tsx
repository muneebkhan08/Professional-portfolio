"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { UserIcon, EnvelopeIcon, PhoneIcon, ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");
  const [statusText, setStatusText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SENDING");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("SUCCESS");
        setStatusText(data.message);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("ERROR");
        setStatusText(data.error);
      }
    } catch {
      setStatus("ERROR");
      setStatusText("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="max-w-lg mx-auto rounded-lg shadow-md">
      <h2 className="text-2xl text-white flex items-center justify-center gap-3 font-bold mb-4"><MdOutlineMailOutline />Get in Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1 pl-1">
            <UserIcon className="inline w-5 h-5 mr-2 text-gray-400" />
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 border-[2px] border-gray-400 rounded-3xl text-purple-100 bg-black resize-y focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
          
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1 pl-1">
          <EnvelopeIcon className="inline w-5 h-5 mr-2 text-gray-400" />
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="your.email@example.com"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 border-[2px] border-gray-400 rounded-3xl text-purple-100 bg-black resize-y focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
  
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1 pl-1">
          <PhoneIcon className="inline w-5 h-5 mr-2 text-gray-400" />
            Phone
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Your phone number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 border-[2px] border-gray-400 rounded-3xl text-purple-100 bg-black resize-y focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
  
        {/* <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1 pl-5">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 border-[2px] rounded-3xl text-purple-100 h-24 bg-black pl-3"
          />
        </div> */}

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 pl-1">
          <ChatBubbleOvalLeftIcon className="inline w-5 h-5 mr-2 text-gray-400" />
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message here..."
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-400 rounded-3xl text-purple-100 bg-black h-32 resize-y focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-3xl bg-purple-950 border-2 dark:border-gray-600 border-transparent text-white hover:text-white hover:border-white transition"
          disabled={status === "SENDING"}
        >
          {status === "SENDING" ? "Sending..." : "Send Message"}
        </button>
        {/* <button className="mt-14 px-6 py-3 transition-all flex items-center gap-2 rounded-3xl bg-purple-950 border-2 dark:border-gray-600 border-transparent text-white text-2xl hover:text-white hover:border-white">
          Get in Touch
          <FiArrowUpRight />
        </button>
       */}
      </form>

      {status !== "IDLE" && (
        <p className={`mt-4 text-center ${status === "SUCCESS" ? "text-green-600" : "text-red-600"}`}>
          {statusText}
        </p>
      )}
    </section>
  );
};

export default ContactForm;

// "use client";

// import { useState, ChangeEvent, FormEvent } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");
//   const [statusText, setStatusText] = useState("");

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setStatus("SENDING");
//     setStatusText("Sending...");

//     try {
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setStatus("SUCCESS");
//         setStatusText(data.message || "Message sent successfully!");
//         setFormData({ name: "", email: "", phone: "", message: "" });
//       } else {
//         setStatus("ERROR");
//         setStatusText(data.error || "Error sending message.");
//       }
//     } catch (error) {
//       setStatus("ERROR");
//       setStatusText("Failed to send message. Please try again.");
//     }
//   };

//   return (
//     <section className="py-8 px-4 max-w-2xl mx-auto">
//       {/* Page Header */}
//       <h2 className="text-3xl font-bold text-center mb-2">Contact Me</h2>
//       <p className="text-center text-gray-600 mb-8">
//         Have a question or want to work together? Fill out the form below and I&apos;ll get back to you as soon as possible.
//       </p>

//       {/* Form Container */}
//       <div className="bg-white rounded-md shadow p-6 sm:p-8">
//         <div className="flex items-center mb-6">
//           {/* Mail Icon */}
//           <h3 className="text-xl font-semibold ml-2">Get in Touch</h3>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* Name Field */}
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//               Name
//             </label>
//             <input
//               id="name"
//               type="text"
//               name="name"
//               placeholder="Your name"
//               required
//               value={formData.name}
//               onChange={handleChange}
//               className="block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           {/* Email Field */}
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               name="email"
//               placeholder="your.email@example.com"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           {/* Phone Field */}
//           <div>
//             <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//               Phone
//             </label>
//             <input
//               id="phone"
//               type="tel"
//               name="phone"
//               placeholder="Your phone number"
//               required
//               value={formData.phone}
//               onChange={handleChange}
//               className="block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           {/* Message Field */}
//           <div>
//             <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               placeholder="Your message here..."
//               required
//               value={formData.message}
//               onChange={handleChange}
//               className="block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500 h-24"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={status === "SENDING"}
//             className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition disabled:opacity-50"
//           >
//             {status === "SENDING" ? "Sending..." : "Send Message"}
//           </button>
//         </form>

//         {/* Status Feedback */}
//         {status !== "IDLE" && (
//           <p
//             className={`mt-4 text-center ${
//               status === "SUCCESS" ? "text-green-600" : status === "ERROR" ? "text-red-600" : ""
//             }`}
//           >
//             {statusText}
//           </p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ContactForm;
