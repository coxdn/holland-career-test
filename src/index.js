import "./styles/index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import TestForm from "./components/TestForm";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<TestForm />);
