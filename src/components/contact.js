import React from "react";
import '../css/style.css';

class Contact extends React.Component {
    render() {
        return (
                <div class="forms">
                    <form>
                        <label>Tour Name</label>
                        <select>
                            <option value="Downtown Tour">Downtown Tour</option>
                            <option value="GrowthTour">Growth Tour</option>
                            <option value="Landmarks Tour">Landmarks Tour</option>
                        </select><br /><br />
                        <label>First Name</label><input type="text" name="Name" required="required" placeholder="First Name"></input>
                        <label>Last Name</label><input type="text" name="last" required="required" placeholder="Last Name"></input>
                        <label>Email</label><input type="email" name="email" required="required" placeholder="Email"></input>
                        <label>Phone Number</label><input type="text" name="Phone" required="required" placeholder="Phone Number"></input>
                        <label>Tour Date</label><input type="date" name="date" required="required" placeholder="Date"></input>
                        <label>Participants</label><input type="number" name="number" required="required" placeholder="# of Participants"></input>
                        <h6>Does anyone in your party have food or drink sensitivities?</h6>
                        <textarea name="comments" id="comment" rows="8" cols="50" required="required" placeholder="Sensitvities"></textarea>
                        <input type="submit" value="Send Now" id="mySubmit"></input>
                    </form>
                </div>
        );
    }
}

export default Contact;