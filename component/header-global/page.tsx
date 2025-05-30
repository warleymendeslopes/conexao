'use client';
import { ReactElement, useEffect, useState } from "react";
const endDate = new Date("2025-05-30T00:00:00Z"); // UTC

function getTimeRemaining() {
    const total = endDate.getTime() - new Date().getTime();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { total, days, hours, minutes, seconds };
}

export default function HeaderGlobal(): ReactElement {
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

    useEffect(() => {
        const interval = setInterval(() => {
            const remaining = getTimeRemaining();
            if (remaining.total <= 0) {
                clearInterval(interval);
            } else {
                setTimeLeft(remaining);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header>
            <div className="flex flex-col py-4 bg-[#14F708] text-[#000000] font-sans">
                <h1 className="text-[1.2rem] text-center">
                    Oferta acaba em {timeLeft.days} dias!
                </h1>
            </div>
        </header>
    );
}