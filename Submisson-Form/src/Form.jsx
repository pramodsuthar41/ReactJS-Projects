import { useState } from "react";
import "./App.css";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      subjects,
      selectedOption,
      resume,
      url,
      about,
    );
  };

const handleSubjectChange = (sub) => {
  setSubjects((prev) => ({
    ...prev,
    [sub]: !prev[sub],
  }));
};
  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    });
    setResume("");
    setUrl("");
    setSelectedOption("")
    setAbout("")
  };

  return (
    <>
      <div className="App">
        <h1>Forms in React</h1>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="firstname">First Name*</label>
          <input
            id="firstname"
            name="firstname"
            type="text"
            value={firstName}
            placeholder="Enter First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastname">Last Name*</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastName}
            placeholder="Enter Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="contact">Contact*</label>
          <input
            type="number"
            name="contact"
            id="contact"
            value={contact}
            placeholder="Enter Mobile Number"
            onChange={(e) => setContact(e.target.value)}
          />
          <label htmlFor="gender">Gender*</label>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
          <input
            type="radio"
            name="gender"
            id="others"
            value="others"
            checked={gender === "others"}
            onChange={(e) => setGender(e.target.value)}
          />
          others
          <label htmlFor="subject">Your best subject</label>
          <input
            type="checkbox"
            name="subject"
            id="english"
            checked={subjects.english}
            onChange={() => handleSubjectChange("english")}
          />
          English
          <input
            type="checkbox"
            name="subject"
            id="maths"
            checked={subjects.maths}
            onChange={() => handleSubjectChange("maths")}
          />
          Maths
          <input
            type="checkbox"
            name="subject"
            id="physics"
            checked={subjects.physics}
            onChange={() => handleSubjectChange("physics")}
          />
          Physics
          <label htmlFor="resume">Upload Resume</label>
          <input
            type="file"
            name="resume"
            id="resume"
            onChange={(e) => setResume(e.target.files[0])}
          />
          <label htmlFor="url">Enter URL*</label>
          <input
            type="text"
            name="url"
            id="url"
            value={url}
            placeholder="Enter url"
            onChange={(e) => setUrl(e.target.value)}
          />
          <label htmlFor="choice">Select your choice</label>
          <select
            name="choice"
            id="choice"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="sde">Software Developement Engineer</option>
            <option value="da">Data Analyst</option>
            <option value="ai">AI Engineer</option>
          </select>
          <label htmlFor="about">About</label>
          <textarea
            name="about"
            id="about"
            value={about}
            placeholder="About yourself"
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
          <label>Submit or Reset</label>
          <button type="button" value="reset" onClick={handleReset}>
            Reset
          </button>
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
