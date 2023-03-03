import React from 'react'
import { contrastColor } from 'contrast-color'
import { WithChildren } from '@/types/common'

interface SwatchProps extends WithChildren {
  label: string,
  color: string
}

const Swatch = ({ label, color, children }: SwatchProps) => {
  if (!color) return null

  return (
    <div
      className="swatch"
      aria-label={label}
      style={{
        '--swatchColor': color?.hex,
        '--swatchBorder': color?.hex
          ? contrastColor({ bgColor: color?.hex })
          : null,
      }}
    >
      {children}
    </div>
  )
}

export default Swatch