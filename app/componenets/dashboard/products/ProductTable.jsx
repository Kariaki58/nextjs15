"use client";

import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Papa from "papaparse";
import Image from 'next/image';
import humidifier from '@/public/assets/humidifier.jpg';

const ProductTable = () => {
    
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 5;

  const [products, setProducts] = useState([
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
  ]);

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleEditClick = (index) => setEditIndex(editIndex === index ? null : index);
  

  const handleDeleteProduct = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "pending": return "bg-yellow-100 text-yellow-600";
      case "active": return "bg-green-100 text-green-600";
      case "inactive": return "bg-gray-100 text-gray-600";
      case "onsale": return "bg-blue-100 text-blue-600";
      case "bouncing": return "bg-orange-100 text-orange-600";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  const handleSelectProduct = (index) => {
    setSelectedProducts(selectedProducts.includes(index)
      ? selectedProducts.filter((i) => i !== index)
      : [...selectedProducts, index]
    );
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const filteredProducts = products.filter(
    (product) => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(
    (product) => !filterTerm || product.status.toLowerCase() === filterTerm.toLowerCase()
  );

  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <table className="min-w-full rounded-lg">
        <thead className="border-b">
            <tr>
            <th className="text-left px-4 py-2">
                <input
                type="checkbox"
                onChange={(e) => {
                    const allChecked = e.target.checked;
                    if (allChecked) {
                    setSelectedProducts(products.map((_, i) => i));
                    } else {
                    setSelectedProducts([]);
                    }
                }}
                />
            </th>
            <th className="px-4 py-2 text-left text-gray-500">
                <div className="flex items-center gap-3">
                <p className="font-bold">Product Name</p>
                <input
                    type="text"
                    placeholder="Search by name or ID..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="ml-2 p-1 placeholder:font-thin rounded-md border-b outline-none focus:outline-none"
                />
                </div>
            </th>
            <th className="px-4 py-2 text-left font-bold text-gray-500">Product ID</th>
            <th className="px-4 py-2 text-left font-bold text-gray-500">Sold</th>
            <th className="px-4 py-2 text-left font-bold text-gray-500">Stock</th>
            <th className="px-4 py-2 text-left font-bold text-gray-500">Price</th>
            <th className="px-4 py-2 text-left font-bold text-gray-500">Status</th>
            <th className="px-4 py-2 text-left font-bold text-gray-500">Action</th>
            </tr>
        </thead>
        <tbody>
            {currentProducts.map((product, index) => (
            <tr key={index} className="border-b hover:bg-gray-50 transition">
                <td className="px-4 py-2">
                <input
                    type="checkbox"
                    checked={selectedProducts.includes(index)}
                    onChange={() => handleSelectProduct(index)}
                />
                </td>
                <td className="px-4 py-2 text-left">
                <div className="flex items-center gap-4">
                    <Image src={humidifier} width={50} height={50} className="rounded-full" alt="product image"/>
                    <p className="font-bold">{product.name}</p>
                </div>
                </td>
                <td className="px-4 py-2 text-left">{product.id}</td>
                <td className="px-4 py-2 text-left">{product.sold}</td>
                <td className="px-4 py-2 text-left">
                {product.stock}
                </td>
                <td className="px-4 py-2 text-left">
                {product.price}
                </td>
                <td className="px-4 py-2 text-left">
                <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(product.status)}`}
                >
                    {product.status}
                </span>
                </td>
                <td className="px-4 py-2 text-left">
                <div className="flex items-center space-x-2">
                    <Button
                    onClick={() => handleEditClick(index)}
                    className="bg-blue-600 hover:bg-blue-800"
                    >
                    <FaEdit />
                    </Button>
                    <Button
                    onClick={() => handleDeleteProduct(index)}
                    className="bg-red-600 hover:bg-red-800"
                    >
                    <FaTrash />
                    </Button>
                </div>
                </td>
            </tr>
            ))}
        </tbody>
    </table>
  )
}

export default ProductTable