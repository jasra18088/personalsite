import React from "react";
import PropTypes from "prop-types";

export default function ProjectBox({ project: { id, title, image }, }) {
    return (
        <html>
            <div className="card" style={{ width: "18rem" }} id={id}>
                <img src={image} className="card-img-top" alt=""></img>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </html>
    );
}
