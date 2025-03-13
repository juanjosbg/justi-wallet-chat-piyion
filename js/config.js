document.addEventListener("DOMContentLoaded", () => {
  const chatComponent = document.getElementById("chatComponent");
  const companyId = document
    .querySelector('meta[name="chat-company"]')
    .getAttribute("content");

  if (chatComponent && companyId) {
    chatComponent.setAttribute("company", companyId);
  }
});
