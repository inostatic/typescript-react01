import React from "react"
import {useHistory} from "react-router-dom"

export const AboutPage: React.FC = () => {

    const history = useHistory()
    return (
        <>
            <h1>Страница информации</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolores expedita vero! Consectetur expedita itaque, natus omnis quibusdam ut voluptatem?</p>
            <button className="btn" onClick={() => {history.push('/')}}>Обратно к списку дел</button>
        </>
    )
}