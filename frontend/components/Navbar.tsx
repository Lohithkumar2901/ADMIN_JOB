'use client';

import { Button, Flex, Group, Text } from '@mantine/core';
import Image from 'next/image';

export default function Navbar({ onCreateClick }: { onCreateClick: () => void }) {
  return (
    <Flex justify="space-between" align="center" mb="xl" px="md">
  <Group gap="xs" align="center">
    
  

 
  <Group gap="lg">
    <Image src="/logo.png" alt="Logo" width={40} height={30} />
    <Text fw={600} size="lg" style={{ cursor: 'pointer' }}>
      Find Jobs
    </Text>
    <Text fw={500} size="sm" style={{ cursor: 'pointer' }}>
      Browse Companies
    </Text>
    <Text fw={500} size="sm" style={{ cursor: 'pointer' }}>
      About
    </Text>
    <Text fw={500} size="sm" style={{ cursor: 'pointer' }}>
      Testimonials
    </Text>
  </Group>
      <Group>
        <Button variant="subtle" color="gray">
          Log in
        </Button>
        <Button radius="xl" color="violet" onClick={onCreateClick}>
          Create Jobs
        </Button>
      </Group>
    </Group>
    </Flex>
  );
}
