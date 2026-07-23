export function Container({
  children,
  maxWidth = "max-w-7xl",
}: {
  children: React.ReactNode;
  maxWidth?: string;
}) {
  return (
    <div className={`mx-auto w-full ${maxWidth} px-6`}>{children}</div>
  );
}