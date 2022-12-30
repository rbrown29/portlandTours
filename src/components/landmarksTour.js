import React from "react";
import '../css/style.css';

class LandmarksTour extends React.Component {
    render() {
        return (
           
            <div class="Submits">
                 <br /><br /><br /><br /><br /><br /><br /> <br /><br /><br />
                <p><span class="studio">LandMarks Tour -</span>This tour will help you cement your Portland knowledge and cover all of Portland's famous landmarks and must see spots. We use a spacious shuttle bus to travel around Portland's quadrants and famous bridges. When you finish the tour, you can tell everyone that you've seen it all in Portland.
                </p>
                <ul>
                    <li>Complimentary tour booklet with photos and brief descriptions of the locations we visit
                    </li>
                    <li>Complimentary local snacks</li>
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
                            4 Hours
                        </td>
                        <td>
                            Walking/Driving
                        </td>
                        <td>
                            Included
                        </td>
                        <td>
                            $110
                        </td>
                    </tr>
                </table><br></br>
            </div>
        );
    }
}

export default LandmarksTour;