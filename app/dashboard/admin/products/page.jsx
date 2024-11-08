"use client";

import React, { useState } from "react";
import Paggination from "@/app/componenets/dashboard/Paggination";
import Modal from "./Modal";
import Navbar from "@/app/componenets/dashboard/Navbar";
import ProductTable from "@/app/componenets/dashboard/products/ProductTable";
import ProductControl from "@/app/componenets/dashboard/products/ProductControl";


const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
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


  // Pagination logic

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
    <>
      <Navbar />
      <div className="p-4 h-screen overflow-auto">
        <ProductControl />
        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-xl mt-10 mb-10">
          <ProductTable />
        </div>
        {/* modal */}
        {openModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <Modal setOpenModal={setOpenModal} />
          </div>
        )}

        {/* Pagination */}
        <Paggination
          totalPages={totalPages}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default Page;
