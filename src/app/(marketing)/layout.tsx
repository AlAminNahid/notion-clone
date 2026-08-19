import Navbar from "@/components/features/marketing/navbar";

export default function MarketingLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
}
