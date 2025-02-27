"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  // ✅ Updated Validation Schema with Checkbox
  const validationSchema = Yup.object({
    name: Yup.string().min(2, "Too short!").required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string()
      .min(10, "Message too short")
      .required("Message is required"),
    terms: Yup.boolean()
      .oneOf([true], "You must accept the Terms and Privacy Policy")
      .required("Required"),
  });

  return (
    <div>
      <h3 className="sr-only mb-4 text-2xl font-bold">Contact Us</h3>

      {submitted ? (
        <p className="form-success-msg">
          Thank you! Your message has been sent.
        </p>
      ) : (
        <Formik
          initialValues={{ name: "", email: "", message: "", terms: false }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
              });

              if (response.ok) {
                setSubmitted(true);
                resetForm();
              }
            } catch (error) {
              console.error("Submission failed", error);
            }
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, values }) => (
            <Form className="flex flex-col items-start gap-4">
              {/* Name Field */}
              <div className="w-full">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="form-field"
                  aria-required="true"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="form-error-msg"
                />
              </div>

              {/* Email Field */}
              <div className="w-full">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="form-field"
                  aria-required="true"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="form-error-msg"
                />
              </div>

              {/* Message Field */}
              <div className="w-full">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows="4"
                  className="form-field"
                  aria-required="true"
                />
                <ErrorMessage
                  name="message"
                  component="p"
                  className="form-error-msg"
                />
              </div>

              {/* ✅ Terms & Privacy Policy Checkbox */}
              <div className="flex items-center gap-2">
                <Field
                  type="checkbox"
                  id="terms"
                  name="terms"
                  className="h-5 w-5 rounded border"
                />
                <label htmlFor="terms" className="text-base">
                  I agree to the{" "}
                  <a href="/terms" className="font-semibold hover:underline">
                    Terms
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy-policy"
                    className="font-semibold hover:underline"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>
              <ErrorMessage
                name="terms"
                component="p"
                className="text-sm text-red-500"
              />

              {/* Submit Button (Disabled if Checkbox is not checked) */}
              <button
                type="submit"
                className={`${isSubmitting || !values.terms ? "bg-slate-400" : "bg-primary-lightBlue"} mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 py-3 font-bold text-white transition-all hover:saturate-150 disabled:opacity-50 max-sm:w-full`}
                disabled={isSubmitting || !values.terms}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default ContactForm;
