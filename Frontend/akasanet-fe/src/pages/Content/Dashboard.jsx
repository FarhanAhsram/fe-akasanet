import { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/admin/Layout";
import { fetchGetUser } from "@/api/Users/fetchGetUser";
import { fetchGetProduct } from "@/api/Products/fetchGetProduct";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  const getUsers = async () => {
    const usersData = await fetchGetUser();
    setUsers(usersData);
    // console.log(usersData);
  };

  const getProducts = async () => {
    const productsData = await fetchGetProduct();
    setProducts(productsData);
    // console.log(productsData);
  };

  useEffect(() => {
    getUsers();
    getProducts();
  }, []);

  return (
    <>
      <AdminLayout>
        <div className="grid grid-cols-2 items-center gap-4 max-md:grid-cols-1">
          <div className="border rounded-lg bg-[#77E4C8] h-[400px] p-10">
            <div className="flex justify-center items-center mb-20">
              <h1 className="text-6xl font-semibold">Total Users</h1>
            </div>
            <div className="flex justify-center items-center">
              <h1 className="text-9xl">{users.length}</h1>
            </div>
          </div>
          <div className="border rounded-lg bg-[#77E4C8] h-[400px] p-10">
            <div className="flex justify-center items-center mb-20">
              <h1 className="text-6xl font-semibold">Total Products</h1>
            </div>
            <div className="flex justify-center items-center">
              <h1 className="text-9xl">{products.length}</h1>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
