import { useState } from "react";
import useHotKey from "../../hooks/useHotKey";

export default {
    title: 'Hook/useHotKey'
}

export const Default = () => {
    const [value, setValue] = useState('');
    const hotkeys = [
        {
            global: true,
            combo: 'meta+k',
            onKeyDown: (e) => {
                alert('meta+shift+k');
            }
        },
        {
            global: true,
            combo: 'meta+shift+l',
            onKeyDown: (e) => {
                alert('meta+shift+l');
            }
        },
        {
            combo: 'esc',
            onKeyDown: (e) => {
                setValue('');
            }
        }
    ]
    const { handleKeyDown } = useHotKey(hotkeys);

    return <>
        <div>useHotKey 테스트</div>
        <input onKeyDown={handleKeyDown} value={value} onChange={(e) => setValue(e.target.value)} />
    </>
}