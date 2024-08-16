import axios from 'axios';

export default axios.create({
  baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
  // 'http://restaurant.dev',
});
