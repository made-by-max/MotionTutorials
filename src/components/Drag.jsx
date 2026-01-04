import { frame, motion, useSpring } from "motion/react"
import { useRef, useEffect } from "react"

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 }

function useFollowPointer(ref) {
  const x = useSpring(0, spring)
  const y = useSpring(0, spring)

  useEffect(() => {
    if (!ref.current) return

    const handlePointerMove = ({ clientX, clientY }) => {
        const element = ref.current

        frame.read(() => {
            x.set(clientX - element.offsetLeft - element.offsetWidth / 2)
            y.set(clientY - element.offsetTop - element.offsetHeight / 2)
        })
    }

    window.addEventListener("pointermove", handlePointerMove)

    return () => window.removeEventListener("pointermove", handlePointerMove)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { x, y }
}

export default function Drag() {
  const ref = useRef(null)
  const { x, y } = useFollowPointer(ref)

  return <motion.div ref={ref} style={{ ...ball, x, y }} />
}

const ball = {
    width: 100,
    height: 100,
    backgroundColor: "#8df0cc",
    borderRadius: "50%",
}