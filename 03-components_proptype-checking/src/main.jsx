import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FooterSnsIcons from '@/components/footer/FooterSnsIcons';
import "@/styles/main.css"


const domNode = document.getElementById("react-app");
createRoot(domNode).render(
  <StrictMode>
    <FooterSnsIcons />
  </StrictMode>
);
