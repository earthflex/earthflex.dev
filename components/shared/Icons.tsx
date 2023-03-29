import { IconProps } from '@/types'

export const DialogCardArrowIcon = ({ height = 24, width = 24, ...props }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M7 17L17 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 7H17V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const TooltipArrowIcon = ({ height = 24, width = 24, ...props }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 11.5L21.5 1H2L12 11.5Z" fill="#333334" />
      <path d="M23 1H21.7059L12.7498 11.1502C12.3517 11.6014 11.6483 11.6014 11.2502 11.1502L2.29412 1H1" stroke="#404043" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 0H0V2H24V0Z" fill="#333334" />
    </svg>
  )
}
export const HoverCardArrowIcon = ({ height = 24, width = 24, ...props }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 11.5L21.5 1H2L12 11.5Z" fill="#333334" />
      <path d="M23 1H21.7059L12.7498 11.1502C12.3517 11.6014 11.6483 11.6014 11.2502 11.1502L2.29412 1H1" stroke="#404043" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 0H0V2H24V0Z" fill="#333334" />
    </svg>
  )
}

