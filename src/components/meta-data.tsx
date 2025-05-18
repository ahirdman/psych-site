import { Metadata } from 'next';

// Base metadata for all pages
export const baseMetadata: Metadata = {
  metadataBase: new URL('https://thielhultcrantz.com'),
  title: {
    default: 'Tomas Thiel Hultcrantz - Psykoterapi Stockholm',
    template: '%s | Tomas Thiel Hultcrantz - Psykoterapi Stockholm',
  },
  description:
    'Professionell psykoterapi och psykologisk behandling i Stockholm. Specialiserad på individ- och parterapi.',
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    siteName: 'Tomas Thiel Hultcrantz - Psykoterapi',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@thomashultcrantz',
  },
};

// Section-specific metadata generators
export function getAboutMetadata(): Metadata {
  return {
    title: 'Om psykoterapi',
    description:
      'Lär dig mer om psykoterapi och hur det kan hjälpa dig. Affektfokuserad terapi, AEDP, EFT och KBT förklaras.',
    openGraph: {
      title: 'Om psykoterapi | Tomas Thiel Hultcrantz',
      description:
        'Olika terapeutiska metoder som kan hjälpa vid oro, ångest, relationssvårigheter, trauma, sorg och självkritik.',
      url: 'https://thielhultcrantz.com/#about',
    },
  };
}

export function getMethodsMetadata(): Metadata {
  return {
    title: 'Terapeutiska metoder',
    description:
      'Evidensbaserade metoder för psykoterapi: AFT, AEDP, EFT och KBT. Anpassad behandling efter dina behov och mål.',
    openGraph: {
      title: 'Terapeutiska metoder | Tomas Thiel Hultcrantz',
      description:
        'Flera evidensbaserade metoder för psykoterapi: Affektfokuserad terapi (AFT), AEDP, Emotionellt fokuserad terapi (EFT) och KBT.',
      url: 'https://thielhultcrantz.com/#methods',
    },
  };
}

export function getSupervisionMetadata(): Metadata {
  return {
    title: 'Handledning för terapeuter',
    description:
      'Professionell handledning för psykoterapeuter och andra yrkesverksamma inom vård och behandling.',
    openGraph: {
      title: 'Handledning för terapeuter | Tomas Thiel Hultcrantz',
      description:
        'Individuell handledning och grupphandledning för yrkesverksamma inom psykoterapi och vård.',
      url: 'https://thielhultcrantz.com/#supervision',
    },
  };
}

export function getCoupleTherapyMetadata(): Metadata {
  return {
    title: 'Parterapi i Stockholm',
    description:
      'Professionell parterapi i Stockholm. Kommunikationsproblem, tillit, lyhördhet och engagemang i relationen.',
    openGraph: {
      title: 'Parterapi i Stockholm | Tomas Thiel Hultcrantz',
      description:
        'För par som kämpar med kommunikation, tillit eller har tappat samhörigheten. Parterapi i Stockholm.',
      url: 'https://thielhultcrantz.com/#couple-therapy',
    },
  };
}

export function getContactMetadata(): Metadata {
  return {
    title: 'Kontakta psykoterapeut i Stockholm',
    description:
      'Kontakta legitimerad psykoterapeut Tomas Thiel Hultcrantz i Stockholm för att boka tid eller ställa frågor.',
    openGraph: {
      title: 'Kontakta psykoterapeut i Stockholm | Tomas Thiel Hultcrantz',
      description:
        'Kontakta Tomas Thiel Hultcrantz för psykoterapi i centrala Stockholm. Boka tid via telefon eller kontaktformulär.',
      url: 'https://thielhultcrantz.com/#contact',
    },
  };
}
