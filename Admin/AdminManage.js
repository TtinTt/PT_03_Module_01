const AdminManageList = [
  { email: "Admin@tng.com", password: " ", Role: "ABC" },
  { email: "Admin1@tng.com", password: " ", Role: "A" },
  { email: "Admin2@tng.com", password: " ", Role: "AB" },
  { email: "Admin3@tng.com", password: " ", Role: "AC" },
];

const AdminRecheck = localStorage.getItem("admins");

if (!AdminRecheck) {
  localStorage.setItem("admins", JSON.stringify(AdminManageList));
}
