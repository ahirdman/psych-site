'use client';

import type React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kontakt</h2>
          <p className="text-xl text-muted-foreground">
            Välkommen att kontakta mig för att boka tid eller ställa frågor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6">Kontakta mig</h3>

              {isSubmitted ? (
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
                  <h4 className="text-xl font-medium mb-2">
                    Tack för ditt meddelande!
                  </h4>
                  <p className="text-muted-foreground">
                    Jag återkommer till dig så snart som möjligt.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Namn
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="Ditt namn"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      E-post
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="din.epost@exempel.se"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-1"
                    >
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="070 123 45 67"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      Meddelande
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      placeholder="Berätta kort om vad du söker hjälp med..."
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Skickar...' : 'Skicka meddelande'}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <MapPin className="size-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Adress</h4>
                    <p className="text-muted-foreground">Hantverkargatan 46</p>
                    <p className="text-muted-foreground">112 21 Stockholm</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Phone className="size-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Telefon</h4>
                    <p className="text-muted-foreground">070 710 0490</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Mail className="size-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">E-post</h4>
                    <p className="text-muted-foreground">
                      tomas.hultcrantz@icloud.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Clock className="size-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Priser</h4>
                    <p className="text-muted-foreground">
                      Psykoterapi: 1200kr / 50 min
                    </p>
                    <p className="text-muted-foreground">
                      Parterapi: 2100kr / 90 min
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
