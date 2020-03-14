import React from 'react';
import {Link} from 'react-router-dom';


const Track = (props) => {
    const {track} = props;
    return (
        <div className="col-md-6">
            <Link to={`lyrics/track/${track.track_id}`}>
                <div className="card mb-4 shadow-sm">
                    <div className="card-body text-center">
                        <div className="card-text">
                            <div className="track-name">
                                {track.artist_name} - {track.track_name}
                            </div>
                        </div>

                    </div>
                </div>
            </Link>
        </div>
);
};

export default Track;