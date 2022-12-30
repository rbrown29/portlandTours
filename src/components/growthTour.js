import React from "react";
import '../css/style.css';

class Growth extends React.Component {
    render() {
        return (
            <div class="Submits">
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <p><span class="studio">Growth Tour -</span>Want to jump into Portland's rich history of growth? This tour offers an insightful experience, by our very educated tour guides, about the history of Portland's growth. While this tour includes walking and driving most conversations will take place at Deschuttes Brewery over complimentary beer flights and complimentary dining at Portland's oldest restaurant, Huber's.</p>
                <ul>
                    <li>Complimentary tapas style appetizer at Huber's restaurant</li>
                    <li>Complimentary flight of three Deschutes Brewery beers</li>
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
                            3 Hours
                        </td>
                        <td>
                            Walking/Driving
                        </td>
                        <td>
                            Included
                        </td>
                        <td>
                            $80
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Growth;
