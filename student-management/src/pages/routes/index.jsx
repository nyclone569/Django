import { lazy } from "react";

const StudentManage = lazy(() => import ("../student-manage"))

export const routers = [
    {
        element: <StudentManage/>,
        index: true
    }
]