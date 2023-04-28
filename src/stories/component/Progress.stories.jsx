import Progress from "../../components/Progress";
import { useState } from "react";
export default {
    title: "Component/Progress",
    component: Progress,
    argTypes: {
        value: { defaultValue: 1, control: 'number' },
    }
}

export const Default = (args) => {
    const [value, setValue] = useState(20);

    return <div>
        <button onClick={() => setValue(100)}>change value</button>
        <Progress value={value} />
    </div>
}
