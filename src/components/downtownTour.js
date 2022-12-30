import React from "react";
import '../css/style.css';


class Downtown extends React.Component {
    render() {
        return (
            <div class="Submits">
                <br /><br /><br /><br /><br /><br /><br /><br /><br /> <br />
                    <p><span class="studio">Downtown Tour -</span>Enjoy a walking tour of Portland's days gone by. This walking only tour provides a glimpse into the natural, architectural, and cultural history of downtown Portland. Upon arrival, you will receive a booklet of the 20 locations we will visit throughout this three hour tour. Use this booklet to compare Portland's current landscape with accurate historical context.</p>
                    <ul>
                        <li>Complimentary tour booklet with Before and After photos and a brief history of each location</li>
                        <li>Complimentary water</li>
                    </ul>
                    <table>
                        <caption>The tours leave daily on the hour between the hours of 9:00 AM and 3:00 PM. The last tour leaves at 3:00 PM.
                        </caption>
                        <tr>
                            <th>
                                Duration
                            </th>
                            <th>
                                Transportation
                            </th>
                            <th>
                                Food
                            </th>
                            <th>
                                Price
                            </th>
                        </tr>
                        <tr>
                            <td>
                                2 Hours
                            </td>
                            <td>
                                Walking
                            </td>
                            <td>
                                None
                            </td>
                            <td>
                                $50
                            </td>
                        </tr>
                    </table><br></br>
            </div>
        );
    }
}

export default Downtown;