import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState({
    isSubmitting: false,
    response: null,
  });

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus({
      ...status,
      isSubmitting: true,
    });

    await fetch(`${process.env.NEXT_PUBLIC_MAIL_PROVIDER}`, {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((data) => {
        setStatus({
          ...status,
          isSubmitting: false,
          response: data.status === 200 ? 200 : "error",
        });
        return data;
      })
      .catch((err) => {
        setStatus({
          isSubmitting: false,
          response: "error",
        });
        return;
      });

    e.target.reset();
  }

  return (
    <div
      className="relative grid max-w-3xl mx-auto sm:px-8"
      aria-labelledby="contact-heading"
    >
      <h3 className="mt-0 text-lg text-center font-medium">
        Send us a message
      </h3>
      <form
        onSubmit={handleSubmit}
        className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 text-neutral-900/70"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            autoComplete="given-name"
            className="py-3 px-4 block w-full dark:autofill:!text-neutral-900"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="py-3 px-4 block w-full"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="subject" className="block text-sm font-medium mb-1">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            className="py-3 px-4 block w-full"
          />
        </div>
        <div className="sm:col-span-2">
          <div className="flex justify-between mb-1">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <span id="message-max" className="text-sm">
              Max. 500 characters
            </span>
          </div>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            className="py-3 px-4 block w-full"
            aria-describedby="message-max"
          />
          <input name="bot-field" type="text" className="hidden" />
        </div>
        <div className="sm:col-span-2 sm:flex sm:justify-end">
          <button type="submit" disabled={status.isSubmitting}>
            <span>Submit</span>
            {/* -- Icon -- */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`ml-2 text-slate-200 ${
                status.isSubmitting && "animate-spin"
              }`}
            >
              {/* -- circle -- */}
              <path
                className={`${
                  status.isSubmitting
                    ? "text-slate-900 opacity-40"
                    : status.response === 200
                    ? "text-green-900"
                    : status.response === "error" && !status.isSubmitting
                    ? "text-red-700"
                    : "text-slate-200"
                }`}
                d="M18.3149 13.4442C18.7672 12.3522 19 11.1819 19 10C19 7.61305 18.0518 5.32387 16.364 3.63604C14.6761 1.94821 12.3869 1 10 1C7.61305 1 5.32387 1.94821 3.63604 3.63604C1.94821 5.32387 1 7.61305 1 10C1 11.1819 1.23279 12.3522 1.68508 13.4442C2.13738 14.5361 2.80031 15.5282 3.63604 16.364C4.47177 17.1997 5.46392 17.8626 6.55585 18.3149C7.64778 18.7672 8.8181 19 10 19C11.1819 19 12.3522 18.7672 13.4442 18.3149C14.5361 17.8626 15.5282 17.1997 16.364 16.364C17.1997 15.5282 17.8626 14.5361 18.3149 13.4442Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* -- Arrow -- */}
              <path
                className={`text-slate-200 ${
                  status.isSubmitting || status.response ? "hidden" : "block"
                }`}
                d="M11 7L14 10M14 10L11 13M14 10H6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* -- Error/x -- */}
              <path
                className={`text-red-700 ${
                  !status.isSubmitting && status.response === "error"
                    ? "block"
                    : "hidden"
                }`}
                d="M8 12L10 10M10 10L12 8M10 10L8 8M10 10L12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* -- Success/tick -- */}
              <path
                className={`text-green-900 ${
                  !status.isSubmitting && status.response === 200
                    ? "block"
                    : "hidden"
                }`}
                d="M7 11L9 13L14 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* -- loading spinner -- */}
              <path
                className={status.isSubmitting ? "block" : "hidden"}
                d="M1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
