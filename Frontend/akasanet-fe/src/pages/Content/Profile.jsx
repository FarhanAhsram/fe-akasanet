import AdminLayout from "../../components/layout/admin/Layout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Profile() {
  return (
    <>
      <AdminLayout>
        <div className="bg-white border shadow-lg rounded-md p-4">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-4 flex justify-center items-center">
              <img
                src="../images/Auth1.avif"
                alt="profile"
                className="rounded-full border-4 border-[#77E4C8]"
              />
            </div>
            <div className="col-span-12 lg:col-span-8">
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
                      placeholder="Name"
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
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4">
                    <Label>
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      className="mt-2"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="mb-4">
                    <Label>
                      Profile Picture <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="file"
                      id="profilePictureUrl"
                      name="profilePictureUrl"
                      className="mt-2"
                      placeholder="Profile Picture"
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" variant="primary">
                      Simpan
                    </Button>
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
