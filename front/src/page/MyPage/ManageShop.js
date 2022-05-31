import React from 'react'
import { Container, Row} from 'react-bootstrap'
import Header from '../../component/HeaderOwner'
import SecondHeader from "../../component/SecondHeader";
import ShopManageContainer from "../../container/ShopManageContainer";

/*const SecondHeader = ({props}) => {
    return (
        <Row>
            <button onClick={() => window.history.back()}>
                <BsChevronLeft className="text-dark"/>
            </button>

            <h4>가게 관리</h4>
            <Link to="/owner/mypage/registshop">
                <Button>추가</Button>
            </Link>

        </Row>
    )
}*/





const ManageShop = ({match}) => {
    const { id } = match.params;
    return (
        <>
            <Header/>
            <Container className="mt-3">
                <Row className="col-xs-2 pl-3 text-center">
                    <SecondHeader title="가게 관리" link="/owner/mypage/registshop" buttonName="추가"/>
                </Row>

                <ShopManageContainer sId={parseInt(id, 10)}/>
            </Container>
    </>
  );
};
export default ManageShop;
