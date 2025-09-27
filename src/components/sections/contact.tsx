"use client";

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from '@/app/actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const initialState = {
  message: '',
  success: false,
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export function Contact() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Success!",
        description: state.message,
      });
    } else if (state.message && state.errors && Object.keys(state.errors).length > 0) {
        const errorMessages = Object.values(state.errors).flat().join(' ');
        toast({
            variant: "destructive",
            title: "Error",
            description: errorMessages || "An error occurred.",
        });
    }
  }, [state, toast]);

  return (
    <section id="contact" className="bg-secondary">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Get In Touch</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
           Have a project in mind or just want to say hello? I'd love to hear from you. My email is <a href="mailto:parmarkalpesh1586@gmail.com" className="text-primary underline">parmarkalpesh1586@gmail.com</a> and phone is +91 7016223029.
          </p>
        </div>
        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
            <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your Name" />
                {state.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="Your Email" />
                {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Your Message" />
                {state.errors?.message && <p className="text-sm font-medium text-destructive">{state.errors.message}</p>}
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
