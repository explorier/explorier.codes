import { useRef, forwardRef, ReactNode } from 'react'
import { mergeRefs } from 'react-merge-refs'

interface Props {
    children?: ReactNode;
}

export type Ref = HTMLDivElement;

const Layout = forwardRef<Ref, Props>(({ children, ...props }, ref) => {
  const localRef = useRef()
  return (
    <div
      ref={mergeRefs([ref, localRef])}
      className='absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden dom bg-zinc-900 text-gray-50'>
      {children}
    </div>
  )
})

Layout.displayName = 'Layout'

export default Layout
