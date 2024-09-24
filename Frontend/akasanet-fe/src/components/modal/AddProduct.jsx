import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { fetchAddProduct } from "@/api/Products/fetchAddProduct";
import Swal from "sweetalert2";
/* eslint-disable react/prop-types */

export default function AddProduct({ handleModalAdd, getProducts }) {
  const [form, setForm] = useState({
    vendor: "",
    name: "",
    category: "",
    qty: "",
    price: "",
    isActive: "",
  });

  const handleCreateProductChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCreateProductSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetchAddProduct(form);
      Swal.fire({
        title: "Product Added Successfully",
        text: "Product stored in data",
        icon: "success",
        showConfirmButton: true,
      });
      getProducts();
      handleModalAdd();
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  return (
    <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-[#22252EAD] opacity-100 z-10">
      <div className="bg-[#FFFFFF] w-1/2 rounded-2xl p-7 max-md:w-3/4">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl">Add Product</h1>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            cursor={"pointer"}
            onClick={handleModalAdd}
          >
            <path
              d="M12.657 1.34333L1.34326 12.657M12.657 12.657L1.34326 1.34326"
              stroke="#26355D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <hr className="border-2 border-[#EDEEEF] my-4" />

        <div>
          <form action="" onSubmit={handleCreateProductSubmit}>
            <div className="mb-4">
              <Label htmlFor="vendor">
                Vendor <span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                id="vendor"
                name="vendor"
                className="mt-2"
                placeholder="Vendor"
                required
                onChange={handleCreateProductChange}
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="name">
                Name <span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                className="mt-2"
                placeholder="Name"
                required
                onChange={handleCreateProductChange}
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="category">
                Category <span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                id="category"
                name="category"
                className="mt-2"
                placeholder="Category"
                required
                onChange={handleCreateProductChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="qty">
                  Qty <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="number"
                  id="qty"
                  name="qty"
                  className="mt-2"
                  placeholder="Qty"
                  required
                  onChange={handleCreateProductChange}
                />
              </div>
              <div>
                <Label htmlFor="price">
                  Price <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="number"
                  id="price"
                  name="price"
                  className="mt-2"
                  placeholder="Price"
                  required
                  onChange={handleCreateProductChange}
                />
              </div>
            </div>
            <div className="mb-4">
              <Label htmlFor="isActive">
                isActive <span className="text-red-500">*</span>
              </Label>
              <Input
                type="number"
                id="isActive"
                name="isActive"
                className="mt-2"
                placeholder="isActive"
                required
                onChange={handleCreateProductChange}
              />
            </div>
            <div className="flex justify-end gap-6">
              <Button variant="ghost" onClick={handleModalAdd}>
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                Add
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
