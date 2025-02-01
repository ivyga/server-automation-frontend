import express from 'express';
import Joi from 'joi';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticFolder = path.resolve(__dirname, '../');

const app = express();

// Mock data
const mockResponses = {
  '/oems': ['HP', 'Dell', 'Acme'],
  '/customers': ['Customer1', 'Customer2', 'Customer3'],
  '/customers/:customer/bitp': ['File1', 'File2'],
  '/customers/:customer/projects': ['Project1', 'Project2'],
  '/customers/:customer/projects/:project/builds': ['Build1', 'Build2'],
  '/customers/:customer/projects/:project/builds/:build/racks': ['Rack1', 'Rack2'],
  '/file_uploads/:file_type': [{ id: 1, name: 'FileA' }, { id: 2, name: 'FileB' }],
  '/bitp': [{ id: 1, config: 'ConfigA' }],
  '/devices': [{ id: 1, name: 'Device1' }, { id: 2, name: 'Device2' }],
  '/statistics/device_counts': { total: 100, active: 75 },
};

// Define GET routes
app.get('/oems', (req, res) => {
  console.log(`Handling GET request for /oems`);
  res.json(mockResponses['/oems']);
});

app.get('/customers', (req, res) => {
  console.log(`Handling GET request for /customers`);
  res.json(mockResponses['/customers']);
});

app.get('/customers/:customer/bitp', (req, res) => {
  console.log(`Handling GET request for /customers/:customer/bitp`);
  res.json(mockResponses['/customers/:customer/bitp']);
});

app.get('/customers/:customer/projects', (req, res) => {
  console.log(`Handling GET request for /customers/:customer/projects`);
  res.json(mockResponses['/customers/:customer/projects']);
});

app.get('/customers/:customer/projects/:project/builds', (req, res) => {
  console.log(`Handling GET request for /customers/:customer/projects/:project/builds`);
  res.json(mockResponses['/customers/:customer/projects/:project/builds']);
});

app.get('/customers/:customer/projects/:project/builds/:build/racks', (req, res) => {
  console.log(`Handling GET request for /customers/:customer/projects/:project/builds/:build/racks`);
  res.json(mockResponses['/customers/:customer/projects/:project/builds/:build/racks']);
});

app.get('/file_uploads/:file_type', (req, res) => {
  console.log(`Handling GET request for /file_uploads/:file_type`);
  res.json(mockResponses['/file_uploads/:file_type']);
});

app.get('/bitp', (req, res) => {
  console.log(`Handling GET request for /bitp`);
  res.json(mockResponses['/bitp']);
});

app.get('/devices', (req, res) => {
  console.log(`Handling GET request for /devices`);
  res.json(mockResponses['/devices']);
});

app.get('/statistics/device_counts', (req, res) => {
  console.log(`Handling GET request for /statistics/device_counts`);
  res.json(mockResponses['/statistics/device_counts']);
});

// Define POST routes with schema validation and mock response
const validateRequest = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

const postSuccessResponse = {
  success: "Your submission has been successfully processed!",
};

const newBuildSchema = Joi.object({
  customer: Joi.string().required(),
  project: Joi.string().required(),
  buildName: Joi.string().required(),
});

app.post('/customers/:customer/projects/:project/builds/:build/new', validateRequest(newBuildSchema), (req, res) => {
  console.log(`Handling POST request for /customers/:customer/projects/:project/builds/:build/new`);
  res.json(postSuccessResponse);
});

const updateBuildSchema = Joi.object({
  buildUpdates: Joi.object().required(),
  buildDetails: Joi.object().required(),
});

app.post('/customers/:customer/projects/:project/builds/:build/update', validateRequest(updateBuildSchema), (req, res) => {
  console.log(`Handling POST request for /customers/:customer/projects/:project/builds/:build/update`);
  res.json(postSuccessResponse);
});

const verifyBuildSchema = Joi.object({
  buildId: Joi.string().required(),
});

app.post('/customers/:customer/projects/:project/builds/:build/verify', validateRequest(verifyBuildSchema), (req, res) => {
  console.log(`Handling POST request for /customers/:customer/projects/:project/builds/:build/verify`);
  res.json(postSuccessResponse);
});

const deleteBuildSchema = Joi.object({
  buildId: Joi.string().required(),
});

app.post('/customers/:customer/projects/:project/builds/:build/delete', validateRequest(deleteBuildSchema), (req, res) => {
  console.log(`Handling POST request for /customers/:customer/projects/:project/builds/:build/delete`);
  res.json(postSuccessResponse);
});

const devicesSchema = Joi.object({
  devices: Joi.array().items(Joi.object({
    serialNumber: Joi.string().required(),
    rackName: Joi.string().required(),
  })).required(),
});

app.post('/customers/:customer/projects/:project/builds/:build/devices', validateRequest(devicesSchema), (req, res) => {
  console.log(`Handling POST request for /customers/:customer/projects/:project/builds/:build/devices`);
  res.json(postSuccessResponse);
});

const firmwareBundleSchema = Joi.object({
  type: Joi.string().required(),
  files: Joi.array().items(Joi.string()).required(),
});

app.post('/file_uploads/firmware/bundle', validateRequest(firmwareBundleSchema), (req, res) => {
  console.log(`Handling POST request for /file_uploads/firmware/bundle`);
  res.json(postSuccessResponse);
});

const uploadFileSchema = Joi.object({
  files: Joi.array().items(Joi.string()).required(),
});

app.post('/file_uploads/upload', validateRequest(uploadFileSchema), (req, res) => {
  console.log(`Handling POST request for /file_uploads/upload`);
  res.json(postSuccessResponse);
});

const burnInConfigSchema = Joi.object({
  burnInConfigFile: Joi.string().required(),
  fileDetails: Joi.string().required(),
});

app.post('/bitp/upload', validateRequest(burnInConfigSchema), (req, res) => {
  console.log(`Handling POST request for /bitp/upload`);
  res.json(postSuccessResponse);
});

const restartSchema = Joi.object({
  rack: Joi.string().required(),
});

app.post('/devices/restart', validateRequest(restartSchema), (req, res) => {
  console.log(`Handling POST request for /devices/restart`);
  res.json(postSuccessResponse);
});

app.post('/devices/test_mode', validateRequest(restartSchema), (req, res) => {
  console.log(`Handling POST request for /devices/test_mode`);
  res.json(postSuccessResponse);
});

app.post('/devices/:serial_number/restart', validateRequest(restartSchema), (req, res) => {
  console.log(`Handling POST request for /devices/:serial_number/restart`);
  res.json(postSuccessResponse);
});

app.post('/devices/:serial_number/test_mode', validateRequest(restartSchema), (req, res) => {
  console.log(`Handling POST request for /devices/:serial_number/test_mode`);
  res.json(postSuccessResponse);
});

const qualityReportsSchema = Joi.object({
  customer: Joi.string().required(),
  project: Joi.string().required(),
  build: Joi.string().required(),
  rack: Joi.string().required(),
});

app.post('/quality_assurance/reports', validateRequest(qualityReportsSchema), (req, res) => {
  console.log(`Handling POST request for /quality_assurance/reports`);
  res.json(postSuccessResponse);
});

// Miscellaneous
app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'favicon.ico'));
});

app.get('/static/api_servers.js', (req, res) => {
    const apiServerFilePath = path.join(__dirname, 'api_servers.js');
    res.sendFile(apiServerFilePath, (err) => {
      if (err) {
        console.error('Error serving api_servers.js:', err);
        res.status(500).send('Error loading api_servers.js');
      }
    });
  });


// Serve the Website too for convenience
app.use(express.static(staticFolder));

// Start the server
const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Serving static content from: ${staticFolder}`);
});

