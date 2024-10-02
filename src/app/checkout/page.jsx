"use client";
import React, {useState} from "react";
import styles from "./page.module.css";

export default function Page() {

    const countryCityData = {
        US: ["New York", "Los Angeles", "Chicago", "Houston"],
        CA: ["Toronto", "Vancouver", "Montreal", "Calgary"],
        GB: ["London", "Manchester", "Liverpool", "Birmingham"],
        IN: ["Mumbai", "Delhi", "Bangalore", "Chennai"],
        // Add more countries and cities as needed
      };
    
      const [selectedCountry, setSelectedCountry] = useState(""); // To track selected country
      const [cities, setCities] = useState([]); // To store cities based on selected country
    
      // Handle country selection change
      const handleCountryChange = (event) => {
        const selected = event.target.value;
        setSelectedCountry(selected);
    
        // Update cities based on the selected country
        if (countryCityData[selected]) {
          setCities(countryCityData[selected]);
        } else {
          setCities([]); // If no cities are found for the selected country, clear the city list
        }
      };

  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.billingDetails}>
        <h2>BILLING DETAILS</h2>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <div className={styles.inputGroup1}>
              <label>
                First name <span>*</span>
              </label>
              <input type="text" required />
            </div>
            <div className={styles.inputGroup2}>
              <label>
                Last name <span>*</span>
              </label>
              <input type="text" required />
            </div>
          </div>
          <div className={styles.inputGroup3}>
            <label>Company name (optional)</label>
            <input type="text" />
          </div>
          <div className={styles.inputGroup3}>
            <label>
              Country / Region <span>*</span>
            </label>
            <select value={selectedCountry} onChange={handleCountryChange} required>
              <option value="US">United States</option>
              <option value="AF">Afghanistan</option>
              <option value="AL">Albania</option>
              <option value="DZ">Algeria</option>
              <option value="AS">American Samoa</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AI">Anguilla</option>
              <option value="AQ">Antarctica</option>
              <option value="AG">Antigua and Barbuda</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
              <option value="AW">Aruba</option>
              <option value="AU">Australia</option>
              <option value="AT">Austria</option>
              <option value="AZ">Azerbaijan</option>
              <option value="BS">Bahamas</option>
              <option value="BH">Bahrain</option>
              <option value="BD">Bangladesh</option>
              <option value="BB">Barbados</option>
              <option value="BY">Belarus</option>
              <option value="BE">Belgium</option>
              <option value="BZ">Belize</option>
              <option value="BJ">Benin</option>
              <option value="BM">Bermuda</option>
              <option value="BT">Bhutan</option>
              <option value="BO">Bolivia</option>
              <option value="BA">Bosnia and Herzegovina</option>
              <option value="BW">Botswana</option>
              <option value="BR">Brazil</option>
              <option value="BN">Brunei Darussalam</option>
              <option value="BG">Bulgaria</option>
              <option value="BF">Burkina Faso</option>
              <option value="BI">Burundi</option>
              <option value="CV">Cabo Verde</option>
              <option value="KH">Cambodia</option>
              <option value="CM">Cameroon</option>
              <option value="CA">Canada</option>
              <option value="KY">Cayman Islands</option>
              <option value="CF">Central African Republic</option>
              <option value="TD">Chad</option>
              <option value="CL">Chile</option>
              <option value="CN">China</option>
              <option value="CO">Colombia</option>
              <option value="KM">Comoros</option>
              <option value="CG">Congo</option>
              <option value="CD">Congo (Democratic Republic)</option>
              <option value="CR">Costa Rica</option>
              <option value="HR">Croatia</option>
              <option value="CU">Cuba</option>
              <option value="CY">Cyprus</option>
              <option value="CZ">Czech Republic</option>
              <option value="DK">Denmark</option>
              <option value="DJ">Djibouti</option>
              <option value="DM">Dominica</option>
              <option value="DO">Dominican Republic</option>
              <option value="EC">Ecuador</option>
              <option value="EG">Egypt</option>
              <option value="SV">El Salvador</option>
              <option value="GQ">Equatorial Guinea</option>
              <option value="ER">Eritrea</option>
              <option value="EE">Estonia</option>
              <option value="ET">Ethiopia</option>
              <option value="FJ">Fiji</option>
              <option value="FI">Finland</option>
              <option value="FR">France</option>
              <option value="GA">Gabon</option>
              <option value="GM">Gambia</option>
              <option value="GE">Georgia</option>
              <option value="DE">Germany</option>
              <option value="GH">Ghana</option>
              <option value="GR">Greece</option>
              <option value="GD">Grenada</option>
              <option value="GT">Guatemala</option>
              <option value="GN">Guinea</option>
              <option value="GW">Guinea-Bissau</option>
              <option value="GY">Guyana</option>
              <option value="HT">Haiti</option>
              <option value="HN">Honduras</option>
              <option value="HU">Hungary</option>
              <option value="IS">Iceland</option>
              <option value="IN">India</option>
              <option value="ID">Indonesia</option>
              <option value="IR">Iran</option>
              <option value="IQ">Iraq</option>
              <option value="IE">Ireland</option>
              <option value="IL">Israel</option>
              <option value="IT">Italy</option>
              <option value="JM">Jamaica</option>
              <option value="JP">Japan</option>
              <option value="JO">Jordan</option>
              <option value="KZ">Kazakhstan</option>
              <option value="KE">Kenya</option>
              <option value="KI">Kiribati</option>
              <option value="KW">Kuwait</option>
              <option value="KG">Kyrgyzstan</option>
              <option value="LA">Lao People&#39;s Democratic Republic</option>
              <option value="LV">Latvia</option>
              <option value="LB">Lebanon</option>
              <option value="LS">Lesotho</option>
              <option value="LR">Liberia</option>
              <option value="LY">Libya</option>
              <option value="LI">Liechtenstein</option>
              <option value="LT">Lithuania</option>
              <option value="LU">Luxembourg</option>
              <option value="MG">Madagascar</option>
              <option value="MW">Malawi</option>
              <option value="MY">Malaysia</option>
              <option value="MV">Maldives</option>
              <option value="ML">Mali</option>
              <option value="MT">Malta</option>
              <option value="MH">Marshall Islands</option>
              <option value="MR">Mauritania</option>
              <option value="MU">Mauritius</option>
              <option value="MX">Mexico</option>
              <option value="FM">Micronesia (Federated States of)</option>
              <option value="MD">Moldova</option>
              <option value="MC">Monaco</option>
              <option value="MN">Mongolia</option>
              <option value="ME">Montenegro</option>
              <option value="MA">Morocco</option>
              <option value="MZ">Mozambique</option>
              <option value="MM">Myanmar</option>
              <option value="NA">Namibia</option>
              <option value="NR">Nauru</option>
              <option value="NP">Nepal</option>
              <option value="NL">Netherlands</option>
              <option value="NZ">New Zealand</option>
              <option value="NI">Nicaragua</option>
              <option value="NE">Niger</option>
              <option value="NG">Nigeria</option>
              <option value="NO">Norway</option>
              <option value="OM">Oman</option>
              <option value="PK">Pakistan</option>
              <option value="PW">Palau</option>
              <option value="PA">Panama</option>
              <option value="PG">Papua New Guinea</option>
              <option value="PY">Paraguay</option>
              <option value="PE">Peru</option>
              <option value="PH">Philippines</option>
              <option value="PL">Poland</option>
              <option value="PT">Portugal</option>
              <option value="QA">Qatar</option>
              <option value="RO">Romania</option>
              <option value="RU">Russian Federation</option>
              <option value="RW">Rwanda</option>
              <option value="KN">Saint Kitts and Nevis</option>
              <option value="LC">Saint Lucia</option>
              <option value="VC">Saint Vincent and the Grenadines</option>
              <option value="WS">Samoa</option>
              <option value="SM">San Marino</option>
              <option value="ST">Sao Tome and Principe</option>
              <option value="SA">Saudi Arabia</option>
              <option value="SN">Senegal</option>
              <option value="RS">Serbia</option>
              <option value="SC">Seychelles</option>
              <option value="SL">Sierra Leone</option>
              <option value="SG">Singapore</option>
              <option value="SK">Slovakia</option>
              <option value="SI">Slovenia</option>
              <option value="SB">Solomon Islands</option>
              <option value="SO">Somalia</option>
              <option value="ZA">South Africa</option>
              <option value="ES">Spain</option>
              <option value="LK">Sri Lanka</option>
              <option value="SD">Sudan</option>
              <option value="SR">Suriname</option>
              <option value="SZ">Swaziland</option>
              <option value="SE">Sweden</option>
              <option value="CH">Switzerland</option>
              <option value="SY">Syrian Arab Republic</option>
              <option value="TW">Taiwan</option>
              <option value="TJ">Tajikistan</option>
              <option value="TZ">Tanzania</option>
              <option value="TH">Thailand</option>
              <option value="TL">Timor-Leste</option>
              <option value="TG">Togo</option>
              <option value="TO">Tonga</option>
              <option value="TT">Trinidad and Tobago</option>
              <option value="TN">Tunisia</option>
              <option value="TR">Turkey</option>
              <option value="TM">Turkmenistan</option>
              <option value="TV">Tuvalu</option>
              <option value="UG">Uganda</option>
              <option value="UA">Ukraine</option>
              <option value="AE">United Arab Emirates</option>
              <option value="GB">United Kingdom</option>
              <option value="US">United States</option>
              <option value="UY">Uruguay</option>
              <option value="UZ">Uzbekistan</option>
              <option value="VU">Vanuatu</option>
              <option value="VE">Venezuela</option>
              <option value="VN">Viet Nam</option>
              <option value="YE">Yemen</option>
              <option value="ZM">Zambia</option>
              <option value="ZW">Zimbabwe</option>
            </select>
          </div>

          <div className={styles.inputGroup4}>
            <label>
              Street address <span>*</span>
            </label>
            <input
              type="text"
              placeholder="House number and street name"
              required
            />
            <input
              type="text"
              placeholder="Apartment, suite, unit, etc. (optional)"
            />
          </div>
          <div className={styles.inputGroup3}>
            <label>
              Town / City <span>*</span>
            </label>
            <input type="text" />
          </div>
          <div className={styles.inputGroup3}>
            <label>
              State <span>*</span>
            </label>
            <select required>
              <option value="">Select a city...</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.inputGroup3}>
            <label>
              ZIP Code <span>*</span>
            </label>
            <input type="text" />
          </div>
          <div className={styles.inputGroup3}>
            <label>
              Phone<span>*</span>
            </label>
            <input type="text" />
          </div>
          <div className={styles.inputGroup3}>
            <label>
              Email Address <span>*</span>
            </label>
            <input type="text" />
          </div>
          <div className={styles.account}>
            <input type="checkbox" name="" id="" />
            <p>Create an account?</p>
          </div>
          <div className={styles.ship}>
            <input type="checkbox" name="" id="" />
            <p>Ship to a different address?</p>
          </div>
          <div className={styles.inputGroup3}>
            <label>Order notes (optional)</label>
            <textarea
              className={styles.inputStyles2}
              placeholder="Note about your order, e.g. special notes for delivery."
            ></textarea>
          </div>
        </form>
      </div>

      <div className={styles.orderSummary}>
        <h2>YOUR ORDER</h2>
        <table>
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Counterfeit €5 Euro Bills - 3,000 Euro * 2</td>
              <td>$620.00</td>
            </tr>
            <tr>
              <td>Subtotal</td>
              <td>$620.00</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>
                <div className={styles.radioGroup}>
                  <input
                    type="radio"
                    id="free-shipping"
                    name="shipping"
                    checked
                  />
                  <label htmlFor="free-shipping">Free shipping (2 days)</label>
                </div>
                <div className={styles.radioGroup}>
                  <input type="radio" id="standard-shipping" name="shipping" />
                  <label htmlFor="standard-shipping">
                    Standard Shipping (1 to 2 days): $30.00
                  </label>
                </div>
                <div className={styles.radioGroup}>
                  <input type="radio" id="express-shipping" name="shipping" />
                  <label htmlFor="express-shipping">
                    Express Shipping (Overnight): $50.00
                  </label>
                </div>
              </td>
            </tr>
            <tr>
              <td>Total</td>
              <td>$620.00</td>
            </tr>
          </tbody>
        </table>

        <div className={styles.paymentOption}>
          <input type="radio" id="bitcoin" name="payment" checked />
          <label htmlFor="bitcoin">Bitcoin - BTC</label>
          <p>
            To complete your order, send payments to the bitcoin address shown
            during checkout.
          </p>
        </div>
      </div>
    </div>
  );
}
