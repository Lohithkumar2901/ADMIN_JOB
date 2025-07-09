'use client';
import { Button, TextInput, Select, Group, Slider } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

export default function Header({ onOpen }: { onOpen: () => void }) {
    return (
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 shadow-md bg-white rounded-2xl">
            <TextInput
                leftSection={<IconSearch size={16} />}
                placeholder="Search..."
            />
            <Select placeholder="Preferred Location" data={['Bangalore', 'Remote']} />
            <Select placeholder="Job type" data={['FullTime', 'Internship']} />
            <div className="min-w-[200px]">
                <label className="text-sm font-medium text-gray-700">Salary Per Month</label>
                <Slider min={10} max={100} label={(v) => `₹${v}k`} />
            </div>
            <Button color="violet" radius="xl" onClick={onOpen}>
                Create Jobs
            </Button>
        </div>
    );
}
