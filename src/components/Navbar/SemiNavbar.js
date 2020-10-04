import React from 'react';

const SemiNavbar = () => {
    return (
        <div className="pt-5">
            <h1>I GROW BY HELPING PEOPLE IN NEED.</h1>
            <div className="input-group mb-3 mt-3 w-25 mx-auto">
                <input type="text" className="form-control" placeholder="search..." aria-label="search..." aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                    <span className="input-group-text bg-primary text-white" id="basic-addon2">Search</span>
                </div>
            </div>
        </div>
    );
};

export default SemiNavbar;