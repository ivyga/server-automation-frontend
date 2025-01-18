/* eslint-disable dot-notation */
import { enhancedFetch } from "../../../common/utilities/enhancedFetch";
import { getBackendUrl } from "../../../common/utilities/getBackendUrl";

export interface StatePopulation {
    idState: string;
    state: string;
    year: string;
    population: number;
    slugState: string;
  }

export const getStatePopulations = async (): Promise<StatePopulation[]> => {
  const baseUrl = getBackendUrl();
  const apiUrl = `${baseUrl}/data?drilldowns=State&measures=Population&year=latest`;

    const response = await enhancedFetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();

    const statePopulations: StatePopulation[] = data.data.map((item: any) => ({
      idState: item['ID State'],
      state: item['State'],
      year: item['Year'],
      population: item['Population'],
      slugState: item['Slug State'],
    }));

    return statePopulations;
};
