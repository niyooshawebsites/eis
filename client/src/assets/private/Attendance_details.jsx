import React from "react";

const Attendance_details = () => {
  return (
    <>
      <div className="row mt-5 mb-3">
        <div className="col">
          <div className="col-md-6 mx-auto">
            <form action="" className="form-inline">
              <select name="" id="" className="me-3" required>
                <option value="07.00 AM - 08.00 AM">07.00 AM - 08.00 AM</option>
                <option value="08.00 AM - 09.00 AM">08.00 AM - 09.00 AM</option>
                <option value="09.00 AM - 10.00 AM">09.00 AM - 10.00 AM</option>
                <option value="10.00 AM - 11.00 AM">10.00 AM - 11.00 AM</option>
                <option value="11.00 AM - 12.00 PM">11.00 AM - 12.00 PM</option>
                <option value="12.00 PM - 01.00 PM">12.00 PM - 01.00 PM</option>
                <option value="01.00 PM - 02.00 PM">01.00 PM - 02.00 PM</option>
                <option value="02.00 PM - 03.00 PM">02.00 PM - 03.00 PM</option>
                <option value="03.00 PM - 04.00 PM">03.00 PM - 04.00 PM</option>
                <option value="04.00 PM - 05.00 PM">04.00 PM - 05.00 PM</option>
                <option value="05.00 PM - 06.00 PM">05.00 PM - 06.00 PM</option>
                <option value="06.00 PM - 07.00 PM">06.00 PM - 07.00 PM</option>
                <option value="07.00 PM - 08.00 PM">07.00 PM - 08.00 PM</option>
                <option value="08.00 PM - 09.00 PM">08.00 PM - 09.00 PM</option>
              </select>
              <select name="" id="" className="me-3" required>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
              <input
                type="number"
                name=""
                id=""
                value={2024}
                className="me-3"
                readOnly
              />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Student</th>
                <th>Contact</th>
                <th>01</th>
                <th>02</th>
                <th>03</th>
                <th>04</th>
                <th>05</th>
                <th>06</th>
                <th>07</th>
                <th>08</th>
                <th>09</th>
                <th>10</th>
                <th>11</th>
                <th>12</th>
                <th>13</th>
                <th>14</th>
                <th>15</th>
                <th>16</th>
                <th>17</th>
                <th>18</th>
                <th>19</th>
                <th>20</th>
                <th>21</th>
                <th>22</th>
                <th>23</th>
                <th>24</th>
                <th>25</th>
                <th>26</th>
                <th>27</th>
                <th>28</th>
                <th>29</th>
                <th>30</th>
                <th>31</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Arvind Kumar</td>
                <td>75452212522</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Attendance_details;
