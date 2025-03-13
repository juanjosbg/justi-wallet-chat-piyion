window.addEventListener('DOMContentLoaded', (event) => {
    const chatComponent = document.getElementById('chatComponent');
    if (chatComponent) {
        const companyId = process.env.NEXT_PUBLIC_CHAT_COMPONENT_COMPANY;
        chatComponent.setAttribute('company', companyId);
    }
});