import Heading from "@/components/features/marketing/heading";
import Heros from "@/components/features/marketing/heros";
import Footer from "@/components/features/marketing/footer";

export default function MarketingPage() {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
        <Heros />
      </div>
      <Footer />
    </div>
  );
}
