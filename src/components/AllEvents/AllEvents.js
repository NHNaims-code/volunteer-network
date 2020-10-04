import React from 'react';
import demoImage from '../../images/babySit.png'

const AllEvents = () => {
    return (
        <div>
            <div className="row container mx-auto">
                <div className="card col-3 border-0 p-4">
                    <img height="220px" src={demoImage} alt=""/>
                    <div className="card-footer bg-warning">
                        <h4 className="text-center text-white">Child Support</h4>
                    </div>
                </div>
                <div className="card col-3 border-0 p-4">
                    <img height="220px" src={demoImage} alt=""/>
                    <div className="card-footer bg-warning">
                        <h4 className="text-center text-white">Child Support</h4>
                    </div>
                </div>
                <div className="card col-3 border-0 p-4">
                    <img height="220px" src={demoImage} alt=""/>
                    <div className="card-footer bg-warning">
                        <h4 className="text-center text-white">Child Support</h4>
                    </div>
                </div>
                <div className="card col-3 border-0 p-4">
                    <img height="220px" src={demoImage} alt=""/>
                    <div className="card-footer bg-warning">
                        <h4 className="text-center text-white">Child Support</h4>
                    </div>
                </div>
            </div>
             {/* <div className="row bg-dark">
            <div className="col-8 bg-warning">col-8</div>
            <div className="col-8 bg-danger">col-8</div>
                </div> */}
        </div>
    );
};

export default AllEvents;