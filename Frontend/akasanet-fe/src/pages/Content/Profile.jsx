import AdminLayout from "../../components/layout/admin/Layout";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { fetchGetUserById } from "@/api/Users/fetchGetUserById";

export default function Profile() {
  const [user, setUser] = useState({});

  const getUserById = async () => {
    const usersData = await fetchGetUserById();
    setUser(usersData);
    // console.log(usersData);
  };

  useEffect(() => {
    getUserById();
  }, []);

  return (
    <>
      <AdminLayout>
        <div className="bg-white border shadow-lg rounded-md p-4">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <div>
                <form action="">
                  <div className="mb-4">
                    <Label>
                      Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-2"
                      value={user.name}
                      readOnly
                    />
                  </div>
                  <div className="mb-4">
                    <Label>
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="email"
                      name="email"
                      className="mt-2"
                      value={user.email}
                      readOnly
                    />
                  </div>
                  <div className="mb-4">
                    <Label>
                      Password <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="password"
                      name="password"
                      className="mt-2"
                      value={user.password}
                      readOnly
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
