import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";
import * as emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

const FormRequest = () => {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const submitRequest = async (e) => {
    e.preventDefault();
    let templateParams = {
      from_name: email,
      to_name: 'societyofai.info@gmail.com',
      subject: 'Website Contact Form',
      message: message,
    }

    emailjs.send(
      'service_sbrqqsb',
      'template_vq9qjd1',
       templateParams,
      'user_YwXhkdH6hRGIpiGOpYZz5'
    ).then(res => {
      Swal.fire({
        title: 'Email Successfully Sent',
        icon: 'success'
      })
    }).catch(err => {
      Swal.fire({
        title: 'Email Failed to Send',
        icon: 'error'
      })
    })
    document.getElementById("user-query-form").reset();
  };

  const subheading = "Contact Us"
  const heading = <>Feel free to <span tw="text-primary-500">get in touch</span><wbr/> with us.</>
  const description = "Let us know what you need, our team will get back to you soon."
  const submitButtonText = "Send"
  const formAction = "#"
  const formMethod = "get"
  const textOnLeft = true

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form onSubmit={submitRequest} id="user-query-form">
              <Input type="email" name="email" placeholder="Your Email Address" 
                onChange={e => setEmail(e.target.value)}
                value={email}
                required/>
              <Input type="text" name="name" placeholder="Full Name"
                onChange={e => setName(e.target.value)}
                value={name}
                required/>
              <Textarea name="message" placeholder="Your Message Here" 
                onChange={e => setMessage(e.target.value)}
                value={message}
                required/>
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};

export default FormRequest;