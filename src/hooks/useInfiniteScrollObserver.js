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
    if (observer.current) {
      observer.current.disconnect()
    }
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && conditions) callback()
    }, options)

    observer.current.observe(ref.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies])
}
