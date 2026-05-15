import { useState, type FormEvent } from "react";
import { toast } from "sonner";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Placeholder: not wired to a backend yet.
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks — I'll be in touch within one business day.");
    }, 600);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <Field label="Phone" name="phone" type="tel" />
      <div>
        <label className="text-xs uppercase tracking-widest text-muted font-semibold">
          I'm interested in
        </label>
        <select
          name="interest"
          className="mt-2 w-full bg-card border border-border rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          defaultValue="buying"
        >
          <option value="buying">Buying a home</option>
          <option value="selling">Selling a home</option>
          <option value="both">Both — let's talk</option>
          <option value="market">Just curious about the market</option>
        </select>
      </div>
      <div>
        <label className="text-xs uppercase tracking-widest text-muted font-semibold">Message</label>
        <textarea
          name="message"
          rows={5}
          className="mt-2 w-full bg-card border border-border rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="Tell me a little about what you're looking for…"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="bg-foreground text-background px-8 py-4 rounded-full font-semibold disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

function Field({
  label, name, type = "text", required,
}: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted font-semibold">
        {label}{required && <span className="text-primary"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full bg-card border border-border rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
