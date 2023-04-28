import Menu from '@components/domain/Menu'; 

const DefaultTemplate = ({ children }) => {
    return <div>
        <Menu />
        {children}
    </div>
};

export default DefaultTemplate;