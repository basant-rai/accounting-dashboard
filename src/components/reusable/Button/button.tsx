'use client'

import classNames from 'classnames'
import React, { FunctionComponent, PropsWithChildren, useCallback } from 'react'

interface Props {
  type?: 'primary' | 'optional' | 'white'
  rounded?: 'small' | 'medium' | 'full',
  border?: 'primary' | 'none',
  htmlType: 'button' | 'submit' | 'reset'
  handleClick?: () => void
}

export const Button: FunctionComponent<PropsWithChildren<Props>> = ({ children, type, rounded, border, handleClick, htmlType }) => {

  const buttonType = type ?? "primary";
  const roundValue = rounded ?? "small";
  const borderType = border ?? "none"

  const handleSubmit = useCallback(() => {
    if (handleClick) {
      handleClick();
    }
  }, [handleClick])

  return (
    <div>
      <button
        type={htmlType}

        // className={`${btnColor} inline-block px-8 py-2 m-0 text-xs font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer ease-soft-in leading-pro tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85`}
        className={classNames(
          'px-8 py-2 text-sm w-full sm:w-auto',
          {
            "rounded-md": roundValue === "small",
            "rounded-2xl": roundValue === "medium",
            "rounded-full": roundValue === "full",
          },
          {
            "border border-primary-500": borderType === "primary"
          },
          {
            "bg-primary-500 text-white": buttonType === "primary",
            // "bg-transparent": buttonType === "secondary",
            "bg-white ring-1 ring-primary-500": buttonType === "white",
            "bg-white": buttonType === "optional",

          }
        )}
        onClick={handleSubmit}
      >
        {children}
      </button>
    </div>
  )
}
