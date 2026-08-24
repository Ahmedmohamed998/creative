import { cn } from "@/lib/cn";

export function SectionHeading({
  title,
  body,
  className,
  titleClassName,
  bodyClassName,
  gap = 16,
}: {
  title: React.ReactNode;
  body?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  bodyClassName?: string;
  gap?: number;
}) {
  return (
    <div
      className={cn("flex w-full flex-col items-center text-center text-black", className)}
      style={{ gap }}
    >
      <h2
        className={cn(
          "w-full font-semibold leading-[normal]",
          "text-[30px] sm:text-[36px] lg:text-[48px]",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {body && (
        <p
          className={cn(
            "w-full font-normal leading-[normal]",
            "text-[16px] sm:text-[19px] lg:text-[24px]",
            bodyClassName,
          )}
        >
          {body}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
