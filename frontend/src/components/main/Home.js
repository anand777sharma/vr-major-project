import React from 'react'
// import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
 <>
 <>
  {/* Background image */}
  <div
    className="p-5 text-center bg-image"
    style={{
      backgroundImage:
        'url("https://usv.edu/wp-content/uploads/2021/06/virtual-reality-vr-e1624313135975.jpg")',
      height: 620,
      marginTop: 58
    }}
  >
    <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
      <div className="d-flex justify-content-center  align-items-center h-100">
        <div className="text-white">
          <h1 className="mb-3">Heading</h1>
          <h4 className="mb-3 ">VR-All-Art is a platform that allows you to effortlessly establish
           Virtual Reality exhibits and sell artworks without regard for time, location, or country.</h4>
          <a className="btn btn-outline-light btn-lg" href="#!" role="button">
            Call to action
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Background image */}
</>
<>
  <button onclick="topFunction()" id="myBtn" title="Go to top">
    Top
  </button>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n\n#myBtn {\n  display: none; /* Hidden by default */\n  position: fixed; /* Fixed/sticky position */\n  bottom: 20px; /* Place the button at the bottom of the page */\n  right: 30px; /* Place the button 30px from the right */\n  z-index: 99; /* Make sure it does not overlap */\n  border: none; /* Remove borders */\n  outline: none; /* Remove outline */\n  background-color: red; /* Set a background color */\n  color: white; /* Text color */\n  cursor: pointer; /* Add a mouse pointer on hover */\n  padding: 15px; /* Some padding */\n  border-radius: 10px; /* Rounded corners */\n  font-size: 18px; /* Increase font size */\n}\n\n#myBtn:hover {\n  background-color: #555; /* Add a dark-grey background on hover */\n}\n<style/>\n"
    }}
  />
</>

   </>

  )
}

export default Home