"use client"

import React, { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ZoomIn, ZoomOut, RotateCcw, X } from "lucide-react"

interface FullscreenImageViewerProps {
    src: string
    alt: string
    onClose: () => void
}

const FullscreenImageViewer: React.FC<FullscreenImageViewerProps> = ({ src, alt, onClose }) => {
    const [scale, setScale] = useState(1)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isDragging, setIsDragging] = useState(false)
    const [startPos, setStartPos] = useState({ x: 0, y: 0 })
    const imageRef = useRef<HTMLDivElement>(null)

    const handleZoomIn = () => {
        setScale((prev) => Math.min(prev + 0.25, 3))
    }

    const handleZoomOut = () => {
        setScale((prev) => {
            const newScale = Math.max(prev - 0.25, 0.5)
            if (newScale === 1) {
                setPosition({ x: 0, y: 0 })
            }
            return newScale
        })
    }

    const handleReset = () => {
        setScale(1)
        setPosition({ x: 0, y: 0 })
    }

    const handleMouseDown = (e: React.MouseEvent) => {
        if (scale > 1) {
            e.preventDefault()
            setIsDragging(true)
            setStartPos({
                x: e.clientX - position.x,
                y: e.clientY - position.y,
            })
        }
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        if (scale > 1 && e.touches.length === 1) {
            setIsDragging(true)
            setStartPos({
                x: e.touches[0].clientX - position.x,
                y: e.touches[0].clientY - position.y,
            })
        }
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging && scale > 1) {
            e.preventDefault()
            setPosition({
                x: e.clientX - startPos.x,
                y: e.clientY - startPos.y,
            })
        }
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        if (isDragging && scale > 1 && e.touches.length === 1) {
            e.preventDefault()
            setPosition({
                x: e.touches[0].clientX - startPos.x,
                y: e.touches[0].clientY - startPos.y,
            })
        }
    }

    const handleMouseUp = () => {
        setIsDragging(false)
    }

    const handleTouchEnd = () => {
        setIsDragging(false)
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
            if (e.key === "+" || e.key === "=") handleZoomIn()
            if (e.key === "-") handleZoomOut()
            if (e.key === "0") handleReset()
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [onClose])

    return (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
            {/* Controls */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10 bg-background/10 backdrop-blur-sm p-2 rounded-full">
                <Button
                    variant="outline"
                    size="icon"
                    className="bg-background/50 hover:bg-background/40 rounded-full"
                    onClick={handleZoomIn}
                >
                    <ZoomIn className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="bg-background/50 hover:bg-background/40 rounded-full"
                    onClick={handleZoomOut}
                >
                    <ZoomOut className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="bg-background/50 hover:bg-background/40 rounded-full"
                    onClick={handleReset}
                >
                    <RotateCcw className="h-4 w-4" />
                </Button>
            </div>

            {/* Close button */}
            <Button
                variant="outline"
                size="icon"
                className="absolute top-4 z-50 right-4 bg-background/60 hover:bg-background/40 rounded-full"
                onClick={onClose}
            >
                <X className="h-4 w-4" />
            </Button>

            {/* Image container */}
            <div
                ref={imageRef}
                className={`relative w-full h-full overflow-hidden ${isDragging ? "cursor-grabbing" : scale > 1 ? "cursor-grab" : "cursor-default"
                    }`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="absolute transition-transform duration-100"
                    style={{
                        transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                        transformOrigin: "center",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div className="relative max-w-[90vw] max-h-[90vh]">
                        <Image
                            src={src || "/placeholder.svg"}
                            alt={alt}
                            width={1200}
                            height={800}
                            className="object-contain max-h-[90vh]"
                            unoptimized
                            draggable="false"
                        />
                    </div>
                </div>
            </div>

            {/* Instructions */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center text-xs text-white/60">
                {scale > 1 ? "Click and drag to move • Use buttons or +/- keys to zoom" : "Use buttons or +/- keys to zoom in"}
            </div>
        </div>
    )
}

export default FullscreenImageViewer
