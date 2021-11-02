import introPage from "./IntroPage";

export const wallPage = () => {
  const wallContainer = document.createElement("main");
  wallContainer.className = "wallContainer";
  wallContainer.id = "wallContainer";

  const header = document.createElement("wallHeader");
  header.className = "wallHeader";
  wallContainer.appendChild(header);

  const logo = document.createElement("logoImage");
  logo.className = "logoImage";
  logo.src = "images/logo-petsbook.png";

  return wallContainer + introPage;
};