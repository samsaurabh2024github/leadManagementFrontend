import UserNavbar from "../userview/UserNavbar";
import bannerImage from "../assets/urbanBanner1.webp";

import {
  FaCar,
  FaUsers,
  FaAward,
  FaBus,
  FaRoute,
  FaBuilding
} from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Footer from "./Footer";

export default function ServicesPage() {
  const services = [
    {
      title: "Car Rental",
      desc: "Comfortable sedans & hatchbacks for daily travel, airport transfers & city rides.",
      icon: FaCar
    },
    {
      title: "Luxury Car & SUV",
      desc: "Premium SUVs and luxury cars for business travel & special occasions.",
      icon: FaAward
    },
    {
      title: "Tempo Traveller",
      desc: "Spacious tempo travellers ideal for group trips and outstation travel.",
      icon: FaUsers
    },
    {
      title: "Force Urbania",
      desc: "Next-gen luxury traveller for corporate & premium group transport.",
      icon: FaBus
    },
    {
      title: "Mini Bus",
      desc: "Safe and comfortable minibuses for schools, offices & tours.",
      icon: FaRoute
    },
    {
      title: "Luxury Bus",
      desc: "High-end luxury buses with reclining seats and onboard amenities.",
      icon: FaBuilding
    }
  ];

  return (
    <div className="bg-white">
      <UserNavbar />

      {/* HERO */}
      <section
        className="pt-24 min-h-[50vh] flex items-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

        <div className="relative max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Rental Services
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Premium vehicles and professional drivers for every travel requirement.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-14">
            Choose Your Ride
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
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.desc}
                  </p>

                  <span className="text-green-600 font-semibold flex items-center gap-1 cursor-pointer">
                    Get Quote <FiChevronRight />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-6 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-14">
          Perfect for Every Occasion
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Corporate Travel",
            "Airport Transfers",
            "Wedding & Events",
            "Outstation Trips",
            "School & College Tours",
            "Employee Transportation",
            "Religious Tours",
            "Luxury Travel"
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-6 text-center hover:bg-green-600 hover:text-white transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Need a Custom Travel Solution?
          </h2>
          <p className="text-green-100 mb-8">
            Our team will help you choose the best vehicle for your needs.
          </p>

          <button className="bg-white text-green-600 px-10 py-4 rounded-full font-semibold hover:scale-105 transition">
            Contact Us
          </button>
        </div>
      </section>

      <Footer/>
    </div>
  );
}
