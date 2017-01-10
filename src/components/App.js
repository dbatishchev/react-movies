import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainContainer from "./MainContainer";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <MainContainer>
                    {this.props.children}
                </MainContainer>
                <Footer></Footer>
            </div>
        );
    }
}