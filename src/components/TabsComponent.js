import React, { Component } from 'react'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import TabDoor from './tabs/TabDoor';
import '../components/tabs/tabs.css';
import TabDevices from './tabs/TabDevices';
import TabPrices from './tabs/TabPrices';
import TabDoorPanel from './tabs/TabDoor/TabDoorPanel';
import TabDevicesPanel from './tabs/TabDevices/TabDevicesPanel';
import TabPricesPanel from './tabs/TabPrices/TabPricesPanel';


class TabsComponent extends Component {
    state = {
        tabIndex: 0
    };

    render() {
        return (
            <Tabs className="tabs" 
                    selectedIndex={this.state.tabIndex}
                    onSelect={tabIndex => this.setState({tabIndex})}>
                <TabList className="tab-list">
                    <Tab className={`${this.state.tabIndex === 0 ? 'active' : null}`}>
                        <TabDoor />
                        <p className='lg-tab-text'><strong>
                            No Commitments<br/>Cancel online at anytime
                        </strong></p>
                        <p className='md-tab-text' style={{marginTop: '0.4rem'}}>Cancel</p>
                    </Tab>
                    <Tab className={`${this.state.tabIndex === 1 ? 'active' : null}`}>
                        <TabDevices />
                        <p className="tab-para lg-tab-text"><strong>
                            Watch anywhere
                        </strong></p>
                        <p className='md-tab-text' style={{marginTop: '-5.3125rem'}}>Devices</p>
                    </Tab>
                    <Tab className={`${this.state.tabIndex === 2 ? 'active' : null}`}>
                        <TabPrices />
                        <p className='lg-tab-text'><strong>
                            Pick your price
                        </strong></p>
                        <p className='md-tab-text' style={{marginTop: '0.4rem'}}>Price</p>
                    </Tab>
                </TabList>
                <TabPanel>
                    <TabDoorPanel />
                </TabPanel>
                <TabPanel>
                    <TabDevicesPanel />
                </TabPanel>
                <TabPanel>
                    <TabPricesPanel />
                </TabPanel>
            </Tabs>
        )
    }
}

export default TabsComponent;