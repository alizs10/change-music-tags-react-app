import React from 'react'

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

function Socials() {
    return (
        <div className="social-container">
            <a href='https://instagram.com/alizs10' target="_blank">
                <InstagramIcon />
            </a>
            <a href='https://github.com/alizs10' target="_blank">
                <GitHubIcon />
            </a>
        </div>
    )
}

export default Socials