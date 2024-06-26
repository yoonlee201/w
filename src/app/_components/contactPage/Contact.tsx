'use client';

import { ChangeEvent, useState, useTransition } from 'react';
import { Title } from '@/app/_components/Title';
import { Button } from '@/app/_components/Button';
import { ConnectIcons } from '@/app/_components/Logo';

const Contact = () => {
    const [isPending, startTransition] = useTransition();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        startTransition(async () => {
            console.log('Email sent successfully!');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        });
    };

    return (
        <div className="m-4 flex w-[90vw] max-w-[35rem] flex-col items-center justify-center">
            <Title>Contact Me</Title>
            <div className="flex flex-col items-center justify-center pt-[1rem] text-center text-p text-red">
                this page is currently disabled <br />
                please contact me through these applications:
                <ConnectIcons
                    className="flex gap-3"
                    color="blue"
                />
            </div>
            <form
                className="w-full pt-[2rem]"
                onSubmit={sendEmail}>
                <fieldset className="inline-flex w-full flex-col gap-3">
                    <Input
                        type="text"
                        size="small"
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <Input
                        type="email"
                        size="small"
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Input
                        type="text"
                        size="small"
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                    <Input
                        type="text"
                        size="large"
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        disabled
                        size={'lg'}>
                        Send Message
                    </Button>
                </fieldset>
            </form>
        </div>
    );
};

interface InputProps {
    label?: string;
    type: string;
    size: 'large' | 'small';
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Input = ({ label, type, size, name, value, onChange }: InputProps) => {
    return (
        <>
            <label
                className="hidden w-full"
                id={label}
                htmlFor={name}>
                {label}
            </label>
            {size === 'large' ? (
                <textarea
                    name={name}
                    placeholder={label}
                    onChange={onChange}
                    value={value}
                    disabled
                    className="h-[18rem] w-full rounded-sm border-2 border-beige-3 bg-beige-2 p-5 text-blue-2 placeholder:text-p placeholder:text-blue"
                    required
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    placeholder={label}
                    onChange={onChange}
                    value={value}
                    disabled
                    className={`h-[4rem] w-full rounded-sm border-2 border-beige-3 bg-beige-2 p-5 text-blue-2 placeholder:text-p placeholder:text-blue`}
                    required
                />
            )}
        </>
    );
};

export default Contact;
