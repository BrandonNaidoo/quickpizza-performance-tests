export const workload = {
  smoke: [
    { duration: '10s', target: 1 },
  ],
  average: [
    { duration: '10s', target: 10 },
    { duration: '40s', target: 10 },
    { duration: '10s', target: 0 },
  ],
  spike: [
    { duration: '5s', target: 20 },
    { duration: '10s', target: 20 },
    { duration: '5s', target: 0 },
  ],
};

