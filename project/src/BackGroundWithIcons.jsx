import React from "react";
import backgroundImage from './images/service.jpg';
import icon1 from './images/Smash-Icon.png';
import icon2 from './images/Innovations.png';
import icon3 from './images/fresh.png';
const BackgroundWithIcons = () => {    
    return (
        <>
            <div
                className="bg-image"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "50vh", // Adjust the height as needed
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                }}
            >
                {/* Icon 1 */}
                <div
                    style={{
                        width: "150px", // Adjust the icon size as needed
                        height: "150px", // Adjust the icon size as needed
                        position: "absolute",
                        top: "30%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                    }}
                >
                    <img
                        src={icon1}
                        alt="Icon 1"
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                    <h3 className="Icons_heading">Smash Technique</h3>
                    <p className="Icons_para">"Our flavorful patties are perfected through our unique smashing technique."</p>
                </div>

                {/* Icon 2 */}
                <div
                    style={{
                        width: "150px", // Adjust the icon size as needed
                        height: "150px", // Adjust the icon size as needed
                        position: "absolute",
                        top: "30%",
                        left: "70%", // Adjust the position as needed
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                    }}
                >
                    <img
                        src={icon2}
                        alt="Icon 2"
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                    <h3 className="Icons_heading">Innovation</h3>
                    <p className="Icons_para">"We strive to bring a new taste to our customers."</p>
                </div>

                {/* Icon 3 */}
                <div
                    style={{
                        width: "150px", // Adjust the icon size as needed
                        height: "150px", // Adjust the icon size as needed
                        position: "absolute",
                        top: "30%",
                        left: "30%", // Adjust the position as needed
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                    }}
                >
                    <img
                        src={icon3}
                        alt="Icon 3"
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                    <h3 className="Icons_heading">Freshly Prepeared</h3>
                    <p className="Icons_para">"Quality is something that you never have to doubt."</p>
                </div>
            </div>
        </>
    );




};
export default BackgroundWithIcons;