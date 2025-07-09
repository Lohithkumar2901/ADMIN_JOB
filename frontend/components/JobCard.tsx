'use client';

import { Card, Text, Button, Group, Image, Stack, Flex } from '@mantine/core';
import {
  IconBriefcase,
  IconMapPin,
  IconCurrencyRupee,
  IconClock,
} from '@tabler/icons-react';

export default function JobCard({ job }: { job: any }) {
  return (
    <Card
      shadow="md"
      radius="xl"
      padding="lg"
      withBorder
      style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
    >
      <Flex justify="space-between" align="center" mb="sm">
        <Image src={job.image} width={40} height={40} alt={job.company} />
        <Text size="xs" color="blue" fw={500}>
          {job.time}
        </Text>
      </Flex>

      <Text fw={600} size="lg" mb={4}>
        {job.title}
      </Text>

      <Group gap="xs" mt="xs" mb="xs" c="dimmed" fz="sm">
        <Group gap={4}>
          <IconBriefcase size={16} />
          <Text>{job.experience}</Text>
        </Group>
        <Group gap={4}>
          <IconMapPin size={16} />
          <Text>{job.location}</Text>
        </Group>
        <Group gap={4}>
          <IconCurrencyRupee size={16} />
          <Text>{job.salary}</Text>
        </Group>
      </Group>

      {/* Truncate description */}
      <Text size="sm" c="dimmed" mb="md" lineClamp={2}>
        {job.description}
      </Text>

      <Button fullWidth radius="md" color="blue" size="sm" mt="auto">
        Apply Now
      </Button>
    </Card>
  );
}
