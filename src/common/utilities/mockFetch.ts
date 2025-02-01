/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
import Joi from 'joi';
import { getBackendUrl } from './getBackendUrl';

// Define the structure of mock responses
type MockResponse =
  | string[]
  | Record<string, unknown>
  | Record<string, unknown>[]
  | { total: number; active: number };

const backendUrl: string = getBackendUrl();

const mockResponses: Record<string, MockResponse> = {
  [`${backendUrl}/oems`]: ['HP', 'Dell', 'Acme'],
  [`${backendUrl}/customers`]: ['Customer1', 'Customer2', 'Customer3'],
  [`${backendUrl}/customers/:customer/bitp`]: ['File1', 'File2'],
  [`${backendUrl}/customers/:customer/projects`]: ['Project1', 'Project2'],
  [`${backendUrl}/customers/:customer/projects/:project/builds`]: ['Build1', 'Build2'],
  [`${backendUrl}/customers/:customer/projects/:project/builds/:build/racks`]: ['Rack1', 'Rack2'],
  [`${backendUrl}/file_uploads/:file_type`]: [{ id: 1, name: 'FileA' }, { id: 2, name: 'FileB' }],
  [`${backendUrl}/bitp`]: [{ id: 1, config: 'ConfigA' }],
  [`${backendUrl}/devices`]: [{ id: 1, name: 'Device1' }, { id: 2, name: 'Device2' }],
  [`${backendUrl}/statistics/device_counts`]: { total: 100, active: 75 },
};

// Success response for POST requests
const postSuccessResponse = {
  success: 'Your submission has been successfully processed!',
};

// Joi schemas for validation
const schemas = {
  newBuildSchema: Joi.object({
    customer: Joi.string().required(),
    project: Joi.string().required(),
    buildName: Joi.string().required(),
  }),

  updateBuildSchema: Joi.object({
    buildUpdates: Joi.object().required(),
    buildDetails: Joi.object().required(),
  }),

  verifyBuildSchema: Joi.object({
    buildId: Joi.string().required(),
  }),

  deleteBuildSchema: Joi.object({
    buildId: Joi.string().required(),
  }),

  devicesSchema: Joi.object({
    devices: Joi.array()
      .items(
        Joi.object({
          serialNumber: Joi.string().required(),
          rackName: Joi.string().required(),
        })
      )
      .required(),
  }),

  firmwareBundleSchema: Joi.object({
    type: Joi.string().required(),
    files: Joi.array().items(Joi.string()).required(),
  }),

  uploadFileSchema: Joi.object({
    files: Joi.array().items(Joi.string()).required(),
  }),

  burnInConfigSchema: Joi.object({
    burnInConfigFile: Joi.string().required(),
    fileDetails: Joi.string().required(),
  }),

  restartSchema: Joi.object({
    rack: Joi.string().required(),
  }),

  qualityReportsSchema: Joi.object({
    customer: Joi.string().required(),
    project: Joi.string().required(),
    build: Joi.string().required(),
    rack: Joi.string().required(),
  }),
};

// Match the route using regex
const matchRoute = (url: string): string | null => {
  for (const route in mockResponses) {
    const routeRegex = new RegExp(`^${route.replace(/:[^/]+/g, '[^/]+')}$`);
    if (routeRegex.test(url)) {
      return route;
    }
  }
  return null;
};

// Define the options type for mockFetch
interface MockFetchOptions {
  method: 'GET' | 'POST';
  body?: string;
  schemaName?: keyof typeof schemas;
}

// Mock fetch function
export const mockFetch = async (
  url: string,
  options: MockFetchOptions = { method: 'GET' }
): Promise<{
  ok: boolean;
  status: number;
  json: () => Promise<unknown>;
}> => {
  const { method = 'GET', body, schemaName } = options;
  console.log(`Mock Fetch - Method: ${method}, URL: ${url}`);

  // Simulate delay
  // await new Promise((resolve) => setTimeout(resolve, 500));
  const matchedRoute = matchRoute(url);
  if (!matchedRoute) {
    return {
      ok: false,
      status: 404,
      json: async () => ({ error: 'Not Found' }),
    };
  }

  if (method === 'GET') {
    return {
      ok: true,
      status: 200,
      json: async () => mockResponses[matchedRoute],
    };
  }

  if (method === 'POST') {
    if (!schemaName || !schemas[schemaName]) {
      return {
        ok: false,
        status: 400,
        json: async () => ({ error: `No validation schema found for ${schemaName}` }),
      };
    }

    const schema = schemas[schemaName];
    const validation = schema.validate(JSON.parse(body || '{}'));

    if (validation.error) {
      return {
        ok: false,
        status: 400,
        json: async () => ({ error: validation.error.details[0].message }),
      };
    }

    return {
      ok: true,
      status: 200,
      json: async () => postSuccessResponse,
    };
  }

  return {
    ok: false,
    status: 405,
    json: async () => ({ error: 'Method Not Allowed' }),
  };
};
