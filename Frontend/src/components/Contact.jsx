import React from 'react';
import Navbar from './Navbar';


const Contact = () => {
    return (
        <main>
            <Navbar />
            <section className="contact py-5">
                <div className="container text-center">
                    <h1 className="display-4 mb-4">Contact Us</h1>
                    <div className="row justify-content-center">
                        <div className="col-md-6 mb-4">
                            <div className="card shadow-sm h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Head Branch Address</h5>
                                    <p className="card-text">
                                        EliteGymClub, Near D.Y. Patil College, Akurdi, Pune
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card shadow-sm h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Email</h5>
                                    <p className="card-text">
                                       EliteGymclub@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card shadow-sm h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Phone Number</h5>
                                    <p className="card-text">
                                        +91 800719966 <br />
                                        +91 7558551224
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </main>
    );
};

export default Contact;
