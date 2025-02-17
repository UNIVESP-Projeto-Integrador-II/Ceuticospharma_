import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { title } from "process";
import { Children, ReactNode } from "react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";

interface NavSectionProps {
    title: string;
    children: ReactNode;
}

export function NavSection( {title, children }: NavSectionProps ) {
    return(

            <Box>
                <Text fontWeight="bold" color="red.400" fontSize="small">{title}</Text>
                <Stack spacing="4" mt="8" align="stretch">
                    {children}
                </Stack>
            </Box>   
    );
}