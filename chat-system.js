
        // ===== CHAT SYSTEM JAVASCRIPT =====
        
        // Chat state
        let currentChatProduct = null;
        let currentChatSeller = null;
        let chatMessages = [];
        let unreadCount = 0;
        let websocket = null;
        let reconnectInterval = null;

        // DOM Elements
        const chatModal = document.getElementById('chat-modal');
        const floatingBtn = document.getElementById('floating-chat-btn');
        const closeBtn = document.getElementById('close-chat');
        const chatInput = document.getElementById('chat-input');
        const sendBtn = document.getElementById('chat-send-btn');
        const messagesContainer = document.getElementById('chat-messages');
        const connectionStatus = document.getElementById('chat-connection-status');

        // Open chat function
        function openChat(product, sellerId, sellerName) {
            currentChatProduct = product;
            currentChatSeller = { id: sellerId, name: sellerName };
            
            // Update chat header
            document.getElementById('chat-seller-name').textContent = sellerName;
            
            // Update product info
            document.getElementById('chat-product-img').src = product.image;
            document.getElementById('chat-product-title').textContent = product.title;
            document.getElementById('chat-product-price').textContent = formatPrice(product.price);
            
            // Show chat modal
            chatModal.classList.add('active');
            floatingBtn.classList.remove('active');
            
            // Load chat history
            loadChatHistory(product.id, sellerId);
            
            // Connect to WebSocket
            connectWebSocket(product.id, sellerId);
            
            // Focus input
            chatInput.focus();
        }

        // Close chat
        closeBtn.addEventListener('click', () => {
            chatModal.classList.remove('active');
            floatingBtn.classList.add('active');
        });

        // Reopen from floating button
        floatingBtn.addEventListener('click', () => {
            if (currentChatProduct && currentChatSeller) {
                chatModal.classList.add('active');
                floatingBtn.classList.remove('active');
                unreadCount = 0;
                updateChatBadge();
            }
        });

        // Send message
        sendBtn.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });

        function sendMessage() {
            const message = chatInput.value.trim();
            if (!message) return;
            
            // Create message object
            const messageData = {
                productId: currentChatProduct.id,
                sellerId: currentChatSeller.id,
                message: message,
                timestamp: new Date().toISOString()
            };
            
            // Send via WebSocket (if connected)
            if (websocket && websocket.readyState === WebSocket.OPEN) {
                websocket.send(JSON.stringify({
                    type: 'message',
                    data: messageData
                }));
            } else {
                // Fallback: Send via HTTP API
                sendMessageViaAPI(messageData);
            }
            
            // Add to UI immediately (optimistic update)
            addMessageToUI({
                ...messageData,
                type: 'sent',
                status: 'sending'
            });
            
            // Clear input
            chatInput.value = '';
        }

        // Add message to UI
        function addMessageToUI(message) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `chat-message ${message.type}`;
            
            const time = new Date(message.timestamp).toLocaleTimeString('id-ID', {
                hour: '2-digit',
                minute: '2-digit'
            });
            
            messageDiv.innerHTML = `
                <div class="chat-message-content">
                    ${message.message}
                    <div class="chat-message-time">${time}</div>
                </div>
            `;
            
            messagesContainer.appendChild(messageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        // Show typing indicator
        function showTypingIndicator() {
            const typingDiv = document.createElement('div');
            typingDiv.className = 'chat-message received';
            typingDiv.id = 'typing-indicator';
            typingDiv.innerHTML = `
                <div class="chat-typing">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            `;
            messagesContainer.appendChild(typingDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        function hideTypingIndicator() {
            const typing = document.getElementById('typing-indicator');
            if (typing) typing.remove();
        }

        // Update chat badge
        function updateChatBadge() {
            const badge = document.getElementById('chat-badge');
            if (unreadCount > 0) {
                badge.textContent = unreadCount > 9 ? '9+' : unreadCount;
                badge.style.display = 'flex';
            } else {
                badge.style.display = 'none';
            }
        }

        // Format price
        function formatPrice(price) {
            return new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0
            }).format(price);
        }

        // ===== BACKEND INTEGRATION FUNCTIONS =====
        
        // Load chat history from API
        async function loadChatHistory(productId, sellerId) {
            try {
                // TODO: Replace with your actual API endpoint
                const response = await fetch(`/api/chat/history?productId=${productId}&sellerId=${sellerId}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                
                if (response.ok) {
                    const data = await response.json();
                    messagesContainer.innerHTML = '';
                    data.messages.forEach(msg => addMessageToUI(msg));
                } else {
                    console.error('Failed to load chat history');
                    // Show demo messages for now
                    loadDemoMessages();
                }
            } catch (error) {
                console.error('Error loading chat:', error);
                loadDemoMessages();
            }
        }

        // Demo messages (for testing without backend)
        function loadDemoMessages() {
            messagesContainer.innerHTML = '';
            const demoMessages = [
                { type: 'received', message: 'Halo! Ada yang bisa saya bantu?', timestamp: new Date().toISOString() },
                { type: 'sent', message: 'Barangnya masih available?', timestamp: new Date().toISOString() }
            ];
            demoMessages.forEach(msg => addMessageToUI(msg));
        }

        // Send message via HTTP API (fallback)
        async function sendMessageViaAPI(messageData) {
            try {
                // TODO: Replace with your actual API endpoint
                const response = await fetch('/api/chat/send', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify(messageData)
                });
                
                if (response.ok) {
                    console.log('Message sent successfully');
                } else {
                    console.error('Failed to send message');
                }
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }

        // WebSocket Connection
        function connectWebSocket(productId, sellerId) {
            // TODO: Replace with your WebSocket server URL
            const wsUrl = `ws://localhost:3000/chat?productId=${productId}&sellerId=${sellerId}&token=${localStorage.getItem('token')}`;
            
            try {
                websocket = new WebSocket(wsUrl);
                
                websocket.onopen = () => {
                    console.log('WebSocket connected');
                    updateConnectionStatus('connected');
                };
                
                websocket.onmessage = (event) => {
                    const data = JSON.parse(event.data);
                    
                    if (data.type === 'message') {
                        hideTypingIndicator();
                        addMessageToUI({
                            ...data.data,
                            type: 'received'
                        });
                        
                        // Update unread count if chat is minimized
                        if (!chatModal.classList.contains('active')) {
                            unreadCount++;
                            updateChatBadge();
                        }
                    } else if (data.type === 'typing') {
                        showTypingIndicator();
                        setTimeout(hideTypingIndicator, 3000);
                    }
                };
                
                websocket.onerror = (error) => {
                    console.error('WebSocket error:', error);
                    updateConnectionStatus('disconnected');
                };
                
                websocket.onclose = () => {
                    console.log('WebSocket disconnected');
                    updateConnectionStatus('disconnected');
                    // Attempt to reconnect after 5 seconds
                    reconnectInterval = setTimeout(() => {
                        connectWebSocket(productId, sellerId);
                    }, 5000);
                };
            } catch (error) {
                console.error('Failed to connect WebSocket:', error);
                updateConnectionStatus('disconnected');
            }
        }

        // Update connection status indicator
        function updateConnectionStatus(status) {
            connectionStatus.style.display = 'block';
            connectionStatus.className = `chat-connection-status ${status}`;
            
            if (status === 'connected') {
                connectionStatus.textContent = '✓ Terhubung';
                setTimeout(() => {
                    connectionStatus.style.display = 'none';
                }, 2000);
            } else if (status === 'disconnected') {
                connectionStatus.textContent = '✕ Koneksi terputus. Mencoba menghubungkan kembali...';
            }
        }

        // Cleanup on page unload
        window.addEventListener('beforeunload', () => {
            if (websocket) {
                websocket.close();
            }
            if (reconnectInterval) {
                clearTimeout(reconnectInterval);
            }
        });

        // Export functions for use in main script
        window.ChatSystem = {
            openChat: openChat
        };
