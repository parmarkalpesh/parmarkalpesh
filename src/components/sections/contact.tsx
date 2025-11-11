"use client";

import React, { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

type Errors = {
  name?: string;
  email?: string;
  number?: string;
  message?: string;
  [key: string]: string | undefined;
};

export function Contact() {
  const { toast } = useToast();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState<boolean>(false);

  useEffect(() => {
    // If there are errors show a destructive toast (optional)
    if (Object.keys(errors).length > 0) {
      const msg = Object.values(errors).join(" ");
      toast({
        variant: "destructive",
        title: "Please fix the form",
        description: msg,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  const validate = (): Errors => {
    const errs: Errors = {};
    if (!name.trim()) errs.name = "Name is required.";
    if (!email.trim()) errs.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) errs.email = "Invalid email address.";
    if (!number.trim()) errs.number = "Phone number is required.";
    else if (!/^\+?\d{7,15}$/.test(number.replace(/\s+/g, "")))
      errs.number = "Invalid phone number (digits only, include country code if needed).";
    if (!message.trim()) errs.message = "Message is required.";
    return errs;
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrors({});
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSubmitting(true);

    try {
      // Build a friendly WhatsApp message
      const whatsappNumber = "917016223029"; // target (without +)
      const textLines = [
        `Hello! I got your contact from your website.`,
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Phone: ${number.trim()}`,
        `Message: ${message.trim()}`,
      ];
      const text = encodeURIComponent(textLines.join("\n"));
      const waLink = `https://wa.me/${whatsappNumber}?text=${text}`;

      // Open in new tab/window (WhatsApp Web or WhatsApp app on mobile)
      window.open(waLink, "_blank", "noopener,noreferrer");

      toast({
        title: "Opening WhatsApp...",
        description: "A new tab will open to send your message via WhatsApp.",
      });

      // Optionally clear the form
      setName("");
      setEmail("");
      setNumber("");
      setMessage("");
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Failed to open WhatsApp",
        description: "Please try again or contact via email/phone.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-secondary py-16">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
            Get In Touch
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Have a project in mind or just want to say hello? I'd love to hear from you.
            My email is <a href="mailto:parmarkalpesh1586@gmail.com" className="text-primary underline">parmarkalpesh1586@gmail.com</a> and phone is +91 7016223029.
          </p>
        </div>

        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
            <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p className="text-sm font-medium text-destructive">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="text-sm font-medium text-destructive">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="number">Phone Number</Label>
                <Input
                  id="number"
                  name="number"
                  placeholder="+91 70162 23029"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
                {errors.number && <p className="text-sm font-medium text-destructive">{errors.number}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Write your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                />
                {errors.message && <p className="text-sm font-medium text-destructive">{errors.message}</p>}
              </div>

              <div className="flex justify-end">
                <Button type="submit" disabled={submitting}>
                  {submitting ? "Opening WhatsApp..." : "Send"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
