import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import {SectionDescription} from "components/misc/Typography";
import { ReactComponent as TwitterIcon} from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon} from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
import GurjasPic from "../../images/gurjas.svg";
import AnuragPic from "../../images/anurag.svg";
import VarshasPic from "../../images/varsha.svg";
import PoojaPic from "../../images/pooja.svg";
import AnkitPic from "../../images/ankit.svg";
import ShailendraPic from "../../images/shailendra.svg";

const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Subheading = tw(SubheadingBase)`text-center mb-3`
const Description = tw(SectionDescription)`mx-auto text-center`

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`

export default ({
  heading = "Meet These Fine Folks.",
  subheading = "Our Team",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  cards = [
    {
      imageSrc: AnkitPic,
      position: "Co-Founder",
      name: "Ankit Verma",
      links: [
        {
          url: "https://www.linkedin.com/in/ankit-verma-083828125/",
          icon: LinkedinIcon,
        }
      ],
    },
    {
      imageSrc: GurjasPic,
      position: "Co-Founder",
      name: "Gurjas Singh",
      links: [
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        }
      ],
    },
    {
      imageSrc: AnuragPic,
      position: "Co-Founder",
      name: "Anurag Mishra",
      links: [
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        }
      ],
    },
    {
      imageSrc: ShailendraPic,
      position: "Solution Architect",
      name: "Shailendra Singh",
      links: [
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        }
      ],
    },
    {
      imageSrc: VarshasPic,
      position: "Sr. US Medical Biller",
      name: "Varsha Goel",
      links: [
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        }
      ],
    },
    {
      imageSrc: PoojaPic,
      position: "Sr. Recruiter",
      name: "Pooja",
      links: [
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        }
      ],
    },
  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading> }
          {description && <Description>{description}</Description> }
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
