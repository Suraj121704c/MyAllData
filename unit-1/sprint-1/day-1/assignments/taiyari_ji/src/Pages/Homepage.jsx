import React from "react";
import { Sidebar } from "../Components/Sidebar";
import styled from "styled-components";
import { StudentList } from "../Components/StudentList";

export const Homepage = () => {
  return (
    <DIV>
      <Sidebar />
      <StudentList />
    </DIV>
  );
};
const DIV = styled.div`
  display: flex;
  gap: 10px;
`;
