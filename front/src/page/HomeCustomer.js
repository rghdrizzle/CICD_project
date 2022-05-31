import React, {useEffect, useState} from 'react';
import { BiMap } from 'react-icons/bi';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Slider from '../component/Slider';
import CategoryButton from '../component/CategoryButton';
import Header from "../component/HeaderCustomer";
import axios from "axios";

const Home = () => {
  let address = '경기도 파주시 조리읍';
  let history = useHistory();
  const [data, setData] = useState({ hits: [] });
  // useEffect(async () => {
  //   const result = await axios('http://localhost:5000/image/read/13');
  //   console.log(result.data);
  //   setData(result.data);
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:5000/image/read/13');
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <Container>
        {/* <Link to="/post"> */}
        <Button
          variant="light"
          className="border border-dark mt-3"
          block
          onClick={() => history.push('/post')}
        >
          <BiMap className="mr-3" />
          {address}
        </Button>
        {/* </Link> */}
        <Slider />
        {/* <CategoryButton className="col-1"/> */}

        <div className="mt-3">
          <div className="d-flex mt-2">
            <CategoryButton cId={1}
                            image={'uploads/' + data.image_name}
                            name="좋아요"
                            className="mr-3"
            />
            <CategoryButton cId={2}
                            image={'uploads/' + data.image_name}
                            name="가전제품"
            />
            <CategoryButton cId={3}
                            image={'uploads/' + data.image_name}
                            name="도시락"
            />
            <CategoryButton cId={4}
                            image={'uploads/' + data.image_name}
                            name="디저트"
            />
          </div>
          <div className="d-flex mt-2">
            <CategoryButton cId={5}
                            image={'uploads/' + data.image_name}
                            name="마트"
                            className="mr-3"
            />
            <CategoryButton cId={6} image={'uploads/' + data.image_name} name="분식" />
            <CategoryButton cId={7}
                            image={'uploads/' + data.image_name}
                            name="스포츠"
            />
            <CategoryButton cId={8}
                            image={'uploads/' + data.image_name}
                            name="아시안"
            />
          </div>
          <div className="d-flex mt-2">
            <CategoryButton cId={9}
                            image={'uploads/' + data.image_name}
                            name="양식"
                            className="mr-3"
            />
            <CategoryButton cId={10} image={'uploads/' + data.image_name} name="의류" />
            <CategoryButton cId={11} image={'uploads/' + data.image_name} name="일식" />
            <CategoryButton cId={12} image={'uploads/' + data.image_name} name="주류" />
          </div>
          <div className="d-flex mt-2">
            <CategoryButton cId={13}
                            image={'uploads/' + data.image_name}
                            name="치킨"
                            className="mr-3"
            />
            <CategoryButton cId={14} image={'uploads/' + data.image_name} name="피자" />
            <CategoryButton cId={15}
                            image={'uploads/' + data.image_name}
                            name="휴대폰"
            />
            <CategoryButton cId={16}
                            image={'uploads/' + data.image_name}
                            name="햄버거"
            />
          </div>
        </div>
            </Container>
        </>
    );
};

export default Home;
