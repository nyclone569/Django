const API_URL = "http://127.0.0.1:8000/api/students/";

export const getStudents = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const addStudent = async (student) => {
  await fetch(`${API_URL}add/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });
};

export const updateStudent = async (id, student) => {
  await fetch(`${API_URL}update/${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });
};

export const deleteStudent = async (id) => {
  await fetch(`${API_URL}delete/${id}/`, {
    method: "DELETE",
  });
};
