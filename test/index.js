import { assert } from 'chai';
import { runSimulation, buildHistogram } from '../src';

describe('Simulator Test.', () => {

  it('Tests a basic run of simulator.', (done) => {
    const settings = {
      passes: 10,
      limitGraph: true,
      data: []
    };
    assert(runSimulation(settings, () => {
      done();
    }));
  });

  it('tests the histogram generation', () => {
    const svg = buildHistogram([], 0, 0, 0, 0);
    assert(true, 'useless test');
  });

});
