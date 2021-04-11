import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Team from "components/cards/ProfileThreeColGrid.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import ContactUs from "components/forms/SimpleContactUs.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as TransparentIcon } from "feather-icons/dist/icons/eye.svg";
import { ReactComponent as TeamIcon } from "feather-icons/dist/icons/users.svg";
// import { MohammadPic } from "../images/mohammad.svg";
import { MohammadPic } from "../images/mohammad.svg";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <MainFeature2
        subheading={<Subheading>VALUES</Subheading>}
        heading={
          <>
            What makes us <HighlightedText>Unique.</HighlightedText>
          </>
        }
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[
          {
            Icon: MoneyIcon,
            title: "Affordable",
            description: "A perfect balance of competitive pricing and uncompromising quality along with customized and value add ons represent our true form of conducting business.",
            iconContainerCss: tw`bg-green-300 text-green-800`
          },
          {
            Icon: BriefcaseIcon,
            title: "Professionalism",
            description: "Being tech-savvy, our professionals use latest and smart techniques assuring excellence, maintaining digital presence.",
            iconContainerCss: tw`bg-red-300 text-red-800`
          },
          {
            Icon: TransparentIcon,
            title: "Transparency",
            description: "Honesty is the foundation of any relationship, which yields association for long term.",
            iconContainerCss: tw`bg-blue-300 text-blue-800`
          },
          {
            Icon: TeamIcon,
            title: "Teamwork",
            description: "Together everyone achieves more. Our Inspiring team commits to provide 100% quality IT and digital solutions.",
            iconContainerCss: tw`bg-orange-300 text-orange-800`
          }
        ]}
      />
      <Testimonial
        subheading={<Subheading>Testimonials</Subheading>}
        heading={
          <>
            Our Clients <HighlightedText>Love Us.</HighlightedText>
          </>
        }
      />
      <Team
        subheading={<Subheading>Team</Subheading>}
        heading={
          <>
            We have an amazing <HighlightedText>Team</HighlightedText> of developers.
          </>
        }
      />
      <ContactUs/>
      <Footer />
    </AnimationRevealPage>
  );
}
