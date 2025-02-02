/*
 * This is a collection of utils for the localization used on client side code.
 * They work on the string catalogue used by jekyll
 */
import yaml from 'js-yaml';
import { SOFTWARE_OPEN, SOFTWARE_REUSE } from './constants.js';
import softwareCategoriesYml from '!raw-loader!../../../_data/publiccode_categories.yml';
import softwareDevelopmentStatusYml from '!raw-loader!../../../_data/development_status.yml';
import softwareIntendedAudiencesYml from '!raw-loader!../../../_data/publiccode_scopes.yml';
import l10nYml from '!raw-loader!../../../_data/l10n.yml';

export const lang = window.lang;
const l10n = yaml.load(l10nYml);

export const l10NLabels = l10n[lang]['t'];

export const softwareTypes = [
  [SOFTWARE_OPEN, l10NLabels.software[SOFTWARE_OPEN]],
  [SOFTWARE_REUSE, l10NLabels.software[SOFTWARE_REUSE]],
];

export const getSoftwareCategories = () => {
  const softwareCategories = yaml.load(softwareCategoriesYml);
  return softwareCategories.map((value) => [value, value.replace(/-/gi, ' ')]);
};

export const getSoftwareDevelopmentStatuses = () => {
  const softwareDevelopmentStatus = yaml.load(softwareDevelopmentStatusYml);
  return Object.entries(softwareDevelopmentStatus).reduce((acc, [key, value]) => {
    acc.push([key, value[lang]]);
    return acc;
  }, []);
};

export const getSoftwareIntendedAudiences = () => {
  const softwareIntendedAudiences = yaml.load(softwareIntendedAudiencesYml);
  return softwareIntendedAudiences.map((value) => [value, value.replace(/-/gi, ' ')]);
};
