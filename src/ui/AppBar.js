import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import { Flex } from '@rebass/grid';

import { themed } from 'theme';
import { RoundButton } from 'ui/common';
import { useMessageService } from 'services/messages';

export function AppBar() {
  const { broadcastStream, coven, ableToBroadcast } = useMessageService();
  const videoRef = useRef();
  const streamPeerId = useRef();
  useEffect(() => {
    coven.on('stream', ({ peerId, stream }) => {
      const video = videoRef.current;
      streamPeerId.current = peerId;
      if ('srcObject' in video) {
        video.srcObject = stream;
      } else {
        if (video.src) {
          window.URL.revokeObjectURL(video.src);
        }
        video.src = window.URL.createObjectURL(stream);
      }

      video.play().catch(() => {
        if (window.confirm('A peer attempt to broadcast. Accept?')) {
          return video.play();
        }
      });
    });
    coven.on('disconnection', peerId => {
      if (streamPeerId.current === peerId) {
        const video = videoRef.current;
        streamPeerId.current = null;
        video.pause();
        if ('srcObject' in video) {
          video.srcObject = null;
        } else {
          window.URL.revokeObjectURL(video.src);
        }
      }
    });
  }, [coven]);
  return (
    <Header>
      <Draggable defaultPosition={{ x: 10, y: 10 }}>
        <Video ref={videoRef} />
      </Draggable>
      <h1>TeleStam</h1>
      {ableToBroadcast && (
        <RoundButton primary onClick={broadcastStream}>
          <i className="gg-camera" />
        </RoundButton>
      )}
    </Header>
  );
}

const Video = styled.video`
  height: 150px;
  width: 150px;
  position: fixed;
`;

const Header = styled(Flex).attrs({
  as: 'header',
  px: '10px',
  py: '5px',
  justifyContent: 'space-between',
})`
  background-color: ${themed('palette.primary')};
  color: ${themed('palette.textP')};

  h1 {
    margin: 0;
  }
`;
