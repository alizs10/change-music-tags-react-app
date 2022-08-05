import React from 'react'
import Main from './Main'
import PickFile from './PickFile'
import Socials from './Socials'

export default function Header() {
    return (
        <div className="header">
            <Socials />
            <Main />
            <PickFile />
        </div>
    )
}
