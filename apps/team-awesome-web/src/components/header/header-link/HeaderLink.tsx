import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import * as Styled from "./HeaderLink.styled";

interface HeaderLinkProps {
  linkText: string;
  href: string;
  color: string;
  dataCy?: string;
}

export const HeaderLink = ({ dataCy, linkText, href, color }: HeaderLinkProps) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <li>
      <Link href={href} passHref legacyBehavior>
        <Styled.Link
          isActive={router.asPath === href}
          color={color}
          href={href}
          onClick={handleClick}
          data-cy={dataCy}
        >
          {linkText}
        </Styled.Link>
      </Link>
    </li>
  );
};

export default HeaderLink;
