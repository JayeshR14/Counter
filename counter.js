

const increase = () =>{
   
   let project = 0;
   let peoples = 0;
   let onProject = 0;

   let projectD = document.getElementById('project');
   let projectNum = setInterval(()=>{
      
      project += 30;
      if(project >= 4600)
      {
         clearInterval(projectNum);
      }
     projectD.innerHTML = project;

   },)

   let groupD = document.getElementById('groups');
   let projectNum1 = setInterval(()=>{
      peoples += 800;
      if(peoples >= 123560)
      {
         clearInterval(projectNum1);
      }
     groupD.innerHTML = peoples;

   },)

   let onProjectD = document.getElementById('onProject');
   let projectNum2 = setInterval(()=>{
      onProject += 5;
      if(onProject >= 450)
      {
         clearInterval(projectNum2);
      }
     onProjectD.innerHTML = onProject;

   },)
}
increase();