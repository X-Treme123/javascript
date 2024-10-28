// Array untuk menyimpan semua pesanan
export const orders = [];

// Fungsi untuk menghasilkan ID unik
function generateUniqueId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

// Fungsi untuk menambahkan pesanan baru
export function addOrder(customerName, items) {
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  const newOrder = {
    id: generateUniqueId(),
    customerName: customerName,
    items: items,
    totalPrice: totalPrice,
    status: 'Menunggu' // Status default
  };
  orders.push(newOrder);
}

// Fungsi untuk memperbarui status pesanan berdasarkan ID pesanan
export function updateOrderStatus(orderId, newStatus) {
  const order = orders.find(order => order.id === orderId);
  if (order) {
    order.status = newStatus;
  }
}

// Fungsi untuk menghitung total pendapatan dari pesanan yang selesai
export function calculateTotalRevenue() {
  return orders
    .filter(order => order.status === 'Selesai')
    .reduce((total, order) => total + order.totalPrice, 0);
}

// Fungsi untuk menghapus pesanan berdasarkan ID
export function deleteOrder(orderId) {
  const orderIndex = orders.findIndex(order => order.id === orderId);
  if (orderIndex !== -1) {
    orders.splice(orderIndex, 1);
  }
}
