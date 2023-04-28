import Toast from "../../components/Toast"

export default {
    title: 'Component/Toast'
}

export const Default = () => {
    return (
        <button onClick={() => Toast.show("I'm Toast", 3000)}>Show Toast</button>
    )
}