import Link from 'next/link';
import { Button } from './ui/button';

const bookLink =
  'https://www.bokadirekt.se/places/tomas-thiel-hultcrantz-psykoterapi-130246';

export function BookButton(props: React.ComponentProps<typeof Button>) {
  return (
    <Button asChild {...props}>
      <Link
        href={bookLink}
        className="text-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        Boka tid
      </Link>
    </Button>
  );
}
