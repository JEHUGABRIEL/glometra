"use client";

import { useMutation } from "@tanstack/react-query";
import { useRef, type FormEvent } from "react";
import { content } from "@/lib/content";
import { site, type Locale } from "@/lib/site";
import { IconArrow } from "./Icons";

type ContactPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  role: string;
  message: string;
  consent: boolean;
  locale: Locale;
  website: string;
};

async function submitContact(payload: ContactPayload) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) throw new Error("Request failed");
  return response.json();
}

export function ContactForm({ locale }: { locale: Locale }) {
  const f = content[locale].contact.form;
  const formRef = useRef<HTMLFormElement>(null);

  const mutation = useMutation({
    mutationFn: submitContact,
    retry: 2,
    onSuccess: () => formRef.current?.reset(),
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (!form.reportValidity()) return;

    mutation.mutate({
      name: String(data.get("name") ?? ""),
      company: String(data.get("company") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      role: String(data.get("role") ?? ""),
      message: String(data.get("message") ?? ""),
      consent: data.get("consent") === "on",
      locale,
      website: String(data.get("website") ?? ""),
    });
  }

  const status = mutation.isPending
    ? "sending"
    : mutation.isSuccess
      ? "success"
      : mutation.isError
        ? "error"
        : "idle";

  return (
    <form className="contact-form" onSubmit={handleSubmit} ref={formRef} noValidate={false}>
      <div className="contact-form__row">
        <div className="field">
          <label htmlFor="cf-name">
            {f.name} <span aria-hidden="true">*</span>
          </label>
          <input id="cf-name" name="name" type="text" autoComplete="name" required maxLength={120} />
        </div>
        <div className="field">
          <label htmlFor="cf-company">
            {f.company} <span aria-hidden="true">*</span>
          </label>
          <input
            id="cf-company"
            name="company"
            type="text"
            autoComplete="organization"
            required
            maxLength={160}
          />
        </div>
      </div>

      <div className="contact-form__row">
        <div className="field">
          <label htmlFor="cf-email">
            {f.email} <span aria-hidden="true">*</span>
          </label>
          <input id="cf-email" name="email" type="email" autoComplete="email" required maxLength={160} />
        </div>
        <div className="field">
          <label htmlFor="cf-phone">{f.phone}</label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} />
        </div>
      </div>

      <div className="field">
        <label htmlFor="cf-role">
          {f.role} <span aria-hidden="true">*</span>
        </label>
        <select id="cf-role" name="role" required defaultValue="">
          <option value="" disabled>
            —
          </option>
          {f.roleOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="cf-message">
          {f.message} <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          required
          maxLength={4000}
          placeholder={f.messagePlaceholder}
        />
      </div>

      {/* Honeypot — hidden from users and assistive technology. */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="cf-website">Website</label>
        <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="field field--check">
        <input id="cf-consent" name="consent" type="checkbox" required />
        <label htmlFor="cf-consent">
          {f.consent}{" "}
          <a href={locale === "en" ? "/privacy" : "/fr/confidentialite"}>{f.privacy}</a>
        </label>
      </div>

      <div className="contact-form__foot">
        <button className="btn btn--primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? f.sending : f.submit}
          <IconArrow className="btn__icon" />
        </button>
        <p
          className={`form-status${status === "error" ? " is-error" : ""}${
            status === "success" ? " is-success" : ""
          }`}
          role="status"
          aria-live="polite"
        >
          {status === "success" ? f.success : null}
          {status === "error" ? (
            <>
              {f.error}{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </>
          ) : null}
        </p>
      </div>
    </form>
  );
}
