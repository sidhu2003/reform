import React from "react";
import Styles from "./new.module.css";
import Energy from "./images/energy.png";
import Windmill from "./images/windmill.svg";
import yellow from "./images/yellow.jpg";
import read from "./images/read.svg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const Blogs = () => {
  const dummytext = {
    headtext: "Lorem Ipsum is simply a dummy text",
    subtext: "DECEMBER 06,2023 /ADMIN",
    text: "Lorem ipsum is simply a dummy text of the priniting and typesetting industry, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ,when an unknown printer.",
  };
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.headerwrapper}>
        <div className={Styles.latest}>Latest News Feeds</div>
      </div>
      <div className={Styles.newwrapper}>
        <div className={Styles.photoswrapper}>
          <div className={Styles.eachphoto}>
            <div className={Styles.imagewrapper}>
              <img src={Energy} className={Styles.photo}></img>
            </div>

            <div className={Styles.subpart}>
              <div className={Styles.headtext}>{dummytext.headtext}</div>
              <div className={Styles.subtext}>{dummytext.subtext}</div>
              <div className={Styles.text}>{dummytext.text}</div>
              <div className={Styles.readinfo}>
                <div className={Styles.readmore}>READ MORE</div>
                <MdKeyboardDoubleArrowRight className={Styles.rightarrow} />
              </div>
            </div>
          </div>
          <div className={Styles.eachphoto}>
            <div className={Styles.imagewrapper}>
              <img src={Windmill} className={Styles.photo}></img>
            </div>
            <div className={Styles.subpart}>
              <div className={Styles.headtext}>{dummytext.headtext}</div>
              <div className={Styles.subtext}>{dummytext.subtext}</div>
              <div className={Styles.text}>{dummytext.text}</div>
              <div className={Styles.readinfo}>
                <div className={Styles.readmore}>READ MORE</div>
                <MdKeyboardDoubleArrowRight className={Styles.rightarrow} />
              </div>
            </div>
          </div>
          <div className={Styles.eachphoto}>
            <div className={Styles.imagewrapper}>
              <img src={yellow} className={Styles.photo}></img>
            </div>
            <div className={Styles.subpart}>
              <div className={Styles.headtext}>{dummytext.headtext}</div>
              <div className={Styles.subtext}>{dummytext.subtext}</div>
              <div className={Styles.text}>{dummytext.text}</div>
              <div className={Styles.readinfo}>
                <div className={Styles.readmore}>READ MORE</div>
                <MdKeyboardDoubleArrowRight className={Styles.rightarrow} />
              </div>
            </div>
          </div>
          <div className={Styles.eachphoto}>
            <div className={Styles.imagewrapper}>
              <img src={read} className={Styles.photo}></img>
            </div>
            <div className={Styles.subpart}>
              <div className={Styles.headtext}>{dummytext.headtext}</div>
              <div className={Styles.subtext}>{dummytext.subtext}</div>
              <div className={Styles.text}>{dummytext.text}</div>
              <div className={Styles.readinfo}>
                <div className={Styles.readmore}>READ MORE</div>
                <MdKeyboardDoubleArrowRight className={Styles.rightarrow} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
