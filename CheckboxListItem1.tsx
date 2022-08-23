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

import { Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CheckboxListItem1Props } from './types';

 
const HoverFalseTypeQuest: any = styled("div")(({ theme }: any) =>({  
  backgroundColor: theme.palette["Primary"]["Contrast"],  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  width: `443px`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `12px`,  
  boxSizing: `border-box`,  
}));
  
const LeftSide: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  flexGrow: `1`,  
  margin: `0px`,  
});
  
const Checkbox1: any = styled(Checkbox)({  
  margin: `0px`,  
});
  
const Text: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  flexGrow: `1`,  
  margin: `0px 0px 0px 12px`,  
});
  
const Frame1: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  width: `227px`,  
  margin: `0px`,  
});
  
const Option1: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `700`,  
  fontSize: `16px`,  
  letterSpacing: `0.15000000596046448px`,  
  textDecoration: `none`,  
  lineHeight: `142.99999475479126%`,  
  textTransform: `none`,  
  flexGrow: `1`,  
  margin: `0px`,  
}));
  
const OptionDescriptionFor: any = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(130, 130, 130, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `400`,  
  fontSize: `12px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `16px`,  
  textTransform: `none`,  
  alignSelf: `stretch`,  
  margin: `0px`,  
});
 
function CheckboxListItem1(props: CheckboxListItem1Props): JSX.Element {
  return (
    <HoverFalseTypeQuest >
       <LeftSide >
         <Checkbox1  size="medium" color="primary" />
               <Text >
           <Frame1 >
             <Option1 >
               {`Option 1`}
                 </Option1>
           </Frame1>
           <OptionDescriptionFor >
             {`Option description for placeholder only, not to be read`}
               </OptionDescriptionFor>
         </Text>
       </LeftSide>
     </HoverFalseTypeQuest>
   );
}

export default CheckboxListItem1;
