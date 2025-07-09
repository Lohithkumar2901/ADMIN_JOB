'use client';

import React, { useState } from 'react';
import {
    Container,
    Flex,
    Group,
    Button,
    Input,
    Select,
    RangeSlider,
    Text,
    Grid,
    Box,
    Card as MantineCard,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import JobCard from '@/components/JobCard';
import CreateJobModal from '@/components/CreateJobModal';
import Navbar from '@/components/Navbar';

const jobData = [
    {
        id: '1',
        title: 'Full Stack Developer',
        company: 'Amazon',
        location: 'Onsite',
        experience: '1-3 yr Exp',
        salary: '12LPA',
        image: '/logos/amazon.png',
        time: '24h Ago',
        description:
            'A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized itineraries that capture the essence of your next adventure.',
    },
];

export default function JobsPage() {
    const [opened, setOpened] = useState(false);
    const [jobs, setJobs] = useState(jobData);

    const handleCreateJob = (newJob: any) => {
        setJobs((prev) => [
            {
                id: Date.now().toString(),
                ...newJob,
                image: '/logos/default.png',
                time: 'Just now',
            },
            ...prev,
        ]);
    };

    return (
        <Container size="lg" py="lg">
            <Navbar onCreateClick={() => setOpened(true)} />
            <MantineCard shadow="sm" radius="lg" p="md" withBorder mb="lg">
                <Flex wrap="wrap" gap="md" align="center" justify="space-between">
                    <Input
                        leftSection={<IconSearch size={16} />}
                        placeholder="Search By Job Title, Role"
                        w={250}
                    />
                    <Select
                        placeholder="Preferred Location"
                        data={['Remote', 'Onsite', 'Hybrid']}
                        w={200}
                    />
                    <Select
                        placeholder="Job type"
                        data={['FullTime', 'PartTime', 'Contract']}
                        w={150}
                    />
                    <Box w={250}>
                        <Text size="sm" mb={4}>Salary Per Month</Text>
                        <RangeSlider
                            min={50000}
                            max={80000}
                            label={(v) => `₹${v / 1000}k`}
                            defaultValue={[50000, 80000]}
                            step={5000}
                        />
                    </Box>
                </Flex>
            </MantineCard>
            <Grid gutter="md">
                {jobs.map((job) => (
                    <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={job.id}>
                        <JobCard job={job} />
                    </Grid.Col>
                ))}
            </Grid>
            <CreateJobModal
                opened={opened}
                onClose={() => setOpened(false)}
                onCreate={handleCreateJob}
            />
        </Container>
    );
}
