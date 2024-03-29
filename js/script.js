const heroSection = document.getElementById("hero_page");
const resumeSection = document.getElementById("resume_page");
const contactSection = document.getElementById("contact_page");
const homeBtn = document.getElementById("homeBtn");
const resumeBtn = document.getElementById("resumeBtn");
const contactBtn = document.getElementById("contactBtn");

homeBtn.addEventListener("click", function () {
  heroSection.style.display = "flex";
  resumeSection.classList.remove("page_visible");
  contactSection.style.display = "none";
});

resumeBtn.addEventListener("click", function () {
  resumeSection.classList.add("page_visible");
  heroSection.style.display = "none";
  contactSection.style.display = "none";
});

contactBtn.addEventListener("click", function () {
  contactSection.style.display = "block";
  resumeSection.classList.remove("page_visible");
  heroSection.style.display = "none";
});

// Contact Form Values

const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const subject = document.getElementById("subject");

const submitForm = () => {
  if (
    firstName.value === "" ||
    lastName.value === "" ||
    email.value === "" ||
    subject.value === ""
  ) {
    alert("Invalid details. Please Fill All the Details");
    return false;
  } else {
    alert("Your Form has been submitted.");
  }
};

// Dropdown Button

const dropdownBtn = document.getElementById("dropdown");
const dropdownList = document.getElementById("dropdown_list");

dropdownBtn.addEventListener("click", function () {
  dropdownList.classList.toggle("showDropdown");
});
