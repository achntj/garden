import Container from "../components/Container";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function Contact() {
  // Input states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sec, setSec] = useState("");

  // Form submit handler
  const submitForm = async (e) => {
    e.preventDefault();
    if (sec.toLowerCase() === "white") {
      const res = await fetch("http://localhost:3000/api/submit-form", {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
      });
      // Success if status code is 201
      if (res.status === 201) {
        toast("🎉 I'll get in touch soon!", { type: "success" });
        setName("");
        setEmail("");
        setMessage("");
        setSec("");
      } else {
        toast("Please recheck your inputs!", { type: "error" });
      }
    } else {
      toast("That should have been easy 🤔", { type: "error" });
    }
  };

  return (
    <Container title="Contact" description="Reach Out!">
      <div className="">
        <ToastContainer
          position="bottom-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
        />
        <form autoComplete="off" className="" onSubmit={submitForm}>
          <h1 className="">Send a message!</h1>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Achintya Jha"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full outline-none bg-transparent"
          />
          <label htmlFor="email">E-Mail Address</label>
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full outline-none bg-transparent"
          />
          <label htmlFor="security">Zebras are black and ?</label>
          <input
            type="text"
            name="security"
            placeholder="your answer..."
            value={sec}
            onChange={(e) => setSec(e.target.value)}
            required
            className="w-full outline-none bg-transparent"
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols={50}
            rows={5}
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full outline-none h-auto resize-none bg-transparent"
          ></textarea>
          <button
            className="bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 p-2 rounded-lg font-bold"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </Container>
  );
}
