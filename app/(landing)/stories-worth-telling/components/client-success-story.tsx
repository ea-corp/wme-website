import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface ClientSuccessStoryProps {
    companyName: string
    achievement: string
    achievementMetric?: string
    description: string
    contactPerson: string
    contactTitle: string
    backgroundColor?: string
    textColor?: string
    accentColor?: string
    isReversed?: boolean
    videoId: string
}

export default function ClientSuccessStory({
    companyName,
    achievement,
    achievementMetric,
    description,
    contactPerson,
    contactTitle,
    backgroundColor = "bg-blue-900",
    textColor = "text-white",
    accentColor = "text-yellow-400",
    isReversed = false,
    videoId,
}: ClientSuccessStoryProps) {
    return (
        <div
            className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} shadow-lg rounded-lg overflow-hidden`}
        >
            <div className={`${backgroundColor} py-8 px-6 md:px-8 lg:px-10 flex-1 flex flex-col justify-center`}>
                <Card className={`border-0 shadow-none ${backgroundColor} ${textColor}`}>
                    <div className="flex justify-center">
                        <Badge className="text-sm px-3 py-1 bg-primary/20 text-primary-foreground">Success Story</Badge>
                    </div>
                    <CardHeader className="pb-2 space-y-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-center">{companyName}</h3>
                    </CardHeader>
                    <CardContent className="space-y-4 text-center">
                        <p className="text-xl md:text-2xl font-medium">
                            {achievement} <span className={accentColor}>{achievementMetric}</span>
                        </p>
                        <p className="text-base md:text-lg">{description}</p>
                        <p className="text-base">
                            <span className="text-blue-400 font-medium">WME Solutions</span> can help your business achieve similar efficiency with customized Monday.com solutions.
                        </p>
                    </CardContent>
                    <CardFooter className="flex flex-col items-center space-y-4 pt-2">
                        <Link href="/contact-us">
                            <Button className="rounded-full px-6 text-black" variant="outline">
                                Contact us today <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
            <div className="flex-1 flex justify-center items-center bg-black">
                <div className="aspect-video w-full max-w-full">
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
            </div>
            x
        </div>
    )
}

