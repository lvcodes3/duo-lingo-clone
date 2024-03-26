import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Header = ({ title }: { title: string }) => {
  return (
    <div className="sticky top-0 bg-white pb-3 lg:pt-[28px] lg:mt-[-28px] flex justify-between items-center border-b-2 mb-5 text-neutral-400 lg:z-50">
      <Link href="/courses">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="w-5 h-5 stroke-2 text-neutral-400" />
        </Button>
      </Link>
      <h1 className="font-bold text-lg">{title}</h1>
      <div />
    </div>
  );
};
