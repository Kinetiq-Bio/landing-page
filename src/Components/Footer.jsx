import "./Footer.css";

function Footer() {
    return (
        <footer className="Footer">
            <h2>Contact Us</h2>

            <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="b719c2ca-2b33-4db8-bb6f-7d76de2e27f1"></input>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="fname">First Name</label>
                        <input
                            type="text"
                            id="fname"
                            name="firstname"
                            placeholder="First name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lname">Last Name</label>
                        <input
                            type="text"
                            id="lname"
                            name="lastname"
                            placeholder="Last name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="useremail"
                            placeholder="you@email.com"
                        />
                    </div>
                    <input type="submit" value="Submit"></input>
                </div>
            </form>
        </footer>
    );
}

export default Footer;
