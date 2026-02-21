import type { Metadata } from "next";
import "./globals.css";
import { BdsRegistry, ModalProvider } from "@bds-web/ui";
import { LoadingBar } from "@cher1shrxd/loading";
import { colors } from "@bds-web/colors";
import QueryProvider from "@/shared/provider/QueryProvider";
import { ToastContainer } from "@cher1shrxd/toast";

export const metadata: Metadata = {
  title: "삑 어드민",
  description: "삑 관리를 위한 어드민 페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased bg-greyscale-10">
        <LoadingBar color={colors.blue.light} />
        <ToastContainer />
        <BdsRegistry>
          <QueryProvider>
            <ModalProvider />
            <div id="__next" className="xl:pb-[56px]">
              <main className="xl:pb-[90px] box-border">{children}</main>
            </div>
          </QueryProvider>
        </BdsRegistry>
      </body>
    </html>
  );
}
