import React from "react";
import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/1214566/pexels-photo-1214566.jpeg?cs=srgb&dl=pexels-hassan-ouajbir-1214566.jpg&fm=jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title"> About Me</h1>
        <p className="a-sub">
          It is a long established fact that a content will be more readable
          when presented nicely.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos odio
          nam non a voluptas quas iure deleniti vel reiciendis soluta facilis ea
          cumque mollitia consequuntur, beatae laudantium aspernatur, pariatur
          quibusdam sit? Perferendis cum nulla ad reiciendis accusantium placeat
          porro tenetur odit tempora blanditiis voluptas fugit id dignissimos
          quis unde, cupiditate quos consequuntur aspernatur vel dolores?
          Suscipit, ipsum voluptatem! Rerum nihil debitis sed pariatur earum
          velit aut magni blanditiis repudiandae reiciendis facilis, optio
          tenetur explicabo quia nulla voluptatem sunt iure. Ad, itaque in
          fugiat quod non voluptatibus doloremque incidunt harum nemo expedita
          magnam quo alias animi eius.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Award 2021</h4>
            <p className="a-award-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sed
              neque culpa, eos magnam repellendus harum pariatur ullam ab
              laboriosam magni corrupti quasi natus voluptatum qui nihil
              accusantium? Officia porro inventore aperiam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
