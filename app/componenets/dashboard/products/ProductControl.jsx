"use client";
import { BiExport } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { Button } from "@/components/ui/button";
import React, { useState } from 'react'

const ProductControl = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterTerm, setFilterTerm] = useState("");
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [openModal, setOpenModal] = useState(false);

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

    const handleFilter = (e) => setFilterTerm(e.target.value);
    
    const handleBulkDelete = () => {
        const newProducts = products.filter((_, index) => !selectedProducts.includes(index));
        setProducts(newProducts);
        setSelectedProducts([]);
    };

    const handleExportCSV = () => {
        const filteredProducts = products.map(({ name, id, sold, stock, price, status }) => ({
        name, id, sold, stock, price, status,
        }));
        const csv = Papa.unparse(filteredProducts);
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", "products.csv");
        link.click();
    };

    // Pagination logic
    const indexOfLastProduct = currentPage * productsPerPage;

    const filteredProducts = products.filter(
        (product) => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.id.toLowerCase().includes(searchTerm.toLowerCase())
    ).filter(
        (product) => !filterTerm || product.status.toLowerCase() === filterTerm.toLowerCase()
    );

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">Products</h1>
        <div className="flex items-center space-x-4">
        <Button onClick={handleBulkDelete} className="bg-red-600 hover:bg-red-800">
            Delete
        </Button>
        <div className="flex items-center space-x-2">
            <FaFilter className="text-gray-600" />
            <select
            onChange={handleFilter}
            className="p-2 border rounded-md border-gray-300"
            >
            <option value="">All Statuses</option>
            <option value="active">Active</option>
            <option value="onsale">On Sale</option>
            <option value="pending">Pending</option>
            <option value="bouncing">Bouncing</option>
            <option value="inactive">Inactive</option>
            </select>
        </div>
        <button
            onClick={handleExportCSV}
            className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
            <BiExport />
            <p>Export</p>
        </button>
        <button onClick={() => {setOpenModal(prev => !prev)}} className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
            <MdAdd />
            <p>Upload Product</p>
        </button>
        </div>
    </div>
  )
}

export default ProductControl