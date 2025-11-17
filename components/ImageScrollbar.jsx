import Image from 'next/image';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { useRef } from 'react';

const ImageScrollbar = ({ data }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (direction === 'left') {
      scrollRef.current.scrollLeft -= 300;
    } else {
      scrollRef.current.scrollLeft += 300;
    }
  };

  return (
    <Flex position="relative" alignItems="center">
      {/* Left Arrow */}
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scroll('left')}
        fontSize="2xl"
        cursor="pointer"
        position="absolute"
        left="0"
        zIndex="10"
        color="black"
      />

      {/* Scrollable Container */}
      <Flex
        ref={scrollRef}
        overflowX="scroll"
        overflowY="hidden"
        whiteSpace="nowrap"
        scrollBehavior="smooth"
        width="100%"
        gap="10px"
      >
        {data.map((item) => (
          <Box
            key={item.id}
            p="1"
            display="inline-block"
          >
            <Image
              alt="scroll-image"
              src={item.url}
              width={500}
              height={400}
              style={{ borderRadius: '10px' }}
            />
          </Box>
        ))}
      </Flex>

      {/* Right Arrow */}
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scroll('right')}
        fontSize="2xl"
        cursor="pointer"
        position="absolute"
        right="0"
        zIndex="10"
        color="black"
      />
    </Flex>
  );
};

export default ImageScrollbar;
