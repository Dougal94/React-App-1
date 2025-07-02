import React from "react";

// import "./Tracklist.css";   -> for future styling

import Track from "../Track/Track.jsx";

const Tracklist = (props) => {
    return (
        <div className="Tracklist">
            {props.tracks.map((track) => {
                return (
                    <Track 
                        track={track}
                        key={track.id}
                        onAdd={props.onAdd}
                        isRemoval={props.isRemoval}
                        onRemove={props.onRemove}
                    />
                );
            })}
        </div>
    );
};

export default Tracklist;