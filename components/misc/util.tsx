// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
import { useRouter } from 'next/router';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const getSlug = () => {
  const router = useRouter();
  return router.pathname;
  // return el
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

export default getSlug;
