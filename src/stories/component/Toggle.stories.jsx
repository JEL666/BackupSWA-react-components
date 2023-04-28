import Toggle from "../../components/Toggle"

export default {
    name: "Component/Toggle",
    component: Toggle,
    argTypes: {
        disabled: { control: 'boolean' }
    }

}

export const Default = (args) => {
    return <>
        <Toggle {...args}></Toggle>
    </>;
}
