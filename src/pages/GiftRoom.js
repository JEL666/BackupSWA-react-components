import styled from "@emotion/styled";
import { useState } from "react";
import Modal from '../components/Modal';

const PageBackground = styled.div`
    position: fixed;
    background: linear-gradient( 45deg, #DCF0F8, #F7F0DC, #F3ADCF );
    width: 100%;
    height: 100%;
    overflow: auto;
`;

const ContentContainer = styled.div`
    margin: 5% 10% 0 10%;
    z-index: 1;
`;

const DisplayBox = styled.form`
    position: relative;
    min-height: 600px;
    min-width: 80%;
    background-color: white;
    text-align: center;
    border-radius: 16px;
    box-sizing: border-box;
    box-shadow: 6.79014px 6.79014px 20.3704px 5.43212px rgba(0, 0, 0, 0.14);
`;

const RoomDate = styled.span`
    border: 2px solid gray;
    border-radius: 16px;
    margin-left: 8px;
`;

const SideBar = styled.div`
    position: fixed;
    top: 60%;
    right: 0;
    min-width: 8%;
    margin: 1%;
`;

const Button = styled.button`
    display: block;
    width: 100%;
    background-color: #1fe0;
    border: 1px solid black;
    &:hover {
        cursor: pointer;
    }
    &:not(:first-of-type) {
        margin-top: 10px;
    }
`;

const LeaveGiftButtonStyle = {
    display: 'inline-block',
    width: '30%',
    height: '55%',
    margin: '10% 10% 0 10%',
    boxSizing: 'border-box',
    border: 'none',
    backgroundColor: '#C49DE7',
    color: 'white',
    fontSize: '1.4rem',
    borderRadius: '44.66px',

    '&:hover': {
        backgroundColor: '#A86DD7'
    }
};

export default function GiftRoom() {
    const roomName = '방이름';
    const roomDate = 'D-335'; // 데이터 형식에 따라 차후 가공방식을 결정
    const [celebrationVisible, setCelebrationVisible] = useState(false);

    const handleCopyAddress = () => {
        navigator.clipboard.writeText(window.location.href);
    }

    DUMMY.messages.map((id, sender) => {
        console.log(id, sender);
    })
    return (
        <PageBackground>
            <ContentContainer>
                <h1>
                    생일빵<br/>
                    Birthday Postbox
                </h1>
                <h2>{roomName}<RoomDate>{roomDate}</RoomDate></h2>
                <DisplayBox>test</DisplayBox>
            </ContentContainer>
            <SideBar>
                <Button onClick={() => handleCopyAddress()}>링크 복사</Button>
                <Button onClick={() => setCelebrationVisible(true)}>축하하기</Button>
            </SideBar>
            <Modal
            visible={celebrationVisible}
            onClose={() => setCelebrationVisible(false)}
            width='80%'
            height='55%'
                >
                <Button style={LeaveGiftButtonStyle}>메시지 남기기</Button>
                <Button style={LeaveGiftButtonStyle}>선물 남기기</Button>
            </Modal>
        </PageBackground>
    );
}

// 방 정보 API 결과
const DUMMY = {
    "room_name" : "",
    "room_date" : "",
    "messages": [
            {
                "message_id": "JD8DG5",
                "message_sender": "김보리"
            },
            {
                "message_id": "JD8D66",
                "message_sender": "박수강"
            },
    ],
    "present": [
            {
                "present_id": "JD8DG5",
                "present_sender": "김보리"
            },
            {
                "present_id": "JD8D66",
                "present_sender": "박수강"
            },
    ]   
}
