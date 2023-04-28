import styled from '@emotion/styled';
import { useState, useCallback, useEffect } from 'react';
import { v4 } from 'uuid';
import ToastItem from './ToastItem';

const Container = styled.div`
    position: fixed;
    top: 16px;
    right: 16px;
    z-index: 1500;
`;
export default function ToastManager({ bind }) {
    const [toasts, setToasts] = useState([]);

    const createToast = useCallback((message, duration) => {
        const newToast = {
            id: v4(),
            message,
            duration
        };
        setToasts((oldToasts) => [...oldToasts, newToast]);
    }, [])

    const removeToast = useCallback((id) => {
        setToasts((oldToasts) => oldToasts.filter(toast => toast.id !== id))
    }, []);

    useEffect(() => {
        bind(createToast);
    }, [bind, createToast])

    return (
        <Container>
            {toasts.map(({ id, message, duration }) => (
                <ToastItem
                    message={message}
                    duration={duration}
                    key={id}
                    onDone={() => removeToast(id)}
                />
            ))}
        </Container>
    )
}