import { useEffect, useRef } from 'react'

export function useInfiniteScrollObserver(
  callback = Function.prototype,
  ref,
  conditions = Boolean,
  dependencies = [],
  options = {},
) {
  const observer = useRef(null)

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && conditions) callback()
    }, options)

    observer.current.observe(ref.current)
    return () => observer.current.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies])
}
