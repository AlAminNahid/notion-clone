"use client";

import Navigations from "@/components/features/main/navigations";
import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";

export default function MainLayout({ children }: LayoutProps<"/">) {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size={"lg"} />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className="h-full flex dark:bg-[#1F1F1F]">
      <Navigations />
      <main className="flex-1 h-full overflow-y-auto">{children}</main>
    </div>
  );
}
