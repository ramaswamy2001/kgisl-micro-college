import React from "react";
function Resume(){
    return(
        <>
         <h1>Resume Building</h1>
    <table id="resume_build">
        <tr>
            <td><label>CAREER OBJECTIVE</label></td>
            <td><textarea name="car_obj"></textarea></td>
        </tr>
         <tr>
            <td><label>Upload photo</label></td>
            <td><input type="file" name="photo"/></td>
        </tr>
        <tr>
            <td><label>Name of the Person</label></td>
            <td><input type="text" name="name" placeholder="Name"/></td>
        </tr>
        <tr>
            <td><label>Date of Birth</label></td>
            <td><input type="date" name="dob" placeholder="dob"/></td>
        </tr>
        <tr>
            <td><label>Address</label></td>
            <td><textarea name="Address" placeholder="Address"></textarea></td>
        </tr>
        <tr>
            <td><label>Phone Number</label></td>
            <td><input type="number" name="phone_no"/></td>
        </tr>
        <tr>
            <td><label>Email ID</label></td>
            <td><input type="email" name="email_id"/></td>
        </tr>
        <tr>
            <td><label>Gender</label></td>
            <td>
                <input type="radio" name="gender" value="Male"/>Male
                <input type="radio" name="gender" value="Female"/>Female
            </td>

        </tr>
        <tr>
            <td><label>Marital status</label></td>
            <td>
                <input type="radio" name="marital_status" value="Single"/>Single
                <input type="radio" name="marital_status" value="Married"/>Married
            </td>
        </tr>
        <tr>
            <td><label>Skill Set</label></td>
            <td>
                <input type="text" name="skill1" id="skill1" value=""/><br/>
                <input type="text" name="skill2" id="skill2" value=""/><br/>
                <input type="text" name="skill3" id="skill3" value=""/><br/>
                <input type="text" name="skill4" id="skill4" value=""/><br/>

            </td>
        </tr>
    </table>
    <section>
        <h3>Educational Qualification</h3>
        <table id="edu">
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Courses</th>
                    <th>Institution</th>
                    <th>Board/University</th>
                    <th>Year of Passing</th>
                    <th>Percentage</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><label>1</label></td>
                    <td><input type="text" id="course1" name="course1" value=""/></td>
                    <td><input type="text" id="institution1" name="institution1" value=""/></td>
                    <td><input type="text" id="board1" name="board1" value=""/></td>
                    <td><input type="number" id="year_of_passing1" name="year_of_passing1" value=""/></td>
                    <td><input type="number" id="percentage1" name="percentage1" value=""/></td>
                    <td><input type="text" id="grade1" name="grade1" value=""/></td>
                </tr>
                <tr>
                    <td><label>2</label></td>
                    <td><input type="text" id="course2" name="course2" value=""/></td>
                    <td><input type="text" id="institution2" name="institution2" value=""/></td>
                    <td><input type="text" id="board2" name="board2" value=""/></td>
                    <td><input type="number" id="year_of_passing2" name="year_of_passing2" value=""/></td>
                    <td><input type="number" id="percentage2" name="percentage2" value=""/></td>
                    <td><input type="text" id="grade2" name="grade2" value=""/></td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td><label>3</label></td>
                    <td><input type="text" id="course3" name="course3" value=""/></td>
                    <td><input type="text" id="institution3" name="institution3" value=""/></td>
                    <td><input type="text" id="board3" name="board3" value=""/></td>
                    <td><input type="number" id="year_of_passing3" name="year_of_passing3" value=""/></td>
                    <td><input type="number" id="percentage3" name="percentage3" value=""/></td>
                    <td><input type="text" id="grade3" name="grade3" value=""/></td>
                </tr>
            </tfoot>
        </table>
    </section>
    <section>
        <h3>Project Details</h3>
        <table id="pro">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Title</th>
                    <th>Duration</th>
                    <th>Technology Used</th>
                    <th>Description</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><label>1</label></td>
                    <td><input type="text" name="title1" value=""/></td>
                    <td><input type="text" name="duration1" value=""/></td>
                    <td><input type="text" name="technology used1" value=""/></td>
                    <td><textarea name="description1"></textarea></td>
                    <td><input type="url" name="link1" value=""/></td>
                </tr>
                <tr>
                    <td><label>1</label></td>
                    <td><input type="text" name="title2" value=""/></td>
                    <td><input type="text" name="duration2" value=""/></td>
                    <td><input type="text" name="technology used2" value=""/></td>
                    <td><textarea name="description2"></textarea></td>
                    <td><input type="url" name="link2" value=""/></td>
                </tr>
                <tr>
                    <td><label>1</label></td>
                    <td><input type="text" name="title3" value=""/></td>
                    <td><input type="text" name="duration3" value=""/></td>
                    <td><input type="text" name="technology used3" value=""/></td>
                    <td><textarea name="description3"></textarea></td>
                    <td><input type="url" name="link3" value=""/></td>
                </tr>
                </tbody>
        </table>
    </section>

        </>
    )
}
export default Resume;