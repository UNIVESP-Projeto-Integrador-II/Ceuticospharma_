import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import Link from 'next/link';

interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType;
    children: string;
    href: string;
}

export function NavLink({icon, children, href, ...rest }: NavLinkProps ) {
    return(
        <Link href={href} passHref>
        <ChakraLink display="flex" alignContent="center" color="green.400" py="1"{...rest}>
                        <Icon as={icon} fontSize="20" />
                        <Text ml="4" fontWeight="mediun">{children}</Text>
                    </ChakraLink>
        </Link>

    );
}