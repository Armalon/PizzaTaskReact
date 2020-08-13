import React from "react";

const logo = () => {
    return (<div className="my-0 mr-md-auto font-weight-normal">
                <h1>
                    <img src={process.env.PUBLIC_URL + '/logo.png'} style={{ marginTop: '-30px', marginBottom: '-30px'}} alt="The Pizza Cut" />
                </h1>
                <p className="">
                    We deliver pieces of heaven
                    <br />
                    right to your apartment
                </p>
            </div>)
}

export default logo