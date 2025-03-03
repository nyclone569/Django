import React, { useEffect, useState } from 'react'
import { getStudents, addStudent, updateStudent, deleteStudent } from "../../api";

export default function StudentManage() {
    const [students, setStudents] = useState([]);
    const [editingStudent, setEditingStudent] = useState(null);
    const [studentData, setStudentData] = useState({
      info_name: "",
      info_phone: "",
      info_dob: "",
      info_gender: "Nam",
    });
  
    useEffect(() => {
      fetchStudents();
    }, []);
  
    const fetchStudents = async () => {
      const data = await getStudents();
      setStudents(data);
    };
  
    const handleDelete = async (id) => {
      await deleteStudent(id);
      fetchStudents();
    };
  
    const handleChange = (e) => {
      setStudentData({ ...studentData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (editingStudent) {
        await updateStudent(editingStudent.id, studentData);
      } else {
        await addStudent(studentData);
      }
  
      setStudentData({
        info_name: "",
        info_phone: "",
        info_dob: "",
        info_gender: "Nam",
      });
      setEditingStudent(null);
      fetchStudents();
    };
  
    const handleEdit = (student) => {
      setStudentData(student);
      setEditingStudent(student);
    };
  
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-[1200px] mt-[100px] mx-auto bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Danh Sách Sinh Viên</h2>
  
          {/* Danh sách sinh viên */}
          <ul>
            {students.map((student) => (
              <li key={student.id} className="max-w-[500px] px-[50px] list-none border rounded flex justify-between items-center">
                <div>
                  <p className="font-medium text-[20px]">{student.info_name}</p>
                  <p className="text-gray-600 text-[17px]">{student.info_phone} - {student.info_gender}</p>
                </div>
                <div className="flex flex-col gap-[5px] space-x-2">
                  <button
                    onClick={() => handleEdit(student)}
                    className="bg-yellow-500 w-[50px] h-[35px] text-white px-3 py-1 rounded-md hover:bg-yellow-600"
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="bg-red-500 w-[50px] h-[35px] text-white px-3 py-1 rounded-md hover:bg-red-600"
                  >
                    Xóa
                  </button>
                </div>
              </li>
            ))}
          </ul>
  
          {/* Form thêm / cập nhật sinh viên */}
          <div className="mt-6 pt-6 flex flex-col">
            <h2 className="text-xl font-bold mb-4">
              {editingStudent ? "Cập Nhật Sinh Viên" : "Thêm Sinh Viên"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-[500px] pl-[40px]">
              <div className='mb-[20px]'>
                <label className="block text-[25px] font-medium">Họ và Tên</label>
                <input
                  type="text"
                  name="info_name"
                  value={studentData.info_name}
                  onChange={handleChange}
                  className="w-full h-[25px] text-[20px] border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div className='mb-[20px]'>
                <label className="block text-[25px] font-medium">Số Điện Thoại</label>
                <input
                  type="tel"
                  name="info_phone"
                  value={studentData.info_phone}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  className="w-full h-[25px] text-[20px] border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div className='mb-[20px]'>
                <label className="block text-[25px] font-medium">Ngày Sinh</label>
                <input
                  type="date"
                  name="info_dob"
                  value={studentData.info_dob}
                  onChange={handleChange}
                  className="w-full h-[25px] text-[20px] border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div className='mb-[20px]'>
                <label className="block text-[25px] font-medium">Giới Tính</label>
                <select
                  name="info_gender"
                  value={studentData.info_gender}
                  onChange={handleChange}
                  className="w-full h-[25px] text-[20px] border border-gray-300 rounded-md p-2"
                >
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>
              <button
                type="submit"
                className={`w-full h-[35px] text-white p-2 rounded-md ${
                  editingStudent ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {editingStudent ? "Cập Nhật" : "Thêm Sinh Viên"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}
