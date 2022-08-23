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

import { styled } from '@mui/material/styles';
import PicImage from './assets/images/pic.png';

 
const TypeQuest = styled("div")({  
  borderRadius: `14px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  width: `417px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  overflow: `hidden`,  
});
  
const Pic = styled("div")({  
  backgroundImage: `url(${PicImage})`,  
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
  height: `613px`,  
  margin: `0px`,  
});
  
const About = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `20px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `0px`,  
});
  
const AboutProduct = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `space-between`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  flexGrow: `1`,  
  margin: `0px`,  
});
  
const Text = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px 0px 10px 0px`,  
  boxSizing: `border-box`,  
});
  
const Product = styled("div")(({ theme }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `500`,  
  fontSize: `22px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `133.39999914169312%`,  
  textTransform: `none`,  
  margin: `0px`,  
}));
  
const Price = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(21, 21, 21, 1)`,  
  fontStyle: `italic`,  
  fontFamily: `Roboto`,  
  fontWeight: `300`,  
  fontSize: `20px`,  
  letterSpacing: `0.5px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `4px 0px 0px 0px`,  
});
  
const Price1 = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px 0px 10px 0px`,  
  boxSizing: `border-box`,  
});
  
const Product1 = styled("div")(({ theme }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `700`,  
  fontSize: `22px`,  
  letterSpacing: `0.5px`,  
  textDecoration: `none`,  
  lineHeight: `133.39999914169312%`,  
  textTransform: `none`,  
  margin: `0px`,  
}));
 
function ProductCard3() {
  return (
    <TypeQuest >
       <Pic >
       </Pic>
       <About >
         <AboutProduct >
           <Text >
             <Product >
               {`Fancy dancing shoes`}
                 </Product>
             <Price >
               {`3 colors available`}
                 </Price>
           </Text>
           <Price1 >
             <Product1 >
               {`$72`}
                 </Product1>
           </Price1>
         </AboutProduct>
       </About>
     </TypeQuest>
   );
}

export default ProductCard3;
