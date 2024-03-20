import { MobileSidebar } from "@/components/mobile-sidebar";

export const MobileHeader = () => {
  return (
    <nav className="w-full h-[50px] fixed top-0 px-6 z-50 lg:hidden flex items-center bg-green-500 border-b">
      <MobileSidebar />
    </nav>
  );
};
