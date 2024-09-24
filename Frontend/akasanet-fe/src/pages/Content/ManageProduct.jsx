import { fetchDelProduct } from "@/api/Products/fetchDelProduct";
import { fetchGetProduct } from "@/api/Products/fetchGetProduct";
import AdminLayout from "@/components/layout/admin/Layout";
import AddProduct from "@/components/modal/AddProduct";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function ManageProduct() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);

  const handleModalAdd = () => {
    setIsModalAddOpen(!isModalAddOpen);
  };

  const handleModalEdit = () => {
    setIsModalEditOpen(!isModalEditOpen);
  };

  const handleModalDetail = () => {
    setIsModalDetailOpen(!isModalDetailOpen);
  };

  const handleDeleteProduct = (idProduct) => {
    Swal.fire({
      title: "Delete Product?",
      text: "You cannot change this action again!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        fetchDelProduct(idProduct)
          .then(() => {
            Swal.fire({
              title: "Product Deleted Successfully",
              text: "Product removed from data",
              icon: "success",
              confirmButtonText: "OK",
            });
            getProducts();
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  };

  const getProducts = async () => {
    const productsData = await fetchGetProduct();
    setProducts(productsData);
    setFilteredProducts(productsData);
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.vendor.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    });
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <AdminLayout>
        <div className="flex gap-4 mb-4">
          <Input
            placeholder="Search product by name, vendor, or category..."
            className="border-2 border-[#77E4C8]"
            value={searchQuery}
            onChange={handleSearch}
          />
          <Button variant="primary" onClick={handleModalAdd}>
            Add Products
          </Button>
        </div>
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="rounded-tl-md text-black">No.</TableHead>
              <TableHead className="text-black">Vendor</TableHead>
              <TableHead className="text-black">Name</TableHead>
              <TableHead className="text-black">Category</TableHead>
              <TableHead className="text-black">Qty</TableHead>
              <TableHead className="text-black">isActive</TableHead>
              <TableHead
                colSpan={3}
                className="text-center rounded-tr-md text-black"
              >
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((data, index) => (
                <TableRow key={data.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{data.vendor}</TableCell>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.category}</TableCell>
                  <TableCell>{data.qty}</TableCell>
                  <TableCell>{data.is_active}</TableCell>
                  <TableCell className="">
                    <Eye
                      size={24}
                      className="mx-auto"
                      cursor={"pointer"}
                      onClick={() => handleModalDetail(data)}
                    />
                  </TableCell>
                  <TableCell className="">
                    <Pencil
                      size={24}
                      className="mx-auto"
                      cursor={"pointer"}
                      onClick={() => handleModalEdit(data)}
                    />
                  </TableCell>
                  <TableCell className="">
                    <Trash2
                      size={24}
                      className="mx-auto"
                      cursor={"pointer"}
                      onClick={() => handleDeleteProduct(data.id)}
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={9} className="text-center">
                  No products found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </AdminLayout>

      {isModalAddOpen && (
        <AddProduct handleModalAdd={handleModalAdd} getProducts={getProducts} />
      )}

      {isModalEditOpen && console.log("Hi")}
    </div>
  );
}
