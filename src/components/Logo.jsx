import Image from 'next/image'

import swipooLogo from '@/images/swipoo-logo-blue.png'
import swipooIcon from '@/images/swipoo-icon-blue.png'

export function Logomark({ className }) {
  return (
    <div className={className}>
      <Image layout="responsive" src={swipooIcon} alt="Logo" />
    </div>
  )
}

export function Logo({ className }) {
  return (
    <div className={className}>
      <Image layout="responsive" src={swipooLogo} alt="Logo" />
    </div>
  )
}
