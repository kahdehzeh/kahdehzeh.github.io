import { useEffect, useState } from "react"
import { Timer } from "./timer"

export const Check = () => {
    const [visible, setVisible] = useState(false)

    return (
        <p>
        <button onClick={setVisible(true)}> Check </button>
        <div>
            {Timer()}
        </div>
        </p>
    )
}