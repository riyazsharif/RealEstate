import Image from 'next/image';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { useRef } from 'react';

const ImageScrollbar = ({ data }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (direction === 'left') {
      scrollRef.current.scrollLeft -= 400;
    } else {
      scrollRef.current.scrollLeft += 400;
    }
  };

  return (
    <Flex position="relative" alignItems="center" width="100%">
      
      {/* Left Arrow */}
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scroll('left')}
        fontSize="3xl"
        cursor="pointer"
        position="absolute"
        left="5px"
        zIndex="10"
        color="black"
      />

      {/* Scroll Container */}
      <Flex
        ref={scrollRef}
        overflowX="scroll"
        overflowY="hidden"
        whiteSpace="nowrap"
        scrollBehavior="smooth"
        width="100%"
        gap="15px"
        p="10px 0"
      >
        {data.map((item) => (
          <Box
            key={item.id}
            position="relative"
            display="inline-block"
            minW="700px"
            height="450px"
          >
            <Image
              alt="property-image"
              src={item.url}
              fill
              style={{
                objectFit: 'cover',
                borderRadius: '12px',
              }}
            />
          </Box>
        ))}
      </Flex>

      {/* Right Arrow */}
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scroll('right')}
        fontSize="3xl"
        cursor="pointer"
        position="absolute"
        right="5px"
        zIndex="10"
        color="black"
      />

    </Flex>
  );
};

export default ImageScrollbar;
