import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main className="h-full lg:pl-[256px] pt-[50px] lg:pt-0">
        <div className="max-w-[1056px] h-full mx-auto pt-6">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
