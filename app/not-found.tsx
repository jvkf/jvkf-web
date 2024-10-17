'use client';

import Error from 'next/error';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(timer);
      router.replace('/en');
      return;
    }

    return () => clearInterval(timer);
  }, [countdown, router]);

  return (
    <html lang="en">
      <body>
        <Error
          statusCode={404}
          title={`Oops. This path doesn't exists / este caminho não existe. Redirecting to home page in ${countdown}`}
        />
      </body>
    </html>
  );
}
