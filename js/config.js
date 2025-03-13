document.addEventListener("DOMContentLoaded", async () => {
    try {
      console.log("Intentando obtener el Company ID...");
  
      const response = await fetch("/api/getCompanyId");
      if (!response.ok) {
        throw new Error(`Error en la API: ${response.statusText}`);
      }
  
      const data = await response.json();
      const companyId = data.companyId;
  
      if (!companyId) {
        throw new Error("Company ID no encontrado en la respuesta.");
      }
  
      console.log("Company ID obtenido:", companyId);
  
      customElements.whenDefined("chat-component-piyion").then(() => {
        console.log("Componente de chat definido, agregándolo al DOM...");
  
        const chatComponent = document.createElement("chat-component-piyion");
        chatComponent.id = "chatComponent";
        chatComponent.style.zIndex = "10";
        chatComponent.setAttribute("position", "left");
  
        document.body.appendChild(chatComponent);
        console.log("Chat component añadido al DOM.");
  
        // Esperar a que el componente esté completamente cargado
        setTimeout(() => {
          chatComponent.setAttribute("company", companyId);
          console.log("Company ID asignado al componente.");
        }, 500);
      });
  
    } catch (error) {
      console.error("Error al obtener el Company ID:", error);
    }
  });
  