let data = {
  employees: [
    {
      Id:101,
      First_Name: "Antony",
      Preferred_Name: "Antony Morris",
      email: "atony@gmail.com",
      job_title: "Sharepoint practice head",
      phone_no: "123456789",
      skype: "antony@skype",
      Last_Name: "Morris",
      image: "images/anton1.png",
      department: "IT Department",
      location:'india',
    },
    {
      Id:102,
      First_Name: "Helen",
      Preferred_Name: "Helen Zimmerman",
      email: "helen@gmail.com",
      job_title: "Operations manager",
      phone_no: "123456789",
      skype: "helen@skype",
      Last_Name: "Zimmerman",
      image: "images/helen.png",
      department: "IT Department",
      location:'india',
    },
    {
      Id:103,
      First_Name: "Jonathon",
      Preferred_Name: "Jonathon Smith",
      email: "jonathon@gmail.com",
      job_title: "Product manager",
      phone_no: "123456789",
      skype: "jonathon@skype",
      Last_Name: "Smith",
      image: "images/jonathon.png",
      department: "IT Department",
      location:'india',
    },
    {
      Id:104,
      First_Name: "Tami",
      Preferred_Name: "Tami Hopkins",
      email: "tami@gmail.com",
      job_title: "Lead-engineer-Dot Net",
      phone_no: "123456789",
      skype: "tami@skype",
      Last_Name: "Hopkins",
      image: "images/tami.png",
      department: "IT Department",
      location:'india',
    },
    {
      Id:105,
      First_Name: "Franklin",
      Preferred_Name: "Franklin Humark",
      email: "Franklin@gmail.com",
      job_title: "Network Engineer",
      phone_no: "123456789",
      skype: "franklin@skype",
      Last_Name: "Humark",
      image: "images/franklin.png",
      department: "IT Department",
      location:'seattle',
    },
    {
      Id:106,
      First_Name: "Angela",
      Preferred_Name: "Angela Bailey",
      email: "angela@gmail.com",
      job_title: "Talent Magnet Jr.",
      phone_no: "123456789",
      skype: "angela@skype",
      Last_Name: "Bailey",
      image: "images/angila.png",
      department: "HR Department",
      location:'india',
    },
    {
      Id:107,
      First_Name: "Robort",
      Preferred_Name: "Robort Mitchell",
      email: "robort@gmail.com",
      job_title: "Software Engineer",
      phone_no: "123456789",
      skype: "robort@skype",
      Last_Name: "Mitchell",
      image: "images/robort.png",
      department: "IT Department",
      location:'seattle',
    },
    {
      Id:108,
      First_Name: "Olivia",
      Preferred_Name: "Olivia Watson",
      email: "oliva@gmail.com",
      job_title: "UI Designer",
      phone_no: "123456789",
      skype: "oliva@skype",
      Last_Name: "Watson",
      image: "images/oliva.png",
      department: "UX Department",
      location:'seattle',
    },
  ],
};

// ============================================= Variable Declarions==================================

const searchby = document.getElementById("search");
const filterby = document.getElementById("select_option");
const button_obj = document.getElementById("emp_button");
const myModal=document.getElementById('EmployeeModal');
const add_emp_popup=document.getElementById('add_employee');

let count=1;

// ============================================= Event Listners ======================================


//this works when clicked on add employee
document.getElementById('add_employee').addEventListener('click',()=>{
  document.getElementById('bg_modal').style.display='flex';
});
//this works when clicked on cross button
document.getElementById('close_button').addEventListener('click',()=>{
  document.getElementById('bg_modal').style.display='none';
  clear_input();
});

//this works when new employe is added 
button_obj.addEventListener('click',()=>{
  if(check_validation())
  {
    add_new_emp();
    clear_input();
    document.getElementById('bg_modal').style.display='none';

  }
});

//works on clear button
document.getElementById("clear").addEventListener("click", () => {
  display("");
  searchby.value = null;
  filterby.value = "Preferred_Name";
});

//works on input search field
searchby.addEventListener("keyup", () => {
    let arr = [];
    for (let i = 0; i < data["employees"].length; i++) {
      arr.push(data["employees"][i][filterby.value].toUpperCase());
    }
    check_string(searchby.value.toUpperCase(),arr);
});

// ======================================================= Functions ==================================================

//this closes edit emplouee popup
function close_edit_popup()
{
  document.getElementById('card_display2').style.display="none";
}

//this is used to close employee popup
function close_emp_popup()
{
  document.getElementById('card_display').style.display="none";
}

//checks the entered values in fields
function check_validation()
{
  if(document.getElementById('input_fname').value===""||document.getElementById('input_lname').value==="")
  {
    document.getElementById('hidden1').style.display="block";
    return false;
  }
   if(document.getElementById('input_pname').value==="")
  {
    document.getElementById('hidden1').style.display="none";
    document.getElementById('hidden2').style.display="block";
    return false;
  } 
   if(document.getElementById('input_email').value==="")
  {
    document.getElementById('hidden1').style.display="none";
    document.getElementById('hidden2').style.display="none";
    document.getElementById('hidden3').style.display="block";
    return false;
  } 
   if(document.getElementById('input_skype').value==="")
  {
    document.getElementById('hidden1').style.display="none";
    document.getElementById('hidden2').style.display="none";
    document.getElementById('hidden3').style.display="none";
    document.getElementById('hidden4').style.display="block";
    return false;
  } 
   if(document.getElementById('input_no').value===""||document.getElementById('input_no').value.length<10)
  {
    document.getElementById('hidden1').style.display="none";
    document.getElementById('hidden2').style.display="none";
    document.getElementById('hidden3').style.display="none";
    document.getElementById('hidden4').style.display="none";
    document.getElementById('hidden5').style.display="block";
    return false;
  } 
  return true;
}

//This fuction clears the input form values
function clear_input()
{
  document.getElementById('input_fname').value="";
  document.getElementById('input_lname').value="";
  document.getElementById('input_pname').value="";
  document.getElementById('input_email').value="";
  document.getElementById('input_skype').value="";
  document.getElementById('input_no').value="";
  document.getElementById('input_job_title').value="";
  document.getElementById('input_department').value="IT Department";
  document.getElementById('hidden1').style.display="none";
  document.getElementById('hidden2').style.display="none";
  document.getElementById('hidden3').style.display="none";
  document.getElementById('hidden4').style.display="none";
  document.getElementById('hidden5').style.display="none";
}

//This adds new employee to array
function add_new_emp() {
  let emp_data = {
    Id:108+count,
    First_Name: document.getElementById("input_fname").value,
    Preferred_Name: document.getElementById("input_pname").value,
    email: document.getElementById("input_email").value,
    job_title: document.getElementById("input_job_title").value,
    phone_no: document.getElementById("input_no").value,
    skype: document.getElementById("input_skype").value,
    Last_Name: document.getElementById("input_lname").value,
    image: "images/employee.png",
    department: document.getElementById("input_department").value,
    location:document.querySelector('input[name="radio"]:checked').value,
  };
  count++;
  data["employees"].push(emp_data);
  display("");
};

// This function is used to serach entered input with prefferes name 
function check_string(substring,list)
{
  let res="";
 for(let i=0;i<list.length;i++)
 {
  if(list[i].includes(substring))
  {
    res += cards(i);
  }
 }
 document.getElementById("row_display").innerHTML = res;
}

//Below is filter function of departments
function filter_dep() {
  const array=[0,0,0,0];//it hr ux sales
  let department_display = "";
  data["employees"].forEach((el) => {
    if (el.department === "IT Department") array[0]++;
    else if (el.department === "HR Department") array[1]++;
    else if (el.department === "UX Department") array[2]++;
    else array[3]++;
  });
  department_display = `<h4 class="pb-2">Departments</h4>
 <div class=" pb-2 ">
     <button class="filters_button" onclick="specific('department','IT Department')"><h6>IT${" (" + array[0] + ")"}</h6></button>
     <button class="filters_button" onclick="specific('department','HR Department')"><h6>Human Resources${" (" + array[1] + ")"}</h6></button>
     <button class="filters_button" onclick="specific('department','UX Department')"><h6>UX${" (" + array[2] + ")"}</h6></button>
     <button class="filters_button" onclick="specific('department','Sales')"><h6>Sales${" (" + array[3] + ")"}</h6></button>
 </div>
 `;
  document.getElementById("filter1").innerHTML = department_display;
}

//Below is filter function of offices
function filter_offices(){
const array=[0,0]//seattle,india
let offices_display="";
data["employees"].forEach((el) => {
  if (el.location === "seattle") array[0]++;
  else if (el.location === "india") array[1]++;
});
offices_display=`
<div class=" pb-2 "><h4 class="pb-2">Offices</h4>
     <button class="filters_button" onclick="specific('location','seattle')"><h6>Seattle${" (" + array[0] + ")"}</h6></button>
     <button class="filters_button" onclick="specific('location','india')"><h6>India${" (" + array[1] + ")"}</h6></button>
 </div>
`;
document.getElementById("filter2").innerHTML = offices_display;
}

//Below is filter function of Job Titles
function filter_job_title(){
  const array=[0,0,0,0,0,0,0,0,0,0]//seattle,india
  let jobtitle_display="";
  data["employees"].forEach((el) => {
    if (el.job_title === "Sharepoint practice head") array[0]++;
    else if (el.job_title=== "Operations manager") array[1]++;
    else if (el.job_title=== "Product manager") array[2]++;
    else if (el.job_title=== "BI Developer") array[3]++;
    else if (el.job_title=== "Network Engineer") array[4]++;
    else if (el.job_title=== "Talent Magnet Jr.") array[5]++;
    else if (el.job_title=== "Software Engineer") array[6]++;
    else if (el.job_title=== "UI Designer") array[7]++;
    else if (el.job_title=== "Lead-engineer-Dot Net") array[8]++;
    else if (el.job_title=== "Recruting Expert") array[9]++;
  });
  jobtitle_display=`
  <div class=" pb-2 "><h4 class="pb-2">Job Titles</h4>
       <button class="filters_button" onclick="specific('job_title','Sharepoint practice head')"><h6>Sharepoint practice head${" (" + array[0] + ")"}</h6></button>
       <button class="filters_button" onclick="specific('job_title','Operations manager')"><h6>Operations manager${"(" + array[1] + ")"}</h6></button>
       <button class="filters_button" onclick="specific('job_title','Product manager')"><h6>Product manager${" (" + array[2] + ")"}</h6></button>
       <button class="filters_button" onclick="specific('job_title','BI Developer')"><h6>BI Developer${"(" + array[3] + ")"}</h6></button>
       <button class="filters_button" onclick="specific('job_title','Network Engineer')"><h6>Network Engineer${" (" + array[4] + ")"}</h6></button>
       <button style="text-decoration:underline;color:blue" class="filters_button" id="enable_link" onclick="display_enable()">View More</button>
  </div>
       <div id="display_none">
         <button class="filters_button" onclick="specific('job_title','Talent Magnet Jr.')"><h6>Talent Magnet Jr.${" (" + array[5] + ")"}</h6></button>
         <button class="filters_button" onclick="specific('job_title','Software Engineer')"><h6>Software Engineer${"(" + array[6] + ")"}</h6></button>
         <button class="filters_button" onclick="specific('job_title','UI Designer')"><h6>UI Designer${" (" + array[7] + ")"}</h6></button>
         <button class="filters_button" onclick="specific('job_title','Lead-engineer-Dot Net')"><h6>Lead-engineer-Dot Net${"(" + array[8] + ")"}</h6></button>
         <button class="filters_button" onclick="specific('job_title','Recruting Expert')"><h6>Recruting Expert${" (" + array[9] + ")"}</h6></button>
         <button style="text-decoration:underline;color:blue" class="filters_button" id="enable_link" onclick="display_disable()">View Less</button>
        </div>
  `;
   document.getElementById("filter3").innerHTML = jobtitle_display;
  }

//This function is used to enable view more option in filter
function display_enable()
{
  document.getElementById('display_none').style.display='block';
  document.getElementById('enable_link').style.display='none';
}
//This function is used to enable view less option
function display_disable()
{
  document.getElementById('display_none').style.display='none';
  document.getElementById('enable_link').style.display='block';
}


// This function is used to display cards in HTML Page
function cards(i)
{
let res= `<div class="col d-flex mb-2" role="button">
<div class="card" onclick="profile_display(${(data["employees"][i].Id)})" >
    <div class="card-body  d-flex p-1">
        <div ><img src="${data["employees"][i].image}"></div>
        <div class="ms-1"><h6 class="m-0">${
          data["employees"][i].First_Name +
          " " +
          data["employees"][i].Last_Name
        }</h6>
        <p class="m-0">${data["employees"][i].job_title}<br>${
    data["employees"][i].department
  }
        </p><i class="bi bi-telephone-fill pe-2"></i><i class="bi bi-chat-left-dots-fill pe-2"></i><i class="bi bi-chat-fill pe-2">
        </i><i class="bi bi-star-fill pe-2"></i><i class="bi bi-heart-fill"></i></div>
    </div>
</div>
</div>`;

return res;
}

//This below function is main display card function
function display(input) {
  let res = "";
  filter_dep();
  filter_offices();
  filter_job_title()
  searchby.value = null;
  if (input === "") {
    filterby.value = "Preferred_Name";
    for (let i = 0; i < data["employees"].length; i++) {
      res += cards(i);
    }
   } 
  else {
    for (let i = 0; i < data["employees"].length; i++) {
      if (data["employees"][i][filterby.value].charAt(0) === input) {
        res += cards(i);
      }
    }
  }
  document.getElementById("row_display").innerHTML = res;
}

//Thsi function display the specific employee details popup 
function profile_display(eid)
{
  const index=eid%100-1;
  document.getElementById('card_display').style.display="flex";
  let loc=data["employees"][index].location.toUpperCase();
  let add="";
  if(loc==='SEATTLE')
  {
    add="https://www.bing.com/search?q=seattle&form=ANNTH1&refig=42e89731e6d844a98a2226fb673e8fde&sp=1&qs=AS&pq=seat&sk=PRES1&sc=10-4&cvid=42e89731e6d844a98a2226fb673e8fde";
  }
  else add="https://www.bing.com/search?q=india&qs=n&form=QBRE&sp=-1&pq=indi&sc=10-4&sk=&cvid=FFFF1FA43A744731806BC07B23891863&ghsh=0&ghacc=0&ghpl=";
  let res=`
    <img src="${data["employees"][index].image}" id="image">
    <hr style="width:100%">
    <div><h1 id="emp_name">${data["employees"][index].Preferred_Name}</h1></div>
    <hr style="width:100%">
    <div class="ps-2">
     <h3 style="text-decoration: underline;">Professional Summary </h3>
     <div><h5>Current Position : ${data["employees"][index].job_title}</h5></div>
     <div><h5>Department : ${data["employees"][index].department}</h5></div>
     <br>
     <h3 style="text-decoration: underline;"><i class="bi bi-person-lines-fill"></i> Contact Details </h3>
     <div class="d-flex"><h5>Email <i class="bi bi-envelope"></i> :</h5><h5 class="details"> &nbsp${data["employees"][index].email}</h5></div>
     <div class="d-flex"><h5>Skype <i  class="bi bi-skype"></i> :</h5><h5 class="details">&nbsp ${data["employees"][index].skype}</h5></div>
     <div class="d-flex"><h5>Phone No <i class="bi bi-telephone"></i> :</h5><h5 class="details">&nbsp ${data["employees"][index].phone_no}</h5></div>
     <br>
     <hr style="width:100%">
     <a id="loc" href="${add}" target="blank"><h4><i class="bi bi-geo-alt"></i> ${loc}</h4></a>
    </div>  
    <hr style="width:100%">
    <div class="buttons">
      <button class="btn" id="button1" onclick="edit_emp_popup(${index})">EDIT DETAILS</button>
      <button class="btn" id="button2" onclick="close_emp_popup()">CLOSE DETAILS</button>
    </div>
`;
  document.getElementById('card_pop').innerHTML=res;
}

//this functions enables edit employee popup
function edit_emp_popup(index)
{
  let edit="";
  document.getElementById('card_display2').style.display="flex";
  document.getElementById('card_display').style.display="none";
  edit=edit.concat(`
  <div class="popup_close_div"><button type="button" id="popup_close" class="btn-close" onclick="close_edit_popup()"></button></div>
  <img src="${data["employees"][index].image}" id="image">
  <hr style="width:100%">
  <div><h1 id="emp_name"><span>${data["employees"][index].Preferred_Name}<span></h1></div>
  <hr style="width:100%">
  <div class="tabled">
  <table >
  <tbody>
    <tr><td><h3>First Name </h3></td><td><h3>: <input type="text" id="input_edit1" value="${data["employees"][index].First_Name}"></h3></td></tr>
    <tr><td><h3>Last Name </h3></td><td><h3>: <input type="text" id="input_edit2" value="${data["employees"][index].Last_Name}"></h3></td></tr>
    <tr><td><h3>Preffered Name </h3></td><td><h3>: <input type="text" id="input_edit3" value="${data["employees"][index].Preferred_Name}"></h3></td></tr>
    <tr><td><h3>Email id </h3></td><td><h3>: <input type="email" id="input_edit4" value="${data["employees"][index].email}"></h3></td></tr>
    <tr><td><h3>Skype id </h3></td><td><h3>: <input type="email" id="input_edit5" value="${data["employees"][index].skype}"></h3></td></tr>
    <tr><td><h3>Phone No </h3></td><td><h3>: <input type="number" id="input_edit6" value="${data["employees"][index].phone_no}"></h3></td></tr>
    
    </tbody>
    </table>
  </div>
  <hr style="width:100%">
  <div class="buttons">
    <button class="btn" id="button3" onclick="save_emp_popup(${index})">SAVE DETAILS</button>
  </div>
`);

  document.getElementById('edit_pop').innerHTML=edit;
}

//this functions make changes to current data
function save_emp_popup(index)
{
  data["employees"][index].First_Name=document.getElementById('input_edit1').value;
  data["employees"][index].Last_Name=document.getElementById('input_edit2').value;
  data["employees"][index].Preferred_Name=document.getElementById('input_edit3').value;
  data["employees"][index].email=document.getElementById('input_edit4').value;
  data["employees"][index].skype=document.getElementById('input_edit5').value;
  data["employees"][index].phone_no=document.getElementById('input_edit6').value;
  close_edit_popup();
  display("");
}

//The below function is for filters which display cards depending upon their category and departments (left filter of html)
function specific(cat,dep)
{
  let res="";
  for (let i = 0; i < data["employees"].length; i++) {
    if(data["employees"][i][cat]===dep){
      res += cards(i);
  }
 }
 document.getElementById("row_display").innerHTML = res;
}

// Main function call 
display("");

