import React from "react";

export default class Home extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <main id="main">
                            {this.props.children}
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}