/* This example requires Tailwind CSS v2.0+ */
import { useMemo, useCallback } from 'react';

interface ButtonInterface {
  id: string;
  onClick: any;
  type?: string;
  children: any,
  disabled?: boolean,
  buttonType?: any
}

export default function Button({
  id,
  type,
  onClick,
  disabled = false,
  buttonType = "button",
  children,
}: ButtonInterface) {

  const buttonColors = useMemo(() => {
    if (disabled) {
      return 'bg-gray-300 hover:bg-gray-400 text-white'
    }
    switch (type) {
      case 'error':
        return 'bg-error hover:bg-errorHover text-white'
      case 'success':
        return 'bg-success hover:bg-successHover text-white'
      case 'secondary':
        return 'bg-secondary hover:bg-secondaryHover text-white'
      default:
        return 'bg-primary hover:bg-primaryHover text-white'
    }
  }, [type, disabled]);

  const handleClick = useCallback(() => {
    if (!disabled) {
      onClick();
    }
  }, [onClick, disabled]);

  return (
    <button
      id={id}
      data-testid={id}
      type={buttonType}
      onClick={handleClick}
      className={`inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded shadow-sm focus:outline-none ${buttonColors}`}
    >
      {children}
    </button >

  )
}
