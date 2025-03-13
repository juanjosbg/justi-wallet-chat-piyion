document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("/api/getCompanyId");
    const data = await response.json();
    const companyId = data.companyId;

    if (!companyId) {
      console.error("Error: Company ID no encontrado.");
      return;
    }

    const chatComponent = document.createElement("chat-component-piyion");
    chatComponent.id = "chatComponent";
    chatComponent.style.zIndex = "10";
    chatComponent.setAttribute("position", "left");
    chatComponent.setAttribute("company", companyId);

    document.body.appendChild(chatComponent);
  } catch (error) {
    console.error("Error al obtener el Company ID:", error);
  }
});
