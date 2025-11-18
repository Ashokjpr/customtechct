import React, { useState } from 'react'
import Contbg from '../assets/images/contbg.png'

function Conc1() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        updates: false,
        agree: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Form Submitted Successfully!");
    };

    return (
        <div className='d-flex  ' style={{

            backgroundImage: `url(${Contbg})`,
            backgroundSize: "cover",
            // backgroundPosition: "center",
        }} >

          <div className='container mt-5'>
              <form data-aos="zoom-in-up"
                onSubmit={handleSubmit}
                className=" border bg-white my-5 p-4 shadow-lg rounded col-12 col-md-9"
            >
                <h2 className=" mb-4 border-bottom pb-2" style={{color:"rgb(1, 1, 104)"}}>
                    Contact Us<span className="text-primary">.</span>
                </h2>

                <div className="row g-3 mt-5">
                    <div className="col-md-6">
                        <input
                            type="text"
                            name="firstName"
                            className="form-contro outline-none  border-0 border-bottom fs-4 col-12 mb-3"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="text"
                            name="lastName"className="form-contro outline-none  border-0 border-bottom fs-4 col-12 mb-3"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <input
                            type="email"
                            name="email"
                            className="form-contro outline-none  border-0 border-bottom fs-4 col-12 mb-3"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="tel"
                            name="phone"
                            className="form-contro outline-none  border-0 border-bottom fs-4 col-12 mb-3"
                            placeholder="Contact No."
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-12">
                        <input
                            type="text"
                            name="company"
                            className="form-contro outline-none  border-0 border-bottom fs-4 col-12 mb-3"
                            placeholder="Company Name"
                            value={formData.company}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-12">
                        <textarea
                            name="message"
                            rows="4"
                            className="form-contro outline-none  border-0 border-bottom fs-4 col-12 mb-3 text-b"
                            placeholder="Something about your project"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <div className="col-md-12 form-check mt-3">
                        <input
                            type="checkbox"
                            name="updates"
                            className="form-check-input"
                            checked={formData.updates}
                            onChange={handleChange}
                        />
                        <label className="form-check-label">
                            I would like to receive updates from CustomTechLabs.
                        </label>
                    </div>

                    <div className="col-md-12 form-check mt-3">
                        <input
                            type="checkbox"
                            name="agree"
                            className="form-check-input"
                            required
                            checked={formData.agree}
                            onChange={handleChange}
                        />
                        <label className="form-check-label">
                            I confirm I have read and agree to the{" "}
                            <a
                                href="https://www.yourwebsite.com/privacy-policy"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "underline" }}
                            >
                                Privacy Policy
                            </a>
                            .
                        </label>
                    </div>

                    <div className="col-md-12 text-center mt-4">
                        <button type="submit" className="btn btn-primary fs-4 px-5 py-2 text-uppercase">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
          </div>

        </div>

    )
}

export default Conc1
