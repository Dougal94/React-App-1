import React, { useCallback } from "react";

// import "./Playlist.css";   -> for future styling

import Tracklist from "../Tracklist/Tracklist.jsx";

const Playlist = (props) => {
    const handleNameChange = useCallback(
        (event) => {
            props.onNameChange(event.target.value);
        }, [props.onNameChange]
    );

    return (
        <div className="Playlist">
            <input onChange={handleNameChange} defaultValie={"New Playlist"} />
            <Tracklist 
                tracks={props.playlistTracks}
                isRemoval={true}
                onRemove={props.onRemove}
            />
            <button className="Playlist-save" onClick={props.onSave}>
                SAVE TO SPOTIFY
            </button>
        </div>
    );
};

export default Playlist;