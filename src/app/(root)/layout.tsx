import SearchBar from "@/features/search/ui/SearchBar";
import Sidebar from "@/widgets/sidebar/ui/Sidebar";
import { PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full min-h-screen flex items-start">
      <Sidebar />
      <main className="flex-1 px-13 pt-13 flex flex-col gap-4.5">
        <SearchBar />
        {children}
      </main>
    </div>
  );
}
