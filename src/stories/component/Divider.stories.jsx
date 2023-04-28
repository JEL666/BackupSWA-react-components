import Divider from "../../components/Divider";
import Text from "../../components/Text";

export default {
    title: 'Component/Divider',
    component: Divider,
};

export const Horizontal = () => {
    return (
        <>
            <Text>위</Text>
            <Divider type="horizontal" />
            <Text>아래</Text>
        </>
    );
}

export const Vertical = () => {
    return (
        <>
            <Text>왼</Text>
            <Divider type="vertical" />
            <Text>오른</Text>
        </>
    );
}

export const test = () => {
    return (
        <>
            <Text>1</Text>
            <Divider type="vertical" />
            <Text>2</Text>
            <Divider type="vertical" />
            <Text>3</Text>
            <Divider type="horizontal" />
            <Text>4</Text>           
            <Divider type="vertical" />
            <Text>5</Text>
            <Divider type="vertical" />
            <Text>6</Text>
            <Divider type="horizontal" />
            <Text>7</Text>           
            <Divider type="vertical" />
            <Text>8</Text>
            <Divider type="vertical" />
            <Text>9</Text>
            </>
    );
}