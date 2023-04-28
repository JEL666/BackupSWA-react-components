import Spinner from "../../components/Spinner";

export default {
    title: 'Component/Spinner',
    componenet: Spinner,
    argTypes: {
        size: {
            defaultValue: 24,
            control: 'number'
        },
        color: {
            control: 'color'
        },
        loading: {
            typeof: 'boolean',
            defaultValue: 'true'
        }
    }
}

export const Default = (args) => {
    return <Spinner {...args} />;
};