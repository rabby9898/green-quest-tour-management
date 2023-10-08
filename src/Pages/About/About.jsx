import aboutImg from "../../../public/undraw_personal_website_re_c8dv.svg";
import aboutImg2 from "../../../public/undraw_wait_in_line_o2aq.svg";
const About = () => {
  return (
    <div className="px-3 md:px-10 lg:px-36 py-5 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center content-center gap-3 md:gap-8">
        <div className="col-span-1">
          <img src={aboutImg} alt="about us" />
        </div>
        <div className=" col-span-1">
          <h1 className="text-2xl text-black font-semibold">About Us</h1>
          <p className="text-base text-gray-500 my-10">
            Welcome to Green Quest Travel At we are passionate about creating
            unforgettable travel experiences. Our mission is to inspire and
            assist travelers in discovering the world's most exciting
            destinations, all while providing exceptional service and support.
          </p>
          <h1 className="text-2xl text-black font-semibold">Who We Are</h1>
          <p className="text-base text-gray-500 my-10">
            We are a team of dedicated adventurers, travel enthusiasts, and
            experts who have explored corners of the globe and want to share our
            passion with you. With years of experience in the travel industry,
            we've carefully curated a selection of unique and captivating travel
            adventures to suit every wanderer's heart.
          </p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center content-center gap-3 md:gap-8 my-20">
          <div className=" col-span-1">
            <h1 className="text-2xl text-black font-semibold">Why Choose Us</h1>
            <ul>
              <li className="text-base text-gray-500 my-10">
                <p>
                  <span className="text-bold">Expertise:</span> Our team
                  consists of seasoned travelers and experts who have a deep
                  understanding of the destinations we offer.
                </p>
              </li>
              <li className="text-base text-gray-500 my-10">
                <p>
                  <span className="text-bold">Variety:</span>Whether you're a
                  solo traveler, a couple seeking a romantic getaway, or a
                  family looking for an adventure, we have a diverse range of
                  options to suit your preferences.
                </p>
              </li>
              <li className="text-base text-gray-500 my-10">
                <p>
                  <span className="text-bold">Safety:</span> We prioritize your
                  safety during your travels. We partner with reputable tour
                  operators and accommodations to ensure a secure and enjoyable
                  experience.
                </p>
              </li>
            </ul>

            <h1 className="text-2xl text-black font-semibold">Get in Touch</h1>
            <p className="text-base text-gray-500 my-10">
              We're here to answer your questions, provide recommendations, and
              assist with your travel plans. Feel free to contact us anytime via
              email, phone, or through our website's chat support. Join us in
              discovering the beauty of the world and creating memories that
              will last a lifetime. Let's embark on your next adventure
              together!
            </p>
          </div>
          <div className="col-span-1">
            <img src={aboutImg2} alt="about us" />
          </div>
        </div>
      </div>
      <div className="flex justify-center mx-auto items-center">
        <div className="text-center">
          <h1 className="text-4xl text-black font-semibold">Contact Us</h1>
          <h1 className="text-xl text-black font-semibold mt-5">Phone</h1>
          <p className="mt-3">Phone:+99439458395</p>
          <p>Customer Support::585</p>
          <h1 className="text-xl text-black font-semibold mt-5">Email</h1>
          <p className="mt-3">Email: Greenquest@yahoo.com</p>
          <h1 className="text-xl text-black font-semibold mt-5">Address</h1>
          <p className="mt-3">
            1234 Elm Street Springfield, Anytown 56789 Fictional Country
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
