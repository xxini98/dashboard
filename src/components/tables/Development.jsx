import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Image,
  HStack,
  Progress,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import apple from "../../assets/images/tables/apple.svg";
import android from "../../assets/images/tables/android.svg";
import window from "../../assets/images/tables/window.svg";

const data = [
  {
    title: "Marketplace",
    image: [
      {
        src: apple,
        alt: "apple",
      },
      {
        src: android,
        alt: "android",
      },
      {
        src: window,
        alt: "window",
      },
    ],
    number: 25.4,
    percentage: 75.5,
  },
  {
    title: "Venus DB PRO",
    image: [
      {
        src: apple,
        alt: "apple",
      },
    ],
    number: 10,
    percentage: 35,
  },
  {
    title: "Marketplace",
    image: [
      {
        src: apple,
        alt: "apple",
      },
      {
        src: android,
        alt: "android",
      },
      {
        src: window,
        alt: "window",
      },
    ],
    number: 25.4,
    percentage: 100,
  },
  {
    title: "Marketplace",
    image: [
      {
        src: apple,
        alt: "apple",
      },
      {
        src: android,
        alt: "android",
      },
      {
        src: window,
        alt: "window",
      },
    ],
    number: 25.4,
    percentage: 75.5,
  },
  {
    title: "Marketplace",
    image: [
      {
        src: apple,
        alt: "apple",
      },
      {
        src: android,
        alt: "android",
      },
      {
        src: window,
        alt: "window",
      },
    ],
    number: 25.4,
    percentage: 75.5,
  },
  {
    title: "Marketplace",
    image: [
      {
        src: apple,
        alt: "apple",
      },
      {
        src: android,
        alt: "android",
      },
      {
        src: window,
        alt: "window",
      },
    ],
    number: 25.4,
    percentage: 75.5,
  },
  {
    title: "Marketplace",
    image: [
      {
        src: apple,
        alt: "apple",
      },
      {
        src: android,
        alt: "android",
      },
      {
        src: window,
        alt: "window",
      },
    ],
    number: 25.4,
    percentage: 75.5,
  },
];

const Development = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Development Table</Heading>
      </CardHeader>

      <CardBody py={2} px={5}>
        <TableContainer
          overflowX={"hidden"}
          overflowY={"auto"}
          maxHeight={"500px"}
        >
          <Table variant="simple" size={["sm", "md", "lg"]}>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Title</Th>
                <Th>Title</Th>
                <Th>Title</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.title}</Td>
                  <Td>
                    <HStack spacing={1} alignItems={"center"}>
                      {item.image.map((images, i) => (
                        <Image key={i} src={images.src} alt={images.alt} />
                      ))}
                    </HStack>
                  </Td>
                  <Td>{item.number}</Td>
                  <Td isNumeric>
                    <Flex alignItems={"Center"}>
                      <Box w={"32px"} textAlign={"right"}>
                        {item.percentage}{" "}
                        <Text variant={"txt134"} color={"#666"}></Text> %
                      </Box>
                      <Progress
                        w={"63px"}
                        value={item.percentage}
                        ml={"10px"}
                      />
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
};

export default Development;
