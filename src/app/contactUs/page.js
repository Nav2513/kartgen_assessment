'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10 space-y-8">
      <h1 className="text-4xl font-bold text-center">Contact Us</h1>
      <p className="text-gray-600 text-center">
        Have a question, feedback, or just want to say hello? We'd love to hear from you.
      </p>

      <Card>
        <CardContent className="p-6 space-y-4">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input type="text" placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
            </div>
            <Input type="text" placeholder="Subject" required />
            <Textarea placeholder="Your Message..." rows={5} required />

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="text-center text-sm text-gray-500">
        Or reach us at: <a href="mailto:support@kartgen.com" className="underline">support@kartgen.com</a>
      </div>
    </section>
  );
}
