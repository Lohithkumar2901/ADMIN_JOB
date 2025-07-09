"use client";

import {
    Modal,
    TextInput,
    Textarea,
    Button,
    Group,
    Stack,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export default function CreateJobModal({
    opened,
    onClose,
    onCreate,
}: {
    opened: boolean;
    onClose: () => void;
    onCreate: (data: any) => void;
}) {
    const form = useForm({
        initialValues: {
            title: "",
            company: "",
            location: "",
            experience: "",
            salary: "",
            description: "",
        },
    });

    const handleSubmit = (values: typeof form.values) => {
        onCreate(values);
        onClose();
        form.reset();
    };

    return (
        <Modal opened={opened} onClose={onClose} title="Post a Job" centered>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack>
                    <TextInput
                        label="Job Title"
                        placeholder="e.g. Frontend Developer"
                        {...form.getInputProps("title")}
                        required
                    />
                    <TextInput
                        label="Company"
                        placeholder="e.g. Google"
                        {...form.getInputProps("company")}
                        required
                    />
                    <TextInput
                        label="Location"
                        placeholder="e.g. Remote / Bangalore"
                        {...form.getInputProps("location")}
                        required
                    />
                    <TextInput
                        label="Experience"
                        placeholder="e.g. 2-4 yrs"
                        {...form.getInputProps("experience")}
                        required
                    />
                    <TextInput
                        label="Salary"
                        placeholder="e.g. 10LPA"
                        {...form.getInputProps("salary")}
                        required
                    />
                    <Textarea
                        label="Description"
                        placeholder="Write a short job description..."
                        {...form.getInputProps("description")}
                        required
                    />
                </Stack>
                <Group justify="flex-end" mt="md">
                    <Button type="submit">Publish</Button>
                </Group>
            </form>
        </Modal>
    );
}

