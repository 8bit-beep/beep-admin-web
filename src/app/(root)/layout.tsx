import SearchBar from "@/features/search/ui/SearchBar";
import AuthProvider from "@/shared/provider/AuthProvider";
import Sidebar from "@/widgets/sidebar/ui/Sidebar";
import { PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full h-screen flex items-start">
      <AuthProvider />
      <Sidebar />
      <div className="flex-1 px-13 pt-13 flex flex-col gap-4.5">
        <SearchBar />
        <main className="w-full h-[calc(100vh-114px)]">{children}</main>
      </div>
    </div>
  );
}
