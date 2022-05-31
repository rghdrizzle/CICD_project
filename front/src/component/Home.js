import React from 'react';
import CategoryButton from './CategoryButton';
import { useHistory } from 'react-router-dom';
import { template } from '@babel/core';

const Home = ({ lists }) => {
  let history = useHistory();
  let n = 0;
  return (
    <div className="mt-3">
      <div className="d-flex mt-2">
        {/*{lists.map(e => (
                            n === 4? <br/> : <CategoryButton name={e.name} className="mr-3"/>

                        ))

                        }*/}
        {lists.map((e) => {
          n += 1;
          return n % 4 === 0 ? (
            <CategoryButton
              key={e.category_id}
              onClick={() =>
                history.push(
                  `http://localhost:5000/category/${e.category_id}/list`,
                )
              }
              name={e.name}
              image={e.image_name}
              className="mr-3"
            />
          ) : (
            <CategoryButton
              name={e.name}
              image={e.image_name}
              className="mr-3"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
