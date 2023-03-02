import { v4 as uuidv4 } from 'uuid';
import { getStoredData, updateStoredData } from './storage.service';

interface Metrics {
  applicationType: string;
  applicationVersion: string;
  instanceId: string;
}

const metrics: Metrics = getStoredData('metrics') || {};

const instanceId = metrics.instanceId || uuidv4();
const refreshDate = new Date().toISOString();

if (!metrics.instanceId) {
  updateStoredData('metrics', { ...metrics, instanceId });
}

export { instanceId, refreshDate };
