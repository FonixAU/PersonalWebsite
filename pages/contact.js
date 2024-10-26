import { Container, Heading, Input, Textarea, Divider, Button, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import Section from '../components/section'
import Layout from '../components/layouts/article'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const toast = useToast();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Replace these with your EmailJS details
            const response = await emailjs.send(
                'YOUR_SERVICE_ID',
                'YOUR_TEMPLATE_ID',
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_email: 'your-email@example.com', // Replace with your email
                },
                'YOUR_PUBLIC_KEY'
            );

            if (response.status === 200) {
                toast({
                    title: 'Message sent!',
                    description: 'Thank you for your message. I will get back to you soon.',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
                setFormData({ name: '', email: '', subject: '', message: '' });
            }
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Failed to send message. Please try again.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
        
        setIsSubmitting(false);
    };

    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={3} mt={4}>
                    Contact Me
                </Heading>
                <Divider mb={2}/>
                <Section>
                    <form onSubmit={handleSubmit}>
                        <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            mb={2}
                            bgColor='Background'
                            placeholder='Name'
                            required
                        />
                        <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            mb={2}
                            bgColor='Background'
                            placeholder='Email Address'
                            required
                        />
                        <Input
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            mb={2}
                            bgColor='Background'
                            placeholder='Subject'
                            required
                        />
                        <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            mb={2}
                            bgColor='Background'
                            placeholder='Tell me anything :)'
                            required
                        />
                        <Button
                            type="submit"
                            isLoading={isSubmitting}
                            loadingText="Sending"
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