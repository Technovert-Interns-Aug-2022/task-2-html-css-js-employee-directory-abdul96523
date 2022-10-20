
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
      image: "./assets/angila.png",
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
      image: "../robort.png",
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

let data1;
if(!sessionStorage.new_obj)
{
  sessionStorage.setItem("new_obj",JSON.stringify(data));
  data1=JSON.parse(sessionStorage.new_obj);
}
else
{
 data1=JSON.parse(sessionStorage.new_obj);
}

let count;
if(sessionStorage.count)
{
  count=JSON.parse(sessionStorage.count);
}
else
{
  sessionStorage.setItem("count",1);
  count=JSON.parse(sessionStorage.count);
}

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
    onchange_filter();
});

// ======================================================= Functions ==================================================

//this checks the first name last name validation
function valid_name()
{
  let first_name=document.getElementById('input_fname').value;
  let last_name=document.getElementById('input_lname').value;
  const regex=/^\w{3,10}$/;
  if(regex.test(first_name)&&regex.test(last_name))
  {
    document.getElementById('hidden1').style.display='none';
    return true;
  }
  else
  {
    document.getElementById('hidden1').style.display='block';
    return false;
  }
}

//this function checks validity of phone number
function valid_phoneNo()
{
  let entered_no=document.getElementById('input_no').value;
  const regex=/^[1-9][0-9]{9}$/;
  if(!regex.test(entered_no))
  {
    document.getElementById('hidden5').style.display='flex';
    return false;
  }
  else 
  {
    document.getElementById('hidden5').style.display='none';
    return true;
  }
}

//this fun checks validity of email
function valid_email(num)
{
  const regex=/^\w+([\._-]?\w+)*@\w+.com$/;
  const mail=(num==3)?"input_email":"input_skype";
  let entered_email=document.getElementById(mail).value;
  const id="hidden"+num;
  if(!regex.test(entered_email))
  {
    document.getElementById(id).style.display='block';
    return false;
  }
  else 
  {
    document.getElementById(id).style.display='none';
    return true;
  }
}

//this fun checks validity of job Title
function valid_jobTitle()
{
  const regex=/^(\w+)+(\s\w+)*$/;
  let entered_job=document.getElementById('input_job_title').value;
  if(!regex.test(entered_job))
  {
    document.getElementById('hidden6').style.display='block';
    return false;
  }
  else 
  {
    document.getElementById('hidden6').style.display='none';
    return true;
  }
}

//this fun checks validity of image
function valid_img()
{
  if(document.getElementById('img_selected').value)
  {
    document.getElementById('hidden7').style.display='none';
    return true;
  }
  else
  {
    document.getElementById('hidden7').style.display='block';
    return false;
  }
}

//this function tigger when the filter by value changes 
function onchange_filter()
{
  let arr = [];
    data["employees"].forEach(x=>arr.push(x[filterby.value].toUpperCase()));
    check_string(searchby.value.toUpperCase(),arr);
}

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
  return valid_name()&&valid_email(3)&&valid_email(4)&&valid_phoneNo()&&valid_jobTitle()&&valid_img();
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
  document.getElementById('img_selected').value="";
  document.getElementById('input_department').value="IT Department";
  document.getElementById('hidden1').style.display="none";
  document.getElementById('hidden2').style.display="none";
  document.getElementById('hidden3').style.display="none";
  document.getElementById('hidden4').style.display="none";
  document.getElementById('hidden5').style.display="none";
  document.getElementById('hidden6').style.display="none";
  document.getElementById('hidden7').style.display="none";
}

//This adds new employee to array
const img_arr=[];
const file_ip=document.getElementById('img_selected');
file_ip.addEventListener('change',function() {
  const reader=new FileReader();
  reader.addEventListener('load',()=>{
  if(sessionStorage.getItem('img'))
  {
    const array=JSON.parse(sessionStorage.getItem('img'));
    array.push(reader.result);
    sessionStorage.setItem('img',JSON.stringify(array));
  }
  else{
    img_arr.push(reader.result);
    sessionStorage.setItem('img',JSON.stringify(img_arr));
  }
  });
reader.readAsDataURL(this.files[0]);
});
function add_new_emp() {
  entered_job_title=document.getElementById("input_job_title").value.charAt(0).toUpperCase()+document.getElementById("input_job_title").value.substring(1,document.getElementById("input_job_title").value.length);
  let emp_data1 = {
    Id:108+count,
    First_Name: document.getElementById("input_fname").value,
    Preferred_Name: document.getElementById("input_pname").value,
    email: document.getElementById("input_email").value,
    job_title: entered_job_title,
    phone_no: document.getElementById("input_no").value,
    skype: document.getElementById("input_skype").value,
    Last_Name: document.getElementById("input_lname").value,
    image:JSON.parse(sessionStorage.getItem('img'))[JSON.parse(sessionStorage.getItem("count"))-1],
    department: document.getElementById("input_department").value,
    location:document.querySelector('input[name="radio"]:checked').value,
  };
  sessionStorage.count=JSON.parse(sessionStorage.count)+1;
  data1["employees"].push(emp_data1);
  sessionStorage.new_obj=JSON.stringify(data1);
  display("");
};

// This function is used to serach entered input with selected filter by 
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
  const map_object=counter("department");
  var result="";
  for(let user of map_object)
  {
   result+=`
   <div class=" pb-2 ">
       <button class="filters_button" onclick="specific('department','${user[0]}')"   >   <h6>${user[0]+" ("+user[1]+")"}</h6></button>
   </div>
   `;
  }
  let department_display = "";
  department_display = `<h4 class="pb-2">Departments</h4>
  ${result}
 `;
  document.getElementById("filter1").innerHTML = department_display;
}


//Below is filter function of offices
function filter_offices(){

  const map_object=counter("location");
  var result="";
  for(let user of map_object)
  {
   result+=`
   <div class=" pb-2 ">
       <button class="filters_button" onclick="specific('location','${user[0]}')"><h6>${user[0].toUpperCase()+" ("+user[1]+")"}</h6></button>
   </div>
   `;
  }
  let offices_display = "";
  offices_display = `<h4 class="pb-2">Offices</h4>
  ${result}
 `;

  document.getElementById("filter2").innerHTML = offices_display;
}

//Below is filter function of Job Titles
let result1="";
let result2="";
function filter_job_title(){
  result1="";
  result2="";
  let jobtitle_display = "";
  let temp=0;
  const map_object=counter("job_title");
  for(let user of map_object)
  {
    if(temp<4)
    {
      temp++;
      result1+=`
       <button class="filters_button" onclick="specific('job_title','${user[0]}')"><h6 style="white-space:nowrap">${user[0]+" ("+user[1]+")"}</h6></button>
   `;
    }
    else
    {
      result2+=`
      <button class="filters_button" onclick="specific('job_title','${user[0]}')"><h6 style="white-space:nowrap">${user[0]+" ("+user[1]+")"}</h6></button>
      `; 
    }
  }
  result1+=`<button style="text-decoration:underline;color:blue" class="filters_button" id="enable_link" onclick="display_enable()" >View More</button>`;
  result2+=`<button style="text-decoration:underline;color:blue" class="filters_button" id="enable_link" onclick="display_disable()">View Less</button>`;
  document.getElementById('filter4').style.display='none';
  jobtitle_display = `<h4 class="pb-2">Job Title</h4>
  ${result1}
 `;
 document.getElementById("filter3").innerHTML = jobtitle_display;
}

// This function is used to enable view more option in filter
function display_enable()
{
  let jobtitle_display = `
  ${result2}
 `;
 document.getElementById('enable_link').style.display='none';
 document.getElementById('filter4').style.display='block';
 document.getElementById("filter4").innerHTML = jobtitle_display;
}

// This function is used to enable view less option
function display_disable()
{
  document.getElementById('filter4').style.display='none';
  document.getElementById('enable_link').style.display='block';
}

// This function is used to display cards in HTML Page
function cards(i)
{
let res= `<div class="col d-flex mb-2" role="button" >
<div class="card" onclick="profile_display(${(data1["employees"][i].Id)})" >
    <div class="card-body  d-flex p-1" >
        <div ><img src="${data1["employees"][i].image}"></div>
        <div class="ms-1"><h6 class="m-0">${
          data1["employees"][i].First_Name +
          " " +
          data1["employees"][i].Last_Name
        }</h6>
        <p class="m-0">${data1["employees"][i].job_title}<br>${
    data1["employees"][i].department
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
    for (let i = 0; i < data1["employees"].length; i++) {
      res += cards(i);
    }
   } 
  else {
    for (let i = 0; i < data1["employees"].length; i++) {
      if (data1["employees"][i][filterby.value].charAt(0).toUpperCase() === input) {
        res += cards(i);
      }
    }
  }
  document.getElementById("row_display").innerHTML = res;
}

//This function display the specific employee details popup 
function profile_display(eid)
{
  const index=eid%100-1;
  document.getElementById('card_display').style.display="flex";
  let loc=data1["employees"][index].location.toUpperCase();
  let add="";
  if(loc==='SEATTLE')
  {
    add="https://www.bing.com/search?q=seattle&form=ANNTH1&refig=42e89731e6d844a98a2226fb673e8fde&sp=1&qs=AS&pq=seat&sk=PRES1&sc=10-4&cvid=42e89731e6d844a98a2226fb673e8fde";
  }
  else add="https://www.bing.com/search?q=india&qs=n&form=QBRE&sp=-1&pq=indi&sc=10-4&sk=&cvid=FFFF1FA43A744731806BC07B23891863&ghsh=0&ghacc=0&ghpl=";
  let res=`
  <div class="popup_close_div"><button type="button" id="popup_close" class="btn-close" onclick="close_emp_popup()"></button></div>
    <img src="${data1["employees"][index].image}" id="image">
    <hr style="width:100%;margin:8px">
    <div><h2 id="emp_name">${data1["employees"][index].Preferred_Name}</h2></div>
    <hr style="width:100%;margin:8px">
    <div class="">
     <h3 style="text-decoration: underline;">Professional Summary </h3>
     <div><h5>Current Position : ${data1["employees"][index].job_title}</h5></div>
     <div><h5>Department : ${data1["employees"][index].department}</h5></div>
     <h3 style="text-decoration: underline;"><i class="bi bi-person-lines-fill"></i> Contact Details </h3>
     <div class="d-flex"><h5>Email <i class="bi bi-envelope"></i> :</h5><h5 class="details"> &nbsp${data1["employees"][index].email}</h5></div>
     <div class="d-flex"><h5>Skype <i  class="bi bi-skype"></i> :</h5><h5 class="details">&nbsp ${data1["employees"][index].skype}</h5></div>
     <div class="d-flex"><h5>Phone No <i class="bi bi-telephone"></i> :</h5><h5 class="details">&nbsp ${data1["employees"][index].phone_no}</h5></div>
     <hr style="width:100%;margin:8px">
     <a id="loc" href="${add}" target="blank"><h4 class="mb-0"><i class="bi bi-geo-alt"></i> ${loc}</h4></a>
    </div>  
    <hr style="width:100%;margin:8px">
    <div class="buttons">
      <button class="btn" id="button1" onclick="edit_emp_popup(${index})">EDIT DETAILS</button>
      <button class="btn" id="button2" onclick="close_emp_popup()">CLOSE DETAILS</button>
    </div>
`;
  window.scroll({top: 0, left: 0, behavior: 'smooth' });
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
  <img src="${data1["employees"][index].image}" id="image">
  <hr style="width:100%;margin:8px">
  <div><h4 id="emp_name"><span>${data1["employees"][index].Preferred_Name}<span></h4></div>
  <hr style="width:100%;margin:8px">
  <div class="tabled">
  <table >
  <tbody class>
    <tr><td><h5>First Name </h5></td><td><h6 style="white-space:nowrap">: <input type="text" id="input_edit1" onchange="display_button3()" value="${data1["employees"][index].First_Name}"></h6></td></tr>
    <tr><td><h5>Last Name </h5></td><td><h6>: <input type="text" id="input_edit2" onchange="display_button3()" value="${data1["employees"][index].Last_Name}"></h6></td></tr>
    <tr><td><h5 style="white-space:nowrap">Preffered Name </h5></td><td><h6>: <input type="text" id="input_edit3" onchange="display_button3()" value="${data1["employees"][index].Preferred_Name}"></h6></td></tr>
    <tr><td><h5>Email id </h5></td><td><h6>: <input type="email" id="input_edit4" onchange="display_button3()" value="${data1["employees"][index].email}"></h6></td></tr>
    <tr><td><h5>Skype id </h5></td><td><h6>: <input type="email" id="input_edit5" onchange="display_button3()" value="${data1["employees"][index].skype}"></h6></td></tr>
    <tr><td><h5>Phone No </h5></td><td><h6>: <input type="number" id="input_edit6" onchange="display_button3()" value="${data1["employees"][index].phone_no}"></h6></td></tr>
    <tr><td><h5>Job Title</h5></td><td><h6>: <input type="text" id="input_edit7" onchange="display_button3()" value="${data1["employees"][index].job_title}"></h6></td></tr>
    <tr><td><h5>Department</h5></td><td><h6>: <input type="text" id="input_edit8" onchange="display_button3()" value="${data1["employees"][index].department}"></h6></td></tr>
    </tbody>
    </table>
  </div>
  <hr style="width:100%;margin:8px">
  <div class="buttons">
    <button class="btn" id="button3"  onclick="save_emp_popup(${index})" disabled>SAVE DETAILS</button>
  </div>
`);

  document.getElementById('edit_pop').innerHTML=edit;
}
function display_button3()
{
   document.getElementById('button3').disabled=false;
}

//this functions make changes to current data1
function save_emp_popup(index)
{
  const employee_data=JSON.parse(sessionStorage.getItem('new_obj'));
  console.log(employee_data["employees"][index]);
  employee_data["employees"][index].First_Name=document.getElementById('input_edit1').value;
  employee_data["employees"][index].Last_Name=document.getElementById('input_edit2').value;
  employee_data["employees"][index].Preferred_Name=document.getElementById('input_edit3').value;
  employee_data["employees"][index].email=document.getElementById('input_edit4').value;
  employee_data["employees"][index].skype=document.getElementById('input_edit5').value;
  employee_data["employees"][index].phone_no=document.getElementById('input_edit6').value;
  employee_data["employees"][index].job_title=document.getElementById('input_edit7').value;
  employee_data["employees"][index].department=document.getElementById('input_edit8').value;
  sessionStorage.new_obj=JSON.stringify(employee_data);
  data1=JSON.parse(sessionStorage.getItem('new_obj'));
  close_edit_popup();
  display("");
}

//The below function is for filters which display cards depending upon their category and departments (left filter of html)
function specific(cat,dep)
{
  let res="";
  for (let i = 0; i < data1["employees"].length; i++) {
    if(data1["employees"][i][cat]===dep){
      res += cards(i);
  }
 }
 document.getElementById("row_display").innerHTML = res;
}

//This function returns the map of given field
function counter(title)
{
  let count=0;
  let collection=new Map();
  data1["employees"].forEach((el)=>{
    if(collection.has(el[title]))
    {
      collection.set(el[title],collection.get(el[title])+1);
    }
    else
    {
      collection.set(el[title],1);
    }
  });
  return collection; 
}

// Main function call 
display("");
