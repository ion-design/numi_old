// Generated with Ion on 1/29/2024, 6:05:16 PM
// Figma Link: https://www.figma.com/file/7qUnuygDS8Mwshhy6TYXa5?node-id=3005:2239
import BottomCTA from "@/components/ion/BottomCTA";
import TextCard from "@/components/ion/TextCard";
import TopNavbar from "@/components/ion/TopNavbar";

function NumiPortfolioDetails() {
  return (
    <div className="relative flex h-full w-screen flex-col items-center bg-[#f8f8f8]">
      <TopNavbar showLeft={true} title="Relay Wireless" />
      <div className="flex w-full max-w-[1140px] flex-col items-start gap-8 px-4 pb-[140px] pt-8">
        <div className="flex w-full flex-col items-start gap-2">
          <img
            className="h-[269px] w-full rounded-lg object-cover"
            alt="Image"
            src="/images/numi-portfolio-details/image.png"
          />
          <div className="flex w-full items-start gap-2">
            <img
              className="h-24 w-[114px] rounded object-cover"
              alt="Image"
              src="/images/numi-portfolio-details/image-1.png"
            />
            <img
              className="h-24 w-[114px] rounded object-cover"
              alt="Image"
              src="/images/numi-portfolio-details/image-2.png"
            />
            <img
              className="h-24 w-[114px] rounded object-cover"
              alt="Image"
              src="/images/numi-portfolio-details/image-3.png"
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-6">
          <div className="h-[30px] w-[343px] text-3xl font-extrabold leading-none text-[#111928]">
            Design Subscription
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            <TextCard
              text="Relay offers a complete set of tools to manage
and operate large fleets of Helium hotspots. 
Designed specifically for large-scale fleets, 
Relay is developing a unique stack of 
deployment-first tools to help deployers
control significant numbers of devices in
their day-to-day operations.

Invite your hosts, maintainers, and other users to the platform. Relay provides a separate portal for hosts where they collaborate with organizations."
            />
          </div>
        </div>
      </div>
      <BottomCTA />
    </div>
  );
}
export default NumiPortfolioDetails;
