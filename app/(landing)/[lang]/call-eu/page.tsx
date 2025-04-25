"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

const BookACall = () => {
    const [duration, setDuration] = useState<string>('');
    const router = useRouter();

    const handleSubmit = () => {
        const urls: { [key: string]: string } = {
            "30": "https://calendly.com/w-m-e/30min",
            "60": "https://calendly.com/w-m-e/60min-",
            "90": "https://calendly.com/w-m-e/90min",
            "120": "https://calendly.com/w-m-e/120min",
            "240": "https://calendly.com/w-m-e/halfday"
        };

        if (duration) {
            const url = urls[duration];
            if (url) {
                router.push(url);
            }
        } else {
            alert('Please select a duration');
        }
    };

    const handleSelectChange = (value: string) => {
        setDuration(value);
    };

    return (
        <div className="flex items-center justify-center h-[80vh] p-4">
            <div className="flex flex-col md:flex-row w-full max-w-4xl p-6 rounded-lg shadow-md border-2 border-gray-100 h-auto md:h-[50vh]">
                <div className="w-full md:w-1/2 flex text-black flex-col p-4">
                    <h2 className="font-bold text-2xl">WME Solutions</h2>
                    <p className="text-gray-700 text-lg mt-2">After selecting the working session duration, please select an available time slot.</p>
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <div className="mb-4 text-xl font-semibold">
                        Estimated Call Duration
                    </div>
                    <Select onValueChange={handleSelectChange}>
                        <SelectTrigger className="w-full ">
                            <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Select</SelectLabel>
                                <SelectItem value="30">30 Mins</SelectItem>
                                <SelectItem value="60">1 Hour</SelectItem>
                                <SelectItem value="90">1.5 Hours</SelectItem>
                                <SelectItem value="120">2 Hours</SelectItem>
                                <SelectItem value="240">4 Hours</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
        
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 mt-4 w-full"
                        onClick={handleSubmit}
                    >
                        Book Meeting
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookACall;
