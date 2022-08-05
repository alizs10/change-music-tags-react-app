import React, { useEffect, useRef, useState } from 'react'

export default function Cover({ cover }) {

    const [showCover, setShowCover] = useState(false);
    const [coverUrl, setCoverUrl] = useState("");

    const styles = {
        width: "12rem",
        height: "12rem",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "5px"
    }
    const coverDiv = useRef()
    useEffect(() => {
        console.log(cover)
        if ("format" in cover) {
            setShowCover(false)
            coverDiv.current.style.backgroundImage = `url(data:${cover.format};base64,${window.btoa(cover.base64String)})`;
        } else {
            var reader = new FileReader();
            setCoverUrl(reader.readAsDataURL(cover));

            reader.onloadend = function (e) {
                setCoverUrl(reader.result)
                setShowCover(true)
            }
        }
    }, [cover])
    return (
        <div style={styles} ref={coverDiv}>
            {showCover ? (
                <img style={{ width: "12rem", height: "12rem", objectFit: "cover", borderRadius: "5px" }} src={coverUrl} />
            ) : null}
        </div>
    )
}
