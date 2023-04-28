import useLoacalStorage from "../../hooks/useLocalStorage"

export default {
    title: 'Hook/useLocalStorage'
}

export const Default = () => {
    const [status, setStatus] = useLoacalStorage('status', '404 NOT FOUDN');

    return (
        <div>
            <button onClick={() => setStatus('200 OK')}>Resend</button>
            {status}
        </div>
    )
}