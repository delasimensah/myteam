import React from "react";

const Input = ({ type, placeholder }) => {
  return (
    <>
      {type === "textarea" ? (
        <textarea
          name="message"
          id=""
          cols="30"
          rows="5"
          placeholder="Message"
          className="w-full bg-transparent border-b border-white placeholder-lightGrey focus:outline-none focus:border-rapBlue"
        ></textarea>
      ) : (
        <input
          type={type}
          className="z-10 w-full p-2 bg-transparent border-b border-white placeholder-lightGrey focus:outline-none focus:border-rapBlue"
          placeholder={placeholder}
        />
      )}
    </>
  );
};

export default Input;
