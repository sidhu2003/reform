import React, { useEffect } from "react";
import styles from "./styles.module.css";
import image1 from "./Images/place your image.png";
import image2 from "./Images/place your image (1).png";
import image3 from "./Images/place your image (2).png";
import image4 from "./Images/place your image (3).png";
import image5 from "./Images/place your image (4).png";
import image6 from "./Images/place your image (5).png";
import { useSearchParams } from "react-router-dom";

export default function Services() {
  const [query, setQuery] = useSearchParams();

  useEffect(() => {
    const ele = document.getElementById(`service-${query.get("service")}`);
    document.getElementById("service-1").classList.remove(styles.active);
    document.getElementById("service-2").classList.remove(styles.active);
    document.getElementById("service-3").classList.remove(styles.active);
    document.getElementById("service-4").classList.remove(styles.active);
    document.getElementById("service-5").classList.remove(styles.active);
    document.getElementById("service-6").classList.remove(styles.active);
    ele.classList.add(styles.active_ele);
    setQuery((prev) => {
      prev.delete("service");
      return prev;
    });
  }, [query]);

  function setActiveElement(id) {
    document.getElementById("service-1").classList.remove(styles.active);
    document.getElementById("service-2").classList.remove(styles.active);
    document.getElementById("service-3").classList.remove(styles.active);
    document.getElementById("service-4").classList.remove(styles.active);
    document.getElementById("service-5").classList.remove(styles.active);
    document.getElementById("service-6").classList.remove(styles.active);
    document.getElementById(id).classList.add(styles.active_ele);
  }

  function makeAllActive() {
    document.getElementById("service-1").classList.remove(styles.active_ele);
    document.getElementById("service-2").classList.remove(styles.active_ele);
    document.getElementById("service-3").classList.remove(styles.active_ele);
    document.getElementById("service-4").classList.remove(styles.active_ele);
    document.getElementById("service-5").classList.remove(styles.active_ele);
    document.getElementById("service-6").classList.remove(styles.active_ele);
    document.getElementById("service-1").classList.add(styles.active);
    document.getElementById("service-2").classList.add(styles.active);
    document.getElementById("service-3").classList.add(styles.active);
    document.getElementById("service-4").classList.add(styles.active);
    document.getElementById("service-5").classList.add(styles.active);
    document.getElementById("service-6").classList.add(styles.active);
  }

  useEffect(() => {
    document.getElementById("service-1").classList.add(styles.active);
    document.getElementById("service-2").classList.add(styles.active);
    document.getElementById("service-3").classList.add(styles.active);
    document.getElementById("service-4").classList.add(styles.active);
    document.getElementById("service-5").classList.add(styles.active);
    document.getElementById("service-6").classList.add(styles.active);
  }, []);

  return (
    <div
      onMouseOut={() => makeAllActive()}
      className={styles.testimonials_container}
    >
      <h2 className={styles.title}>Our Services</h2>
      <div className={styles.services}>
        <div className={styles.service_block}>
          <div
            onMouseOver={() => setActiveElement("service-1")}
            id="service-1"
            className={styles.service}
          >
            <img src={image1} alt="service" />
            <div className={styles.service_details}>
              <div className={styles.details}>
                <div className={styles.service_title}>Heating Controls</div>
                <div className={styles.service_achievement}>
                  Heating controls are an essential component of home energy
                  management, allowing you to regulate and customise the heating
                  of your home for optimum comfort and efficiency. With advanced
                  heating controls, you can easily adjust the temperature in
                  different zones of your home, set timers for automatic heating
                  or cooling, and even control your heating remotely via smart
                  devices. These systems not only enhance your comfort but also
                  significantly reduce energy waste, leading to lower heating
                  bills and a reduced environmental impact. At Reform, we
                  install state-of-the-art heating controls that integrate
                  seamlessly with your existing systems, ensuring your home is
                  as energy-efficient as possible.
                </div>
              </div>
            </div>
          </div>
          <div
            onMouseOver={() => setActiveElement("service-2")}
            id="service-2"
            className={`${styles.service}`}
          >
            <img src={image2} alt="service" />
            <div className={styles.service_details}>
              <div className={styles.details}>
                <div className={styles.service_title}>
                  Air Source Heat Pumps
                </div>
                <div className={styles.service_achievement}>
                  Air source heat pumps are a cutting-edge solution for
                  efficient home heating and cooling. By extracting heat from
                  the outside air, even in cold weather, these systems convert
                  it to warm air or water for indoor use. This technology not
                  only provides a sustainable way to heat your home but also
                  reduces your carbon footprint and can significantly lower your
                  energy bills. At Reform, we specialise in the installation of
                  high-quality air source heat pumps, designed to provide
                  reliable and cost-effective heating solutions tailored to the
                  unique needs of your property.
                </div>
              </div>
            </div>
          </div>
          <div
            onMouseOver={() => setActiveElement("service-3")}
            id="service-3"
            className={styles.service}
          >
            <img src={image3} alt="service" />
            <div className={styles.service_details}>
              <div className={styles.details}>
                <div className={styles.service_title}>Solar Systems</div>
                <div className={styles.service_achievement}>
                  Solar systems harness the power of the sun to provide clean,
                  renewable energy for your home. By installing solar panels,
                  you can generate your own electricity, significantly reducing
                  your energy bills and dependency on non-renewable power
                  sources. This not only makes your home more environmentally
                  friendly but also offers long-term savings and increases your
                  property’s value. At Reform, we provide expert installation of
                  solar systems, using only the highest quality panels and
                  equipment to ensure maximum efficiency and reliability for
                  years to come.
                </div>
              </div>
            </div>
          </div>
          <div
            onMouseOver={() => setActiveElement("service-4")}
            id="service-4"
            className={styles.service}
          >
            <img src={image4} alt="service" />
            <div className={styles.service_details}>
              <div className={styles.details}>
                <div className={styles.service_title}>
                  Electric Storage Heaters
                </div>
                <div className={styles.service_achievement}>
                  Electric storage heaters are an efficient method of heating
                  your home, particularly suited to taking advantage of off-peak
                  electricity tariffs. By storing thermal energy during cheaper,
                  off-peak periods and releasing it gradually throughout the
                  day, these heaters ensure your home remains warm when you need
                  it most. This can lead to significant cost savings on your
                  energy bills. At Reform, we install advanced electric storage
                  heaters that are not only energy-efficient but also equipped
                  with modern controls for better temperature regulation and
                  increased comfort in your home.
                </div>
              </div>
            </div>
          </div>
          <div
            onMouseOver={() => setActiveElement("service-5")}
            id="service-5"
            className={styles.service}
          >
            <img src={image5} alt="service" />
            <div className={styles.service_details}>
              <div className={styles.details}>
                <div className={styles.service_title}>Boiler Installation</div>
                <div className={styles.service_achievement}>
                  Boiler installation is a crucial service for maintaining an
                  efficient and reliable heating system in your home. At Reform,
                  we specialise in installing a wide range of high-quality
                  boilers that are tailored to fit the specific needs of your
                  household. Whether you're updating an old system or setting up
                  a new one, our expert team ensures that your boiler is
                  installed with precision. This not only optimises your home's
                  heating efficiency but also helps in reducing your energy
                  consumption and costs. We focus on providing durable solutions
                  that enhance comfort and are supported by comprehensive
                  aftercare and maintenance.
                </div>
              </div>
            </div>
          </div>
          <div
            onMouseOver={() => setActiveElement("service-6")}
            id="service-6"
            className={styles.service}
          >
            <img src={image6} alt="service" />
            <div className={styles.service_details}>
              <div className={styles.details}>
                <div className={styles.service_title}>Insulation</div>
                <div className={styles.service_achievement}>
                  Proper insulation is key to enhancing the energy efficiency
                  and comfort of your home. At Reform, we offer a complete range
                  of insulation solutions including underfloor, loft, external
                  and internal wall, and cavity insulation. Underfloor
                  insulation helps prevent heat loss through your floors, while
                  loft insulation is crucial for reducing heat escape through
                  your roof. External and internal wall insulations are
                  effective in maintaining your home’s temperature year-round,
                  and cavity insulation can significantly cut down on heat loss
                  through wall cavities. Each type of insulation we provide is
                  designed to reduce your heating bills, increase your comfort,
                  and lessen your environmental impact. Our expert team ensures
                  that the right insulation is installed to the highest
                  standards, tailored to the specific needs of your property.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
