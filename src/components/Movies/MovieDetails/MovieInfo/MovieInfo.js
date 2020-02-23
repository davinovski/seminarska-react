import React from 'react';
import sample from "../../../../images/default_movie_image.png"
import "./MovieInfo.css"

const MovieInfo = (props) =>{

    return(
        <div className="col-3">
            <div className="card mb-3 shadow-sm bg-customcolor">
                <img src={props.imageUrl===null ? sample : props.imageUrl} className="card-img-top" alt=""/>
                <div className="ml-3 mt-2">
                    <ul className="timeline">
                        <li className="timeline-inverted">
                            <div className="timeline-badge bgRed">
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <span className="text-white"><b>Year of release</b></span>
                                    <br/>
                                    <small className="text-white">{props.yearOfRelease}</small>
                                </div>

                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-badge bgRed">
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <span className="text-white"><b>Genres</b></span>
                                    <br/>
                                    <small className="text-white"></small>
                                </div>

                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-badge bgRed">
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <span className="text-white"><b>Rating</b></span>
                                    <br/>
                                    <small className="text-white">{props.rating} <i className="fa fa-star text-warning"/></small>
                                </div>

                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-badge bgRed">
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <span className="text-white"><b>Country</b></span>
                                    <br/>
                                    <small className="text-white">{props.country}</small>
                                </div>

                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-badge bgRed">
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <span className="text-white"><b>Language</b></span>
                                    <br/>
                                    <small className="text-white">{props.rating}</small>
                                </div>

                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-badge bgRed">
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <span className="text-white"><b>Runtime</b></span>
                                    <br/>
                                    <small className="text-white">{props.movieLength}''</small>
                                </div>

                            </div>
                        </li>
                    </ul>

                    <div className="pr-3 mb-3">
                        <a className="btn btn-outline-light btn-block ml-0"
                           href={props.detailsUrl} target="_blank">Details</a>
                    </div>
                </div>
            </div>
        </div>
    )

};
export default MovieInfo;