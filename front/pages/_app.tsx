import "@common/styles/index.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { CustomHead } from "@components/others";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useEffect, useState } from "react";
import { loadLocalStorage } from "@common/utils/storage";
import { QUERY_OPTION } from "@common/api/const";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: { ...QUERY_OPTION.DEFAULT, ...QUERY_OPTION.CACHE },
      },
    })
  );
  const { pathname } = useRouter();

  useEffect(() => {
    loadLocalStorage();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <CustomHead path={pathname} />
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
