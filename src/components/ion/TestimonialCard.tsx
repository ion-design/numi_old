// Generated with Ion on 1/29/2024, 4:54:38 PM
// Figma Link: https://www.figma.com/file/7qUnuygDS8Mwshhy6TYXa5?node-id=3005:1979
type TestimonialCardProps = {
  role?: string;
  name?: string;
  description?: string;
  title?: string;
};

function TestimonialCard({
  role = "CEO, Bristle Health",
  name = "Danny Grannick",
  description = "She was an excellent generalist who was able to cover so many of our bases, and became instrumental in measuring and optimizing several marketing KPIs. I would definitely recommend NUMI to other startups",
  title = "Hannah from NUMI was great.",
}: TestimonialCardProps) {
  return (
    <div className="flex h-fit w-[320px] flex-shrink-0 flex-col items-start justify-center gap-6 rounded-lg border border-gray-200 bg-white p-6">
      <div className="flex w-full flex-col items-start gap-3">
        <img
          className="h-[31px] w-[104px] object-cover"
          alt="Bristle Logo"
          src="/images/numi-portfolio/bristle-logo.png"
        />
        <div className="text-xl font-bold leading-6 text-[#111928]">
          {title}
        </div>
        <div className="text-base text-gray-500">{description}</div>
      </div>
      <div className="flex items-start gap-4">
        <img
          className="h-12 w-12 rounded-full object-cover"
          alt="Person Image 01"
          src="/images/numi-portfolio/person-image-01.png"
        />
        <div className="flex flex-col items-start gap-1">
          <div className="text-lg font-bold leading-6 text-[#111928]">
            {name}
          </div>
          <div className="text-sm leading-5 text-gray-500">{role}</div>
        </div>
      </div>
    </div>
  );
}
export default TestimonialCard;
