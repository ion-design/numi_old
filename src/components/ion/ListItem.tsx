// Generated with Ion on 1/29/2024, 4:54:38 PM
// Figma Link: https://www.figma.com/file/7qUnuygDS8Mwshhy6TYXa5?node-id=3005:1893
type ListItemProps = {
  text?: string;
};

function ListItem({
  text = "Unlimited design, done one at a time",
}: ListItemProps) {
  return (
    <div className="flex h-fit w-full items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 text-sm font-medium leading-5 text-gray-500">
      <img
        src="/images/numi-portfolio/Vector.svg"
        alt="Vector"
        className="h-4"
      />
      <div>{text}</div>
    </div>
  );
}
export default ListItem;
