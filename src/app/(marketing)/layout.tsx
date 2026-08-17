import Navbar from "@/components/features/marketing/navbar";

export default function MarketingLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="h-full dark:bg-[#1F1F1F]">
      <Navbar />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
}
