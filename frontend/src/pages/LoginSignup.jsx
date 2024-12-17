import React from "react";

export default function LoginSignup() {
  return (
    <div
      style={{
        padding: "50px ",
      }}
    >
      <div
        className="signup-form w-50 m-auto p-5"
        style={{
          backgroundColor: "var(--three)",
        }}
      >
        <h3 className="fw-semibold">Sign Up</h3>
        <form action="" className="d-flex flex-column ">
          <input type="text" placeholder="Your Name" className="my-2 p-2" />
          <input type="email" placeholder="Your Email" className="my-2 p-2" />
          <input
            type="password"
            placeholder="Your password"
            className="my-2 p-2"
          />
          <button className="btn btn-danger rounded-0">Sign Up</button>
        </form>
        <div className="signupLogin my-3">
          <p className="text-black-50">
            Already have an account ?
            <span className="fw-semibold text-danger"> Login Here</span>
          </p>
          <div className="signup-agree d-flex align-items-center">
            <input type="checkbox" id="accept" />
            <label className="ms-3 text-black-50" htmlFor="accept">
              I Accept the terms of use & privacy policy
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
