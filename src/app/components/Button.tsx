import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import Arrow from './icons/Arrow';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  leftIcon?: React.ComponentType<{ className?: string }>;
  rightIcon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outlined' | 'gradient';
  className?: string;
  disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(({
  href,
  onClick,
  leftIcon: LeftIcon,
  rightIcon: RightIcon = Arrow,
  children,
  variant = 'primary',
  className = '',
  disabled = false,
}, ref) => {
  const baseStyles = "w-full font-otterco flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300 group";
  
  const variantStyles = {
    primary: "bg-black text-white hover:bg-gray-800 hover:shadow-elevation-2",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 hover:shadow-elevation-1",
    outlined: "border-2 border-black text-black hover:bg-black hover:text-white hover:shadow-elevation-2",
    gradient: "bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white hover:from-green-600 hover:via-emerald-600 hover:to-green-700 shadow-lg hover:shadow-2xl hover:shadow-green-500/50 hover:scale-[1.03] font-semibold",
  };

  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <div className="flex items-center gap-3">
        {LeftIcon && (
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <LeftIcon className="transition-transform" />
          </motion.div>
        )}
        <span className="font-medium">{children}</span>
      </div>
      {RightIcon && (
        <motion.div
          initial={{ x: 0 }}
          whileHover={{ x: 3 }}
          transition={{ duration: 0.2 }}
        >
          <RightIcon className="transition-transform group-hover:translate-x-1" />
        </motion.div>
      )}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.02, y: -2 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2, ease: "easeOut" }
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={styles}
        onClick={onClick}
        ref={ref as React.Ref<HTMLAnchorElement>}
        target='_blank'
        {...motionProps}
        {...(disabled && { 'aria-disabled': true, onClick: (e) => e.preventDefault() })}
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
      {...motionProps}
    >
      {content}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;
