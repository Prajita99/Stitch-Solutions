export default function Contact() {
  return (
    <>
      <br></br>
      <div className="h1">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-container">
        <form action="#">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstName"
            placeholder="Enter your first name"
          />

          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastName"
            placeholder="Enter your last name"
          />

          <label htmlFor="country">Country</label>
          <select name="country" id="country">
            <option value="nepal">Nepal</option>
            <option value="india">India</option>
          </select>

          <label htmlFor="query">Query</label>
          <textarea
            name="query"
            id="query"
            cols="30"
            rows="10"
            placeholder="Enter your query"
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}
