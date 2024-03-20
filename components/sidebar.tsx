import Image from "next/image";
import Link from "next/link";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

import { cn } from "@/lib/utils";

import { SidebarItem } from "./sidebar-item";

export const Sidebar = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "lg:w-[256px] h-full lg:fixed left-0 top-0 px-4 flex flex-col border-r-2",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/mascot.svg" alt="Mascot" width={40} height={40} />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Duo Lingo Clone
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Learn" iconSrc="/learn.svg" href="/learn" />
        <SidebarItem label="Leaderboard" iconSrc="/leaderboard.svg" href="/leaderboard" />
        <SidebarItem label="Quests" iconSrc="/quests.svg" href="/quests" />
        <SidebarItem label="Shop" iconSrc="/shop.svg" href="/shop" />
      </div>
      <div className="p-4">
        <ClerkLoading>
            <Loader className="w-5 h-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
            <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};
