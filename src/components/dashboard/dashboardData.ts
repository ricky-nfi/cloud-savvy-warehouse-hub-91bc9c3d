
import { 
  Package, 
  ShoppingCart, 
  Users, 
  AlertTriangle 
} from 'lucide-react';

export const statsData = [
  { icon: Package, label: 'Total Items', value: '2,847', change: '+12%', trending: 'up' },
  { icon: ShoppingCart, label: 'Active Orders', value: '156', change: '+8%', trending: 'up' },
  { icon: Users, label: 'Active Workers', value: '24', change: '-2%', trending: 'down' },
  { icon: AlertTriangle, label: 'Low Stock Alerts', value: '18', change: '+5%', trending: 'up' },
] as const;

export const inventoryData = [
  { month: 'Jan', inflow: 400, outflow: 240 },
  { month: 'Feb', inflow: 300, outflow: 139 },
  { month: 'Mar', inflow: 200, outflow: 180 },
  { month: 'Apr', inflow: 278, outflow: 190 },
  { month: 'May', inflow: 189, outflow: 250 },
  { month: 'Jun', inflow: 239, outflow: 180 },
];

export const orderData = [
  { day: 'Mon', orders: 45 },
  { day: 'Tue', orders: 52 },
  { day: 'Wed', orders: 38 },
  { day: 'Thu', orders: 61 },
  { day: 'Fri', orders: 55 },
  { day: 'Sat', orders: 42 },
  { day: 'Sun', orders: 28 },
];

export const categoryData = [
  { name: 'Electronics', value: 400, color: '#3b82f6' },
  { name: 'Clothing', value: 300, color: '#10b981' },
  { name: 'Food', value: 200, color: '#f59e0b' },
  { name: 'Other', value: 100, color: '#ef4444' },
];

export const recentActivities = [
  { action: 'Inventory Update', item: 'SKU-001 Electronics', time: '2 min ago', type: 'inflow' },
  { action: 'Order Processed', item: 'Order #1234', time: '5 min ago', type: 'order' },
  { action: 'Low Stock Alert', item: 'SKU-456 Clothing', time: '10 min ago', type: 'alert' },
  { action: 'Worker Check-in', item: 'John Doe', time: '15 min ago', type: 'worker' },
  { action: 'Inventory Update', item: 'SKU-789 Food', time: '20 min ago', type: 'outflow' },
] as const;
