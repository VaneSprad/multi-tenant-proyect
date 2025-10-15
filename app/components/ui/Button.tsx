import React from 'react'

/**
 * A button component with two variants: solid and outline.
 * @param {string} variant - The variant of the button. Can be either "solid" or "outline".
 * @param {string} [className] - Additional CSS classes to apply to the button.
 * @param {React.ReactNode} children - The content of the button.
 * @returns A button element with the specified variant and additional CSS classes.
 */
const Button = ({variant, className, children}: {variant: string, className?: string, children: React.ReactNode}) => {
  const solid = "bg-blue-400 hover:bg-blue-700"
  const outline = "border border-white hover:bg-white"
console.log({variant, className, variante: variant === "solid" ? solid : outline});
  return (
    <button 
      className={`py-2 px-4 rounded font-bold text-white ${className} ${variant === "solid" ? solid : outline}`} 
    >
      {children}
    </button>
  )
}

export default Button