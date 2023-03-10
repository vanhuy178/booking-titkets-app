import { Carousel } from 'antd';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchCarousel } from '../../../redux/actions/CarouselAction';


function HomeCarousel() {
    const contentStyle = {
        height: '760px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79'
    };
    const dispatch = useDispatch()
    const { listCarouselBanner } = useSelector((state) => state.carouselStore);
    console.log({ listCarouselBanner });
    useEffect(
        () => {
            // DISPATCH ACTION WITH REDUX THUNK
            // CAN DISPATCH A FUNCTION WITH A SUPPORT OF REDUX - THUNK
            // Because we was setting redux thunk , so we can pass into dispatch with a function
            // dispatch(action) ---> fetchCarousel() --> dispatch an action object to reducer
            dispatch(fetchCarousel())

        }, [])


    const renderImage = () => {
        return listCarouselBanner.map((item, index) => {
            return (
                <div key={index} >
                    <div className={`max-w-full`} style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                    </div>
                </div >
            )
        })
    }
    return (
        <>
            <Carousel className='home-carousel animate__animated  animate__fadeInUp'>
                {renderImage()}
            </Carousel>
        </>
    )
}

export default (HomeCarousel);