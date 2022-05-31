import { React, useEffect, useState, useCallback } from 'react';
import { BiMap } from 'react-icons/bi';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Header from '../component/Header';
import Slider from '../component/Slider';
import CategoryButton from '../component/CategoryButton';
import axios from 'axios';

const Home = () => {
  let address = localStorage.getItem('addr');
  let history = useHistory();
  const [category, setCategory] = useState([]);

  const fetchCategory = useCallback(async () => {
    try {
      const result = await axios.get('http://localhost:5000/category/read-all');
      setCategory(result.data);
      console.log(category);
    } catch (err) {
      console.log(err);
    }
  }, [category]);

  useEffect(() => {
    fetchCategory();
    return () => {
      console.log('dsf');
    };
  }, []); //warning 떠서 임의로 수정
  // textFit(document.getElementsByClassName("addr"), {multiLine: true});

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
          <div
            style={{
              width: '100%',
              height: '20px',
              textOverflow: 'ellipsis',
              overflow: 'hidden', // 글자 넘치는 것을 자름
              whiteSpace: 'nowrap',
            }}
          >
            <BiMap className="mr-3" />
            {address}
          </div>
        </Button>
        {/* </Link> */}
        <Slider />
        {/* <CategoryButton className="col-1"/> */}
        <div className="mt-3 mb-3">
          <div className="d-flex mt-2">
            <CategoryButton
              image={'uploads/like1621529554334.png'}
              name="좋아요"
              className="col-xs-4"
              cId={2}
            />

            <CategoryButton
              image={'uploads/electronic1621529546700.png'}
              name="가전제품"
              className="col-xs-4"
              cId={3}
            />

            <CategoryButton
              image={'uploads/dosirac1621529538417.png'}
              name="도시락"
              className="col-xs-4"
              cId={4}
            />

            <CategoryButton
              image={'uploads/desert1621529530613.png'}
              name="디저트"
              className="col-xs-4"
              cId={5}
            />
          </div>
          <div className="d-flex mt-2">
            <CategoryButton
              image={'uploads/mart1621529558596.png'}
              name="마트"
              className="mr-3"
              cId={6}
            />
            <CategoryButton
              image={'uploads/bunsic1621529513166.png'}
              name="분식"
            />
            <CategoryButton
              image={'uploads/sports1621529570250.png'}
              name="스포츠"
              cId={7}
            />
            <CategoryButton
              image={'uploads/asian1621529509447.png'}
              name="아시안"
              cId={8}
            />
          </div>
          <div className="d-flex mt-2">
            <CategoryButton
              image={'uploads/yangsic1621529578325.png'}
              name="양식"
              className="mr-3"
              cId={9}
            />
            <CategoryButton
              image={'uploads/wear1621529574142.png'}
              name="의류"
              cId={10}
            />
            <CategoryButton
              image={'uploads/japan1621529550796.png'}
              name="일식"
              cId={11}
            />
            <CategoryButton
              image={'uploads/drink1621529542800.png'}
              name="주류"
              cId={12}
            />
          </div>
          <div className="d-flex mt-2">
            <CategoryButton
              image={'uploads/chicken1621529353710.jpg'}
              name="치킨"
              className="mr-3"
              cId={13}
            />
            <CategoryButton
              image={'uploads/pizza1621529419795.jpg'}
              name="피자"
              cId={14}
            />
            <CategoryButton
              image={'uploads/phone1621529562260.png'}
              name="휴대폰"
              cId={15}
            />
            <CategoryButton
              image={'uploads/hamburger1621529374043.jpg'}
              name="햄버거"
              cId={16}
            />
          </div>
        </div>
        <footer></footer>
      </Container>
    </>
  );
};

export default Home;
