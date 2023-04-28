import styled from '@emotion/styled';
import Header from '../components/Header';
import Icon from '../components/Icon';
import Text from '../components/Text';

const Page = styled.div`
    position: fixed;
    background: linear-gradient( 45deg, #DCF0F8, #F7F0DC, #F3ADCF );
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

const TitleWrapper = styled.div`
    margin: 0 auto;
`;
const SubTitle = styled.h2`
    font-size: inherit;
    transform: translate(-10%, -100%);
`;

const Description = styled.div`
    position: inherit;
    display: flex;
    text-align: center;
    margin: 10rem auto 0;
    border: 1px solid #FF62B7;
    box-sizing: border-box;
    border-radius: 8px;
    text-align: left;
    padding: 20px;
    flex-direction: column;
`;

const DescriptionContent = styled.pre`
    left: -10%;
`; 
const LinkButton = styled.a`
    display: flex;
    font-size: 20px;
    text-align: center;
    text-decoration: none;
    color: black;
    margin-top: 10rem;
    flex-direction: column;

    &:hover {
        color: violet;
    }
`;
export default function Main() {
    const descriptionContent = `
        1. 방 만들기 버튼 클릭
        2. 생일인 사람의 생일, 이메일을 적기
        3. 생성된 방에서 편지 작성 및 선물 등록하기
        4. 다른 친구에게 링크를 공유하기
        
        생일이 되면 자동으로 메세지 및 선물 확인을 위한 이메일이 전송됩니다.`;
        
    return (
    <Page>
        <TitleWrapper>
            <Header>생일빵</Header>
            <SubTitle>BirthdayPostBox</SubTitle>
        </TitleWrapper>

        <Description>
            <Text block='true' strong='true'>생일빵 : birthday postbox 이용방법은 다음과 같습니다.</Text>
            <DescriptionContent>{descriptionContent}</DescriptionContent>
        </Description>

        <LinkButton href='http://localhost:3000'><Icon name="gift" size={100} /><br/>링크 버튼</LinkButton>
    </Page>
    );
}