import UserNavbar from "../userview/UserNavbar";
import bannerImage from "../assets/urbanBanner1.webp";

import { FiMapPin, FiChevronRight } from "react-icons/fi";
import { FaCar, FaUsers, FaAward, FaClock } from "react-icons/fa";
import Footer from "./Footer";

export default function HomePage() {
  const cities = [
    "Mumbai", "Pune", "Thane", "Delhi", "Noida", "Gurgaon",
    "Ghaziabad", "Agra", "Varanasi", "Lucknow", "Jaipur",
    "Dehradun", "Ahmedabad", "Chandigarh", "Bangalore"
  ];

  const services = [
    { title: "Car Rental", icon: FaCar },
    { title: "Luxury Car & SUV", icon: FaAward },
    { title: "Tempo Traveller", icon: FaUsers },
    { title: "Force Urbania", icon: FaUsers },
    { title: "Mini Bus", icon: FaUsers },
    { title: "Luxury Bus", icon: FaAward }
  ];

  const stats = [
    { number: "15+", label: "Operational Cities" },
    { number: "1,000+", label: "Total Vehicles" },
    { number: "10,000+", label: "Happy Customers" },
    { number: "100+", label: "Corporate Clients" }
  ];

  return (
    <div className="bg-white">
      <UserNavbar />

      {/* HERO */}
      <section
        className="pt-24 min-h-[90vh] flex items-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Premium Bus & Car Rentals <br />
              <span className="text-green-400">Across India</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-10">
              Reliable, luxury & affordable travel solutions in 15+ cities.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-semibold transition shadow-lg">
                Book Your Ride
              </button>

              <button className="border border-white/40 hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold transition">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className=" relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-extrabold text-green-600">
                  {stat.number}
                </div>
                <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-extrabold mb-6">
              Trusted Travel Partner Since 2019
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Urban Cruise is a tech-enabled car & bus rental platform offering
              premium travel solutions for individuals, corporates and groups.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <FaAward className="text-green-600 text-xl" />
                Premium Fleet
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-green-600 text-xl" />
                24/7 Support
              </div>
              <div className="flex items-center gap-3">
                <FaUsers className="text-green-600 text-xl" />
                Trained Drivers
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-green-800 text-white p-10 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Why Urban Cruise?</h3>
            <p className="text-green-100 leading-relaxed">
              From airport transfers to corporate travel and luxury buses,
              we deliver comfort, safety and reliability at scale.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 ">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-14">
            Our Rental Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition hover:-translate-y-2"
                >
                  <div className="bg-green-100 w-14 h-14 flex items-center justify-center rounded-xl mb-6">
                    <Icon size={26} className="text-green-600" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">
                    Comfortable, clean and premium vehicles for every journey.
                  </p>

                  <span className="text-green-600 font-semibold flex items-center gap-1 cursor-pointer">
                    View Details <FiChevronRight />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CITIES */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Available in 15+ Cities
        </h2>

        <div className="flex flex-wrap gap-4 justify-center">
          {cities.map(city => (
            <div
              key={city}
              className="flex items-center gap-2 px-4 py-2 border rounded-xl hover:bg-green-600 hover:text-white transition"
            >
              <FiMapPin />
              {city}
            </div>
          ))}
        </div>
      </section>

      <Footer/>
    </div>
  );
}
