import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "../components";

// avatar can get from here(avatar_url)
// https://api.github.com/users/akimabs

const RandomTestimonial = () => {
    const [data, setData] = useState(false);

    const getRandomTestimonial = async () => {
        const response = await axios.get("https://testimonialapi.toolcarton.com/api/1");
        try {
            if (response.status === 200) {
                setData(response.data);
            }
        } catch (error) {
            throw Error("Error while fetching", error);
        }
    };

    useEffect(() => {
        getRandomTestimonial();
    }, []);

    return (
        <Card
            data={{
                username: "agungjsp",
                avatar: "https://avatars.githubusercontent.com/u/30463526?v=4",
                apiUrl: "https://testimonialapi.toolcarton.com/api",
                apiName: "Testimonial API",
                apiDescription:
                    "Testimonial API offers dummy testimonial data for 10 random users, including user ID, user name, location, designation, avatar, message and rating.",
            }}
        >
            <hr style={{ margin: "1rem 0" }} />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036"
            >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zm-819 856.3c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
            </svg>
            <p style={{ fontFamily: "sans-serif" }}>{data.message}</p>
            <div style={{ display: "inline-flex", alignItems: "center", marginTop: "12px" }}>
                <img
                    alt="avatar"
                    src={data.avatar}
                    style={{
                        width: "3rem",
                        height: "3rem",
                        objectPosition: "center",
                        objectFit: "cover",
                        borderRadius: "9999px",
                        flexShrink: "0",
                        marginRight: "1rem",
                    }}
                ></img>
                <span
                    style={{
                        fontFamily: "sans-serif",
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: "1",
                    }}
                >
                    <span style={{ fontWeight: "bold" }}>{data.name}</span>
                    <span style={{ fontSize: "14px" }}>{data.designation}</span>
                </span>
            </div>
        </Card>
    );
};

export default RandomTestimonial;
