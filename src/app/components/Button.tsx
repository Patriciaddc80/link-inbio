import { forwardRef } from "react";
import { motion } from "framer-motion";
import Arrow from "./icons/Arrow";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  leftIcon?: React.ComponentType<{ className?: string }>;
  rightIcon?: React.ComponentType<{ className?: string }>;
  title?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outlined" | "gradient";
  className?: string;
  disabled?: boolean;
  target?: string;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      href,
      onClick,
      leftIcon: LeftIcon,
      rightIcon: RightIcon = Arrow,
      children,
      variant = "primary",
      className = "",
      disabled = false,
      target,
    },
    ref
  ) => {
    const baseStyles =
      "w-full font-otterco relative px-6 py-4 rounded-2xl transition-all duration-300 group text-center flex items-center justify-center";

    const variantStyles = {
      primary: "bg-black text-white hover:bg-gray-800 hover:shadow-elevation-2",
      secondary:
        "bg-gray-100 text-gray-900 hover:bg-gray-200 hover:shadow-elevation-1",
      outlined:
        "border-2 border-black text-black hover:bg-black hover:text-white hover:shadow-elevation-2",
      gradient:
        "bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white hover:from-green-600 hover:via-emerald-600 hover:to-green-700 shadow-lg hover:shadow-2xl hover:shadow-green-500/50 hover:scale-[1.03] font-semibold",
    };

    const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

    const content = (
      <>
        {LeftIcon && (
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-y-0 left-4 flex items-center pointer-events-none z-10"
          >
            <LeftIcon className="transition-transform w-5 h-5" />
          </motion.div>
        )}

        <span className="font-medium block">{children}</span>

        {RightIcon && (
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-y-0 right-4 flex items-center pointer-events-none z-10"
          >
            <RightIcon className="transition-transform w-5 h-5" />
          </motion.div>
        )}
      </>
    );

    const motionProps = {
      whileHover: { scale: 1.02, y: -2 },
      whileTap: { scale: 0.98 },
      transition: { duration: 0.2, ease: "easeOut" },
    };

    if (href) {
      const linkTarget = target ?? "_blank";
      const rel = linkTarget === "_blank" ? "noopener noreferrer" : undefined;
      return (
        <motion.a
          href={href}
          className={styles}
          onClick={onClick}
          ref={ref as React.Ref<HTMLAnchorElement>}
          target={linkTarget}
          rel={rel}
          title={title}
          {...motionProps}
          {...(disabled && {
            "aria-disabled": true,
            onClick: (e) => e.preventDefault(),
          })}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        type="button"
        onClick={onClick}
        className={styles}
        disabled={disabled}
        ref={ref as React.Ref<HTMLButtonElement>}
        title={title}
        {...motionProps}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
