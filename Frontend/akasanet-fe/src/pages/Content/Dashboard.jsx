import { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/admin/Layout";
import { fetchGetProduct } from "@/api/Products/fetchGetProduct";

export default function Dashboard() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const productsData = await fetchGetProduct();
    setProducts(productsData);
    // console.log(productsData);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <AdminLayout>
        <div className="grid grid-cols-2 items-center gap-4 max-md:grid-cols-1">
          <div className="border rounded-lg bg-[#77E4C8] h-[300px] p-8">
            <div className="flex justify-center items-center mb-6">
              <h1 className="text-5xl font-semibold">Newest Product</h1>
            </div>
            <div className="flex justify-center items-center">
              <h1 className="text-9xl">{products.length}</h1>
            </div>
          </div>
          <div className="border rounded-lg bg-[#77E4C8] h-[300px] p-10">
            <div className="flex justify-center items-center mb-6">
              <h1 className="text-5xl font-semibold">Total Products</h1>
            </div>
            <div className="flex justify-center items-center">
              <h1 className="text-9xl">{products.length}</h1>
            </div>
          </div>
          <div className="border rounded-lg bg-[#77E4C8] h-[300px] p-10">
            <div className="flex justify-center items-center mb-6">
              <h1 className="text-5xl font-semibold">Active Products</h1>
            </div>
            <div className="flex justify-center items-center">
              <h1 className="text-9xl">
                {products.filter((product) => product.is_active === 1).length}
              </h1>
            </div>
          </div>
          <div className="border rounded-lg bg-[#77E4C8] h-[300px] p-10">
            <div className="flex justify-center items-center mb-6">
              <h1 className="text-5xl font-semibold">Inactive Products</h1>
            </div>
            <div className="flex justify-center items-center">
              <h1 className="text-9xl">
                {products.filter((product) => product.is_active === 0).length}
              </h1>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
