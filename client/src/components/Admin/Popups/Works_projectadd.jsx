import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faPlus, faPen } from '@fortawesome/free-solid-svg-icons';
export default function ProjectDetailsForm(props) {
  const [showModal, setShowModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState("");
   const [project , setProject] = useState({
    projectname:"",
    photo:"",
    skill:[],
    description:""
   })
   const [currentSkill,setCurrentSkill] = useState("");
  const handleAddSkill = () => {
    if (currentSkill.trim() !== "") {
      setProject({...project, skill:[...project.skill,currentSkill.trim()]});
      setNewSkill("");
      // addservicework()
    }
  };
  async function addservicework(ev){
    const data = new FormData();
    data.set('serviceName',projectName);
    data.set('skills',skills);
    data.set('newSkill',newSkill);
    data.set('photo',photo);
    data.set('description',description);
    ev.preventDefault();
    const response = await fetch('http://localhost:5000/api/Services/works', {
        method:'POST',
        body: data,
        credentials: "include"
    });
    if(response.ok){
        console.log("project added");
    }
  }

  const handleRemoveSkill = (index) => {
    console.log("hiiiii");
    const newskills = project.skill.filter((_, i) => i !== index);
    setProject({
      ...project,
      skill: newskills
    });
  };
  

  const handleUpdate = () => {
    // Additional logic for handling the update
    addProject();
    setShowModal(false); // Close the modal after updating
  };
  const addProject = async () => {
    const formData = new FormData();
    formData.append('projectname', project.projectname);
    formData.append('description', project.description);
    formData.append('photo', project.photo); // Assuming `project.photo` is a File object
       console.log("formdata",formData);
    // Append each skill as a separate entry with the same key
    project.skill.forEach((skill) => formData.append('skill', skill));
  
    try {
      const response = await fetch('https://portfolio-website-48v8.onrender.com/api/work/projects/', {
        method: 'POST',
        body: formData,
        // credentials: "include" // Uncomment if needed
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
  
      const result = await response.json();
      console.log(result);
      props.setProject([...props.project,result]);
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };
  
  

  return (
    <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Project Details
      </button> */}
         <button className='flex self-start  mt-4 items-center justify-center w-[90%] sm:max-w-[319px] h-[50px] text-[15px] font-[600] bg-[#EAFCFF] butt rounded-[10px] border-[1px] border-[#1395DF] border-dashed text-[#1395DF]' onClick={()=>setShowModal(true)}> <FontAwesomeIcon icon={faPlus} className='mr-2' /> Add Projects</button>
      {showModal && (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-center justify-between p-5">
                <h3 className="text-3xl font-bold text-center flex-1">
                  Works
                </h3>
                <button
                  className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <IoClose />
                </button>
              </div>
              <div className="relative p-6 flex-auto">
                <h4 className="my-4 text-blueGray-500 text-lg font-bold leading-relaxed">
                  Project Name
                </h4>
                <input
                  type="text"
                  value={project.projectname}
                  onChange={(e) => setProject({...project,projectname:e.target.value})}
                  placeholder="Enter project name"
                  className="w-full bg-gray-100 border border-[#006BC2] rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 mb-4"
                />
                <h4 className="my-4 text-blueGray-500 text-lg font-bold leading-relaxed">
                  Skills
                </h4>
                <div className="flex items-center mb-4">
                  <input
                    type="text"
                    value={currentSkill}
                    onChange={(e) => setCurrentSkill(e.target.value)}
                    placeholder="Enter skill"
                    className="w-full bg-gray-100 border border-[#006BC2] rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 mr-2"
                  />
                  <button
                    className="bg-[#006BC2] text-white text-sm py-3 px-4 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none"
                    onClick={handleAddSkill}
                  >
                    Add Skill
                  </button>
                </div>
                <div className="flex flex-wrap mb-4">
                  {project.skill.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 border border-[#006BC2] rounded-xl px-4 py-2 text-sm text-gray-700 mr-2 mb-2 flex items-center"
                    >
                      {skill}
                      <button
                        className="ml-2 text-sm text-red-600"
                        onClick={() => handleRemoveSkill(index)}
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
                <h4 className="my-4 text-blueGray-500 text-lg font-bold leading-relaxed">
                  Photo
                </h4>
                <input
                  type="file"
                
                  onChange={(e) => setProject({...project,photo:e.target.files[0]})}
                  className="mb-4"
                />
                <h4 className="my-4 text-blueGray-500 text-lg font-bold leading-relaxed">
                  Description
                </h4>
                <textarea
                  value={project.description}
                  onChange={(e) => setProject({...project,description:e.target.value})}
                  placeholder="Enter project description"
                  className="w-full h-32 bg-gray-100 border border-[#006BC2] rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
                />
              </div>
              <div className="flex items-center justify-end p-6">
                <button
                  className="bg-[#006BC2] text-white active:bg-blue-800 text-sm py-3 px-10 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1"
                  type="button"
                  onClick={handleUpdate}
                >
                  Add 
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && (
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      )}
    </>
  );
}
