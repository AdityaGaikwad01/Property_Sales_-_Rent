import { useContext } from "react";
import Image from "next/image";
import { Box,Icon,Flex, Center } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext} from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleUp,FaArrowAltCircleDown } from "react-icons/fa";

const LeftArrow = ()=>{
    const {scrollPrev} = useContext(VisibilityContext);

    return(
        <Flex justifyContent={'center'} alignItems={"center"} marginRight={"1"}>
            <Icon 
            as={FaArrowAltCircleUp} 
            onClick={() =>scrollPrev()}
            fontSize={'2xl'}
            cursor={'pointer'}
            />

        </Flex>
    )

}


const RightArrow = ()=>{
    const {scrollNext} = useContext(VisibilityContext);

    return(
        <Flex justifyContent={'center'} alignItems={"center"} marginRight={"1"}>
            <Icon 
            as={FaArrowAltCircleDown} 
            onClick={() =>scrollNext()}
            fontSize={'2xl'}
            cursor={'pointer'}
            />

        </Flex>
    )

}
const ImageScrollbar = ({data}) =>(
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow:'hidden'}}>
        {data.map((item)=>(
            <Box key={item.id} width={"910px"} itemId={item.id} overflow={"hidden"} p={"1px"}>
                <Image 
                 placeholder="blur"
                 blurDataURL={item.url}
                  src={item.url} 
                  width={"1000"} 
                  height={"500"}
                  alt="Property"
                 
                  />

            </Box>
        ))}
    </ScrollMenu>
)
export default ImageScrollbar;