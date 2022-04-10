import React from "react";
import styled from "styled-components";
import CardContainer from "./CardContainer";
import { BD, CTitle, CDesc, OG } from "./Utility";
import play from "../Asset/Image/play.png";

const TBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const ArtistName = styled.div`
  font-size: 24px;
  margin-bottom: 3px;
`;

const ArtistType = styled.div`
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 50px;
  font-size: 12px;
`;

const ArtistChannels = styled.div`
  margin-bottom: 5px;
  display: flex;
`;

const ArtistChannel = styled.a`
  margin-right: 15px;
  width: 28px;
  height: 28px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3 ease-in-out;
  :hover {
    border: 1px solid rgba(255, 255, 255, 1);
  }
  :hover > img {
    opacity: 1;
  }
  :last-child {
    margin-right: 0px;
  }
`;

const ArtistChannelIcon = styled.img`
  width: 18px;
  height: 18px;
  opacity: 0.5;
  transition: 0.3 ease-in-out;
`;

const MBox = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const PlaylistHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-bottom: 10px;
`;

const PlaylistTags = styled.div`
  display: flex;
  margin-top: 15px;
  margin-bottom: 5px;
`;

const PlaylistTag = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  font-size: 10px;
  padding-right: 10px;
  padding-left: 10px;
  opacity: 0.5;
  margin-right: 15px;
  :last-child {
    margin-right: 0px;
  }
`;

const MusicList = styled.div`
  display: flex;
  flex-direction: column;
`;

const MusicItem = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  &:hover > div > div {
    color: rgba(255, 255, 255, 1);
  }
  &:hover > a {
    border: 1px solid rgba(255, 255, 255, 1);
  }
  &:hover > a > img {
    opacity: 1;
  }
  :last-child {
    margin-bottom: 5px;
  }
`;

const MusicIndex = styled.div`
  color: rgba(255, 255, 255, 0.3);
  font-size: 10px;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MusicContents = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 68px);
`;

const MusicTitle = styled.div`
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.5);
`;

const MusicArtist = styled.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.3);
`;

const MusicIconBox = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-left: 10px;
`;

const MusicIcon = styled.img`
  opacity: 0.3;
  width: 24px;
  height: 24px;
`;

const CardMusic = ({
  artistName,
  artistType,
  artistChannel,
  playlistTitle,
  playlistDesc,
  playlistTag,
  playlistArray,
}) => {
  return (
    <CardContainer>
      <TBox>
        <ArtistName>{artistName}</ArtistName>
        <ArtistType>{artistType}</ArtistType>
        <ArtistChannels>
          {artistChannel.map((channel, index) => (
            <ArtistChannel href={channel.url} target="_blank" key={index}>
              <ArtistChannelIcon src={channel.icon}></ArtistChannelIcon>
            </ArtistChannel>
          ))}
        </ArtistChannels>
      </TBox>
      <MBox>
        <PlaylistHeader>
          <CTitle>{playlistTitle}</CTitle>
          <CDesc>{playlistDesc}</CDesc>
          <PlaylistTags>
            {playlistTag.map((tag, index) => (
              <PlaylistTag key={index}>{tag}</PlaylistTag>
            ))}
          </PlaylistTags>
        </PlaylistHeader>
        <BD></BD>
        <MusicList>
          {playlistArray.map((music, index) => (
            <MusicItem key={index} href={music.url} target="_blank">
              <MusicIndex>#{index + 1}.</MusicIndex>
              <MusicContents>
                <MusicTitle>{music.title}</MusicTitle>
                <MusicArtist>{music.artist}</MusicArtist>
              </MusicContents>
              <MusicIconBox>
                <MusicIcon src={play}></MusicIcon>
              </MusicIconBox>
            </MusicItem>
          ))}
        </MusicList>
      </MBox>
      <OG>Youtube에서 확인하기</OG>
    </CardContainer>
  );
};

export default CardMusic;
