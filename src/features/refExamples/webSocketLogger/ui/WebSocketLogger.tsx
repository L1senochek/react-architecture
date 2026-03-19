import { useEffect, useRef } from 'react';

import styles from './WebSocketLogger.module.css';

const WS_URL = 'ws://localhost:8080';

export function WebSocketLogger() {
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket(WS_URL);
    socketRef.current = socket;

    socket.onmessage = (event) => {
      console.log('WebSocketLogger:', event.data);
    };

    socket.onerror = (event) => {
      console.error('WebSocketLogger error:', event);
    };

    return () => {
      socketRef.current?.close();
    };
  }, []);

  return (
    <div className={styles.webSocketLogger}>
      <div className={styles.hint}>
        Подключено к: <span className={styles.url}>{WS_URL}</span>. Логи сообщений в консоли
      </div>
    </div>
  );
}
