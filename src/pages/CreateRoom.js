import styled from "@emotion/styled";
import Spacer from "../components/Spacer";
import useForm from "../hooks/useForm";

const PageWrapper = styled.div`
    position: absolute;
    background: linear-gradient( 45deg, #DCF0F8, #F7F0DC, #F3ADCF );
    width: 100%;
    height: 100%;
`;

const FormBox = styled.form`
    position: fixed;
    width: 80%;
    margin: 0 10%;
    background-color: white;
    text-align: center;
    border-radius: 16px;

    box-sizing: border-box;
    box-shadow: 6.79014px 6.79014px 20.3704px 5.43212px rgba(0, 0, 0, 0.14);
`;

const InputContainer = styled.div`
    margin-top: 30px;
`;
const Label = styled.div`

`;
const Input = styled.input`
    border: 0px;
    border-bottom: 0.5px solid black;

    &:focus {
        outline: none;
    }

`;
const LinkButton = styled.button`
    background-color: #FFE2EA;
    border-radius: 4px;
    border: 0px;
    padding: 10px;
    width: 200px;
    height: 80px;
    font-size: 20px;
    font-weight: bold;

    &:hover {
        cursor: pointer
    }
`

const StyledInput = styled.input`
  padding: 0.5em;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 1.2rem;
  background-color: #f2f2f2;
  color: #333;
  text-align: center;
  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
    margin-right: 0.5rem;
  }
`;

const ErrorMessage = styled.span`
    display: flex;
    color: red;
    
`;
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), 1000);
    })
}

export default function CreateRoom() {
    const { isLoading, errors, handleChange, handleSubmit } = useForm({
        initialState: {
            roomName: '',
            brithday: '',
            email: ''
        },
        onSubmit: async (values) => {
            await sleep();
            alert(JSON.stringify(values));
        },
        validate: ({ roomName, email, month, day }) => {
            const errors = {};
            if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) errors.email = '올바른 이메일을 입력해주세요.';
            if (!roomName) errors.roomName = '방 이름을 입력해주세요.';
            if (!email) errors.email = '이메일을 입력해주세요.';
            if (!month) errors.brithday = '생일을 입력해주세요.';
            if (!day) errors.brithday = '생일을 입력해주세요.';
            return errors;
        }
    });
    return (
        <PageWrapper>
            <h2>생일빵: Brithday Postbox</h2>
            <FormBox onSubmit={handleSubmit}>
                <Spacer type="vertical">
                    <h1>새로운 방 생성하기</h1>
                    <InputContainer>
                        <Label>방 이름</Label>
                        <Input
                        name="roomName"
                        type="text"
                        placeholder="방 이름을 입력해주세요."
                        onChange={handleChange}
                        />
                        <ErrorMessage>{errors.roomName}</ErrorMessage>
                    </InputContainer>
                    <InputContainer>
                        <Label>생일을 입력해주세요.</Label>
                        <StyledInput
                        name="brithday"
                        type="date"
                        min="2025-01-01"
                        onChange={handleChange}
                        />
                        <ErrorMessage>{errors.birthday}</ErrorMessage>
                    </InputContainer>
                    <InputContainer>
                        <Label>이메일을 입력해주세요. </Label>
                        <Input
                        name="email"
                        type="email"
                        label="선물을 받음 사람의 이메일을 입력해주세요."
                        placeholder=""
                        onChange={handleChange}
                        />
                        <ErrorMessage>{errors.email}</ErrorMessage>
                    </InputContainer>
                    <InputContainer>
                        <LinkButton type="submit" disabled={isLoading}>{isLoading ? '로딩중...' : '링크 생성하기' }</LinkButton>
                    </InputContainer>
                </Spacer>
            </FormBox>
        </PageWrapper>
    );
}