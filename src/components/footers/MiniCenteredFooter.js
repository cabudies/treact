import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
// import logo from "../../images/logo.svg";
import logo from "../../images/only_logo_2.svg";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";


const Container = tw(ContainerBase)`bg-gray-200 text-gray-700 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
            <LogoText>Society of AI</LogoText>
          </LogoContainer>
          <LinksContainer>
            <Link href="/">Home</Link>
            <Link href="/#/portfolio">Portfolio</Link>
            {/* <Link href="/courses">Courses</Link>
            <Link href="/blog">Blog</Link> */}
            <Link href="/#/contact-us">Contact Us</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://www.facebook.com/societyofai/">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com/societyofai">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://www.youtube.com/channel/UCBEqvO_cTLVkyNKH51pd_fA">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2021, Society of AI Pvt Ltd. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
