import React from 'react';
import './styleCompononent/Detail_Movies.scss';

export default function Detail_Movies() {
    return (
        <div class="movie_card" id="ave">
            <div class="info_section">
                <div class="movie_header">
                    <img class="locandina" src="https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg" />
                    <h1>Black Panther</h1>
                    <h4>2018, Ryan Coogler</h4>
                    <span class="minutes">134 min</span>
                    <p class="type">Action, Adventure, Sci-Fi</p>
                </div>
                <div class="movie_desc">
                    <p class="text">
                        T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.
                    </p>
                </div>
                <div class="movie_social">
                    <ul>
                        <li><i class="material-icons">share</i></li>
                        <li><i class="material-icons"></i></li>
                        <li><i class="material-icons">chat_bubble</i></li>
                    </ul>
                </div>
            </div>
            <div class="blur_back ave_back"></div>
        </div>
    )
}
