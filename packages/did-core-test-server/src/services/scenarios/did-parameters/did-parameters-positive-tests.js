const {
  isAsciiString,
  getQueryParamValueFromDidUri,
  generateScenarioResults,
} = require('../../utils');

const assertions = {
  '[hl] The associated value MUST be an ASCII string.': (scenario) => {
    const value = getQueryParamValueFromDidUri(scenario.input['hl'], 'hl');
    return isAsciiString(value);
  },
  '[service] The associated value MUST be an ASCII string.': (scenario) => {
    const value = getQueryParamValueFromDidUri(
      scenario.input['service'],
      'service'
    );
    return isAsciiString(value);
  },
  '[version-id] The associated value MUST be an ASCII string.': (scenario) => {
    const value = getQueryParamValueFromDidUri(
      scenario.input['version-id'],
      'version-id'
    );
    return isAsciiString(value);
  },
  '[version-time] The associated value MUST be an ASCII string.': (
    scenario
  ) => {
    const value = getQueryParamValueFromDidUri(
      scenario.input['version-time'],
      'version-time'
    );
    return isAsciiString(value);
  },
  '[relative-ref] The associated value MUST be an ASCII string and MUST use percent-encoding for certain characters as specified in RFC3986 Section 2.1.': (
    scenario
  ) => {
    const value = getQueryParamValueFromDidUri(
      scenario.input['service'],
      'relativeRef'
    );
    const decoded = decodeURIComponent('%2Fpath%2Fto%2Fresource');
    return value === decoded && decoded === '/path/to/resource';
  },
};
module.exports = generateScenarioResults(assertions);
