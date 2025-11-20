import { forwardRef } from 'react';

interface ArrowProps {
  className?: string;
}

const Arrow = forwardRef<SVGSVGElement, ArrowProps>(({ className = "w-5 h-5" }, ref) => {
  return (
    <svg
      ref={ref}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
        clipRule="evenodd"
      />
    </svg>

  );
});

Arrow.displayName = 'Arrow';

export default Arrow;
