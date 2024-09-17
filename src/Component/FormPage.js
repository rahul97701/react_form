
import { useState } from 'react';
function FormPage() {
  
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
     const [selectOption, setSelectOption] = useState("")
     const [about, setAbout] = useState("")

     const handleSubjectChange = (sub) => {
      setSubjects((prev) => ({
         ...prev,
         [sub] : !prev[sub]
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
setSelectOption("");
setAbout("");
}

   const handleSubmit = (e) => {
       e.preventDefault();
       console.log(
         firstName,
         lastName,
         email,
         contact,
         gender,
         selectOption,
         subjects,
         resume,
         url,
         about
       );
   };

     return (
        <div className="reactForm">
           <h1>React Form</h1>
           <form onSubmit={handleSubmit}>
             <label for="firstname"></label>
                <input 
                type="text"
                name="firstname"
                placeholder="Enter First Name" 
                value={firstName}
                onChange={(e) =>
                  setFirstName(e.target.value)
                }
                required/>
                First Name
             
             <label for="lastname"> </label>
             <input 
                type="text"
                name="lasttname"
                value={lastName}
                placeholder="Enter Lastt Name"
                onChange={(e) =>
                  setLastName(e.target.value)
                } 
                required/>
                Last Name
            
             <label for="email"> </label>
             <input 
                type="email"
                name="email"
                value={email}
                placeholder="Enter Email" 
                onChange={(e) => 
                  setEmail(e.target.value)
                }
                required/>
                Enter Email
            
             <label for="tel"></label>
             <input 
                type="tel"
                name="contact"
                value={contact}
                placeholder="Enter Mobile Number" 
                onChange={(e) =>
                  setContact(e.target.value)
                }
                required/>
                Contact
             
             <label for="gender">Gender</label>
             <input 
                type="radio"
                name="gender"
                value="male"
                id="male"
                checked={gender === "male"}
                onChange={(e) =>
                  setGender(e.target.value)
                }
                />
                Male
                <input 
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked={gender === "female"}
                onChange={(e) =>
                  setGender(e.target.value)
                }/>
                Female
                <input 
                type="radio"
                name="gender"
                id="other"
                value="other"
                checked={gender === "other"}
                onChange={(e) =>
                  setGender(e.target.value)
                }/>
                Other
            <label for="subject">
                Your Best Subject
             </label>
             <input 
             type="checkbox"
             name="subject"
             id="english"
             checked = {subjects.english === true}
             onChange={(e) =>
               handleSubjectChange("english")
             }
             />
             English
             <input 
             type="checkbox"
             name="subject"
             id="maths"
             checked = {subjects.maths === true}
             onChange={(e) =>
               handleSubjectChange("maths")
             }
             />
             Maths
             <input 
             type="checkbox"
             name="subject"
             id="Physics"
             checked = {subjects.physics === true}
             onChange={(e) =>
               handleSubjectChange("physics")
             }
             />
             Physics
             <label for="resume">
                Upload Resume
             </label>
             <input 
             type="resume"
             name="resume"
             id="resume"
             onChange={(e) =>
               setResume(e.target.resume[0])
             }
             placeholder="Enter Upload File"
             required
             />
             <label for="url">
                Enter URL
             </label>
             <input
             type="url"
             name="url"
             id="url"
             onChange={(e) => 
               setUrl(e.target.value)
             }
             placeholder="Enter Upload File"
             required
             />
             <label for="choice">
                Select your choice
             </label>
             <label for="about">
                About
             </label>
             <input 
             placeholder="About your self"/>
             <button
             type="reset"
             value="reset"
             onClick={() => handleReset}>
                Reset
             </button>
             <button
             type="submit"
             value="submit"
             onClick={() => handleSubmit}>
                Reset
             </button>
           </form>
        </div>
    );
}

export default FormPage();