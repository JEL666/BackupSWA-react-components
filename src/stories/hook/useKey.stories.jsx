import useKey from "../../hooks/useKey"

export default {
    title: 'Hook/useKey'
}

export const Default = () => {
    useKey('keyup', 'f', () => {
        alert('f key up');
    })

    // useKey('keyup', 'q', () => {
    //     alert('q key up');
    // })
    return <>useKey</>
}