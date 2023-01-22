import React from 'react'

const ContactUs = () => {
  return (
    <div>
  <>
  <div className="container">
    <div style={{ textAlign: "center" }}>
      <h2>Contact Us</h2>
    </div>
    <div className="row">
    <div className="column">
        <img src="https://www.verywellmind.com/thmb/sWn8EXOhPWATXoTP-5_-LRwsiZQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/woman-wearing-virtual-reality-headset-cf62fa3e2a6b49ce93df3e3cffa60fb7.jpg" style={{ width: "200%" ,height:"100%" }} />
      </div>
    <div className="column">
        <form action="/action_page.php">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />
          <label htmlFor="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
          <label htmlFor="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{ height: 170 }}
            defaultValue={""}
          />
          <input type="submit" defaultValue="Submit" />
        </form>
      </div>
      
    
    </div>
  </div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '* {\n  box-sizing: border-box;\n}\n\n/* Style inputs */\ninput[type=text], select, textarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  margin-top: 6px;\n  margin-bottom: 16px;\n  resize: vertical;\n}\n\ninput[type=submit] {\n  background-color: #04AA6D;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  cursor: pointer;\n}\n\ninput[type=submit]:hover {\n  background-color: #45a049;\n}\n\n/* Style the container/contact section */\n.container {\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 10px;\n}\n\n/* Create two columns that float next to eachother */\n.column {\n  float: left;\n  width: 50%;\n  margin-top: 6px;\n  padding: 20px;\n}\n\n/* Clear floats after the columns */\n.row:after {\n  content: "";\n  display: table;\n  clear: both;\n}\n\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .column, input[type=submit] {\n    width: 100%;\n    margin-top: 0;\n  }\n}\nEver heard about W3Schools S\n<style/>\n'
    }}
  />
</>



    </div>
  )
}

export default ContactUs