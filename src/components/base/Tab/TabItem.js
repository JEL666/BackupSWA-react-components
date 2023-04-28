import PropTypes from 'prop-types';
import Text from '../../Text';
import styled from '@emotion/styled';

const TabItemWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 60px;
    background-color: ${({ active }) => active ? '#ddf' : '#eee'};
    cursor: pointer;
`;

export default function TabItem ({
    title,
    index,
    active,
    ...props
}) {
    return <TabItemWrapper active={active} {...props}>
        <Text strong={active}>
            {title}
        </Text>
    </TabItemWrapper>;
};

TabItem.defaultProps = {
    __TYPE: 'Tab.Item'
}
TabItem.propTypes = {
    __TYPE: PropTypes.oneOf(['Tab.Item']).isRequired
}