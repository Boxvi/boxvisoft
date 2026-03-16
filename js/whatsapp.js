// Configuración de WhatsApp
const WHATSAPP_CONFIG = {
    number: '521234567890', // Reemplaza con tu número
    defaultMessage: 'Hola, vi tu sitio web y me interesa cotizar un servicio'
};

// Función para generar link de WhatsApp
function generateWhatsAppLink(message = '') {
    const text = message || WHATSAPP_CONFIG.defaultMessage;
    return `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(text)}`;
}

// Función para cotizar servicio específico
function cotizarServicio(servicio) {
    let message = '';
    switch(servicio) {
        case 'electricidad':
            message = 'Hola, necesito un electricista profesional. ¿Puedes cotizarme?';
            break;
        case 'redes':
            message = 'Hola, necesito configurar mi red/WiFi. ¿Puedes ayudarme?';
            break;
        case 'web':
            message = 'Hola, quiero una página web para mi negocio. ¿Puedes cotizarme?';
            break;
        default:
            message = WHATSAPP_CONFIG.defaultMessage;
    }
    
    window.open(generateWhatsAppLink(message), '_blank');
}

// Event listeners para botones de WhatsApp
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const servicio = this.dataset.servicio || 'general';
            cotizarServicio(servicio);
        });
    });
});