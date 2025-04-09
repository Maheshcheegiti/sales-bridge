import React from "react";
import FormImage from "../assets/sales.gif";

export default function LeadFormSection() {
  return (
    <section className="lead-form-section" id="form">
      <div className="form-left">
        <img src={FormImage} alt="Get Started" />
        <div className="form-text">
          <h2>Start Your Journey with SalesBridge</h2>
          <p>
            Fill out the form and join our powerful lead nurturing system.
            Generate more conversions through automation and insight-driven
            campaigns.
          </p>
        </div>
      </div>
      <div className="form-right">
        <form
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DWd000001brha"
          method="POST"
        >
          <input type="hidden" name="oid" value="00DWd000001brha" />
          <input
            type="hidden"
            name="retURL"
            value="https://www.salesforce.com"
          />

          <div className="form-grid">
            <div className="form-group">
              <label>First Name</label>
              <input name="first_name" type="text" required />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input name="last_name" type="text" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input name="email" type="email" required />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input name="phone" type="text" />
            </div>

            <div className="form-group">
              <label>Company</label>
              <input name="company" type="text" />
            </div>

            <div className="form-group">
              <label>Type</label>
              <select name="00NWd0000019cNF" required>
                <option value="">--None--</option>
                <option value="B2B">B2B</option>
                <option value="B2C">B2C</option>
              </select>
            </div>

            <div className="form-group">
              <label>Street</label>
              <input name="street" type="text" />
            </div>

            <div className="form-group">
              <label>City</label>
              <input name="city" type="text" />
            </div>

            <div className="form-group">
              <label>State</label>
              <input name="state" type="text" />
            </div>

            <div className="form-group">
              <label>Zip</label>
              <input name="zip" type="text" />
            </div>

            <div className="form-group">
              <label>Country</label>
              <input name="country" type="text" />
            </div>

            <div className="form-group">
              <label>Region</label>
              <select name="00NWd0000018PtX" required>
                <option value="">--None--</option>
                <option value="Americas (North and South America)">
                  Americas
                </option>
                <option value="Asia-Pacific">Asia-Pacific</option>
                <option value="Europe, Middle East, and Africa">EMEA</option>
                <option value="Japan">Japan</option>
                <option value="Latin America and Caribbean">LATAM</option>
              </select>
            </div>

            <input type="hidden" name="lead_source" value="Website" />

            <div className="form-group">
              <label>Annual Revenue</label>
              <input name="revenue" type="text" />
            </div>

            <div className="form-group">
              <label>Employees</label>
              <input name="employees" type="text" />
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
