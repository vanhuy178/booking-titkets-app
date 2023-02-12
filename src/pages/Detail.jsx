import React, { useEffect } from 'react'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import { useDispatch, useSelector } from 'react-redux'
import '../assets/styles/ratingCircle.css';
import TabsComponent from '../components/TabsComponent';
import { GET_DETAIL_MOVIE } from '../redux/types/ManagingMoviesType';
import { fetchDetailShowTimesMovies } from '../redux/actions/ManagingMovies';

export default function Detail(props) {
    let dispatch = useDispatch()

    useEffect(() => {

        // Find al rating items
        const ratingsQuery = document.querySelector(".ratingCirleElement");

        // Get content and get score as an int
        const retingContentItem = ratingsQuery.innerHTML;
        const ratingScore = parseInt(retingContentItem, 10);

        // Define if the score is good, meh or bad according to its value
        const scoreClass =
            ratingScore < 40 ? "bad" : ratingScore < 60 ? "meh" : "good";

        // Add score class to the rating
        ratingsQuery.classList.add(scoreClass);

        // After adding the class, get its color
        const ratingColor = window.getComputedStyle(ratingsQuery).backgroundColor;

        // Define the background gradient according to the score and color
        const gradient = `background: conic-gradient(${ratingColor} ${ratingScore}%, transparent 0 100%)`;

        // Set the gradient as the rating background
        ratingsQuery.setAttribute("style", gradient);

        // Wrap the content in a tag to show it above the pseudo element that masks the bar
        ratingsQuery.innerHTML = `<span>${ratingScore} ${retingContentItem.indexOf("%") >= 0 ? "<small>%</small>" : ""
            }</span>`;

        // TAKE INFO PARAMS FROM URL
        let { id } = props.match.params

        // WE WILL CALL API BY DISPATCH WITH FUNTION PASS BY ID
        dispatch(fetchDetailShowTimesMovies(id))
    }, [])


    // CONNECT TO STATE REDUX AND BUILD FUNCTION FOR CALL API IN SERVICES FOLDER
    // CODING...
    const { detailMoviesShowTimesInfo } = useSelector(state => state.managingMoviesStore);

    console.log(detailMoviesShowTimesInfo);
    return (
        <>
            <div style={{ backgroundImage: 'url(https://picsum.photos/200/300', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <CustomCard
                    style={{ paddingTop: '150px', minHeight: '100vh' }}
                    effectColor="#C780FF" // required
                    color="#14AEFF" // default color is white
                    blur={10} // default blur value is 10px
                    borderRadius={0} // default border radius value is 10px
                >
                    <div className="grid grid-cols-12">
                        <div className="col-span-4 col-start-4 flex">
                            <img src="https://picsum.photos/200/200" alt="" />
                            <div>
                                <p>tên phim</p>
                                <p>mô tả</p>
                            </div>
                        </div>
                        {/*RATING CIRCLE */}
                        <div className="col-span-5">
                            <div className="ratingCirleElement">62%</div>
                        </div>
                    </div>

                    <TabsComponent />
                </CustomCard>
            </div>
        </>
    )
}



