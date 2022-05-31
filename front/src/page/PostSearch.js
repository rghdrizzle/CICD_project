import { React }  from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';
import { Button } from 'react-bootstrap';
import DaumPostcode from 'react-daum-postcode';
import Header from '../component/Header';
import Geocode from 'react-geocode';


Geocode.setApiKey('AIzaSyCNDPEwEVKChg2oF0Yzb7ttIBmiM-pl-NQ');
Geocode.setLanguage('ko');
Geocode.enableDebug();

const postCodeStyle = {
  display: 'block',
  position: 'absolute',
  //   top: '50%',
  width: '100%',
  height: '100%',
  padding: '7px',
};

const PostSearch = ({history}) => {
  const goBack = () => {
    history.goBack();
  };
  const goHome = () => {
    history.push('/');
  };
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    window.localStorage.setItem('addr',fullAddress);
    window.alert(fullAddress + '\n로 설정되었습니다.');
    goHome();
    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  const getAddressFromLatLng = (lat, lon) => {
    Geocode.fromLatLng(lat, lon).then(
      (response) => {
        const address = response.results[0].formatted_address;
        window.alert(address + '\n로 설정되었습니다.');
        window.localStorage.setItem('addr',address);
        return address;
      },
      (error) => {
        console.log(error);
      },
    );
  };

  

  return (
    <>
      <Header />
      <div className="mt-4">
        <div className="row">
          <div className="col-2 pl-3 text-center">
            <button
              type="button"
              className="btn btn-link border-dark"
              onClick={goBack}
            >
              <BsChevronLeft className="text-dark" />
            </button>
          </div>
          <div className="col-9 text-center">
            <Button
              // data-toggle="modal"
              // data-target="#PostModal"
              onClick={() => {
                navigator.geolocation.getCurrentPosition(function (pos) {
                  var lat = pos.coords.latitude;
                  var lon = pos.coords.longitude;
                  window.localStorage.setItem('lat',lat);
                  window.localStorage.setItem('lon',lon);
                  getAddressFromLatLng(lat, lon);
                  goHome();
                });
              }}
              variant="light"
              className="border border-dark w-100"
              style={{ width: '100%' }}
              block
            >
              <BiMap className="mr-3" />
              현재 위치
            </Button>
            {/* <div class="modal fade" id="PostModal" tabindex="-1" role="dialog" aria-labelledby="DeleteModalLabel2" aria-hidden="true">
                <div class="modal-dialog" role="document">
                <div class="modal-content">
                    
                    <div class="modal-body">
                      <p>이 주소가 맞습니까?</p>
                      <p>{window.localStorage.getItem('addr')}</p>
                      
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-primary">현재 위치로 설정</button>
                    </div>
                </div>
            </div>
        </div> */}
          </div>
        </div>
        <DaumPostcode style={postCodeStyle} onComplete={handleComplete} />
      </div>
    </>
  );
};

export default PostSearch;
