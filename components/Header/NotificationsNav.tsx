import { HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";
import { Link } from "react-router-dom"; 

export function NotificarionsNav() {
    return (
        <HStack 
        spacing={["6", "8"]}
        mx={["6", "8"]}
        pr={["6", "8"]}
        py="1"
        color="red.300"
        borderRightWidth={1}
        borderColor="red.700"
      >
        <Icon as={RiNotificationLine} fontSize="28" />
        <Icon as={RiUserAddLine} fontSize="28" />

      </HStack>
    );
} 
