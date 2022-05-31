import React from 'react'
import { Container} from 'react-bootstrap'
import Header from '../component/HeaderOwner'
import SecondHeader from '../component/SecondHeader'
import EventModifyContainer from "../container/EventModifyContainer";


const EventModify = ({match}) => {
    console.log(match)
    const { id } = match.params;

  return (
    <>
      <Header />
      <Container className="mt-3">
        <SecondHeader title="이벤트수정" link="/" buttonName="저장" />
        <EventModifyContainer eId={parseInt(id, 10)} />
      </Container>
    </>
  );
};

export default EventModify;
