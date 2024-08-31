import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CIRCLE_COUNT = 40
const OUTER_RADIUS = 56
const INNER_RADIUS = 46
const CIRCLE_RADIUS = 3 // Radius of small circles
const PADDING = 10 // Padding to prevent circles from being cut off
const SVG_SIZE = OUTER_RADIUS * 2 + PADDING * 2 // Adjusted SVG size
const CIRCLE_COLOR = "#f97316" 

export default function AnimCircle() {
  const [circles, setCircles] = useState<{ cx: number; cy: number }[]>([])

  useEffect(() => {
    const newCircles = []
    for (let i = 0; i < CIRCLE_COUNT; i++) {
      const angle = (i / CIRCLE_COUNT) * 2 * Math.PI
      const cx = OUTER_RADIUS * Math.cos(angle) + OUTER_RADIUS + PADDING
      const cy = OUTER_RADIUS * Math.sin(angle) + OUTER_RADIUS + PADDING
      newCircles.push({ cx, cy })
    }
    setCircles(newCircles)
  }, [])

  return (
    <div className="flex items-center justify-center">
      <div className="relative" style={{ width: SVG_SIZE, height: SVG_SIZE }}>
        <motion.svg
          width={SVG_SIZE}
          height={SVG_SIZE}
          viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {circles.map((circle, index) => (
            <motion.circle
              key={index}
              cx={circle.cx}
              cy={circle.cy}
              r={CIRCLE_RADIUS}
              fill={CIRCLE_COLOR}
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 1, 0] }}
              transition={{
                duration: 4,
                times: [0, 0.2, 0.8, 1],
                delay: index * 0.05,
                repeat: Infinity,
              }}
            />
          ))}
        </motion.svg>
        <motion.svg
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          width={SVG_SIZE}
          height={SVG_SIZE}
          viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
        >
          <motion.circle
            cx={SVG_SIZE / 2} // Center the inner circle
            cy={SVG_SIZE / 2}
            r="0"
            fill={CIRCLE_COLOR}
            initial={{ r: 0 }}
            animate={{ r: INNER_RADIUS }}
            transition={{
              duration: 2,
              delay: 1,
              ease: "easeOut",
            }}
          />
        </motion.svg>
      </div>
    </div>
  )
}
