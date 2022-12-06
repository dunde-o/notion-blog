import '@common/styles/index.scss';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { CustomHead } from '@components/others';

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  return (
    <>
      <CustomHead path={pathname} />
      <Component {...pageProps} />
    </>
  );
}
