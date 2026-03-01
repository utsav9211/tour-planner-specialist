/* ==========================================================================
   CHAT Module — Floating chat widget with bot responses
   ========================================================================== */

export function initChat() {
    const toggle   = document.querySelector('.chat-toggle');
    const chatWin  = document.querySelector('.chat-window');
    const minimize = document.querySelector('.chat-minimize');
    const sendBtn  = document.querySelector('.chat-send');
    const input    = document.querySelector('.chat-input input');
    const messages = document.querySelector('.chat-messages');
    if (!toggle || !chatWin) return;

    toggle.addEventListener('click', () => chatWin.classList.toggle('open'));
    minimize?.addEventListener('click', () => chatWin.classList.remove('open'));

    const botReplies = [
        'Namaste! How can I help you plan your trip today?',
        'We have amazing packages starting from ₹4,999. Want me to share details?',
        'You can call us at +91 98765 43210 or WhatsApp us anytime!',
        'Our team will get back to you within 30 minutes. 🙏',
        'Would you like a custom quote? I can connect you to our travel expert.',
        'We specialize in Corporate, Leisure, Couples, and Educational tours across India and internationally.'
    ];

    function addMessage(text, type) {
        const msg = document.createElement('div');
        msg.className = 'chat-msg ' + type;
        msg.textContent = text;
        messages?.appendChild(msg);
        if (messages) messages.scrollTop = messages.scrollHeight;
    }

    function handleSend() {
        const text = input?.value.trim();
        if (!text) return;
        addMessage(text, 'user');
        if (input) input.value = '';
        setTimeout(() => {
            addMessage(botReplies[Math.floor(Math.random() * botReplies.length)], 'bot');
        }, 800);
    }

    sendBtn?.addEventListener('click', handleSend);
    input?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });
}
