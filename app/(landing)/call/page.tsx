"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

const BookACall = () => {
    const [duration, setDuration] = useState('');
    const router = useRouter();

    const handleSubmit = () => {
        if (duration) {
            const baseUrl = '/meeting?duration=';
            router.push(`${baseUrl}${duration}`);
        } else {
            return
        }
    };

    const handleSelectChange = (value:any) => {
        setDuration(value);
    };

    return (
        <div className="flex items-center justify-center h-[80vh]">
            <div className="flex w-2/4 p-6 rounded-lg shadow-md border-2 border-gray-100 h-[50vh]">
                <div className="w-2/3 flex text-black flex-col p-4">
                    <h2 className="font-bold text-2xl">WME (Workflow Made Easy)</h2>
                    <p className="text-gray-700 text-lg">After selecting the working session duration, please select an available time slot.</p>
                </div>
                <div className="w-2/3 p-4">
                    <div className="mb-4 text-xl font-semibold">
                        Estimated Call Duration
                    </div>
                    <Select onValueChange={handleSelectChange}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="30">30 Mins</SelectItem>
                                <SelectItem value="60">1 Hour</SelectItem>
                                <SelectItem value="90">1.5 Hours</SelectItem>
                                <SelectItem value="120">2 Hours</SelectItem>
                                <SelectItem value="240">4 Hours</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
        
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 mt-4"
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
