import { workload } from './workload.ts';

const selected = __ENV.SCENARIO || 'smoke';
console.log('Selected scenario:', selected);


const allScenarios = {
  smoke: {
    executor: 'ramping-vus',
    stages: workload.smoke,
    exec: 'quickPizzaTest',
  },
  average: {
    executor: 'ramping-vus',
    stages: workload.average,
    exec: 'quickPizzaTest',
  },
  spike: {
    executor: 'ramping-vus',
    stages: workload.spike,
    exec: 'quickPizzaTest',
  },
};

type ScenarioName = keyof typeof allScenarios;

export const scenarios =
  selected === 'all' || !(selected in allScenarios)
    ? allScenarios
    : { [selected]: allScenarios[selected as ScenarioName] };
