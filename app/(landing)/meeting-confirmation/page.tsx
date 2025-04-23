"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { format, parseISO, differenceInMinutes } from "date-fns"
import { CalendarCheck, Clock, Mail, ArrowRight } from "lucide-react"

function MeetingConfirmation() {
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [bookingData, setBookingData] = useState({
    fullName: "",
    email: "",
    eventName: "",
    startTime: "",
    endTime: "",
    duration: "",
    message: "",
    timezone: "",
    formattedStart: "",
    formattedEnd: "",
  })

  useEffect(() => {
    // Extract data from URL parameters
    const inviteeFullName = searchParams.get("invitee_full_name") || "Guest"
    const inviteeEmail = searchParams.get("invitee_email") || "Not provided"
    const eventTypeName = searchParams.get("event_type_name") || "Consultation"
    const eventStartTime = searchParams.get("event_start_time") || ""
    const eventEndTime = searchParams.get("event_end_time") || ""
    const answer1 = searchParams.get("answer_1") || "No additional information provided."

    // Process the data
    let formattedStart = "Not specified"
    let formattedEnd = "Not specified"
    let duration = "Not specified"
    let timezone = "Not specified"

    if (eventStartTime && eventEndTime) {
      try {
        const startDate = parseISO(eventStartTime)
        const endDate = parseISO(eventEndTime)

        // Format the dates
        formattedStart = format(startDate, "MMMM d, yyyy h:mm a")
        formattedEnd = format(endDate, "h:mm a")

        // Calculate duration
        const durationMinutes = differenceInMinutes(endDate, startDate)
        const hours = Math.floor(durationMinutes / 60)
        const minutes = durationMinutes % 60

        if (hours > 0 && minutes > 0) {
          duration = `${hours} hour${hours > 1 ? "s" : ""} ${minutes} minute${minutes > 1 ? "s" : ""}`
        } else if (hours > 0) {
          duration = `${hours} hour${hours > 1 ? "s" : ""}`
        } else {
          duration = `${minutes} minute${minutes > 1 ? "s" : ""}`
        }

        // Extract timezone from the ISO string
        const timezoneMatch = eventStartTime.match(/([+-]\d{2}:\d{2})$/)
        if (timezoneMatch) {
          const offset = timezoneMatch[1]

          // Map common timezone offsets to readable names
          const timezoneMap: Record<string, string> = {
            "+00:00": "GMT/UTC",
            "+01:00": "Central European Time",
            "+02:00": "Eastern European Time",
            "+03:00": "East Africa Time",
            "+04:00": "Near East Time",
            "+05:00": "Pakistan Time",
            "+05:30": "India Time",
            "+06:00": "Bangladesh Time",
            "+07:00": "Vietnam Time",
            "+08:00": "China Time",
            "+09:00": "Japan Time",
            "+10:00": "Australia Eastern Time",
            "+11:00": "Solomon Islands Time",
            "+12:00": "New Zealand Time",
            "-01:00": "Azores Time",
            "-02:00": "Mid-Atlantic Time",
            "-03:00": "Brazil Time",
            "-04:00": "Atlantic Time",
            "-05:00": "Eastern Time",
            "-06:00": "Central Time",
            "-07:00": "Mountain Time",
            "-08:00": "Pacific Time",
            "-09:00": "Alaska Time",
            "-10:00": "Hawaii Time",
            "-11:00": "Midway Islands Time",
            "-12:00": "International Date Line West",
          }

          timezone = timezoneMap[offset] || `UTC${offset}`
        }
      } catch (error) {
        console.error("Error parsing dates:", error)
      }
    }

    setBookingData({
      fullName: inviteeFullName,
      email: inviteeEmail,
      eventName: eventTypeName.replace(/^\uD83D\uDCA5/, ""), // Remove emoji if present
      startTime: eventStartTime,
      endTime: eventEndTime,
      duration,
      message: answer1,
      timezone,
      formattedStart,
      formattedEnd,
    })

    setLoading(false)
  }, [searchParams])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-center">
          <h2 className="text-2xl font-semibold">Loading your confirmation...</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-10 md:py-16 px-4 sm:px-6 lg:px-8 text-white text-center">
        <h1 className="text-4xl font-bold mb-3">🎉 Thank You, {bookingData.fullName}!</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Your meeting with WME Solutions has been successfully booked. An email confirmation has been sent to you.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 md:mb-6 flex items-center border-b pb-3">
            <CalendarCheck className="mr-3 h-7 w-7 text-blue-600" />
            <span>📅 Appointment Details</span>
          </h2>

          <div className="space-y-3 md:space-y-6 pl-2 sm:pl-10">
            <div className="flex flex-col sm:flex-row sm:items-center">
              <p className="text-gray-600 font-bold w-40">Meeting Type:</p>
              <p className="text-lg">{bookingData.eventName}</p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center">
              <p className="text-gray-600 font-bold w-40">Date & Time:</p>
              <p className="text-lg">
                {bookingData.formattedStart} – {bookingData.formattedEnd} ({bookingData.timezone})
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center">
              <p className="text-gray-600 font-bold w-40">Duration:</p>
              <p className="text-lg flex items-center">
                <Clock className="mr-2 h-5 w-5 text-gray-500" />
                {bookingData.duration}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center">
              <p className="text-gray-600 font-bold w-40">Email:</p>
              <p className="text-lg flex items-center">
                <Mail className="mr-2 h-5 w-5 text-gray-500" />
                {bookingData.email}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6 md:mb-12">
          <h2 className="text-2xl font-semibold mb-3 md:mb-6 border-b pb-3">✅ What Happens Next?</h2>
          <p className="text-lg text-justify">
            An email has been sent to you with all the meeting details, including the Zoom link. Please check your inbox
            (and your spam folder, just in case).
          </p>
        </div>

        <div className="mb-6 md:mb-12">
          <h2 className="text-2xl font-semibold mb-3 md:mb-6 border-b pb-3">💡 While You Wait</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="https://wme.us.com/remote-services"
              className="group p-4 md:p-6 bg-gray-50 hover:bg-gray-200 active:bg-gray-300 rounded-xl transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <h3 className="font-semibold text-xl mb-2 group-hover:text-blue-600 transition-colors">
                  👉 Browse our Remote Services
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  See how we build Monday.com workflows for teams of all sizes.
                </p>
                <div className="flex justify-end mt-2">
                  <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link
              href="https://wme.us.com/on-site-implementation-packages"
              className="group p-4 md:p-6 bg-gray-50 hover:bg-gray-200 active:bg-gray-300 rounded-xl transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <h3 className="font-semibold text-xl mb-2 group-hover:text-blue-600 transition-colors">
                  🛠️ Prefer on-site support?
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">Explore our international implementation packages.</p>
                <div className="flex justify-end mt-2">
                  <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link
              href="https://wme.us.com/stories-worth-telling"
              className="group p-4 md:p-6 bg-gray-50 hover:bg-gray-200 active:bg-gray-300 rounded-xl transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <h3 className="font-semibold text-xl mb-2 group-hover:text-blue-600 transition-colors">
                  📖 Success Stories
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Discover how businesses streamlined operations and boosted efficiency with tailored Monday.com
                  solutions
                </p>
                <div className="flex justify-end mt-2">
                  <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link
              href="https://wme.us.com/portfolio-wme"
              className="group p-4 md:p-6 bg-gray-50 hover:bg-gray-200 active:bg-gray-300 rounded-xl transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <h3 className="font-semibold text-xl mb-2 group-hover:text-blue-600 transition-colors">
                  📂 Workflow Design Portfolio
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Explore screenshots of real Monday.com workflows we&apos;ve built to streamline operations, manage
                  teams, and automate processes.
                </p>
                <div className="flex justify-end mt-2">
                  <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="text-center py-6 md:py-10 border-t border-gray-200">
          <p className="text-lg">
            If you have any questions before our meeting, feel free to reach out at{" "}
            <a href="mailto:support@wme.us.com" className="text-blue-600 hover:underline font-medium">
              support@wme.us.com
            </a>
          </p>
          <p className="text-lg mt-6 font-medium">
            Looking forward to meeting you soon!
            <br />— The WME Solutions Team
          </p>
        </div>
      </div>
    </div>
  )
}

export default function WrappedMeetingConfirmation() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MeetingConfirmation />
    </Suspense>
  )
}
