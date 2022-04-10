import React from "react";
import Container from "../Components/Container";
import MenuContainer from "../Components/MenuContainer";
import MenuHeader from "../Components/MenuHeader";
import MenuArray from "../Asset/Data/MenuArray";
import { useLocation } from "react-router-dom";
import CardLog from "../Components/CardLog";
import Masonry from "react-masonry-css";
import LogArray from "../Asset/Data/LogArray";
import SentenceArray from "../Asset/Data/SentenceArray";
import CardSentence from "../Components/CardSentence";
import CardMusic from "../Components/CardMusic";
import MusicArray from "../Asset/Data/MusicArray";

const Menu = () => {
  const { pathname } = useLocation();
  const pathEdited = pathname.substr(1, pathname.length);
  const { title, subTitle } = MenuArray[pathEdited];
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <Container>
      <MenuContainer>
        <MenuHeader title={title} subTitle={subTitle}></MenuHeader>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {pathEdited === "log"
            ? LogArray.map((log, index) => (
                <CardLog
                  key={index}
                  img={log.img}
                  title={log.title}
                  desc={log.desc}
                  date={log.date}
                  originName={log.origin.name}
                  originUrl={log.origin.url}
                ></CardLog>
              ))
            : pathEdited === "sentence"
            ? SentenceArray.map((sentence, index) => (
                <CardSentence
                  key={index}
                  sentence={sentence.sentence}
                  originType={sentence.origin.type}
                  originName={sentence.origin.name}
                  originUrl={sentence.origin.url}
                ></CardSentence>
              ))
            : MusicArray.map((playlist, index) => (
                <CardMusic
                  key={index}
                  artistName={playlist.artistName}
                  artistType={playlist.artistType}
                  artistChannel={playlist.artistChannel}
                  playlistTitle={playlist.playlistTitle}
                  playlistDesc={playlist.playlistDesc}
                  playlistTag={playlist.playlistTag}
                  playlistArray={playlist.playlistArray}
                ></CardMusic>
              ))}
        </Masonry>
      </MenuContainer>
    </Container>
  );
};

export default Menu;
