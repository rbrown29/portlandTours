import React from "react";
import '../css/style.css';
import landmarks from '../pictures/Landmarks Tour Small.png';
import downtown from '../pictures/Downtown Tour Small.png';
import growth from '../pictures/Growth Tour Small.png';
import oldtown from '../pictures/OldTownHistorical.jpeg';



class Home extends React.Component {
    render() {
        return (
            <div id="container">
                <main>
                    <h2>Explore the History of Portland</h2>
                    <h4>How did we get started?</h4>
                    <p><span class="studio">Portland Historical Tours -</span> We have such a passion for the city we live in. For over 33 years we have offered tours for Portland visitors and residents alike through our family business. Having family in Portland since the early 1900's has allowed us to build tours out of insight over 100 years. We are confident you will love any of our Portland tours with the help of our generous guides. We offer three tours: the Downtown, the Growth, and the Landmarks tour. Our favorites are the Downtown and Landmarks but with Portland's current growth we are selling out our Growth tours.</p>
                </main>
                <div id="pics">
                    <img src={landmarks} alt="" id="fourth" />
                    <img src={growth} alt="" id="fourth" />
                    <img src={downtown} alt="" id="fourth" />
                    <img src={oldtown} alt="" id="fourth" />
                </div>
            </div>
        );
    }
}

export default Home;