import React, { useRef, useEffect, useState } from "react"

export const Timer = () => {

    const deadline = new Date("jan 13, 2023 23:59:59").getTime();

    const now = new Date().getTime();
    const t = deadline - now;
    const days = Math.ceil(t / (1000 * 60 * 60 * 24))

    const happyness = () => {
        if (days >= 30) {
            return days + " days :(((("
        } else if (days >= 20) {
            return days + " days :((("
        } else if (days >= 10) {
            return days + " days :(("
        } else if (days > 2) {
            return `only ${days - 1} more sleeps :)`
        } else if (days === 2) {
            return "Baby is back tomorrow :))"
        } else if (days === 1) {
            return "Baby is back today :))))"
        }
    }



    return (
        <div className="App">
            <h2 style={{fontSize:"70px"}}>{happyness()}</h2>
        </div>
    )
}


