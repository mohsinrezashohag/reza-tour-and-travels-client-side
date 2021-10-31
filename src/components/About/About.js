import React from 'react';
import AboutImage from '../../images/bali-bg.jpg'

const About = () => {
    return (
        <div className="container">
            <h2 className="section-heading">About Our Agency & Our Policy</h2>

            <div className="row my-5">

                <div className="col-md-6">
                    <img className="img-fluid" src={AboutImage} alt="" />
                </div>
                <div className="col-md-6">
                    <div className="my-2">
                        <h3>Our Solo Tour Package Details</h3>
                        <p>The market for solo tourism products in Europe is booming. The number of singles is growing, as is the number of people that travel solo by choice. They increasingly tend to visit developing countries, seeking adventures, relaxation, solitude or connection. Self-development and unique experiences are important aspects of solo travel. Personal guided tours are especially popular.</p>
                    </div>

                    <div>
                        <h3>Our Family Tour Package Details</h3>
                        <p>Family is the most important thing in everyone’s life. It is the anchor that holds and binds all together. Sharing happy times and supporting each other through the rough times is what makes a family so important. Today, lives move at a staggering speed and more often than not, people just don’t have enough time for each other. Barring the occasional movie and dinner outings, everyone is busy in their own lives. This is where family tour packages come as saviours. Especially in India, a family holiday package can be an outlet to have a great time together</p>
                    </div>

                </div>
            </div>

            <div className="row my-5">



                <div className="col-md-6">
                    <div className="my-5">
                        <h3>How You Will Get Your Ticket,Accomodation Service ?</h3>
                        <p>When it comes to travel, we know that it can be daunting when there are a thousand things to consider and lots and lots of planning to do.

                            So, when it comes to booking your flights and knowing what you need to make the purchase as simple as possible, we have made the online process easy, convenient and secure.

                            Enter departure and arrival cities, and select travel dates,
                            Browse flight options and select your ideal flight,
                            Insert correct passenger details (as per ID),
                            Select any additional add-ons like insurance or extra baggage,
                            Confirm your preferred payment method,
                            Receive your e-ticket straight to your inbox. Off you go!
                        </p>
                    </div>

                    <div>
                        <h3>How You Would Be Connected To Us ?</h3>
                        <p>To book your flights online, you will need some basic information of the destination you’ll be flying to, and your departure and return dates. You will, of course, also need all of your personal details that will appear on your flight ticket. To speed up the booking, it’s a good idea to have all of these details at hand.

                            Trip details
                            Personal information – Full names (to be spelled exactly as it is in your ID or passport), date of birth, country of residence
                            ID number
                            Ideal departure times and length of flights (do you prefer a direct flight or are you happy with connections?)
                            Preferred cabin class
                        </p>
                    </div>

                </div>

                <div className="col-md-6">
                    <img className="img-fluid" src={AboutImage} alt="" />
                </div>

            </div>


        </div>
    );
};

export default About;