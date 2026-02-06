import SearchBar from "@/features/search/ui/SearchBar";
import Header from "@/widgets/header/ui/Header";
import Sidebar from "@/widgets/sidebar/ui/Sidebar";
import Tabbar from "@/widgets/tabbar/ui/Tabbar";
import { PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full h-svh flex items-start flex-col xl:flex-row overflow-hidden">
      <Sidebar />
      <Header />
      <main className="w-full flex-1 h-[calc(100%-147px)] xl:h-full px-4 xl:px-[70px] xl:pt-13 pb-1 xl:pb-5 flex flex-col gap-4.5 overflow-y-auto">
        <SearchBar />
        {children}
      </main>
      <Tabbar />
    </div>
  );
}