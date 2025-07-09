
'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export function useJobs() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/jobs') 
      .then((res) => {
        setJobs(res.data);
        setLoading(false);
      });
  }, []);

  return { jobs, loading };
}
