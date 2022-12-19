/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { Tooltip, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Card2Props } from 'types';
import useCard2 from 'components/Card2/useCard2';

const Card21: any = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  boxShadow: `0px 4px 6px rgba(3, 0, 161, 0.2)`,
  borderRadius: `8px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  height: `500px`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Image: any = styled('header')({
  backgroundImage: `url(assets/imagesB/Card2_Image.png)`,
  backgroundPosition: `center`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  alignSelf: `stretch`,
  height: `257px`,
  margin: `0px`,
  overflow: `hidden`,
});

const TextButton: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px 40px 20px 40px`,
  boxSizing: `border-box`,
  height: `186px`,
  margin: `30px 0px 0px 0px`,
});

const LoremIpsumTestToBeSe: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Heebo`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `297.86px`,
  margin: `0px`,
});

const AutoAddedFrame: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `30px 0px 0px 0px`,
  overflow: `hidden`,
});

const ButtonClicked: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(107, 104, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Heebo`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  height: `48px`,
  width: `138px`,
  margin: `0px`,
});

const ButtonContained: any = styled(Button)({
  margin: `30px 0px 0px 0px`,
});

function Card2(props: Card2Props): JSX.Element {
  const { fns } = useCard2();

  return (
    <Card21>
      <Tooltip arrow={true} placement={'top'} title={'boats'}>
        <Image id={'boatymcboatface'}></Image>
      </Tooltip>
      <TextButton>
        <LoremIpsumTestToBeSe>
          {`Lorem ipsum test to be seen and not read for placement only. Lorem ipsum test to be seen.`}
        </LoremIpsumTestToBeSe>
        {false && (
          <AutoAddedFrame>
            <ButtonClicked>{`Button Clicked!`}</ButtonClicked>
          </AutoAddedFrame>
        )}
        <ButtonContained
          variant="contained"
          size="large"
          color="primary"
          onClick={fns.handleButtonClickedThiagoTest4}
        >
          {' '}
          Large{' '}
        </ButtonContained>
      </TextButton>
    </Card21>
  );
}

export default Card2;
