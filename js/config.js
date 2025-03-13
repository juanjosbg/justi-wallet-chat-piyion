document.addEventListener("DOMContentLoaded", async () => {
    try {
      console.log("Intentando obtener el Company ID...");
  
      const response = await fetch("/api/getCompanyId");
      if (!response.ok) throw new Error(`Error en la API: ${response.statusText}`);
  
      const data = await response.json();
      const companyId = data.companyId;
      if (!companyId) throw new Error("Company ID no encontrado en la respuesta.");
  
      console.log("Company ID obtenido:", companyId);
  
      // Asegurar que el script del componente de chat se cargue correctamente
      const chatScript = document.createElement("script");
      chatScript.type = "module";
      chatScript.src = "https://storage.googleapis.com/chat-component/chat-component-piyion/chat-component-piyion.esm.js";
      chatScript.crossOrigin = "anonymous";
  
      chatScript.onload = () => {
        console.log("Script de chat cargado correctamente.");
        
        // Crear el componente después de que el script ha cargado
        const chatComponent = document.createElement("chat-component-piyion");
        chatComponent.id = "chatComponent";
        chatComponent.style.zIndex = "10";
        chatComponent.setAttribute("position", "left");
  
        document.body.appendChild(chatComponent);
        console.log("Chat component añadido al DOM.");
  
        // Esperar a que el componente esté listo antes de asignar el companyId
        chatComponent.addEventListener("componentReady", () => {
          console.log("Componente de chat completamente cargado. Asignando companyId...");
          chatComponent.setAttribute("company", companyId);
        });
      };
  
      chatScript.onerror = () => {
        console.error("Error al cargar el script del chat.");
      };
  
      document.head.appendChild(chatScript);
  
    } catch (error) {
      console.error("Error al obtener el Company ID:", error);
    }
  });
  