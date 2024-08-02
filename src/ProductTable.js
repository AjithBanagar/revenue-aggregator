// src/ProductTable.js
import React, { useState, useEffect } from 'react';
import { fetchData } from './api';

const formatNumber = (number) => {
  return number.toLocaleString();
};

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchData();
      setProducts(data);
      calculateTotalRevenue(data);
    };
    loadProducts();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    calculateTotalRevenue(filteredProducts);
  };

  const calculateTotalRevenue = (data) => {
    const total = data.reduce((sum, product) => sum + product.revenue, 0);
    setTotalRevenue(total);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <div>
        <label htmlFor="filter">Search: </label>
        <input
          id="filter"
          type="text"
          value={filter}
          onChange={handleFilterChange}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Total Revenue</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.sort((a, b) => a.name.localeCompare(b.name)).map(product => (
            <tr key={product.name}>
              <td>{product.name}</td>
              <td>{formatNumber(product.revenue)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <strong>Total Revenue: {formatNumber(totalRevenue)}</strong>
      </div>
    </div>
  );
};

export default ProductTable;
