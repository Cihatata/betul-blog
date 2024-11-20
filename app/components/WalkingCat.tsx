'use client'
import React, { useEffect, useState } from 'react'

export default function WalkingCat() {
  const [position, setPosition] = useState(-100)
  const [isJumping, setIsJumping] = useState(false)

  useEffect(() => {
    const walkInterval = setInterval(() => {
      setPosition(prev => {
        if (prev > window.innerWidth) return -100
        return prev + 1
      })
    }, 20)

    return () => clearInterval(walkInterval)
  }, [])

  return (
    <div className="hidden md:block relative h-20 mb-2 overflow-hidden">
      <div 
        className="absolute"
        style={{ transform: `translateX(${position}px)` }}
        onMouseEnter={() => setIsJumping(true)}
        onMouseLeave={() => setIsJumping(false)}
      >
 <svg width="60" height="48" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg"         className={`absolute transition-all duration-300 ${isJumping ? '-translate-y-3' : ''}`}>
      <path d="M50 70C66.5685 70 80 61.0457 80 50C80 38.9543 66.5685 30 50 30C33.4315 30 20 38.9543 20 50C20 61.0457 33.4315 70 50 70Z" fill="#FF6B35" className="transition-all duration-300"/>
      <path d="M75 60C83.2843 60 90 53.2843 90 45C90 36.7157 83.2843 30 75 30C66.7157 30 60 36.7157 60 45C60 53.2843 66.7157 60 75 60Z" fill="#FF6B35"/>
      <path d="M85 50L70 45" stroke="black"/>
      <path d="M85 50H70" stroke="black"/>
      <path d="M85 50L70 55" stroke="black"/>
      <path d="M70 35L75 25L80 35H70Z" fill="#FF6B35"/>
      <path d="M80 35L85 25L90 35H80Z" fill="#FF6B35"/>
      <path d="M80 44C81.1046 44 82 43.1046 82 42C82 40.8954 81.1046 40 80 40C78.8954 40 78 40.8954 78 42C78 43.1046 78.8954 44 80 44Z" fill="black"/>
      <path d="M20 45C13.3333 38.3333 11.6667 31.6667 15 25" stroke="#FF6B35" className="animate-[tailWag_2s_ease-in-out_infinite]" strokeWidth="5"/>
      <path d="M35 72C38.866 72 42 68.866 42 65C42 61.134 38.866 58 35 58C31.134 58 28 61.134 28 65C28 68.866 31.134 72 35 72Z" fill="#FF6B35"/>
      <path d="M65 72C68.866 72 72 68.866 72 65C72 61.134 68.866 58 65 58C61.134 58 58 61.134 58 65C58 68.866 61.134 72 65 72Z" fill="#FF6B35"/>
      </svg>

      </div>
    </div>
  )
} 