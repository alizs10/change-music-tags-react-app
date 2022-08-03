import React, { useEffect, useRef } from 'react'

export default function Cover({ cover }) {

    const styles = {
        width: "12rem",
        height: "12rem",
        backgroundSize: "cover",
        borderRadius: "5px"
    }
    const coverDiv = useRef()
    useEffect(() => {
        coverDiv.current.style.backgroundImage = `url(data:${cover.format};base64,${window.btoa(cover.base64String)})`;
    }, [cover])
    return (
        <div style={styles} ref={coverDiv}></div>
    )
}
