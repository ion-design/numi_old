// Generated with Ion on 1/29/2024, 4:54:38 PM
// Figma Link: https://www.figma.com/file/7qUnuygDS8Mwshhy6TYXa5?node-id=3003:1547
import TopNavbar from "@/components/ion/TopNavbar";
import BottomCTA from "@/components/ion/BottomCTA";
import ListItem from "@/components/ion/ListItem";
import ProfileCard from "@/components/ion/ProfileCard";
import TestimonialCard from "@/components/ion/TestimonialCard";

function NumiPortfolio() {
  return (
    <div className="relative flex h-full w-screen flex-col items-center bg-[#f8f8f8]">
      <TopNavbar showLogo={true} />
      <div className="flex w-full max-w-[1140px] flex-col items-start gap-8 px-4 pb-[140px] pt-8 overflow-x-hidden">
        <div className="flex w-full flex-col items-start gap-6">
          <div className="text-3xl font-extrabold leading-none text-[#111928]">
            Design Subscription
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            <ListItem text="Unlimited design, done one at a time" />
            <ListItem text="1:1 communication over Slack and video" />
            <ListItem text="Startup minded designer and leader" />
            <ListItem text="Two office hours a month, as requested" />
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-6">
          <div className="text-3xl font-extrabold leading-none text-[#111928]">
            Their Work
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <ProfileCard
              src="/images/numi-portfolio/card-header.svg"
              title="Lifetime Project"
            />
            <ProfileCard
              src="/images/numi-portfolio/card-header-1.svg"
              title="Reach"
            />
            <ProfileCard
              src="/images/numi-portfolio/card-header-2.svg"
              title="StreamLabs"
            />
            <ProfileCard
              src="/images/numi-portfolio/card-header-3.svg"
              title="Telegram"
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-6">
          <div className="text-3xl font-extrabold leading-none text-[#111928]">
            Their Work
          </div>
          <div className="flex items-start w-screen overflow-x-auto gap-4 pr-8">
            <TestimonialCard
              title="Hannah from NUMI was great."
              description="She was an excellent generalist who was able to cover so many of our bases, and became instrumental in measuring and optimizing several marketing KPIs. I would definitely recommend NUMI to other startups"
              name="Danny Grannick"
              role="CEO, Bristle Health"
            />
            <TestimonialCard
              title="Hannah from NUMI was great."
              description="She was an excellent generalist who was able to cover so many of our bases, and became instrumental in measuring and optimizing several marketing KPIs. I would definitely recommend NUMI to other startups"
              name="Danny Grannick"
              role="CEO, Bristle Health"
            />
            <TestimonialCard
              title="Hannah from NUMI was great."
              description="She was an excellent generalist who was able to cover so many of our bases, and became instrumental in measuring and optimizing several marketing KPIs. I would definitely recommend NUMI to other startups"
              name="Danny Grannick"
              role="CEO, Bristle Health"
            />
          </div>
        </div>
      </div>
      <BottomCTA />
    </div>
  );
}
export default NumiPortfolio;
