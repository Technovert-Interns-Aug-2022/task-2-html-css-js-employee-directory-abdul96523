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
      First_Name: "Olivia Watson",
      Preferred_Name: "Olivia",
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
const button_close=document.getElementById("btn-close");
let count=1;

// ============================================= Event Listners ======================================

document.getElementById("clear").addEventListener("click", () => {
  display("");
  searchby.value = null;
  filterby.value = "Preferred_Name";
});

button_obj.addEventListener("click", () => {
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
  document.getElementById("form").reset();
});

button_close.addEventListener('click',()=>{document.getElementById("form").reset();});

searchby.addEventListener("keyup", () => {
    let arr = [];
    for (let i = 0; i < data["employees"].length; i++) {
      arr.push(data["employees"][i][filterby.value].toUpperCase());
    }
    check_string(searchby.value.toUpperCase(),arr);
});
// ====================================================================================================================
// ======================================================= Functions ==================================================

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


function profile_display(eid)
{
  console.log(eid);
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

