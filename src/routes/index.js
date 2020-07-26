import React, { Component } from 'react'
import Header from '../components/home/Header'
import TabsComponent from '../components/home/TabsComponent'
import Footer from '../components/home/Footer'

class Main extends Component {

    componentDidMount() {
        window.scroll(0, 0);
    }

    render() {
        return (
            <div>
                <Header />
                <TabsComponent />
                <Footer />
            </div>
        )
    }
}

export default Main;