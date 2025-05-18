'use client';

import Script from 'next/script';

export function StructuredData() {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      strategy="afterInteractive"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://thielhultcrantz.com',
          name: 'Tomas Thiel Hultcrantz Psykoterapi',
          image: 'https://thielhultcrantz.com/images/therapist.jpg',
          description:
            'Professionell psykoterapi och psykologisk behandling i Stockholm. Specialiserad på individ- och parterapi.',
          priceRange: '$$',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Hantverkargatan 46',
            addressLocality: 'Stockholm',
            postalCode: '112 21',
            addressRegion: 'Stockholm',
            addressCountry: 'SE',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 59.3293,
            longitude: 18.0686,
          },
          url: 'https://thielhultcrantz.com',
          telephone: '+46707100490',
          email: 'tomas.hultcrantz@icloud.com',
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
              ],
              opens: '09:00',
              closes: '17:00',
            },
          ],
          sameAs: [],
        }),
      }}
    />
  );
}
