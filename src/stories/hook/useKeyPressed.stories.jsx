import useKeyPress from "../../hooks/useKeyPress"

export default {
    title: 'Hook/useKeyPress'
}

export const Default = () => {
    const pressed = useKeyPress('?');

    // useKey('keyup', 'q', () => {
    //     alert('q key up');
    // })
    return <>{pressed ? '!' : '?'}</>
}