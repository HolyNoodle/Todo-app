export const allProjects = [];

function project(title) {
  this.title = title;
}

export const projectModal = () => {
  let modal = document.querySelector("#projectModal");
  modal.showModal();
};

export const submitProject = () => {
  // Grabbing the value of the input
  let projectName = document.getElementById("projectName");
  let storedProjectName = new project(projectName.value);

  //Storing info into object
  let projectInfo = {
    title: storedProjectName.title,
    element: "",
    tasks: []
  };
  allProjects.push(projectInfo);

  //Clearing the input
  projectName.value = "";
};
