import { whatsappUrl } from "@/lib/site";

export type LeadType = "pre-order" | "appointment" | "test-drive" | "contact";

export type LeadPayload = {
  type: LeadType;
  message: string;
  fields: Record<string, string>;
};

export async function submitLead(payload: LeadPayload) {
  const formspree = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  if (formspree) {
    try {
      await fetch(`https://formspree.io/f/${formspree}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...payload.fields,
          type: payload.type,
          message: payload.message,
        }),
      });
    } catch {
      // WhatsApp is the guaranteed path if email is not configured.
    }
  }

  window.open(whatsappUrl(payload.message), "_blank", "noopener,noreferrer");
}

export function formValue(data: FormData, key: string) {
  return String(data.get(key) ?? "").trim();
}
