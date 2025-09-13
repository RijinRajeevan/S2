let cart = JSON.parse(localStorage.getItem("cart")) || [];
let totalItems = 0;

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.querySelector("#lg-bag .cart-count");
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}

function renderCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartSubtotal = document.getElementById("cart-subtotal");
    const cartTotal = document.getElementById("cart-total");

    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = "";
    totalItems = 0;
    let totalPrice = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<tr><td colspan='6'>Your cart is empty</td></tr>";
    } else {
        cart.forEach((item, index) => {
            const subtotal = item.price * item.quantity;
            totalPrice += subtotal;
            totalItems += item.quantity;

            cartItemsContainer.innerHTML += `
                <tr>
                    <td><button onclick="removeFromCart(${index})">X</button></td>
                    <td><img src="${item.image}" width="50"></td>
                    <td>${item.name}</td>
                    <td>$${item.price.toFixed(2)}</td>
                    <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)"></td>
                    <td>$${subtotal.toFixed(2)}</td>
                </tr>
            `;
        });
    }

    if (cartSubtotal) {
        cartSubtotal.textContent = `${totalItems} Items`;
    }
    if (cartTotal) {
        cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    }
}

// KrizBot Chat Widget
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('krizbot-toggle');
    const chatContainer = document.getElementById('krizbot-container');
    const closeBtn = document.getElementById('krizbot-close');
    const sendBtn = document.getElementById('krizbot-send');
    const messageInput = document.getElementById('krizbot-message');
    const chatArea = document.getElementById('krizbot-chat');

    // Toggle chat visibility
    toggleBtn.addEventListener('click', function() {
        chatContainer.style.display = chatContainer.style.display === 'flex' ? 'none' : 'flex';
    });

    // Close chat
    closeBtn.addEventListener('click', function() {
        chatContainer.style.display = 'none';
    });

    // Send message
    function sendMessage() {
        const message = messageInput.value.trim();
        if (message) {
            // Add user message
            addMessage(message, 'user');
            messageInput.value = '';
            
            // Simulate bot response after a short delay
            setTimeout(() => {
                const botResponse = generateBotResponse(message);
                addMessage(botResponse, 'bot');
            }, 500);
        }
    }

    // Send message on button click
    sendBtn.addEventListener('click', sendMessage);

    // Send message on Enter key
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Add message to chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('krizbot-message', `krizbot-${sender}`);
        
        const messageText = document.createElement('p');
        messageText.textContent = text;
        
        messageDiv.appendChild(messageText);
        chatArea.appendChild(messageDiv);
        
        // Scroll to bottom
        chatArea.scrollTop = chatArea.scrollHeight;
    }

    // Simple bot response logic
    function generateBotResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            return "Hello there! How can I assist you with your shopping today?";
        } else if (lowerMessage.includes('product') || lowerMessage.includes('item')) {
            return "We have a wide range of products available. You can browse our shop section to find what you're looking for!";
        } else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
            return "Prices vary depending on the product. You can check the price of any item on its product page.";
        } else if (lowerMessage.includes('shipping') || lowerMessage.includes('delivery')) {
            return "We offer free shipping on all orders! Delivery usually takes 3-5 business days.";
        } else if (lowerMessage.includes('return') || lowerMessage.includes('exchange')) {
            return "We have a 30-day return policy. Items must be unused and in their original packaging.";
        } else if (lowerMessage.includes('contact') || lowerMessage.includes('help')) {
            return "You can reach our customer service team through the Contact Us page, or email us at support@example.com.";
        } else if (lowerMessage.includes('thank')) {
            return "You're welcome! Is there anything else I can help you with?";
        } else {
            const randomResponses = [
                "I'm here to help with your shopping needs. Could you tell me more about what you're looking for?",
                "That's interesting! How can I assist you further?",
                "I'd be happy to help. Could you provide more details about your question?",
                "Our shop has many great products. Would you like me to guide you to a specific category?"
            ];
            return randomResponses[Math.floor(Math.random() * randomResponses.length)];
        }
    }
});

function addToCart(name, price, image) {
    let existingItem = cart.find(item => 
        item.name === name && 
        item.price === price && 
        item.image === image
    );

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, image, quantity: 1 });
    }

    saveCart();
    renderCart();
    alert("Item added to cart!");
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
}

function updateQuantity(index, newQuantity) {
    newQuantity = parseInt(newQuantity);
    if (newQuantity > 0) {
        cart[index].quantity = newQuantity;
        saveCart();
        renderCart();
    }
}

// Initialize cart on page load
document.addEventListener("DOMContentLoaded", function() {
    // Update cart count in header
    updateCartCount();
    
    // Render cart if on cart page
    renderCart();

    // Add event listeners for "Add to Cart" buttons
    document.querySelectorAll(".cart").forEach(btn => {
        btn.addEventListener("click", function(event) {
            event.preventDefault();
            let product = this.closest(".pro");
            if (product) {
                let name = product.querySelector("h5").innerText;
                let priceText = product.querySelector("h4").innerText;
                let price = parseFloat(priceText.replace(/[^0-9.-]+/g,""));
                let image = product.querySelector("img").src;
                addToCart(name, price, image);
            }
        });
    });
});
