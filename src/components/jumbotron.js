import React from "react";

export default function Message(props) {
  return (
    <div className="w-full place-items-center mx-4 my-8">
      <div className="flex flex-col bg-blue-100 rounded-md md:px-16 px-4 max-w-2xl">
        <h2 className="text-4xl pt-8 font-light">Hi, all</h2>
        <p className="text-lg py-4 pb-4 font-regular">
          Are you new to React.js? here is the place to try to learn to call API
          using React.js and contribute to open-source. Part of{" "}
          <a
            className="text-green-900 font-semibold"
            href="https://hacktoberfest.digitalocean.com/"
            target="blank"
          >
            Hacktoberfest
          </a>
        </p>
      </div>
    </div>
  );
}
