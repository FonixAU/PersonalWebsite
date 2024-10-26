import { Container, Heading, Input, Textarea, Divider, Button, useToast } from '@chakra-ui/react'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Section from '../components/section'
import Layout from '../components/layouts/article'
const SERVICE = process.env.EMAILJS_SERVICE
const TEMPLATE = process.env.EMAILJS_TEMPLATE
const EMAILJS_PK = process.env.EMAILJS_PK

const Contact = () => {

        const form = useRef();
        const toast = useToast();
        const sendEmail = (e) => {
          e.preventDefault();
        
        emailjs
          .sendForm(SERVICE, TEMPLATE, form.current, {
            publicKey:EMAILJS_PK,
          })
          .then(
            () => {
                toast({
                    title: 'Message sent!',
                    description: 'Thank you for your message. I will get back to you soon.',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
              console.log('Message Sent');
            },
            (error) => {
                toast({
                    title: 'Error',
                    description: 'Failed to send message. Please try again.',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
              console.log('Message Failed', error.text);
            },
          );
      };
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={3} mt={4}>
                    Contact Me
                </Heading>
                <Divider mb={2}/>
                <Section>
                    <form ref={form} onSubmit={sendEmail}>
                        <Input
                            name="name"
                            type="text"
                            mb={2}
                            bgColor='Background'
                            placeholder='Name'
                            required
                        />
                        <Input
                            name="email"
                            type="email"
                            mb={2}
                            bgColor='Background'
                            placeholder='Email Address'
                            required
                        />
                        <Input
                            name="subject"
                            type="text"
                            mb={2}
                            bgColor='Background'
                            placeholder='Subject'
                            required
                        />
                        <Textarea
                            name="message"
                            mb={2}
                            bgColor='Background'
                            placeholder='Tell me anything :)'
                            required
                        />
                        <Button
                            type="submit"
                        >
                            Submit
                        </Button>
                    </form>
                </Section>
            </Container>
        </Layout>
    )
}

export default Contact