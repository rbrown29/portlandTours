import React from "react";
import '../css/style.css';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <br /><br /><br /><br /><br /><br /><br /> <br />
                <div class="Submits">
                    <h2>Contact Oregon Historical Tours</h2>
                    <p>Required information is marked with an Asterick (*)</p>
                    <p>We accept cash, credit card. VISA and MasterCard but no American Express. No payment accepted online</p>
                    <p>We offer online reservations. Pay in person when you show up for the tour. Arrive 30 minutes in advance to pay.</p>
                    <p>We hope to meet you soon! Let us know if you have any questions in the comments area below. Thank you!</p>
                </div>
                <div class="forms">
                    <form>
                        <label>* Name: </label><input type="text" name="name" required="required" placeholder="Name"></input>
                        <label>* Phone: </label><input type="text" name="Phone" required="required" placeholder="Phone Number"></input>
                        <label>* Email: </label><input type="email" name="email" required="required" placeholder="Email"></input>
                        <label for="comments">* </label>
                        <textarea name="comments" id="comments" rows="2" cols="20" required="required" placeholder="Enter comments or tour here.."></textarea>
                        <input type="submit" value="Send Now" id="mySubmit"></input>
                    </form>
                    <form>
                        <label>* Tour Name: </label>
                        <select>
                            <option value="Downtown Tour">Downtown Tour</option>
                            <option value="GrowthTour">Growth Tour</option>
                            <option value="Landmarks Tour">Landmarks Tour</option>
                        </select><br /><br />
                        <label>* First Name: </label><input type="text" name="Name" required="required" placeholder="First Name"></input>
                        <label>* Last Name: </label><input type="text" name="last" required="required" placeholder="Last Name"></input>
                        <label>* Email: </label><input type="email" name="email" required="required" placeholder="Email"></input>
                        <label>* Phone Number: </label><input type="text" name="Phone" required="required" placeholder="Phone Number"></input>
                        <label>* Tour Date: </label><input type="date" name="date" required="required" placeholder="Date"></input>
                        <label>* Participants: </label><input type="number" name="number" required="required" placeholder="# of Participants"></input>
                        <h6>Does anyone in your party have food or drink sensitivities? If so, what are they?
                        </h6>
                        <label for="comments">* </label>
                        <textarea name="comments" id="comment" rows="2" cols="20" required="required" placeholder="Sensitvities"></textarea>
                        <input type="submit" value="Send Now" id="mySubmit"></input>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;